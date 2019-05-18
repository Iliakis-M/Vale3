"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Classes_1 = tslib_1.__importDefault(require("../Classes"));
exports.command = new Classes_1.default.Command({
    name: "avatar",
    desc: "Fetch a user's avatar",
    usage: "avatar[ username<String>]",
    exp: /^!ava(tar)?( .+)?$/smi,
    category: "Utility",
    body: async function body(message, vale) {
        /**
         * PROPAGATE:
         * Channel > Guild > Group(?)
         * Nickname > Username
         *
         * Can fetch guild/group banner
         */
        try {
            let send; //!!move to inner-scope
            if (message.mentions.users.size) {
                message.reply(message.mentions.users.map((usr) => usr.avatarURL));
            }
            else if (message.content.includes(' ')) {
                let targ = message.content.split(' ').pop(), from = (message.channel["recipients"] || message.channel["members"]);
                if (from) {
                    let tmp;
                    if (message.guild) {
                        tmp = from.find((mmb) => mmb.user.username === targ || mmb.nickname === targ || mmb.id === targ) || //user, nick, id
                            from.find((mmb) => mmb.nickname.includes(targ) || mmb.user.username.includes(targ)) || //substr
                            from.find((mmb) => mmb.nickname.toLowerCase().includes(targ.toLowerCase()) || mmb.user.username.toLowerCase().includes(targ.toLowerCase())); //lower
                        send = tmp.user.avatarURL;
                    }
                    else {
                        tmp = from.find((mmb) => mmb.username === targ || mmb.id === targ) || //user, id
                            from.find((mmb) => mmb.username.includes(targ)) || //substr
                            from.find((mmb) => mmb.username.toLowerCase().includes(targ.toLowerCase())); //lower
                        send = tmp.user.avatarURL;
                    }
                }
                else {
                    send = message.channel["recipient"].avatarURL;
                }
                message.reply(send);
            }
            else {
                message.reply(message.author.avatarURL);
            }
        }
        catch (err) {
            message.reply("User not found!");
        }
    },
});
async function init(vale) {
    exports.command.usage = vale.opts.config.prefix + exports.command.usage;
    exports.command.exp = new RegExp('^' + vale.opts.config.prefix + "ava(tar)?( .+)?$", "smi");
    return exports.command;
} //init
exports.init = init;
exports.default = init;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2NvbW1hbmRzL2F2YXRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztBQUViLGlFQUFpQztBQUdwQixRQUFBLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDO0lBQzFDLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLHVCQUF1QjtJQUM3QixLQUFLLEVBQUUsMkJBQTJCO0lBQ2xDLEdBQUcsRUFBRSx1QkFBdUI7SUFDNUIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsSUFBSSxFQUFFLEtBQUssVUFBVSxJQUFJLENBQUMsT0FBZ0IsRUFBRSxJQUFrQjtRQUM3RDs7Ozs7O1dBTUc7UUFDSCxJQUFJO1lBQ0gsSUFBSSxJQUFZLENBQUMsQ0FBRSx1QkFBdUI7WUFFMUMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBUyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUN4RTtpQkFBTSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN4QyxJQUFJLElBQUksR0FBVyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFDbkQsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBRXRFLElBQUksSUFBSSxFQUFFO29CQUNULElBQUksR0FBRyxDQUFDO29CQUVSLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTt3QkFDbEIsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFnQixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLFFBQVEsS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSyxnQkFBZ0I7NEJBQ2xJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFnQixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSyxRQUFROzRCQUM3RyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBZ0IsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxPQUFPO3dCQUVsSyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7cUJBQzFCO3lCQUFNO3dCQUNOLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBUyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFLLFVBQVU7NEJBQ3ZGLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFTLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUssUUFBUTs0QkFDbEUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQVMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFFLE9BQU87d0JBRTNGLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztxQkFDMUI7aUJBQ0Q7cUJBQU07b0JBQ04sSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDO2lCQUM5QztnQkFFRCxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3BCO2lCQUFNO2dCQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUN4QztTQUNEO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDYixPQUFPLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDakM7SUFDRixDQUFDO0NBQ0QsQ0FBQyxDQUFDO0FBRUksS0FBSyxVQUFVLElBQUksQ0FBQyxJQUFrQjtJQUM1QyxlQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxlQUFPLENBQUMsS0FBSyxDQUFDO0lBQ3hELGVBQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUVwRixPQUFPLGVBQU8sQ0FBQztBQUNoQixDQUFDLENBQUMsTUFBTTtBQUxSLG9CQUtDO0FBRUQsa0JBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgQ2xhc3NlcyBmcm9tIFwiLi4vQ2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBHdWlsZE1lbWJlciwgVXNlciB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29tbWFuZCA9IG5ldyBDbGFzc2VzLkNvbW1hbmQoe1xyXG5cdG5hbWU6IFwiYXZhdGFyXCIsXHJcblx0ZGVzYzogXCJGZXRjaCBhIHVzZXIncyBhdmF0YXJcIixcclxuXHR1c2FnZTogXCJhdmF0YXJbIHVzZXJuYW1lPFN0cmluZz5dXCIsXHJcblx0ZXhwOiAvXiFhdmEodGFyKT8oIC4rKT8kL3NtaSxcclxuXHRjYXRlZ29yeTogXCJVdGlsaXR5XCIsXHJcblx0Ym9keTogYXN5bmMgZnVuY3Rpb24gYm9keShtZXNzYWdlOiBNZXNzYWdlLCB2YWxlOiBDbGFzc2VzLlZhbGUpIHtcclxuXHRcdC8qKlxyXG5cdFx0ICogUFJPUEFHQVRFOlxyXG5cdFx0ICogQ2hhbm5lbCA+IEd1aWxkID4gR3JvdXAoPylcclxuXHRcdCAqIE5pY2tuYW1lID4gVXNlcm5hbWVcclxuXHRcdCAqIFxyXG5cdFx0ICogQ2FuIGZldGNoIGd1aWxkL2dyb3VwIGJhbm5lclxyXG5cdFx0ICovXHJcblx0XHR0cnkge1xyXG5cdFx0XHRsZXQgc2VuZDogc3RyaW5nOyAgLy8hIW1vdmUgdG8gaW5uZXItc2NvcGVcclxuXHJcblx0XHRcdGlmIChtZXNzYWdlLm1lbnRpb25zLnVzZXJzLnNpemUpIHtcclxuXHRcdFx0XHRtZXNzYWdlLnJlcGx5KG1lc3NhZ2UubWVudGlvbnMudXNlcnMubWFwKCh1c3I6IFVzZXIpID0+IHVzci5hdmF0YXJVUkwpKTtcclxuXHRcdFx0fSBlbHNlIGlmIChtZXNzYWdlLmNvbnRlbnQuaW5jbHVkZXMoJyAnKSkge1xyXG5cdFx0XHRcdFx0bGV0IHRhcmc6IHN0cmluZyA9IG1lc3NhZ2UuY29udGVudC5zcGxpdCgnICcpLnBvcCgpLFxyXG5cdFx0XHRcdFx0ZnJvbSA9IChtZXNzYWdlLmNoYW5uZWxbXCJyZWNpcGllbnRzXCJdIHx8IG1lc3NhZ2UuY2hhbm5lbFtcIm1lbWJlcnNcIl0pO1xyXG5cclxuXHRcdFx0XHRpZiAoZnJvbSkge1xyXG5cdFx0XHRcdFx0bGV0IHRtcDtcclxuXHJcblx0XHRcdFx0XHRpZiAobWVzc2FnZS5ndWlsZCkge1xyXG5cdFx0XHRcdFx0XHR0bXAgPSBmcm9tLmZpbmQoKG1tYjogR3VpbGRNZW1iZXIpID0+IG1tYi51c2VyLnVzZXJuYW1lID09PSB0YXJnIHx8IG1tYi5uaWNrbmFtZSA9PT0gdGFyZyB8fCBtbWIuaWQgPT09IHRhcmcpIHx8ICAvL3VzZXIsIG5pY2ssIGlkXHJcblx0XHRcdFx0XHRcdGZyb20uZmluZCgobW1iOiBHdWlsZE1lbWJlcikgPT4gbW1iLm5pY2tuYW1lLmluY2x1ZGVzKHRhcmcpIHx8IG1tYi51c2VyLnVzZXJuYW1lLmluY2x1ZGVzKHRhcmcpKSB8fCAgLy9zdWJzdHJcclxuXHRcdFx0XHRcdFx0ZnJvbS5maW5kKChtbWI6IEd1aWxkTWVtYmVyKSA9PiBtbWIubmlja25hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0YXJnLnRvTG93ZXJDYXNlKCkpIHx8IG1tYi51c2VyLnVzZXJuYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGFyZy50b0xvd2VyQ2FzZSgpKSk7ICAvL2xvd2VyXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRzZW5kID0gdG1wLnVzZXIuYXZhdGFyVVJMO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dG1wID0gZnJvbS5maW5kKChtbWI6IFVzZXIpID0+IG1tYi51c2VybmFtZSA9PT0gdGFyZyB8fCBtbWIuaWQgPT09IHRhcmcpIHx8ICAvL3VzZXIsIGlkXHJcblx0XHRcdFx0XHRcdGZyb20uZmluZCgobW1iOiBVc2VyKSA9PiBtbWIudXNlcm5hbWUuaW5jbHVkZXModGFyZykpIHx8ICAvL3N1YnN0clxyXG5cdFx0XHRcdFx0XHRmcm9tLmZpbmQoKG1tYjogVXNlcikgPT4gbW1iLnVzZXJuYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGFyZy50b0xvd2VyQ2FzZSgpKSk7ICAvL2xvd2VyXHJcblxyXG5cdFx0XHRcdFx0XHRzZW5kID0gdG1wLnVzZXIuYXZhdGFyVVJMO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRzZW5kID0gbWVzc2FnZS5jaGFubmVsW1wicmVjaXBpZW50XCJdLmF2YXRhclVSTDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdG1lc3NhZ2UucmVwbHkoc2VuZCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bWVzc2FnZS5yZXBseShtZXNzYWdlLmF1dGhvci5hdmF0YXJVUkwpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0bWVzc2FnZS5yZXBseShcIlVzZXIgbm90IGZvdW5kIVwiKTtcclxuXHRcdH1cclxuXHR9LCAvL2JvZHlcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdCh2YWxlOiBDbGFzc2VzLlZhbGUpIHtcclxuXHRjb21tYW5kLnVzYWdlID0gdmFsZS5vcHRzLmNvbmZpZy5wcmVmaXggKyBjb21tYW5kLnVzYWdlO1xyXG5cdGNvbW1hbmQuZXhwID0gbmV3IFJlZ0V4cCgnXicgKyB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIFwiYXZhKHRhcik/KCAuKyk/JFwiLCBcInNtaVwiKTtcclxuXHJcblx0cmV0dXJuIGNvbW1hbmQ7XHJcbn0gLy9pbml0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG4iXX0=