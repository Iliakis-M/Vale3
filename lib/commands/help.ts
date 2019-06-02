"use strict";

import Classes, { chillout } from "../Classes";
import { Message, RichEmbed, OAuth2Application } from "discord.js";

//Perhaps combine all occurence-searches in one and split general help screen to code block?

export const command: Classes.Command = new Classes.Command({
	name: "help",
	desc: "Get usage help for a command",
	usage: "help[ command<String>]",
	category: "Utility",
	exp: /^!he?lp( .+)?$/smi,
	data: { },
	body: async function body(message: Message, vale: Classes.Vale): Promise<void> {
		let reg = message.content.split(' ').slice(1).join(' '),
			app: OAuth2Application,
			reply = Classes.failsafe.bind(message);
		
		if (vale.client.user.bot) {
			app = await vale.client.fetchApplication();
		} else {
			//@ts-ignore
			app = <OAuth2Application>{
				createdAt: new Date(),
				createdTimestamp: Date.now(),
				botRequireCodeGrant: false,
				botPublic: false,
				description: "A bot made in discord.js",
				name: "Vale",
				owner: vale.client.user,
				iconURL: vale.client.user.avatarURL,
				icon: vale.client.user.avatar
			};
		}
		
		chillout.forEach((message.content.includes(' ') ? Array.from(vale.commands.values()).filter((cmd: Classes.Command) => cmd.name.includes(reg)) : Array.from(vale.commands.values())).filter((cmd: Classes.Command) => !(message.author.id !== app.owner.id && cmd.category === "Owner")), (cmd: Classes.Command): void => {
			let embed: RichEmbed = new RichEmbed();

			embed.setColor("RANDOM")
			.setAuthor("Vale3", vale.client.user.displayAvatarURL, `https://discordapp.com/users/${app.owner.id}`)
			.setThumbnail(vale.client.user.avatarURL)
			.setURL("https://github.com/Valen-H/Vale-3")
			.setFooter(`Made by ${app.owner.tag}, with love! ^_^`, app.owner.displayAvatarURL)
			.setTimestamp()

			.setTitle("Help")
			//embed.setImage(vale.client.user.avatarURL); //TOO BIG
			.setDescription(cmd.name)
			.addField("Usage", cmd.usage)
			.addField("Description", cmd.desc)
			.addField("Category", cmd.category);

			reply({
				split: true,
				code: "js",
				embed
			});
		});
	}, //body
});

export async function init(vale: Classes.Vale): Promise<Classes.Command> {
	command.usage = vale.opts.config.prefix + command.usage;
	command.exp = new RegExp('^' + vale.opts.config.prefix + "he?lp( .+)?$", "smi");

	return command;
} //init

export default init;
