"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Classes_1 = tslib_1.__importDefault(require("../Classes"));
exports.command = new Classes_1.default.Command({
    name: "ping",
    desc: "Ping the system to retrieve the heartbeat",
    usage: "ping",
    exp: /^!pings?$/i,
    category: "Utility",
    data: {},
    body: async function body(message, vale) {
        let reply = Classes_1.default.failsafe.bind(message);
        if (message.content.endsWith('s')) {
            reply("Pongs! " + vale.client.pings.map((ping) => Math.round(ping * 100) / 100).join(", ") + " ms");
        }
        else {
            reply("Pong! " + (Math.round(vale.client.ping * 100) / 100) + "ms");
        }
    },
});
async function init(vale) {
    exports.command.usage = vale.opts.config.prefix + exports.command.usage;
    exports.command.exp = new RegExp('^' + vale.opts.config.prefix + "pings?$", "i");
    return exports.command;
} //init
exports.init = init;
exports.default = init;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9jb21tYW5kcy9waW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0FBRWIsaUVBQWlDO0FBR3BCLFFBQUEsT0FBTyxHQUFvQixJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDO0lBQzNELElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSSxFQUFFLDJDQUEyQztJQUNqRCxLQUFLLEVBQUUsTUFBTTtJQUNiLEdBQUcsRUFBRSxZQUFZO0lBQ2pCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLElBQUksRUFBRSxFQUFHO0lBQ1QsSUFBSSxFQUFFLEtBQUssVUFBVSxJQUFJLENBQUMsT0FBZ0IsRUFBRSxJQUFrQjtRQUM3RCxJQUFJLEtBQUssR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFM0MsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsQyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQVksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQzNHO2FBQU07WUFDTixLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUNwRTtJQUNGLENBQUM7Q0FDRCxDQUFDLENBQUM7QUFFSSxLQUFLLFVBQVUsSUFBSSxDQUFDLElBQWtCO0lBQzVDLGVBQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGVBQU8sQ0FBQyxLQUFLLENBQUM7SUFDeEQsZUFBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUV6RSxPQUFPLGVBQU8sQ0FBQztBQUNoQixDQUFDLENBQUMsTUFBTTtBQUxSLG9CQUtDO0FBRUQsa0JBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgQ2xhc3NlcyBmcm9tIFwiLi4vQ2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjb21tYW5kOiBDbGFzc2VzLkNvbW1hbmQgPSBuZXcgQ2xhc3Nlcy5Db21tYW5kKHtcclxuXHRuYW1lOiBcInBpbmdcIixcclxuXHRkZXNjOiBcIlBpbmcgdGhlIHN5c3RlbSB0byByZXRyaWV2ZSB0aGUgaGVhcnRiZWF0XCIsXHJcblx0dXNhZ2U6IFwicGluZ1wiLFxyXG5cdGV4cDogL14hcGluZ3M/JC9pLFxyXG5cdGNhdGVnb3J5OiBcIlV0aWxpdHlcIixcclxuXHRkYXRhOiB7IH0sXHJcblx0Ym9keTogYXN5bmMgZnVuY3Rpb24gYm9keShtZXNzYWdlOiBNZXNzYWdlLCB2YWxlOiBDbGFzc2VzLlZhbGUpOiBQcm9taXNlPHZvaWQ+IHtcclxuXHRcdGxldCByZXBseSA9IENsYXNzZXMuZmFpbHNhZmUuYmluZChtZXNzYWdlKTtcclxuXHJcblx0XHRpZiAobWVzc2FnZS5jb250ZW50LmVuZHNXaXRoKCdzJykpIHtcclxuXHRcdFx0cmVwbHkoXCJQb25ncyEgXCIgKyB2YWxlLmNsaWVudC5waW5ncy5tYXAoKHBpbmc6IG51bWJlcikgPT4gTWF0aC5yb3VuZChwaW5nICogMTAwKSAvMTAwKS5qb2luKFwiLCBcIikgKyBcIiBtc1wiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlcGx5KFwiUG9uZyEgXCIgKyAoTWF0aC5yb3VuZCh2YWxlLmNsaWVudC5waW5nICogMTAwKSAvIDEwMCkgKyBcIm1zXCIpO1xyXG5cdFx0fVxyXG5cdH0sIC8vYm9keVxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0KHZhbGU6IENsYXNzZXMuVmFsZSk6IFByb21pc2U8Q2xhc3Nlcy5Db21tYW5kPiB7XHJcblx0Y29tbWFuZC51c2FnZSA9IHZhbGUub3B0cy5jb25maWcucHJlZml4ICsgY29tbWFuZC51c2FnZTtcclxuXHRjb21tYW5kLmV4cCA9IG5ldyBSZWdFeHAoJ14nICsgdmFsZS5vcHRzLmNvbmZpZy5wcmVmaXggKyBcInBpbmdzPyRcIiwgXCJpXCIpO1xyXG5cclxuXHRyZXR1cm4gY29tbWFuZDtcclxufSAvL2luaXRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcbiJdfQ==