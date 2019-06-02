"use strict";

import Classes from "../Classes";
import { Message } from "discord.js";

export const command: Classes.Command = new Classes.Command({
	name: "cat",
	desc: "Fetch a cat emote :3",
	usage: "cat",
	exp: /^!(cat|neko)$/i,
	category: "Utility",
	data: { 
		cache: new Classes.CacheBank("cat", null, true, false)
	},
	body: async function body(message: Message, vale?: Classes.Vale): Promise<void> {
		let repl = Classes.failsafe.bind(message);

		try {
			let reply: string = this.data.cache.get() || await Classes.fetch("https://nekos.life/api/v2/cat");

			Classes.fetch("https://nekos.life/api/v2/cat").then((reply: string) => command.data.cache.push(reply));

			repl(JSON.parse(reply).cat);
		} catch (err) {
			repl("External API error, please try again later... https://nekos.life/api/v2/endpoints");
			console.error(err);
		}
	}, //body
});

export async function init(vale: Classes.Vale): Promise<Classes.Command> {
	command.usage = vale.opts.config.prefix + command.usage;
	command.exp = new RegExp('^' + vale.opts.config.prefix + "(cat|neko)$", "i");
	Classes.fetch("https://nekos.life/api/v2/cat").then((reply: string) => command.data.cache.push(reply));

	return command;
} //init

export default init;
