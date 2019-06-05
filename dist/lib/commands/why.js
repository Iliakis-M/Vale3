"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Classes_1 = tslib_1.__importDefault(require("../Classes"));
exports.command = new Classes_1.default.Command({
    name: "why",
    desc: "Just... Why?...",
    usage: "!why",
    exp: /^!why$/i,
    category: "Utility",
    data: {
        cache: new Classes_1.default.CacheBank("why", undefined, true, false, "https://nekos.life/api/v2/why")
    },
    body: async function body(message, vale) {
        let reply = Classes_1.default.failsafe.bind(message);
        try {
            let repl = this.data.cache.get() || await Classes_1.default.fetch(exports.command.data.cache.source);
            Classes_1.default.fetch(exports.command.data.cache.source).then((reply) => exports.command.data.cache.push(reply));
            reply(decodeURIComponent(JSON.parse(repl).why));
        }
        catch (err) {
            reply("External API error, please try again later... https://nekos.life/api/v2/endpoints");
            console.error(err);
        }
    },
});
async function init(vale) {
    exports.command.usage = vale.opts.config.prefix + exports.command.usage;
    exports.command.exp = new RegExp('^' + vale.opts.config.prefix + "why$", "i");
    Classes_1.default.fetch("https://nekos.life/api/v2/why").then((reply) => exports.command.data.cache.push(reply));
    return exports.command;
} //init
exports.init = init;
exports.default = init;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2h5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2NvbW1hbmRzL3doeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztBQUViLGlFQUFpQztBQUdwQixRQUFBLE9BQU8sR0FBb0IsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQztJQUMzRCxJQUFJLEVBQUUsS0FBSztJQUNYLElBQUksRUFBRSxpQkFBaUI7SUFDdkIsS0FBSyxFQUFFLE1BQU07SUFDYixHQUFHLEVBQUUsU0FBUztJQUNkLFFBQVEsRUFBRSxTQUFTO0lBQ25CLElBQUksRUFBRTtRQUNMLEtBQUssRUFBRSxJQUFJLGlCQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSwrQkFBK0IsQ0FBQztLQUM1RjtJQUNELElBQUksRUFBRSxLQUFLLFVBQVUsSUFBSSxDQUFDLE9BQWdCLEVBQUUsSUFBa0I7UUFDN0QsSUFBSSxLQUFLLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTNDLElBQUk7WUFDSCxJQUFJLElBQUksR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxNQUFNLGlCQUFPLENBQUMsS0FBSyxDQUFDLGVBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTNGLGlCQUFPLENBQUMsS0FBSyxDQUFDLGVBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsZUFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFFakcsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNoRDtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ2IsS0FBSyxDQUFDLG1GQUFtRixDQUFDLENBQUM7WUFDM0YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuQjtJQUNGLENBQUM7Q0FDRCxDQUFDLENBQUM7QUFFSSxLQUFLLFVBQVUsSUFBSSxDQUFDLElBQWtCO0lBQzVDLGVBQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGVBQU8sQ0FBQyxLQUFLLENBQUM7SUFDeEQsZUFBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUV0RSxpQkFBTyxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsZUFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFdkcsT0FBTyxlQUFPLENBQUM7QUFDaEIsQ0FBQyxDQUFDLE1BQU07QUFQUixvQkFPQztBQUVELGtCQUFlLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IENsYXNzZXMgZnJvbSBcIi4uL0NsYXNzZXNcIjtcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29tbWFuZDogQ2xhc3Nlcy5Db21tYW5kID0gbmV3IENsYXNzZXMuQ29tbWFuZCh7XHJcblx0bmFtZTogXCJ3aHlcIixcclxuXHRkZXNjOiBcIkp1c3QuLi4gV2h5Py4uLlwiLFxyXG5cdHVzYWdlOiBcIiF3aHlcIixcclxuXHRleHA6IC9eIXdoeSQvaSxcclxuXHRjYXRlZ29yeTogXCJVdGlsaXR5XCIsXHJcblx0ZGF0YToge1xyXG5cdFx0Y2FjaGU6IG5ldyBDbGFzc2VzLkNhY2hlQmFuayhcIndoeVwiLCB1bmRlZmluZWQsIHRydWUsIGZhbHNlLCBcImh0dHBzOi8vbmVrb3MubGlmZS9hcGkvdjIvd2h5XCIpXHJcblx0fSxcclxuXHRib2R5OiBhc3luYyBmdW5jdGlvbiBib2R5KG1lc3NhZ2U6IE1lc3NhZ2UsIHZhbGU6IENsYXNzZXMuVmFsZSkge1xyXG5cdFx0bGV0IHJlcGx5ID0gQ2xhc3Nlcy5mYWlsc2FmZS5iaW5kKG1lc3NhZ2UpO1xyXG5cclxuXHRcdHRyeSB7XHJcblx0XHRcdGxldCByZXBsOiBzdHJpbmcgPSB0aGlzLmRhdGEuY2FjaGUuZ2V0KCkgfHwgYXdhaXQgQ2xhc3Nlcy5mZXRjaChjb21tYW5kLmRhdGEuY2FjaGUuc291cmNlKTtcclxuXHRcdFxyXG5cdFx0XHRDbGFzc2VzLmZldGNoKGNvbW1hbmQuZGF0YS5jYWNoZS5zb3VyY2UpLnRoZW4oKHJlcGx5OiBzdHJpbmcpID0+IGNvbW1hbmQuZGF0YS5jYWNoZS5wdXNoKHJlcGx5KSk7XHJcblxyXG5cdFx0XHRyZXBseShkZWNvZGVVUklDb21wb25lbnQoSlNPTi5wYXJzZShyZXBsKS53aHkpKTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRyZXBseShcIkV4dGVybmFsIEFQSSBlcnJvciwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4uLiBodHRwczovL25la29zLmxpZmUvYXBpL3YyL2VuZHBvaW50c1wiKTtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xyXG5cdFx0fVxyXG5cdH0sIC8vYm9keVxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0KHZhbGU6IENsYXNzZXMuVmFsZSk6IFByb21pc2U8Q2xhc3Nlcy5Db21tYW5kPiB7XHJcblx0Y29tbWFuZC51c2FnZSA9IHZhbGUub3B0cy5jb25maWcucHJlZml4ICsgY29tbWFuZC51c2FnZTtcclxuXHRjb21tYW5kLmV4cCA9IG5ldyBSZWdFeHAoJ14nICsgdmFsZS5vcHRzLmNvbmZpZy5wcmVmaXggKyBcIndoeSRcIiwgXCJpXCIpO1xyXG5cclxuXHRDbGFzc2VzLmZldGNoKFwiaHR0cHM6Ly9uZWtvcy5saWZlL2FwaS92Mi93aHlcIikudGhlbigocmVwbHk6IHN0cmluZykgPT4gY29tbWFuZC5kYXRhLmNhY2hlLnB1c2gocmVwbHkpKTtcclxuXHJcblx0cmV0dXJuIGNvbW1hbmQ7XHJcbn0gLy9pbml0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG4iXX0=