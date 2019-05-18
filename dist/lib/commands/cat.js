"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Classes_1 = tslib_1.__importDefault(require("../Classes"));
const https_1 = require("https");
exports.command = new Classes_1.default.Command({
    name: "cat",
    desc: "Fetch a cat emote :3",
    usage: "cat",
    exp: /^!cat$/i,
    category: "Utility",
    data: {
        bank: new Classes_1.default.CacheBank("Cat")
    },
    body: async function body(message, vale) {
        https_1.get("https://nekos.life/api/v2/cat", (res) => {
            let reply = '';
            function procceed() {
                try {
                    let send = JSON.parse(reply);
                    message.reply(send.cat);
                }
                catch (err) {
                    message.reply("External API error, please try again later... https://nekos.life/api/v2/endpoints");
                }
            } //procceed
            res.on("data", (chunk) => {
                reply += chunk;
            });
            res.once("close", procceed);
        }).once("error", (error) => {
            message.reply("External API error, please try again later... https://nekos.life/api/v2/endpoints");
        });
    },
});
async function init(vale) {
    exports.command.usage = vale.opts.config.prefix + exports.command.usage;
    exports.command.exp = new RegExp('^' + vale.opts.config.prefix + "cat$", "i");
    return exports.command;
} //init
exports.init = init;
exports.default = init;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2NvbW1hbmRzL2NhdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztBQUViLGlFQUFpQztBQUVqQyxpQ0FBNEI7QUFFZixRQUFBLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDO0lBQzFDLElBQUksRUFBRSxLQUFLO0lBQ1gsSUFBSSxFQUFFLHNCQUFzQjtJQUM1QixLQUFLLEVBQUUsS0FBSztJQUNaLEdBQUcsRUFBRSxTQUFTO0lBQ2QsUUFBUSxFQUFFLFNBQVM7SUFDbkIsSUFBSSxFQUFFO1FBQ0wsSUFBSSxFQUFFLElBQUksaUJBQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO0tBQ2xDO0lBQ0QsSUFBSSxFQUFFLEtBQUssVUFBVSxJQUFJLENBQUMsT0FBZ0IsRUFBRSxJQUFrQjtRQUM3RCxXQUFHLENBQUMsK0JBQStCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUM1QyxJQUFJLEtBQUssR0FBVyxFQUFFLENBQUM7WUFFdkIsU0FBUyxRQUFRO2dCQUNoQixJQUFJO29CQUNILElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRTdCLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN4QjtnQkFBQyxPQUFPLEdBQUcsRUFBRTtvQkFDYixPQUFPLENBQUMsS0FBSyxDQUFDLG1GQUFtRixDQUFDLENBQUM7aUJBQ25HO1lBQ0YsQ0FBQyxDQUFDLFVBQVU7WUFFWixHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUN4QixLQUFLLElBQUksS0FBSyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzFCLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUZBQW1GLENBQUMsQ0FBQztRQUNwRyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRCxDQUFDLENBQUM7QUFFSSxLQUFLLFVBQVUsSUFBSSxDQUFDLElBQWtCO0lBQzVDLGVBQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGVBQU8sQ0FBQyxLQUFLLENBQUM7SUFDeEQsZUFBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUV0RSxPQUFPLGVBQU8sQ0FBQztBQUNoQixDQUFDLENBQUMsTUFBTTtBQUxSLG9CQUtDO0FBRUQsa0JBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgQ2xhc3NlcyBmcm9tIFwiLi4vQ2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IHsgZ2V0IH0gZnJvbSBcImh0dHBzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29tbWFuZCA9IG5ldyBDbGFzc2VzLkNvbW1hbmQoe1xyXG5cdG5hbWU6IFwiY2F0XCIsXHJcblx0ZGVzYzogXCJGZXRjaCBhIGNhdCBlbW90ZSA6M1wiLFxyXG5cdHVzYWdlOiBcImNhdFwiLFxyXG5cdGV4cDogL14hY2F0JC9pLFxyXG5cdGNhdGVnb3J5OiBcIlV0aWxpdHlcIixcclxuXHRkYXRhOiB7IFxyXG5cdFx0YmFuazogbmV3IENsYXNzZXMuQ2FjaGVCYW5rKFwiQ2F0XCIpXHJcblx0fSxcclxuXHRib2R5OiBhc3luYyBmdW5jdGlvbiBib2R5KG1lc3NhZ2U6IE1lc3NhZ2UsIHZhbGU6IENsYXNzZXMuVmFsZSkge1xyXG5cdFx0Z2V0KFwiaHR0cHM6Ly9uZWtvcy5saWZlL2FwaS92Mi9jYXRcIiwgKHJlcykgPT4ge1xyXG5cdFx0XHRsZXQgcmVwbHk6IHN0cmluZyA9ICcnO1xyXG5cclxuXHRcdFx0ZnVuY3Rpb24gcHJvY2NlZWQoKSB7XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdGxldCBzZW5kID0gSlNPTi5wYXJzZShyZXBseSk7XHJcblxyXG5cdFx0XHRcdFx0bWVzc2FnZS5yZXBseShzZW5kLmNhdCk7XHJcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0XHRtZXNzYWdlLnJlcGx5KFwiRXh0ZXJuYWwgQVBJIGVycm9yLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLi4uIGh0dHBzOi8vbmVrb3MubGlmZS9hcGkvdjIvZW5kcG9pbnRzXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSAvL3Byb2NjZWVkXHJcblxyXG5cdFx0XHRyZXMub24oXCJkYXRhXCIsIChjaHVuaykgPT4ge1xyXG5cdFx0XHRcdHJlcGx5ICs9IGNodW5rO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmVzLm9uY2UoXCJjbG9zZVwiLCBwcm9jY2VlZCk7XHJcblx0XHR9KS5vbmNlKFwiZXJyb3JcIiwgKGVycm9yKSA9PiB7XHJcblx0XHRcdG1lc3NhZ2UucmVwbHkoXCJFeHRlcm5hbCBBUEkgZXJyb3IsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuLi4gaHR0cHM6Ly9uZWtvcy5saWZlL2FwaS92Mi9lbmRwb2ludHNcIik7XHJcblx0XHR9KTtcclxuXHR9LCAvL2JvZHlcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdCh2YWxlOiBDbGFzc2VzLlZhbGUpIHtcclxuXHRjb21tYW5kLnVzYWdlID0gdmFsZS5vcHRzLmNvbmZpZy5wcmVmaXggKyBjb21tYW5kLnVzYWdlO1xyXG5cdGNvbW1hbmQuZXhwID0gbmV3IFJlZ0V4cCgnXicgKyB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIFwiY2F0JFwiLCBcImlcIik7XHJcblxyXG5cdHJldHVybiBjb21tYW5kO1xyXG59IC8vaW5pdFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcclxuIl19