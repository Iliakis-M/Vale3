"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Classes_1 = tslib_1.__importStar(require("../Classes"));
const discord_js_1 = require("discord.js");
exports.command = new Classes_1.default.Command({
    name: "urban",
    desc: "Fetch a slang definition",
    usage: "!urban word<String>",
    exp: /^!urb(an)? .+$/msi,
    category: "Utility",
    data: {},
    body: async function body(message, vale) {
        let reply = Classes_1.default.failsafe.bind(message);
        try {
            let word, definitions = JSON.parse(await Classes_1.default.fetch("https://api.urbandictionary.com/v0/define?term=" + (word = message.content.split(' ').slice(1).join(' ')))), embed = new discord_js_1.RichEmbed();
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
            reply({ embed });
        }
        catch (err) {
            reply("External API error, please try again later... https://www.urbandictionary.com/define.php?term=" + message.content.split(' ').slice(1).join(' '));
            console.error(err);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJiYW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvY29tbWFuZHMvdXJiYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7QUFFYiw4REFBK0M7QUFDL0MsMkNBQWdEO0FBRW5DLFFBQUEsT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxPQUFPLENBQUM7SUFDMUMsSUFBSSxFQUFFLE9BQU87SUFDYixJQUFJLEVBQUUsMEJBQTBCO0lBQ2hDLEtBQUssRUFBRSxxQkFBcUI7SUFDNUIsR0FBRyxFQUFFLG1CQUFtQjtJQUN4QixRQUFRLEVBQUUsU0FBUztJQUNuQixJQUFJLEVBQUUsRUFBRztJQUNULElBQUksRUFBRSxLQUFLLFVBQVUsSUFBSSxDQUFDLE9BQWdCLEVBQUUsSUFBbUI7UUFDOUQsSUFBSSxLQUFLLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTNDLElBQUk7WUFDSCxJQUFJLElBQVksRUFDZixXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLGlCQUFPLENBQUMsS0FBSyxDQUFDLGlEQUFpRCxHQUFHLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3pKLEtBQUssR0FBRyxJQUFJLHNCQUFTLEVBQUUsQ0FBQztZQUV6QixLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztpQkFDbEIsY0FBYyxDQUFDLHFCQUFxQixJQUFJLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQztpQkFDekUsUUFBUSxDQUFDLFFBQVEsQ0FBQztpQkFDbEIsU0FBUyxDQUFDLHNCQUFzQixDQUFDO2lCQUNqQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLG1DQUFtQyxDQUFDO2lCQUMxRixZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2lCQUN4QyxZQUFZLEVBQUU7aUJBQ2QsTUFBTSxDQUFDLGtEQUFrRCxHQUFHLElBQUksQ0FBQyxDQUFDO1lBRXBFLElBQUksV0FBVyxDQUFDLElBQUksRUFBRTtnQkFDckIsTUFBTSxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBbUcsRUFBRSxFQUFFO29CQUNoSixLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxLQUFLLENBQUMsVUFBVSxhQUFhLEtBQUssQ0FBQyxNQUFNLE1BQU0sS0FBSyxDQUFDLFNBQVMsY0FBYyxLQUFLLENBQUMsV0FBVyxxQkFBcUIsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBQ3BLLENBQUMsQ0FBQyxDQUFDO2FBQ0g7WUFFRCxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ2pCO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDYixLQUFLLENBQUMsZ0dBQWdHLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3hKLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbkI7SUFDRixDQUFDO0NBQ0QsQ0FBQyxDQUFDO0FBRUksS0FBSyxVQUFVLElBQUksQ0FBQyxJQUFrQjtJQUM1QyxlQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxlQUFPLENBQUMsS0FBSyxDQUFDO0lBQ3hELGVBQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFaEYsT0FBTyxlQUFPLENBQUM7QUFDaEIsQ0FBQyxDQUFDLE1BQU07QUFMUixvQkFLQztBQUVELGtCQUFlLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IENsYXNzZXMsIHsgY2hpbGxvdXQgfSBmcm9tIFwiLi4vQ2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBSaWNoRW1iZWQgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1hbmQgPSBuZXcgQ2xhc3Nlcy5Db21tYW5kKHtcclxuXHRuYW1lOiBcInVyYmFuXCIsXHJcblx0ZGVzYzogXCJGZXRjaCBhIHNsYW5nIGRlZmluaXRpb25cIixcclxuXHR1c2FnZTogXCIhdXJiYW4gd29yZDxTdHJpbmc+XCIsXHJcblx0ZXhwOiAvXiF1cmIoYW4pPyAuKyQvbXNpLFxyXG5cdGNhdGVnb3J5OiBcIlV0aWxpdHlcIixcclxuXHRkYXRhOiB7IH0sXHJcblx0Ym9keTogYXN5bmMgZnVuY3Rpb24gYm9keShtZXNzYWdlOiBNZXNzYWdlLCB2YWxlPzogQ2xhc3Nlcy5WYWxlKSB7XHJcblx0XHRsZXQgcmVwbHkgPSBDbGFzc2VzLmZhaWxzYWZlLmJpbmQobWVzc2FnZSk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bGV0IHdvcmQ6IHN0cmluZyxcclxuXHRcdFx0XHRkZWZpbml0aW9ucyA9IEpTT04ucGFyc2UoYXdhaXQgQ2xhc3Nlcy5mZXRjaChcImh0dHBzOi8vYXBpLnVyYmFuZGljdGlvbmFyeS5jb20vdjAvZGVmaW5lP3Rlcm09XCIgKyAod29yZCA9IG1lc3NhZ2UuY29udGVudC5zcGxpdCgnICcpLnNsaWNlKDEpLmpvaW4oJyAnKSkpKSxcclxuXHRcdFx0XHRlbWJlZCA9IG5ldyBSaWNoRW1iZWQoKTtcclxuXHJcblx0XHRcdGVtYmVkLnNldFRpdGxlKHdvcmQpXHJcblx0XHRcdFx0LnNldERlc2NyaXB0aW9uKGBEZWZpbml0aW9uKHMpIGZvciAke3dvcmR9IFske2RlZmluaXRpb25zLmxpc3QubGVuZ3RofV06YClcclxuXHRcdFx0XHQuc2V0Q29sb3IoXCJSQU5ET01cIilcclxuXHRcdFx0XHQuc2V0Rm9vdGVyKFwiUG93ZXJlZCBieSBVcmJhbkRpY3RcIilcclxuXHRcdFx0XHQuc2V0QXV0aG9yKFwiVmFsZTNcIiwgdmFsZS5jbGllbnQudXNlci5kaXNwbGF5QXZhdGFyVVJMLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9WYWxlbi1IL1ZhbGUtM1wiKVxyXG5cdFx0XHRcdC5zZXRUaHVtYm5haWwodmFsZS5jbGllbnQudXNlci5hdmF0YXJVUkwpXHJcblx0XHRcdFx0LnNldFRpbWVzdGFtcCgpXHJcblx0XHRcdFx0LnNldFVSTChcImh0dHBzOi8vd3d3LnVyYmFuZGljdGlvbmFyeS5jb20vZGVmaW5lLnBocD90ZXJtPVwiICsgd29yZCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoZGVmaW5pdGlvbnMubGlzdCkge1xyXG5cdFx0XHRcdGF3YWl0IGNoaWxsb3V0LmZvckVhY2goZGVmaW5pdGlvbnMubGlzdCwgKGVudHJ5OiB7IHdvcmQ6IGFueTsgZGVmaW5pdGlvbjogYW55OyBhdXRob3I6IGFueTsgdGh1bWJzX3VwOiBhbnk7IHRodW1ic19kb3duOiBhbnk7IGV4YW1wbGU6IGFueTsgfSkgPT4ge1xyXG5cdFx0XHRcdFx0ZW1iZWQuYWRkRmllbGQoZW50cnkud29yZCwgYCoqJHtlbnRyeS5kZWZpbml0aW9ufSoqIFtbQnk6ICoke2VudHJ5LmF1dGhvcn0qLCAke2VudHJ5LnRodW1ic191cH06dGh1bWJzdXA6ICR7ZW50cnkudGh1bWJzX2Rvd259OnRodW1ic2Rvd246XV1cXG4tICR7ZW50cnkuZXhhbXBsZX1gKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0cmVwbHkoeyBlbWJlZCB9KTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRyZXBseShcIkV4dGVybmFsIEFQSSBlcnJvciwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4uLiBodHRwczovL3d3dy51cmJhbmRpY3Rpb25hcnkuY29tL2RlZmluZS5waHA/dGVybT1cIiArIG1lc3NhZ2UuY29udGVudC5zcGxpdCgnICcpLnNsaWNlKDEpLmpvaW4oJyAnKSk7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHRcdH1cclxuXHR9LCAvL2JvZHlcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdCh2YWxlOiBDbGFzc2VzLlZhbGUpIHtcclxuXHRjb21tYW5kLnVzYWdlID0gdmFsZS5vcHRzLmNvbmZpZy5wcmVmaXggKyBjb21tYW5kLnVzYWdlO1xyXG5cdGNvbW1hbmQuZXhwID0gbmV3IFJlZ0V4cCgnXicgKyB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIFwidXJiKGFuKT8gLiskXCIsIFwibXNpXCIpO1xyXG5cclxuXHRyZXR1cm4gY29tbWFuZDtcclxufSAvL2luaXRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcblxyXG4vKmZvcjogdGVzdFxyXG57XHJcbiAgbGlzdDogW1xyXG4gICAge1xyXG4gICAgICBkZWZpbml0aW9uOiAnMS4gdGhlIG1haW4gY2F1c2Ugb2YgW2V4cGxvc2lvbnNdLlxccicgK1xyXG4gICAgICAgICdcXG4yLiBhbnkgdGhpbmcgW2RyZWFkZWRdIHRoYXQgeW91ciBcInRlYWNoZXJzXCIgc2F5IGlzIFwiZ29vZFwiICcgK1xyXG4gICAgICAgICdmb3IgeW91LiBzb29uIGFmdGVyLCB5b3UgZXhwbG9kZSBmb3Igbm8gcmVhc29uLlxccicgK1xyXG4gICAgICAgICdcXG4zLiB3aGF0IHNjaWVudGlzdHMgZG8gdG8gbWFrZSBzdHVmZiBleHBsb2RlLlxccicgK1xyXG4gICAgICAgICdcXG40LiB3aGVuIGEgc2hlZXQgb2YgcGFwZXIgZXhwbG9kZXMgaW50byBbZmxhbWVzXS4nLFxyXG4gICAgICBwZXJtYWxpbms6ICdodHRwOi8vdGVzdC51cmJhbnVwLmNvbS8xODc2MjMyJyxcclxuICAgICAgdGh1bWJzX3VwOiAxNDIsXHJcbiAgICAgIHNvdW5kX3VybHM6IFtdLFxyXG4gICAgICBhdXRob3I6ICdtb25uLXVuaXQnLFxyXG4+XHJcbiAgICAgIGRlZmlkOiAxODc2MjMyLFxyXG4gICAgICBjdXJyZW50X3ZvdGU6ICcnLFxyXG4gICAgICB3cml0dGVuX29uOiAnMjAwNi0wNy0yMlQwMDowMDowMC4wMDBaJyxcclxuICAgICAgZXhhbXBsZTogJzEuIHRlc3QgW3NvZGl1bV0gYW5kIHdhdGVyLlxccicgK1xyXG4gICAgICAgICdcXG4yLiBTQVQgaXMgYSB0ZXN0LlxccicgK1xyXG4gICAgICAgICdcXG4zLiBbTW9ua2V5c10uXFxyJyArXHJcbiAgICAgICAgJ1xcbjQuIHlvdSBicm91Z2h0IHlvdXIgW2xpZ2h0ZXJdIHRvIHRlc3QuJyxcclxuICAgICAgdGh1bWJzX2Rvd246IDQwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBkZWZpbml0aW9uOiAnRXZlcnl0aGluZyB0aGF0IGlzIFtwdXQgaW5dIFtmcm9udF0gb2YgeW91IGR1cmluZyBhbnkgZ2l2ZW4gW2RheV0uICcsXHJcbiAgICAgIHBlcm1hbGluazogJ2h0dHA6Ly90ZXN0LnVyYmFudXAuY29tLzIwODEzMDcnLFxyXG4gICAgICB0aHVtYnNfdXA6IDUzLFxyXG4gICAgICBzb3VuZF91cmxzOiBbXSxcclxuICAgICAgYXV0aG9yOiAnVklDS0kgS0FSTUEnLFxyXG4gICAgICB3b3JkOiAnVEVTVCcsXHJcbiAgICAgIGRlZmlkOiAyMDgxMzA3LFxyXG4gICAgICBjdXJyZW50X3ZvdGU6ICcnLFxyXG4gICAgICB3cml0dGVuX29uOiAnMjAwNi0xMS0xMFQwMDowMDowMC4wMDBaJyxcclxuICAgICAgZXhhbXBsZTogJ0hvdyB3YXMgeW91ciBkYXk/XFxyJyArXHJcbiAgICAgICAgJ1xcbltUZXN0aW5nXSEuLi5idXQgaSBkaWQgd2VsbCBhdCBub3QgW3Bhc3NpbmddIGV2ZXJ5ICcgK1xyXG4gICAgICAgICd0ZXN0IS4uLkhvcGUgaSBnZXQgYSBbYmV0dGVyIHJ1bl0gdG9tb3Jyb3cuICcsXHJcbiAgICAgIHRodW1ic19kb3duOiAxN1xyXG4gICAgfSxcclxuICBdXHJcbn1cclxuKi9cclxuIl19