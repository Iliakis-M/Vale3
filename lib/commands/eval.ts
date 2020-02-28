"use strict";

import Classes from "../Classes";
import { Message, OAuth2Application } from "discord.js";
import { inspect } from "util";

export const command: Classes.Command = new Classes.Command({
	name: "eval",
	desc: "Evaluate a JavaScript expression",
	usage: "eval[ code<JS>]",
	exp: /^!e(val)?( |\n).+$/smi,
	category: "Owner",
	data: { },
	body: async function body(message: Message, vale: Classes.Vale): Promise<void> {
		let app: OAuth2Application,
			reply = Classes.failsafe.bind(message);

		if (vale.client.user.bot) {
			app = await vale.client.fetchApplication();
		} else {
			//@ts-ignore
			app = <OAuth2Application>{
				createdAt: new Date(),
				createdTimestamp: Date.now(),
				botRequireCodeGrant: false,
				botPublic: false,
				description: "A bot made in discord.js",
				name: "Vale",
				owner: vale.client.user,
				iconURL: vale.client.user.avatarURL,
				icon: vale.client.user.avatar
			};
		}

		if (message.author.id === app.owner.id) {
			try {
				message.channel.send(inspect(await eval(message.content.split(' ').slice(1).join(' '))), {
					split: true,
					code: "javascript"
				});
			} catch (error) {
				message.channel.send(error.message, {
					split: true,
					code: "javascript"
				});
			}
		} else {
			reply("**You are not allowed to use this command!**");
		}
	}, //body
});

export async function init(vale: Classes.Vale): Promise<Classes.Command> {
	command.usage = vale.opts.config.prefix + command.usage;
	command.exp = new RegExp('^' + vale.opts.config.prefix + "e(val)?( |\n).+$", "smi");

	return command;
} //init

export default init;
