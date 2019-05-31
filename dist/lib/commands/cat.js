"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Classes_1 = tslib_1.__importDefault(require("../Classes"));
exports.command = new Classes_1.default.Command({
    name: "cat",
    desc: "Fetch a cat emote :3",
    usage: "cat",
    exp: /^!(cat|neko)$/i,
    category: "Utility",
    data: {
        cache: new Classes_1.default.CacheBank("cat", null, true, false)
    },
    body: async function body(message, vale) {
        let repl = Classes_1.default.failsafe.bind(message);
        try {
            let reply = this.data.cache.get() || await Classes_1.default.fetch("https://nekos.life/api/v2/cat");
            Classes_1.default.fetch("https://nekos.life/api/v2/cat").then((reply) => exports.command.data.cache.push(reply));
            repl(JSON.parse(reply).cat);
        }
        catch (err) {
            repl("External API error, please try again later... https://nekos.life/api/v2/endpoints");
            console.error(err);
        }
    },
});
async function init(vale) {
    exports.command.usage = vale.opts.config.prefix + exports.command.usage;
    exports.command.exp = new RegExp('^' + vale.opts.config.prefix + "(cat|neko)$", "i");
    Classes_1.default.fetch("https://nekos.life/api/v2/cat").then((reply) => exports.command.data.cache.push(reply));
    return exports.command;
} //init
exports.init = init;
exports.default = init;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2NvbW1hbmRzL2NhdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztBQUViLGlFQUFpQztBQUdwQixRQUFBLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDO0lBQzFDLElBQUksRUFBRSxLQUFLO0lBQ1gsSUFBSSxFQUFFLHNCQUFzQjtJQUM1QixLQUFLLEVBQUUsS0FBSztJQUNaLEdBQUcsRUFBRSxnQkFBZ0I7SUFDckIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLElBQUksaUJBQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO0tBQ3REO0lBQ0QsSUFBSSxFQUFFLEtBQUssVUFBVSxJQUFJLENBQUMsT0FBZ0IsRUFBRSxJQUFrQjtRQUM3RCxJQUFJLElBQUksR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFMUMsSUFBSTtZQUNILElBQUksS0FBSyxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLE1BQU0saUJBQU8sQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztZQUVsRyxpQkFBTyxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsZUFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFFdkcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUI7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNiLElBQUksQ0FBQyxtRkFBbUYsQ0FBQyxDQUFDO1lBQzFGLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbkI7SUFDRixDQUFDO0NBQ0QsQ0FBQyxDQUFDO0FBRUksS0FBSyxVQUFVLElBQUksQ0FBQyxJQUFrQjtJQUM1QyxlQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxlQUFPLENBQUMsS0FBSyxDQUFDO0lBQ3hELGVBQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0UsaUJBQU8sQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUFDLGVBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRXZHLE9BQU8sZUFBTyxDQUFDO0FBQ2hCLENBQUMsQ0FBQyxNQUFNO0FBTlIsb0JBTUM7QUFFRCxrQkFBZSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBDbGFzc2VzIGZyb20gXCIuLi9DbGFzc2VzXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1hbmQgPSBuZXcgQ2xhc3Nlcy5Db21tYW5kKHtcclxuXHRuYW1lOiBcImNhdFwiLFxyXG5cdGRlc2M6IFwiRmV0Y2ggYSBjYXQgZW1vdGUgOjNcIixcclxuXHR1c2FnZTogXCJjYXRcIixcclxuXHRleHA6IC9eIShjYXR8bmVrbykkL2ksXHJcblx0Y2F0ZWdvcnk6IFwiVXRpbGl0eVwiLFxyXG5cdGRhdGE6IHsgXHJcblx0XHRjYWNoZTogbmV3IENsYXNzZXMuQ2FjaGVCYW5rKFwiY2F0XCIsIG51bGwsIHRydWUsIGZhbHNlKVxyXG5cdH0sXHJcblx0Ym9keTogYXN5bmMgZnVuY3Rpb24gYm9keShtZXNzYWdlOiBNZXNzYWdlLCB2YWxlOiBDbGFzc2VzLlZhbGUpIHtcclxuXHRcdGxldCByZXBsID0gQ2xhc3Nlcy5mYWlsc2FmZS5iaW5kKG1lc3NhZ2UpO1xyXG5cclxuXHRcdHRyeSB7XHJcblx0XHRcdGxldCByZXBseTogc3RyaW5nID0gdGhpcy5kYXRhLmNhY2hlLmdldCgpIHx8IGF3YWl0IENsYXNzZXMuZmV0Y2goXCJodHRwczovL25la29zLmxpZmUvYXBpL3YyL2NhdFwiKTtcclxuXHJcblx0XHRcdENsYXNzZXMuZmV0Y2goXCJodHRwczovL25la29zLmxpZmUvYXBpL3YyL2NhdFwiKS50aGVuKChyZXBseTogc3RyaW5nKSA9PiBjb21tYW5kLmRhdGEuY2FjaGUucHVzaChyZXBseSkpO1xyXG5cclxuXHRcdFx0cmVwbChKU09OLnBhcnNlKHJlcGx5KS5jYXQpO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdHJlcGwoXCJFeHRlcm5hbCBBUEkgZXJyb3IsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuLi4gaHR0cHM6Ly9uZWtvcy5saWZlL2FwaS92Mi9lbmRwb2ludHNcIik7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHRcdH1cclxuXHR9LCAvL2JvZHlcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdCh2YWxlOiBDbGFzc2VzLlZhbGUpOiBQcm9taXNlPENsYXNzZXMuQ29tbWFuZD4ge1xyXG5cdGNvbW1hbmQudXNhZ2UgPSB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIGNvbW1hbmQudXNhZ2U7XHJcblx0Y29tbWFuZC5leHAgPSBuZXcgUmVnRXhwKCdeJyArIHZhbGUub3B0cy5jb25maWcucHJlZml4ICsgXCIoY2F0fG5la28pJFwiLCBcImlcIik7XHJcblx0Q2xhc3Nlcy5mZXRjaChcImh0dHBzOi8vbmVrb3MubGlmZS9hcGkvdjIvY2F0XCIpLnRoZW4oKHJlcGx5OiBzdHJpbmcpID0+IGNvbW1hbmQuZGF0YS5jYWNoZS5wdXNoKHJlcGx5KSk7XHJcblxyXG5cdHJldHVybiBjb21tYW5kO1xyXG59IC8vaW5pdFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcclxuIl19