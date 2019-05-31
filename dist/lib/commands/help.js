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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0FBRWIsOERBQStDO0FBQy9DLDJDQUFtRTtBQUVuRSw0RkFBNEY7QUFFL0UsUUFBQSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQztJQUMxQyxJQUFJLEVBQUUsTUFBTTtJQUNaLElBQUksRUFBRSw4QkFBOEI7SUFDcEMsS0FBSyxFQUFFLHdCQUF3QjtJQUMvQixRQUFRLEVBQUUsU0FBUztJQUNuQixHQUFHLEVBQUUsbUJBQW1CO0lBQ3hCLElBQUksRUFBRSxFQUFHO0lBQ1QsSUFBSSxFQUFFLEtBQUssVUFBVSxJQUFJLENBQUMsT0FBZ0IsRUFBRSxJQUFrQjtRQUM3RCxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUN0RCxHQUFzQixFQUN0QixLQUFLLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXhDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3pCLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUMzQzthQUFNO1lBQ04sWUFBWTtZQUNaLEdBQUcsR0FBc0I7Z0JBQ3hCLFNBQVMsRUFBRSxJQUFJLElBQUksRUFBRTtnQkFDckIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDNUIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7Z0JBQ3ZCLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTO2dCQUNuQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTTthQUM3QixDQUFDO1NBQ0Y7UUFFRCxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFvQixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQW9CLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsUUFBUSxLQUFLLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFvQixFQUFRLEVBQUU7WUFDdlQsSUFBSSxLQUFLLEdBQWMsSUFBSSxzQkFBUyxFQUFFLENBQUM7WUFFdkMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7aUJBQ3ZCLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsZ0NBQWdDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUM7aUJBQ3JHLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7aUJBQ3hDLE1BQU0sQ0FBQyxtQ0FBbUMsQ0FBQztpQkFDM0MsU0FBUyxDQUFDLFdBQVcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7aUJBQ2pGLFlBQVksRUFBRTtpQkFFZCxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUNqQix1REFBdUQ7aUJBQ3RELGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO2lCQUN4QixRQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUM7aUJBQzVCLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQztpQkFDakMsUUFBUSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFcEMsS0FBSyxDQUFDO2dCQUNMLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxJQUFJO2dCQUNWLEtBQUs7YUFDTCxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRCxDQUFDLENBQUM7QUFFSSxLQUFLLFVBQVUsSUFBSSxDQUFDLElBQWtCO0lBQzVDLGVBQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGVBQU8sQ0FBQyxLQUFLLENBQUM7SUFDeEQsZUFBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUVoRixPQUFPLGVBQU8sQ0FBQztBQUNoQixDQUFDLENBQUMsTUFBTTtBQUxSLG9CQUtDO0FBRUQsa0JBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgQ2xhc3NlcywgeyBjaGlsbG91dCB9IGZyb20gXCIuLi9DbGFzc2VzXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIFJpY2hFbWJlZCwgT0F1dGgyQXBwbGljYXRpb24gfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuLy9QZXJoYXBzIGNvbWJpbmUgYWxsIG9jY3VyZW5jZS1zZWFyY2hlcyBpbiBvbmUgYW5kIHNwbGl0IGdlbmVyYWwgaGVscCBzY3JlZW4gdG8gY29kZSBibG9jaz9cclxuXHJcbmV4cG9ydCBjb25zdCBjb21tYW5kID0gbmV3IENsYXNzZXMuQ29tbWFuZCh7XHJcblx0bmFtZTogXCJoZWxwXCIsXHJcblx0ZGVzYzogXCJHZXQgdXNhZ2UgaGVscCBmb3IgYSBjb21tYW5kXCIsXHJcblx0dXNhZ2U6IFwiaGVscFsgY29tbWFuZDxTdHJpbmc+XVwiLFxyXG5cdGNhdGVnb3J5OiBcIlV0aWxpdHlcIixcclxuXHRleHA6IC9eIWhlP2xwKCAuKyk/JC9zbWksXHJcblx0ZGF0YTogeyB9LFxyXG5cdGJvZHk6IGFzeW5jIGZ1bmN0aW9uIGJvZHkobWVzc2FnZTogTWVzc2FnZSwgdmFsZTogQ2xhc3Nlcy5WYWxlKSB7XHJcblx0XHRsZXQgcmVnID0gbWVzc2FnZS5jb250ZW50LnNwbGl0KCcgJykuc2xpY2UoMSkuam9pbignICcpLFxyXG5cdFx0XHRhcHA6IE9BdXRoMkFwcGxpY2F0aW9uLFxyXG5cdFx0XHRyZXBseSA9IENsYXNzZXMuZmFpbHNhZmUuYmluZChtZXNzYWdlKTtcclxuXHRcdFxyXG5cdFx0aWYgKHZhbGUuY2xpZW50LnVzZXIuYm90KSB7XHJcblx0XHRcdGFwcCA9IGF3YWl0IHZhbGUuY2xpZW50LmZldGNoQXBwbGljYXRpb24oKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vQHRzLWlnbm9yZVxyXG5cdFx0XHRhcHAgPSA8T0F1dGgyQXBwbGljYXRpb24+e1xyXG5cdFx0XHRcdGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcclxuXHRcdFx0XHRjcmVhdGVkVGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG5cdFx0XHRcdGJvdFJlcXVpcmVDb2RlR3JhbnQ6IGZhbHNlLFxyXG5cdFx0XHRcdGJvdFB1YmxpYzogZmFsc2UsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwiQSBib3QgbWFkZSBpbiBkaXNjb3JkLmpzXCIsXHJcblx0XHRcdFx0bmFtZTogXCJWYWxlXCIsXHJcblx0XHRcdFx0b3duZXI6IHZhbGUuY2xpZW50LnVzZXIsXHJcblx0XHRcdFx0aWNvblVSTDogdmFsZS5jbGllbnQudXNlci5hdmF0YXJVUkwsXHJcblx0XHRcdFx0aWNvbjogdmFsZS5jbGllbnQudXNlci5hdmF0YXJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Y2hpbGxvdXQuZm9yRWFjaCgobWVzc2FnZS5jb250ZW50LmluY2x1ZGVzKCcgJykgPyBBcnJheS5mcm9tKHZhbGUuY29tbWFuZHMudmFsdWVzKCkpLmZpbHRlcigoY21kOiBDbGFzc2VzLkNvbW1hbmQpID0+IGNtZC5uYW1lLmluY2x1ZGVzKHJlZykpIDogQXJyYXkuZnJvbSh2YWxlLmNvbW1hbmRzLnZhbHVlcygpKSkuZmlsdGVyKChjbWQ6IENsYXNzZXMuQ29tbWFuZCkgPT4gIShtZXNzYWdlLmF1dGhvci5pZCAhPT0gYXBwLm93bmVyLmlkICYmIGNtZC5jYXRlZ29yeSA9PT0gXCJPd25lclwiKSksIChjbWQ6IENsYXNzZXMuQ29tbWFuZCk6IHZvaWQgPT4ge1xyXG5cdFx0XHRsZXQgZW1iZWQ6IFJpY2hFbWJlZCA9IG5ldyBSaWNoRW1iZWQoKTtcclxuXHJcblx0XHRcdGVtYmVkLnNldENvbG9yKFwiUkFORE9NXCIpXHJcblx0XHRcdC5zZXRBdXRob3IoXCJWYWxlM1wiLCB2YWxlLmNsaWVudC51c2VyLmRpc3BsYXlBdmF0YXJVUkwsIGBodHRwczovL2Rpc2NvcmRhcHAuY29tL3VzZXJzLyR7YXBwLm93bmVyLmlkfWApXHJcblx0XHRcdC5zZXRUaHVtYm5haWwodmFsZS5jbGllbnQudXNlci5hdmF0YXJVUkwpXHJcblx0XHRcdC5zZXRVUkwoXCJodHRwczovL2dpdGh1Yi5jb20vVmFsZW4tSC9WYWxlLTNcIilcclxuXHRcdFx0LnNldEZvb3RlcihgTWFkZSBieSAke2FwcC5vd25lci50YWd9LCB3aXRoIGxvdmUhIF5fXmAsIGFwcC5vd25lci5kaXNwbGF5QXZhdGFyVVJMKVxyXG5cdFx0XHQuc2V0VGltZXN0YW1wKClcclxuXHJcblx0XHRcdC5zZXRUaXRsZShcIkhlbHBcIilcclxuXHRcdFx0Ly9lbWJlZC5zZXRJbWFnZSh2YWxlLmNsaWVudC51c2VyLmF2YXRhclVSTCk7IC8vVE9PIEJJR1xyXG5cdFx0XHQuc2V0RGVzY3JpcHRpb24oY21kLm5hbWUpXHJcblx0XHRcdC5hZGRGaWVsZChcIlVzYWdlXCIsIGNtZC51c2FnZSlcclxuXHRcdFx0LmFkZEZpZWxkKFwiRGVzY3JpcHRpb25cIiwgY21kLmRlc2MpXHJcblx0XHRcdC5hZGRGaWVsZChcIkNhdGVnb3J5XCIsIGNtZC5jYXRlZ29yeSk7XHJcblxyXG5cdFx0XHRyZXBseSh7XHJcblx0XHRcdFx0c3BsaXQ6IHRydWUsXHJcblx0XHRcdFx0Y29kZTogXCJqc1wiLFxyXG5cdFx0XHRcdGVtYmVkXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fSwgLy9ib2R5XHJcbn0pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXQodmFsZTogQ2xhc3Nlcy5WYWxlKTogUHJvbWlzZTxDbGFzc2VzLkNvbW1hbmQ+IHtcclxuXHRjb21tYW5kLnVzYWdlID0gdmFsZS5vcHRzLmNvbmZpZy5wcmVmaXggKyBjb21tYW5kLnVzYWdlO1xyXG5cdGNvbW1hbmQuZXhwID0gbmV3IFJlZ0V4cCgnXicgKyB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIFwiaGU/bHAoIC4rKT8kXCIsIFwic21pXCIpO1xyXG5cclxuXHRyZXR1cm4gY29tbWFuZDtcclxufSAvL2luaXRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcbiJdfQ==