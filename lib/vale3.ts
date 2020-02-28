"use strict";


/**
 * Add spawn'd cli eval
 */


import Panel from "adm-panel2";
import Classes from "./Classes";
import * as fs from "fs-extra";
import { inspect } from "util";
import { Message, RateLimitInfo, Webhook } from "discord.js";
export const chalk = require("./Classes").chalk;


export module Vale3 {

	export async function start(from?: string) {
		let botopts: Classes.Options.ValeOpts = {
				token: (await fs.readFile(".token")).toString().trim(),
				config: JSON.parse((await fs.readFile("config.json")).toString())
			};
		
			
			try {
				botopts.custconfig = JSON.parse((await fs.readFile(botopts.config.cust)).toString());
			} catch (err) {
				botopts.custconfig = {
					panel: { }  //!!!-1
				};
			}
			
		let bot = new Classes.Vale(botopts),
			panel = await Panel.setup(botopts.custconfig.panel);  //!!!-1
		bot._panel = panel;
			
		panel.toggleStats();
		panel.start().then(() => bot._debug(chalk`Panel Started.  {grey.dim ---  ${Date()}}`));
		
		bot.start();
		bot._loadCMD(from);
		return bot;
	} //start

	export async function setup(vale: Classes.Vale) {
		vale.client.on("ready", () => {
			vale._debug(chalk`Connected as {greenBright ${vale.client.user.tag}}  {grey.dim ---  ${Date()}}`);
			vale.client.user.setActivity(vale.opts.config.prefix + "help", {
				type: "LISTENING",
				url: "https://github.com/Valen-H/Vale3"
			});
			if (vale.opts.custconfig && vale.opts.custconfig.whook) {
				vale.client.fetchWebhook(vale.opts.custconfig.whook.id, vale.opts.custconfig.whook.token).then((whook: Webhook) => {
					vale.whook = whook;
					whook.send(`Bot online.  ---  ${Date()}`, {
						disableEveryone: true,
						code: "JavaScript"
					});
					vale.on("rawlog", (...msg) => {
						if (vale.whook) {
							vale.whook.send(`_Debug:  ${msg}  ---  ${Date()}`, {
								disableEveryone: true,
								code: "JavaScript"
							});
						}
					});
				});
			}
		});
		vale.client.on("reconnecting", () => {
			vale._debug(chalk`{cyan.dim Client reconnecting...}  {grey.dim ---  ${Date()}}`);
		});
		vale.client.on("disconnect", (event: CloseEvent) => {  //https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent
			vale._debug(chalk`{red Client Disconnected} | {cyan ${event.reason}}`);
			if (vale.whook) vale.whook.send(`Bot disconnected.  ---  ${Date()}`, {
				disableEveryone: true,
				code: "JavaScript"
			});
		});
		vale.client.on("error", (error: Error) => {
			vale._debug(chalk.red.dim(`Connection Error: {redBright ${inspect(error)}}`));
		});
		vale.client.on("rateLimit", (rateLimitInfo: RateLimitInfo) => {
			vale._debug(chalk.grey.dim(`Rate Limit: limit(${rateLimitInfo.limit})  ${rateLimitInfo.method} ${rateLimitInfo.path}  -  ${rateLimitInfo.timeDifference}ms`));
		});
		vale.client.on("resume", (replayed: number) => {
			vale._debug(chalk.grey.dim(`Resumed... (${replayed})`));
		});
		vale.client.on("warn", (info: string) => {
			vale._debug(chalk.redBright.dim(info));
		});
		vale.client.on("message", (message: Message) => {
			if (message.content.startsWith(vale.opts.config.prefix)) vale.command(message);
		});
	} //setup

} //Vale3

export default Vale3;
