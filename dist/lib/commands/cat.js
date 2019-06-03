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
        cache: new Classes_1.default.CacheBank("cat", undefined, true, false, "https://nekos.life/api/v2/cat")
    },
    body: async function body(message, vale) {
        let repl = Classes_1.default.failsafe.bind(message);
        try {
            let reply = this.data.cache.get() || await Classes_1.default.fetch(exports.command.data.cache.source);
            Classes_1.default.fetch(exports.command.data.cache.source).then((reply) => exports.command.data.cache.push(reply));
            repl(decodeURIComponent(JSON.parse(reply).cat));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2NvbW1hbmRzL2NhdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztBQUViLGlFQUFpQztBQUdwQixRQUFBLE9BQU8sR0FBb0IsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQztJQUMzRCxJQUFJLEVBQUUsS0FBSztJQUNYLElBQUksRUFBRSxzQkFBc0I7SUFDNUIsS0FBSyxFQUFFLEtBQUs7SUFDWixHQUFHLEVBQUUsZ0JBQWdCO0lBQ3JCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLElBQUksRUFBRTtRQUNMLEtBQUssRUFBRSxJQUFJLGlCQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSwrQkFBK0IsQ0FBQztLQUM1RjtJQUNELElBQUksRUFBRSxLQUFLLFVBQVUsSUFBSSxDQUFDLE9BQWdCLEVBQUUsSUFBbUI7UUFDOUQsSUFBSSxJQUFJLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTFDLElBQUk7WUFDSCxJQUFJLEtBQUssR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxNQUFNLGlCQUFPLENBQUMsS0FBSyxDQUFDLGVBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTVGLGlCQUFPLENBQUMsS0FBSyxDQUFDLGVBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsZUFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFFakcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNoRDtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ2IsSUFBSSxDQUFDLG1GQUFtRixDQUFDLENBQUM7WUFDMUYsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuQjtJQUNGLENBQUM7Q0FDRCxDQUFDLENBQUM7QUFFSSxLQUFLLFVBQVUsSUFBSSxDQUFDLElBQWtCO0lBQzVDLGVBQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGVBQU8sQ0FBQyxLQUFLLENBQUM7SUFDeEQsZUFBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM3RSxpQkFBTyxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsZUFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFdkcsT0FBTyxlQUFPLENBQUM7QUFDaEIsQ0FBQyxDQUFDLE1BQU07QUFOUixvQkFNQztBQUVELGtCQUFlLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IENsYXNzZXMgZnJvbSBcIi4uL0NsYXNzZXNcIjtcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29tbWFuZDogQ2xhc3Nlcy5Db21tYW5kID0gbmV3IENsYXNzZXMuQ29tbWFuZCh7XHJcblx0bmFtZTogXCJjYXRcIixcclxuXHRkZXNjOiBcIkZldGNoIGEgY2F0IGVtb3RlIDozXCIsXHJcblx0dXNhZ2U6IFwiY2F0XCIsXHJcblx0ZXhwOiAvXiEoY2F0fG5la28pJC9pLFxyXG5cdGNhdGVnb3J5OiBcIlV0aWxpdHlcIixcclxuXHRkYXRhOiB7IFxyXG5cdFx0Y2FjaGU6IG5ldyBDbGFzc2VzLkNhY2hlQmFuayhcImNhdFwiLCB1bmRlZmluZWQsIHRydWUsIGZhbHNlLCBcImh0dHBzOi8vbmVrb3MubGlmZS9hcGkvdjIvY2F0XCIpXHJcblx0fSxcclxuXHRib2R5OiBhc3luYyBmdW5jdGlvbiBib2R5KG1lc3NhZ2U6IE1lc3NhZ2UsIHZhbGU/OiBDbGFzc2VzLlZhbGUpOiBQcm9taXNlPHZvaWQ+IHtcclxuXHRcdGxldCByZXBsID0gQ2xhc3Nlcy5mYWlsc2FmZS5iaW5kKG1lc3NhZ2UpO1xyXG5cclxuXHRcdHRyeSB7XHJcblx0XHRcdGxldCByZXBseTogc3RyaW5nID0gdGhpcy5kYXRhLmNhY2hlLmdldCgpIHx8IGF3YWl0IENsYXNzZXMuZmV0Y2goY29tbWFuZC5kYXRhLmNhY2hlLnNvdXJjZSk7XHJcblxyXG5cdFx0XHRDbGFzc2VzLmZldGNoKGNvbW1hbmQuZGF0YS5jYWNoZS5zb3VyY2UpLnRoZW4oKHJlcGx5OiBzdHJpbmcpID0+IGNvbW1hbmQuZGF0YS5jYWNoZS5wdXNoKHJlcGx5KSk7XHJcblxyXG5cdFx0XHRyZXBsKGRlY29kZVVSSUNvbXBvbmVudChKU09OLnBhcnNlKHJlcGx5KS5jYXQpKTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRyZXBsKFwiRXh0ZXJuYWwgQVBJIGVycm9yLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLi4uIGh0dHBzOi8vbmVrb3MubGlmZS9hcGkvdjIvZW5kcG9pbnRzXCIpO1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGVycik7XHJcblx0XHR9XHJcblx0fSwgLy9ib2R5XHJcbn0pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXQodmFsZTogQ2xhc3Nlcy5WYWxlKTogUHJvbWlzZTxDbGFzc2VzLkNvbW1hbmQ+IHtcclxuXHRjb21tYW5kLnVzYWdlID0gdmFsZS5vcHRzLmNvbmZpZy5wcmVmaXggKyBjb21tYW5kLnVzYWdlO1xyXG5cdGNvbW1hbmQuZXhwID0gbmV3IFJlZ0V4cCgnXicgKyB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIFwiKGNhdHxuZWtvKSRcIiwgXCJpXCIpO1xyXG5cdENsYXNzZXMuZmV0Y2goXCJodHRwczovL25la29zLmxpZmUvYXBpL3YyL2NhdFwiKS50aGVuKChyZXBseTogc3RyaW5nKSA9PiBjb21tYW5kLmRhdGEuY2FjaGUucHVzaChyZXBseSkpO1xyXG5cclxuXHRyZXR1cm4gY29tbWFuZDtcclxufSAvL2luaXRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcbiJdfQ==