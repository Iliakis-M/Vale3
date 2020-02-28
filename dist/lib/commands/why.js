"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Classes_1 = tslib_1.__importDefault(require("../Classes"));
exports.command = new Classes_1.default.Command({
    name: "why",
    desc: "Just... Why?...",
    usage: "why",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2h5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2NvbW1hbmRzL3doeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztBQUViLGlFQUFpQztBQUdwQixRQUFBLE9BQU8sR0FBb0IsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQztJQUMzRCxJQUFJLEVBQUUsS0FBSztJQUNYLElBQUksRUFBRSxpQkFBaUI7SUFDdkIsS0FBSyxFQUFFLEtBQUs7SUFDWixHQUFHLEVBQUUsU0FBUztJQUNkLFFBQVEsRUFBRSxTQUFTO0lBQ25CLElBQUksRUFBRTtRQUNMLEtBQUssRUFBRSxJQUFJLGlCQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSwrQkFBK0IsQ0FBQztLQUM1RjtJQUNELElBQUksRUFBRSxLQUFLLFVBQVUsSUFBSSxDQUFDLE9BQWdCLEVBQUUsSUFBa0I7UUFDN0QsSUFBSSxLQUFLLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTNDLElBQUk7WUFDSCxJQUFJLElBQUksR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxNQUFNLGlCQUFPLENBQUMsS0FBSyxDQUFDLGVBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTNGLGlCQUFPLENBQUMsS0FBSyxDQUFDLGVBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsZUFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFFakcsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNoRDtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ2IsS0FBSyxDQUFDLG1GQUFtRixDQUFDLENBQUM7WUFDM0YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuQjtJQUNGLENBQUM7Q0FDRCxDQUFDLENBQUM7QUFFSSxLQUFLLFVBQVUsSUFBSSxDQUFDLElBQWtCO0lBQzVDLGVBQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGVBQU8sQ0FBQyxLQUFLLENBQUM7SUFDeEQsZUFBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUV0RSxpQkFBTyxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsZUFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFdkcsT0FBTyxlQUFPLENBQUM7QUFDaEIsQ0FBQyxDQUFDLE1BQU07QUFQUixvQkFPQztBQUVELGtCQUFlLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IENsYXNzZXMgZnJvbSBcIi4uL0NsYXNzZXNcIjtcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29tbWFuZDogQ2xhc3Nlcy5Db21tYW5kID0gbmV3IENsYXNzZXMuQ29tbWFuZCh7XHJcblx0bmFtZTogXCJ3aHlcIixcclxuXHRkZXNjOiBcIkp1c3QuLi4gV2h5Py4uLlwiLFxyXG5cdHVzYWdlOiBcIndoeVwiLFxyXG5cdGV4cDogL14hd2h5JC9pLFxyXG5cdGNhdGVnb3J5OiBcIlV0aWxpdHlcIixcclxuXHRkYXRhOiB7XHJcblx0XHRjYWNoZTogbmV3IENsYXNzZXMuQ2FjaGVCYW5rKFwid2h5XCIsIHVuZGVmaW5lZCwgdHJ1ZSwgZmFsc2UsIFwiaHR0cHM6Ly9uZWtvcy5saWZlL2FwaS92Mi93aHlcIilcclxuXHR9LFxyXG5cdGJvZHk6IGFzeW5jIGZ1bmN0aW9uIGJvZHkobWVzc2FnZTogTWVzc2FnZSwgdmFsZTogQ2xhc3Nlcy5WYWxlKSB7XHJcblx0XHRsZXQgcmVwbHkgPSBDbGFzc2VzLmZhaWxzYWZlLmJpbmQobWVzc2FnZSk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bGV0IHJlcGw6IHN0cmluZyA9IHRoaXMuZGF0YS5jYWNoZS5nZXQoKSB8fCBhd2FpdCBDbGFzc2VzLmZldGNoKGNvbW1hbmQuZGF0YS5jYWNoZS5zb3VyY2UpO1xyXG5cdFx0XHJcblx0XHRcdENsYXNzZXMuZmV0Y2goY29tbWFuZC5kYXRhLmNhY2hlLnNvdXJjZSkudGhlbigocmVwbHk6IHN0cmluZykgPT4gY29tbWFuZC5kYXRhLmNhY2hlLnB1c2gocmVwbHkpKTtcclxuXHJcblx0XHRcdHJlcGx5KGRlY29kZVVSSUNvbXBvbmVudChKU09OLnBhcnNlKHJlcGwpLndoeSkpO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdHJlcGx5KFwiRXh0ZXJuYWwgQVBJIGVycm9yLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLi4uIGh0dHBzOi8vbmVrb3MubGlmZS9hcGkvdjIvZW5kcG9pbnRzXCIpO1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGVycik7XHJcblx0XHR9XHJcblx0fSwgLy9ib2R5XHJcbn0pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXQodmFsZTogQ2xhc3Nlcy5WYWxlKTogUHJvbWlzZTxDbGFzc2VzLkNvbW1hbmQ+IHtcclxuXHRjb21tYW5kLnVzYWdlID0gdmFsZS5vcHRzLmNvbmZpZy5wcmVmaXggKyBjb21tYW5kLnVzYWdlO1xyXG5cdGNvbW1hbmQuZXhwID0gbmV3IFJlZ0V4cCgnXicgKyB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIFwid2h5JFwiLCBcImlcIik7XHJcblxyXG5cdENsYXNzZXMuZmV0Y2goXCJodHRwczovL25la29zLmxpZmUvYXBpL3YyL3doeVwiKS50aGVuKChyZXBseTogc3RyaW5nKSA9PiBjb21tYW5kLmRhdGEuY2FjaGUucHVzaChyZXBseSkpO1xyXG5cclxuXHRyZXR1cm4gY29tbWFuZDtcclxufSAvL2luaXRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcbiJdfQ==