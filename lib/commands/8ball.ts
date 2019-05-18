"use strict";

import Classes from "../Classes";
import { Message, RichEmbed } from "discord.js";
import { get } from "https";

export const command = new Classes.Command({
	name: "8ball",
	desc: "Fetch a random answer",
	usage: "8ball[ text<String>]",
	exp: /^!8(ball)?( .+)?$/smi,
	category: "Utility",
	body: async function body(message: Message, vale: Classes.Vale) {
		get("https://nekos.life/api/v2/8ball", (res) => {
			let reply: string = '';
			
			function procceed() {
				try {
					let send = JSON.parse(reply),
						embed = new RichEmbed();
					
					embed.setImage(send.url)
					.setURL(send.url)
					.setDescription(send.response)
					.setTitle("8-Ball")
					.setColor('#' + Math.round(Math.random() * (255 ** 3)).toString(16))
					.setTimestamp();

					message.reply({ embed });
				} catch (err) {
					message.reply("External API error, please try again later... https://nekos.life/api/v2/endpoints");
				}
			} //procceed

			res.on("data", (chunk) => {
				reply += chunk;
			});
			res.once("close", procceed);
		}).once("error", (error) => {
			message.reply("External API error, please try again later... https://nekos.life/api/v2/endpoints");
		});
	}, //body
});

export async function init(vale: Classes.Vale) {
	command.usage = vale.opts.config.prefix + command.usage;
	command.exp = new RegExp('^' + vale.opts.config.prefix + "8(ball)?( .+)?$", "smi");

	return command;
} //init

export default init;
