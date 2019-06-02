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
    data: {},
    body: async function body(message, vale) {
        let app, reply = Classes_1.default.failsafe.bind(message);
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
            reply("**You are not allowed to use this command!**");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9jb21tYW5kcy9ldmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0FBRWIsaUVBQWlDO0FBRWpDLCtCQUErQjtBQUVsQixRQUFBLE9BQU8sR0FBb0IsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQztJQUMzRCxJQUFJLEVBQUUsTUFBTTtJQUNaLElBQUksRUFBRSxrQ0FBa0M7SUFDeEMsS0FBSyxFQUFFLGlCQUFpQjtJQUN4QixHQUFHLEVBQUUsdUJBQXVCO0lBQzVCLFFBQVEsRUFBRSxPQUFPO0lBQ2pCLElBQUksRUFBRSxFQUFHO0lBQ1QsSUFBSSxFQUFFLEtBQUssVUFBVSxJQUFJLENBQUMsT0FBZ0IsRUFBRSxJQUFrQjtRQUM3RCxJQUFJLEdBQXNCLEVBQ3pCLEtBQUssR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDekIsR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzNDO2FBQU07WUFDTixZQUFZO1lBQ1osR0FBRyxHQUFzQjtnQkFDeEIsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFO2dCQUNyQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUM1QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixTQUFTLEVBQUUsS0FBSztnQkFDaEIsV0FBVyxFQUFFLDBCQUEwQjtnQkFDdkMsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtnQkFDdkIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVM7Z0JBQ25DLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNO2FBQzdCLENBQUM7U0FDRjtRQUVELElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBSTtnQkFDSCxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRTtvQkFDNUcsS0FBSyxFQUFFLElBQUk7aUJBQ1gsQ0FBQyxDQUFDO2FBQ0g7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQUU7b0JBQ3ZELEtBQUssRUFBRSxJQUFJO2lCQUNYLENBQUMsQ0FBQzthQUNIO1NBQ0Q7YUFBTTtZQUNOLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1NBQ3REO0lBQ0YsQ0FBQztDQUNELENBQUMsQ0FBQztBQUVJLEtBQUssVUFBVSxJQUFJLENBQUMsSUFBa0I7SUFDNUMsZUFBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsZUFBTyxDQUFDLEtBQUssQ0FBQztJQUN4RCxlQUFPLENBQUMsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFcEYsT0FBTyxlQUFPLENBQUM7QUFDaEIsQ0FBQyxDQUFDLE1BQU07QUFMUixvQkFLQztBQUVELGtCQUFlLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IENsYXNzZXMgZnJvbSBcIi4uL0NsYXNzZXNcIjtcclxuaW1wb3J0IHsgTWVzc2FnZSwgT0F1dGgyQXBwbGljYXRpb24gfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5pbXBvcnQgeyBpbnNwZWN0IH0gZnJvbSBcInV0aWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjb21tYW5kOiBDbGFzc2VzLkNvbW1hbmQgPSBuZXcgQ2xhc3Nlcy5Db21tYW5kKHtcclxuXHRuYW1lOiBcImV2YWxcIixcclxuXHRkZXNjOiBcIkV2YWx1YXRlIGEgSmF2YVNjcmlwdCBleHByZXNzaW9uXCIsXHJcblx0dXNhZ2U6IFwiZXZhbFsgY29kZTxKUz5dXCIsXHJcblx0ZXhwOiAvXiFlKHZhbCk/KCB8XFxuKS4rJC9zbWksXHJcblx0Y2F0ZWdvcnk6IFwiT3duZXJcIixcclxuXHRkYXRhOiB7IH0sXHJcblx0Ym9keTogYXN5bmMgZnVuY3Rpb24gYm9keShtZXNzYWdlOiBNZXNzYWdlLCB2YWxlOiBDbGFzc2VzLlZhbGUpOiBQcm9taXNlPHZvaWQ+IHtcclxuXHRcdGxldCBhcHA6IE9BdXRoMkFwcGxpY2F0aW9uLFxyXG5cdFx0XHRyZXBseSA9IENsYXNzZXMuZmFpbHNhZmUuYmluZChtZXNzYWdlKTtcclxuXHJcblx0XHRpZiAodmFsZS5jbGllbnQudXNlci5ib3QpIHtcclxuXHRcdFx0YXBwID0gYXdhaXQgdmFsZS5jbGllbnQuZmV0Y2hBcHBsaWNhdGlvbigpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly9AdHMtaWdub3JlXHJcblx0XHRcdGFwcCA9IDxPQXV0aDJBcHBsaWNhdGlvbj57XHJcblx0XHRcdFx0Y3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG5cdFx0XHRcdGNyZWF0ZWRUaW1lc3RhbXA6IERhdGUubm93KCksXHJcblx0XHRcdFx0Ym90UmVxdWlyZUNvZGVHcmFudDogZmFsc2UsXHJcblx0XHRcdFx0Ym90UHVibGljOiBmYWxzZSxcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJBIGJvdCBtYWRlIGluIGRpc2NvcmQuanNcIixcclxuXHRcdFx0XHRuYW1lOiBcIlZhbGVcIixcclxuXHRcdFx0XHRvd25lcjogdmFsZS5jbGllbnQudXNlcixcclxuXHRcdFx0XHRpY29uVVJMOiB2YWxlLmNsaWVudC51c2VyLmF2YXRhclVSTCxcclxuXHRcdFx0XHRpY29uOiB2YWxlLmNsaWVudC51c2VyLmF2YXRhclxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChtZXNzYWdlLmF1dGhvci5pZCA9PT0gYXBwLm93bmVyLmlkKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0bWVzc2FnZS5jaGFubmVsLnNlbmQoXCJgYGBqc1xcblwiICsgaW5zcGVjdChhd2FpdCBldmFsKG1lc3NhZ2UuY29udGVudC5zcGxpdCgnICcpLnNsaWNlKDEpLmpvaW4oJyAnKSkpICsgXCJgYGBcIiwge1xyXG5cdFx0XHRcdFx0c3BsaXQ6IHRydWVcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0XHRtZXNzYWdlLmNoYW5uZWwuc2VuZChcImBgYGpzXFxuXCIgKyBlcnJvci5tZXNzYWdlICsgXCJgYGBcIiwge1xyXG5cdFx0XHRcdFx0c3BsaXQ6IHRydWVcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVwbHkoXCIqKllvdSBhcmUgbm90IGFsbG93ZWQgdG8gdXNlIHRoaXMgY29tbWFuZCEqKlwiKTtcclxuXHRcdH1cclxuXHR9LCAvL2JvZHlcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdCh2YWxlOiBDbGFzc2VzLlZhbGUpOiBQcm9taXNlPENsYXNzZXMuQ29tbWFuZD4ge1xyXG5cdGNvbW1hbmQudXNhZ2UgPSB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIGNvbW1hbmQudXNhZ2U7XHJcblx0Y29tbWFuZC5leHAgPSBuZXcgUmVnRXhwKCdeJyArIHZhbGUub3B0cy5jb25maWcucHJlZml4ICsgXCJlKHZhbCk/KCB8XFxuKS4rJFwiLCBcInNtaVwiKTtcclxuXHJcblx0cmV0dXJuIGNvbW1hbmQ7XHJcbn0gLy9pbml0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG4iXX0=