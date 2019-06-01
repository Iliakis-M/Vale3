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
         *
         * Channel > Guild > Group
         * Nickname > Username > ID
         * Emoji > Banner(?)
         */
        async function parse(message) {
            let txt = message.content.split(' ').slice(1).join(' ');
            function mentions() {
                if (message.mentions) {
                    return message.mentions.users.map((usr) => usr.avatarURL);
                }
                return [];
            } //mentions
            async function emojis() {
                let reg = /<:.+?:(\d+?)>/gui, matches = txt.match(reg);
                if (matches && matches.length) {
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
                let mmbs = message.channel.members.array().sort((mmb1, mmb2) => (mmb1.nickname || '').length - (mmb2.nickname || '').length), tmp = mmbs.find((mmb) => (mmb.nickname || mmb.user.username).toLowerCase().includes(txt.toLowerCase()));
                if (tmp) {
                    rets.push(tmp.user.avatarURL);
                }
                else {
                    mmbs = mmbs.sort((mmb1, mmb2) => mmb1.user.username.length - mmb2.user.username.length);
                    tmp = mmbs.find((mmb) => mmb.user.username.toLowerCase().includes(txt.toLowerCase()));
                    if (tmp) {
                        rets.push(tmp.user.avatarURL);
                    }
                    else {
                        tmp = mmbs.find((mmb) => mmb.id.toLowerCase().includes(txt.toLowerCase()));
                        if (tmp)
                            rets.push(tmp.user.avatarURL);
                    }
                }
            }
            else if (message.channel instanceof discord_js_1.GroupDMChannel) {
                let tmp = message.channel.recipients.array().sort((usr1, usr2) => (usr1.username || '').length - (usr2.username || '').length).find((usr) => usr.id.includes(txt) || usr.username.toLowerCase().includes(txt.toLowerCase()));
                if (tmp)
                    rets.push(tmp.avatarURL);
            }
            else if (message.channel instanceof discord_js_1.DMChannel) {
                let tmp = [message.channel.recipient, message.author].find((usr) => usr.username.toLowerCase().includes(txt.toLowerCase()) || usr.id.includes(txt));
                if (tmp)
                    rets.push(tmp.avatarURL);
            }
            let tmp;
            if (rets.length === 0 && (tmp = vale.client.emojis.find((emj) => emj.name.toLowerCase().includes(txt.toLowerCase()))) !== null) {
                rets.push(tmp.url);
            }
            if (rets.length === 0)
                throw "ENOTFOUND";
            return rets;
        } //parse
        let reply = Classes_1.default.failsafe.bind(message);
        try {
            if (message.content.includes(' ')) {
                reply((await parse(message)).join('\n'));
            }
            else {
                reply(message.author.avatarURL);
            }
        }
        catch (err) {
            if (message.guild) {
                reply("User not found!\n" + (message.guild.iconURL || message.guild.icon || ''));
            }
            else if (message.channel instanceof discord_js_1.GroupDMChannel) {
                reply("User not found!\n" + (message.channel.icon || ''));
            }
            else {
                reply("User not found!\n");
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2NvbW1hbmRzL2F2YXRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztBQUViLDhEQUErQztBQUMvQywyQ0FBNEk7QUFFL0gsUUFBQSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQztJQUMxQyxJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSx1QkFBdUI7SUFDN0IsS0FBSyxFQUFFLDJCQUEyQjtJQUNsQyxHQUFHLEVBQUUsdUJBQXVCO0lBQzVCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLElBQUksRUFBRSxFQUFHO0lBQ1QsSUFBSSxFQUFFLEtBQUssVUFBVSxJQUFJLENBQUMsT0FBZ0IsRUFBRSxJQUFrQjtRQUM3RDs7Ozs7O1dBTUc7UUFFSCxLQUFLLFVBQVUsS0FBSyxDQUFDLE9BQWdCO1lBQ3BDLElBQUksR0FBRyxHQUFXLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFaEUsU0FBUyxRQUFRO2dCQUNoQixJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7b0JBQ3JCLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBUyxFQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ3hFO2dCQUVELE9BQU8sRUFBRyxDQUFDO1lBQ1osQ0FBQyxDQUFDLFVBQVU7WUFFWixLQUFLLFVBQVUsTUFBTTtnQkFDcEIsSUFBSSxHQUFHLEdBQVcsa0JBQWtCLEVBQ25DLE9BQU8sR0FBcUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFNUMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtvQkFDOUIs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QUMsbUJBQW1CLENBQUMsQ0FBQzthQUMzQjtTQUNEO0lBQ0YsQ0FBQztDQUNELENBQUMsQ0FBQztBQUVJLEtBQUssVUFBVSxJQUFJLENBQUMsSUFBa0I7SUFDNUMsZUFBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsZUFBTyxDQUFDLEtBQUssQ0FBQztJQUN4RCxlQUFPLENBQUMsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFcEYsT0FBTyxlQUFPLENBQUM7QUFDaEIsQ0FBQyxDQUFDLE1BQU07QUFMUixvQkFLQztBQUVELGtCQUFlLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IENsYXNzZXMsIHsgY2hpbGxvdXQgfSBmcm9tIFwiLi4vQ2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBHdWlsZE1lbWJlciwgVXNlciwgR3VpbGRDaGFubmVsLCBUZXh0Q2hhbm5lbCwgR3JvdXBETUNoYW5uZWwsIERNQ2hhbm5lbCwgRW1vamksIENvbGxlY3Rpb24sIFNub3dmbGFrZSB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29tbWFuZCA9IG5ldyBDbGFzc2VzLkNvbW1hbmQoe1xyXG5cdG5hbWU6IFwiYXZhdGFyXCIsXHJcblx0ZGVzYzogXCJGZXRjaCBhIHVzZXIncyBhdmF0YXJcIixcclxuXHR1c2FnZTogXCJhdmF0YXJbIHVzZXJuYW1lPFN0cmluZz5dXCIsXHJcblx0ZXhwOiAvXiFhdmEodGFyKT8oIC4rKT8kL3NtaSxcclxuXHRjYXRlZ29yeTogXCJVdGlsaXR5XCIsXHJcblx0ZGF0YTogeyB9LFxyXG5cdGJvZHk6IGFzeW5jIGZ1bmN0aW9uIGJvZHkobWVzc2FnZTogTWVzc2FnZSwgdmFsZTogQ2xhc3Nlcy5WYWxlKTogUHJvbWlzZTx2b2lkPiB7XHJcblx0XHQvKipcclxuXHRcdCAqIFBST1BBR0FURTpcclxuXHRcdCAqIFxyXG5cdFx0ICogQ2hhbm5lbCA+IEd1aWxkID4gR3JvdXBcclxuXHRcdCAqIE5pY2tuYW1lID4gVXNlcm5hbWUgPiBJRFxyXG5cdFx0ICogRW1vamkgPiBCYW5uZXIoPylcclxuXHRcdCAqL1xyXG5cdFx0XHJcblx0XHRhc3luYyBmdW5jdGlvbiBwYXJzZShtZXNzYWdlOiBNZXNzYWdlKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xyXG5cdFx0XHRsZXQgdHh0OiBzdHJpbmcgPSBtZXNzYWdlLmNvbnRlbnQuc3BsaXQoJyAnKS5zbGljZSgxKS5qb2luKCcgJyk7XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBtZW50aW9ucygpOiBzdHJpbmdbXSB7XHJcblx0XHRcdFx0aWYgKG1lc3NhZ2UubWVudGlvbnMpIHtcclxuXHRcdFx0XHRcdHJldHVybiBtZXNzYWdlLm1lbnRpb25zLnVzZXJzLm1hcCgodXNyOiBVc2VyKTogc3RyaW5nID0+IHVzci5hdmF0YXJVUkwpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIFsgXTtcclxuXHRcdFx0fSAvL21lbnRpb25zXHJcblxyXG5cdFx0XHRhc3luYyBmdW5jdGlvbiBlbW9qaXMoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xyXG5cdFx0XHRcdGxldCByZWc6IFJlZ0V4cCA9IC88Oi4rPzooXFxkKz8pPi9ndWksXHJcblx0XHRcdFx0XHRtYXRjaGVzOiBSZWdFeHBNYXRjaEFycmF5ID0gdHh0Lm1hdGNoKHJlZyk7XHJcblxyXG5cdFx0XHRcdGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRsZXQgcmV0cyA9IFsgXTtcclxuXHJcblx0XHRcdFx0XHRtYXRjaGVzID0gbWF0Y2hlcy5tYXAoKG1hdGNoKSA9PiBtYXRjaC5yZXBsYWNlKHJlZywgXCIkMVwiKSk7XHJcblxyXG5cdFx0XHRcdFx0YXdhaXQgY2hpbGxvdXQuZm9yRWFjaChtYXRjaGVzLCAobWF0Y2g6IHN0cmluZyk6IHZvaWQgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAodmFsZS5jbGllbnQuZW1vamlzLmhhcyhtYXRjaCkpIHJldHMucHVzaCh2YWxlLmNsaWVudC5lbW9qaXMuZ2V0KG1hdGNoKS51cmwpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIHJldHM7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gWyBdO1xyXG5cdFx0XHR9IC8vZW1vamlzXHJcblxyXG5cdFx0XHRsZXQgcmV0cyA9IG1lbnRpb25zKCkuY29uY2F0KGF3YWl0IGVtb2ppcygpKTtcclxuXHJcblx0XHRcdGlmIChyZXRzLmxlbmd0aCkgcmV0dXJuIHJldHM7XHJcblxyXG5cdFx0XHRpZiAobWVzc2FnZS5jaGFubmVsIGluc3RhbmNlb2YgVGV4dENoYW5uZWwpIHtcclxuXHRcdFx0XHRsZXQgbW1iczogR3VpbGRNZW1iZXJbXSA9IG1lc3NhZ2UuY2hhbm5lbC5tZW1iZXJzLmFycmF5KCkuc29ydCgobW1iMTogR3VpbGRNZW1iZXIsIG1tYjI6IEd1aWxkTWVtYmVyKTogbnVtYmVyID0+IChtbWIxLm5pY2tuYW1lIHx8ICcnKS5sZW5ndGggLSAobW1iMi5uaWNrbmFtZSB8fCAnJykubGVuZ3RoKSxcclxuXHRcdFx0XHRcdHRtcDogR3VpbGRNZW1iZXIgPSBtbWJzLmZpbmQoKG1tYjogR3VpbGRNZW1iZXIpOiBib29sZWFuID0+IChtbWIubmlja25hbWUgfHwgbW1iLnVzZXIudXNlcm5hbWUpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModHh0LnRvTG93ZXJDYXNlKCkpKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAodG1wKSB7XHJcblx0XHRcdFx0XHRyZXRzLnB1c2godG1wLnVzZXIuYXZhdGFyVVJMKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bW1icyA9IG1tYnMuc29ydCgobW1iMTogR3VpbGRNZW1iZXIsIG1tYjI6IEd1aWxkTWVtYmVyKTogbnVtYmVyID0+IG1tYjEudXNlci51c2VybmFtZS5sZW5ndGggLSBtbWIyLnVzZXIudXNlcm5hbWUubGVuZ3RoKTtcclxuXHRcdFx0XHRcdHRtcCA9IG1tYnMuZmluZCgobW1iOiBHdWlsZE1lbWJlcik6IGJvb2xlYW4gPT4gbW1iLnVzZXIudXNlcm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0eHQudG9Mb3dlckNhc2UoKSkpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAodG1wKSB7XHJcblx0XHRcdFx0XHRcdHJldHMucHVzaCh0bXAudXNlci5hdmF0YXJVUkwpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dG1wID0gbW1icy5maW5kKChtbWI6IEd1aWxkTWVtYmVyKTogYm9vbGVhbiA9PiBtbWIuaWQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0eHQudG9Mb3dlckNhc2UoKSkpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKHRtcCkgcmV0cy5wdXNoKHRtcC51c2VyLmF2YXRhclVSTCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKG1lc3NhZ2UuY2hhbm5lbCBpbnN0YW5jZW9mIEdyb3VwRE1DaGFubmVsKSB7XHJcblx0XHRcdFx0bGV0IHRtcDogVXNlciA9IG1lc3NhZ2UuY2hhbm5lbC5yZWNpcGllbnRzLmFycmF5KCkuc29ydCgodXNyMTogVXNlciwgdXNyMjogVXNlcik6IG51bWJlciA9PiAodXNyMS51c2VybmFtZSB8fCAnJykubGVuZ3RoIC0gKHVzcjIudXNlcm5hbWUgfHwgJycpLmxlbmd0aCkuZmluZCgodXNyOiBVc2VyKTogYm9vbGVhbiA9PiB1c3IuaWQuaW5jbHVkZXModHh0KSB8fCB1c3IudXNlcm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0eHQudG9Mb3dlckNhc2UoKSkpO1xyXG5cclxuXHRcdFx0XHRpZiAodG1wKSByZXRzLnB1c2godG1wLmF2YXRhclVSTCk7XHJcblx0XHRcdH0gZWxzZSBpZiAobWVzc2FnZS5jaGFubmVsIGluc3RhbmNlb2YgRE1DaGFubmVsKSB7XHJcblx0XHRcdFx0bGV0IHRtcCA9IFttZXNzYWdlLmNoYW5uZWwucmVjaXBpZW50LCBtZXNzYWdlLmF1dGhvcl0uZmluZCgodXNyOiBVc2VyKTogYm9vbGVhbiA9PiB1c3IudXNlcm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0eHQudG9Mb3dlckNhc2UoKSkgfHwgdXNyLmlkLmluY2x1ZGVzKHR4dCkpO1xyXG5cclxuXHRcdFx0XHRpZiAodG1wKSByZXRzLnB1c2godG1wLmF2YXRhclVSTCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxldCB0bXA6IEVtb2ppO1xyXG5cclxuXHRcdFx0aWYgKHJldHMubGVuZ3RoID09PSAwICYmICh0bXAgPSB2YWxlLmNsaWVudC5lbW9qaXMuZmluZCgoZW1qOiBFbW9qaSk6IGJvb2xlYW4gPT4gZW1qLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0eHQudG9Mb3dlckNhc2UoKSkpKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdHJldHMucHVzaCh0bXAudXJsKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocmV0cy5sZW5ndGggPT09IDApIHRocm93IFwiRU5PVEZPVU5EXCI7XHJcblxyXG5cdFx0XHRyZXR1cm4gcmV0cztcclxuXHRcdH0gLy9wYXJzZVxyXG5cclxuXHJcblx0XHRsZXQgcmVwbHkgPSBDbGFzc2VzLmZhaWxzYWZlLmJpbmQobWVzc2FnZSk7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAobWVzc2FnZS5jb250ZW50LmluY2x1ZGVzKCcgJykpIHtcclxuXHRcdFx0XHRyZXBseSgoYXdhaXQgcGFyc2UobWVzc2FnZSkpLmpvaW4oJ1xcbicpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXBseShtZXNzYWdlLmF1dGhvci5hdmF0YXJVUkwpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0aWYgKG1lc3NhZ2UuZ3VpbGQpIHtcclxuXHRcdFx0XHRyZXBseShcIlVzZXIgbm90IGZvdW5kIVxcblwiICsgKG1lc3NhZ2UuZ3VpbGQuaWNvblVSTCB8fCBtZXNzYWdlLmd1aWxkLmljb24gfHwgJycpKTtcclxuXHRcdFx0fSBlbHNlIGlmIChtZXNzYWdlLmNoYW5uZWwgaW5zdGFuY2VvZiBHcm91cERNQ2hhbm5lbCkge1xyXG5cdFx0XHRcdHJlcGx5KFwiVXNlciBub3QgZm91bmQhXFxuXCIgKyAobWVzc2FnZS5jaGFubmVsLmljb24gfHwgJycpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXBseShcIlVzZXIgbm90IGZvdW5kIVxcblwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sIC8vYm9keVxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0KHZhbGU6IENsYXNzZXMuVmFsZSk6IFByb21pc2U8Q2xhc3Nlcy5Db21tYW5kPiB7XHJcblx0Y29tbWFuZC51c2FnZSA9IHZhbGUub3B0cy5jb25maWcucHJlZml4ICsgY29tbWFuZC51c2FnZTtcclxuXHRjb21tYW5kLmV4cCA9IG5ldyBSZWdFeHAoJ14nICsgdmFsZS5vcHRzLmNvbmZpZy5wcmVmaXggKyBcImF2YSh0YXIpPyggLispPyRcIiwgXCJzbWlcIik7XHJcblxyXG5cdHJldHVybiBjb21tYW5kO1xyXG59IC8vaW5pdFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcclxuIl19