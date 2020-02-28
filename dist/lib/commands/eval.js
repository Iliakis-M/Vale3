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
                message.channel.send(util_1.inspect(await eval(message.content.split(' ').slice(1).join(' '))), {
                    split: true,
                    code: "javascript"
                });
            }
            catch (error) {
                message.channel.send(error.message, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9jb21tYW5kcy9ldmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0FBRWIsaUVBQWlDO0FBRWpDLCtCQUErQjtBQUVsQixRQUFBLE9BQU8sR0FBb0IsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQztJQUMzRCxJQUFJLEVBQUUsTUFBTTtJQUNaLElBQUksRUFBRSxrQ0FBa0M7SUFDeEMsS0FBSyxFQUFFLGlCQUFpQjtJQUN4QixHQUFHLEVBQUUsdUJBQXVCO0lBQzVCLFFBQVEsRUFBRSxPQUFPO0lBQ2pCLElBQUksRUFBRSxFQUFHO0lBQ1QsSUFBSSxFQUFFLEtBQUssVUFBVSxJQUFJLENBQUMsT0FBZ0IsRUFBRSxJQUFrQjtRQUM3RCxJQUFJLEdBQXNCLEVBQ3pCLEtBQUssR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDekIsR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzNDO2FBQU07WUFDTixZQUFZO1lBQ1osR0FBRyxHQUFzQjtnQkFDeEIsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFO2dCQUNyQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUM1QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixTQUFTLEVBQUUsS0FBSztnQkFDaEIsV0FBVyxFQUFFLDBCQUEwQjtnQkFDdkMsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtnQkFDdkIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVM7Z0JBQ25DLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNO2FBQzdCLENBQUM7U0FDRjtRQUVELElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBSTtnQkFDSCxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ3hGLEtBQUssRUFBRSxJQUFJO29CQUNYLElBQUksRUFBRSxZQUFZO2lCQUNsQixDQUFDLENBQUM7YUFDSDtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7b0JBQ25DLEtBQUssRUFBRSxJQUFJO29CQUNYLElBQUksRUFBRSxZQUFZO2lCQUNsQixDQUFDLENBQUM7YUFDSDtTQUNEO2FBQU07WUFDTixLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztTQUN0RDtJQUNGLENBQUM7Q0FDRCxDQUFDLENBQUM7QUFFSSxLQUFLLFVBQVUsSUFBSSxDQUFDLElBQWtCO0lBQzVDLGVBQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGVBQU8sQ0FBQyxLQUFLLENBQUM7SUFDeEQsZUFBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXBGLE9BQU8sZUFBTyxDQUFDO0FBQ2hCLENBQUMsQ0FBQyxNQUFNO0FBTFIsb0JBS0M7QUFFRCxrQkFBZSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBDbGFzc2VzIGZyb20gXCIuLi9DbGFzc2VzXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIE9BdXRoMkFwcGxpY2F0aW9uIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IHsgaW5zcGVjdCB9IGZyb20gXCJ1dGlsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29tbWFuZDogQ2xhc3Nlcy5Db21tYW5kID0gbmV3IENsYXNzZXMuQ29tbWFuZCh7XHJcblx0bmFtZTogXCJldmFsXCIsXHJcblx0ZGVzYzogXCJFdmFsdWF0ZSBhIEphdmFTY3JpcHQgZXhwcmVzc2lvblwiLFxyXG5cdHVzYWdlOiBcImV2YWxbIGNvZGU8SlM+XVwiLFxyXG5cdGV4cDogL14hZSh2YWwpPyggfFxcbikuKyQvc21pLFxyXG5cdGNhdGVnb3J5OiBcIk93bmVyXCIsXHJcblx0ZGF0YTogeyB9LFxyXG5cdGJvZHk6IGFzeW5jIGZ1bmN0aW9uIGJvZHkobWVzc2FnZTogTWVzc2FnZSwgdmFsZTogQ2xhc3Nlcy5WYWxlKTogUHJvbWlzZTx2b2lkPiB7XHJcblx0XHRsZXQgYXBwOiBPQXV0aDJBcHBsaWNhdGlvbixcclxuXHRcdFx0cmVwbHkgPSBDbGFzc2VzLmZhaWxzYWZlLmJpbmQobWVzc2FnZSk7XHJcblxyXG5cdFx0aWYgKHZhbGUuY2xpZW50LnVzZXIuYm90KSB7XHJcblx0XHRcdGFwcCA9IGF3YWl0IHZhbGUuY2xpZW50LmZldGNoQXBwbGljYXRpb24oKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vQHRzLWlnbm9yZVxyXG5cdFx0XHRhcHAgPSA8T0F1dGgyQXBwbGljYXRpb24+e1xyXG5cdFx0XHRcdGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcclxuXHRcdFx0XHRjcmVhdGVkVGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG5cdFx0XHRcdGJvdFJlcXVpcmVDb2RlR3JhbnQ6IGZhbHNlLFxyXG5cdFx0XHRcdGJvdFB1YmxpYzogZmFsc2UsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwiQSBib3QgbWFkZSBpbiBkaXNjb3JkLmpzXCIsXHJcblx0XHRcdFx0bmFtZTogXCJWYWxlXCIsXHJcblx0XHRcdFx0b3duZXI6IHZhbGUuY2xpZW50LnVzZXIsXHJcblx0XHRcdFx0aWNvblVSTDogdmFsZS5jbGllbnQudXNlci5hdmF0YXJVUkwsXHJcblx0XHRcdFx0aWNvbjogdmFsZS5jbGllbnQudXNlci5hdmF0YXJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAobWVzc2FnZS5hdXRob3IuaWQgPT09IGFwcC5vd25lci5pZCkge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdG1lc3NhZ2UuY2hhbm5lbC5zZW5kKGluc3BlY3QoYXdhaXQgZXZhbChtZXNzYWdlLmNvbnRlbnQuc3BsaXQoJyAnKS5zbGljZSgxKS5qb2luKCcgJykpKSwge1xyXG5cdFx0XHRcdFx0c3BsaXQ6IHRydWUsXHJcblx0XHRcdFx0XHRjb2RlOiBcImphdmFzY3JpcHRcIlxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRcdG1lc3NhZ2UuY2hhbm5lbC5zZW5kKGVycm9yLm1lc3NhZ2UsIHtcclxuXHRcdFx0XHRcdHNwbGl0OiB0cnVlLFxyXG5cdFx0XHRcdFx0Y29kZTogXCJqYXZhc2NyaXB0XCJcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVwbHkoXCIqKllvdSBhcmUgbm90IGFsbG93ZWQgdG8gdXNlIHRoaXMgY29tbWFuZCEqKlwiKTtcclxuXHRcdH1cclxuXHR9LCAvL2JvZHlcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdCh2YWxlOiBDbGFzc2VzLlZhbGUpOiBQcm9taXNlPENsYXNzZXMuQ29tbWFuZD4ge1xyXG5cdGNvbW1hbmQudXNhZ2UgPSB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIGNvbW1hbmQudXNhZ2U7XHJcblx0Y29tbWFuZC5leHAgPSBuZXcgUmVnRXhwKCdeJyArIHZhbGUub3B0cy5jb25maWcucHJlZml4ICsgXCJlKHZhbCk/KCB8XFxuKS4rJFwiLCBcInNtaVwiKTtcclxuXHJcblx0cmV0dXJuIGNvbW1hbmQ7XHJcbn0gLy9pbml0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG4iXX0=