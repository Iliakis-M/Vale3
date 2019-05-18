"use strict";

import Classes from "../Classes";
import { Message } from "discord.js";
import { get } from "https";

export const command = new Classes.Command({
	name: "cat",
	desc: "Fetch a cat emote :3",
	usage: "cat",
	exp: /^!cat$/i,
	category: "Utility",
	data: { 
		bank: new Classes.CacheBank("Cat")
	},
	body: async function body(message: Message, vale: Classes.Vale) {
		get("https://nekos.life/api/v2/cat", (res) => {
			let reply: string = '';

			function procceed() {
				try {
					let send = JSON.parse(reply);

					message.reply(send.cat);
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
	command.exp = new RegExp('^' + vale.opts.config.prefix + "cat$", "i");

	return command;
} //init

export default init;
