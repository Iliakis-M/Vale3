#!/usr/bin/env node
"use strict";

process.title = "Vale-3";


const mod = require("./"),
	chalk = require("chalk"),
	util = require("util");

mod.Vale3.start().then(bot => {
	global["chalk"] = mod.chalk;
	global["bot"] = bot;
	global["mod"] = mod;
	bot.on("log", console.log);
	bot._panel.cli({ input: process.stdin, output: process.stdout });
});

process.on("uncaughtException", err => {
	console.error(chalk["red"](util.inspect(err)));
});
process.on("unhandledRejection", err => {
	console.error(chalk["redBright"](util.inspect(err)));
});
process.once("exit", async code => {
	if (global["bot"] && global["bot"].client) await global["bot"].client.destroy();
});
