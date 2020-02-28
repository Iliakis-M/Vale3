"use strict";

import Classes from "../Classes";
import { Message } from "discord.js";

export const command: Classes.Command = new Classes.Command({
	name: "ping",
	desc: "Ping the system to retrieve the heartbeat",
	usage: "ping",
	exp: /^!pings?$/i,
	category: "Utility",
	data: { },
	body: async function body(message: Message, vale: Classes.Vale): Promise<void> {
		let reply = Classes.failsafe.bind(message);

		if (message.content.endsWith('s')) {
			reply("Pongs! " + vale.client.pings.map((ping: number) => Math.round(ping * 100) /100).join(", ") + " ms");
		} else {
			reply("Pong! " + (Math.round(vale.client.ping * 100) / 100) + "ms");
		}
	}, //body
});

export async function init(vale: Classes.Vale): Promise<Classes.Command> {
	command.usage = vale.opts.config.prefix + command.usage;
	command.exp = new RegExp('^' + vale.opts.config.prefix + "pings?$", "i");

	return command;
} //init

export default init;
