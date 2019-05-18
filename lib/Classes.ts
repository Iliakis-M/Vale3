"use strict";

import Vale3 from "./vale3";
import * as Discord from "discord.js";
import * as adm_panel from "adm-panel2";
import * as fs from "fs-extra";
import * as path from "path";
import { EventEmitter } from "events";
import { EOL } from "os";
import { inspect } from "util";
export const chalk = require("chalk");

export var stripAnsi;

try {
	stripAnsi = require("strip-ansi");
} catch (opt) {
	stripAnsi = c => c;
}


/**
 * VAL-1: TO BE USED BOTH WITH USER AND BOTS ACCOUNTS
 */


export module Classes {

	export namespace Options {

		export interface ValeOpts {

			token?: string;
			config?;
			custconfig?;

		} //ValeOpts

		export interface CommandOpts {

			name: string;
			exp: RegExp;
			desc: string;
			usage: string;
			/**
			 * Utility, Owner
			 * 
			 * @type {string}
			 * @memberof CommandOpts
			 */
			category: string;
			data?: any;
			body?: (message: Discord.Message, vale: Vale) => Promise<any>;
			_remove?: (vale?: Vale) => Promise<any>;

		} //CommandOpts

		export interface CacheBankOpts {

			size: number;
			cache: CacheEntry[];
			name?: string;
			autopurge?: boolean;

		} //CacheBankOpts

	} //Options


	export namespace Errors {

		export const EBADSZ = new RangeError("Bad Size.");

	} //Errors


	type CacheEntry = {
		timestamp: number;
		entry: any
	}


	export class Vale extends EventEmitter {

		opts: Options.ValeOpts;
		client: Discord.Client;
		whook: Discord.Webhook;
		_debuglog: string;
		_panel: adm_panel.Classes.Panel;
		commands: Map<string, Command> = new Map();

		static defaultOpts: Options.ValeOpts = {
			token: '',
			config: {
				prefix: '!',
				cust: "cust.config.json",
				client: {
					messageCacheLifetime: 1800,
					disableEveryone: true
				}
			},
			custconfig: { }
		};

		constructor(opts: Options.ValeOpts = Vale.defaultOpts) {
			super();

			let nopts: Options.ValeOpts = <Options.ValeOpts>{ };
			Object.assign(nopts, Vale.defaultOpts);
			Object.assign(nopts, opts);
			this.opts = nopts;

			this.client = new Discord.Client(opts.config.client);
		} //ctor

		start() {
			Vale3.setup(this);
			this.client.login(this.opts.token);  //!destroy()
			return this;
		} //start

		async command(message: Discord.Message) {
			try {
				let found = Array.from(this.commands.values()).find((cmd: Command) => cmd.exp.test(message.content));

				if (found) {
					//@ts-ignore
					this._debug(chalk.keyword("orange").dim(message.author.tag + " (" + message.channel.name + "  -  [ " + message.guild.name + " ] )") + ":", chalk.yellow(message.content), "---", chalk.grey.dim(Date()));
					//@ts-ignore
					if (this.whook) this.whook.send("```" + message.author.tag + " (" + message.channel.name + "  -  [ " + message.guild.name + " ] ): " + message.content + "  ---  " + Date() + "```");
					return await found.body(message, this);
				}
			} catch (err) {
				return this._debug(chalk.red(inspect(err)));
			}
		} //command

		_debug(...msg: any) {
			let prec: string;
			this._debuglog += (prec = msg.join(' ')) + " --- " + Date() + EOL;
			this.emit("log", prec);
			if (this._panel && this._panel.sock)this._panel.sock.of("/admin").to("admin").send(stripAnsi(prec));
			return prec;
		} //_debug

		async _loadCMD(from: string = "dist/lib/commands/") {
			let files = await fs.readdir(from);

			for (let file of files) {
				let comm,
					full: string;
				
				try {
					delete require.cache[require.resolve(full = path.resolve(path.join(from, file)))];
					comm = require(full);
					await comm.init(this);
				} catch (err) {
					this._debug(chalk.red(inspect(err)));
				}
				this.commands.set(comm.command.name, comm.command);
			}

			this._debug(chalk.cyan.dim("Loaded bot commands"), chalk.grey.dim(" ---  " + Date()));
			return this;
		} //_loadCMD

	} //Vale

	export class Command implements Options.CommandOpts {


		name: string;
		exp: RegExp;
		desc: string = '';
		usage: string = '';
		category: string = '';
		data: any = { };
		
		constructor(opts: Options.CommandOpts) {
			Object.assign(this, opts);
		} //ctor

		//@Override
		async body(message?: Discord.Message, vale?: Vale) {
			//must support non-message commanding
		} //body

		//@Override
		async _remove(vale?: Vale) {
			//cleanup
		} //_remove

	} //Command

	export class CacheBank implements Options.CacheBankOpts {

		size: number = 0;
		cache: CacheEntry[] = [];
		name: string = "CacheBank-" + CacheBank.cntr++;
		autopurge: boolean = true;

		static cntr: number = 0;

		constructor(name?: string, size: number = 50, autopurge: boolean = true) {
			this.name = name || this.name;
			this.size = size;
			this.autopurge = autopurge;
		} //ctor

		get(item: number) {
			if (this.cache.length === 0) throw Errors.EBADSZ;

			if (item === undefined || item === null) {
				return this.cache[Math.round(Math.random() * (this.cache.length - 1))];
			} else {
				return this.cache[item];
			}
		} //random

		purge(items = 1) {
			let out: CacheEntry[] = [ ];

			this._arrange();

			while (items--) {
				out.push(this.cache.shift());
			}

			return out;
		} //purge

		push(item: any) {
			if (this.autopurge && this.cache.length === this.size - 1) this.purge();
			
			return this.cache.push({
				entry: item,
				timestamp: Date.now()
			});
		} //push

		_arrange() {
			return this.cache = this.cache.sort((a: CacheEntry, b: CacheEntry) => a.timestamp - b.timestamp);
		} //_arrange

	} //CacheBank

} //Classes

export default Classes;
