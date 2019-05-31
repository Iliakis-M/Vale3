"use strict";

import Vale3 from "./vale3";
import * as Discord from "discord.js";
import * as adm_panel from "adm-panel2";
import * as fs from "fs-extra";
import * as path from "path";
import { EventEmitter } from "events";
import { EOL } from "os";
import { inspect } from "util";
import { get, RequestOptions } from "https";
import { URL } from "url";
import { IncomingMessage } from "http";
import * as chillout from "chillout";

export const chalk = require("chalk");
export var stripAnsi: {
	(c: any): any;
};

try {
	stripAnsi = require("strip-ansi");
} catch (opt) {
	stripAnsi = (c: any) => c;
}


/**
 * VAL-1: TO BE USED BOTH WITH USER AND BOTS ACCOUNTS  - can make botnet
 * VAL-2: RELOAD ONLY MODIFIED MODULES/COMMANDS!  - external handling, _loadCMD supports singlefile
 * VAL-3: CLEAR UNDERLYING LOGSTRINGS PERIODICALLY
 * VAL-4: CACHEBANK AND NAMEDCACHEBANK IMPLEMENTATION
 */


export module Classes {

	export namespace Options {

		export interface ValeOpts {

			readonly token: string;
			config: {
				cust?: string | number | Buffer;
				prefix: string;
				client?: Discord.ClientOptions;
			};
			custconfig?: {
				panel?: any;
				whook?: any;
				[idx: string]: any;
			};

		} //ValeOpts

		export interface CommandOpts {

			name: string;
			exp: RegExp;
			desc?: string;
			usage?: string;
			/** Utility, Owner, Admin
			 * @type {string}
			 * @memberof CommandOpts
			 */
			category?: string;
			data?: any;
			body: (message: Discord.Message, vale: Vale) => Promise<any>;
			_remove?: (vale?: Vale) => Promise<any>;

		} //CommandOpts

		export interface CacheBankOpts {

			size: number;
			cache: CacheEntry[];
			name?: string;
			autopurge?: boolean;
			reusables?: boolean;

		} //CacheBankOpts

	} //Options


	export namespace Errors {

		export const EBADSZ: RangeError = new RangeError("Bad Size.");

	} //Errors


	export type CacheEntry = {
		timestamp: number;
		entry: any
	};


	export class Vale extends EventEmitter {

		readonly opts: Options.ValeOpts;
		readonly client: Discord.Client;
		whook: Discord.Webhook;
		_debuglog: string;
		_panel: adm_panel.Classes.Panel;
		commands: Map<string, Command> = new Map();

		public static defaultOpts: Options.ValeOpts = {
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

		public constructor(opts: Options.ValeOpts = Vale.defaultOpts) {
			super();

			let nopts: Options.ValeOpts = <Options.ValeOpts>{ };
			Object.assign(nopts, Vale.defaultOpts);
			Object.assign(nopts, opts);
			this.opts = nopts;

			this.client = new Discord.Client(opts.config.client);
		} //ctor

		//@Override
		public on(event: "log", listener: (...args: any[]) => void): this;
		public on(event: "rawlog", listener: (...args: any[]) => void): this;
		//@Override
		public on(event: string | symbol, listener: (...args: any[]) => void): this {
			return super.on(event, listener);
		} //on

		//@Override
		public once(event: "log", listener: (...args: any[]) => void): this;
		public once(event: "rawlog", listener: (...args: any[]) => void): this;
		//@Override
		public once(event: string | symbol, listener: (...args: any[]) => void): this {
			return super.once(event, listener);
		} //once

		public start() {
			Vale3.setup(this);
			this.client.login(this.opts.token);  //!destroy()
			return this;
		} //start

		public async command(message: Discord.Message): Promise<any> {
			try {
				let found: Command = Array.from(this.commands.values()).find((cmd: Command) => cmd.exp.test(message.content));

				if (found) {
					//@ts-ignore
					this._debug(chalk.keyword("orange").dim(message.author.tag + " (" + message.channel.name + "  -  [ " + (message.guild || { name: "undefined" }).name + " ] )") + ":", chalk.yellow(message.content), "---", chalk.grey.dim(Date()));
					return await found.body(message, this);
				}
			} catch (err) {
				return this._debug(chalk.red(inspect(err)));
			}
		} //command

		_debug(...msg: any): string {
			let prec: string;
			this._debuglog += (prec = msg.join(' ')) + " --- " + Date() + EOL;
			this.emit("log", prec);
			this.emit("rawlog", stripAnsi(prec));
			if (this._panel && this._panel.sock) this._panel.sock.of("/admin").to("admin").send(stripAnsi(prec));
			return prec;
		} //_debug

		async _loadCMD(from: string = "dist/lib/commands/"): Promise<this> {
			let stats: fs.Stats = await fs.stat(from);

			if (stats.isDirectory()) {
				let files: string[] = await fs.readdir(from);

				await chillout.forOf(files, async (file: string): Promise<void> => {
					let comm: any,
						full: string;
				
					try {
						delete require.cache[require.resolve(full = path.resolve(path.join(from, file)))];
						comm = require(full);
						await comm.init(this);
					} catch (err) {
						this._debug(chalk.red(inspect(err)));
						return;
					}

					this.commands.set(comm.command.name, comm.command);
				});

				this._debug(chalk.cyan.dim("Loaded bot commands"), chalk.grey.dim(" ---  " + Date()));
			} else {
				let comm: any,
					full: string;

				try {
					delete require.cache[require.resolve(full = path.resolve(from))];
					comm = require(full);
					await comm.init(this);
				} catch (err) {
					this._debug(chalk.red(inspect(err)));
					return this;
				}

				this.commands.set(comm.command.name, comm.command);
				this._debug(chalk.cyan.dim("Loaded bot command: " + from), chalk.grey.dim(" ---  " + Date()));
			}

			return this;
		} //_loadCMD

	} //Vale

	export class Command implements Options.CommandOpts {

		public readonly name: string;
		public exp: RegExp;
		public desc?: string = '';
		public usage?: string = '';
		public category?: string = '';
		public data?: any = { };
		
		public constructor(opts: Options.CommandOpts) {
			Object.assign(this, opts);
		} //ctor

		//@Override
		public async body(message?: Discord.Message, vale?: Vale): Promise<any> {
			//can support non-message commanding?
		} //body

		//@Override
		async _remove(vale?: Vale): Promise<any> {
			//cleanup(?)
		} //_remove

	} //Command

	export class CacheBank implements Options.CacheBankOpts {

		public size: number = 50;
		cache: CacheEntry[] = [ ];
		public name: string = "CacheBank-" + CacheBank.cntr++;
		public autopurge: boolean = false;
		public reusables: boolean = false;

		private static cntr: number = 0;

		public constructor(name?: string, size: number = 50, autopurge: boolean = true, reusables: boolean = true) {
			this.name = name || this.name;
			this.size = size || this.size;
			this.autopurge = autopurge || this.autopurge;
			this.reusables = reusables || this.reusables;
		} //ctor

		public get(item: number): any {
			if (this.cache.length === 0) throw Errors.EBADSZ;

			if (item === undefined || item === null) {
				let idx: number = Math.round(Math.random() * (this.cache.length - 1)),
					tmp: CacheEntry = this.cache[idx];
				
				if (this.reusables === false) this.cache.splice(idx, 1);
				
				return tmp.entry;
			} else {
				let tmp: CacheEntry = this.cache[item];

				if (this.reusables === false) this.cache.splice(item, 1);

				return tmp.entry;
			}
		} //random

		async purge(items: number = 1): Promise<CacheEntry[]> {
			let out: CacheEntry[] = [ ];

			this._arrange();

			await chillout.until((): void => {
				out.push(this.cache.shift());

				if (!items--) return chillout.StopIteration;
			});

			return out;
		} //purge

		public push(item: any): number {
			if (this.autopurge && this.cache.length === this.size - 1) this.purge();
			
			return this.cache.push({
				entry: item,
				timestamp: Date.now()
			});
		} //push

		_arrange(): CacheEntry[] {
			return this.cache = this.cache.sort((a: CacheEntry, b: CacheEntry) => a.timestamp - b.timestamp);
		} //_arrange

	} //CacheBank

	export async function fetch(url: string | RequestOptions | URL): Promise<string> {
		return new Promise((res: (value: string) => void, rej): void => {
			get(url, (resp: IncomingMessage): void => {
				let reply: string = '';

				resp.on("data", (chunk: Buffer): void => {
					reply += chunk;
				});
				resp.once("close", () => res(decodeURIComponent(reply)));
			}).once("error", rej);
		});
	} //fetch

	export async function failsafe(this: Discord.Message, ...params: any[]): Promise<Discord.Message | Discord.Message[]> {
		try {
			return await this.reply(...params);
		} catch (err) {
			return await this.author.send(...params);
		}
	} //failsafe

} //Classes

export default Classes;
export { chillout };
