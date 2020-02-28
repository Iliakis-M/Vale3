"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Classes_1 = tslib_1.__importStar(require("../Classes"));
const discord_js_1 = require("discord.js");
var wordnet;
try {
    wordnet = require("wordnet");
}
catch (err) { }
exports.command = new Classes_1.default.Command({
    name: "define",
    desc: "Define a word",
    usage: "define word<String>",
    exp: /^!def(ine)? .+$/si,
    category: "Utility",
    data: {},
    body: async function body(message, vale) {
        let reply = Classes_1.default.failsafe.bind(message);
        if (wordnet) {
            let word;
            wordnet.lookup(word = message.content.split(' ').slice(1).join(' '), async (err, definitions) => {
                if (err) {
                    reply(err.message);
                }
                else {
                    let embed = new discord_js_1.RichEmbed();
                    embed.setTitle(word)
                        .setDescription(`Definition(s) for ${word} [${definitions.length}]:`)
                        .setColor("RANDOM")
                        .setFooter("Powered by WordNet")
                        .setAuthor("Vale3", vale.client.user.displayAvatarURL, "https://github.com/Valen-H/Vale-3")
                        .setThumbnail(vale.client.user.avatarURL)
                        .setTimestamp()
                        .addBlankField(true);
                    await Classes_1.chillout.forOf(definitions, (def) => {
                        embed.addField(`${def.meta.words.map((word) => word.word)} [${def.meta.synsetType}]:`, def.glossary, true);
                    });
                    reply({ embed });
                }
            });
        }
        else {
            reply("`wordnet` module is missing! /:");
        }
    },
});
async function init(vale) {
    exports.command.usage = vale.opts.config.prefix + exports.command.usage;
    exports.command.exp = new RegExp('^' + vale.opts.config.prefix + "def(ine)? .+$", "si");
    return exports.command;
} //init
exports.init = init;
exports.default = init;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2NvbW1hbmRzL2RlZmluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztBQUViLDhEQUErQztBQUMvQywyQ0FBZ0Q7QUFFaEQsSUFBSSxPQUVILENBQUM7QUFFRixJQUFJO0lBQ0gsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztDQUM3QjtBQUFDLE9BQU8sR0FBRyxFQUFFLEdBQUc7QUFFSixRQUFBLE9BQU8sR0FBb0IsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQztJQUMzRCxJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxlQUFlO0lBQ3JCLEtBQUssRUFBRSxxQkFBcUI7SUFDNUIsR0FBRyxFQUFFLG1CQUFtQjtJQUN4QixRQUFRLEVBQUUsU0FBUztJQUNuQixJQUFJLEVBQUUsRUFBRztJQUNULElBQUksRUFBRSxLQUFLLFVBQVUsSUFBSSxDQUFDLE9BQWdCLEVBQUUsSUFBa0I7UUFDN0QsSUFBSSxLQUFLLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTNDLElBQUksT0FBTyxFQUFFO1lBQ1osSUFBSSxJQUFZLENBQUM7WUFFakIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxFQUFFO2dCQUMvRixJQUFJLEdBQUcsRUFBRTtvQkFDUixLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNuQjtxQkFBTTtvQkFDTixJQUFJLEtBQUssR0FBYyxJQUFJLHNCQUFTLEVBQUUsQ0FBQztvQkFFdkMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7eUJBQ2xCLGNBQWMsQ0FBQyxxQkFBcUIsSUFBSSxLQUFLLFdBQVcsQ0FBQyxNQUFNLElBQUksQ0FBQzt5QkFDcEUsUUFBUSxDQUFDLFFBQVEsQ0FBQzt5QkFDbEIsU0FBUyxDQUFDLG9CQUFvQixDQUFDO3lCQUMvQixTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLG1DQUFtQyxDQUFDO3lCQUMxRixZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO3lCQUN4QyxZQUFZLEVBQUU7eUJBQ2QsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUV0QixNQUFNLGtCQUFRLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQXlILEVBQVEsRUFBRTt3QkFDckssS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQXVCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQy9ILENBQUMsQ0FBQyxDQUFDO29CQUVILEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7aUJBQ2pCO1lBQ0YsQ0FBQyxDQUFDLENBQUM7U0FDSDthQUFNO1lBQ04sS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7U0FDekM7SUFDRixDQUFDO0NBQ0QsQ0FBQyxDQUFDO0FBRUksS0FBSyxVQUFVLElBQUksQ0FBQyxJQUFrQjtJQUM1QyxlQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxlQUFPLENBQUMsS0FBSyxDQUFDO0lBQ3hELGVBQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFaEYsT0FBTyxlQUFPLENBQUM7QUFDaEIsQ0FBQyxDQUFDLE1BQU07QUFMUixvQkFLQztBQUVELGtCQUFlLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IENsYXNzZXMsIHsgY2hpbGxvdXQgfSBmcm9tIFwiLi4vQ2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBSaWNoRW1iZWQgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxudmFyIHdvcmRuZXQ6IHtcclxuXHRsb29rdXA6ICh3b3JkOiBzdHJpbmcsIHJlcGx5OiAoZXJyOiBhbnksIGRlZmluaXRpb25zOiBhbnkpID0+IFByb21pc2U8dm9pZD4pID0+IHZvaWQ7XHJcbn07XHJcblxyXG50cnkge1xyXG5cdHdvcmRuZXQgPSByZXF1aXJlKFwid29yZG5ldFwiKTtcclxufSBjYXRjaCAoZXJyKSB7IH1cclxuXHJcbmV4cG9ydCBjb25zdCBjb21tYW5kOiBDbGFzc2VzLkNvbW1hbmQgPSBuZXcgQ2xhc3Nlcy5Db21tYW5kKHtcclxuXHRuYW1lOiBcImRlZmluZVwiLFxyXG5cdGRlc2M6IFwiRGVmaW5lIGEgd29yZFwiLFxyXG5cdHVzYWdlOiBcImRlZmluZSB3b3JkPFN0cmluZz5cIixcclxuXHRleHA6IC9eIWRlZihpbmUpPyAuKyQvc2ksXHJcblx0Y2F0ZWdvcnk6IFwiVXRpbGl0eVwiLFxyXG5cdGRhdGE6IHsgfSxcclxuXHRib2R5OiBhc3luYyBmdW5jdGlvbiBib2R5KG1lc3NhZ2U6IE1lc3NhZ2UsIHZhbGU6IENsYXNzZXMuVmFsZSk6IFByb21pc2U8dm9pZD4ge1xyXG5cdFx0bGV0IHJlcGx5ID0gQ2xhc3Nlcy5mYWlsc2FmZS5iaW5kKG1lc3NhZ2UpO1xyXG5cclxuXHRcdGlmICh3b3JkbmV0KSB7XHJcblx0XHRcdGxldCB3b3JkOiBzdHJpbmc7XHJcblxyXG5cdFx0XHR3b3JkbmV0Lmxvb2t1cCh3b3JkID0gbWVzc2FnZS5jb250ZW50LnNwbGl0KCcgJykuc2xpY2UoMSkuam9pbignICcpLCBhc3luYyAoZXJyLCBkZWZpbml0aW9ucykgPT4ge1xyXG5cdFx0XHRcdGlmIChlcnIpIHtcclxuXHRcdFx0XHRcdHJlcGx5KGVyci5tZXNzYWdlKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bGV0IGVtYmVkOiBSaWNoRW1iZWQgPSBuZXcgUmljaEVtYmVkKCk7XHJcblxyXG5cdFx0XHRcdFx0ZW1iZWQuc2V0VGl0bGUod29yZClcclxuXHRcdFx0XHRcdFx0LnNldERlc2NyaXB0aW9uKGBEZWZpbml0aW9uKHMpIGZvciAke3dvcmR9IFske2RlZmluaXRpb25zLmxlbmd0aH1dOmApXHJcblx0XHRcdFx0XHRcdC5zZXRDb2xvcihcIlJBTkRPTVwiKVxyXG5cdFx0XHRcdFx0XHQuc2V0Rm9vdGVyKFwiUG93ZXJlZCBieSBXb3JkTmV0XCIpXHJcblx0XHRcdFx0XHRcdC5zZXRBdXRob3IoXCJWYWxlM1wiLCB2YWxlLmNsaWVudC51c2VyLmRpc3BsYXlBdmF0YXJVUkwsIFwiaHR0cHM6Ly9naXRodWIuY29tL1ZhbGVuLUgvVmFsZS0zXCIpXHJcblx0XHRcdFx0XHRcdC5zZXRUaHVtYm5haWwodmFsZS5jbGllbnQudXNlci5hdmF0YXJVUkwpXHJcblx0XHRcdFx0XHRcdC5zZXRUaW1lc3RhbXAoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQmxhbmtGaWVsZCh0cnVlKTtcclxuXHJcblx0XHRcdFx0XHRhd2FpdCBjaGlsbG91dC5mb3JPZihkZWZpbml0aW9ucywgKGRlZjogeyBtZXRhOiB7IHdvcmRzOiB7IG1hcDogKGFyZzA6ICh3b3JkOiB7IHdvcmQ6IHN0cmluZzsgfSkgPT4gc3RyaW5nKSA9PiB2b2lkOyB9OyBzeW5zZXRUeXBlOiBhbnk7IH07IGdsb3NzYXJ5OiBhbnk7IH0pOiB2b2lkID0+IHtcclxuXHRcdFx0XHRcdFx0ZW1iZWQuYWRkRmllbGQoYCR7ZGVmLm1ldGEud29yZHMubWFwKCh3b3JkOiB7IHdvcmQ6IHN0cmluZzsgfSkgPT4gd29yZC53b3JkKX0gWyR7ZGVmLm1ldGEuc3luc2V0VHlwZX1dOmAsIGRlZi5nbG9zc2FyeSwgdHJ1ZSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRyZXBseSh7IGVtYmVkIH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXBseShcImB3b3JkbmV0YCBtb2R1bGUgaXMgbWlzc2luZyEgLzpcIik7XHJcblx0XHR9XHJcblx0fSwgLy9ib2R5XHJcbn0pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXQodmFsZTogQ2xhc3Nlcy5WYWxlKTogUHJvbWlzZTxDbGFzc2VzLkNvbW1hbmQ+IHtcclxuXHRjb21tYW5kLnVzYWdlID0gdmFsZS5vcHRzLmNvbmZpZy5wcmVmaXggKyBjb21tYW5kLnVzYWdlO1xyXG5cdGNvbW1hbmQuZXhwID0gbmV3IFJlZ0V4cCgnXicgKyB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIFwiZGVmKGluZSk/IC4rJFwiLCBcInNpXCIpO1xyXG5cclxuXHRyZXR1cm4gY29tbWFuZDtcclxufSAvL2luaXRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcblxyXG5cclxuLyogU0FNUExFIE9VVFBVVCAtIHRlc3RcclxuW1xyXG5cdHtcclxuXHRcdG1ldGE6IHtcclxuXHRcdFx0c3luc2V0T2Zmc2V0OiA1Nzk5MjEyLFxyXG5cdFx0XHRsZXhGaWxlbnVtOiA5LFxyXG5cdFx0XHRzeW5zZXRUeXBlOiAnbm91bicsXHJcblx0XHRcdHdvcmRDb3VudDogNCxcclxuXHRcdFx0d29yZHM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR3b3JkOiAndHJpYWwnLFxyXG5cdFx0XHRcdFx0bGV4SWQ6IDBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0XHRwb2ludGVyQ291bnQ6IDEwLFxyXG5cdFx0XHRwb2ludGVyczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHBvaW50ZXJTeW1ib2w6ICdAJyxcclxuXHRcdFx0XHRcdHN5bnNldE9mZnNldDogNTc5ODA0MyxcclxuXHRcdFx0XHRcdHBvczogJ24nLFxyXG5cdFx0XHRcdFx0c291cmNlVGFyZ2V0SGV4OiAnMDAwMCcsXHJcblx0XHRcdFx0XHRkYXRhOiBbW1JFQ1VSU0VTXV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0Z2xvc3Nhcnk6ICd0cnlpbmcgc29tZXRoaW5nIHRvIGZpbmQgb3V0IGFib3V0IGl0OyBcImEgc2FtcGxlIGZvciB0ZW4gZGF5cyBmcmVlIHRyaWFsXCI7IFwiYSB0cmlhbCBvZiBwcm9nZXN0ZXJvbmUgZmFpbGVkIHRvIHJlbGlldmUgdGhlIHBhaW5cIidcclxuXHR9LFxyXG5dXHJcbiovXHJcbiJdfQ==