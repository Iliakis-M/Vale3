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
        cache: new Classes_1.default.CacheBank("8ball", undefined, true, false, "https://nekos.life/api/v2/8ball")
    },
    body: async function body(message, vale) {
        let repl = Classes_1.default.failsafe.bind(message);
        try {
            let reply = this.data.cache.get() || await Classes_1.default.fetch(exports.command.data.cache.source), embed = new discord_js_1.RichEmbed(), send = JSON.parse(reply);
            Classes_1.default.fetch(exports.command.data.cache.source).then((reply) => exports.command.data.cache.push(reply));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOGJhbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvY29tbWFuZHMvOGJhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7QUFFYixpRUFBaUM7QUFDakMsMkNBQWdEO0FBRW5DLFFBQUEsT0FBTyxHQUFvQixJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDO0lBQzNELElBQUksRUFBRSxPQUFPO0lBQ2IsSUFBSSxFQUFFLHVCQUF1QjtJQUM3QixLQUFLLEVBQUUsc0JBQXNCO0lBQzdCLEdBQUcsRUFBRSxzQkFBc0I7SUFDM0IsUUFBUSxFQUFFLFNBQVM7SUFDbkIsSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLElBQUksaUJBQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGlDQUFpQyxDQUFDO0tBQ2hHO0lBQ0QsSUFBSSxFQUFFLEtBQUssVUFBVSxJQUFJLENBQUMsT0FBZ0IsRUFBRSxJQUFtQjtRQUM5RCxJQUFJLElBQUksR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFMUMsSUFBSTtZQUNILElBQUksS0FBSyxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLE1BQU0saUJBQU8sQ0FBQyxLQUFLLENBQUMsZUFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQzFGLEtBQUssR0FBYyxJQUFJLHNCQUFTLEVBQUUsRUFDbEMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFMUIsaUJBQU8sQ0FBQyxLQUFLLENBQUMsZUFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FBQyxlQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUVqRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7aUJBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2lCQUNoQixjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztpQkFDN0IsUUFBUSxDQUFDLFFBQVEsQ0FBQztpQkFDbEIsUUFBUSxDQUFDLFFBQVEsQ0FBQztpQkFDbEIsWUFBWSxFQUFFLENBQUM7WUFFakIsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUNoQjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ2IsSUFBSSxDQUFDLG1GQUFtRixDQUFDLENBQUM7WUFDMUYsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuQjtJQUNGLENBQUM7Q0FDRCxDQUFDLENBQUM7QUFFSSxLQUFLLFVBQVUsSUFBSSxDQUFDLElBQWtCO0lBQzVDLGVBQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGVBQU8sQ0FBQyxLQUFLLENBQUM7SUFDeEQsZUFBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25GLGlCQUFPLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FBQyxlQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUV6RyxPQUFPLGVBQU8sQ0FBQztBQUNoQixDQUFDLENBQUMsTUFBTTtBQU5SLG9CQU1DO0FBRUQsa0JBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgQ2xhc3NlcyBmcm9tIFwiLi4vQ2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBSaWNoRW1iZWQgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1hbmQ6IENsYXNzZXMuQ29tbWFuZCA9IG5ldyBDbGFzc2VzLkNvbW1hbmQoe1xyXG5cdG5hbWU6IFwiOGJhbGxcIixcclxuXHRkZXNjOiBcIkZldGNoIGEgcmFuZG9tIGFuc3dlclwiLFxyXG5cdHVzYWdlOiBcIjhiYWxsWyB0ZXh0PFN0cmluZz5dXCIsXHJcblx0ZXhwOiAvXiE4KGJhbGwpPyggLispPyQvc21pLFxyXG5cdGNhdGVnb3J5OiBcIlV0aWxpdHlcIixcclxuXHRkYXRhOiB7XHJcblx0XHRjYWNoZTogbmV3IENsYXNzZXMuQ2FjaGVCYW5rKFwiOGJhbGxcIiwgdW5kZWZpbmVkLCB0cnVlLCBmYWxzZSwgXCJodHRwczovL25la29zLmxpZmUvYXBpL3YyLzhiYWxsXCIpXHJcblx0fSwgXHJcblx0Ym9keTogYXN5bmMgZnVuY3Rpb24gYm9keShtZXNzYWdlOiBNZXNzYWdlLCB2YWxlPzogQ2xhc3Nlcy5WYWxlKTogUHJvbWlzZTx2b2lkPiB7XHJcblx0XHRsZXQgcmVwbCA9IENsYXNzZXMuZmFpbHNhZmUuYmluZChtZXNzYWdlKTtcclxuXHJcblx0XHR0cnkge1xyXG5cdFx0XHRsZXQgcmVwbHk6IHN0cmluZyA9IHRoaXMuZGF0YS5jYWNoZS5nZXQoKSB8fCBhd2FpdCBDbGFzc2VzLmZldGNoKGNvbW1hbmQuZGF0YS5jYWNoZS5zb3VyY2UpLFxyXG5cdFx0XHRcdGVtYmVkOiBSaWNoRW1iZWQgPSBuZXcgUmljaEVtYmVkKCksXHJcblx0XHRcdFx0c2VuZCA9IEpTT04ucGFyc2UocmVwbHkpO1xyXG5cdFx0XHRcclxuXHRcdFx0Q2xhc3Nlcy5mZXRjaChjb21tYW5kLmRhdGEuY2FjaGUuc291cmNlKS50aGVuKChyZXBseTogc3RyaW5nKSA9PiBjb21tYW5kLmRhdGEuY2FjaGUucHVzaChyZXBseSkpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdGVtYmVkLnNldEltYWdlKHNlbmQudXJsKVxyXG5cdFx0XHRcdC5zZXRVUkwoc2VuZC51cmwpXHJcblx0XHRcdFx0LnNldERlc2NyaXB0aW9uKHNlbmQucmVzcG9uc2UpXHJcblx0XHRcdFx0LnNldFRpdGxlKFwiOC1CYWxsXCIpXHJcblx0XHRcdFx0LnNldENvbG9yKFwiUkFORE9NXCIpXHJcblx0XHRcdFx0LnNldFRpbWVzdGFtcCgpO1xyXG5cclxuXHRcdFx0cmVwbCh7IGVtYmVkIH0pO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdHJlcGwoXCJFeHRlcm5hbCBBUEkgZXJyb3IsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuLi4gaHR0cHM6Ly9uZWtvcy5saWZlL2FwaS92Mi9lbmRwb2ludHNcIik7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHRcdH1cclxuXHR9LCAvL2JvZHlcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdCh2YWxlOiBDbGFzc2VzLlZhbGUpOiBQcm9taXNlPENsYXNzZXMuQ29tbWFuZD4ge1xyXG5cdGNvbW1hbmQudXNhZ2UgPSB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIGNvbW1hbmQudXNhZ2U7XHJcblx0Y29tbWFuZC5leHAgPSBuZXcgUmVnRXhwKCdeJyArIHZhbGUub3B0cy5jb25maWcucHJlZml4ICsgXCI4KGJhbGwpPyggLispPyRcIiwgXCJzbWlcIik7XHJcblx0Q2xhc3Nlcy5mZXRjaChcImh0dHBzOi8vbmVrb3MubGlmZS9hcGkvdjIvOGJhbGxcIikudGhlbigocmVwbHk6IHN0cmluZykgPT4gY29tbWFuZC5kYXRhLmNhY2hlLnB1c2gocmVwbHkpKTtcclxuXHJcblx0cmV0dXJuIGNvbW1hbmQ7XHJcbn0gLy9pbml0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG4iXX0=