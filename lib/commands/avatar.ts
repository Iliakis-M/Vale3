"use strict";

import Classes, { chillout } from "../Classes";
import { Message, GuildMember, User, GuildChannel, TextChannel, GroupDMChannel, DMChannel, Emoji, Collection, Snowflake } from "discord.js";

export const command = new Classes.Command({
	name: "avatar",
	desc: "Fetch a user's avatar",
	usage: "avatar[ username<String>]",
	exp: /^!ava(tar)?( .+)?$/smi,
	category: "Utility",
	data: { },
	body: async function body(message: Message, vale: Classes.Vale): Promise<void> {
		/**
		 * PROPAGATE:
		 * 
		 * Channel > Guild > Group
		 * Nickname > Username > ID
		 * Emoji > Banner(?)
		 */
		
		async function parse(message: Message): Promise<string[]> {
			let txt: string = message.content.split(' ').slice(1).join(' ');

			function mentions(): string[] {
				if (message.mentions) {
					return message.mentions.users.map((usr: User): string => usr.avatarURL);
				}

				return [ ];
			} //mentions

			async function emojis(): Promise<string[]> {
				let reg: RegExp = /<:.+?:(\d+?)>/gui,
					matches: RegExpMatchArray = txt.match(reg);

				if (matches && matches.length) {
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
				let mmbs: GuildMember[] = message.channel.members.array().sort((mmb1: GuildMember, mmb2: GuildMember): number => (mmb1.nickname || '').length - (mmb2.nickname || '').length),
					tmp: GuildMember = mmbs.find((mmb: GuildMember): boolean => (mmb.nickname || mmb.user.username).toLowerCase().includes(txt.toLowerCase()));
				
				if (tmp) {
					rets.push(tmp.user.avatarURL);
				} else {
					mmbs = mmbs.sort((mmb1: GuildMember, mmb2: GuildMember): number => mmb1.user.username.length - mmb2.user.username.length);
					tmp = mmbs.find((mmb: GuildMember): boolean => mmb.user.username.toLowerCase().includes(txt.toLowerCase()));
					
					if (tmp) {
						rets.push(tmp.user.avatarURL);
					} else {
						tmp = mmbs.find((mmb: GuildMember): boolean => mmb.id.toLowerCase().includes(txt.toLowerCase()));

						if (tmp) rets.push(tmp.user.avatarURL);
					}
				}
			} else if (message.channel instanceof GroupDMChannel) {
				let tmp: User = message.channel.recipients.array().sort((usr1: User, usr2: User): number => (usr1.username || '').length - (usr2.username || '').length).find((usr: User): boolean => usr.id.includes(txt) || usr.username.toLowerCase().includes(txt.toLowerCase()));

				if (tmp) rets.push(tmp.avatarURL);
			} else if (message.channel instanceof DMChannel) {
				let tmp = [message.channel.recipient, message.author].find((usr: User): boolean => usr.username.toLowerCase().includes(txt.toLowerCase()) || usr.id.includes(txt));

				if (tmp) rets.push(tmp.avatarURL);
			}

			let tmp: Emoji;

			if (rets.length === 0 && (tmp = vale.client.emojis.find((emj: Emoji): boolean => emj.name.toLowerCase().includes(txt.toLowerCase()))) !== null) {
				rets.push(tmp.url);
			}
			if (rets.length === 0) throw "ENOTFOUND";

			return rets;
		} //parse


		let reply = Classes.failsafe.bind(message);
		
		try {
			
			if (message.content.includes(' ')) {
				reply((await parse(message)).join('\n'));
			} else {
				reply(message.author.avatarURL);
			}
		} catch (err) {
			if (message.guild) {
				reply("User not found!\n" + (message.guild.iconURL || message.guild.icon || ''));
			} else if (message.channel instanceof GroupDMChannel) {
				reply("User not found!\n" + (message.channel.icon || ''));
			} else {
				reply("User not found!\n");
			}
		}
	}, //body
});

export async function init(vale: Classes.Vale): Promise<Classes.Command> {
	command.usage = vale.opts.config.prefix + command.usage;
	command.exp = new RegExp('^' + vale.opts.config.prefix + "ava(tar)?( .+)?$", "smi");

	return command;
} //init

export default init;
