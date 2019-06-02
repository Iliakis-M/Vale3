"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Classes_1 = tslib_1.__importDefault(require("../Classes"));
exports.command = new Classes_1.default.Command({
    name: "chat",
    desc: "Chat with me! :3",
    usage: "chat",
    exp: /^!chat( .*)?$/msi,
    category: "Utility",
    data: {},
    body: async function body(message, vale) {
        let repl = Classes_1.default.failsafe.bind(message);
        try {
            let reply = await Classes_1.default.fetch("https://nekos.life/api/v2/chat?text=" + message.content.split(' ').slice(1).join(' '));
            repl(JSON.parse(reply).response.replace(/<\d+>/g, ''));
        }
        catch (err) {
            repl("External API error, please try again later... https://nekos.life/api/v2/endpoints");
            console.error(err);
        }
    },
});
async function init(vale) {
    exports.command.usage = vale.opts.config.prefix + exports.command.usage;
    exports.command.exp = new RegExp('^' + vale.opts.config.prefix + "chat( .*)?$", "msi");
    return exports.command;
} //init
exports.init = init;
exports.default = init;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9jb21tYW5kcy9jaGF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0FBRWIsaUVBQWlDO0FBR3BCLFFBQUEsT0FBTyxHQUFvQixJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDO0lBQzNELElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSSxFQUFFLGtCQUFrQjtJQUN4QixLQUFLLEVBQUUsTUFBTTtJQUNiLEdBQUcsRUFBRSxrQkFBa0I7SUFDdkIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsSUFBSSxFQUFFLEVBQUc7SUFDVCxJQUFJLEVBQUUsS0FBSyxVQUFVLElBQUksQ0FBQyxPQUFnQixFQUFFLElBQW1CO1FBQzlELElBQUksSUFBSSxHQUFHLGlCQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUxQyxJQUFJO1lBQ0gsSUFBSSxLQUFLLEdBQVcsTUFBTSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFaEksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN2RDtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ2IsSUFBSSxDQUFDLG1GQUFtRixDQUFDLENBQUM7WUFDMUYsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuQjtJQUNGLENBQUM7Q0FDRCxDQUFDLENBQUM7QUFFSSxLQUFLLFVBQVUsSUFBSSxDQUFDLElBQWtCO0lBQzVDLGVBQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGVBQU8sQ0FBQyxLQUFLLENBQUM7SUFDeEQsZUFBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUUvRSxPQUFPLGVBQU8sQ0FBQztBQUNoQixDQUFDLENBQUMsTUFBTTtBQUxSLG9CQUtDO0FBRUQsa0JBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgQ2xhc3NlcyBmcm9tIFwiLi4vQ2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjb21tYW5kOiBDbGFzc2VzLkNvbW1hbmQgPSBuZXcgQ2xhc3Nlcy5Db21tYW5kKHtcclxuXHRuYW1lOiBcImNoYXRcIixcclxuXHRkZXNjOiBcIkNoYXQgd2l0aCBtZSEgOjNcIixcclxuXHR1c2FnZTogXCJjaGF0XCIsXHJcblx0ZXhwOiAvXiFjaGF0KCAuKik/JC9tc2ksXHJcblx0Y2F0ZWdvcnk6IFwiVXRpbGl0eVwiLFxyXG5cdGRhdGE6IHsgfSxcclxuXHRib2R5OiBhc3luYyBmdW5jdGlvbiBib2R5KG1lc3NhZ2U6IE1lc3NhZ2UsIHZhbGU/OiBDbGFzc2VzLlZhbGUpOiBQcm9taXNlPHZvaWQ+IHtcclxuXHRcdGxldCByZXBsID0gQ2xhc3Nlcy5mYWlsc2FmZS5iaW5kKG1lc3NhZ2UpO1xyXG5cclxuXHRcdHRyeSB7XHJcblx0XHRcdGxldCByZXBseTogc3RyaW5nID0gYXdhaXQgQ2xhc3Nlcy5mZXRjaChcImh0dHBzOi8vbmVrb3MubGlmZS9hcGkvdjIvY2hhdD90ZXh0PVwiICsgbWVzc2FnZS5jb250ZW50LnNwbGl0KCcgJykuc2xpY2UoMSkuam9pbignICcpKTtcclxuXHJcblx0XHRcdHJlcGwoSlNPTi5wYXJzZShyZXBseSkucmVzcG9uc2UucmVwbGFjZSgvPFxcZCs+L2csICcnKSk7XHJcblx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0cmVwbChcIkV4dGVybmFsIEFQSSBlcnJvciwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4uLiBodHRwczovL25la29zLmxpZmUvYXBpL3YyL2VuZHBvaW50c1wiKTtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xyXG5cdFx0fVxyXG5cdH0sIC8vYm9keVxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0KHZhbGU6IENsYXNzZXMuVmFsZSk6IFByb21pc2U8Q2xhc3Nlcy5Db21tYW5kPiB7XHJcblx0Y29tbWFuZC51c2FnZSA9IHZhbGUub3B0cy5jb25maWcucHJlZml4ICsgY29tbWFuZC51c2FnZTtcclxuXHRjb21tYW5kLmV4cCA9IG5ldyBSZWdFeHAoJ14nICsgdmFsZS5vcHRzLmNvbmZpZy5wcmVmaXggKyBcImNoYXQoIC4qKT8kXCIsIFwibXNpXCIpO1xyXG5cclxuXHRyZXR1cm4gY29tbWFuZDtcclxufSAvL2luaXRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcbiJdfQ==