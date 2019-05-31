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
            repl(JSON.parse(reply).response.replace(/<\n+>/g, ''));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9jb21tYW5kcy9jaGF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0FBRWIsaUVBQWlDO0FBR3BCLFFBQUEsT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxPQUFPLENBQUM7SUFDMUMsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsa0JBQWtCO0lBQ3hCLEtBQUssRUFBRSxNQUFNO0lBQ2IsR0FBRyxFQUFFLGtCQUFrQjtJQUN2QixRQUFRLEVBQUUsU0FBUztJQUNuQixJQUFJLEVBQUUsRUFBRztJQUNULElBQUksRUFBRSxLQUFLLFVBQVUsSUFBSSxDQUFDLE9BQWdCLEVBQUUsSUFBbUI7UUFDOUQsSUFBSSxJQUFJLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTFDLElBQUk7WUFDSCxJQUFJLEtBQUssR0FBVyxNQUFNLGlCQUFPLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUVoSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3ZEO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDYixJQUFJLENBQUMsbUZBQW1GLENBQUMsQ0FBQztZQUMxRixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25CO0lBQ0YsQ0FBQztDQUNELENBQUMsQ0FBQztBQUVJLEtBQUssVUFBVSxJQUFJLENBQUMsSUFBa0I7SUFDNUMsZUFBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsZUFBTyxDQUFDLEtBQUssQ0FBQztJQUN4RCxlQUFPLENBQUMsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRS9FLE9BQU8sZUFBTyxDQUFDO0FBQ2hCLENBQUMsQ0FBQyxNQUFNO0FBTFIsb0JBS0M7QUFFRCxrQkFBZSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBDbGFzc2VzIGZyb20gXCIuLi9DbGFzc2VzXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1hbmQgPSBuZXcgQ2xhc3Nlcy5Db21tYW5kKHtcclxuXHRuYW1lOiBcImNoYXRcIixcclxuXHRkZXNjOiBcIkNoYXQgd2l0aCBtZSEgOjNcIixcclxuXHR1c2FnZTogXCJjaGF0XCIsXHJcblx0ZXhwOiAvXiFjaGF0KCAuKik/JC9tc2ksXHJcblx0Y2F0ZWdvcnk6IFwiVXRpbGl0eVwiLFxyXG5cdGRhdGE6IHsgfSxcclxuXHRib2R5OiBhc3luYyBmdW5jdGlvbiBib2R5KG1lc3NhZ2U6IE1lc3NhZ2UsIHZhbGU/OiBDbGFzc2VzLlZhbGUpIHtcclxuXHRcdGxldCByZXBsID0gQ2xhc3Nlcy5mYWlsc2FmZS5iaW5kKG1lc3NhZ2UpO1xyXG5cclxuXHRcdHRyeSB7XHJcblx0XHRcdGxldCByZXBseTogc3RyaW5nID0gYXdhaXQgQ2xhc3Nlcy5mZXRjaChcImh0dHBzOi8vbmVrb3MubGlmZS9hcGkvdjIvY2hhdD90ZXh0PVwiICsgbWVzc2FnZS5jb250ZW50LnNwbGl0KCcgJykuc2xpY2UoMSkuam9pbignICcpKTtcclxuXHJcblx0XHRcdHJlcGwoSlNPTi5wYXJzZShyZXBseSkucmVzcG9uc2UucmVwbGFjZSgvPFxcbis+L2csICcnKSk7XHJcblx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0cmVwbChcIkV4dGVybmFsIEFQSSBlcnJvciwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4uLiBodHRwczovL25la29zLmxpZmUvYXBpL3YyL2VuZHBvaW50c1wiKTtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xyXG5cdFx0fVxyXG5cdH0sIC8vYm9keVxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0KHZhbGU6IENsYXNzZXMuVmFsZSk6IFByb21pc2U8Q2xhc3Nlcy5Db21tYW5kPiB7XHJcblx0Y29tbWFuZC51c2FnZSA9IHZhbGUub3B0cy5jb25maWcucHJlZml4ICsgY29tbWFuZC51c2FnZTtcclxuXHRjb21tYW5kLmV4cCA9IG5ldyBSZWdFeHAoJ14nICsgdmFsZS5vcHRzLmNvbmZpZy5wcmVmaXggKyBcImNoYXQoIC4qKT8kXCIsIFwibXNpXCIpO1xyXG5cclxuXHRyZXR1cm4gY29tbWFuZDtcclxufSAvL2luaXRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcbiJdfQ==