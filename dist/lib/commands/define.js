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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2NvbW1hbmRzL2RlZmluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztBQUViLDhEQUErQztBQUMvQywyQ0FBZ0Q7QUFFaEQsSUFBSSxPQUVILENBQUM7QUFFRixJQUFJO0lBQ0gsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztDQUM3QjtBQUFDLE9BQU8sR0FBRyxFQUFFLEdBQUc7QUFFSixRQUFBLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDO0lBQzFDLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLGVBQWU7SUFDckIsS0FBSyxFQUFFLHFCQUFxQjtJQUM1QixHQUFHLEVBQUUsbUJBQW1CO0lBQ3hCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLElBQUksRUFBRSxFQUFHO0lBQ1QsSUFBSSxFQUFFLEtBQUssVUFBVSxJQUFJLENBQUMsT0FBZ0IsRUFBRSxJQUFtQjtRQUM5RCxJQUFJLEtBQUssR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFM0MsSUFBSSxPQUFPLEVBQUU7WUFDWixJQUFJLElBQVksQ0FBQztZQUVqQixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEVBQUU7Z0JBQy9GLElBQUksR0FBRyxFQUFFO29CQUNSLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ25CO3FCQUFNO29CQUNOLElBQUksS0FBSyxHQUFjLElBQUksc0JBQVMsRUFBRSxDQUFDO29CQUV2QyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzt5QkFDbEIsY0FBYyxDQUFDLHFCQUFxQixJQUFJLEtBQUssV0FBVyxDQUFDLE1BQU0sSUFBSSxDQUFDO3lCQUNwRSxRQUFRLENBQUMsUUFBUSxDQUFDO3lCQUNsQixTQUFTLENBQUMsb0JBQW9CLENBQUM7eUJBQy9CLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsbUNBQW1DLENBQUM7eUJBQzFGLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7eUJBQ3hDLFlBQVksRUFBRTt5QkFDZCxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRXRCLE1BQU0sa0JBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBeUgsRUFBUSxFQUFFO3dCQUNySyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBdUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDL0gsQ0FBQyxDQUFDLENBQUM7b0JBRUgsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztpQkFDakI7WUFDRixDQUFDLENBQUMsQ0FBQztTQUNIO2FBQU07WUFDTixLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztTQUN6QztJQUNGLENBQUM7Q0FDRCxDQUFDLENBQUM7QUFFSSxLQUFLLFVBQVUsSUFBSSxDQUFDLElBQWtCO0lBQzVDLGVBQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGVBQU8sQ0FBQyxLQUFLLENBQUM7SUFDeEQsZUFBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVoRixPQUFPLGVBQU8sQ0FBQztBQUNoQixDQUFDLENBQUMsTUFBTTtBQUxSLG9CQUtDO0FBRUQsa0JBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgQ2xhc3NlcywgeyBjaGlsbG91dCB9IGZyb20gXCIuLi9DbGFzc2VzXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIFJpY2hFbWJlZCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcblxyXG52YXIgd29yZG5ldDoge1xyXG5cdGxvb2t1cDogKHdvcmQ6IHN0cmluZywgcmVwbHk6IChlcnI6IGFueSwgZGVmaW5pdGlvbnM6IGFueSkgPT4gUHJvbWlzZTx2b2lkPikgPT4gdm9pZDtcclxufTtcclxuXHJcbnRyeSB7XHJcblx0d29yZG5ldCA9IHJlcXVpcmUoXCJ3b3JkbmV0XCIpO1xyXG59IGNhdGNoIChlcnIpIHsgfVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1hbmQgPSBuZXcgQ2xhc3Nlcy5Db21tYW5kKHtcclxuXHRuYW1lOiBcImRlZmluZVwiLFxyXG5cdGRlc2M6IFwiRGVmaW5lIGEgd29yZFwiLFxyXG5cdHVzYWdlOiBcImRlZmluZSB3b3JkPFN0cmluZz5cIixcclxuXHRleHA6IC9eIWRlZihpbmUpPyAuKyQvc2ksXHJcblx0Y2F0ZWdvcnk6IFwiVXRpbGl0eVwiLFxyXG5cdGRhdGE6IHsgfSxcclxuXHRib2R5OiBhc3luYyBmdW5jdGlvbiBib2R5KG1lc3NhZ2U6IE1lc3NhZ2UsIHZhbGU/OiBDbGFzc2VzLlZhbGUpIHtcclxuXHRcdGxldCByZXBseSA9IENsYXNzZXMuZmFpbHNhZmUuYmluZChtZXNzYWdlKTtcclxuXHJcblx0XHRpZiAod29yZG5ldCkge1xyXG5cdFx0XHRsZXQgd29yZDogc3RyaW5nO1xyXG5cclxuXHRcdFx0d29yZG5ldC5sb29rdXAod29yZCA9IG1lc3NhZ2UuY29udGVudC5zcGxpdCgnICcpLnNsaWNlKDEpLmpvaW4oJyAnKSwgYXN5bmMgKGVyciwgZGVmaW5pdGlvbnMpID0+IHtcclxuXHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRyZXBseShlcnIubWVzc2FnZSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGxldCBlbWJlZDogUmljaEVtYmVkID0gbmV3IFJpY2hFbWJlZCgpO1xyXG5cclxuXHRcdFx0XHRcdGVtYmVkLnNldFRpdGxlKHdvcmQpXHJcblx0XHRcdFx0XHRcdC5zZXREZXNjcmlwdGlvbihgRGVmaW5pdGlvbihzKSBmb3IgJHt3b3JkfSBbJHtkZWZpbml0aW9ucy5sZW5ndGh9XTpgKVxyXG5cdFx0XHRcdFx0XHQuc2V0Q29sb3IoXCJSQU5ET01cIilcclxuXHRcdFx0XHRcdFx0LnNldEZvb3RlcihcIlBvd2VyZWQgYnkgV29yZE5ldFwiKVxyXG5cdFx0XHRcdFx0XHQuc2V0QXV0aG9yKFwiVmFsZTNcIiwgdmFsZS5jbGllbnQudXNlci5kaXNwbGF5QXZhdGFyVVJMLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9WYWxlbi1IL1ZhbGUtM1wiKVxyXG5cdFx0XHRcdFx0XHQuc2V0VGh1bWJuYWlsKHZhbGUuY2xpZW50LnVzZXIuYXZhdGFyVVJMKVxyXG5cdFx0XHRcdFx0XHQuc2V0VGltZXN0YW1wKClcclxuXHRcdFx0XHRcdFx0LmFkZEJsYW5rRmllbGQodHJ1ZSk7XHJcblxyXG5cdFx0XHRcdFx0YXdhaXQgY2hpbGxvdXQuZm9yT2YoZGVmaW5pdGlvbnMsIChkZWY6IHsgbWV0YTogeyB3b3JkczogeyBtYXA6IChhcmcwOiAod29yZDogeyB3b3JkOiBzdHJpbmc7IH0pID0+IHN0cmluZykgPT4gdm9pZDsgfTsgc3luc2V0VHlwZTogYW55OyB9OyBnbG9zc2FyeTogYW55OyB9KTogdm9pZCA9PiB7XHJcblx0XHRcdFx0XHRcdGVtYmVkLmFkZEZpZWxkKGAke2RlZi5tZXRhLndvcmRzLm1hcCgod29yZDogeyB3b3JkOiBzdHJpbmc7IH0pID0+IHdvcmQud29yZCl9IFske2RlZi5tZXRhLnN5bnNldFR5cGV9XTpgLCBkZWYuZ2xvc3NhcnksIHRydWUpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0cmVwbHkoeyBlbWJlZCB9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVwbHkoXCJgd29yZG5ldGAgbW9kdWxlIGlzIG1pc3NpbmchIC86XCIpO1xyXG5cdFx0fVxyXG5cdH0sIC8vYm9keVxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0KHZhbGU6IENsYXNzZXMuVmFsZSk6IFByb21pc2U8Q2xhc3Nlcy5Db21tYW5kPiB7XHJcblx0Y29tbWFuZC51c2FnZSA9IHZhbGUub3B0cy5jb25maWcucHJlZml4ICsgY29tbWFuZC51c2FnZTtcclxuXHRjb21tYW5kLmV4cCA9IG5ldyBSZWdFeHAoJ14nICsgdmFsZS5vcHRzLmNvbmZpZy5wcmVmaXggKyBcImRlZihpbmUpPyAuKyRcIiwgXCJzaVwiKTtcclxuXHJcblx0cmV0dXJuIGNvbW1hbmQ7XHJcbn0gLy9pbml0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG5cclxuXHJcbi8qIFNBTVBMRSBPVVRQVVQgLSB0ZXN0XHJcbltcclxuXHR7XHJcblx0XHRtZXRhOiB7XHJcblx0XHRcdHN5bnNldE9mZnNldDogNTc5OTIxMixcclxuXHRcdFx0bGV4RmlsZW51bTogOSxcclxuXHRcdFx0c3luc2V0VHlwZTogJ25vdW4nLFxyXG5cdFx0XHR3b3JkQ291bnQ6IDQsXHJcblx0XHRcdHdvcmRzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0d29yZDogJ3RyaWFsJyxcclxuXHRcdFx0XHRcdGxleElkOiAwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XSxcclxuXHRcdFx0cG9pbnRlckNvdW50OiAxMCxcclxuXHRcdFx0cG9pbnRlcnM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRwb2ludGVyU3ltYm9sOiAnQCcsXHJcblx0XHRcdFx0XHRzeW5zZXRPZmZzZXQ6IDU3OTgwNDMsXHJcblx0XHRcdFx0XHRwb3M6ICduJyxcclxuXHRcdFx0XHRcdHNvdXJjZVRhcmdldEhleDogJzAwMDAnLFxyXG5cdFx0XHRcdFx0ZGF0YTogW1tSRUNVUlNFU11dXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRcdGdsb3NzYXJ5OiAndHJ5aW5nIHNvbWV0aGluZyB0byBmaW5kIG91dCBhYm91dCBpdDsgXCJhIHNhbXBsZSBmb3IgdGVuIGRheXMgZnJlZSB0cmlhbFwiOyBcImEgdHJpYWwgb2YgcHJvZ2VzdGVyb25lIGZhaWxlZCB0byByZWxpZXZlIHRoZSBwYWluXCInXHJcblx0fSxcclxuXVxyXG4qL1xyXG4iXX0=