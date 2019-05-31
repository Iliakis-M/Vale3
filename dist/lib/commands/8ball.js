"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Classes_1 = tslib_1.__importDefault(require("../Classes"));
const discord_js_1 = require("discord.js");
exports.command = new Classes_1.default.Command({
    name: "8ball",
    desc: "Fetch a random answer",
    usage: "8ball[ text<String>]",
    exp: /^!8(ball)?( .+)?$/smi,
    category: "Utility",
    data: {
        cache: new Classes_1.default.CacheBank("8ball", null, true, false)
    },
    body: async function body(message, vale) {
        let repl = Classes_1.default.failsafe.bind(message);
        try {
            let reply = this.data.cache.get() || await Classes_1.default.fetch("https://nekos.life/api/v2/8ball"), embed = new discord_js_1.RichEmbed(), send = JSON.parse(reply);
            Classes_1.default.fetch("https://nekos.life/api/v2/8ball").then((reply) => exports.command.data.cache.push(reply));
            embed.setImage(send.url)
                .setURL(send.url)
                .setDescription(send.response)
                .setTitle("8-Ball")
                .setColor("RANDOM")
                .setTimestamp();
            repl({ embed });
        }
        catch (err) {
            repl("External API error, please try again later... https://nekos.life/api/v2/endpoints");
            console.error(err);
        }
    },
});
async function init(vale) {
    exports.command.usage = vale.opts.config.prefix + exports.command.usage;
    exports.command.exp = new RegExp('^' + vale.opts.config.prefix + "8(ball)?( .+)?$", "smi");
    Classes_1.default.fetch("https://nekos.life/api/v2/8ball").then((reply) => exports.command.data.cache.push(reply));
    return exports.command;
} //init
exports.init = init;
exports.default = init;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOGJhbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvY29tbWFuZHMvOGJhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7QUFFYixpRUFBaUM7QUFDakMsMkNBQWdEO0FBRW5DLFFBQUEsT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxPQUFPLENBQUM7SUFDMUMsSUFBSSxFQUFFLE9BQU87SUFDYixJQUFJLEVBQUUsdUJBQXVCO0lBQzdCLEtBQUssRUFBRSxzQkFBc0I7SUFDN0IsR0FBRyxFQUFFLHNCQUFzQjtJQUMzQixRQUFRLEVBQUUsU0FBUztJQUNuQixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsSUFBSSxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUM7S0FDeEQ7SUFDRCxJQUFJLEVBQUUsS0FBSyxVQUFVLElBQUksQ0FBQyxPQUFnQixFQUFFLElBQW1CO1FBQzlELElBQUksSUFBSSxHQUFHLGlCQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUxQyxJQUFJO1lBQ0gsSUFBSSxLQUFLLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksTUFBTSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxFQUNsRyxLQUFLLEdBQWMsSUFBSSxzQkFBUyxFQUFFLEVBQ2xDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTFCLGlCQUFPLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FBQyxlQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUV6RyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7aUJBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2lCQUNoQixjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztpQkFDN0IsUUFBUSxDQUFDLFFBQVEsQ0FBQztpQkFDbEIsUUFBUSxDQUFDLFFBQVEsQ0FBQztpQkFDbEIsWUFBWSxFQUFFLENBQUM7WUFFakIsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUNoQjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ2IsSUFBSSxDQUFDLG1GQUFtRixDQUFDLENBQUM7WUFDMUYsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuQjtJQUNGLENBQUM7Q0FDRCxDQUFDLENBQUM7QUFFSSxLQUFLLFVBQVUsSUFBSSxDQUFDLElBQWtCO0lBQzVDLGVBQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGVBQU8sQ0FBQyxLQUFLLENBQUM7SUFDeEQsZUFBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25GLGlCQUFPLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FBQyxlQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUV6RyxPQUFPLGVBQU8sQ0FBQztBQUNoQixDQUFDLENBQUMsTUFBTTtBQU5SLG9CQU1DO0FBRUQsa0JBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgQ2xhc3NlcyBmcm9tIFwiLi4vQ2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBSaWNoRW1iZWQgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1hbmQgPSBuZXcgQ2xhc3Nlcy5Db21tYW5kKHtcclxuXHRuYW1lOiBcIjhiYWxsXCIsXHJcblx0ZGVzYzogXCJGZXRjaCBhIHJhbmRvbSBhbnN3ZXJcIixcclxuXHR1c2FnZTogXCI4YmFsbFsgdGV4dDxTdHJpbmc+XVwiLFxyXG5cdGV4cDogL14hOChiYWxsKT8oIC4rKT8kL3NtaSxcclxuXHRjYXRlZ29yeTogXCJVdGlsaXR5XCIsXHJcblx0ZGF0YToge1xyXG5cdFx0Y2FjaGU6IG5ldyBDbGFzc2VzLkNhY2hlQmFuayhcIjhiYWxsXCIsIG51bGwsIHRydWUsIGZhbHNlKVxyXG5cdH0sIFxyXG5cdGJvZHk6IGFzeW5jIGZ1bmN0aW9uIGJvZHkobWVzc2FnZTogTWVzc2FnZSwgdmFsZT86IENsYXNzZXMuVmFsZSkge1xyXG5cdFx0bGV0IHJlcGwgPSBDbGFzc2VzLmZhaWxzYWZlLmJpbmQobWVzc2FnZSk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bGV0IHJlcGx5OiBzdHJpbmcgPSB0aGlzLmRhdGEuY2FjaGUuZ2V0KCkgfHwgYXdhaXQgQ2xhc3Nlcy5mZXRjaChcImh0dHBzOi8vbmVrb3MubGlmZS9hcGkvdjIvOGJhbGxcIiksXHJcblx0XHRcdFx0ZW1iZWQ6IFJpY2hFbWJlZCA9IG5ldyBSaWNoRW1iZWQoKSxcclxuXHRcdFx0XHRzZW5kID0gSlNPTi5wYXJzZShyZXBseSk7XHJcblx0XHRcdFxyXG5cdFx0XHRDbGFzc2VzLmZldGNoKFwiaHR0cHM6Ly9uZWtvcy5saWZlL2FwaS92Mi84YmFsbFwiKS50aGVuKChyZXBseTogc3RyaW5nKSA9PiBjb21tYW5kLmRhdGEuY2FjaGUucHVzaChyZXBseSkpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdGVtYmVkLnNldEltYWdlKHNlbmQudXJsKVxyXG5cdFx0XHRcdC5zZXRVUkwoc2VuZC51cmwpXHJcblx0XHRcdFx0LnNldERlc2NyaXB0aW9uKHNlbmQucmVzcG9uc2UpXHJcblx0XHRcdFx0LnNldFRpdGxlKFwiOC1CYWxsXCIpXHJcblx0XHRcdFx0LnNldENvbG9yKFwiUkFORE9NXCIpXHJcblx0XHRcdFx0LnNldFRpbWVzdGFtcCgpO1xyXG5cclxuXHRcdFx0cmVwbCh7IGVtYmVkIH0pO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdHJlcGwoXCJFeHRlcm5hbCBBUEkgZXJyb3IsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuLi4gaHR0cHM6Ly9uZWtvcy5saWZlL2FwaS92Mi9lbmRwb2ludHNcIik7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHRcdH1cclxuXHR9LCAvL2JvZHlcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdCh2YWxlOiBDbGFzc2VzLlZhbGUpOiBQcm9taXNlPENsYXNzZXMuQ29tbWFuZD4ge1xyXG5cdGNvbW1hbmQudXNhZ2UgPSB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIGNvbW1hbmQudXNhZ2U7XHJcblx0Y29tbWFuZC5leHAgPSBuZXcgUmVnRXhwKCdeJyArIHZhbGUub3B0cy5jb25maWcucHJlZml4ICsgXCI4KGJhbGwpPyggLispPyRcIiwgXCJzbWlcIik7XHJcblx0Q2xhc3Nlcy5mZXRjaChcImh0dHBzOi8vbmVrb3MubGlmZS9hcGkvdjIvOGJhbGxcIikudGhlbigocmVwbHk6IHN0cmluZykgPT4gY29tbWFuZC5kYXRhLmNhY2hlLnB1c2gocmVwbHkpKTtcclxuXHJcblx0cmV0dXJuIGNvbW1hbmQ7XHJcbn0gLy9pbml0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG4iXX0=