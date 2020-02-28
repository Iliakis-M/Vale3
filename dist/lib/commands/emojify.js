"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Classes_1 = tslib_1.__importStar(require("../Classes"));
exports.command = new Classes_1.default.Command({
    name: "emojify",
    desc: "Emogify your messages with regional_indicators!",
    usage: "emojify sentence<String>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamlmeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9jb21tYW5kcy9lbW9qaWZ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0FBRWIsOERBQStDO0FBR2xDLFFBQUEsT0FBTyxHQUFvQixJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDO0lBQzNELElBQUksRUFBRSxTQUFTO0lBQ2YsSUFBSSxFQUFFLGlEQUFpRDtJQUN2RCxLQUFLLEVBQUUsMEJBQTBCO0lBQ2pDLEdBQUcsRUFBRSxzQkFBc0I7SUFDM0IsUUFBUSxFQUFFLFNBQVM7SUFDbkIsSUFBSSxFQUFFLEVBQUc7SUFDVCxJQUFJLEVBQUUsS0FBSyxVQUFVLElBQUksQ0FBQyxPQUFnQixFQUFFLElBQW1CO1FBQzlELElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUNwRSxHQUFHLEdBQVcsRUFBRSxFQUNoQixLQUFLLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXhDLE1BQU0sa0JBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBYyxFQUFRLEVBQUU7WUFDeEQsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUM1QixHQUFHLElBQUksdUJBQXVCLE1BQU0sQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDO2FBQ3REO2lCQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDL0IsUUFBUSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ3ZCLEtBQUssQ0FBQzt3QkFDTCxHQUFHLElBQUksUUFBUSxDQUFDO3dCQUNoQixNQUFNO29CQUNQLEtBQUssQ0FBQzt3QkFDTCxHQUFHLElBQUksT0FBTyxDQUFDO3dCQUNmLE1BQU07b0JBQ1AsS0FBSyxDQUFDO3dCQUNMLEdBQUcsSUFBSSxPQUFPLENBQUM7d0JBQ2YsTUFBTTtvQkFDUCxLQUFLLENBQUM7d0JBQ0wsR0FBRyxJQUFJLFNBQVMsQ0FBQzt3QkFDakIsTUFBTTtvQkFDUCxLQUFLLENBQUM7d0JBQ0wsR0FBRyxJQUFJLFFBQVEsQ0FBQzt3QkFDaEIsTUFBTTtvQkFDUCxLQUFLLENBQUM7d0JBQ0wsR0FBRyxJQUFJLFFBQVEsQ0FBQzt3QkFDaEIsTUFBTTtvQkFDUCxLQUFLLENBQUM7d0JBQ0wsR0FBRyxJQUFJLE9BQU8sQ0FBQzt3QkFDZixNQUFNO29CQUNQLEtBQUssQ0FBQzt3QkFDTCxHQUFHLElBQUksU0FBUyxDQUFDO3dCQUNqQixNQUFNO29CQUNQLEtBQUssQ0FBQzt3QkFDTCxHQUFHLElBQUksU0FBUyxDQUFDO3dCQUNqQixNQUFNO29CQUNQLEtBQUssQ0FBQzt3QkFDTCxHQUFHLElBQUksUUFBUSxDQUFDO3dCQUNoQixNQUFNO2lCQUNQO2FBQ0Q7aUJBQU0sSUFBSSxNQUFNLEtBQUssR0FBRyxFQUFFO2dCQUMxQixHQUFHLElBQUksZUFBZSxDQUFDO2FBQ3ZCO2lCQUFNLElBQUksTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDMUIsR0FBRyxJQUFJLFlBQVksQ0FBQzthQUNwQjtpQkFBTSxJQUFJLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQzFCLEdBQUcsSUFBSSxRQUFRLENBQUM7YUFDaEI7aUJBQU0sSUFBSSxNQUFNLEtBQUssR0FBRyxFQUFFO2dCQUMxQixHQUFHLElBQUksWUFBWSxDQUFDO2FBQ3BCO2lCQUFNO2dCQUNOLEdBQUcsSUFBSSxNQUFNLENBQUM7YUFDZDtRQUNGLENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztDQUNELENBQUMsQ0FBQztBQUVJLEtBQUssVUFBVSxJQUFJLENBQUMsSUFBa0I7SUFDNUMsZUFBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsZUFBTyxDQUFDLEtBQUssQ0FBQztJQUN4RCxlQUFPLENBQUMsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFbkYsT0FBTyxlQUFPLENBQUM7QUFDaEIsQ0FBQyxDQUFDLE1BQU07QUFMUixvQkFLQztBQUVELGtCQUFlLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IENsYXNzZXMsIHsgY2hpbGxvdXQgfSBmcm9tIFwiLi4vQ2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjb21tYW5kOiBDbGFzc2VzLkNvbW1hbmQgPSBuZXcgQ2xhc3Nlcy5Db21tYW5kKHtcclxuXHRuYW1lOiBcImVtb2ppZnlcIixcclxuXHRkZXNjOiBcIkVtb2dpZnkgeW91ciBtZXNzYWdlcyB3aXRoIHJlZ2lvbmFsX2luZGljYXRvcnMhXCIsXHJcblx0dXNhZ2U6IFwiZW1vamlmeSBzZW50ZW5jZTxTdHJpbmc+XCIsXHJcblx0ZXhwOiAvXiFlbW8/aihpZnkpPyAuKyQvbXNpLFxyXG5cdGNhdGVnb3J5OiBcIlV0aWxpdHlcIixcclxuXHRkYXRhOiB7IH0sXHJcblx0Ym9keTogYXN5bmMgZnVuY3Rpb24gYm9keShtZXNzYWdlOiBNZXNzYWdlLCB2YWxlPzogQ2xhc3Nlcy5WYWxlKTogUHJvbWlzZTx2b2lkPiB7XHJcblx0XHRsZXQgbGV0dGVycyA9IG1lc3NhZ2UuY29udGVudC5zcGxpdCgnICcpLnNsaWNlKDEpLmpvaW4oJyAnKS5zcGxpdCgnJyksXHJcblx0XHRcdG91dDogc3RyaW5nID0gJycsXHJcblx0XHRcdHJlcGx5ID0gQ2xhc3Nlcy5mYWlsc2FmZS5iaW5kKG1lc3NhZ2UpO1xyXG5cclxuXHRcdGF3YWl0IGNoaWxsb3V0LmZvckVhY2gobGV0dGVycywgKGxldHRlcjogc3RyaW5nKTogdm9pZCA9PiB7XHJcblx0XHRcdGlmICgvXlthLXpdJC9pLnRlc3QobGV0dGVyKSkge1xyXG5cdFx0XHRcdG91dCArPSBgOnJlZ2lvbmFsX2luZGljYXRvcl8ke2xldHRlci50b0xvd2VyQ2FzZSgpfTpgO1xyXG5cdFx0XHR9IGVsc2UgaWYgKC9eXFxkJC8udGVzdChsZXR0ZXIpKSB7XHJcblx0XHRcdFx0c3dpdGNoIChOdW1iZXIobGV0dGVyKSkge1xyXG5cdFx0XHRcdFx0Y2FzZSAwOlxyXG5cdFx0XHRcdFx0XHRvdXQgKz0gXCI6emVybzpcIjtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0XHRcdG91dCArPSBcIjpvbmU6XCI7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdFx0XHRvdXQgKz0gXCI6dHdvOlwiO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgMzpcclxuXHRcdFx0XHRcdFx0b3V0ICs9IFwiOnRocmVlOlwiO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgNDpcclxuXHRcdFx0XHRcdFx0b3V0ICs9IFwiOmZvdXI6XCI7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSA1OlxyXG5cdFx0XHRcdFx0XHRvdXQgKz0gXCI6Zml2ZTpcIjtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIDY6XHJcblx0XHRcdFx0XHRcdG91dCArPSBcIjpzaXg6XCI7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSA3OlxyXG5cdFx0XHRcdFx0XHRvdXQgKz0gXCI6c2V2ZW46XCI7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSA4OlxyXG5cdFx0XHRcdFx0XHRvdXQgKz0gXCI6ZWlnaHQ6XCI7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSA5OlxyXG5cdFx0XHRcdFx0XHRvdXQgKz0gXCI6bmluZTpcIjtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKGxldHRlciA9PT0gJyEnKSB7XHJcblx0XHRcdFx0b3V0ICs9IFwiOmV4Y2xhbWF0aW9uOlwiO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGxldHRlciA9PT0gJz8nKSB7XHJcblx0XHRcdFx0b3V0ICs9IFwiOnF1ZXN0aW9uOlwiO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGxldHRlciA9PT0gJyMnKSB7XHJcblx0XHRcdFx0b3V0ICs9IFwiOmhhc2g6XCI7XHJcblx0XHRcdH0gZWxzZSBpZiAobGV0dGVyID09PSAnKicpIHtcclxuXHRcdFx0XHRvdXQgKz0gXCI6YXN0ZXJpc2s6XCI7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0b3V0ICs9IGxldHRlcjtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmVwbHkob3V0KTtcclxuXHR9LCAvL2JvZHlcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdCh2YWxlOiBDbGFzc2VzLlZhbGUpOiBQcm9taXNlPENsYXNzZXMuQ29tbWFuZD4ge1xyXG5cdGNvbW1hbmQudXNhZ2UgPSB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIGNvbW1hbmQudXNhZ2U7XHJcblx0Y29tbWFuZC5leHAgPSBuZXcgUmVnRXhwKCdeJyArIHZhbGUub3B0cy5jb25maWcucHJlZml4ICsgXCJlbW8/aihpZnkpPyAuKyRcIiwgXCJtc2lcIik7XHJcblxyXG5cdHJldHVybiBjb21tYW5kO1xyXG59IC8vaW5pdFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcclxuIl19