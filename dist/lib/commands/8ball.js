"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Classes_1 = tslib_1.__importDefault(require("../Classes"));
const discord_js_1 = require("discord.js");
const https_1 = require("https");
exports.command = new Classes_1.default.Command({
    name: "8ball",
    desc: "Fetch a random answer",
    usage: "8ball[ text<String>]",
    exp: /^!8(ball)?( .+)?$/smi,
    category: "Utility",
    body: async function body(message, vale) {
        https_1.get("https://nekos.life/api/v2/8ball", (res) => {
            let reply = '';
            function procceed() {
                try {
                    let send = JSON.parse(reply), embed = new discord_js_1.RichEmbed();
                    embed.setImage(send.url)
                        .setURL(send.url)
                        .setDescription(send.response)
                        .setTitle("8-Ball")
                        .setColor('#' + Math.round(Math.random() * (255 ** 3)).toString(16))
                        .setTimestamp();
                    message.reply({ embed });
                }
                catch (err) {
                    message.reply("External API error, please try again later... https://nekos.life/api/v2/endpoints");
                }
            } //procceed
            res.on("data", (chunk) => {
                reply += chunk;
            });
            res.once("close", procceed);
        }).once("error", (error) => {
            message.reply("External API error, please try again later... https://nekos.life/api/v2/endpoints");
        });
    },
});
async function init(vale) {
    exports.command.usage = vale.opts.config.prefix + exports.command.usage;
    exports.command.exp = new RegExp('^' + vale.opts.config.prefix + "8(ball)?( .+)?$", "smi");
    return exports.command;
} //init
exports.init = init;
exports.default = init;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOGJhbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvY29tbWFuZHMvOGJhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7QUFFYixpRUFBaUM7QUFDakMsMkNBQWdEO0FBQ2hELGlDQUE0QjtBQUVmLFFBQUEsT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxPQUFPLENBQUM7SUFDMUMsSUFBSSxFQUFFLE9BQU87SUFDYixJQUFJLEVBQUUsdUJBQXVCO0lBQzdCLEtBQUssRUFBRSxzQkFBc0I7SUFDN0IsR0FBRyxFQUFFLHNCQUFzQjtJQUMzQixRQUFRLEVBQUUsU0FBUztJQUNuQixJQUFJLEVBQUUsS0FBSyxVQUFVLElBQUksQ0FBQyxPQUFnQixFQUFFLElBQWtCO1FBQzdELFdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzlDLElBQUksS0FBSyxHQUFXLEVBQUUsQ0FBQztZQUV2QixTQUFTLFFBQVE7Z0JBQ2hCLElBQUk7b0JBQ0gsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFDM0IsS0FBSyxHQUFHLElBQUksc0JBQVMsRUFBRSxDQUFDO29CQUV6QixLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7eUJBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO3lCQUNoQixjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzt5QkFDN0IsUUFBUSxDQUFDLFFBQVEsQ0FBQzt5QkFDbEIsUUFBUSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQzt5QkFDbkUsWUFBWSxFQUFFLENBQUM7b0JBRWhCLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2lCQUN6QjtnQkFBQyxPQUFPLEdBQUcsRUFBRTtvQkFDYixPQUFPLENBQUMsS0FBSyxDQUFDLG1GQUFtRixDQUFDLENBQUM7aUJBQ25HO1lBQ0YsQ0FBQyxDQUFDLFVBQVU7WUFFWixHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUN4QixLQUFLLElBQUksS0FBSyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzFCLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUZBQW1GLENBQUMsQ0FBQztRQUNwRyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRCxDQUFDLENBQUM7QUFFSSxLQUFLLFVBQVUsSUFBSSxDQUFDLElBQWtCO0lBQzVDLGVBQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGVBQU8sQ0FBQyxLQUFLLENBQUM7SUFDeEQsZUFBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRW5GLE9BQU8sZUFBTyxDQUFDO0FBQ2hCLENBQUMsQ0FBQyxNQUFNO0FBTFIsb0JBS0M7QUFFRCxrQkFBZSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBDbGFzc2VzIGZyb20gXCIuLi9DbGFzc2VzXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIFJpY2hFbWJlZCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IGdldCB9IGZyb20gXCJodHRwc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1hbmQgPSBuZXcgQ2xhc3Nlcy5Db21tYW5kKHtcclxuXHRuYW1lOiBcIjhiYWxsXCIsXHJcblx0ZGVzYzogXCJGZXRjaCBhIHJhbmRvbSBhbnN3ZXJcIixcclxuXHR1c2FnZTogXCI4YmFsbFsgdGV4dDxTdHJpbmc+XVwiLFxyXG5cdGV4cDogL14hOChiYWxsKT8oIC4rKT8kL3NtaSxcclxuXHRjYXRlZ29yeTogXCJVdGlsaXR5XCIsXHJcblx0Ym9keTogYXN5bmMgZnVuY3Rpb24gYm9keShtZXNzYWdlOiBNZXNzYWdlLCB2YWxlOiBDbGFzc2VzLlZhbGUpIHtcclxuXHRcdGdldChcImh0dHBzOi8vbmVrb3MubGlmZS9hcGkvdjIvOGJhbGxcIiwgKHJlcykgPT4ge1xyXG5cdFx0XHRsZXQgcmVwbHk6IHN0cmluZyA9ICcnO1xyXG5cdFx0XHRcclxuXHRcdFx0ZnVuY3Rpb24gcHJvY2NlZWQoKSB7XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdGxldCBzZW5kID0gSlNPTi5wYXJzZShyZXBseSksXHJcblx0XHRcdFx0XHRcdGVtYmVkID0gbmV3IFJpY2hFbWJlZCgpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbWJlZC5zZXRJbWFnZShzZW5kLnVybClcclxuXHRcdFx0XHRcdC5zZXRVUkwoc2VuZC51cmwpXHJcblx0XHRcdFx0XHQuc2V0RGVzY3JpcHRpb24oc2VuZC5yZXNwb25zZSlcclxuXHRcdFx0XHRcdC5zZXRUaXRsZShcIjgtQmFsbFwiKVxyXG5cdFx0XHRcdFx0LnNldENvbG9yKCcjJyArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICgyNTUgKiogMykpLnRvU3RyaW5nKDE2KSlcclxuXHRcdFx0XHRcdC5zZXRUaW1lc3RhbXAoKTtcclxuXHJcblx0XHRcdFx0XHRtZXNzYWdlLnJlcGx5KHsgZW1iZWQgfSk7XHJcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0XHRtZXNzYWdlLnJlcGx5KFwiRXh0ZXJuYWwgQVBJIGVycm9yLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLi4uIGh0dHBzOi8vbmVrb3MubGlmZS9hcGkvdjIvZW5kcG9pbnRzXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSAvL3Byb2NjZWVkXHJcblxyXG5cdFx0XHRyZXMub24oXCJkYXRhXCIsIChjaHVuaykgPT4ge1xyXG5cdFx0XHRcdHJlcGx5ICs9IGNodW5rO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmVzLm9uY2UoXCJjbG9zZVwiLCBwcm9jY2VlZCk7XHJcblx0XHR9KS5vbmNlKFwiZXJyb3JcIiwgKGVycm9yKSA9PiB7XHJcblx0XHRcdG1lc3NhZ2UucmVwbHkoXCJFeHRlcm5hbCBBUEkgZXJyb3IsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuLi4gaHR0cHM6Ly9uZWtvcy5saWZlL2FwaS92Mi9lbmRwb2ludHNcIik7XHJcblx0XHR9KTtcclxuXHR9LCAvL2JvZHlcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdCh2YWxlOiBDbGFzc2VzLlZhbGUpIHtcclxuXHRjb21tYW5kLnVzYWdlID0gdmFsZS5vcHRzLmNvbmZpZy5wcmVmaXggKyBjb21tYW5kLnVzYWdlO1xyXG5cdGNvbW1hbmQuZXhwID0gbmV3IFJlZ0V4cCgnXicgKyB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIFwiOChiYWxsKT8oIC4rKT8kXCIsIFwic21pXCIpO1xyXG5cclxuXHRyZXR1cm4gY29tbWFuZDtcclxufSAvL2luaXRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcbiJdfQ==