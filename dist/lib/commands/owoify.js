"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Classes_1 = tslib_1.__importDefault(require("../Classes"));
exports.command = new Classes_1.default.Command({
    name: "owoify",
    desc: "Make youw text cute ^w^",
    usage: "owoify text<String>",
    exp: /^!owo(ify)? .+$/msi,
    category: "Utility",
    data: {},
    body: async function body(message, vale) {
        let reply = Classes_1.default.failsafe.bind(message);
        try {
            message.channel.startTyping();
            let owo = JSON.parse(await Classes_1.default.fetch("https://nekos.life/api/v2/owoify?text=" + encodeURIComponent(message.content.split(' ').slice(1).join(' ')))).owo;
            reply(owo, {
                split: true
            }).then(() => message.channel.stopTyping());
        }
        catch (err) {
            reply("External API error, please try again later... https://nekos.life/api/v2/endpoints");
            console.error(err);
        }
    },
});
async function init(vale) {
    exports.command.usage = vale.opts.config.prefix + exports.command.usage;
    exports.command.exp = new RegExp('^' + vale.opts.config.prefix + "owo(ify)? .+$", "msi");
    return exports.command;
} //init
exports.init = init;
exports.default = init;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3dvaWZ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2NvbW1hbmRzL293b2lmeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztBQUViLGlFQUFpQztBQUdwQixRQUFBLE9BQU8sR0FBb0IsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQztJQUMzRCxJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSx5QkFBeUI7SUFDL0IsS0FBSyxFQUFFLHFCQUFxQjtJQUM1QixHQUFHLEVBQUUsb0JBQW9CO0lBQ3pCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLElBQUksRUFBRSxFQUFHO0lBQ1QsSUFBSSxFQUFFLEtBQUssVUFBVSxJQUFJLENBQUMsT0FBZ0IsRUFBRSxJQUFtQjtRQUM5RCxJQUFJLEtBQUssR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFM0MsSUFBSTtZQUNILE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFOUIsSUFBSSxHQUFHLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLGlCQUFPLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBRXBLLEtBQUssQ0FBQyxHQUFHLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLElBQUk7YUFDWCxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUM1QztRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ2IsS0FBSyxDQUFDLG1GQUFtRixDQUFDLENBQUM7WUFDM0YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuQjtJQUNGLENBQUM7Q0FDRCxDQUFDLENBQUM7QUFFSSxLQUFLLFVBQVUsSUFBSSxDQUFDLElBQWtCO0lBQzVDLGVBQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGVBQU8sQ0FBQyxLQUFLLENBQUM7SUFDeEQsZUFBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUVqRixPQUFPLGVBQU8sQ0FBQztBQUNoQixDQUFDLENBQUMsTUFBTTtBQUxSLG9CQUtDO0FBRUQsa0JBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgQ2xhc3NlcyBmcm9tIFwiLi4vQ2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjb21tYW5kOiBDbGFzc2VzLkNvbW1hbmQgPSBuZXcgQ2xhc3Nlcy5Db21tYW5kKHtcclxuXHRuYW1lOiBcIm93b2lmeVwiLFxyXG5cdGRlc2M6IFwiTWFrZSB5b3V3IHRleHQgY3V0ZSBed15cIixcclxuXHR1c2FnZTogXCJvd29pZnkgdGV4dDxTdHJpbmc+XCIsXHJcblx0ZXhwOiAvXiFvd28oaWZ5KT8gLiskL21zaSxcclxuXHRjYXRlZ29yeTogXCJVdGlsaXR5XCIsXHJcblx0ZGF0YTogeyB9LFxyXG5cdGJvZHk6IGFzeW5jIGZ1bmN0aW9uIGJvZHkobWVzc2FnZTogTWVzc2FnZSwgdmFsZT86IENsYXNzZXMuVmFsZSkge1xyXG5cdFx0bGV0IHJlcGx5ID0gQ2xhc3Nlcy5mYWlsc2FmZS5iaW5kKG1lc3NhZ2UpO1xyXG5cclxuXHRcdHRyeSB7XHJcblx0XHRcdG1lc3NhZ2UuY2hhbm5lbC5zdGFydFR5cGluZygpO1xyXG5cclxuXHRcdFx0bGV0IG93bzogc3RyaW5nID0gSlNPTi5wYXJzZShhd2FpdCBDbGFzc2VzLmZldGNoKFwiaHR0cHM6Ly9uZWtvcy5saWZlL2FwaS92Mi9vd29pZnk/dGV4dD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChtZXNzYWdlLmNvbnRlbnQuc3BsaXQoJyAnKS5zbGljZSgxKS5qb2luKCcgJykpKSkub3dvO1xyXG5cclxuXHRcdFx0cmVwbHkob3dvLCB7XHJcblx0XHRcdFx0c3BsaXQ6IHRydWVcclxuXHRcdFx0fSkudGhlbigoKSA9PiBtZXNzYWdlLmNoYW5uZWwuc3RvcFR5cGluZygpKTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRyZXBseShcIkV4dGVybmFsIEFQSSBlcnJvciwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4uLiBodHRwczovL25la29zLmxpZmUvYXBpL3YyL2VuZHBvaW50c1wiKTtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xyXG5cdFx0fVxyXG5cdH0sIC8vYm9keVxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0KHZhbGU6IENsYXNzZXMuVmFsZSk6IFByb21pc2U8Q2xhc3Nlcy5Db21tYW5kPiB7XHJcblx0Y29tbWFuZC51c2FnZSA9IHZhbGUub3B0cy5jb25maWcucHJlZml4ICsgY29tbWFuZC51c2FnZTtcclxuXHRjb21tYW5kLmV4cCA9IG5ldyBSZWdFeHAoJ14nICsgdmFsZS5vcHRzLmNvbmZpZy5wcmVmaXggKyBcIm93byhpZnkpPyAuKyRcIiwgXCJtc2lcIik7XHJcblxyXG5cdHJldHVybiBjb21tYW5kO1xyXG59IC8vaW5pdFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcclxuIl19