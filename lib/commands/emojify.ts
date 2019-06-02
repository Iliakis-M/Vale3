"use strict";

import Classes, { chillout } from "../Classes";
import { Message } from "discord.js";

export const command: Classes.Command = new Classes.Command({
	name: "emojify",
	desc: "Emogify your messages with regional_indicators!",
	usage: "!emojify sentence<String>",
	exp: /^!emo?j(ify)? .+$/msi,
	category: "Utility",
	data: { },
	body: async function body(message: Message, vale?: Classes.Vale): Promise<void> {
		let letters = message.content.split(' ').slice(1).join(' ').split(''),
			out: string = '',
			reply = Classes.failsafe.bind(message);

		await chillout.forEach(letters, (letter: string): void => {
			if (/^[a-z]$/i.test(letter)) {
				out += `:regional_indicator_${letter.toLowerCase()}:`;
			} else if (/^\d$/.test(letter)) {
				switch (Number(letter)) {
					case 0:
						out += ":zero:";
						break;
					case 1:
						out += ":one:";
						break;
					case 2:
						out += ":two:";
						break;
					case 3:
						out += ":three:";
						break;
					case 4:
						out += ":four:";
						break;
					case 5:
						out += ":five:";
						break;
					case 6:
						out += ":six:";
						break;
					case 7:
						out += ":seven:";
						break;
					case 8:
						out += ":eight:";
						break;
					case 9:
						out += ":nine:";
						break;
				}
			} else if (letter === '!') {
				out += ":exclamation:";
			} else if (letter === '?') {
				out += ":question:";
			} else if (letter === '#') {
				out += ":hash:";
			} else if (letter === '*') {
				out += ":asterisk:";
			} else {
				out += letter;
			}
		});

		reply(out);
	}, //body
});

export async function init(vale: Classes.Vale): Promise<Classes.Command> {
	command.usage = vale.opts.config.prefix + command.usage;
	command.exp = new RegExp('^' + vale.opts.config.prefix + "emo?j(ify)? .+$", "msi");

	return command;
} //init

export default init;
