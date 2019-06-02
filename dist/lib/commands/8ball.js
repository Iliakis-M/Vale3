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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOGJhbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvY29tbWFuZHMvOGJhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7QUFFYixpRUFBaUM7QUFDakMsMkNBQWdEO0FBRW5DLFFBQUEsT0FBTyxHQUFvQixJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDO0lBQzNELElBQUksRUFBRSxPQUFPO0lBQ2IsSUFBSSxFQUFFLHVCQUF1QjtJQUM3QixLQUFLLEVBQUUsc0JBQXNCO0lBQzdCLEdBQUcsRUFBRSxzQkFBc0I7SUFDM0IsUUFBUSxFQUFFLFNBQVM7SUFDbkIsSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLElBQUksaUJBQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO0tBQ3hEO0lBQ0QsSUFBSSxFQUFFLEtBQUssVUFBVSxJQUFJLENBQUMsT0FBZ0IsRUFBRSxJQUFtQjtRQUM5RCxJQUFJLElBQUksR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFMUMsSUFBSTtZQUNILElBQUksS0FBSyxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLE1BQU0saUJBQU8sQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsRUFDbEcsS0FBSyxHQUFjLElBQUksc0JBQVMsRUFBRSxFQUNsQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUUxQixpQkFBTyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsZUFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFFekcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2lCQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztpQkFDaEIsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7aUJBQzdCLFFBQVEsQ0FBQyxRQUFRLENBQUM7aUJBQ2xCLFFBQVEsQ0FBQyxRQUFRLENBQUM7aUJBQ2xCLFlBQVksRUFBRSxDQUFDO1lBRWpCLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDaEI7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNiLElBQUksQ0FBQyxtRkFBbUYsQ0FBQyxDQUFDO1lBQzFGLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbkI7SUFDRixDQUFDO0NBQ0QsQ0FBQyxDQUFDO0FBRUksS0FBSyxVQUFVLElBQUksQ0FBQyxJQUFrQjtJQUM1QyxlQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxlQUFPLENBQUMsS0FBSyxDQUFDO0lBQ3hELGVBQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRixpQkFBTyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsZUFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFekcsT0FBTyxlQUFPLENBQUM7QUFDaEIsQ0FBQyxDQUFDLE1BQU07QUFOUixvQkFNQztBQUVELGtCQUFlLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IENsYXNzZXMgZnJvbSBcIi4uL0NsYXNzZXNcIjtcclxuaW1wb3J0IHsgTWVzc2FnZSwgUmljaEVtYmVkIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjb21tYW5kOiBDbGFzc2VzLkNvbW1hbmQgPSBuZXcgQ2xhc3Nlcy5Db21tYW5kKHtcclxuXHRuYW1lOiBcIjhiYWxsXCIsXHJcblx0ZGVzYzogXCJGZXRjaCBhIHJhbmRvbSBhbnN3ZXJcIixcclxuXHR1c2FnZTogXCI4YmFsbFsgdGV4dDxTdHJpbmc+XVwiLFxyXG5cdGV4cDogL14hOChiYWxsKT8oIC4rKT8kL3NtaSxcclxuXHRjYXRlZ29yeTogXCJVdGlsaXR5XCIsXHJcblx0ZGF0YToge1xyXG5cdFx0Y2FjaGU6IG5ldyBDbGFzc2VzLkNhY2hlQmFuayhcIjhiYWxsXCIsIG51bGwsIHRydWUsIGZhbHNlKVxyXG5cdH0sIFxyXG5cdGJvZHk6IGFzeW5jIGZ1bmN0aW9uIGJvZHkobWVzc2FnZTogTWVzc2FnZSwgdmFsZT86IENsYXNzZXMuVmFsZSk6IFByb21pc2U8dm9pZD4ge1xyXG5cdFx0bGV0IHJlcGwgPSBDbGFzc2VzLmZhaWxzYWZlLmJpbmQobWVzc2FnZSk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bGV0IHJlcGx5OiBzdHJpbmcgPSB0aGlzLmRhdGEuY2FjaGUuZ2V0KCkgfHwgYXdhaXQgQ2xhc3Nlcy5mZXRjaChcImh0dHBzOi8vbmVrb3MubGlmZS9hcGkvdjIvOGJhbGxcIiksXHJcblx0XHRcdFx0ZW1iZWQ6IFJpY2hFbWJlZCA9IG5ldyBSaWNoRW1iZWQoKSxcclxuXHRcdFx0XHRzZW5kID0gSlNPTi5wYXJzZShyZXBseSk7XHJcblx0XHRcdFxyXG5cdFx0XHRDbGFzc2VzLmZldGNoKFwiaHR0cHM6Ly9uZWtvcy5saWZlL2FwaS92Mi84YmFsbFwiKS50aGVuKChyZXBseTogc3RyaW5nKSA9PiBjb21tYW5kLmRhdGEuY2FjaGUucHVzaChyZXBseSkpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdGVtYmVkLnNldEltYWdlKHNlbmQudXJsKVxyXG5cdFx0XHRcdC5zZXRVUkwoc2VuZC51cmwpXHJcblx0XHRcdFx0LnNldERlc2NyaXB0aW9uKHNlbmQucmVzcG9uc2UpXHJcblx0XHRcdFx0LnNldFRpdGxlKFwiOC1CYWxsXCIpXHJcblx0XHRcdFx0LnNldENvbG9yKFwiUkFORE9NXCIpXHJcblx0XHRcdFx0LnNldFRpbWVzdGFtcCgpO1xyXG5cclxuXHRcdFx0cmVwbCh7IGVtYmVkIH0pO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdHJlcGwoXCJFeHRlcm5hbCBBUEkgZXJyb3IsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuLi4gaHR0cHM6Ly9uZWtvcy5saWZlL2FwaS92Mi9lbmRwb2ludHNcIik7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHRcdH1cclxuXHR9LCAvL2JvZHlcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdCh2YWxlOiBDbGFzc2VzLlZhbGUpOiBQcm9taXNlPENsYXNzZXMuQ29tbWFuZD4ge1xyXG5cdGNvbW1hbmQudXNhZ2UgPSB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIGNvbW1hbmQudXNhZ2U7XHJcblx0Y29tbWFuZC5leHAgPSBuZXcgUmVnRXhwKCdeJyArIHZhbGUub3B0cy5jb25maWcucHJlZml4ICsgXCI4KGJhbGwpPyggLispPyRcIiwgXCJzbWlcIik7XHJcblx0Q2xhc3Nlcy5mZXRjaChcImh0dHBzOi8vbmVrb3MubGlmZS9hcGkvdjIvOGJhbGxcIikudGhlbigocmVwbHk6IHN0cmluZykgPT4gY29tbWFuZC5kYXRhLmNhY2hlLnB1c2gocmVwbHkpKTtcclxuXHJcblx0cmV0dXJuIGNvbW1hbmQ7XHJcbn0gLy9pbml0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG4iXX0=