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
        (message.content.includes(' ') ? Array.from(vale.commands.values()).filter((cmd) => cmd.name.includes(reg)) : Array.from(vale.commands.values())).filter((cmd) => !(message.author.id !== app.owner.id && cmd.category === "Owner")).forEach((cmd) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0FBRWIsaUVBQWlDO0FBQ2pDLDJDQUFtRTtBQUV0RCxRQUFBLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDO0lBQzFDLElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSSxFQUFFLDhCQUE4QjtJQUNwQyxLQUFLLEVBQUUsd0JBQXdCO0lBQy9CLFFBQVEsRUFBRSxTQUFTO0lBQ25CLEdBQUcsRUFBRSxtQkFBbUI7SUFDeEIsSUFBSSxFQUFFLEVBQUc7SUFDVCxJQUFJLEVBQUUsS0FBSyxVQUFVLElBQUksQ0FBQyxPQUFnQixFQUFFLElBQWtCO1FBQzdELElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQ3RELEdBQXNCLEVBQ3RCLEtBQUssR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDekIsR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzNDO2FBQU07WUFDTixZQUFZO1lBQ1osR0FBRyxHQUFzQjtnQkFDeEIsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFO2dCQUNyQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUM1QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixTQUFTLEVBQUUsS0FBSztnQkFDaEIsV0FBVyxFQUFFLDBCQUEwQjtnQkFDdkMsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtnQkFDdkIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVM7Z0JBQ25DLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNO2FBQzdCLENBQUM7U0FDRjtRQUVELENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQW9CLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBb0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFvQixFQUFFLEVBQUU7WUFDdlMsSUFBSSxLQUFLLEdBQWMsSUFBSSxzQkFBUyxFQUFFLENBQUM7WUFFdkMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7aUJBQ3ZCLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsZ0NBQWdDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUM7aUJBQ3JHLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7aUJBQ3hDLE1BQU0sQ0FBQyxtQ0FBbUMsQ0FBQztpQkFDM0MsU0FBUyxDQUFDLFdBQVcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7aUJBQ2pGLFlBQVksRUFBRTtpQkFFZCxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUNqQix1REFBdUQ7aUJBQ3RELGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO2lCQUN4QixRQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUM7aUJBQzVCLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQztpQkFDakMsUUFBUSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFcEMsS0FBSyxDQUFDO2dCQUNMLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxJQUFJO2dCQUNWLEtBQUs7YUFDTCxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRCxDQUFDLENBQUM7QUFFSSxLQUFLLFVBQVUsSUFBSSxDQUFDLElBQWtCO0lBQzVDLGVBQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGVBQU8sQ0FBQyxLQUFLLENBQUM7SUFDeEQsZUFBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUVoRixPQUFPLGVBQU8sQ0FBQztBQUNoQixDQUFDLENBQUMsTUFBTTtBQUxSLG9CQUtDO0FBRUQsa0JBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgQ2xhc3NlcyBmcm9tIFwiLi4vQ2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBSaWNoRW1iZWQsIE9BdXRoMkFwcGxpY2F0aW9uIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjb21tYW5kID0gbmV3IENsYXNzZXMuQ29tbWFuZCh7XHJcblx0bmFtZTogXCJoZWxwXCIsXHJcblx0ZGVzYzogXCJHZXQgdXNhZ2UgaGVscCBmb3IgYSBjb21tYW5kXCIsXHJcblx0dXNhZ2U6IFwiaGVscFsgY29tbWFuZDxTdHJpbmc+XVwiLFxyXG5cdGNhdGVnb3J5OiBcIlV0aWxpdHlcIixcclxuXHRleHA6IC9eIWhlP2xwKCAuKyk/JC9zbWksXHJcblx0ZGF0YTogeyB9LFxyXG5cdGJvZHk6IGFzeW5jIGZ1bmN0aW9uIGJvZHkobWVzc2FnZTogTWVzc2FnZSwgdmFsZTogQ2xhc3Nlcy5WYWxlKSB7XHJcblx0XHRsZXQgcmVnID0gbWVzc2FnZS5jb250ZW50LnNwbGl0KCcgJykuc2xpY2UoMSkuam9pbignICcpLFxyXG5cdFx0XHRhcHA6IE9BdXRoMkFwcGxpY2F0aW9uLFxyXG5cdFx0XHRyZXBseSA9IENsYXNzZXMuZmFpbHNhZmUuYmluZChtZXNzYWdlKTtcclxuXHRcdFxyXG5cdFx0aWYgKHZhbGUuY2xpZW50LnVzZXIuYm90KSB7XHJcblx0XHRcdGFwcCA9IGF3YWl0IHZhbGUuY2xpZW50LmZldGNoQXBwbGljYXRpb24oKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vQHRzLWlnbm9yZVxyXG5cdFx0XHRhcHAgPSA8T0F1dGgyQXBwbGljYXRpb24+e1xyXG5cdFx0XHRcdGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcclxuXHRcdFx0XHRjcmVhdGVkVGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG5cdFx0XHRcdGJvdFJlcXVpcmVDb2RlR3JhbnQ6IGZhbHNlLFxyXG5cdFx0XHRcdGJvdFB1YmxpYzogZmFsc2UsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwiQSBib3QgbWFkZSBpbiBkaXNjb3JkLmpzXCIsXHJcblx0XHRcdFx0bmFtZTogXCJWYWxlXCIsXHJcblx0XHRcdFx0b3duZXI6IHZhbGUuY2xpZW50LnVzZXIsXHJcblx0XHRcdFx0aWNvblVSTDogdmFsZS5jbGllbnQudXNlci5hdmF0YXJVUkwsXHJcblx0XHRcdFx0aWNvbjogdmFsZS5jbGllbnQudXNlci5hdmF0YXJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0KG1lc3NhZ2UuY29udGVudC5pbmNsdWRlcygnICcpID8gQXJyYXkuZnJvbSh2YWxlLmNvbW1hbmRzLnZhbHVlcygpKS5maWx0ZXIoKGNtZDogQ2xhc3Nlcy5Db21tYW5kKSA9PiBjbWQubmFtZS5pbmNsdWRlcyhyZWcpKSA6IEFycmF5LmZyb20odmFsZS5jb21tYW5kcy52YWx1ZXMoKSkpLmZpbHRlcigoY21kOiBDbGFzc2VzLkNvbW1hbmQpID0+ICEobWVzc2FnZS5hdXRob3IuaWQgIT09IGFwcC5vd25lci5pZCAmJiBjbWQuY2F0ZWdvcnkgPT09IFwiT3duZXJcIikpLmZvckVhY2goKGNtZDogQ2xhc3Nlcy5Db21tYW5kKSA9PiB7XHJcblx0XHRcdGxldCBlbWJlZDogUmljaEVtYmVkID0gbmV3IFJpY2hFbWJlZCgpO1xyXG5cclxuXHRcdFx0ZW1iZWQuc2V0Q29sb3IoXCJSQU5ET01cIilcclxuXHRcdFx0LnNldEF1dGhvcihcIlZhbGUzXCIsIHZhbGUuY2xpZW50LnVzZXIuZGlzcGxheUF2YXRhclVSTCwgYGh0dHBzOi8vZGlzY29yZGFwcC5jb20vdXNlcnMvJHthcHAub3duZXIuaWR9YClcclxuXHRcdFx0LnNldFRodW1ibmFpbCh2YWxlLmNsaWVudC51c2VyLmF2YXRhclVSTClcclxuXHRcdFx0LnNldFVSTChcImh0dHBzOi8vZ2l0aHViLmNvbS9WYWxlbi1IL1ZhbGUtM1wiKVxyXG5cdFx0XHQuc2V0Rm9vdGVyKGBNYWRlIGJ5ICR7YXBwLm93bmVyLnRhZ30sIHdpdGggbG92ZSEgXl9eYCwgYXBwLm93bmVyLmRpc3BsYXlBdmF0YXJVUkwpXHJcblx0XHRcdC5zZXRUaW1lc3RhbXAoKVxyXG5cclxuXHRcdFx0LnNldFRpdGxlKFwiSGVscFwiKVxyXG5cdFx0XHQvL2VtYmVkLnNldEltYWdlKHZhbGUuY2xpZW50LnVzZXIuYXZhdGFyVVJMKTsgLy9UT08gQklHXHJcblx0XHRcdC5zZXREZXNjcmlwdGlvbihjbWQubmFtZSlcclxuXHRcdFx0LmFkZEZpZWxkKFwiVXNhZ2VcIiwgY21kLnVzYWdlKVxyXG5cdFx0XHQuYWRkRmllbGQoXCJEZXNjcmlwdGlvblwiLCBjbWQuZGVzYylcclxuXHRcdFx0LmFkZEZpZWxkKFwiQ2F0ZWdvcnlcIiwgY21kLmNhdGVnb3J5KTtcclxuXHJcblx0XHRcdHJlcGx5KHtcclxuXHRcdFx0XHRzcGxpdDogdHJ1ZSxcclxuXHRcdFx0XHRjb2RlOiBcImpzXCIsXHJcblx0XHRcdFx0ZW1iZWRcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9LCAvL2JvZHlcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdCh2YWxlOiBDbGFzc2VzLlZhbGUpIHtcclxuXHRjb21tYW5kLnVzYWdlID0gdmFsZS5vcHRzLmNvbmZpZy5wcmVmaXggKyBjb21tYW5kLnVzYWdlO1xyXG5cdGNvbW1hbmQuZXhwID0gbmV3IFJlZ0V4cCgnXicgKyB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIFwiaGU/bHAoIC4rKT8kXCIsIFwic21pXCIpO1xyXG5cclxuXHRyZXR1cm4gY29tbWFuZDtcclxufSAvL2luaXRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcbiJdfQ==