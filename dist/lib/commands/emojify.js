"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Classes_1 = tslib_1.__importStar(require("../Classes"));
exports.command = new Classes_1.default.Command({
    name: "emojify",
    desc: "Emogify your messages with regional_indicators!",
    usage: "!emojify sentence<String>",
    exp: /^!emo?j(ify)? .+$/msi,
    category: "Utility",
    data: {},
    body: async function body(message, vale) {
        let letters = message.content.split(' ').slice(1).join(' ').split(''), out = '', reply = Classes_1.default.failsafe.bind(message);
        await Classes_1.chillout.forEach(letters, (letter) => {
            if (/^[a-z]$/i.test(letter)) {
                out += `:regional_indicator_${letter.toLowerCase()}:`;
            }
            else if (/^\d$/.test(letter)) {
                switch (Number(letter)) {
                    case 0:
                        out += ":zero:";
                        break;
                    case 1:
                        out += ":one:";
                        break;
                    case 2:
                        out += ":two:";
                        break;
                    case 3:
                        out += ":three:";
                        break;
                    case 4:
                        out += ":four:";
                        break;
                    case 5:
                        out += ":five:";
                        break;
                    case 6:
                        out += ":six:";
                        break;
                    case 7:
                        out += ":seven:";
                        break;
                    case 8:
                        out += ":eight:";
                        break;
                    case 9:
                        out += ":nine:";
                        break;
                }
            }
            else if (letter === '!') {
                out += ":exclamation:";
            }
            else if (letter === '?') {
                out += ":question:";
            }
            else if (letter === '#') {
                out += ":hash:";
            }
            else if (letter === '*') {
                out += ":asterisk:";
            }
            else {
                out += letter;
            }
        });
        reply(out);
    },
});
async function init(vale) {
    exports.command.usage = vale.opts.config.prefix + exports.command.usage;
    exports.command.exp = new RegExp('^' + vale.opts.config.prefix + "emo?j(ify)? .+$", "msi");
    return exports.command;
} //init
exports.init = init;
exports.default = init;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamlmeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9jb21tYW5kcy9lbW9qaWZ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0FBRWIsOERBQStDO0FBR2xDLFFBQUEsT0FBTyxHQUFvQixJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDO0lBQzNELElBQUksRUFBRSxTQUFTO0lBQ2YsSUFBSSxFQUFFLGlEQUFpRDtJQUN2RCxLQUFLLEVBQUUsMkJBQTJCO0lBQ2xDLEdBQUcsRUFBRSxzQkFBc0I7SUFDM0IsUUFBUSxFQUFFLFNBQVM7SUFDbkIsSUFBSSxFQUFFLEVBQUc7SUFDVCxJQUFJLEVBQUUsS0FBSyxVQUFVLElBQUksQ0FBQyxPQUFnQixFQUFFLElBQW1CO1FBQzlELElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUNwRSxHQUFHLEdBQVcsRUFBRSxFQUNoQixLQUFLLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXhDLE1BQU0sa0JBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBYyxFQUFRLEVBQUU7WUFDeEQsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUM1QixHQUFHLElBQUksdUJBQXVCLE1BQU0sQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDO2FBQ3REO2lCQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDL0IsUUFBUSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ3ZCLEtBQUssQ0FBQzt3QkFDTCxHQUFHLElBQUksUUFBUSxDQUFDO3dCQUNoQixNQUFNO29CQUNQLEtBQUssQ0FBQzt3QkFDTCxHQUFHLElBQUksT0FBTyxDQUFDO3dCQUNmLE1BQU07b0JBQ1AsS0FBSyxDQUFDO3dCQUNMLEdBQUcsSUFBSSxPQUFPLENBQUM7d0JBQ2YsTUFBTTtvQkFDUCxLQUFLLENBQUM7d0JBQ0wsR0FBRyxJQUFJLFNBQVMsQ0FBQzt3QkFDakIsTUFBTTtvQkFDUCxLQUFLLENBQUM7d0JBQ0wsR0FBRyxJQUFJLFFBQVEsQ0FBQzt3QkFDaEIsTUFBTTtvQkFDUCxLQUFLLENBQUM7d0JBQ0wsR0FBRyxJQUFJLFFBQVEsQ0FBQzt3QkFDaEIsTUFBTTtvQkFDUCxLQUFLLENBQUM7d0JBQ0wsR0FBRyxJQUFJLE9BQU8sQ0FBQzt3QkFDZixNQUFNO29CQUNQLEtBQUssQ0FBQzt3QkFDTCxHQUFHLElBQUksU0FBUyxDQUFDO3dCQUNqQixNQUFNO29CQUNQLEtBQUssQ0FBQzt3QkFDTCxHQUFHLElBQUksU0FBUyxDQUFDO3dCQUNqQixNQUFNO29CQUNQLEtBQUssQ0FBQzt3QkFDTCxHQUFHLElBQUksUUFBUSxDQUFDO3dCQUNoQixNQUFNO2lCQUNQO2FBQ0Q7aUJBQU0sSUFBSSxNQUFNLEtBQUssR0FBRyxFQUFFO2dCQUMxQixHQUFHLElBQUksZUFBZSxDQUFDO2FBQ3ZCO2lCQUFNLElBQUksTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDMUIsR0FBRyxJQUFJLFlBQVksQ0FBQzthQUNwQjtpQkFBTSxJQUFJLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQzFCLEdBQUcsSUFBSSxRQUFRLENBQUM7YUFDaEI7aUJBQU0sSUFBSSxNQUFNLEtBQUssR0FBRyxFQUFFO2dCQUMxQixHQUFHLElBQUksWUFBWSxDQUFDO2FBQ3BCO2lCQUFNO2dCQUNOLEdBQUcsSUFBSSxNQUFNLENBQUM7YUFDZDtRQUNGLENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztDQUNELENBQUMsQ0FBQztBQUVJLEtBQUssVUFBVSxJQUFJLENBQUMsSUFBa0I7SUFDNUMsZUFBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsZUFBTyxDQUFDLEtBQUssQ0FBQztJQUN4RCxlQUFPLENBQUMsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFbkYsT0FBTyxlQUFPLENBQUM7QUFDaEIsQ0FBQyxDQUFDLE1BQU07QUFMUixvQkFLQztBQUVELGtCQUFlLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IENsYXNzZXMsIHsgY2hpbGxvdXQgfSBmcm9tIFwiLi4vQ2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjb21tYW5kOiBDbGFzc2VzLkNvbW1hbmQgPSBuZXcgQ2xhc3Nlcy5Db21tYW5kKHtcclxuXHRuYW1lOiBcImVtb2ppZnlcIixcclxuXHRkZXNjOiBcIkVtb2dpZnkgeW91ciBtZXNzYWdlcyB3aXRoIHJlZ2lvbmFsX2luZGljYXRvcnMhXCIsXHJcblx0dXNhZ2U6IFwiIWVtb2ppZnkgc2VudGVuY2U8U3RyaW5nPlwiLFxyXG5cdGV4cDogL14hZW1vP2ooaWZ5KT8gLiskL21zaSxcclxuXHRjYXRlZ29yeTogXCJVdGlsaXR5XCIsXHJcblx0ZGF0YTogeyB9LFxyXG5cdGJvZHk6IGFzeW5jIGZ1bmN0aW9uIGJvZHkobWVzc2FnZTogTWVzc2FnZSwgdmFsZT86IENsYXNzZXMuVmFsZSk6IFByb21pc2U8dm9pZD4ge1xyXG5cdFx0bGV0IGxldHRlcnMgPSBtZXNzYWdlLmNvbnRlbnQuc3BsaXQoJyAnKS5zbGljZSgxKS5qb2luKCcgJykuc3BsaXQoJycpLFxyXG5cdFx0XHRvdXQ6IHN0cmluZyA9ICcnLFxyXG5cdFx0XHRyZXBseSA9IENsYXNzZXMuZmFpbHNhZmUuYmluZChtZXNzYWdlKTtcclxuXHJcblx0XHRhd2FpdCBjaGlsbG91dC5mb3JFYWNoKGxldHRlcnMsIChsZXR0ZXI6IHN0cmluZyk6IHZvaWQgPT4ge1xyXG5cdFx0XHRpZiAoL15bYS16XSQvaS50ZXN0KGxldHRlcikpIHtcclxuXHRcdFx0XHRvdXQgKz0gYDpyZWdpb25hbF9pbmRpY2F0b3JfJHtsZXR0ZXIudG9Mb3dlckNhc2UoKX06YDtcclxuXHRcdFx0fSBlbHNlIGlmICgvXlxcZCQvLnRlc3QobGV0dGVyKSkge1xyXG5cdFx0XHRcdHN3aXRjaCAoTnVtYmVyKGxldHRlcikpIHtcclxuXHRcdFx0XHRcdGNhc2UgMDpcclxuXHRcdFx0XHRcdFx0b3V0ICs9IFwiOnplcm86XCI7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdFx0XHRvdXQgKz0gXCI6b25lOlwiO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRcdFx0b3V0ICs9IFwiOnR3bzpcIjtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIDM6XHJcblx0XHRcdFx0XHRcdG91dCArPSBcIjp0aHJlZTpcIjtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIDQ6XHJcblx0XHRcdFx0XHRcdG91dCArPSBcIjpmb3VyOlwiO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgNTpcclxuXHRcdFx0XHRcdFx0b3V0ICs9IFwiOmZpdmU6XCI7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSA2OlxyXG5cdFx0XHRcdFx0XHRvdXQgKz0gXCI6c2l4OlwiO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgNzpcclxuXHRcdFx0XHRcdFx0b3V0ICs9IFwiOnNldmVuOlwiO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgODpcclxuXHRcdFx0XHRcdFx0b3V0ICs9IFwiOmVpZ2h0OlwiO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgOTpcclxuXHRcdFx0XHRcdFx0b3V0ICs9IFwiOm5pbmU6XCI7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmIChsZXR0ZXIgPT09ICchJykge1xyXG5cdFx0XHRcdG91dCArPSBcIjpleGNsYW1hdGlvbjpcIjtcclxuXHRcdFx0fSBlbHNlIGlmIChsZXR0ZXIgPT09ICc/Jykge1xyXG5cdFx0XHRcdG91dCArPSBcIjpxdWVzdGlvbjpcIjtcclxuXHRcdFx0fSBlbHNlIGlmIChsZXR0ZXIgPT09ICcjJykge1xyXG5cdFx0XHRcdG91dCArPSBcIjpoYXNoOlwiO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGxldHRlciA9PT0gJyonKSB7XHJcblx0XHRcdFx0b3V0ICs9IFwiOmFzdGVyaXNrOlwiO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG91dCArPSBsZXR0ZXI7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHJlcGx5KG91dCk7XHJcblx0fSwgLy9ib2R5XHJcbn0pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXQodmFsZTogQ2xhc3Nlcy5WYWxlKTogUHJvbWlzZTxDbGFzc2VzLkNvbW1hbmQ+IHtcclxuXHRjb21tYW5kLnVzYWdlID0gdmFsZS5vcHRzLmNvbmZpZy5wcmVmaXggKyBjb21tYW5kLnVzYWdlO1xyXG5cdGNvbW1hbmQuZXhwID0gbmV3IFJlZ0V4cCgnXicgKyB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIFwiZW1vP2ooaWZ5KT8gLiskXCIsIFwibXNpXCIpO1xyXG5cclxuXHRyZXR1cm4gY29tbWFuZDtcclxufSAvL2luaXRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcbiJdfQ==