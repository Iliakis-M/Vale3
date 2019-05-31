"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Classes_1 = tslib_1.__importStar(require("../Classes"));
const discord_js_1 = require("discord.js");
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
        async function parse(message) {
            //Does not allow batched mentions
            //mentions > emojis > username > nickname(?) > id [users, emojis], guild/group icon?
            //fetch emojis by name(?)
            let txt = message.content.split(' ').slice(1).join(' ');
            function mentions() {
                if (message.mentions) {
                    return message.mentions.users.map((usr) => usr.avatarURL);
                }
                return [];
            } //mentions
            async function emojis() {
                let reg = /<:.+?:(\d+?)>/gui, matches = txt.match(reg);
                if (matches.length) {
                    let rets = [];
                    matches = matches.map((match) => match.replace(reg, "$1"));
                    await Classes_1.chillout.forEach(matches, (match) => {
                        if (vale.client.emojis.has(match))
                            rets.push(vale.client.emojis.get(match).url);
                    });
                    return rets;
                }
                return [];
            } //emojis
            let rets = mentions().concat(await emojis());
            if (rets.length)
                return rets;
            if (message.channel instanceof discord_js_1.TextChannel) {
                let tmp = message.channel.members.find((mmb) => mmb.user.username.toLowerCase() === txt.toLowerCase() || mmb.id == txt || mmb.nickname.toLowerCase().includes(txt.toLowerCase()));
                if (tmp)
                    rets.push(tmp.user.avatarURL);
            }
            else if (message.channel instanceof discord_js_1.GroupDMChannel) {
                let tmp = message.channel.recipients.find((usr) => usr.id == txt || usr.username.toLowerCase().includes(txt.toLowerCase()));
                if (tmp)
                    rets.push(tmp.avatarURL);
            }
            else if (message.channel instanceof discord_js_1.DMChannel) {
                let tmp = [message.channel.recipient, message.author].find((usr) => usr.username.toLowerCase().includes(txt.toLowerCase()) || usr.id == txt);
                if (tmp)
                    rets.push(tmp.avatarURL);
            }
            if (rets.length === 0)
                throw "ENOTFOUND";
            return rets;
        } //parse
        let reply = Classes_1.default.failsafe.bind(message);
        try {
            if (message.content.includes(' ')) {
                let send, targ = message.content.split(' ').pop(), from = (message.channel["recipients"] || message.channel["members"]);
                send = (await parse(message)).join('\n');
                /*if (from) {  //pluriel system
                    let tmp: { user: { avatarURL: string; }; };

                    if (message.guild) {
                        tmp = from.find((mmb: GuildMember): boolean => mmb.user.username === targ || mmb.nickname === targ || mmb.id === targ) ||  //user, nick, id
                            from.find((mmb: GuildMember): boolean => mmb.nickname.includes(targ) || mmb.user.username.includes(targ)) ||  //substr
                            from.find((mmb: GuildMember): boolean => mmb.nickname.toLowerCase().includes(targ.toLowerCase()) || mmb.user.username.toLowerCase().includes(targ.toLowerCase()));  //lower
                        
                        send = tmp.user.avatarURL;
                    } else {
                        tmp = from.find((mmb: User): boolean => mmb.username === targ || mmb.id === targ) ||  //user, id
                            from.find((mmb: User): boolean => mmb.username.includes(targ)) ||  //substr
                            from.find((mmb: User): boolean => mmb.username.toLowerCase().includes(targ.toLowerCase()));  //lower

                        send = tmp.user.avatarURL;
                    }
                } else {  //emoji case?
                    send = message.channel["recipient"].avatarURL;
                }*/
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2NvbW1hbmRzL2F2YXRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztBQUViLDhEQUErQztBQUMvQywyQ0FBcUg7QUFFeEcsUUFBQSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQztJQUMxQyxJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSx1QkFBdUI7SUFDN0IsS0FBSyxFQUFFLDJCQUEyQjtJQUNsQyxHQUFHLEVBQUUsdUJBQXVCO0lBQzVCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLElBQUksRUFBRSxFQUFHO0lBQ1QsSUFBSSxFQUFFLEtBQUssVUFBVSxJQUFJLENBQUMsT0FBZ0IsRUFBRSxJQUFrQjtRQUM3RDs7Ozs7O1dBTUc7UUFHSCxLQUFLLFVBQVUsS0FBSyxDQUFDLE9BQWdCO1lBQ3BDLGlDQUFpQztZQUNqQyxvRkFBb0Y7WUFDcEYseUJBQXlCO1lBRXpCLElBQUksR0FBRyxHQUFXLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFaEUsU0FBUyxRQUFRO2dCQUNoQixJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7b0JBQ3JCLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBUyxFQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ3hFO2dCQUVELE9BQU8sRUFBRyxDQUFDO1lBQ1osQ0FBQyxDQUFDLFVBQVU7WUFFWixLQUFLLFVBQVUsTUFBTTtnQkFDcEIsSUFBSSxHQUFHLEdBQVcsa0JBQWtCLEVBQ25DLE9BQU8sR0FBcUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFNUMsSUFB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XHJcblxyXG5pbXBvcnQgQ2xhc3NlcywgeyBjaGlsbG91dCB9IGZyb20gXCIuLi9DbGFzc2VzXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIEd1aWxkTWVtYmVyLCBVc2VyLCBHdWlsZENoYW5uZWwsIFRleHRDaGFubmVsLCBHcm91cERNQ2hhbm5lbCwgRE1DaGFubmVsLCBFbW9qaSB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29tbWFuZCA9IG5ldyBDbGFzc2VzLkNvbW1hbmQoe1xyXG5cdG5hbWU6IFwiYXZhdGFyXCIsXHJcblx0ZGVzYzogXCJGZXRjaCBhIHVzZXIncyBhdmF0YXJcIixcclxuXHR1c2FnZTogXCJhdmF0YXJbIHVzZXJuYW1lPFN0cmluZz5dXCIsXHJcblx0ZXhwOiAvXiFhdmEodGFyKT8oIC4rKT8kL3NtaSxcclxuXHRjYXRlZ29yeTogXCJVdGlsaXR5XCIsXHJcblx0ZGF0YTogeyB9LFxyXG5cdGJvZHk6IGFzeW5jIGZ1bmN0aW9uIGJvZHkobWVzc2FnZTogTWVzc2FnZSwgdmFsZTogQ2xhc3Nlcy5WYWxlKSB7XHJcblx0XHQvKipcclxuXHRcdCAqIFBST1BBR0FURTpcclxuXHRcdCAqIENoYW5uZWwgPiBHdWlsZCA+IEdyb3VwKD8pXHJcblx0XHQgKiBOaWNrbmFtZSA+IFVzZXJuYW1lXHJcblx0XHQgKiBcclxuXHRcdCAqIENhbiBmZXRjaCBndWlsZC9ncm91cCBiYW5uZXJcclxuXHRcdCAqL1xyXG5cclxuXHRcdFxyXG5cdFx0YXN5bmMgZnVuY3Rpb24gcGFyc2UobWVzc2FnZTogTWVzc2FnZSk6IFByb21pc2U8c3RyaW5nW10+IHtcclxuXHRcdFx0Ly9Eb2VzIG5vdCBhbGxvdyBiYXRjaGVkIG1lbnRpb25zXHJcblx0XHRcdC8vbWVudGlvbnMgPiBlbW9qaXMgPiB1c2VybmFtZSA+IG5pY2tuYW1lKD8pID4gaWQgW3VzZXJzLCBlbW9qaXNdLCBndWlsZC9ncm91cCBpY29uP1xyXG5cdFx0XHQvL2ZldGNoIGVtb2ppcyBieSBuYW1lKD8pXHJcblxyXG5cdFx0XHRsZXQgdHh0OiBzdHJpbmcgPSBtZXNzYWdlLmNvbnRlbnQuc3BsaXQoJyAnKS5zbGljZSgxKS5qb2luKCcgJyk7XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBtZW50aW9ucygpIHtcclxuXHRcdFx0XHRpZiAobWVzc2FnZS5tZW50aW9ucykge1xyXG5cdFx0XHRcdFx0cmV0dXJuIG1lc3NhZ2UubWVudGlvbnMudXNlcnMubWFwKCh1c3I6IFVzZXIpOiBzdHJpbmcgPT4gdXNyLmF2YXRhclVSTCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gWyBdO1xyXG5cdFx0XHR9IC8vbWVudGlvbnNcclxuXHJcblx0XHRcdGFzeW5jIGZ1bmN0aW9uIGVtb2ppcygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcblx0XHRcdFx0bGV0IHJlZzogUmVnRXhwID0gLzw6Lis/OihcXGQrPyk+L2d1aSxcclxuXHRcdFx0XHRcdG1hdGNoZXM6IFJlZ0V4cE1hdGNoQXJyYXkgPSB0eHQubWF0Y2gocmVnKTtcclxuXHJcblx0XHRcdFx0aWYgKG1hdGNoZXMubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRsZXQgcmV0cyA9IFsgXTtcclxuXHJcblx0XHRcdFx0XHRtYXRjaGVzID0gbWF0Y2hlcy5tYXAoKG1hdGNoKSA9PiBtYXRjaC5yZXBsYWNlKHJlZywgXCIkMVwiKSk7XHJcblxyXG5cdFx0XHRcdFx0YXdhaXQgY2hpbGxvdXQuZm9yRWFjaChtYXRjaGVzLCAobWF0Y2g6IHN0cmluZyk6IHZvaWQgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAodmFsZS5jbGllbnQuZW1vamlzLmhhcyhtYXRjaCkpIHJldHMucHVzaCh2YWxlLmNsaWVudC5lbW9qaXMuZ2V0KG1hdGNoKS51cmwpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIHJldHM7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gWyBdO1xyXG5cdFx0XHR9IC8vZW1vamlzXHJcblxyXG5cdFx0XHRsZXQgcmV0cyA9IG1lbnRpb25zKCkuY29uY2F0KGF3YWl0IGVtb2ppcygpKTtcclxuXHJcblx0XHRcdGlmIChyZXRzLmxlbmd0aCkgcmV0dXJuIHJldHM7XHJcblxyXG5cdFx0XHRpZiAobWVzc2FnZS5jaGFubmVsIGluc3RhbmNlb2YgVGV4dENoYW5uZWwpIHtcclxuXHRcdFx0XHRsZXQgdG1wOiBHdWlsZE1lbWJlciA9IG1lc3NhZ2UuY2hhbm5lbC5tZW1iZXJzLmZpbmQoKG1tYjogR3VpbGRNZW1iZXIpOiBib29sZWFuID0+IG1tYi51c2VyLnVzZXJuYW1lLnRvTG93ZXJDYXNlKCkgPT09IHR4dC50b0xvd2VyQ2FzZSgpIHx8IG1tYi5pZCA9PSB0eHQgfHwgbW1iLm5pY2tuYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModHh0LnRvTG93ZXJDYXNlKCkpKTtcclxuXHJcblx0XHRcdFx0aWYgKHRtcCkgcmV0cy5wdXNoKHRtcC51c2VyLmF2YXRhclVSTCk7XHJcblx0XHRcdH0gZWxzZSBpZiAobWVzc2FnZS5jaGFubmVsIGluc3RhbmNlb2YgR3JvdXBETUNoYW5uZWwpIHtcclxuXHRcdFx0XHRsZXQgdG1wOiBVc2VyID0gbWVzc2FnZS5jaGFubmVsLnJlY2lwaWVudHMuZmluZCgodXNyOiBVc2VyKTogYm9vbGVhbiA9PiB1c3IuaWQgPT0gdHh0IHx8IHVzci51c2VybmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHR4dC50b0xvd2VyQ2FzZSgpKSk7XHJcblxyXG5cdFx0XHRcdGlmICh0bXApIHJldHMucHVzaCh0bXAuYXZhdGFyVVJMKTtcclxuXHRcdFx0fSBlbHNlIGlmIChtZXNzYWdlLmNoYW5uZWwgaW5zdGFuY2VvZiBETUNoYW5uZWwpIHtcclxuXHRcdFx0XHRsZXQgdG1wID0gW21lc3NhZ2UuY2hhbm5lbC5yZWNpcGllbnQsIG1lc3NhZ2UuYXV0aG9yXS5maW5kKCh1c3I6IFVzZXIpOiBib29sZWFuID0+IHVzci51c2VybmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHR4dC50b0xvd2VyQ2FzZSgpKSB8fCB1c3IuaWQgPT0gdHh0KTtcclxuXHJcblx0XHRcdFx0aWYgKHRtcCkgcmV0cy5wdXNoKHRtcC5hdmF0YXJVUkwpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAocmV0cy5sZW5ndGggPT09IDApIHRocm93IFwiRU5PVEZPVU5EXCI7XHJcblxyXG5cdFx0XHRyZXR1cm4gcmV0cztcclxuXHRcdH0gLy9wYXJzZVxyXG5cclxuXHJcblx0XHRsZXQgcmVwbHkgPSBDbGFzc2VzLmZhaWxzYWZlLmJpbmQobWVzc2FnZSk7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAobWVzc2FnZS5jb250ZW50LmluY2x1ZGVzKCcgJykpIHtcclxuXHRcdFx0XHRsZXQgc2VuZDogc3RyaW5nLFxyXG5cdFx0XHRcdFx0dGFyZzogc3RyaW5nID0gbWVzc2FnZS5jb250ZW50LnNwbGl0KCcgJykucG9wKCksXHJcblx0XHRcdFx0XHRmcm9tID0gKG1lc3NhZ2UuY2hhbm5lbFtcInJlY2lwaWVudHNcIl0gfHwgbWVzc2FnZS5jaGFubmVsW1wibWVtYmVyc1wiXSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VuZCA9IChhd2FpdCBwYXJzZShtZXNzYWdlKSkuam9pbignXFxuJyk7XHJcblxyXG5cdFx0XHRcdC8qaWYgKGZyb20pIHsgIC8vcGx1cmllbCBzeXN0ZW1cclxuXHRcdFx0XHRcdGxldCB0bXA6IHsgdXNlcjogeyBhdmF0YXJVUkw6IHN0cmluZzsgfTsgfTtcclxuXHJcblx0XHRcdFx0XHRpZiAobWVzc2FnZS5ndWlsZCkge1xyXG5cdFx0XHRcdFx0XHR0bXAgPSBmcm9tLmZpbmQoKG1tYjogR3VpbGRNZW1iZXIpOiBib29sZWFuID0+IG1tYi51c2VyLnVzZXJuYW1lID09PSB0YXJnIHx8IG1tYi5uaWNrbmFtZSA9PT0gdGFyZyB8fCBtbWIuaWQgPT09IHRhcmcpIHx8ICAvL3VzZXIsIG5pY2ssIGlkXHJcblx0XHRcdFx0XHRcdFx0ZnJvbS5maW5kKChtbWI6IEd1aWxkTWVtYmVyKTogYm9vbGVhbiA9PiBtbWIubmlja25hbWUuaW5jbHVkZXModGFyZykgfHwgbW1iLnVzZXIudXNlcm5hbWUuaW5jbHVkZXModGFyZykpIHx8ICAvL3N1YnN0clxyXG5cdFx0XHRcdFx0XHRcdGZyb20uZmluZCgobW1iOiBHdWlsZE1lbWJlcik6IGJvb2xlYW4gPT4gbW1iLm5pY2tuYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGFyZy50b0xvd2VyQ2FzZSgpKSB8fCBtbWIudXNlci51c2VybmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRhcmcudG9Mb3dlckNhc2UoKSkpOyAgLy9sb3dlclxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0c2VuZCA9IHRtcC51c2VyLmF2YXRhclVSTDtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRtcCA9IGZyb20uZmluZCgobW1iOiBVc2VyKTogYm9vbGVhbiA9PiBtbWIudXNlcm5hbWUgPT09IHRhcmcgfHwgbW1iLmlkID09PSB0YXJnKSB8fCAgLy91c2VyLCBpZFxyXG5cdFx0XHRcdFx0XHRcdGZyb20uZmluZCgobW1iOiBVc2VyKTogYm9vbGVhbiA9PiBtbWIudXNlcm5hbWUuaW5jbHVkZXModGFyZykpIHx8ICAvL3N1YnN0clxyXG5cdFx0XHRcdFx0XHRcdGZyb20uZmluZCgobW1iOiBVc2VyKTogYm9vbGVhbiA9PiBtbWIudXNlcm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0YXJnLnRvTG93ZXJDYXNlKCkpKTsgIC8vbG93ZXJcclxuXHJcblx0XHRcdFx0XHRcdHNlbmQgPSB0bXAudXNlci5hdmF0YXJVUkw7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHsgIC8vZW1vamkgY2FzZT9cclxuXHRcdFx0XHRcdHNlbmQgPSBtZXNzYWdlLmNoYW5uZWxbXCJyZWNpcGllbnRcIl0uYXZhdGFyVVJMO1xyXG5cdFx0XHRcdH0qL1xyXG5cclxuXHRcdFx0XHRyZXBseShzZW5kKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXBseShtZXNzYWdlLmF1dGhvci5hdmF0YXJVUkwpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0cmVwbHkoXCJVc2VyIG5vdCBmb3VuZCFcIik7XHJcblx0XHR9XHJcblx0fSwgLy9ib2R5XHJcbn0pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXQodmFsZTogQ2xhc3Nlcy5WYWxlKTogUHJvbWlzZTxDbGFzc2VzLkNvbW1hbmQ+IHtcclxuXHRjb21tYW5kLnVzYWdlID0gdmFsZS5vcHRzLmNvbmZpZy5wcmVmaXggKyBjb21tYW5kLnVzYWdlO1xyXG5cdGNvbW1hbmQuZXhwID0gbmV3IFJlZ0V4cCgnXicgKyB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIFwiYXZhKHRhcik/KCAuKyk/JFwiLCBcInNtaVwiKTtcclxuXHJcblx0cmV0dXJuIGNvbW1hbmQ7XHJcbn0gLy9pbml0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG4iXX0=