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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2NvbW1hbmRzL2NhdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztBQUViLGlFQUFpQztBQUdwQixRQUFBLE9BQU8sR0FBb0IsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQztJQUMzRCxJQUFJLEVBQUUsS0FBSztJQUNYLElBQUksRUFBRSxzQkFBc0I7SUFDNUIsS0FBSyxFQUFFLEtBQUs7SUFDWixHQUFHLEVBQUUsZ0JBQWdCO0lBQ3JCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLElBQUksRUFBRTtRQUNMLEtBQUssRUFBRSxJQUFJLGlCQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQztLQUN0RDtJQUNELElBQUksRUFBRSxLQUFLLFVBQVUsSUFBSSxDQUFDLE9BQWdCLEVBQUUsSUFBbUI7UUFDOUQsSUFBSSxJQUFJLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTFDLElBQUk7WUFDSCxJQUFJLEtBQUssR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxNQUFNLGlCQUFPLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7WUFFbEcsaUJBQU8sQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUFDLGVBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBRXZHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDYixJQUFJLENBQUMsbUZBQW1GLENBQUMsQ0FBQztZQUMxRixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25CO0lBQ0YsQ0FBQztDQUNELENBQUMsQ0FBQztBQUVJLEtBQUssVUFBVSxJQUFJLENBQUMsSUFBa0I7SUFDNUMsZUFBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsZUFBTyxDQUFDLEtBQUssQ0FBQztJQUN4RCxlQUFPLENBQUMsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzdFLGlCQUFPLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FBQyxlQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUV2RyxPQUFPLGVBQU8sQ0FBQztBQUNoQixDQUFDLENBQUMsTUFBTTtBQU5SLG9CQU1DO0FBRUQsa0JBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgQ2xhc3NlcyBmcm9tIFwiLi4vQ2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjb21tYW5kOiBDbGFzc2VzLkNvbW1hbmQgPSBuZXcgQ2xhc3Nlcy5Db21tYW5kKHtcclxuXHRuYW1lOiBcImNhdFwiLFxyXG5cdGRlc2M6IFwiRmV0Y2ggYSBjYXQgZW1vdGUgOjNcIixcclxuXHR1c2FnZTogXCJjYXRcIixcclxuXHRleHA6IC9eIShjYXR8bmVrbykkL2ksXHJcblx0Y2F0ZWdvcnk6IFwiVXRpbGl0eVwiLFxyXG5cdGRhdGE6IHsgXHJcblx0XHRjYWNoZTogbmV3IENsYXNzZXMuQ2FjaGVCYW5rKFwiY2F0XCIsIG51bGwsIHRydWUsIGZhbHNlKVxyXG5cdH0sXHJcblx0Ym9keTogYXN5bmMgZnVuY3Rpb24gYm9keShtZXNzYWdlOiBNZXNzYWdlLCB2YWxlPzogQ2xhc3Nlcy5WYWxlKTogUHJvbWlzZTx2b2lkPiB7XHJcblx0XHRsZXQgcmVwbCA9IENsYXNzZXMuZmFpbHNhZmUuYmluZChtZXNzYWdlKTtcclxuXHJcblx0XHR0cnkge1xyXG5cdFx0XHRsZXQgcmVwbHk6IHN0cmluZyA9IHRoaXMuZGF0YS5jYWNoZS5nZXQoKSB8fCBhd2FpdCBDbGFzc2VzLmZldGNoKFwiaHR0cHM6Ly9uZWtvcy5saWZlL2FwaS92Mi9jYXRcIik7XHJcblxyXG5cdFx0XHRDbGFzc2VzLmZldGNoKFwiaHR0cHM6Ly9uZWtvcy5saWZlL2FwaS92Mi9jYXRcIikudGhlbigocmVwbHk6IHN0cmluZykgPT4gY29tbWFuZC5kYXRhLmNhY2hlLnB1c2gocmVwbHkpKTtcclxuXHJcblx0XHRcdHJlcGwoSlNPTi5wYXJzZShyZXBseSkuY2F0KTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRyZXBsKFwiRXh0ZXJuYWwgQVBJIGVycm9yLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLi4uIGh0dHBzOi8vbmVrb3MubGlmZS9hcGkvdjIvZW5kcG9pbnRzXCIpO1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGVycik7XHJcblx0XHR9XHJcblx0fSwgLy9ib2R5XHJcbn0pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXQodmFsZTogQ2xhc3Nlcy5WYWxlKTogUHJvbWlzZTxDbGFzc2VzLkNvbW1hbmQ+IHtcclxuXHRjb21tYW5kLnVzYWdlID0gdmFsZS5vcHRzLmNvbmZpZy5wcmVmaXggKyBjb21tYW5kLnVzYWdlO1xyXG5cdGNvbW1hbmQuZXhwID0gbmV3IFJlZ0V4cCgnXicgKyB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIFwiKGNhdHxuZWtvKSRcIiwgXCJpXCIpO1xyXG5cdENsYXNzZXMuZmV0Y2goXCJodHRwczovL25la29zLmxpZmUvYXBpL3YyL2NhdFwiKS50aGVuKChyZXBseTogc3RyaW5nKSA9PiBjb21tYW5kLmRhdGEuY2FjaGUucHVzaChyZXBseSkpO1xyXG5cclxuXHRyZXR1cm4gY29tbWFuZDtcclxufSAvL2luaXRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcbiJdfQ==