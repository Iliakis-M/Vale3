"use strict";

import Classes from "../Classes";
import { Message, RichEmbed } from "discord.js";
import { get } from "https";

export const command = new Classes.Command({
	name: "yomomma",
	desc: "Fetch a joke (external api)",
	usage: "yomomma",
	exp: /^!yo(mm?(o|a)mm?a)?$/i,
	category: "Utility",
	body: async function body(message: Message, vale: Classes.Vale) {
		
		get("https://api.yomomma.info/", (res) => {
			let embed: RichEmbed = new RichEmbed(),
				reply: string = '';
			
			embed.setColor('#' + Math.round(Math.random() * (255 ** 3)).toString(16))
			.setTitle("Yomomma!")
			.setAuthor("Vale3", vale.client.user.displayAvatarURL, "https://github.com/Valen-H/Vale-3")
			.setThumbnail(vale.client.user.avatarURL)
			.setURL("https://yomomma.info/")
			.setTimestamp();
			
			function procceed(override: string = reply) {
				embed.setDescription(JSON.parse(override).joke);
				message.reply({ embed });
			} //procceed
			
			res.on("data", (chunk) => {
				reply += chunk;
			});
			res.once("close", procceed);
		}).once("error", (error) => {
			message.reply("External API error, please try again later... https://yomomma.info/");
		});
	}, //body
});

export async function init(vale: Classes.Vale) {
	command.usage = vale.opts.config.prefix + command.usage;
	command.exp = new RegExp('^' + vale.opts.config.prefix + "yo(mm?(o|a)mm?a)?$", "i");

	return command;
} //init

export default init;
