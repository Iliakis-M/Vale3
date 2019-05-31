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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvY29tbWFuZHMvY29sb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7QUFFYixpRUFBaUM7QUFDakMsMkNBQWdEO0FBRW5DLFFBQUEsT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxPQUFPLENBQUM7SUFDMUMsSUFBSSxFQUFFLE9BQU87SUFDYixJQUFJLEVBQUUsc0NBQXNDO0lBQzVDLEtBQUssRUFBRSxxQkFBcUI7SUFDNUIsR0FBRyxFQUFFLHNCQUFzQjtJQUMzQixRQUFRLEVBQUUsU0FBUztJQUNuQixJQUFJLEVBQUUsRUFBRztJQUNULElBQUksRUFBRSxLQUFLLFVBQVUsSUFBSSxDQUFDLE9BQWdCLEVBQUUsSUFBbUI7UUFDOUQsSUFBSSxLQUFLLEdBQWMsSUFBSSxzQkFBUyxFQUFFLEVBQ3JDLEtBQUssR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXRCLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDNUU7YUFBTTtZQUNOLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekI7UUFFRCxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU1QixLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7Q0FDRCxDQUFDLENBQUM7QUFFSSxLQUFLLFVBQVUsSUFBSSxDQUFDLElBQWtCO0lBQzVDLGVBQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGVBQU8sQ0FBQyxLQUFLLENBQUM7SUFDeEQsZUFBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRW5GLE9BQU8sZUFBTyxDQUFDO0FBQ2hCLENBQUMsQ0FBQyxNQUFNO0FBTFIsb0JBS0M7QUFFRCxrQkFBZSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBDbGFzc2VzIGZyb20gXCIuLi9DbGFzc2VzXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIFJpY2hFbWJlZCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29tbWFuZCA9IG5ldyBDbGFzc2VzLkNvbW1hbmQoe1xyXG5cdG5hbWU6IFwiY29sb3JcIixcclxuXHRkZXNjOiBcIkdldCBhIHNwZWNpZmljIGNvbG9yIG9yIGEgcmFuZG9tIG9uZVwiLFxyXG5cdHVzYWdlOiBcImNvbG9yWyBoZXg8U3RyaW5nPl1cIixcclxuXHRleHA6IC9eIWNvP2wobz9yKT8oIC4rKT8kL2ksXHJcblx0Y2F0ZWdvcnk6IFwiVXRpbGl0eVwiLFxyXG5cdGRhdGE6IHsgfSxcclxuXHRib2R5OiBhc3luYyBmdW5jdGlvbiBib2R5KG1lc3NhZ2U6IE1lc3NhZ2UsIHZhbGU/OiBDbGFzc2VzLlZhbGUpIHtcclxuXHRcdGxldCBlbWJlZDogUmljaEVtYmVkID0gbmV3IFJpY2hFbWJlZCgpLFxyXG5cdFx0XHRyZXBseSA9IENsYXNzZXMuZmFpbHNhZmUuYmluZChtZXNzYWdlKTtcclxuXHRcdFxyXG5cdFx0ZW1iZWQuYWRkQmxhbmtGaWVsZCgpO1xyXG5cclxuXHRcdGlmIChtZXNzYWdlLmNvbnRlbnQuaW5jbHVkZXMoJyAnKSkge1xyXG5cdFx0XHRlbWJlZC5zZXRDb2xvcihtZXNzYWdlLmNvbnRlbnQuc3BsaXQoJyAnKS5zbGljZSgxKS5qb2luKCcgJykudG9VcHBlckNhc2UoKSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRlbWJlZC5zZXRDb2xvcihcIlJBTkRPTVwiKTtcclxuXHRcdH1cclxuXHJcblx0XHRlbWJlZC5zZXRUaXRsZShlbWJlZC5jb2xvcik7XHJcblxyXG5cdFx0cmVwbHkoeyBlbWJlZCB9KTtcclxuXHR9LCAvL2JvZHlcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdCh2YWxlOiBDbGFzc2VzLlZhbGUpOiBQcm9taXNlPENsYXNzZXMuQ29tbWFuZD4ge1xyXG5cdGNvbW1hbmQudXNhZ2UgPSB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIGNvbW1hbmQudXNhZ2U7XHJcblx0Y29tbWFuZC5leHAgPSBuZXcgUmVnRXhwKCdeJyArIHZhbGUub3B0cy5jb25maWcucHJlZml4ICsgXCJjbz9sKG8/cik/KCAuKyk/JFwiLCBcImlcIik7XHJcblxyXG5cdHJldHVybiBjb21tYW5kO1xyXG59IC8vaW5pdFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcclxuIl19