"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * Add spawn'd cli eval
 */
const adm_panel2_1 = tslib_1.__importDefault(require("adm-panel2"));
const Classes_1 = tslib_1.__importDefault(require("./Classes"));
const fs = tslib_1.__importStar(require("fs-extra"));
const util_1 = require("util");
exports.chalk = require("chalk");
var Vale3;
(function (Vale3) {
    async function start(from) {
        let botopts = {
            token: (await fs.readFile(".token")).toString().trim(),
            config: JSON.parse((await fs.readFile("config.json")).toString())
        };
        try {
            botopts.custconfig = JSON.parse((await fs.readFile(botopts.config.cust)).toString());
        }
        catch (err) {
            botopts.custconfig = {
                panel: {} //!!!-1
            };
        }
        let bot = new Classes_1.default.Vale(botopts), panel = await adm_panel2_1.default.setup(botopts.custconfig.panel); //!!!-1
        bot._panel = panel;
        panel.toggleStats();
        panel.start().then(() => bot._debug(exports.chalk `Panel Started.  {grey.dim ---  ${Date()}}`));
        bot.start();
        bot._loadCMD(from);
        return bot;
    } //start
    Vale3.start = start;
    async function setup(vale) {
        vale.client.on("ready", () => {
            vale._debug(exports.chalk `Connected as {greenBright ${vale.client.user.tag}}  {grey.dim ---  ${Date()}}`);
            vale.client.user.setActivity(vale.opts.config.prefix + "help", {
                type: "LISTENING"
            });
            if (vale.opts.custconfig && vale.opts.custconfig.whook) {
                vale.client.fetchWebhook(vale.opts.custconfig.whook.id, vale.opts.custconfig.whook.token).then((whook) => {
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
            vale._debug(exports.chalk `{cyan.dim Client reconnecting...}  {grey.dim ---  ${Date()}}`);
        });
        vale.client.on("disconnect", (event) => {
            vale._debug(exports.chalk `{red Client Disconnected} | {cyan ${event.reason}}`);
            if (vale.whook)
                vale.whook.send(`Bot disconnected.  ---  ${Date()}`, {
                    disableEveryone: true,
                    code: "JavaScript"
                });
        });
        vale.client.on("error", (error) => {
            vale._debug(exports.chalk.red.dim(`Connection Error: {redBright ${util_1.inspect(error)}}`));
        });
        vale.client.on("rateLimit", (rateLimitInfo) => {
            vale._debug(exports.chalk.grey.dim(`Rate Limit: limit(${rateLimitInfo.limit})  ${rateLimitInfo.method} ${rateLimitInfo.path}  -  ${rateLimitInfo.timeDifference}ms`));
        });
        vale.client.on("resume", (replayed) => {
            vale._debug(exports.chalk.grey.dim(`Resumed... (${replayed})`));
        });
        vale.client.on("warn", (info) => {
            vale._debug(exports.chalk.redBright.dim(info));
        });
        vale.client.on("message", (message) => {
            if (message.content.startsWith(vale.opts.config.prefix))
                vale.command(message);
        });
    } //setup
    Vale3.setup = setup;
})(Vale3 = exports.Vale3 || (exports.Vale3 = {})); //Vale3
exports.default = Vale3;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsZTMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvdmFsZTMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7QUFHYjs7R0FFRztBQUdILG9FQUErQjtBQUMvQixnRUFBZ0M7QUFDaEMscURBQStCO0FBQy9CLCtCQUErQjtBQUVsQixRQUFBLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFHdEMsSUFBYyxLQUFLLENBZ0ZsQjtBQWhGRCxXQUFjLEtBQUs7SUFFWCxLQUFLLFVBQVUsS0FBSyxDQUFDLElBQWE7UUFDeEMsSUFBSSxPQUFPLEdBQTZCO1lBQ3RDLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRTtZQUN0RCxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pFLENBQUM7UUFHRixJQUFJO1lBQ0gsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQ3JGO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDYixPQUFPLENBQUMsVUFBVSxHQUFHO2dCQUNwQixLQUFLLEVBQUUsRUFBRyxDQUFFLE9BQU87YUFDbkIsQ0FBQztTQUNGO1FBRUYsSUFBSSxHQUFHLEdBQUcsSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFDbEMsS0FBSyxHQUFHLE1BQU0sb0JBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxD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LENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQyxPQUFPO0lBakRhLFdBQUssUUFpRDFCLENBQUE7QUFFRixDQUFDLEVBaEZhLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQWdGbEIsQ0FBQyxPQUFPO0FBRVQsa0JBQWUsS0FBSyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIEFkZCBzcGF3bidkIGNsaSBldmFsXHJcbiAqL1xyXG5cclxuXHJcbmltcG9ydCBQYW5lbCBmcm9tIFwiYWRtLXBhbmVsMlwiO1xyXG5pbXBvcnQgQ2xhc3NlcyBmcm9tIFwiLi9DbGFzc2VzXCI7XHJcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmcy1leHRyYVwiO1xyXG5pbXBvcnQgeyBpbnNwZWN0IH0gZnJvbSBcInV0aWxcIjtcclxuaW1wb3J0IHsgTWVzc2FnZSwgUmF0ZUxpbWl0SW5mbywgV2ViaG9vayB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmV4cG9ydCBjb25zdCBjaGFsayA9IHJlcXVpcmUoXCJjaGFsa1wiKTtcclxuXHJcblxyXG5leHBvcnQgbW9kdWxlIFZhbGUzIHtcclxuXHJcblx0ZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0KGZyb20/OiBzdHJpbmcpIHtcclxuXHRcdGxldCBib3RvcHRzOiBDbGFzc2VzLk9wdGlvbnMuVmFsZU9wdHMgPSB7XHJcblx0XHRcdFx0dG9rZW46IChhd2FpdCBmcy5yZWFkRmlsZShcIi50b2tlblwiKSkudG9TdHJpbmcoKS50cmltKCksXHJcblx0XHRcdFx0Y29uZmlnOiBKU09OLnBhcnNlKChhd2FpdCBmcy5yZWFkRmlsZShcImNvbmZpZy5qc29uXCIpKS50b1N0cmluZygpKVxyXG5cdFx0XHR9O1xyXG5cdFx0XHJcblx0XHRcdFxyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGJvdG9wdHMuY3VzdGNvbmZpZyA9IEpTT04ucGFyc2UoKGF3YWl0IGZzLnJlYWRGaWxlKGJvdG9wdHMuY29uZmlnLmN1c3QpKS50b1N0cmluZygpKTtcclxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0Ym90b3B0cy5jdXN0Y29uZmlnID0ge1xyXG5cdFx0XHRcdFx0cGFuZWw6IHsgfSAgLy8hISEtMVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRsZXQgYm90ID0gbmV3IENsYXNzZXMuVmFsZShib3RvcHRzKSxcclxuXHRcdFx0cGFuZWwgPSBhd2FpdCBQYW5lbC5zZXR1cChib3RvcHRzLmN1c3Rjb25maWcucGFuZWwpOyAgLy8hISEtMVxyXG5cdFx0Ym90Ll9wYW5lbCA9IHBhbmVsO1xyXG5cdFx0XHRcclxuXHRcdHBhbmVsLnRvZ2dsZVN0YXRzKCk7XHJcblx0XHRwYW5lbC5zdGFydCgpLnRoZW4oKCkgPT4gYm90Ll9kZWJ1ZyhjaGFsa2BQYW5lbCBTdGFydGVkLiAge2dyZXkuZGltIC0tLSAgJHtEYXRlKCl9fWApKTtcclxuXHRcdFxyXG5cdFx0Ym90LnN0YXJ0KCk7XHJcblx0XHRib3QuX2xvYWRDTUQoZnJvbSk7XHJcblx0XHRyZXR1cm4gYm90O1xyXG5cdH0gLy9zdGFydFxyXG5cclxuXHRleHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0dXAodmFsZTogQ2xhc3Nlcy5WYWxlKSB7XHJcblx0XHR2YWxlLmNsaWVudC5vbihcInJlYWR5XCIsICgpID0+IHtcclxuXHRcdFx0dmFsZS5fZGVidWcoY2hhbGtgQ29ubmVjdGVkIGFzIHtncmVlbkJyaWdodCAke3ZhbGUuY2xpZW50LnVzZXIudGFnfX0gIHtncmV5LmRpbSAtLS0gICR7RGF0ZSgpfX1gKTtcclxuXHRcdFx0dmFsZS5jbGllbnQudXNlci5zZXRBY3Rpdml0eSh2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIFwiaGVscFwiLCB7XHJcblx0XHRcdFx0dHlwZTogXCJMSVNURU5JTkdcIlxyXG5cdFx0XHR9KTtcclxuXHRcdFx0aWYgKHZhbGUub3B0cy5jdXN0Y29uZmlnICYmIHZhbGUub3B0cy5jdXN0Y29uZmlnLndob29rKSB7XHJcblx0XHRcdFx0dmFsZS5jbGllbnQuZmV0Y2hXZWJob29rKHZhbGUub3B0cy5jdXN0Y29uZmlnLndob29rLmlkLCB2YWxlLm9wdHMuY3VzdGNvbmZpZy53aG9vay50b2tlbikudGhlbigod2hvb2s6IFdlYmhvb2spID0+IHtcclxuXHRcdFx0XHRcdHZhbGUud2hvb2sgPSB3aG9vaztcclxuXHRcdFx0XHRcdHdob29rLnNlbmQoYEJvdCBvbmxpbmUuICAtLS0gICR7RGF0ZSgpfWAsIHtcclxuXHRcdFx0XHRcdFx0ZGlzYWJsZUV2ZXJ5b25lOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRjb2RlOiBcIkphdmFTY3JpcHRcIlxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR2YWxlLm9uKFwicmF3bG9nXCIsICguLi5tc2cpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHZhbGUud2hvb2spIHtcclxuXHRcdFx0XHRcdFx0XHR2YWxlLndob29rLnNlbmQoYF9EZWJ1ZzogICR7bXNnfSAgLS0tICAke0RhdGUoKX1gLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlRXZlcnlvbmU6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRjb2RlOiBcIkphdmFTY3JpcHRcIlxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHR2YWxlLmNsaWVudC5vbihcInJlY29ubmVjdGluZ1wiLCAoKSA9PiB7XHJcblx0XHRcdHZhbGUuX2RlYnVnKGNoYWxrYHtjeWFuLmRpbSBDbGllbnQgcmVjb25uZWN0aW5nLi4ufSAge2dyZXkuZGltIC0tLSAgJHtEYXRlKCl9fWApO1xyXG5cdFx0fSk7XHJcblx0XHR2YWxlLmNsaWVudC5vbihcImRpc2Nvbm5lY3RcIiwgKGV2ZW50OiBDbG9zZUV2ZW50KSA9PiB7ICAvL2h0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DbG9zZUV2ZW50XHJcblx0XHRcdHZhbGUuX2RlYnVnKGNoYWxrYHtyZWQgQ2xpZW50IERpc2Nvbm5lY3RlZH0gfCB7Y3lhbiAke2V2ZW50LnJlYXNvbn19YCk7XHJcblx0XHRcdGlmICh2YWxlLndob29rKSB2YWxlLndob29rLnNlbmQoYEJvdCBkaXNjb25uZWN0ZWQuICAtLS0gICR7RGF0ZSgpfWAsIHtcclxuXHRcdFx0XHRkaXNhYmxlRXZlcnlvbmU6IHRydWUsXHJcblx0XHRcdFx0Y29kZTogXCJKYXZhU2NyaXB0XCJcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdHZhbGUuY2xpZW50Lm9uKFwiZXJyb3JcIiwgKGVycm9yOiBFcnJvcikgPT4ge1xyXG5cdFx0XHR2YWxlLl9kZWJ1ZyhjaGFsay5yZWQuZGltKGBDb25uZWN0aW9uIEVycm9yOiB7cmVkQnJpZ2h0ICR7aW5zcGVjdChlcnJvcil9fWApKTtcclxuXHRcdH0pO1xyXG5cdFx0dmFsZS5jbGllbnQub24oXCJyYXRlTGltaXRcIiwgKHJhdGVMaW1pdEluZm86IFJhdGVMaW1pdEluZm8pID0+IHtcclxuXHRcdFx0dmFsZS5fZGVidWcoY2hhbGsuZ3JleS5kaW0oYFJhdGUgTGltaXQ6IGxpbWl0KCR7cmF0ZUxpbWl0SW5mby5saW1pdH0pICAke3JhdGVMaW1pdEluZm8ubWV0aG9kfSAke3JhdGVMaW1pdEluZm8ucGF0aH0gIC0gICR7cmF0ZUxpbWl0SW5mby50aW1lRGlmZmVyZW5jZX1tc2ApKTtcclxuXHRcdH0pO1xyXG5cdFx0dmFsZS5jbGllbnQub24oXCJyZXN1bWVcIiwgKHJlcGxheWVkOiBudW1iZXIpID0+IHtcclxuXHRcdFx0dmFsZS5fZGVidWcoY2hhbGsuZ3JleS5kaW0oYFJlc3VtZWQuLi4gKCR7cmVwbGF5ZWR9KWApKTtcclxuXHRcdH0pO1xyXG5cdFx0dmFsZS5jbGllbnQub24oXCJ3YXJuXCIsIChpbmZvOiBzdHJpbmcpID0+IHtcclxuXHRcdFx0dmFsZS5fZGVidWcoY2hhbGsucmVkQnJpZ2h0LmRpbShpbmZvKSk7XHJcblx0XHR9KTtcclxuXHRcdHZhbGUuY2xpZW50Lm9uKFwibWVzc2FnZVwiLCAobWVzc2FnZTogTWVzc2FnZSkgPT4ge1xyXG5cdFx0XHRpZiAobWVzc2FnZS5jb250ZW50LnN0YXJ0c1dpdGgodmFsZS5vcHRzLmNvbmZpZy5wcmVmaXgpKSB2YWxlLmNvbW1hbmQobWVzc2FnZSk7XHJcblx0XHR9KTtcclxuXHR9IC8vc2V0dXBcclxuXHJcbn0gLy9WYWxlM1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmFsZTM7XHJcbiJdfQ==