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
exports.chalk = require("./Classes").chalk;
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
                type: "LISTENING",
                url: "https://github.com/Valen-H/Vale3"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsZTMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvdmFsZTMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7QUFHYjs7R0FFRztBQUdILG9FQUErQjtBQUMvQixnRUFBZ0M7QUFDaEMscURBQStCO0FBQy9CLCtCQUErQjtBQUVsQixRQUFBLEtBQUssR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBR2hELElBQWMsS0FBSyxDQWlGbEI7QUFqRkQsV0FBYyxLQUFLO0lBRVgsS0FBSyxVQUFVLEtBQUssQ0FBQyxJQUFhO1FBQ3hDLElBQUksT0FBTyxHQUE2QjtZQUN0QyxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUU7WUFDdEQsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqRSxDQUFDO1FBR0YsSUFBSTtZQUNILE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUNyRjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ2IsT0FBTyxDQUFDLFVBQVUsR0FBRztnQkFDcEIsS0FBSyxFQUFFLEVBQUcsQ0FBRSxPQUFPO2FBQ25CLENBQUM7U0FDRjtRQUVGLElBQUksR0FBRyxHQUFHLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQ2xDLEtBQUssR0FBRyxNQUFNLG9CQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxD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T0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEYsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDLENBQUMsT0FBTztJQWxEYSxXQUFLLFFBa0QxQixDQUFBO0FBRUYsQ0FBQyxFQWpGYSxLQUFLLEdBQUwsYUFBSyxLQUFMLGFBQUssUUFpRmxCLENBQUMsT0FBTztBQUVULGtCQUFlLEtBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBBZGQgc3Bhd24nZCBjbGkgZXZhbFxyXG4gKi9cclxuXHJcblxyXG5pbXBvcnQgUGFuZWwgZnJvbSBcImFkbS1wYW5lbDJcIjtcclxuaW1wb3J0IENsYXNzZXMgZnJvbSBcIi4vQ2xhc3Nlc1wiO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnMtZXh0cmFcIjtcclxuaW1wb3J0IHsgaW5zcGVjdCB9IGZyb20gXCJ1dGlsXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIFJhdGVMaW1pdEluZm8sIFdlYmhvb2sgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5leHBvcnQgY29uc3QgY2hhbGsgPSByZXF1aXJlKFwiLi9DbGFzc2VzXCIpLmNoYWxrO1xyXG5cclxuXHJcbmV4cG9ydCBtb2R1bGUgVmFsZTMge1xyXG5cclxuXHRleHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhcnQoZnJvbT86IHN0cmluZykge1xyXG5cdFx0bGV0IGJvdG9wdHM6IENsYXNzZXMuT3B0aW9ucy5WYWxlT3B0cyA9IHtcclxuXHRcdFx0XHR0b2tlbjogKGF3YWl0IGZzLnJlYWRGaWxlKFwiLnRva2VuXCIpKS50b1N0cmluZygpLnRyaW0oKSxcclxuXHRcdFx0XHRjb25maWc6IEpTT04ucGFyc2UoKGF3YWl0IGZzLnJlYWRGaWxlKFwiY29uZmlnLmpzb25cIikpLnRvU3RyaW5nKCkpXHJcblx0XHRcdH07XHJcblx0XHRcclxuXHRcdFx0XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Ym90b3B0cy5jdXN0Y29uZmlnID0gSlNPTi5wYXJzZSgoYXdhaXQgZnMucmVhZEZpbGUoYm90b3B0cy5jb25maWcuY3VzdCkpLnRvU3RyaW5nKCkpO1xyXG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRib3RvcHRzLmN1c3Rjb25maWcgPSB7XHJcblx0XHRcdFx0XHRwYW5lbDogeyB9ICAvLyEhIS0xXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdGxldCBib3QgPSBuZXcgQ2xhc3Nlcy5WYWxlKGJvdG9wdHMpLFxyXG5cdFx0XHRwYW5lbCA9IGF3YWl0IFBhbmVsLnNldHVwKGJvdG9wdHMuY3VzdGNvbmZpZy5wYW5lbCk7ICAvLyEhIS0xXHJcblx0XHRib3QuX3BhbmVsID0gcGFuZWw7XHJcblx0XHRcdFxyXG5cdFx0cGFuZWwudG9nZ2xlU3RhdHMoKTtcclxuXHRcdHBhbmVsLnN0YXJ0KCkudGhlbigoKSA9PiBib3QuX2RlYnVnKGNoYWxrYFBhbmVsIFN0YXJ0ZWQuICB7Z3JleS5kaW0gLS0tICAke0RhdGUoKX19YCkpO1xyXG5cdFx0XHJcblx0XHRib3Quc3RhcnQoKTtcclxuXHRcdGJvdC5fbG9hZENNRChmcm9tKTtcclxuXHRcdHJldHVybiBib3Q7XHJcblx0fSAvL3N0YXJ0XHJcblxyXG5cdGV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXR1cCh2YWxlOiBDbGFzc2VzLlZhbGUpIHtcclxuXHRcdHZhbGUuY2xpZW50Lm9uKFwicmVhZHlcIiwgKCkgPT4ge1xyXG5cdFx0XHR2YWxlLl9kZWJ1ZyhjaGFsa2BDb25uZWN0ZWQgYXMge2dyZWVuQnJpZ2h0ICR7dmFsZS5jbGllbnQudXNlci50YWd9fSAge2dyZXkuZGltIC0tLSAgJHtEYXRlKCl9fWApO1xyXG5cdFx0XHR2YWxlLmNsaWVudC51c2VyLnNldEFjdGl2aXR5KHZhbGUub3B0cy5jb25maWcucHJlZml4ICsgXCJoZWxwXCIsIHtcclxuXHRcdFx0XHR0eXBlOiBcIkxJU1RFTklOR1wiLFxyXG5cdFx0XHRcdHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vVmFsZW4tSC9WYWxlM1wiXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRpZiAodmFsZS5vcHRzLmN1c3Rjb25maWcgJiYgdmFsZS5vcHRzLmN1c3Rjb25maWcud2hvb2spIHtcclxuXHRcdFx0XHR2YWxlLmNsaWVudC5mZXRjaFdlYmhvb2sodmFsZS5vcHRzLmN1c3Rjb25maWcud2hvb2suaWQsIHZhbGUub3B0cy5jdXN0Y29uZmlnLndob29rLnRva2VuKS50aGVuKCh3aG9vazogV2ViaG9vaykgPT4ge1xyXG5cdFx0XHRcdFx0dmFsZS53aG9vayA9IHdob29rO1xyXG5cdFx0XHRcdFx0d2hvb2suc2VuZChgQm90IG9ubGluZS4gIC0tLSAgJHtEYXRlKCl9YCwge1xyXG5cdFx0XHRcdFx0XHRkaXNhYmxlRXZlcnlvbmU6IHRydWUsXHJcblx0XHRcdFx0XHRcdGNvZGU6IFwiSmF2YVNjcmlwdFwiXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHZhbGUub24oXCJyYXdsb2dcIiwgKC4uLm1zZykgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAodmFsZS53aG9vaykge1xyXG5cdFx0XHRcdFx0XHRcdHZhbGUud2hvb2suc2VuZChgX0RlYnVnOiAgJHttc2d9ICAtLS0gICR7RGF0ZSgpfWAsIHtcclxuXHRcdFx0XHRcdFx0XHRcdGRpc2FibGVFdmVyeW9uZTogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdGNvZGU6IFwiSmF2YVNjcmlwdFwiXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHZhbGUuY2xpZW50Lm9uKFwicmVjb25uZWN0aW5nXCIsICgpID0+IHtcclxuXHRcdFx0dmFsZS5fZGVidWcoY2hhbGtge2N5YW4uZGltIENsaWVudCByZWNvbm5lY3RpbmcuLi59ICB7Z3JleS5kaW0gLS0tICAke0RhdGUoKX19YCk7XHJcblx0XHR9KTtcclxuXHRcdHZhbGUuY2xpZW50Lm9uKFwiZGlzY29ubmVjdFwiLCAoZXZlbnQ6IENsb3NlRXZlbnQpID0+IHsgIC8vaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0Nsb3NlRXZlbnRcclxuXHRcdFx0dmFsZS5fZGVidWcoY2hhbGtge3JlZCBDbGllbnQgRGlzY29ubmVjdGVkfSB8IHtjeWFuICR7ZXZlbnQucmVhc29ufX1gKTtcclxuXHRcdFx0aWYgKHZhbGUud2hvb2spIHZhbGUud2hvb2suc2VuZChgQm90IGRpc2Nvbm5lY3RlZC4gIC0tLSAgJHtEYXRlKCl9YCwge1xyXG5cdFx0XHRcdGRpc2FibGVFdmVyeW9uZTogdHJ1ZSxcclxuXHRcdFx0XHRjb2RlOiBcIkphdmFTY3JpcHRcIlxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0dmFsZS5jbGllbnQub24oXCJlcnJvclwiLCAoZXJyb3I6IEVycm9yKSA9PiB7XHJcblx0XHRcdHZhbGUuX2RlYnVnKGNoYWxrLnJlZC5kaW0oYENvbm5lY3Rpb24gRXJyb3I6IHtyZWRCcmlnaHQgJHtpbnNwZWN0KGVycm9yKX19YCkpO1xyXG5cdFx0fSk7XHJcblx0XHR2YWxlLmNsaWVudC5vbihcInJhdGVMaW1pdFwiLCAocmF0ZUxpbWl0SW5mbzogUmF0ZUxpbWl0SW5mbykgPT4ge1xyXG5cdFx0XHR2YWxlLl9kZWJ1ZyhjaGFsay5ncmV5LmRpbShgUmF0ZSBMaW1pdDogbGltaXQoJHtyYXRlTGltaXRJbmZvLmxpbWl0fSkgICR7cmF0ZUxpbWl0SW5mby5tZXRob2R9ICR7cmF0ZUxpbWl0SW5mby5wYXRofSAgLSAgJHtyYXRlTGltaXRJbmZvLnRpbWVEaWZmZXJlbmNlfW1zYCkpO1xyXG5cdFx0fSk7XHJcblx0XHR2YWxlLmNsaWVudC5vbihcInJlc3VtZVwiLCAocmVwbGF5ZWQ6IG51bWJlcikgPT4ge1xyXG5cdFx0XHR2YWxlLl9kZWJ1ZyhjaGFsay5ncmV5LmRpbShgUmVzdW1lZC4uLiAoJHtyZXBsYXllZH0pYCkpO1xyXG5cdFx0fSk7XHJcblx0XHR2YWxlLmNsaWVudC5vbihcIndhcm5cIiwgKGluZm86IHN0cmluZykgPT4ge1xyXG5cdFx0XHR2YWxlLl9kZWJ1ZyhjaGFsay5yZWRCcmlnaHQuZGltKGluZm8pKTtcclxuXHRcdH0pO1xyXG5cdFx0dmFsZS5jbGllbnQub24oXCJtZXNzYWdlXCIsIChtZXNzYWdlOiBNZXNzYWdlKSA9PiB7XHJcblx0XHRcdGlmIChtZXNzYWdlLmNvbnRlbnQuc3RhcnRzV2l0aCh2YWxlLm9wdHMuY29uZmlnLnByZWZpeCkpIHZhbGUuY29tbWFuZChtZXNzYWdlKTtcclxuXHRcdH0pO1xyXG5cdH0gLy9zZXR1cFxyXG5cclxufSAvL1ZhbGUzXHJcblxyXG5leHBvcnQgZGVmYXVsdCBWYWxlMztcclxuIl19