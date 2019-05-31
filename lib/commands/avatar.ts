"use strict";

import Classes, { chillout } from "../Classes";
import { Message, GuildMember, User, GuildChannel, TextChannel, GroupDMChannel, DMChannel, Emoji } from "discord.js";

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

		
		async function parse(message: Message): Promise<string[]> {
			//Does not allow batched mentions
			//mentions > emojis > username > nickname(?) > id [users, emojis], guild/group icon?
			//fetch emojis by name(?)

			let txt: string = message.content.split(' ').slice(1).join(' ');

			function mentions() {
				if (message.mentions) {
					return message.mentions.users.map((usr: User): string => usr.avatarURL);
				}

				return [ ];
			} //mentions

			async function emojis(): Promise<string[]> {
				let reg: RegExp = /<:.+?:(\d+?)>/gui,
					matches: RegExpMatchArray = txt.match(reg);

				if (matches.length) {
					let rets = [ ];

					matches = matches.map((match) => match.replace(reg, "$1"));

					await chillout.forEach(matches, (match: string): void => {
						if (vale.client.emojis.has(match)) rets.push(vale.client.emojis.get(match).url);
					});

					return rets;
				}

				return [ ];
			} //emojis

			let rets = mentions().concat(await emojis());

			if (rets.length) return rets;

			if (message.channel instanceof TextChannel) {
				let tmp: GuildMember = message.channel.members.find((mmb: GuildMember): boolean => mmb.user.username.toLowerCase() === txt.toLowerCase() || mmb.id == txt || mmb.nickname.toLowerCase().includes(txt.toLowerCase()));

				if (tmp) rets.push(tmp.user.avatarURL);
			} else if (message.channel instanceof GroupDMChannel) {
				let tmp: User = message.channel.recipients.find((usr: User): boolean => usr.id == txt || usr.username.toLowerCase().includes(txt.toLowerCase()));

				if (tmp) rets.push(tmp.avatarURL);
			} else if (message.channel instanceof DMChannel) {
				let tmp = [message.channel.recipient, message.author].find((usr: User): boolean => usr.username.toLowerCase().includes(txt.toLowerCase()) || usr.id == txt);

				if (tmp) rets.push(tmp.avatarURL);
			}

			if (rets.length === 0) throw "ENOTFOUND";

			return rets;
		} //parse


		let reply = Classes.failsafe.bind(message);
		
		try {
			
			if (message.content.includes(' ')) {
				let send: string,
					targ: string = message.content.split(' ').pop(),
					from = (message.channel["recipients"] || message.channel["members"]);
				
				send = (await parse(message)).join('\n');

				/*if (from) {  //pluriel system
					let tmp: { user: { avatarURL: string; }; };

					if (message.guild) {
						tmp = from.find((mmb: GuildMember): boolean => mmb.user.username === targ || mmb.nickname === targ || mmb.id === targ) ||  //user, nick, id
							from.find((mmb: GuildMember): boolean => mmb.nickname.includes(targ) || mmb.user.username.includes(targ)) ||  //substr
							from.find((mmb: GuildMember): boolean => mmb.nickname.toLowerCase().includes(targ.toLowerCase()) || mmb.user.username.toLowerCase().includes(targ.toLowerCase()));  //lower
						
						send = tmp.user.avatarURL;
					} else {
						tmp = from.find((mmb: User): boolean => mmb.username === targ || mmb.id === targ) ||  //user, id
							from.find((mmb: User): boolean => mmb.username.includes(targ)) ||  //substr
							from.find((mmb: User): boolean => mmb.username.toLowerCase().includes(targ.toLowerCase()));  //lower

						send = tmp.user.avatarURL;
					}
				} else {  //emoji case?
					send = message.channel["recipient"].avatarURL;
				}*/

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
