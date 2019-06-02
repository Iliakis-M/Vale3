"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Classes_1 = tslib_1.__importDefault(require("../Classes"));
const discord_js_1 = require("discord.js");
exports.command = new Classes_1.default.Command({
    name: "yomomma",
    desc: "Fetch a joke (external api)",
    usage: "yomomma",
    exp: /^!yo(mm?(o|a)mm?a)?$/i,
    category: "Utility",
    data: {
        cache: new Classes_1.default.CacheBank("yomomma", null, true, false)
    },
    body: async function body(message, vale) {
        let repl = Classes_1.default.failsafe.bind(message);
        try {
            let reply = this.data.cache.get() || await Classes_1.default.fetch("https://api.yomomma.info/"), embed = new discord_js_1.RichEmbed();
            Classes_1.default.fetch("https://api.yomomma.info/").then((reply) => this.data.cache.push(reply));
            embed.setColor("RANDOM")
                .setTitle("Yomomma!")
                .setAuthor("Vale3", vale.client.user.displayAvatarURL, "https://github.com/Valen-H/Vale-3")
                .setThumbnail(vale.client.user.avatarURL)
                .setURL("https://yomomma.info/")
                .setTimestamp()
                .setDescription(JSON.parse(reply).joke);
            repl({ embed });
        }
        catch (err) {
            repl("External API error, please try again later... https://yomomma.info/");
            console.error(err);
        }
    },
});
async function init(vale) {
    exports.command.usage = vale.opts.config.prefix + exports.command.usage;
    exports.command.exp = new RegExp('^' + vale.opts.config.prefix + "yo(mm?(o|a)mm?a)?$", "i");
    Classes_1.default.fetch("https://api.yomomma.info/").then((reply) => exports.command.data.cache.push(reply));
    return exports.command;
} //init
exports.init = init;
exports.default = init;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW9tb21tYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9jb21tYW5kcy95b21vbW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0FBRWIsaUVBQWlDO0FBQ2pDLDJDQUFnRDtBQUVuQyxRQUFBLE9BQU8sR0FBb0IsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQztJQUMzRCxJQUFJLEVBQUUsU0FBUztJQUNmLElBQUksRUFBRSw2QkFBNkI7SUFDbkMsS0FBSyxFQUFFLFNBQVM7SUFDaEIsR0FBRyxFQUFFLHVCQUF1QjtJQUM1QixRQUFRLEVBQUUsU0FBUztJQUNuQixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsSUFBSSxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUM7S0FDMUQ7SUFDRCxJQUFJLEVBQUUsS0FBSyxVQUFVLElBQUksQ0FBQyxPQUFnQixFQUFFLElBQWtCO1FBQzdELElBQUksSUFBSSxHQUFHLGlCQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUxQyxJQUFJO1lBQ0gsSUFBSSxLQUFLLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksTUFBTSxpQkFBTyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxFQUM1RixLQUFLLEdBQWMsSUFBSSxzQkFBUyxFQUFFLENBQUM7WUFFcEMsaUJBQU8sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBRWhHLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO2lCQUN0QixRQUFRLENBQUMsVUFBVSxDQUFDO2lCQUNwQixTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLG1DQUFtQyxDQUFDO2lCQUMxRixZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2lCQUN4QyxNQUFNLENBQUMsdUJBQXVCLENBQUM7aUJBQy9CLFlBQVksRUFBRTtpQkFDZCxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV6QyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ2hCO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDYixJQUFJLENBQUMscUVBQXFFLENBQUMsQ0FBQztZQUM1RSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25CO0lBQ0YsQ0FBQztDQUNELENBQUMsQ0FBQztBQUVJLEtBQUssVUFBVSxJQUFJLENBQUMsSUFBa0I7SUFDNUMsZUFBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsZUFBTyxDQUFDLEtBQUssQ0FBQztJQUN4RCxlQUFPLENBQUMsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDcEYsaUJBQU8sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUFDLGVBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRW5HLE9BQU8sZUFBTyxDQUFDO0FBQ2hCLENBQUMsQ0FBQyxNQUFNO0FBTlIsb0JBTUM7QUFFRCxrQkFBZSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBDbGFzc2VzIGZyb20gXCIuLi9DbGFzc2VzXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIFJpY2hFbWJlZCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29tbWFuZDogQ2xhc3Nlcy5Db21tYW5kID0gbmV3IENsYXNzZXMuQ29tbWFuZCh7XHJcblx0bmFtZTogXCJ5b21vbW1hXCIsXHJcblx0ZGVzYzogXCJGZXRjaCBhIGpva2UgKGV4dGVybmFsIGFwaSlcIixcclxuXHR1c2FnZTogXCJ5b21vbW1hXCIsXHJcblx0ZXhwOiAvXiF5byhtbT8ob3xhKW1tP2EpPyQvaSxcclxuXHRjYXRlZ29yeTogXCJVdGlsaXR5XCIsXHJcblx0ZGF0YToge1xyXG5cdFx0Y2FjaGU6IG5ldyBDbGFzc2VzLkNhY2hlQmFuayhcInlvbW9tbWFcIiwgbnVsbCwgdHJ1ZSwgZmFsc2UpXHJcblx0fSxcclxuXHRib2R5OiBhc3luYyBmdW5jdGlvbiBib2R5KG1lc3NhZ2U6IE1lc3NhZ2UsIHZhbGU6IENsYXNzZXMuVmFsZSk6IFByb21pc2U8dm9pZD4ge1xyXG5cdFx0bGV0IHJlcGwgPSBDbGFzc2VzLmZhaWxzYWZlLmJpbmQobWVzc2FnZSk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bGV0IHJlcGx5OiBzdHJpbmcgPSB0aGlzLmRhdGEuY2FjaGUuZ2V0KCkgfHwgYXdhaXQgQ2xhc3Nlcy5mZXRjaChcImh0dHBzOi8vYXBpLnlvbW9tbWEuaW5mby9cIiksXHJcblx0XHRcdFx0ZW1iZWQ6IFJpY2hFbWJlZCA9IG5ldyBSaWNoRW1iZWQoKTtcclxuXHRcdFx0XHJcblx0XHRcdENsYXNzZXMuZmV0Y2goXCJodHRwczovL2FwaS55b21vbW1hLmluZm8vXCIpLnRoZW4oKHJlcGx5OiBzdHJpbmcpID0+IHRoaXMuZGF0YS5jYWNoZS5wdXNoKHJlcGx5KSk7XHJcblx0XHRcclxuXHRcdFx0ZW1iZWQuc2V0Q29sb3IoXCJSQU5ET01cIilcclxuXHRcdFx0XHQuc2V0VGl0bGUoXCJZb21vbW1hIVwiKVxyXG5cdFx0XHRcdC5zZXRBdXRob3IoXCJWYWxlM1wiLCB2YWxlLmNsaWVudC51c2VyLmRpc3BsYXlBdmF0YXJVUkwsIFwiaHR0cHM6Ly9naXRodWIuY29tL1ZhbGVuLUgvVmFsZS0zXCIpXHJcblx0XHRcdFx0LnNldFRodW1ibmFpbCh2YWxlLmNsaWVudC51c2VyLmF2YXRhclVSTClcclxuXHRcdFx0XHQuc2V0VVJMKFwiaHR0cHM6Ly95b21vbW1hLmluZm8vXCIpXHJcblx0XHRcdFx0LnNldFRpbWVzdGFtcCgpXHJcblx0XHRcdFx0LnNldERlc2NyaXB0aW9uKEpTT04ucGFyc2UocmVwbHkpLmpva2UpO1xyXG5cdFx0XHRcclxuXHRcdFx0cmVwbCh7IGVtYmVkIH0pO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdHJlcGwoXCJFeHRlcm5hbCBBUEkgZXJyb3IsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuLi4gaHR0cHM6Ly95b21vbW1hLmluZm8vXCIpO1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGVycik7XHJcblx0XHR9XHJcblx0fSwgLy9ib2R5XHJcbn0pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXQodmFsZTogQ2xhc3Nlcy5WYWxlKTogUHJvbWlzZTxDbGFzc2VzLkNvbW1hbmQ+IHtcclxuXHRjb21tYW5kLnVzYWdlID0gdmFsZS5vcHRzLmNvbmZpZy5wcmVmaXggKyBjb21tYW5kLnVzYWdlO1xyXG5cdGNvbW1hbmQuZXhwID0gbmV3IFJlZ0V4cCgnXicgKyB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIFwieW8obW0/KG98YSltbT9hKT8kXCIsIFwiaVwiKTtcclxuXHRDbGFzc2VzLmZldGNoKFwiaHR0cHM6Ly9hcGkueW9tb21tYS5pbmZvL1wiKS50aGVuKChyZXBseTogc3RyaW5nKSA9PiBjb21tYW5kLmRhdGEuY2FjaGUucHVzaChyZXBseSkpO1xyXG5cclxuXHRyZXR1cm4gY29tbWFuZDtcclxufSAvL2luaXRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcbiJdfQ==