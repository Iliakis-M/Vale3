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
        let arr = (message.content.includes(' ') ? Array.from(vale.commands.values()).filter((cmd) => cmd.name.includes(reg)) : Array.from(vale.commands.values())) //reaction pagination(?)
            .filter((cmd) => !(message.author.id !== app.owner.id && cmd.category === "Owner"));
        if (arr.length === 0)
            reply("No results found!");
        Classes_1.chillout.forEach(arr, (cmd) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0FBRWIsOERBQStDO0FBQy9DLDJDQUFtRTtBQUVuRSw0RkFBNEY7QUFFL0UsUUFBQSxPQUFPLEdBQW9CLElBQUksaUJBQU8sQ0FBQyxPQUFPLENBQUM7SUFDM0QsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsOEJBQThCO0lBQ3BDLEtBQUssRUFBRSx3QkFBd0I7SUFDL0IsUUFBUSxFQUFFLFNBQVM7SUFDbkIsR0FBRyxFQUFFLG1CQUFtQjtJQUN4QixJQUFJLEVBQUUsRUFBRztJQUNULElBQUksRUFBRSxLQUFLLFVBQVUsSUFBSSxDQUFDLE9BQWdCLEVBQUUsSUFBa0I7UUFDN0QsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFDdEQsR0FBc0IsRUFDdEIsS0FBSyxHQUFHLGlCQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV4QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUN6QixHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDM0M7YUFBTTtZQUNOLFlBQVk7WUFDWixHQUFHLEdBQXNCO2dCQUN4QixTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUU7Z0JBQ3JCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQzVCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxJQUFJLEVBQUUsTUFBTTtnQkFDWixL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OlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgQ2xhc3NlcywgeyBjaGlsbG91dCB9IGZyb20gXCIuLi9DbGFzc2VzXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIFJpY2hFbWJlZCwgT0F1dGgyQXBwbGljYXRpb24gfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuLy9QZXJoYXBzIGNvbWJpbmUgYWxsIG9jY3VyZW5jZS1zZWFyY2hlcyBpbiBvbmUgYW5kIHNwbGl0IGdlbmVyYWwgaGVscCBzY3JlZW4gdG8gY29kZSBibG9jaz9cclxuXHJcbmV4cG9ydCBjb25zdCBjb21tYW5kOiBDbGFzc2VzLkNvbW1hbmQgPSBuZXcgQ2xhc3Nlcy5Db21tYW5kKHtcclxuXHRuYW1lOiBcImhlbHBcIixcclxuXHRkZXNjOiBcIkdldCB1c2FnZSBoZWxwIGZvciBhIGNvbW1hbmRcIixcclxuXHR1c2FnZTogXCJoZWxwWyBjb21tYW5kPFN0cmluZz5dXCIsXHJcblx0Y2F0ZWdvcnk6IFwiVXRpbGl0eVwiLFxyXG5cdGV4cDogL14haGU/bHAoIC4rKT8kL3NtaSxcclxuXHRkYXRhOiB7IH0sXHJcblx0Ym9keTogYXN5bmMgZnVuY3Rpb24gYm9keShtZXNzYWdlOiBNZXNzYWdlLCB2YWxlOiBDbGFzc2VzLlZhbGUpOiBQcm9taXNlPHZvaWQ+IHtcclxuXHRcdGxldCByZWcgPSBtZXNzYWdlLmNvbnRlbnQuc3BsaXQoJyAnKS5zbGljZSgxKS5qb2luKCcgJyksXHJcblx0XHRcdGFwcDogT0F1dGgyQXBwbGljYXRpb24sXHJcblx0XHRcdHJlcGx5ID0gQ2xhc3Nlcy5mYWlsc2FmZS5iaW5kKG1lc3NhZ2UpO1xyXG5cdFx0XHJcblx0XHRpZiAodmFsZS5jbGllbnQudXNlci5ib3QpIHtcclxuXHRcdFx0YXBwID0gYXdhaXQgdmFsZS5jbGllbnQuZmV0Y2hBcHBsaWNhdGlvbigpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly9AdHMtaWdub3JlXHJcblx0XHRcdGFwcCA9IDxPQXV0aDJBcHBsaWNhdGlvbj57XHJcblx0XHRcdFx0Y3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG5cdFx0XHRcdGNyZWF0ZWRUaW1lc3RhbXA6IERhdGUubm93KCksXHJcblx0XHRcdFx0Ym90UmVxdWlyZUNvZGVHcmFudDogZmFsc2UsXHJcblx0XHRcdFx0Ym90UHVibGljOiBmYWxzZSxcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJBIGJvdCBtYWRlIGluIGRpc2NvcmQuanNcIixcclxuXHRcdFx0XHRuYW1lOiBcIlZhbGVcIixcclxuXHRcdFx0XHRvd25lcjogdmFsZS5jbGllbnQudXNlcixcclxuXHRcdFx0XHRpY29uVVJMOiB2YWxlLmNsaWVudC51c2VyLmF2YXRhclVSTCxcclxuXHRcdFx0XHRpY29uOiB2YWxlLmNsaWVudC51c2VyLmF2YXRhclxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBhcnI6IENsYXNzZXMuQ29tbWFuZFtdID0gKG1lc3NhZ2UuY29udGVudC5pbmNsdWRlcygnICcpID8gQXJyYXkuZnJvbSh2YWxlLmNvbW1hbmRzLnZhbHVlcygpKS5maWx0ZXIoKGNtZDogQ2xhc3Nlcy5Db21tYW5kKSA9PiBjbWQubmFtZS5pbmNsdWRlcyhyZWcpKSA6IEFycmF5LmZyb20odmFsZS5jb21tYW5kcy52YWx1ZXMoKSkpICAvL3JlYWN0aW9uIHBhZ2luYXRpb24oPylcclxuXHRcdFx0LmZpbHRlcigoY21kOiBDbGFzc2VzLkNvbW1hbmQpID0+ICEobWVzc2FnZS5hdXRob3IuaWQgIT09IGFwcC5vd25lci5pZCAmJiBjbWQuY2F0ZWdvcnkgPT09IFwiT3duZXJcIikpO1xyXG5cclxuXHRcdGlmIChhcnIubGVuZ3RoID09PSAwKSByZXBseShcIk5vIHJlc3VsdHMgZm91bmQhXCIpO1xyXG5cdFx0XHJcblx0XHRjaGlsbG91dC5mb3JFYWNoKGFyciwgKGNtZDogQ2xhc3Nlcy5Db21tYW5kKTogdm9pZCA9PiB7XHJcblx0XHRcdGxldCBlbWJlZDogUmljaEVtYmVkID0gbmV3IFJpY2hFbWJlZCgpO1xyXG5cclxuXHRcdFx0ZW1iZWQuc2V0Q29sb3IoXCJSQU5ET01cIilcclxuXHRcdFx0LnNldEF1dGhvcihcIlZhbGUzXCIsIHZhbGUuY2xpZW50LnVzZXIuZGlzcGxheUF2YXRhclVSTCwgYGh0dHBzOi8vZGlzY29yZGFwcC5jb20vdXNlcnMvJHthcHAub3duZXIuaWR9YClcclxuXHRcdFx0LnNldFRodW1ibmFpbCh2YWxlLmNsaWVudC51c2VyLmF2YXRhclVSTClcclxuXHRcdFx0LnNldFVSTChcImh0dHBzOi8vZ2l0aHViLmNvbS9WYWxlbi1IL1ZhbGUtM1wiKVxyXG5cdFx0XHQuc2V0Rm9vdGVyKGBNYWRlIGJ5ICR7YXBwLm93bmVyLnRhZ30sIHdpdGggbG92ZSEgXl9eYCwgYXBwLm93bmVyLmRpc3BsYXlBdmF0YXJVUkwpXHJcblx0XHRcdC5zZXRUaW1lc3RhbXAoKVxyXG5cclxuXHRcdFx0LnNldFRpdGxlKFwiSGVscFwiKVxyXG5cdFx0XHQvL2VtYmVkLnNldEltYWdlKHZhbGUuY2xpZW50LnVzZXIuYXZhdGFyVVJMKTsgLy9UT08gQklHXHJcblx0XHRcdC5zZXREZXNjcmlwdGlvbihjbWQubmFtZSlcclxuXHRcdFx0LmFkZEZpZWxkKFwiVXNhZ2VcIiwgY21kLnVzYWdlKVxyXG5cdFx0XHQuYWRkRmllbGQoXCJEZXNjcmlwdGlvblwiLCBjbWQuZGVzYylcclxuXHRcdFx0LmFkZEZpZWxkKFwiQ2F0ZWdvcnlcIiwgY21kLmNhdGVnb3J5KTtcclxuXHJcblx0XHRcdHJlcGx5KHtcclxuXHRcdFx0XHRzcGxpdDogdHJ1ZSxcclxuXHRcdFx0XHRjb2RlOiBcImpzXCIsXHJcblx0XHRcdFx0ZW1iZWRcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9LCAvL2JvZHlcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdCh2YWxlOiBDbGFzc2VzLlZhbGUpOiBQcm9taXNlPENsYXNzZXMuQ29tbWFuZD4ge1xyXG5cdGNvbW1hbmQudXNhZ2UgPSB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIGNvbW1hbmQudXNhZ2U7XHJcblx0Y29tbWFuZC5leHAgPSBuZXcgUmVnRXhwKCdeJyArIHZhbGUub3B0cy5jb25maWcucHJlZml4ICsgXCJoZT9scCggLispPyRcIiwgXCJzbWlcIik7XHJcblxyXG5cdHJldHVybiBjb21tYW5kO1xyXG59IC8vaW5pdFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcclxuIl19