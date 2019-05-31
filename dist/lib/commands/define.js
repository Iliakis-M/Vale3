"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Classes_1 = tslib_1.__importDefault(require("../Classes"));
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
                    for (let def of definitions) {
                        embed.addField(`${def.meta.words.map((word) => word.word)} [${def.meta.synsetType}]:`, def.glossary, true);
                    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2NvbW1hbmRzL2RlZmluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztBQUViLGlFQUFpQztBQUNqQywyQ0FBZ0Q7QUFFaEQsSUFBSSxPQUVILENBQUM7QUFFRixJQUFJO0lBQ0gsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztDQUM3QjtBQUFDLE9BQU8sR0FBRyxFQUFFLEdBQUc7QUFFSixRQUFBLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDO0lBQzFDLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLGVBQWU7SUFDckIsS0FBSyxFQUFFLHFCQUFxQjtJQUM1QixHQUFHLEVBQUUsbUJBQW1CO0lBQ3hCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLElBQUksRUFBRSxFQUFHO0lBQ1QsSUFBSSxFQUFFLEtBQUssVUFBVSxJQUFJLENBQUMsT0FBZ0IsRUFBRSxJQUFtQjtRQUM5RCxJQUFJLEtBQUssR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFM0MsSUFBSSxPQUFPLEVBQUU7WUFDWixJQUFJLElBQVksQ0FBQztZQUVqQixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEVBQUU7Z0JBQy9GLElBQUksR0FBRyxFQUFFO29CQUNSLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ25CO3FCQUFNO29CQUNOLElBQUksS0FBSyxHQUFjLElBQUksc0JBQVMsRUFBRSxDQUFDO29CQUV2QyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzt5QkFDbEIsY0FBYyxDQUFDLHFCQUFxQixJQUFJLEtBQUssV0FBVyxDQUFDLE1BQU0sSUFBSSxDQUFDO3lCQUNwRSxRQUFRLENBQUMsUUFBUSxDQUFDO3lCQUNsQixTQUFTLENBQUMsb0JBQW9CLENBQUM7eUJBQy9CLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsbUNBQW1DLENBQUM7eUJBQzFGLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7eUJBQ3hDLFlBQVksRUFBRTt5QkFDZCxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRXRCLEtBQUssSUFBSSxHQUFHLElBQUksV0FBVyxFQUFFO3dCQUM1QixLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBdUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztxQkFDOUg7b0JBRUQsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztpQkFDakI7WUFDRixDQUFDLENBQUMsQ0FBQztTQUNIO2FBQU07WUFDTixLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztTQUN6QztJQUNGLENBQUM7Q0FDRCxDQUFDLENBQUM7QUFFSSxLQUFLLFVBQVUsSUFBSSxDQUFDLElBQWtCO0lBQzVDLGVBQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGVBQU8sQ0FBQyxLQUFLLENBQUM7SUFDeEQsZUFBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVoRixPQUFPLGVBQU8sQ0FBQztBQUNoQixDQUFDLENBQUMsTUFBTTtBQUxSLG9CQUtDO0FBRUQsa0JBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgQ2xhc3NlcyBmcm9tIFwiLi4vQ2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBSaWNoRW1iZWQgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxudmFyIHdvcmRuZXQ6IHtcclxuXHRsb29rdXA6ICh3b3JkOiBzdHJpbmcsIHJlcGx5OiAoZXJyOiBhbnksIGRlZmluaXRpb25zOiBhbnkpID0+IFByb21pc2U8dm9pZD4pID0+IHZvaWQ7XHJcbn07XHJcblxyXG50cnkge1xyXG5cdHdvcmRuZXQgPSByZXF1aXJlKFwid29yZG5ldFwiKTtcclxufSBjYXRjaCAoZXJyKSB7IH1cclxuXHJcbmV4cG9ydCBjb25zdCBjb21tYW5kID0gbmV3IENsYXNzZXMuQ29tbWFuZCh7XHJcblx0bmFtZTogXCJkZWZpbmVcIixcclxuXHRkZXNjOiBcIkRlZmluZSBhIHdvcmRcIixcclxuXHR1c2FnZTogXCJkZWZpbmUgd29yZDxTdHJpbmc+XCIsXHJcblx0ZXhwOiAvXiFkZWYoaW5lKT8gLiskL3NpLFxyXG5cdGNhdGVnb3J5OiBcIlV0aWxpdHlcIixcclxuXHRkYXRhOiB7IH0sXHJcblx0Ym9keTogYXN5bmMgZnVuY3Rpb24gYm9keShtZXNzYWdlOiBNZXNzYWdlLCB2YWxlPzogQ2xhc3Nlcy5WYWxlKSB7XHJcblx0XHRsZXQgcmVwbHkgPSBDbGFzc2VzLmZhaWxzYWZlLmJpbmQobWVzc2FnZSk7XHJcblxyXG5cdFx0aWYgKHdvcmRuZXQpIHtcclxuXHRcdFx0bGV0IHdvcmQ6IHN0cmluZztcclxuXHJcblx0XHRcdHdvcmRuZXQubG9va3VwKHdvcmQgPSBtZXNzYWdlLmNvbnRlbnQuc3BsaXQoJyAnKS5zbGljZSgxKS5qb2luKCcgJyksIGFzeW5jIChlcnIsIGRlZmluaXRpb25zKSA9PiB7XHJcblx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0cmVwbHkoZXJyLm1lc3NhZ2UpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRsZXQgZW1iZWQ6IFJpY2hFbWJlZCA9IG5ldyBSaWNoRW1iZWQoKTtcclxuXHJcblx0XHRcdFx0XHRlbWJlZC5zZXRUaXRsZSh3b3JkKVxyXG5cdFx0XHRcdFx0XHQuc2V0RGVzY3JpcHRpb24oYERlZmluaXRpb24ocykgZm9yICR7d29yZH0gWyR7ZGVmaW5pdGlvbnMubGVuZ3RofV06YClcclxuXHRcdFx0XHRcdFx0LnNldENvbG9yKFwiUkFORE9NXCIpXHJcblx0XHRcdFx0XHRcdC5zZXRGb290ZXIoXCJQb3dlcmVkIGJ5IFdvcmROZXRcIilcclxuXHRcdFx0XHRcdFx0LnNldEF1dGhvcihcIlZhbGUzXCIsIHZhbGUuY2xpZW50LnVzZXIuZGlzcGxheUF2YXRhclVSTCwgXCJodHRwczovL2dpdGh1Yi5jb20vVmFsZW4tSC9WYWxlLTNcIilcclxuXHRcdFx0XHRcdFx0LnNldFRodW1ibmFpbCh2YWxlLmNsaWVudC51c2VyLmF2YXRhclVSTClcclxuXHRcdFx0XHRcdFx0LnNldFRpbWVzdGFtcCgpXHJcblx0XHRcdFx0XHRcdC5hZGRCbGFua0ZpZWxkKHRydWUpO1xyXG5cclxuXHRcdFx0XHRcdGZvciAobGV0IGRlZiBvZiBkZWZpbml0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRlbWJlZC5hZGRGaWVsZChgJHtkZWYubWV0YS53b3Jkcy5tYXAoKHdvcmQ6IHsgd29yZDogc3RyaW5nOyB9KSA9PiB3b3JkLndvcmQpfSBbJHtkZWYubWV0YS5zeW5zZXRUeXBlfV06YCwgZGVmLmdsb3NzYXJ5LCB0cnVlKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRyZXBseSh7IGVtYmVkIH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXBseShcImB3b3JkbmV0YCBtb2R1bGUgaXMgbWlzc2luZyEgLzpcIik7XHJcblx0XHR9XHJcblx0fSwgLy9ib2R5XHJcbn0pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXQodmFsZTogQ2xhc3Nlcy5WYWxlKTogUHJvbWlzZTxDbGFzc2VzLkNvbW1hbmQ+IHtcclxuXHRjb21tYW5kLnVzYWdlID0gdmFsZS5vcHRzLmNvbmZpZy5wcmVmaXggKyBjb21tYW5kLnVzYWdlO1xyXG5cdGNvbW1hbmQuZXhwID0gbmV3IFJlZ0V4cCgnXicgKyB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIFwiZGVmKGluZSk/IC4rJFwiLCBcInNpXCIpO1xyXG5cclxuXHRyZXR1cm4gY29tbWFuZDtcclxufSAvL2luaXRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcblxyXG5cclxuLyogU0FNUExFIE9VVFBVVCAtIHRlc3RcclxuW1xyXG5cdHtcclxuXHRcdG1ldGE6IHtcclxuXHRcdFx0c3luc2V0T2Zmc2V0OiA1Nzk5MjEyLFxyXG5cdFx0XHRsZXhGaWxlbnVtOiA5LFxyXG5cdFx0XHRzeW5zZXRUeXBlOiAnbm91bicsXHJcblx0XHRcdHdvcmRDb3VudDogNCxcclxuXHRcdFx0d29yZHM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR3b3JkOiAndHJpYWwnLFxyXG5cdFx0XHRcdFx0bGV4SWQ6IDBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0XHRwb2ludGVyQ291bnQ6IDEwLFxyXG5cdFx0XHRwb2ludGVyczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHBvaW50ZXJTeW1ib2w6ICdAJyxcclxuXHRcdFx0XHRcdHN5bnNldE9mZnNldDogNTc5ODA0MyxcclxuXHRcdFx0XHRcdHBvczogJ24nLFxyXG5cdFx0XHRcdFx0c291cmNlVGFyZ2V0SGV4OiAnMDAwMCcsXHJcblx0XHRcdFx0XHRkYXRhOiBbW1JFQ1VSU0VTXV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0Z2xvc3Nhcnk6ICd0cnlpbmcgc29tZXRoaW5nIHRvIGZpbmQgb3V0IGFib3V0IGl0OyBcImEgc2FtcGxlIGZvciB0ZW4gZGF5cyBmcmVlIHRyaWFsXCI7IFwiYSB0cmlhbCBvZiBwcm9nZXN0ZXJvbmUgZmFpbGVkIHRvIHJlbGlldmUgdGhlIHBhaW5cIidcclxuXHR9LFxyXG5dXHJcbiovXHJcbiJdfQ==