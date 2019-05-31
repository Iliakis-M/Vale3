"use strict";

import Classes from "../Classes";
import { Message, GuildMember, User } from "discord.js";

export const command = new Classes.Command({
	name: "avatar",
	desc: "Fetch a user's avatar",
	usage: "avatar[ username<String>]",
	exp: /^!ava(tar)?( .+)?$/smi,
	category: "Utility",
	data: { },
	body: async function body(message: Message, vale: Classes.Vale) {
		/**
		 * PROPAGATE:
		 * Channel > Guild > Group(?)
		 * Nickname > Username
		 * 
		 * Can fetch guild/group banner
		 */

		let reply = Classes.failsafe.bind(message);
		
		try {
			let send: string;  //!!move to inner-scope

			if (message.mentions.users.size) {
				message.reply(message.mentions.users.map((usr: User) => usr.avatarURL));
			} else if (message.content.includes(' ')) {
					let targ: string = message.content.split(' ').pop(),
					from = (message.channel["recipients"] || message.channel["members"]);

				if (from) {
					let tmp: { user: { avatarURL: string; }; };

					if (message.guild) {
						tmp = from.find((mmb: GuildMember) => mmb.user.username === targ || mmb.nickname === targ || mmb.id === targ) ||  //user, nick, id
						from.find((mmb: GuildMember) => mmb.nickname.includes(targ) || mmb.user.username.includes(targ)) ||  //substr
						from.find((mmb: GuildMember) => mmb.nickname.toLowerCase().includes(targ.toLowerCase()) || mmb.user.username.toLowerCase().includes(targ.toLowerCase()));  //lower
						
						send = tmp.user.avatarURL;
					} else {
						tmp = from.find((mmb: User) => mmb.username === targ || mmb.id === targ) ||  //user, id
						from.find((mmb: User) => mmb.username.includes(targ)) ||  //substr
						from.find((mmb: User) => mmb.username.toLowerCase().includes(targ.toLowerCase()));  //lower

						send = tmp.user.avatarURL;
					}
				} else {
					send = message.channel["recipient"].avatarURL;
				}

				reply(send);
			} else {
				reply(message.author.avatarURL);
			}
		} catch (err) {
			reply("User not found!");
		}
	}, //body
});

export async function init(vale: Classes.Vale): Promise<Classes.Command> {
	command.usage = vale.opts.config.prefix + command.usage;
	command.exp = new RegExp('^' + vale.opts.config.prefix + "ava(tar)?( .+)?$", "smi");

	return command;
} //init

export default init;
