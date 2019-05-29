"use strict";

import Classes from "../Classes";
import { Message, RichEmbed } from "discord.js";

export const command = new Classes.Command({
	name: "color",
	desc: "Get a specific color or a random one",
	usage: "color[ hex<String>]",
	exp: /^!co?l(o?r)?( .+)?$/i,
	category: "Utility",
	data: { },
	body: async function body(message: Message, vale?: Classes.Vale) {
		let embed: RichEmbed = new RichEmbed(),
			reply = Classes.failsafe.bind(message);
		
		embed.addBlankField();

		if (message.content.includes(' ')) {
			embed.setColor(message.content.split(' ').slice(1).join(' ').toUpperCase());
		} else {
			embed.setColor("RANDOM");
		}

		embed.setTitle(embed.color);

		reply({ embed });
	}, //body
});

export async function init(vale: Classes.Vale) {
	command.usage = vale.opts.config.prefix + command.usage;
	command.exp = new RegExp('^' + vale.opts.config.prefix + "co?l(o?r)?( .+)?$", "i");

	return command;
} //init

export default init;
