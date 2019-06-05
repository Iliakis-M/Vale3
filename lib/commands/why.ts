"use strict";

import Classes from "../Classes";
import { Message } from "discord.js";

export const command: Classes.Command = new Classes.Command({
	name: "why",
	desc: "Just... Why?...",
	usage: "!why",
	exp: /^!why$/i,
	category: "Utility",
	data: {
		cache: new Classes.CacheBank("why", undefined, true, false, "https://nekos.life/api/v2/why")
	},
	body: async function body(message: Message, vale: Classes.Vale) {
		let reply = Classes.failsafe.bind(message);

		try {
			let repl: string = this.data.cache.get() || await Classes.fetch(command.data.cache.source);
		
			Classes.fetch(command.data.cache.source).then((reply: string) => command.data.cache.push(reply));

			reply(decodeURIComponent(JSON.parse(repl).why));
		} catch (err) {
			reply("External API error, please try again later... https://nekos.life/api/v2/endpoints");
			console.error(err);
		}
	}, //body
});

export async function init(vale: Classes.Vale): Promise<Classes.Command> {
	command.usage = vale.opts.config.prefix + command.usage;
	command.exp = new RegExp('^' + vale.opts.config.prefix + "why$", "i");

	Classes.fetch("https://nekos.life/api/v2/why").then((reply: string) => command.data.cache.push(reply));

	return command;
} //init

export default init;
