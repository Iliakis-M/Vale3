"use strict";

import Classes from "../Classes";
import { Message } from "discord.js";

export const command: Classes.Command = new Classes.Command({
	name: "fact",
	desc: "Learn an interesting fact",
	usage: "fact",
	exp: /^!fact$/i,
	category: "Utility",
	data: {
		cache: new Classes.CacheBank("fact", undefined, true, false, "https://nekos.life/api/v2/fact")
	},
	body: async function body(message: Message, vale?: Classes.Vale) {
		let repl = Classes.failsafe.bind(message);

		try {
			let reply: string = this.data.cache.get() || await Classes.fetch(command.data.cache.source);

			Classes.fetch(command.data.cache.source).then((reply: string) => command.data.cache.push(reply));

			repl(decodeURIComponent(JSON.parse(reply).fact));
		} catch (err) {
			repl("External API error, please try again later... https://nekos.life/api/v2/endpoints");
			console.error(err);
		}
	}, //body
});

export async function init(vale: Classes.Vale): Promise<Classes.Command> {
	command.usage = vale.opts.config.prefix + command.usage;
	command.exp = new RegExp('^' + vale.opts.config.prefix + "fact$", "i");
	Classes.fetch(command.data.cache.source).then((reply: string) => command.data.cache.push(reply));

	return command;
} //init

export default init;
