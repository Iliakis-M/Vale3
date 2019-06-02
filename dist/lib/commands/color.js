"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Classes_1 = tslib_1.__importDefault(require("../Classes"));
const discord_js_1 = require("discord.js");
exports.command = new Classes_1.default.Command({
    name: "color",
    desc: "Get a specific color or a random one",
    usage: "color[ hex<String>]",
    exp: /^!co?l(o?r)?( .+)?$/i,
    category: "Utility",
    data: {},
    body: async function body(message, vale) {
        let embed = new discord_js_1.RichEmbed(), reply = Classes_1.default.failsafe.bind(message);
        embed.addBlankField();
        if (message.content.includes(' ')) {
            embed.setColor(message.content.split(' ').slice(1).join(' ').toUpperCase());
        }
        else {
            embed.setColor("RANDOM");
        }
        embed.setTitle(embed.color);
        reply({ embed });
    },
});
async function init(vale) {
    exports.command.usage = vale.opts.config.prefix + exports.command.usage;
    exports.command.exp = new RegExp('^' + vale.opts.config.prefix + "co?l(o?r)?( .+)?$", "i");
    return exports.command;
} //init
exports.init = init;
exports.default = init;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvY29tbWFuZHMvY29sb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7QUFFYixpRUFBaUM7QUFDakMsMkNBQWdEO0FBRW5DLFFBQUEsT0FBTyxHQUFvQixJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDO0lBQzNELElBQUksRUFBRSxPQUFPO0lBQ2IsSUFBSSxFQUFFLHNDQUFzQztJQUM1QyxLQUFLLEVBQUUscUJBQXFCO0lBQzVCLEdBQUcsRUFBRSxzQkFBc0I7SUFDM0IsUUFBUSxFQUFFLFNBQVM7SUFDbkIsSUFBSSxFQUFFLEVBQUc7SUFDVCxJQUFJLEVBQUUsS0FBSyxVQUFVLElBQUksQ0FBQyxPQUFnQixFQUFFLElBQW1CO1FBQzlELElBQUksS0FBSyxHQUFjLElBQUksc0JBQVMsRUFBRSxFQUNyQyxLQUFLLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXhDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUV0QixJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQzVFO2FBQU07WUFDTixLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3pCO1FBRUQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFNUIsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNsQixDQUFDO0NBQ0QsQ0FBQyxDQUFDO0FBRUksS0FBSyxVQUFVLElBQUksQ0FBQyxJQUFrQjtJQUM1QyxlQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxlQUFPLENBQUMsS0FBSyxDQUFDO0lBQ3hELGVBQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUVuRixPQUFPLGVBQU8sQ0FBQztBQUNoQixDQUFDLENBQUMsTUFBTTtBQUxSLG9CQUtDO0FBRUQsa0JBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgQ2xhc3NlcyBmcm9tIFwiLi4vQ2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBSaWNoRW1iZWQgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1hbmQ6IENsYXNzZXMuQ29tbWFuZCA9IG5ldyBDbGFzc2VzLkNvbW1hbmQoe1xyXG5cdG5hbWU6IFwiY29sb3JcIixcclxuXHRkZXNjOiBcIkdldCBhIHNwZWNpZmljIGNvbG9yIG9yIGEgcmFuZG9tIG9uZVwiLFxyXG5cdHVzYWdlOiBcImNvbG9yWyBoZXg8U3RyaW5nPl1cIixcclxuXHRleHA6IC9eIWNvP2wobz9yKT8oIC4rKT8kL2ksXHJcblx0Y2F0ZWdvcnk6IFwiVXRpbGl0eVwiLFxyXG5cdGRhdGE6IHsgfSxcclxuXHRib2R5OiBhc3luYyBmdW5jdGlvbiBib2R5KG1lc3NhZ2U6IE1lc3NhZ2UsIHZhbGU/OiBDbGFzc2VzLlZhbGUpOiBQcm9taXNlPHZvaWQ+IHtcclxuXHRcdGxldCBlbWJlZDogUmljaEVtYmVkID0gbmV3IFJpY2hFbWJlZCgpLFxyXG5cdFx0XHRyZXBseSA9IENsYXNzZXMuZmFpbHNhZmUuYmluZChtZXNzYWdlKTtcclxuXHRcdFxyXG5cdFx0ZW1iZWQuYWRkQmxhbmtGaWVsZCgpO1xyXG5cclxuXHRcdGlmIChtZXNzYWdlLmNvbnRlbnQuaW5jbHVkZXMoJyAnKSkge1xyXG5cdFx0XHRlbWJlZC5zZXRDb2xvcihtZXNzYWdlLmNvbnRlbnQuc3BsaXQoJyAnKS5zbGljZSgxKS5qb2luKCcgJykudG9VcHBlckNhc2UoKSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRlbWJlZC5zZXRDb2xvcihcIlJBTkRPTVwiKTtcclxuXHRcdH1cclxuXHJcblx0XHRlbWJlZC5zZXRUaXRsZShlbWJlZC5jb2xvcik7XHJcblxyXG5cdFx0cmVwbHkoeyBlbWJlZCB9KTtcclxuXHR9LCAvL2JvZHlcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdCh2YWxlOiBDbGFzc2VzLlZhbGUpOiBQcm9taXNlPENsYXNzZXMuQ29tbWFuZD4ge1xyXG5cdGNvbW1hbmQudXNhZ2UgPSB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIGNvbW1hbmQudXNhZ2U7XHJcblx0Y29tbWFuZC5leHAgPSBuZXcgUmVnRXhwKCdeJyArIHZhbGUub3B0cy5jb25maWcucHJlZml4ICsgXCJjbz9sKG8/cik/KCAuKyk/JFwiLCBcImlcIik7XHJcblxyXG5cdHJldHVybiBjb21tYW5kO1xyXG59IC8vaW5pdFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcclxuIl19