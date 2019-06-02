"use strict";

import Classes, { chillout } from "../Classes";
import { Message, RichEmbed } from "discord.js";

var wordnet: {
	lookup: (word: string, reply: (err: any, definitions: any) => Promise<void>) => void;
};

try {
	wordnet = require("wordnet");
} catch (err) { }

export const command: Classes.Command = new Classes.Command({
	name: "define",
	desc: "Define a word",
	usage: "define word<String>",
	exp: /^!def(ine)? .+$/si,
	category: "Utility",
	data: { },
	body: async function body(message: Message, vale: Classes.Vale): Promise<void> {
		let reply = Classes.failsafe.bind(message);

		if (wordnet) {
			let word: string;

			wordnet.lookup(word = message.content.split(' ').slice(1).join(' '), async (err, definitions) => {
				if (err) {
					reply(err.message);
				} else {
					let embed: RichEmbed = new RichEmbed();

					embed.setTitle(word)
						.setDescription(`Definition(s) for ${word} [${definitions.length}]:`)
						.setColor("RANDOM")
						.setFooter("Powered by WordNet")
						.setAuthor("Vale3", vale.client.user.displayAvatarURL, "https://github.com/Valen-H/Vale-3")
						.setThumbnail(vale.client.user.avatarURL)
						.setTimestamp()
						.addBlankField(true);

					await chillout.forOf(definitions, (def: { meta: { words: { map: (arg0: (word: { word: string; }) => string) => void; }; synsetType: any; }; glossary: any; }): void => {
						embed.addField(`${def.meta.words.map((word: { word: string; }) => word.word)} [${def.meta.synsetType}]:`, def.glossary, true);
					});

					reply({ embed });
				}
			});
		} else {
			reply("`wordnet` module is missing! /:");
		}
	}, //body
});

export async function init(vale: Classes.Vale): Promise<Classes.Command> {
	command.usage = vale.opts.config.prefix + command.usage;
	command.exp = new RegExp('^' + vale.opts.config.prefix + "def(ine)? .+$", "si");

	return command;
} //init

export default init;


/* SAMPLE OUTPUT - test
[
	{
		meta: {
			synsetOffset: 5799212,
			lexFilenum: 9,
			synsetType: 'noun',
			wordCount: 4,
			words: [
				{
					word: 'trial',
					lexId: 0
				},
			],
			pointerCount: 10,
			pointers: [
				{
					pointerSymbol: '@',
					synsetOffset: 5798043,
					pos: 'n',
					sourceTargetHex: '0000',
					data: [[RECURSES]]
				},
			]
		},
		glossary: 'trying something to find out about it; "a sample for ten days free trial"; "a trial of progesterone failed to relieve the pain"'
	},
]
*/
