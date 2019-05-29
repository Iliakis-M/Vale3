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
    data: {},
    body: async function body(message, vale) {
        /**
         * PROPAGATE:
         * Channel > Guild > Group(?)
         * Nickname > Username
         *
         * Can fetch guild/group banner
         */
        let reply = Classes_1.default.failsafe.bind(message);
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
                reply(send);
            }
            else {
                reply(message.author.avatarURL);
            }
        }
        catch (err) {
            reply("User not found!");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2NvbW1hbmRzL2F2YXRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztBQUViLGlFQUFpQztBQUdwQixRQUFBLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDO0lBQzFDLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLHVCQUF1QjtJQUM3QixLQUFLLEVBQUUsMkJBQTJCO0lBQ2xDLEdBQUcsRUFBRSx1QkFBdUI7SUFDNUIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsSUFBSSxFQUFFLEVBQUc7SUFDVCxJQUFJLEVBQUUsS0FBSyxVQUFVLElBQUksQ0FBQyxPQUFnQixFQUFFLElBQWtCO1FBQzdEOzs7Ozs7V0FNRztRQUVILElBQUksS0FBSyxHQUFHLGlCQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUzQyxJQUFJO1lBQ0gsSUFBSSxJQUFZLENBQUMsQ0FBRSx1QkFBdUI7WUFFMUMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBUyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUN4RTtpQkFBTSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN4QyxJQUFJLElBQUksR0FBVyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFDbkQsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBRXRFLElBQUksSUFBSSxFQUFFO29CQUNULElBQUksR0FBc0MsQ0FBQztvQkFFM0MsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO3dCQUNsQixHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQWdCLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsUUFBUSxLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFLLGdCQUFnQjs0QkFDbEksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQWdCLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFLLFFBQVE7NEJBQzdHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFnQixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFFLE9BQU87d0JBRWxLLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztxQkFDMUI7eUJBQU07d0JBQ04sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFTLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUssVUFBVTs0QkFDdkYsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQVMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSyxRQUFROzRCQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBUyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUUsT0FBTzt3QkFFM0YsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO3FCQUMxQjtpQkFDRDtxQkFBTTtvQkFDTixJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUM7aUJBQzlDO2dCQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNaO2lCQUFNO2dCQUNOLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ2hDO1NBQ0Q7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNiLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3pCO0lBQ0YsQ0FBQztDQUNELENBQUMsQ0FBQztBQUVJLEtBQUssVUFBVSxJQUFJLENBQUMsSUFBa0I7SUFDNUMsZUFBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsZUFBTyxDQUFDLEtBQUssQ0FBQztJQUN4RCxlQUFPLENBQUMsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFcEYsT0FBTyxlQUFPLENBQUM7QUFDaEIsQ0FBQyxDQUFDLE1BQU07QUFMUixvQkFLQztBQUVELGtCQUFlLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IENsYXNzZXMgZnJvbSBcIi4uL0NsYXNzZXNcIjtcclxuaW1wb3J0IHsgTWVzc2FnZSwgR3VpbGRNZW1iZXIsIFVzZXIgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1hbmQgPSBuZXcgQ2xhc3Nlcy5Db21tYW5kKHtcclxuXHRuYW1lOiBcImF2YXRhclwiLFxyXG5cdGRlc2M6IFwiRmV0Y2ggYSB1c2VyJ3MgYXZhdGFyXCIsXHJcblx0dXNhZ2U6IFwiYXZhdGFyWyB1c2VybmFtZTxTdHJpbmc+XVwiLFxyXG5cdGV4cDogL14hYXZhKHRhcik/KCAuKyk/JC9zbWksXHJcblx0Y2F0ZWdvcnk6IFwiVXRpbGl0eVwiLFxyXG5cdGRhdGE6IHsgfSxcclxuXHRib2R5OiBhc3luYyBmdW5jdGlvbiBib2R5KG1lc3NhZ2U6IE1lc3NhZ2UsIHZhbGU6IENsYXNzZXMuVmFsZSkge1xyXG5cdFx0LyoqXHJcblx0XHQgKiBQUk9QQUdBVEU6XHJcblx0XHQgKiBDaGFubmVsID4gR3VpbGQgPiBHcm91cCg/KVxyXG5cdFx0ICogTmlja25hbWUgPiBVc2VybmFtZVxyXG5cdFx0ICogXHJcblx0XHQgKiBDYW4gZmV0Y2ggZ3VpbGQvZ3JvdXAgYmFubmVyXHJcblx0XHQgKi9cclxuXHJcblx0XHRsZXQgcmVwbHkgPSBDbGFzc2VzLmZhaWxzYWZlLmJpbmQobWVzc2FnZSk7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblx0XHRcdGxldCBzZW5kOiBzdHJpbmc7ICAvLyEhbW92ZSB0byBpbm5lci1zY29wZVxyXG5cclxuXHRcdFx0aWYgKG1lc3NhZ2UubWVudGlvbnMudXNlcnMuc2l6ZSkge1xyXG5cdFx0XHRcdG1lc3NhZ2UucmVwbHkobWVzc2FnZS5tZW50aW9ucy51c2Vycy5tYXAoKHVzcjogVXNlcikgPT4gdXNyLmF2YXRhclVSTCkpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKG1lc3NhZ2UuY29udGVudC5pbmNsdWRlcygnICcpKSB7XHJcblx0XHRcdFx0XHRsZXQgdGFyZzogc3RyaW5nID0gbWVzc2FnZS5jb250ZW50LnNwbGl0KCcgJykucG9wKCksXHJcblx0XHRcdFx0XHRmcm9tID0gKG1lc3NhZ2UuY2hhbm5lbFtcInJlY2lwaWVudHNcIl0gfHwgbWVzc2FnZS5jaGFubmVsW1wibWVtYmVyc1wiXSk7XHJcblxyXG5cdFx0XHRcdGlmIChmcm9tKSB7XHJcblx0XHRcdFx0XHRsZXQgdG1wOiB7IHVzZXI6IHsgYXZhdGFyVVJMOiBzdHJpbmc7IH07IH07XHJcblxyXG5cdFx0XHRcdFx0aWYgKG1lc3NhZ2UuZ3VpbGQpIHtcclxuXHRcdFx0XHRcdFx0dG1wID0gZnJvbS5maW5kKChtbWI6IEd1aWxkTWVtYmVyKSA9PiBtbWIudXNlci51c2VybmFtZSA9PT0gdGFyZyB8fCBtbWIubmlja25hbWUgPT09IHRhcmcgfHwgbW1iLmlkID09PSB0YXJnKSB8fCAgLy91c2VyLCBuaWNrLCBpZFxyXG5cdFx0XHRcdFx0XHRmcm9tLmZpbmQoKG1tYjogR3VpbGRNZW1iZXIpID0+IG1tYi5uaWNrbmFtZS5pbmNsdWRlcyh0YXJnKSB8fCBtbWIudXNlci51c2VybmFtZS5pbmNsdWRlcyh0YXJnKSkgfHwgIC8vc3Vic3RyXHJcblx0XHRcdFx0XHRcdGZyb20uZmluZCgobW1iOiBHdWlsZE1lbWJlcikgPT4gbW1iLm5pY2tuYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGFyZy50b0xvd2VyQ2FzZSgpKSB8fCBtbWIudXNlci51c2VybmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRhcmcudG9Mb3dlckNhc2UoKSkpOyAgLy9sb3dlclxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0c2VuZCA9IHRtcC51c2VyLmF2YXRhclVSTDtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRtcCA9IGZyb20uZmluZCgobW1iOiBVc2VyKSA9PiBtbWIudXNlcm5hbWUgPT09IHRhcmcgfHwgbW1iLmlkID09PSB0YXJnKSB8fCAgLy91c2VyLCBpZFxyXG5cdFx0XHRcdFx0XHRmcm9tLmZpbmQoKG1tYjogVXNlcikgPT4gbW1iLnVzZXJuYW1lLmluY2x1ZGVzKHRhcmcpKSB8fCAgLy9zdWJzdHJcclxuXHRcdFx0XHRcdFx0ZnJvbS5maW5kKChtbWI6IFVzZXIpID0+IG1tYi51c2VybmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRhcmcudG9Mb3dlckNhc2UoKSkpOyAgLy9sb3dlclxyXG5cclxuXHRcdFx0XHRcdFx0c2VuZCA9IHRtcC51c2VyLmF2YXRhclVSTDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0c2VuZCA9IG1lc3NhZ2UuY2hhbm5lbFtcInJlY2lwaWVudFwiXS5hdmF0YXJVUkw7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXBseShzZW5kKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXBseShtZXNzYWdlLmF1dGhvci5hdmF0YXJVUkwpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0cmVwbHkoXCJVc2VyIG5vdCBmb3VuZCFcIik7XHJcblx0XHR9XHJcblx0fSwgLy9ib2R5XHJcbn0pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXQodmFsZTogQ2xhc3Nlcy5WYWxlKSB7XHJcblx0Y29tbWFuZC51c2FnZSA9IHZhbGUub3B0cy5jb25maWcucHJlZml4ICsgY29tbWFuZC51c2FnZTtcclxuXHRjb21tYW5kLmV4cCA9IG5ldyBSZWdFeHAoJ14nICsgdmFsZS5vcHRzLmNvbmZpZy5wcmVmaXggKyBcImF2YSh0YXIpPyggLispPyRcIiwgXCJzbWlcIik7XHJcblxyXG5cdHJldHVybiBjb21tYW5kO1xyXG59IC8vaW5pdFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcclxuIl19