"use strict";

import Classes from "../Classes";
import { Message, RichEmbed } from "discord.js";

export const command: Classes.Command = new Classes.Command({
	name: "8ball",
	desc: "Fetch a random answer",
	usage: "8ball[ text<String>]",
	exp: /^!8(ball)?( .+)?$/smi,
	category: "Utility",
	data: {
		cache: new Classes.CacheBank("8ball", undefined, true, false, "https://nekos.life/api/v2/8ball")
	}, 
	body: async function body(message: Message, vale?: Classes.Vale): Promise<void> {
		let repl = Classes.failsafe.bind(message);

		try {
			let reply: string = this.data.cache.get() || await Classes.fetch(command.data.cache.source),
				embed: RichEmbed = new RichEmbed(),
				send = JSON.parse(reply);
			
			Classes.fetch(command.data.cache.source).then((reply: string) => command.data.cache.push(reply));
					
			embed.setImage(send.url)
				.setURL(send.url)
				.setDescription(send.response)
				.setTitle("8-Ball")
				.setColor("RANDOM")
				.setTimestamp();

			repl({ embed });
		} catch (err) {
			repl("External API error, please try again later... https://nekos.life/api/v2/endpoints");
			console.error(err);
		}
	}, //body
});

export async function init(vale: Classes.Vale): Promise<Classes.Command> {
	command.usage = vale.opts.config.prefix + command.usage;
	command.exp = new RegExp('^' + vale.opts.config.prefix + "8(ball)?( .+)?$", "smi");
	Classes.fetch("https://nekos.life/api/v2/8ball").then((reply: string) => command.data.cache.push(reply));

	return command;
} //init

export default init;
