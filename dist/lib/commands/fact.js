"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Classes_1 = tslib_1.__importDefault(require("../Classes"));
exports.command = new Classes_1.default.Command({
    name: "fact",
    desc: "Learn an interesting fact",
    usage: "fact",
    exp: /^!fact$/i,
    category: "Utility",
    data: {
        cache: new Classes_1.default.CacheBank("fact", undefined, true, false, "https://nekos.life/api/v2/fact")
    },
    body: async function body(message, vale) {
        let repl = Classes_1.default.failsafe.bind(message);
        try {
            let reply = this.data.cache.get() || await Classes_1.default.fetch(exports.command.data.cache.source);
            Classes_1.default.fetch(exports.command.data.cache.source).then((reply) => exports.command.data.cache.push(reply));
            repl(decodeURIComponent(JSON.parse(reply).fact));
        }
        catch (err) {
            repl("External API error, please try again later... https://nekos.life/api/v2/endpoints");
            console.error(err);
        }
    },
});
async function init(vale) {
    exports.command.usage = vale.opts.config.prefix + exports.command.usage;
    exports.command.exp = new RegExp('^' + vale.opts.config.prefix + "fact$", "i");
    Classes_1.default.fetch(exports.command.data.cache.source).then((reply) => exports.command.data.cache.push(reply));
    return exports.command;
} //init
exports.init = init;
exports.default = init;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9jb21tYW5kcy9mYWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0FBRWIsaUVBQWlDO0FBR3BCLFFBQUEsT0FBTyxHQUFvQixJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDO0lBQzNELElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSSxFQUFFLDJCQUEyQjtJQUNqQyxLQUFLLEVBQUUsTUFBTTtJQUNiLEdBQUcsRUFBRSxVQUFVO0lBQ2YsUUFBUSxFQUFFLFNBQVM7SUFDbkIsSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLElBQUksaUJBQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGdDQUFnQyxDQUFDO0tBQzlGO0lBQ0QsSUFBSSxFQUFFLEtBQUssVUFBVSxJQUFJLENBQUMsT0FBZ0IsRUFBRSxJQUFtQjtRQUM5RCxJQUFJLElBQUksR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFMUMsSUFBSTtZQUNILElBQUksS0FBSyxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLE1BQU0saUJBQU8sQ0FBQyxLQUFLLENBQUMsZUFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFNUYsaUJBQU8sQ0FBQyxLQUFLLENBQUMsZUFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FBQyxlQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUVqRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2pEO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDYixJQUFJLENBQUMsbUZBQW1GLENBQUMsQ0FBQztZQUMxRixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25CO0lBQ0YsQ0FBQztDQUNELENBQUMsQ0FBQztBQUVJLEtBQUssVUFBVSxJQUFJLENBQUMsSUFBa0I7SUFDNUMsZUFBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsZUFBTyxDQUFDLEtBQUssQ0FBQztJQUN4RCxlQUFPLENBQUMsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZFLGlCQUFPLENBQUMsS0FBSyxDQUFDLGVBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsZUFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFakcsT0FBTyxlQUFPLENBQUM7QUFDaEIsQ0FBQyxDQUFDLE1BQU07QUFOUixvQkFNQztBQUVELGtCQUFlLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IENsYXNzZXMgZnJvbSBcIi4uL0NsYXNzZXNcIjtcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29tbWFuZDogQ2xhc3Nlcy5Db21tYW5kID0gbmV3IENsYXNzZXMuQ29tbWFuZCh7XHJcblx0bmFtZTogXCJmYWN0XCIsXHJcblx0ZGVzYzogXCJMZWFybiBhbiBpbnRlcmVzdGluZyBmYWN0XCIsXHJcblx0dXNhZ2U6IFwiZmFjdFwiLFxyXG5cdGV4cDogL14hZmFjdCQvaSxcclxuXHRjYXRlZ29yeTogXCJVdGlsaXR5XCIsXHJcblx0ZGF0YToge1xyXG5cdFx0Y2FjaGU6IG5ldyBDbGFzc2VzLkNhY2hlQmFuayhcImZhY3RcIiwgdW5kZWZpbmVkLCB0cnVlLCBmYWxzZSwgXCJodHRwczovL25la29zLmxpZmUvYXBpL3YyL2ZhY3RcIilcclxuXHR9LFxyXG5cdGJvZHk6IGFzeW5jIGZ1bmN0aW9uIGJvZHkobWVzc2FnZTogTWVzc2FnZSwgdmFsZT86IENsYXNzZXMuVmFsZSkge1xyXG5cdFx0bGV0IHJlcGwgPSBDbGFzc2VzLmZhaWxzYWZlLmJpbmQobWVzc2FnZSk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bGV0IHJlcGx5OiBzdHJpbmcgPSB0aGlzLmRhdGEuY2FjaGUuZ2V0KCkgfHwgYXdhaXQgQ2xhc3Nlcy5mZXRjaChjb21tYW5kLmRhdGEuY2FjaGUuc291cmNlKTtcclxuXHJcblx0XHRcdENsYXNzZXMuZmV0Y2goY29tbWFuZC5kYXRhLmNhY2hlLnNvdXJjZSkudGhlbigocmVwbHk6IHN0cmluZykgPT4gY29tbWFuZC5kYXRhLmNhY2hlLnB1c2gocmVwbHkpKTtcclxuXHJcblx0XHRcdHJlcGwoZGVjb2RlVVJJQ29tcG9uZW50KEpTT04ucGFyc2UocmVwbHkpLmZhY3QpKTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRyZXBsKFwiRXh0ZXJuYWwgQVBJIGVycm9yLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLi4uIGh0dHBzOi8vbmVrb3MubGlmZS9hcGkvdjIvZW5kcG9pbnRzXCIpO1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGVycik7XHJcblx0XHR9XHJcblx0fSwgLy9ib2R5XHJcbn0pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXQodmFsZTogQ2xhc3Nlcy5WYWxlKTogUHJvbWlzZTxDbGFzc2VzLkNvbW1hbmQ+IHtcclxuXHRjb21tYW5kLnVzYWdlID0gdmFsZS5vcHRzLmNvbmZpZy5wcmVmaXggKyBjb21tYW5kLnVzYWdlO1xyXG5cdGNvbW1hbmQuZXhwID0gbmV3IFJlZ0V4cCgnXicgKyB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIFwiZmFjdCRcIiwgXCJpXCIpO1xyXG5cdENsYXNzZXMuZmV0Y2goY29tbWFuZC5kYXRhLmNhY2hlLnNvdXJjZSkudGhlbigocmVwbHk6IHN0cmluZykgPT4gY29tbWFuZC5kYXRhLmNhY2hlLnB1c2gocmVwbHkpKTtcclxuXHJcblx0cmV0dXJuIGNvbW1hbmQ7XHJcbn0gLy9pbml0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG4iXX0=