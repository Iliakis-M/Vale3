"use strict";

import Classes, { chillout } from "../Classes";
import { Message, RichEmbed } from "discord.js";

export const command: Classes.Command = new Classes.Command({
	name: "urban",
	desc: "Fetch a slang definition",
	usage: "urban word<String>",
	exp: /^!urb(an)? .+$/msi,
	category: "Utility",
	data: { },
	body: async function body(message: Message, vale: Classes.Vale): Promise<void> {
		let reply = Classes.failsafe.bind(message);

		try {
			message.channel.startTyping();

			let word: string,
				definitions = JSON.parse(await Classes.fetch("https://api.urbandictionary.com/v0/define?term=" + (word = encodeURIComponent(message.content.split(' ').slice(1).join(' '))))),
				embed = new RichEmbed();

			embed.setTitle(word)
				.setDescription(`Definition(s) for ${word} [${definitions.list.length}]:`)
				.setColor("RANDOM")
				.setFooter("Powered by UrbanDict")
				.setAuthor("Vale3", vale.client.user.displayAvatarURL, "https://github.com/Valen-H/Vale-3")
				.setThumbnail(vale.client.user.avatarURL)
				.setTimestamp()
				.setURL("https://www.urbandictionary.com/define.php?term=" + word);
			
			if (definitions.list) {
				await chillout.forEach(definitions.list, (entry: { word: any; definition: any; author: any; thumbs_up: any; thumbs_down: any; example: any; }) => {
					embed.addField(entry.word, `**${entry.definition}** [[By: *${entry.author}*, ${entry.thumbs_up}:thumbsup: ${entry.thumbs_down}:thumbsdown:]]\n- ${entry.example}`);
				});
			}
			
			reply({ embed }).then(() => message.channel.stopTyping());
		} catch (err) {
			reply("External API error, please try again later... https://www.urbandictionary.com/define.php?term=" + message.content.split(' ').slice(1).join(' '));
			console.error(err);
		}
	}, //body
});

export async function init(vale: Classes.Vale): Promise<Classes.Command> {
	command.usage = vale.opts.config.prefix + command.usage;
	command.exp = new RegExp('^' + vale.opts.config.prefix + "urb(an)? .+$", "msi");

	return command;
} //init

export default init;

/*for: test
{
  list: [
	{
	  definition: '1. the main cause of [explosions].\r' +
		'\n2. any thing [dreaded] that your "teachers" say is "good" ' +
		'for you. soon after, you explode for no reason.\r' +
		'\n3. what scientists do to make stuff explode.\r' +
		'\n4. when a sheet of paper explodes into [flames].',
	  permalink: 'http://test.urbanup.com/1876232',
	  thumbs_up: 142,
	  sound_urls: [],
	  author: 'monn-unit',
>
	  defid: 1876232,
	  current_vote: '',
	  written_on: '2006-07-22T00:00:00.000Z',
	  example: '1. test [sodium] and water.\r' +
		'\n2. SAT is a test.\r' +
		'\n3. [Monkeys].\r' +
		'\n4. you brought your [lighter] to test.',
	  thumbs_down: 40
	},
	{
	  definition: 'Everything that is [put in] [front] of you during any given [day]. ',
	  permalink: 'http://test.urbanup.com/2081307',
	  thumbs_up: 53,
	  sound_urls: [],
	  author: 'VICKI KARMA',
	  word: 'TEST',
	  defid: 2081307,
	  current_vote: '',
	  written_on: '2006-11-10T00:00:00.000Z',
	  example: 'How was your day?\r' +
		'\n[Testing]!...but i did well at not [passing] every ' +
		'test!...Hope i get a [better run] tomorrow. ',
	  thumbs_down: 17
	},
  ]
}
*/
