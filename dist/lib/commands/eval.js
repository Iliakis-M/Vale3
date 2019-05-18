"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Classes_1 = tslib_1.__importDefault(require("../Classes"));
const util_1 = require("util");
exports.command = new Classes_1.default.Command({
    name: "eval",
    desc: "Evaluate a JavaScript expression",
    usage: "eval[ code<JS>]",
    exp: /^!e(val)?( |\n).+$/smi,
    category: "Owner",
    body: async function body(message, vale) {
        let app;
        if (vale.client.user.bot) {
            app = await vale.client.fetchApplication();
        }
        else {
            //@ts-ignore
            app = {
                createdAt: new Date(),
                createdTimestamp: Date.now(),
                botRequireCodeGrant: false,
                botPublic: false,
                description: "A bot made in discord.js",
                name: "Vale",
                owner: vale.client.user,
                iconURL: vale.client.user.avatarURL,
                icon: vale.client.user.avatar
            };
        }
        if (message.author.id === app.owner.id) {
            try {
                message.channel.send("```js\n" + util_1.inspect(await eval(message.content.split(' ').slice(1).join(' '))) + "```", {
                    split: true
                });
            }
            catch (error) {
                message.channel.send("```js\n" + error.message + "```", {
                    split: true
                });
            }
        }
        else {
            message.reply("**You are not allowed to use this command!**");
        }
    },
});
async function init(vale) {
    exports.command.usage = vale.opts.config.prefix + exports.command.usage;
    exports.command.exp = new RegExp('^' + vale.opts.config.prefix + "e(val)?( |\n).+$", "smi");
    return exports.command;
} //init
exports.init = init;
exports.default = init;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9jb21tYW5kcy9ldmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0FBRWIsaUVBQWlDO0FBRWpDLCtCQUErQjtBQUVsQixRQUFBLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDO0lBQzFDLElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSSxFQUFFLGtDQUFrQztJQUN4QyxLQUFLLEVBQUUsaUJBQWlCO0lBQ3hCLEdBQUcsRUFBRSx1QkFBdUI7SUFDNUIsUUFBUSxFQUFFLE9BQU87SUFDakIsSUFBSSxFQUFFLEtBQUssVUFBVSxJQUFJLENBQUMsT0FBZ0IsRUFBRSxJQUFrQjtRQUM3RCxJQUFJLEdBQXNCLENBQUM7UUFFM0IsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDekIsR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzNDO2FBQU07WUFDTixZQUFZO1lBQ1osR0FBRyxHQUFzQjtnQkFDeEIsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFO2dCQUNyQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUM1QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixTQUFTLEVBQUUsS0FBSztnQkFDaEIsV0FBVyxFQUFFLDBCQUEwQjtnQkFDdkMsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtnQkFDdkIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVM7Z0JBQ25DLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNO2FBQzdCLENBQUM7U0FDRjtRQUVELElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBSTtnQkFDSCxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRTtvQkFDNUcsS0FBSyxFQUFFLElBQUk7aUJBQ1gsQ0FBQyxDQUFDO2FBQ0g7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQUU7b0JBQ3ZELEtBQUssRUFBRSxJQUFJO2lCQUNYLENBQUMsQ0FBQzthQUNIO1NBQ0Q7YUFBTTtZQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztTQUM5RDtJQUNGLENBQUM7Q0FDRCxDQUFDLENBQUM7QUFFSSxLQUFLLFVBQVUsSUFBSSxDQUFDLElBQWtCO0lBQzVDLGVBQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGVBQU8sQ0FBQyxLQUFLLENBQUM7SUFDeEQsZUFBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXBGLE9BQU8sZUFBTyxDQUFDO0FBQ2hCLENBQUMsQ0FBQyxNQUFNO0FBTFIsb0JBS0M7QUFFRCxrQkFBZSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBDbGFzc2VzIGZyb20gXCIuLi9DbGFzc2VzXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIE9BdXRoMkFwcGxpY2F0aW9uIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IHsgaW5zcGVjdCB9IGZyb20gXCJ1dGlsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29tbWFuZCA9IG5ldyBDbGFzc2VzLkNvbW1hbmQoe1xyXG5cdG5hbWU6IFwiZXZhbFwiLFxyXG5cdGRlc2M6IFwiRXZhbHVhdGUgYSBKYXZhU2NyaXB0IGV4cHJlc3Npb25cIixcclxuXHR1c2FnZTogXCJldmFsWyBjb2RlPEpTPl1cIixcclxuXHRleHA6IC9eIWUodmFsKT8oIHxcXG4pLiskL3NtaSxcclxuXHRjYXRlZ29yeTogXCJPd25lclwiLFxyXG5cdGJvZHk6IGFzeW5jIGZ1bmN0aW9uIGJvZHkobWVzc2FnZTogTWVzc2FnZSwgdmFsZTogQ2xhc3Nlcy5WYWxlKSB7XHJcblx0XHRsZXQgYXBwOiBPQXV0aDJBcHBsaWNhdGlvbjtcclxuXHJcblx0XHRpZiAodmFsZS5jbGllbnQudXNlci5ib3QpIHtcclxuXHRcdFx0YXBwID0gYXdhaXQgdmFsZS5jbGllbnQuZmV0Y2hBcHBsaWNhdGlvbigpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly9AdHMtaWdub3JlXHJcblx0XHRcdGFwcCA9IDxPQXV0aDJBcHBsaWNhdGlvbj57XHJcblx0XHRcdFx0Y3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG5cdFx0XHRcdGNyZWF0ZWRUaW1lc3RhbXA6IERhdGUubm93KCksXHJcblx0XHRcdFx0Ym90UmVxdWlyZUNvZGVHcmFudDogZmFsc2UsXHJcblx0XHRcdFx0Ym90UHVibGljOiBmYWxzZSxcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJBIGJvdCBtYWRlIGluIGRpc2NvcmQuanNcIixcclxuXHRcdFx0XHRuYW1lOiBcIlZhbGVcIixcclxuXHRcdFx0XHRvd25lcjogdmFsZS5jbGllbnQudXNlcixcclxuXHRcdFx0XHRpY29uVVJMOiB2YWxlLmNsaWVudC51c2VyLmF2YXRhclVSTCxcclxuXHRcdFx0XHRpY29uOiB2YWxlLmNsaWVudC51c2VyLmF2YXRhclxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChtZXNzYWdlLmF1dGhvci5pZCA9PT0gYXBwLm93bmVyLmlkKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0bWVzc2FnZS5jaGFubmVsLnNlbmQoXCJgYGBqc1xcblwiICsgaW5zcGVjdChhd2FpdCBldmFsKG1lc3NhZ2UuY29udGVudC5zcGxpdCgnICcpLnNsaWNlKDEpLmpvaW4oJyAnKSkpICsgXCJgYGBcIiwge1xyXG5cdFx0XHRcdFx0c3BsaXQ6IHRydWVcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0XHRtZXNzYWdlLmNoYW5uZWwuc2VuZChcImBgYGpzXFxuXCIgKyBlcnJvci5tZXNzYWdlICsgXCJgYGBcIiwge1xyXG5cdFx0XHRcdFx0c3BsaXQ6IHRydWVcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bWVzc2FnZS5yZXBseShcIioqWW91IGFyZSBub3QgYWxsb3dlZCB0byB1c2UgdGhpcyBjb21tYW5kISoqXCIpO1xyXG5cdFx0fVxyXG5cdH0sIC8vYm9keVxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0KHZhbGU6IENsYXNzZXMuVmFsZSkge1xyXG5cdGNvbW1hbmQudXNhZ2UgPSB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIGNvbW1hbmQudXNhZ2U7XHJcblx0Y29tbWFuZC5leHAgPSBuZXcgUmVnRXhwKCdeJyArIHZhbGUub3B0cy5jb25maWcucHJlZml4ICsgXCJlKHZhbCk/KCB8XFxuKS4rJFwiLCBcInNtaVwiKTtcclxuXHJcblx0cmV0dXJuIGNvbW1hbmQ7XHJcbn0gLy9pbml0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG4iXX0=