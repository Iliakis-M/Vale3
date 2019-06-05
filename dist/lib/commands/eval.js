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
                    split: true,
                    code: "javascript"
                });
            }
            catch (error) {
                message.channel.send("```js\n" + error.message + "```", {
                    split: true,
                    code: "javascript"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9jb21tYW5kcy9ldmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0FBRWIsaUVBQWlDO0FBRWpDLCtCQUErQjtBQUVsQixRQUFBLE9BQU8sR0FBb0IsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQztJQUMzRCxJQUFJLEVBQUUsTUFBTTtJQUNaLElBQUksRUFBRSxrQ0FBa0M7SUFDeEMsS0FBSyxFQUFFLGlCQUFpQjtJQUN4QixHQUFHLEVBQUUsdUJBQXVCO0lBQzVCLFFBQVEsRUFBRSxPQUFPO0lBQ2pCLElBQUksRUFBRSxFQUFHO0lBQ1QsSUFBSSxFQUFFLEtBQUssVUFBVSxJQUFJLENBQUMsT0FBZ0IsRUFBRSxJQUFrQjtRQUM3RCxJQUFJLEdBQXNCLEVBQ3pCLEtBQUssR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDekIsR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzNDO2FBQU07WUFDTixZQUFZO1lBQ1osR0FBRyxHQUFzQjtnQkFDeEIsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFO2dCQUNyQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUM1QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixTQUFTLEVBQUUsS0FBSztnQkFDaEIsV0FBVyxFQUFFLDBCQUEwQjtnQkFDdkMsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtnQkFDdkIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVM7Z0JBQ25DLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNO2FBQzdCLENBQUM7U0FDRjtRQUVELElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBSTtnQkFDSCxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRTtvQkFDNUcsS0FBSyxFQUFFLElBQUk7b0JBQ1gsSUFBSSxFQUFFLFlBQVk7aUJBQ2xCLENBQUMsQ0FBQzthQUNIO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxFQUFFO29CQUN2RCxLQUFLLEVBQUUsSUFBSTtvQkFDWCxJQUFJLEVBQUUsWUFBWTtpQkFDbEIsQ0FBQyxDQUFDO2FBQ0g7U0FDRDthQUFNO1lBQ04sS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7U0FDdEQ7SUFDRixDQUFDO0NBQ0QsQ0FBQyxDQUFDO0FBRUksS0FBSyxVQUFVLElBQUksQ0FBQyxJQUFrQjtJQUM1QyxlQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxlQUFPLENBQUMsS0FBSyxDQUFDO0lBQ3hELGVBQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUVwRixPQUFPLGVBQU8sQ0FBQztBQUNoQixDQUFDLENBQUMsTUFBTTtBQUxSLG9CQUtDO0FBRUQsa0JBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgQ2xhc3NlcyBmcm9tIFwiLi4vQ2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBPQXV0aDJBcHBsaWNhdGlvbiB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IGluc3BlY3QgfSBmcm9tIFwidXRpbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1hbmQ6IENsYXNzZXMuQ29tbWFuZCA9IG5ldyBDbGFzc2VzLkNvbW1hbmQoe1xyXG5cdG5hbWU6IFwiZXZhbFwiLFxyXG5cdGRlc2M6IFwiRXZhbHVhdGUgYSBKYXZhU2NyaXB0IGV4cHJlc3Npb25cIixcclxuXHR1c2FnZTogXCJldmFsWyBjb2RlPEpTPl1cIixcclxuXHRleHA6IC9eIWUodmFsKT8oIHxcXG4pLiskL3NtaSxcclxuXHRjYXRlZ29yeTogXCJPd25lclwiLFxyXG5cdGRhdGE6IHsgfSxcclxuXHRib2R5OiBhc3luYyBmdW5jdGlvbiBib2R5KG1lc3NhZ2U6IE1lc3NhZ2UsIHZhbGU6IENsYXNzZXMuVmFsZSk6IFByb21pc2U8dm9pZD4ge1xyXG5cdFx0bGV0IGFwcDogT0F1dGgyQXBwbGljYXRpb24sXHJcblx0XHRcdHJlcGx5ID0gQ2xhc3Nlcy5mYWlsc2FmZS5iaW5kKG1lc3NhZ2UpO1xyXG5cclxuXHRcdGlmICh2YWxlLmNsaWVudC51c2VyLmJvdCkge1xyXG5cdFx0XHRhcHAgPSBhd2FpdCB2YWxlLmNsaWVudC5mZXRjaEFwcGxpY2F0aW9uKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvL0B0cy1pZ25vcmVcclxuXHRcdFx0YXBwID0gPE9BdXRoMkFwcGxpY2F0aW9uPntcclxuXHRcdFx0XHRjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXHJcblx0XHRcdFx0Y3JlYXRlZFRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuXHRcdFx0XHRib3RSZXF1aXJlQ29kZUdyYW50OiBmYWxzZSxcclxuXHRcdFx0XHRib3RQdWJsaWM6IGZhbHNlLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcIkEgYm90IG1hZGUgaW4gZGlzY29yZC5qc1wiLFxyXG5cdFx0XHRcdG5hbWU6IFwiVmFsZVwiLFxyXG5cdFx0XHRcdG93bmVyOiB2YWxlLmNsaWVudC51c2VyLFxyXG5cdFx0XHRcdGljb25VUkw6IHZhbGUuY2xpZW50LnVzZXIuYXZhdGFyVVJMLFxyXG5cdFx0XHRcdGljb246IHZhbGUuY2xpZW50LnVzZXIuYXZhdGFyXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKG1lc3NhZ2UuYXV0aG9yLmlkID09PSBhcHAub3duZXIuaWQpIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRtZXNzYWdlLmNoYW5uZWwuc2VuZChcImBgYGpzXFxuXCIgKyBpbnNwZWN0KGF3YWl0IGV2YWwobWVzc2FnZS5jb250ZW50LnNwbGl0KCcgJykuc2xpY2UoMSkuam9pbignICcpKSkgKyBcImBgYFwiLCB7XHJcblx0XHRcdFx0XHRzcGxpdDogdHJ1ZSxcclxuXHRcdFx0XHRcdGNvZGU6IFwiamF2YXNjcmlwdFwiXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdFx0bWVzc2FnZS5jaGFubmVsLnNlbmQoXCJgYGBqc1xcblwiICsgZXJyb3IubWVzc2FnZSArIFwiYGBgXCIsIHtcclxuXHRcdFx0XHRcdHNwbGl0OiB0cnVlLFxyXG5cdFx0XHRcdFx0Y29kZTogXCJqYXZhc2NyaXB0XCJcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVwbHkoXCIqKllvdSBhcmUgbm90IGFsbG93ZWQgdG8gdXNlIHRoaXMgY29tbWFuZCEqKlwiKTtcclxuXHRcdH1cclxuXHR9LCAvL2JvZHlcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdCh2YWxlOiBDbGFzc2VzLlZhbGUpOiBQcm9taXNlPENsYXNzZXMuQ29tbWFuZD4ge1xyXG5cdGNvbW1hbmQudXNhZ2UgPSB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIGNvbW1hbmQudXNhZ2U7XHJcblx0Y29tbWFuZC5leHAgPSBuZXcgUmVnRXhwKCdeJyArIHZhbGUub3B0cy5jb25maWcucHJlZml4ICsgXCJlKHZhbCk/KCB8XFxuKS4rJFwiLCBcInNtaVwiKTtcclxuXHJcblx0cmV0dXJuIGNvbW1hbmQ7XHJcbn0gLy9pbml0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG4iXX0=