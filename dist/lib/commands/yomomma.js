"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Classes_1 = tslib_1.__importDefault(require("../Classes"));
const discord_js_1 = require("discord.js");
const https_1 = require("https");
exports.command = new Classes_1.default.Command({
    name: "yomomma",
    desc: "Fetch a joke (external api)",
    usage: "yomomma",
    exp: /^!yo(mm?(o|a)mm?a)?$/i,
    category: "Utility",
    body: async function body(message, vale) {
        https_1.get("https://api.yomomma.info/", (res) => {
            let embed = new discord_js_1.RichEmbed(), reply = '';
            embed.setColor('#' + Math.round(Math.random() * (255 ** 3)).toString(16))
                .setTitle("Yomomma!")
                .setAuthor("Vale3", vale.client.user.displayAvatarURL, "https://github.com/Valen-H/Vale-3")
                .setThumbnail(vale.client.user.avatarURL)
                .setURL("https://yomomma.info/")
                .setTimestamp();
            function procceed(override = reply) {
                embed.setDescription(JSON.parse(override).joke);
                message.reply({ embed });
            } //procceed
            res.on("data", (chunk) => {
                reply += chunk;
            });
            res.once("close", procceed);
        }).once("error", (error) => {
            message.reply("External API error, please try again later... https://yomomma.info/");
        });
    },
});
async function init(vale) {
    exports.command.usage = vale.opts.config.prefix + exports.command.usage;
    exports.command.exp = new RegExp('^' + vale.opts.config.prefix + "yo(mm?(o|a)mm?a)?$", "i");
    return exports.command;
} //init
exports.init = init;
exports.default = init;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW9tb21tYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9jb21tYW5kcy95b21vbW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0FBRWIsaUVBQWlDO0FBQ2pDLDJDQUFnRDtBQUNoRCxpQ0FBNEI7QUFFZixRQUFBLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDO0lBQzFDLElBQUksRUFBRSxTQUFTO0lBQ2YsSUFBSSxFQUFFLDZCQUE2QjtJQUNuQyxLQUFLLEVBQUUsU0FBUztJQUNoQixHQUFHLEVBQUUsdUJBQXVCO0lBQzVCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLElBQUksRUFBRSxLQUFLLFVBQVUsSUFBSSxDQUFDLE9BQWdCLEVBQUUsSUFBa0I7UUFFN0QsV0FBRyxDQUFDLDJCQUEyQixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxLQUFLLEdBQWMsSUFBSSxzQkFBUyxFQUFFLEVBQ3JDLEtBQUssR0FBVyxFQUFFLENBQUM7WUFFcEIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ3hFLFFBQVEsQ0FBQyxVQUFVLENBQUM7aUJBQ3BCLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsbUNBQW1DLENBQUM7aUJBQzFGLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7aUJBQ3hDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztpQkFDL0IsWUFBWSxFQUFFLENBQUM7WUFFaEIsU0FBUyxRQUFRLENBQUMsV0FBbUIsS0FBSztnQkFDekMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoRCxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsVUFBVTtZQUVaLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ3hCLEtBQUssSUFBSSxLQUFLLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7WUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDMUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxxRUFBcUUsQ0FBQyxDQUFDO1FBQ3RGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNELENBQUMsQ0FBQztBQUVJLEtBQUssVUFBVSxJQUFJLENBQUMsSUFBa0I7SUFDNUMsZUFBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsZUFBTyxDQUFDLEtBQUssQ0FBQztJQUN4RCxlQUFPLENBQUMsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFcEYsT0FBTyxlQUFPLENBQUM7QUFDaEIsQ0FBQyxDQUFDLE1BQU07QUFMUixvQkFLQztBQUVELGtCQUFlLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IENsYXNzZXMgZnJvbSBcIi4uL0NsYXNzZXNcIjtcclxuaW1wb3J0IHsgTWVzc2FnZSwgUmljaEVtYmVkIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IHsgZ2V0IH0gZnJvbSBcImh0dHBzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29tbWFuZCA9IG5ldyBDbGFzc2VzLkNvbW1hbmQoe1xyXG5cdG5hbWU6IFwieW9tb21tYVwiLFxyXG5cdGRlc2M6IFwiRmV0Y2ggYSBqb2tlIChleHRlcm5hbCBhcGkpXCIsXHJcblx0dXNhZ2U6IFwieW9tb21tYVwiLFxyXG5cdGV4cDogL14heW8obW0/KG98YSltbT9hKT8kL2ksXHJcblx0Y2F0ZWdvcnk6IFwiVXRpbGl0eVwiLFxyXG5cdGJvZHk6IGFzeW5jIGZ1bmN0aW9uIGJvZHkobWVzc2FnZTogTWVzc2FnZSwgdmFsZTogQ2xhc3Nlcy5WYWxlKSB7XHJcblx0XHRcclxuXHRcdGdldChcImh0dHBzOi8vYXBpLnlvbW9tbWEuaW5mby9cIiwgKHJlcykgPT4ge1xyXG5cdFx0XHRsZXQgZW1iZWQ6IFJpY2hFbWJlZCA9IG5ldyBSaWNoRW1iZWQoKSxcclxuXHRcdFx0XHRyZXBseTogc3RyaW5nID0gJyc7XHJcblx0XHRcdFxyXG5cdFx0XHRlbWJlZC5zZXRDb2xvcignIycgKyBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoMjU1ICoqIDMpKS50b1N0cmluZygxNikpXHJcblx0XHRcdC5zZXRUaXRsZShcIllvbW9tbWEhXCIpXHJcblx0XHRcdC5zZXRBdXRob3IoXCJWYWxlM1wiLCB2YWxlLmNsaWVudC51c2VyLmRpc3BsYXlBdmF0YXJVUkwsIFwiaHR0cHM6Ly9naXRodWIuY29tL1ZhbGVuLUgvVmFsZS0zXCIpXHJcblx0XHRcdC5zZXRUaHVtYm5haWwodmFsZS5jbGllbnQudXNlci5hdmF0YXJVUkwpXHJcblx0XHRcdC5zZXRVUkwoXCJodHRwczovL3lvbW9tbWEuaW5mby9cIilcclxuXHRcdFx0LnNldFRpbWVzdGFtcCgpO1xyXG5cdFx0XHRcclxuXHRcdFx0ZnVuY3Rpb24gcHJvY2NlZWQob3ZlcnJpZGU6IHN0cmluZyA9IHJlcGx5KSB7XHJcblx0XHRcdFx0ZW1iZWQuc2V0RGVzY3JpcHRpb24oSlNPTi5wYXJzZShvdmVycmlkZSkuam9rZSk7XHJcblx0XHRcdFx0bWVzc2FnZS5yZXBseSh7IGVtYmVkIH0pO1xyXG5cdFx0XHR9IC8vcHJvY2NlZWRcclxuXHRcdFx0XHJcblx0XHRcdHJlcy5vbihcImRhdGFcIiwgKGNodW5rKSA9PiB7XHJcblx0XHRcdFx0cmVwbHkgKz0gY2h1bms7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXMub25jZShcImNsb3NlXCIsIHByb2NjZWVkKTtcclxuXHRcdH0pLm9uY2UoXCJlcnJvclwiLCAoZXJyb3IpID0+IHtcclxuXHRcdFx0bWVzc2FnZS5yZXBseShcIkV4dGVybmFsIEFQSSBlcnJvciwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4uLiBodHRwczovL3lvbW9tbWEuaW5mby9cIik7XHJcblx0XHR9KTtcclxuXHR9LCAvL2JvZHlcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdCh2YWxlOiBDbGFzc2VzLlZhbGUpIHtcclxuXHRjb21tYW5kLnVzYWdlID0gdmFsZS5vcHRzLmNvbmZpZy5wcmVmaXggKyBjb21tYW5kLnVzYWdlO1xyXG5cdGNvbW1hbmQuZXhwID0gbmV3IFJlZ0V4cCgnXicgKyB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIFwieW8obW0/KG98YSltbT9hKT8kXCIsIFwiaVwiKTtcclxuXHJcblx0cmV0dXJuIGNvbW1hbmQ7XHJcbn0gLy9pbml0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG4iXX0=