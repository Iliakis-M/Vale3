"use strict";

import Classes from "../Classes";
import { Message, RichEmbed } from "discord.js";

export const command = new Classes.Command({
	name: "color",
	desc: "Get a specific color or a random one",
	usage: "color[ hex<String>]",
	exp: /^!col(or)?( .+)?$/i,
	category: "Utility",
	body: async function body(message: Message, vale: Classes.Vale) {
		let embed: RichEmbed = new RichEmbed();
		embed.addBlankField();
		if (message.content.includes(' ')) {
			embed.setColor(message.content.split(' ').slice(1).join(' '));
		} else {
			embed.setColor('#' + Math.round(Math.random() * (255 ** 3)).toString(16));
		}
		message.reply({ embed });
	}, //body
});

export async function init(vale: Classes.Vale) {
	command.usage = vale.opts.config.prefix + command.usage;
	command.exp = new RegExp('^' + vale.opts.config.prefix + "col(or)?( .+)?$", "i");

	return command;
} //init

export default init;
