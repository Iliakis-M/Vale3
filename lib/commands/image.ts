"use strict";

import Classes, { chillout } from "../Classes";
import { Message, TextChannel, RichEmbed } from "discord.js";

export const command: Classes.Command = new Classes.Command({
	name: "image",
	desc: "Fetch a... (possibly) NSFW image... 0_0'",
	usage: "image class<String>",
	exp: /^!ima?ge?( .+)?$/msi,
	category: "Utility",
	data: {
		cache: new Classes.NamedCacheBank("image", undefined, "https://nekos.life/api/v2/img/"),
		classes: [
			"femdom", "tickle", "classic", "ngif", "erofeet", "meow", "erok", "poke", "les", "hololewd", "lewdk", "keta", "feetg", "nsfw_neko_gif", "eroyuri", "kiss", "kuni", "tits", "pussy_jpg", "cum_jpg", "pussy", "lewdkemo", "lizard", "slap", "lewd", "cum", "cuddle", "spank", "smallboobs", "goose", "Random_hentai_gif", "avatar", "fox_girl", "nsfw_avatar", "hug", "gecg", "boobs", "pat", "feet", "smug", "kemonomimi", "solog", "holo", "wallpaper", "bj", "woof", "yuri", "trap", "anal", "baka", "blowjob", "holoero", "feed", "neko", "gasm", "hentai", "futanari", "ero", "solo", "waifu", "pwankg", "eron", "erokemo"
		],
		nsfw: [
			"femdom", "classic", "erofeet", "erok", "les", "hololewd", "lewdk", "keta", "feetg", "nsfw_neko_gif", "eroyuri", "kiss", "kuni", "tits", "pussy_jpg", "cum_jpg", "pussy", "lewdkemo", "lewd", "cum", "spank", "smallboobs", "Random_hentai_gif", "fox_girl", "nsfw_avatar", "boobs", "feet", "solog", "bj", "yuri", "trap", "anal", "blowjob", "holoero", "gasm", "hentai", "futanari", "ero", "solo", "pwankg", "eron", "erokemo"
		]
	},
	body: async function body(message: Message, vale: Classes.Vale) {
		let parts: string[] = message.content.split(' '),
			reply = Classes.failsafe.bind(message);

		if (parts.length > 1) {
			let query: string = parts.slice(1).join('_');

			if (command.data.classes.includes(query)) {
				async function proceed(): Promise<void> {
					let str: string;

					try {
						str = command.data.cache.get(query).get();
					} catch (err) {
						str = await Classes.fetch(command.data.cache.source + query);
					}

					command.data.cache.retrieve(query);

					str = JSON.parse(str).url;

					reply(str);
				} //proceed

				if ((message.channel instanceof TextChannel) && command.data.nsfw.includes(query)) {
					if (message.channel.nsfw) {
						proceed();
					} else {
						reply("This category cannot be viewed used outside of NSFW channels. /:");
					}
				} else {
					proceed();
				}
			} else {
				reply("This category does not exist. /:");
			}
		} else {
			let embed: RichEmbed = new RichEmbed(),
				cat: string[];

			embed.setTitle("Image")
				.setDescription("Help")
				.setColor("RANDOM")
				.setFooter("Powered by nekos.life")
				.setAuthor("Vale3", vale.client.user.displayAvatarURL, "https://github.com/Valen-H/Vale-3")
				.setThumbnail(vale.client.user.avatarURL)
				.setTimestamp()
				.addBlankField(true)
				.setURL("https://nekos.life/api/v2/endpoints");

			if (message.channel instanceof TextChannel) {
				if (message.channel.nsfw) {
					cat = command.data.classes;
				} else {
					cat = command.data.classes.filter((cls: string): boolean => command.data.nsfw.includes(cls) == false);
				}
			} else {
				cat = command.data.classes;
			}

			embed.addField("Categories:", cat.join(", "));

			reply({ embed });
		}
	}, //body
});

export async function init(vale: Classes.Vale): Promise<Classes.Command> {
	command.usage = vale.opts.config.prefix + command.usage;
	command.exp = new RegExp('^' + vale.opts.config.prefix + "ima?ge?( .+)?$", "msi");

	command.data.cache.retrieve = async function retrieve(query: string): Promise<string> {
		let str = await Classes.fetch(this.source + query);
		this.get(query).push(str);
		return str;
	}; //retrieve

	await chillout.forEach(command.data.classes, (cls: string): void => {
		command.data.cache.new_cache(cls, null, true, false);
	});

	return command;
} //init

export default init;
