"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const Classes = module.parent.exports.Classes,
	os = require("os"),
	chalk = require("chalk");

exports.command = new Classes.Command({
	name: "memory",
	desc: "Get memory statistics",
	exp: new RegExp('^' + Classes.Command.prefix + "mem(ory)?$", "sim"),
	usage: eval("'" + Classes.Command.prefix + "'") + "memory",
	_compl: eval("'" + Classes.Command.prefix + "'") + "mem",
	_priority: 5,
	body: function body() {
		let perc = 100 - Math.round(100 * os.freemem() / os.totalmem());
		
		console.log(chalk["rgb"](Math.round(128 + 127 * perc / 100), Math.round(128 + 127 * (1 - perc / 100)), 0)(perc + '%'));
		//@ts-ignore
		return chalk`${Math.round(process.memoryUsage().rss / 1024 / 1024)}MB`;
	},
	parse: function parse(line, panel) {
		return this.body(panel);
	} //parse
});
exports.default = exports.command;
