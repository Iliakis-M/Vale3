"use strict";

import Classes from "../Classes";
import { Message } from "discord.js";

export const command: Classes.Command = new Classes.Command({
	name: "chat",
	desc: "Chat with me! :3",
	usage: "chat",
	exp: /^!chat( .*)?$/msi,
	category: "Utility",
	data: { },
	body: async function body(message: Message, vale?: Classes.Vale): Promise<void> {
		let repl = Classes.failsafe.bind(message);

		try {
			let reply: string = await Classes.fetch("https://nekos.life/api/v2/chat?text=" + message.content.split(' ').slice(1).join(' '));

			repl(JSON.parse(reply).response.replace(/<\d+>/g, ''));
		} catch (err) {
			repl("External API error, please try again later... https://nekos.life/api/v2/endpoints");
			console.error(err);
		}
	}, //body
});

export async function init(vale: Classes.Vale): Promise<Classes.Command> {
	command.usage = vale.opts.config.prefix + command.usage;
	command.exp = new RegExp('^' + vale.opts.config.prefix + "chat( .*)?$", "msi");

	return command;
} //init

export default init;
