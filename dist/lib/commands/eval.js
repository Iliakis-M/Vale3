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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9jb21tYW5kcy9ldmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0FBRWIsaUVBQWlDO0FBRWpDLCtCQUErQjtBQUVsQixRQUFBLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDO0lBQzFDLElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSSxFQUFFLGtDQUFrQztJQUN4QyxLQUFLLEVBQUUsaUJBQWlCO0lBQ3hCLEdBQUcsRUFBRSx1QkFBdUI7SUFDNUIsUUFBUSxFQUFFLE9BQU87SUFDakIsSUFBSSxFQUFFLEVBQUc7SUFDVCxJQUFJLEVBQUUsS0FBSyxVQUFVLElBQUksQ0FBQyxPQUFnQixFQUFFLElBQWtCO1FBQzdELElBQUksR0FBc0IsRUFDekIsS0FBSyxHQUFHLGlCQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV4QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUN6QixHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDM0M7YUFBTTtZQUNOLFlBQVk7WUFDWixHQUFHLEdBQXNCO2dCQUN4QixTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUU7Z0JBQ3JCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQzVCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO2dCQUN2QixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUztnQkFDbkMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07YUFDN0IsQ0FBQztTQUNGO1FBRUQsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRTtZQUN2QyxJQUFJO2dCQUNILE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFO29CQUM1RyxLQUFLLEVBQUUsSUFBSTtpQkFDWCxDQUFDLENBQUM7YUFDSDtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssRUFBRTtvQkFDdkQsS0FBSyxFQUFFLElBQUk7aUJBQ1gsQ0FBQyxDQUFDO2FBQ0g7U0FDRDthQUFNO1lBQ04sS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7U0FDdEQ7SUFDRixDQUFDO0NBQ0QsQ0FBQyxDQUFDO0FBRUksS0FBSyxVQUFVLElBQUksQ0FBQyxJQUFrQjtJQUM1QyxlQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxlQUFPLENBQUMsS0FBSyxDQUFDO0lBQ3hELGVBQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUVwRixPQUFPLGVBQU8sQ0FBQztBQUNoQixDQUFDLENBQUMsTUFBTTtBQUxSLG9CQUtDO0FBRUQsa0JBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgQ2xhc3NlcyBmcm9tIFwiLi4vQ2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBPQXV0aDJBcHBsaWNhdGlvbiB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IGluc3BlY3QgfSBmcm9tIFwidXRpbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1hbmQgPSBuZXcgQ2xhc3Nlcy5Db21tYW5kKHtcclxuXHRuYW1lOiBcImV2YWxcIixcclxuXHRkZXNjOiBcIkV2YWx1YXRlIGEgSmF2YVNjcmlwdCBleHByZXNzaW9uXCIsXHJcblx0dXNhZ2U6IFwiZXZhbFsgY29kZTxKUz5dXCIsXHJcblx0ZXhwOiAvXiFlKHZhbCk/KCB8XFxuKS4rJC9zbWksXHJcblx0Y2F0ZWdvcnk6IFwiT3duZXJcIixcclxuXHRkYXRhOiB7IH0sXHJcblx0Ym9keTogYXN5bmMgZnVuY3Rpb24gYm9keShtZXNzYWdlOiBNZXNzYWdlLCB2YWxlOiBDbGFzc2VzLlZhbGUpIHtcclxuXHRcdGxldCBhcHA6IE9BdXRoMkFwcGxpY2F0aW9uLFxyXG5cdFx0XHRyZXBseSA9IENsYXNzZXMuZmFpbHNhZmUuYmluZChtZXNzYWdlKTtcclxuXHJcblx0XHRpZiAodmFsZS5jbGllbnQudXNlci5ib3QpIHtcclxuXHRcdFx0YXBwID0gYXdhaXQgdmFsZS5jbGllbnQuZmV0Y2hBcHBsaWNhdGlvbigpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly9AdHMtaWdub3JlXHJcblx0XHRcdGFwcCA9IDxPQXV0aDJBcHBsaWNhdGlvbj57XHJcblx0XHRcdFx0Y3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG5cdFx0XHRcdGNyZWF0ZWRUaW1lc3RhbXA6IERhdGUubm93KCksXHJcblx0XHRcdFx0Ym90UmVxdWlyZUNvZGVHcmFudDogZmFsc2UsXHJcblx0XHRcdFx0Ym90UHVibGljOiBmYWxzZSxcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJBIGJvdCBtYWRlIGluIGRpc2NvcmQuanNcIixcclxuXHRcdFx0XHRuYW1lOiBcIlZhbGVcIixcclxuXHRcdFx0XHRvd25lcjogdmFsZS5jbGllbnQudXNlcixcclxuXHRcdFx0XHRpY29uVVJMOiB2YWxlLmNsaWVudC51c2VyLmF2YXRhclVSTCxcclxuXHRcdFx0XHRpY29uOiB2YWxlLmNsaWVudC51c2VyLmF2YXRhclxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChtZXNzYWdlLmF1dGhvci5pZCA9PT0gYXBwLm93bmVyLmlkKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0bWVzc2FnZS5jaGFubmVsLnNlbmQoXCJgYGBqc1xcblwiICsgaW5zcGVjdChhd2FpdCBldmFsKG1lc3NhZ2UuY29udGVudC5zcGxpdCgnICcpLnNsaWNlKDEpLmpvaW4oJyAnKSkpICsgXCJgYGBcIiwge1xyXG5cdFx0XHRcdFx0c3BsaXQ6IHRydWVcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0XHRtZXNzYWdlLmNoYW5uZWwuc2VuZChcImBgYGpzXFxuXCIgKyBlcnJvci5tZXNzYWdlICsgXCJgYGBcIiwge1xyXG5cdFx0XHRcdFx0c3BsaXQ6IHRydWVcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVwbHkoXCIqKllvdSBhcmUgbm90IGFsbG93ZWQgdG8gdXNlIHRoaXMgY29tbWFuZCEqKlwiKTtcclxuXHRcdH1cclxuXHR9LCAvL2JvZHlcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdCh2YWxlOiBDbGFzc2VzLlZhbGUpIHtcclxuXHRjb21tYW5kLnVzYWdlID0gdmFsZS5vcHRzLmNvbmZpZy5wcmVmaXggKyBjb21tYW5kLnVzYWdlO1xyXG5cdGNvbW1hbmQuZXhwID0gbmV3IFJlZ0V4cCgnXicgKyB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIFwiZSh2YWwpPyggfFxcbikuKyRcIiwgXCJzbWlcIik7XHJcblxyXG5cdHJldHVybiBjb21tYW5kO1xyXG59IC8vaW5pdFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcclxuIl19