"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Classes_1 = tslib_1.__importDefault(require("../Classes"));
const discord_js_1 = require("discord.js");
exports.command = new Classes_1.default.Command({
    name: "help",
    desc: "Get usage help for a command",
    usage: "help[ command<String>]",
    category: "Utility",
    exp: /^!he?lp( .+)?$/smi,
    body: async function body(message, vale) {
        let reg = message.content.split(' ').slice(1).join(' '), app;
        if (vale.client.user.bot) {
            app = await vale.client.fetchApplication();
        }
        else {
            //@ts-ignore
            app = {
                createdAt: new Date(),
                createdTimestamp: Date.now(),
                botRequireCodeGrant: false,
                botPublic: false,
                description: "A bot made in discord.js",
                name: "Vale",
                owner: vale.client.user,
                iconURL: vale.client.user.avatarURL,
                icon: vale.client.user.avatar
            };
        }
        (message.content.includes(' ') ? Array.from(vale.commands.values()).filter((cmd) => cmd.name.includes(reg)) : Array.from(vale.commands.values())).filter((cmd) => {
            if (message.author.id !== app.owner.id && cmd.category === "Owner") {
                return false;
            }
            else {
                return true;
            }
        }).forEach((cmd) => {
            let embed = new discord_js_1.RichEmbed();
            embed.setColor('#' + Math.round(Math.random() * (255 ** 3)).toString(16))
                .setAuthor("Vale3", vale.client.user.displayAvatarURL, `https://discordapp.com/users/${app.owner.id}`)
                .setThumbnail(vale.client.user.avatarURL)
                .setURL("https://github.com/Valen-H/Vale-3")
                .setFooter(`Made by ${app.owner.tag}, with love! ^_^`, app.owner.displayAvatarURL)
                .setTimestamp()
                .setTitle("Help")
                //embed.setImage(vale.client.user.avatarURL); //TOO BIG
                .setDescription(cmd.name)
                .addField("Usage", cmd.usage)
                .addField("Description", cmd.desc)
                .addField("Category", cmd.category);
            message.reply({
                split: true,
                code: "js",
                embed
            });
        });
    },
});
async function init(vale) {
    exports.command.usage = vale.opts.config.prefix + exports.command.usage;
    exports.command.exp = new RegExp('^' + vale.opts.config.prefix + "he?lp( .+)?$", "smi");
    return exports.command;
} //init
exports.init = init;
exports.default = init;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0FBRWIsaUVBQWlDO0FBQ2pDLDJDQUFtRTtBQUV0RCxRQUFBLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDO0lBQzFDLElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSSxFQUFFLDhCQUE4QjtJQUNwQyxLQUFLLEVBQUUsd0JBQXdCO0lBQy9CLFFBQVEsRUFBRSxTQUFTO0lBQ25CLEdBQUcsRUFBRSxtQkFBbUI7SUFDeEIsSUFBSSxFQUFFLEtBQUssVUFBVSxJQUFJLENBQUMsT0FBZ0IsRUFBRSxJQUFrQjtRQUM3RCxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUN0RCxHQUFzQixDQUFDO1FBRXhCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3pCLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUMzQzthQUFNO1lBQ04sWUFBWTtZQUNaLEdBQUcsR0FBc0I7Z0JBQ3hCLFNBQVMsRUFBRSxJQUFJLElBQUksRUFBRTtnQkFDckIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDNUIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7Z0JBQ3ZCLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTO2dCQUNuQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTTthQUM3QixDQUFDO1NBQ0Y7UUFFRCxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFvQixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQW9CLEVBQUUsRUFBRTtZQUNsTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxRQUFRLEtBQUssT0FBTyxFQUFFO2dCQUNuRSxPQUFPLEtBQUssQ0FBQzthQUNiO2lCQUFNO2dCQUNOLE9BQU8sSUFBSSxDQUFDO2FBQ1o7UUFDRixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFvQixFQUFFLEVBQUU7WUFDbkMsSUFBSSxLQUFLLEdBQWMsSUFBSSxzQkFBUyxFQUFFLENBQUM7WUFFdkMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ3hFLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsZ0NBQWdDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUM7aUJBQ3JHLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7aUJBQ3hDLE1BQU0sQ0FBQyxtQ0FBbUMsQ0FBQztpQkFDM0MsU0FBUyxDQUFDLFdBQVcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7aUJBQ2pGLFlBQVksRUFBRTtpQkFFZCxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUNqQix1REFBdUQ7aUJBQ3RELGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO2lCQUN4QixRQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUM7aUJBQzVCLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQztpQkFDakMsUUFBUSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFcEMsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDYixLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsSUFBSTtnQkFDVixLQUFLO2FBQ0wsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0QsQ0FBQyxDQUFDO0FBRUksS0FBSyxVQUFVLElBQUksQ0FBQyxJQUFrQjtJQUM1QyxlQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxlQUFPLENBQUMsS0FBSyxDQUFDO0lBQ3hELGVBQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFaEYsT0FBTyxlQUFPLENBQUM7QUFDaEIsQ0FBQyxDQUFDLE1BQU07QUFMUixvQkFLQztBQUVELGtCQUFlLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IENsYXNzZXMgZnJvbSBcIi4uL0NsYXNzZXNcIjtcclxuaW1wb3J0IHsgTWVzc2FnZSwgUmljaEVtYmVkLCBPQXV0aDJBcHBsaWNhdGlvbiB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29tbWFuZCA9IG5ldyBDbGFzc2VzLkNvbW1hbmQoe1xyXG5cdG5hbWU6IFwiaGVscFwiLFxyXG5cdGRlc2M6IFwiR2V0IHVzYWdlIGhlbHAgZm9yIGEgY29tbWFuZFwiLFxyXG5cdHVzYWdlOiBcImhlbHBbIGNvbW1hbmQ8U3RyaW5nPl1cIixcclxuXHRjYXRlZ29yeTogXCJVdGlsaXR5XCIsXHJcblx0ZXhwOiAvXiFoZT9scCggLispPyQvc21pLFxyXG5cdGJvZHk6IGFzeW5jIGZ1bmN0aW9uIGJvZHkobWVzc2FnZTogTWVzc2FnZSwgdmFsZTogQ2xhc3Nlcy5WYWxlKSB7XHJcblx0XHRsZXQgcmVnID0gbWVzc2FnZS5jb250ZW50LnNwbGl0KCcgJykuc2xpY2UoMSkuam9pbignICcpLFxyXG5cdFx0XHRhcHA6IE9BdXRoMkFwcGxpY2F0aW9uO1xyXG5cdFx0XHJcblx0XHRpZiAodmFsZS5jbGllbnQudXNlci5ib3QpIHtcclxuXHRcdFx0YXBwID0gYXdhaXQgdmFsZS5jbGllbnQuZmV0Y2hBcHBsaWNhdGlvbigpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly9AdHMtaWdub3JlXHJcblx0XHRcdGFwcCA9IDxPQXV0aDJBcHBsaWNhdGlvbj57XHJcblx0XHRcdFx0Y3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG5cdFx0XHRcdGNyZWF0ZWRUaW1lc3RhbXA6IERhdGUubm93KCksXHJcblx0XHRcdFx0Ym90UmVxdWlyZUNvZGVHcmFudDogZmFsc2UsXHJcblx0XHRcdFx0Ym90UHVibGljOiBmYWxzZSxcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJBIGJvdCBtYWRlIGluIGRpc2NvcmQuanNcIixcclxuXHRcdFx0XHRuYW1lOiBcIlZhbGVcIixcclxuXHRcdFx0XHRvd25lcjogdmFsZS5jbGllbnQudXNlcixcclxuXHRcdFx0XHRpY29uVVJMOiB2YWxlLmNsaWVudC51c2VyLmF2YXRhclVSTCxcclxuXHRcdFx0XHRpY29uOiB2YWxlLmNsaWVudC51c2VyLmF2YXRhclxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQobWVzc2FnZS5jb250ZW50LmluY2x1ZGVzKCcgJykgPyBBcnJheS5mcm9tKHZhbGUuY29tbWFuZHMudmFsdWVzKCkpLmZpbHRlcigoY21kOiBDbGFzc2VzLkNvbW1hbmQpID0+IGNtZC5uYW1lLmluY2x1ZGVzKHJlZykpIDogQXJyYXkuZnJvbSh2YWxlLmNvbW1hbmRzLnZhbHVlcygpKSkuZmlsdGVyKChjbWQ6IENsYXNzZXMuQ29tbWFuZCkgPT4ge1xyXG5cdFx0XHRpZiAobWVzc2FnZS5hdXRob3IuaWQgIT09IGFwcC5vd25lci5pZCAmJiBjbWQuY2F0ZWdvcnkgPT09IFwiT3duZXJcIikge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSkuZm9yRWFjaCgoY21kOiBDbGFzc2VzLkNvbW1hbmQpID0+IHtcclxuXHRcdFx0bGV0IGVtYmVkOiBSaWNoRW1iZWQgPSBuZXcgUmljaEVtYmVkKCk7XHJcblxyXG5cdFx0XHRlbWJlZC5zZXRDb2xvcignIycgKyBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoMjU1ICoqIDMpKS50b1N0cmluZygxNikpXHJcblx0XHRcdC5zZXRBdXRob3IoXCJWYWxlM1wiLCB2YWxlLmNsaWVudC51c2VyLmRpc3BsYXlBdmF0YXJVUkwsIGBodHRwczovL2Rpc2NvcmRhcHAuY29tL3VzZXJzLyR7YXBwLm93bmVyLmlkfWApXHJcblx0XHRcdC5zZXRUaHVtYm5haWwodmFsZS5jbGllbnQudXNlci5hdmF0YXJVUkwpXHJcblx0XHRcdC5zZXRVUkwoXCJodHRwczovL2dpdGh1Yi5jb20vVmFsZW4tSC9WYWxlLTNcIilcclxuXHRcdFx0LnNldEZvb3RlcihgTWFkZSBieSAke2FwcC5vd25lci50YWd9LCB3aXRoIGxvdmUhIF5fXmAsIGFwcC5vd25lci5kaXNwbGF5QXZhdGFyVVJMKVxyXG5cdFx0XHQuc2V0VGltZXN0YW1wKClcclxuXHJcblx0XHRcdC5zZXRUaXRsZShcIkhlbHBcIilcclxuXHRcdFx0Ly9lbWJlZC5zZXRJbWFnZSh2YWxlLmNsaWVudC51c2VyLmF2YXRhclVSTCk7IC8vVE9PIEJJR1xyXG5cdFx0XHQuc2V0RGVzY3JpcHRpb24oY21kLm5hbWUpXHJcblx0XHRcdC5hZGRGaWVsZChcIlVzYWdlXCIsIGNtZC51c2FnZSlcclxuXHRcdFx0LmFkZEZpZWxkKFwiRGVzY3JpcHRpb25cIiwgY21kLmRlc2MpXHJcblx0XHRcdC5hZGRGaWVsZChcIkNhdGVnb3J5XCIsIGNtZC5jYXRlZ29yeSk7XHJcblxyXG5cdFx0XHRtZXNzYWdlLnJlcGx5KHtcclxuXHRcdFx0XHRzcGxpdDogdHJ1ZSxcclxuXHRcdFx0XHRjb2RlOiBcImpzXCIsXHJcblx0XHRcdFx0ZW1iZWRcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9LCAvL2JvZHlcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdCh2YWxlOiBDbGFzc2VzLlZhbGUpIHtcclxuXHRjb21tYW5kLnVzYWdlID0gdmFsZS5vcHRzLmNvbmZpZy5wcmVmaXggKyBjb21tYW5kLnVzYWdlO1xyXG5cdGNvbW1hbmQuZXhwID0gbmV3IFJlZ0V4cCgnXicgKyB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIFwiaGU/bHAoIC4rKT8kXCIsIFwic21pXCIpO1xyXG5cclxuXHRyZXR1cm4gY29tbWFuZDtcclxufSAvL2luaXRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcbiJdfQ==