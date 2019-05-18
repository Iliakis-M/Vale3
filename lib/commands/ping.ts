"use strict";

import Classes from "../Classes";
import { Message } from "discord.js";

export const command = new Classes.Command({
	name: "ping",
	desc: "Ping the system to retrieve the heartbeat",
	usage: "ping",
	exp: /^!pings?$/i,
	category: "Utility",
	body: async function body(message: Message, vale: Classes.Vale) {
		if (message.content.endsWith('s')) {
			message.reply("Pong! " + vale.client.pings.join(", ") + " ms");
		} else {
			message.reply("Pong! " + vale.client.ping + "ms");
		}
	}, //body
});

export async function init(vale: Classes.Vale) {
	command.usage = vale.opts.config.prefix + command.usage;
	command.exp = new RegExp('^' + vale.opts.config.prefix + "pings?$", "i");

	return command;
} //init

export default init;
