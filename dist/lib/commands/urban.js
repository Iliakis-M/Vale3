"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Classes_1 = tslib_1.__importStar(require("../Classes"));
const discord_js_1 = require("discord.js");
exports.command = new Classes_1.default.Command({
    name: "urban",
    desc: "Fetch a slang definition",
    usage: "urban word<String>",
    exp: /^!urb(an)? .+$/msi,
    category: "Utility",
    data: {},
    body: async function body(message, vale) {
        let reply = Classes_1.default.failsafe.bind(message);
        try {
            message.channel.startTyping();
            let word, definitions = JSON.parse(await Classes_1.default.fetch("https://api.urbandictionary.com/v0/define?term=" + (word = encodeURIComponent(message.content.split(' ').slice(1).join(' '))))), embed = new discord_js_1.RichEmbed();
            embed.setTitle(word)
                .setDescription(`Definition(s) for ${word} [${definitions.list.length}]:`)
                .setColor("RANDOM")
                .setFooter("Powered by UrbanDict")
                .setAuthor("Vale3", vale.client.user.displayAvatarURL, "https://github.com/Valen-H/Vale-3")
                .setThumbnail(vale.client.user.avatarURL)
                .setTimestamp()
                .setURL("https://www.urbandictionary.com/define.php?term=" + word);
            if (definitions.list) {
                await Classes_1.chillout.forEach(definitions.list, (entry) => {
                    embed.addField(entry.word, `**${entry.definition}** [[By: *${entry.author}*, ${entry.thumbs_up}:thumbsup: ${entry.thumbs_down}:thumbsdown:]]\n- ${entry.example}`);
                });
            }
            reply({ embed }).then(() => message.channel.stopTyping());
        }
        catch (err) {
            reply("External API error, please try again later... https://www.urbandictionary.com/define.php?term=" + message.content.split(' ').slice(1).join(' '));
            console.error(err);
            message.channel.stopTyping();
        }
    },
});
async function init(vale) {
    exports.command.usage = vale.opts.config.prefix + exports.command.usage;
    exports.command.exp = new RegExp('^' + vale.opts.config.prefix + "urb(an)? .+$", "msi");
    return exports.command;
} //init
exports.init = init;
exports.default = init;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJiYW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvY29tbWFuZHMvdXJiYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7QUFFYiw4REFBK0M7QUFDL0MsMkNBQWdEO0FBRW5DLFFBQUEsT0FBTyxHQUFvQixJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDO0lBQzNELElBQUksRUFBRSxPQUFPO0lBQ2IsSUFBSSxFQUFFLDBCQUEwQjtJQUNoQyxLQUFLLEVBQUUsb0JBQW9CO0lBQzNCLEdBQUcsRUFBRSxtQkFBbUI7SUFDeEIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsSUFBSSxFQUFFLEVBQUc7SUFDVCxJQUFJLEVBQUUsS0FBSyxVQUFVLElBQUksQ0FBQyxPQUFnQixFQUFFLElBQWtCO1FBQzdELElBQUksS0FBSyxHQUFHLGlCQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUzQyxJQUFJO1lBQ0gsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUU5QixJQUFJLElBQVksRUFDZixXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLGlCQUFPLENBQUMsS0FBSyxDQUFDLGlEQUFpRCxHQUFHLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDN0ssS0FBSyxHQUFHLElBQUksc0JBQVMsRUFBRSxDQUFDO1lBRXpCLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2lCQUNsQixjQUFjLENBQUMscUJBQXFCLElBQUksS0FBSyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDO2lCQUN6RSxRQUFRLENBQUMsUUFBUSxDQUFDO2lCQUNsQixTQUFTLENBQUMsc0JBQXNCLENBQUM7aUJBQ2pDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsbUNBQW1DLENBQUM7aUJBQzFGLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7aUJBQ3hDLFlBQVksRUFBRTtpQkFDZCxNQUFNLENBQUMsa0RBQWtELEdBQUcsSUFBSSxDQUFDLENBQUM7WUFFcEUsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFO2dCQUNyQixNQUFNLGtCQUFRLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFtRyxFQUFFLEVBQUU7b0JBQ2hKLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLEtBQUssQ0FBQyxVQUFVLGFBQWEsS0FBSyxDQUFDLE1BQU0sTUFBTSxLQUFLLENBQUMsU0FBUyxjQUFjLEtBQUssQ0FBQyxXQUFXLHFCQUFxQixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDcEssQ0FBQyxDQUFDLENBQUM7YUFDSDtZQUVELEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUMxRDtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ2IsS0FBSyxDQUFDLGdHQUFnRyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4SixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDN0I7SUFDRixDQUFDO0NBQ0QsQ0FBQyxDQUFDO0FBRUksS0FBSyxVQUFVLElBQUksQ0FBQyxJQUFrQjtJQUM1QyxlQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxlQUFPLENBQUMsS0FBSyxDQUFDO0lBQ3hELGVBQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFaEYsT0FBTyxlQUFPLENBQUM7QUFDaEIsQ0FBQyxDQUFDLE1BQU07QUFMUixvQkFLQztBQUVELGtCQUFlLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IENsYXNzZXMsIHsgY2hpbGxvdXQgfSBmcm9tIFwiLi4vQ2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBSaWNoRW1iZWQgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1hbmQ6IENsYXNzZXMuQ29tbWFuZCA9IG5ldyBDbGFzc2VzLkNvbW1hbmQoe1xyXG5cdG5hbWU6IFwidXJiYW5cIixcclxuXHRkZXNjOiBcIkZldGNoIGEgc2xhbmcgZGVmaW5pdGlvblwiLFxyXG5cdHVzYWdlOiBcInVyYmFuIHdvcmQ8U3RyaW5nPlwiLFxyXG5cdGV4cDogL14hdXJiKGFuKT8gLiskL21zaSxcclxuXHRjYXRlZ29yeTogXCJVdGlsaXR5XCIsXHJcblx0ZGF0YTogeyB9LFxyXG5cdGJvZHk6IGFzeW5jIGZ1bmN0aW9uIGJvZHkobWVzc2FnZTogTWVzc2FnZSwgdmFsZTogQ2xhc3Nlcy5WYWxlKTogUHJvbWlzZTx2b2lkPiB7XHJcblx0XHRsZXQgcmVwbHkgPSBDbGFzc2VzLmZhaWxzYWZlLmJpbmQobWVzc2FnZSk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bWVzc2FnZS5jaGFubmVsLnN0YXJ0VHlwaW5nKCk7XHJcblxyXG5cdFx0XHRsZXQgd29yZDogc3RyaW5nLFxyXG5cdFx0XHRcdGRlZmluaXRpb25zID0gSlNPTi5wYXJzZShhd2FpdCBDbGFzc2VzLmZldGNoKFwiaHR0cHM6Ly9hcGkudXJiYW5kaWN0aW9uYXJ5LmNvbS92MC9kZWZpbmU/dGVybT1cIiArICh3b3JkID0gZW5jb2RlVVJJQ29tcG9uZW50KG1lc3NhZ2UuY29udGVudC5zcGxpdCgnICcpLnNsaWNlKDEpLmpvaW4oJyAnKSkpKSksXHJcblx0XHRcdFx0ZW1iZWQgPSBuZXcgUmljaEVtYmVkKCk7XHJcblxyXG5cdFx0XHRlbWJlZC5zZXRUaXRsZSh3b3JkKVxyXG5cdFx0XHRcdC5zZXREZXNjcmlwdGlvbihgRGVmaW5pdGlvbihzKSBmb3IgJHt3b3JkfSBbJHtkZWZpbml0aW9ucy5saXN0Lmxlbmd0aH1dOmApXHJcblx0XHRcdFx0LnNldENvbG9yKFwiUkFORE9NXCIpXHJcblx0XHRcdFx0LnNldEZvb3RlcihcIlBvd2VyZWQgYnkgVXJiYW5EaWN0XCIpXHJcblx0XHRcdFx0LnNldEF1dGhvcihcIlZhbGUzXCIsIHZhbGUuY2xpZW50LnVzZXIuZGlzcGxheUF2YXRhclVSTCwgXCJodHRwczovL2dpdGh1Yi5jb20vVmFsZW4tSC9WYWxlLTNcIilcclxuXHRcdFx0XHQuc2V0VGh1bWJuYWlsKHZhbGUuY2xpZW50LnVzZXIuYXZhdGFyVVJMKVxyXG5cdFx0XHRcdC5zZXRUaW1lc3RhbXAoKVxyXG5cdFx0XHRcdC5zZXRVUkwoXCJodHRwczovL3d3dy51cmJhbmRpY3Rpb25hcnkuY29tL2RlZmluZS5waHA/dGVybT1cIiArIHdvcmQpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKGRlZmluaXRpb25zLmxpc3QpIHtcclxuXHRcdFx0XHRhd2FpdCBjaGlsbG91dC5mb3JFYWNoKGRlZmluaXRpb25zLmxpc3QsIChlbnRyeTogeyB3b3JkOiBhbnk7IGRlZmluaXRpb246IGFueTsgYXV0aG9yOiBhbnk7IHRodW1ic191cDogYW55OyB0aHVtYnNfZG93bjogYW55OyBleGFtcGxlOiBhbnk7IH0pID0+IHtcclxuXHRcdFx0XHRcdGVtYmVkLmFkZEZpZWxkKGVudHJ5LndvcmQsIGAqKiR7ZW50cnkuZGVmaW5pdGlvbn0qKiBbW0J5OiAqJHtlbnRyeS5hdXRob3J9KiwgJHtlbnRyeS50aHVtYnNfdXB9OnRodW1ic3VwOiAke2VudHJ5LnRodW1ic19kb3dufTp0aHVtYnNkb3duOl1dXFxuLSAke2VudHJ5LmV4YW1wbGV9YCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHJlcGx5KHsgZW1iZWQgfSkudGhlbigoKSA9PiBtZXNzYWdlLmNoYW5uZWwuc3RvcFR5cGluZygpKTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRyZXBseShcIkV4dGVybmFsIEFQSSBlcnJvciwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4uLiBodHRwczovL3d3dy51cmJhbmRpY3Rpb25hcnkuY29tL2RlZmluZS5waHA/dGVybT1cIiArIG1lc3NhZ2UuY29udGVudC5zcGxpdCgnICcpLnNsaWNlKDEpLmpvaW4oJyAnKSk7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHRcdFx0bWVzc2FnZS5jaGFubmVsLnN0b3BUeXBpbmcoKTtcclxuXHRcdH1cclxuXHR9LCAvL2JvZHlcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdCh2YWxlOiBDbGFzc2VzLlZhbGUpOiBQcm9taXNlPENsYXNzZXMuQ29tbWFuZD4ge1xyXG5cdGNvbW1hbmQudXNhZ2UgPSB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIGNvbW1hbmQudXNhZ2U7XHJcblx0Y29tbWFuZC5leHAgPSBuZXcgUmVnRXhwKCdeJyArIHZhbGUub3B0cy5jb25maWcucHJlZml4ICsgXCJ1cmIoYW4pPyAuKyRcIiwgXCJtc2lcIik7XHJcblxyXG5cdHJldHVybiBjb21tYW5kO1xyXG59IC8vaW5pdFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcclxuXHJcbi8qZm9yOiB0ZXN0XHJcbntcclxuICBsaXN0OiBbXHJcblx0e1xyXG5cdCAgZGVmaW5pdGlvbjogJzEuIHRoZSBtYWluIGNhdXNlIG9mIFtleHBsb3Npb25zXS5cXHInICtcclxuXHRcdCdcXG4yLiBhbnkgdGhpbmcgW2RyZWFkZWRdIHRoYXQgeW91ciBcInRlYWNoZXJzXCIgc2F5IGlzIFwiZ29vZFwiICcgK1xyXG5cdFx0J2ZvciB5b3UuIHNvb24gYWZ0ZXIsIHlvdSBleHBsb2RlIGZvciBubyByZWFzb24uXFxyJyArXHJcblx0XHQnXFxuMy4gd2hhdCBzY2llbnRpc3RzIGRvIHRvIG1ha2Ugc3R1ZmYgZXhwbG9kZS5cXHInICtcclxuXHRcdCdcXG40LiB3aGVuIGEgc2hlZXQgb2YgcGFwZXIgZXhwbG9kZXMgaW50byBbZmxhbWVzXS4nLFxyXG5cdCAgcGVybWFsaW5rOiAnaHR0cDovL3Rlc3QudXJiYW51cC5jb20vMTg3NjIzMicsXHJcblx0ICB0aHVtYnNfdXA6IDE0MixcclxuXHQgIHNvdW5kX3VybHM6IFtdLFxyXG5cdCAgYXV0aG9yOiAnbW9ubi11bml0JyxcclxuPlxyXG5cdCAgZGVmaWQ6IDE4NzYyMzIsXHJcblx0ICBjdXJyZW50X3ZvdGU6ICcnLFxyXG5cdCAgd3JpdHRlbl9vbjogJzIwMDYtMDctMjJUMDA6MDA6MDAuMDAwWicsXHJcblx0ICBleGFtcGxlOiAnMS4gdGVzdCBbc29kaXVtXSBhbmQgd2F0ZXIuXFxyJyArXHJcblx0XHQnXFxuMi4gU0FUIGlzIGEgdGVzdC5cXHInICtcclxuXHRcdCdcXG4zLiBbTW9ua2V5c10uXFxyJyArXHJcblx0XHQnXFxuNC4geW91IGJyb3VnaHQgeW91ciBbbGlnaHRlcl0gdG8gdGVzdC4nLFxyXG5cdCAgdGh1bWJzX2Rvd246IDQwXHJcblx0fSxcclxuXHR7XHJcblx0ICBkZWZpbml0aW9uOiAnRXZlcnl0aGluZyB0aGF0IGlzIFtwdXQgaW5dIFtmcm9udF0gb2YgeW91IGR1cmluZyBhbnkgZ2l2ZW4gW2RheV0uICcsXHJcblx0ICBwZXJtYWxpbms6ICdodHRwOi8vdGVzdC51cmJhbnVwLmNvbS8yMDgxMzA3JyxcclxuXHQgIHRodW1ic191cDogNTMsXHJcblx0ICBzb3VuZF91cmxzOiBbXSxcclxuXHQgIGF1dGhvcjogJ1ZJQ0tJIEtBUk1BJyxcclxuXHQgIHdvcmQ6ICdURVNUJyxcclxuXHQgIGRlZmlkOiAyMDgxMzA3LFxyXG5cdCAgY3VycmVudF92b3RlOiAnJyxcclxuXHQgIHdyaXR0ZW5fb246ICcyMDA2LTExLTEwVDAwOjAwOjAwLjAwMFonLFxyXG5cdCAgZXhhbXBsZTogJ0hvdyB3YXMgeW91ciBkYXk/XFxyJyArXHJcblx0XHQnXFxuW1Rlc3RpbmddIS4uLmJ1dCBpIGRpZCB3ZWxsIGF0IG5vdCBbcGFzc2luZ10gZXZlcnkgJyArXHJcblx0XHQndGVzdCEuLi5Ib3BlIGkgZ2V0IGEgW2JldHRlciBydW5dIHRvbW9ycm93LiAnLFxyXG5cdCAgdGh1bWJzX2Rvd246IDE3XHJcblx0fSxcclxuICBdXHJcbn1cclxuKi9cclxuIl19