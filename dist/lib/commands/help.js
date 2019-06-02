"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Classes_1 = tslib_1.__importStar(require("../Classes"));
const discord_js_1 = require("discord.js");
//Perhaps combine all occurence-searches in one and split general help screen to code block?
exports.command = new Classes_1.default.Command({
    name: "help",
    desc: "Get usage help for a command",
    usage: "help[ command<String>]",
    category: "Utility",
    exp: /^!he?lp( .+)?$/smi,
    data: {},
    body: async function body(message, vale) {
        let reg = message.content.split(' ').slice(1).join(' '), app, reply = Classes_1.default.failsafe.bind(message);
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
        Classes_1.chillout.forEach((message.content.includes(' ') ? Array.from(vale.commands.values()).filter((cmd) => cmd.name.includes(reg)) : Array.from(vale.commands.values())).filter((cmd) => !(message.author.id !== app.owner.id && cmd.category === "Owner")), (cmd) => {
            let embed = new discord_js_1.RichEmbed();
            embed.setColor("RANDOM")
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
            reply({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0FBRWIsOERBQStDO0FBQy9DLDJDQUFtRTtBQUVuRSw0RkFBNEY7QUFFL0UsUUFBQSxPQUFPLEdBQW9CLElBQUksaUJBQU8sQ0FBQyxPQUFPLENBQUM7SUFDM0QsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsOEJBQThCO0lBQ3BDLEtBQUssRUFBRSx3QkFBd0I7SUFDL0IsUUFBUSxFQUFFLFNBQVM7SUFDbkIsR0FBRyxFQUFFLG1CQUFtQjtJQUN4QixJQUFJLEVBQUUsRUFBRztJQUNULElBQUksRUFBRSxLQUFLLFVBQVUsSUFBSSxDQUFDLE9BQWdCLEVBQUUsSUFBa0I7UUFDN0QsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFDdEQsR0FBc0IsRUFDdEIsS0FBSyxHQUFHLGlCQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV4QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUN6QixHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDM0M7YUFBTTtZQUNOLFlBQVk7WUFDWixHQUFHLEdBQXNCO2dCQUN4QixTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUU7Z0JBQ3JCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQzVCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO2dCQUN2QixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUztnQkFDbkMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07YUFDN0IsQ0FBQztTQUNGO1FBRUQsa0JBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBb0IsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFvQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLFFBQVEsS0FBSyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBb0IsRUFBUSxFQUFFO1lBQ3ZULElBQUksS0FBSyxHQUFjLElBQUksc0JBQVMsRUFBRSxDQUFDO1lBRXZDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO2lCQUN2QixTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLGdDQUFnQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDO2lCQUNyRyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2lCQUN4QyxNQUFNLENBQUMsbUNBQW1DLENBQUM7aUJBQzNDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO2lCQUNqRixZQUFZLEVBQUU7aUJBRWQsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDakIsdURBQXVEO2lCQUN0RCxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztpQkFDeEIsUUFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDO2lCQUM1QixRQUFRLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUM7aUJBQ2pDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXBDLEtBQUssQ0FBQztnQkFDTCxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsSUFBSTtnQkFDVixLQUFLO2FBQ0wsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0QsQ0FBQyxDQUFDO0FBRUksS0FBSyxVQUFVLElBQUksQ0FBQyxJQUFrQjtJQUM1QyxlQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxlQUFPLENBQUMsS0FBSyxDQUFDO0lBQ3hELGVBQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFaEYsT0FBTyxlQUFPLENBQUM7QUFDaEIsQ0FBQyxDQUFDLE1BQU07QUFMUixvQkFLQztBQUVELGtCQUFlLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IENsYXNzZXMsIHsgY2hpbGxvdXQgfSBmcm9tIFwiLi4vQ2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBSaWNoRW1iZWQsIE9BdXRoMkFwcGxpY2F0aW9uIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuXHJcbi8vUGVyaGFwcyBjb21iaW5lIGFsbCBvY2N1cmVuY2Utc2VhcmNoZXMgaW4gb25lIGFuZCBzcGxpdCBnZW5lcmFsIGhlbHAgc2NyZWVuIHRvIGNvZGUgYmxvY2s/XHJcblxyXG5leHBvcnQgY29uc3QgY29tbWFuZDogQ2xhc3Nlcy5Db21tYW5kID0gbmV3IENsYXNzZXMuQ29tbWFuZCh7XHJcblx0bmFtZTogXCJoZWxwXCIsXHJcblx0ZGVzYzogXCJHZXQgdXNhZ2UgaGVscCBmb3IgYSBjb21tYW5kXCIsXHJcblx0dXNhZ2U6IFwiaGVscFsgY29tbWFuZDxTdHJpbmc+XVwiLFxyXG5cdGNhdGVnb3J5OiBcIlV0aWxpdHlcIixcclxuXHRleHA6IC9eIWhlP2xwKCAuKyk/JC9zbWksXHJcblx0ZGF0YTogeyB9LFxyXG5cdGJvZHk6IGFzeW5jIGZ1bmN0aW9uIGJvZHkobWVzc2FnZTogTWVzc2FnZSwgdmFsZTogQ2xhc3Nlcy5WYWxlKTogUHJvbWlzZTx2b2lkPiB7XHJcblx0XHRsZXQgcmVnID0gbWVzc2FnZS5jb250ZW50LnNwbGl0KCcgJykuc2xpY2UoMSkuam9pbignICcpLFxyXG5cdFx0XHRhcHA6IE9BdXRoMkFwcGxpY2F0aW9uLFxyXG5cdFx0XHRyZXBseSA9IENsYXNzZXMuZmFpbHNhZmUuYmluZChtZXNzYWdlKTtcclxuXHRcdFxyXG5cdFx0aWYgKHZhbGUuY2xpZW50LnVzZXIuYm90KSB7XHJcblx0XHRcdGFwcCA9IGF3YWl0IHZhbGUuY2xpZW50LmZldGNoQXBwbGljYXRpb24oKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vQHRzLWlnbm9yZVxyXG5cdFx0XHRhcHAgPSA8T0F1dGgyQXBwbGljYXRpb24+e1xyXG5cdFx0XHRcdGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcclxuXHRcdFx0XHRjcmVhdGVkVGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG5cdFx0XHRcdGJvdFJlcXVpcmVDb2RlR3JhbnQ6IGZhbHNlLFxyXG5cdFx0XHRcdGJvdFB1YmxpYzogZmFsc2UsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwiQSBib3QgbWFkZSBpbiBkaXNjb3JkLmpzXCIsXHJcblx0XHRcdFx0bmFtZTogXCJWYWxlXCIsXHJcblx0XHRcdFx0b3duZXI6IHZhbGUuY2xpZW50LnVzZXIsXHJcblx0XHRcdFx0aWNvblVSTDogdmFsZS5jbGllbnQudXNlci5hdmF0YXJVUkwsXHJcblx0XHRcdFx0aWNvbjogdmFsZS5jbGllbnQudXNlci5hdmF0YXJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Y2hpbGxvdXQuZm9yRWFjaCgobWVzc2FnZS5jb250ZW50LmluY2x1ZGVzKCcgJykgPyBBcnJheS5mcm9tKHZhbGUuY29tbWFuZHMudmFsdWVzKCkpLmZpbHRlcigoY21kOiBDbGFzc2VzLkNvbW1hbmQpID0+IGNtZC5uYW1lLmluY2x1ZGVzKHJlZykpIDogQXJyYXkuZnJvbSh2YWxlLmNvbW1hbmRzLnZhbHVlcygpKSkuZmlsdGVyKChjbWQ6IENsYXNzZXMuQ29tbWFuZCkgPT4gIShtZXNzYWdlLmF1dGhvci5pZCAhPT0gYXBwLm93bmVyLmlkICYmIGNtZC5jYXRlZ29yeSA9PT0gXCJPd25lclwiKSksIChjbWQ6IENsYXNzZXMuQ29tbWFuZCk6IHZvaWQgPT4ge1xyXG5cdFx0XHRsZXQgZW1iZWQ6IFJpY2hFbWJlZCA9IG5ldyBSaWNoRW1iZWQoKTtcclxuXHJcblx0XHRcdGVtYmVkLnNldENvbG9yKFwiUkFORE9NXCIpXHJcblx0XHRcdC5zZXRBdXRob3IoXCJWYWxlM1wiLCB2YWxlLmNsaWVudC51c2VyLmRpc3BsYXlBdmF0YXJVUkwsIGBodHRwczovL2Rpc2NvcmRhcHAuY29tL3VzZXJzLyR7YXBwLm93bmVyLmlkfWApXHJcblx0XHRcdC5zZXRUaHVtYm5haWwodmFsZS5jbGllbnQudXNlci5hdmF0YXJVUkwpXHJcblx0XHRcdC5zZXRVUkwoXCJodHRwczovL2dpdGh1Yi5jb20vVmFsZW4tSC9WYWxlLTNcIilcclxuXHRcdFx0LnNldEZvb3RlcihgTWFkZSBieSAke2FwcC5vd25lci50YWd9LCB3aXRoIGxvdmUhIF5fXmAsIGFwcC5vd25lci5kaXNwbGF5QXZhdGFyVVJMKVxyXG5cdFx0XHQuc2V0VGltZXN0YW1wKClcclxuXHJcblx0XHRcdC5zZXRUaXRsZShcIkhlbHBcIilcclxuXHRcdFx0Ly9lbWJlZC5zZXRJbWFnZSh2YWxlLmNsaWVudC51c2VyLmF2YXRhclVSTCk7IC8vVE9PIEJJR1xyXG5cdFx0XHQuc2V0RGVzY3JpcHRpb24oY21kLm5hbWUpXHJcblx0XHRcdC5hZGRGaWVsZChcIlVzYWdlXCIsIGNtZC51c2FnZSlcclxuXHRcdFx0LmFkZEZpZWxkKFwiRGVzY3JpcHRpb25cIiwgY21kLmRlc2MpXHJcblx0XHRcdC5hZGRGaWVsZChcIkNhdGVnb3J5XCIsIGNtZC5jYXRlZ29yeSk7XHJcblxyXG5cdFx0XHRyZXBseSh7XHJcblx0XHRcdFx0c3BsaXQ6IHRydWUsXHJcblx0XHRcdFx0Y29kZTogXCJqc1wiLFxyXG5cdFx0XHRcdGVtYmVkXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fSwgLy9ib2R5XHJcbn0pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXQodmFsZTogQ2xhc3Nlcy5WYWxlKTogUHJvbWlzZTxDbGFzc2VzLkNvbW1hbmQ+IHtcclxuXHRjb21tYW5kLnVzYWdlID0gdmFsZS5vcHRzLmNvbmZpZy5wcmVmaXggKyBjb21tYW5kLnVzYWdlO1xyXG5cdGNvbW1hbmQuZXhwID0gbmV3IFJlZ0V4cCgnXicgKyB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIFwiaGU/bHAoIC4rKT8kXCIsIFwic21pXCIpO1xyXG5cclxuXHRyZXR1cm4gY29tbWFuZDtcclxufSAvL2luaXRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcbiJdfQ==