"use strict";

import Classes from "../Classes";
import { Message } from "discord.js";

export const command: Classes.Command = new Classes.Command({
	name: "owoify",
	desc: "Make youw text cute ^w^",
	usage: "owoify text<String>",
	exp: /^!owo(ify)? .+$/msi,
	category: "Utility",
	data: { },
	body: async function body(message: Message, vale?: Classes.Vale) {
		let reply = Classes.failsafe.bind(message);

		try {
			message.channel.startTyping();

			let owo: string = JSON.parse(await Classes.fetch("https://nekos.life/api/v2/owoify?text=" + encodeURIComponent(message.content.split(' ').slice(1).join(' ')))).owo;

			reply(owo, {
				split: true
			}).then(() => message.channel.stopTyping());
		} catch (err) {
			reply("External API error, please try again later... https://nekos.life/api/v2/endpoints");
			console.error(err);
		}
	}, //body
});

export async function init(vale: Classes.Vale): Promise<Classes.Command> {
	command.usage = vale.opts.config.prefix + command.usage;
	command.exp = new RegExp('^' + vale.opts.config.prefix + "owo(ify)? .+$", "msi");

	return command;
} //init

export default init;
