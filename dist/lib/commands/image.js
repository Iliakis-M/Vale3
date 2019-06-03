"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Classes_1 = tslib_1.__importStar(require("../Classes"));
const discord_js_1 = require("discord.js");
exports.command = new Classes_1.default.Command({
    name: "image",
    desc: "Fetch a... (possibly) NSFW image... 0_0'",
    usage: "image class<String>",
    exp: /^!ima?ge?( .+)?$/msi,
    category: "Utility",
    data: {
        cache: new Classes_1.default.NamedCacheBank("image", undefined, "https://nekos.life/api/v2/img/"),
        classes: [
            "femdom", "tickle", "classic", "ngif", "erofeet", "meow", "erok", "poke", "les", "hololewd", "lewdk", "keta", "feetg", "nsfw_neko_gif", "eroyuri", "kiss", "kuni", "tits", "pussy_jpg", "cum_jpg", "pussy", "lewdkemo", "lizard", "slap", "lewd", "cum", "cuddle", "spank", "smallboobs", "goose", "Random_hentai_gif", "avatar", "fox_girl", "nsfw_avatar", "hug", "gecg", "boobs", "pat", "feet", "smug", "kemonomimi", "solog", "holo", "wallpaper", "bj", "woof", "yuri", "trap", "anal", "baka", "blowjob", "holoero", "feed", "neko", "gasm", "hentai", "futanari", "ero", "solo", "waifu", "pwankg", "eron", "erokemo"
        ],
        nsfw: [
            "femdom", "classic", "erofeet", "erok", "les", "hololewd", "lewdk", "keta", "feetg", "nsfw_neko_gif", "eroyuri", "kiss", "kuni", "tits", "pussy_jpg", "cum_jpg", "pussy", "lewdkemo", "lewd", "cum", "spank", "smallboobs", "Random_hentai_gif", "fox_girl", "nsfw_avatar", "boobs", "feet", "solog", "bj", "yuri", "trap", "anal", "blowjob", "holoero", "gasm", "hentai", "futanari", "ero", "solo", "pwankg", "eron", "erokemo"
        ]
    },
    body: async function body(message, vale) {
        let parts = message.content.split(' '), reply = Classes_1.default.failsafe.bind(message);
        if (parts.length > 1) {
            let query = parts.slice(1).join('_');
            if (exports.command.data.classes.includes(query)) {
                async function proceed() {
                    let str;
                    try {
                        str = exports.command.data.cache.get(query).get();
                    }
                    catch (err) {
                        str = await Classes_1.default.fetch(exports.command.data.cache.source + query);
                    }
                    exports.command.data.cache.retrieve(query);
                    str = JSON.parse(str).url;
                    reply(str);
                } //proceed
                if ((message.channel instanceof discord_js_1.TextChannel) && exports.command.data.nsfw.includes(query)) {
                    if (message.channel.nsfw) {
                        proceed();
                    }
                    else {
                        reply("This category cannot be viewed used outside of NSFW channels. /:");
                    }
                }
                else {
                    proceed();
                }
            }
            else {
                reply("This category does not exist. /:");
            }
        }
        else {
            let embed = new discord_js_1.RichEmbed(), cat;
            embed.setTitle("Image")
                .setDescription("Help")
                .setColor("RANDOM")
                .setFooter("Powered by nekos.life")
                .setAuthor("Vale3", vale.client.user.displayAvatarURL, "https://github.com/Valen-H/Vale-3")
                .setThumbnail(vale.client.user.avatarURL)
                .setTimestamp()
                .addBlankField(true)
                .setURL("https://nekos.life/api/v2/endpoints");
            if (message.channel instanceof discord_js_1.TextChannel) {
                if (message.channel.nsfw) {
                    cat = exports.command.data.classes;
                }
                else {
                    cat = exports.command.data.class.filter((cls) => exports.command.data.nsfw.includes(cls) == false);
                }
            }
            else {
                cat = exports.command.data.classes;
            }
            embed.addField("Categories:", cat.join(", "));
            reply({ embed });
        }
    },
});
async function init(vale) {
    exports.command.usage = vale.opts.config.prefix + exports.command.usage;
    exports.command.exp = new RegExp('^' + vale.opts.config.prefix + "ima?ge?( .+)?$", "msi");
    exports.command.data.cache.retrieve = async function retrieve(query) {
        let str = await Classes_1.default.fetch(this.source + query);
        this.get(query).push(str);
        return str;
    }; //retrieve
    await Classes_1.chillout.forEach(exports.command.data.classes, (cls) => {
        exports.command.data.cache.new_cache(cls, null, true, false);
    });
    return exports.command;
} //init
exports.init = init;
exports.default = init;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvY29tbWFuZHMvaW1hZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7QUFFYiw4REFBK0M7QUFDL0MsMkNBQTZEO0FBRWhELFFBQUEsT0FBTyxHQUFvQixJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDO0lBQzNELElBQUksRUFBRSxPQUFPO0lBQ2IsSUFBSSxFQUFFLDBDQUEwQztJQUNoRCxLQUFLLEVBQUUscUJBQXFCO0lBQzVCLEdBQUcsRUFBRSxxQkFBcUI7SUFDMUIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLElBQUksaUJBQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBZ0MsQ0FBQztRQUN2RixPQUFPLEVBQUU7WUFDUixRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFB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LENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsZUFBTyxDQUFDLEtBQUssQ0FBQztJQUN4RCxlQUFPLENBQUMsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFbEYsZUFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssVUFBVSxRQUFRLENBQUMsS0FBYTtRQUNsRSxJQUFJLEdBQUcsR0FBRyxNQUFNLGlCQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsT0FBTyxHQUFHLENBQUM7SUFDWixDQUFDLENBQUMsQ0FBQyxVQUFVO0lBRWIsTUFBTSxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQVcsRUFBUSxFQUFFO1FBQ2xFLGVBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sZUFBTyxDQUFDO0FBQ2hCLENBQUMsQ0FBQyxNQUFNO0FBZlIsb0JBZUM7QUFFRCxrQkFBZSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBDbGFzc2VzLCB7IGNoaWxsb3V0IH0gZnJvbSBcIi4uL0NsYXNzZXNcIjtcclxuaW1wb3J0IHsgTWVzc2FnZSwgVGV4dENoYW5uZWwsIFJpY2hFbWJlZCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29tbWFuZDogQ2xhc3Nlcy5Db21tYW5kID0gbmV3IENsYXNzZXMuQ29tbWFuZCh7XHJcblx0bmFtZTogXCJpbWFnZVwiLFxyXG5cdGRlc2M6IFwiRmV0Y2ggYS4uLiAocG9zc2libHkpIE5TRlcgaW1hZ2UuLi4gMF8wJ1wiLFxyXG5cdHVzYWdlOiBcImltYWdlIGNsYXNzPFN0cmluZz5cIixcclxuXHRleHA6IC9eIWltYT9nZT8oIC4rKT8kL21zaSxcclxuXHRjYXRlZ29yeTogXCJVdGlsaXR5XCIsXHJcblx0ZGF0YToge1xyXG5cdFx0Y2FjaGU6IG5ldyBDbGFzc2VzLk5hbWVkQ2FjaGVCYW5rKFwiaW1hZ2VcIiwgdW5kZWZpbmVkLCBcImh0dHBzOi8vbmVrb3MubGlmZS9hcGkvdjIvaW1nL1wiKSxcclxuXHRcdGNsYXNzZXM6IFtcclxuXHRcdFx0XCJmZW1kb21cIiwgXCJ0aWNrbGVcIiwgXCJjbGFzc2ljXCIsIFwibmdpZlwiLCBcImVyb2ZlZXRcIiwgXCJtZW93XCIsIFwiZXJva1wiLCBcInBva2VcIiwgXCJsZXNcIiwgXCJob2xvbGV3ZFwiLCBcImxld2RrXCIsIFwia2V0YVwiLCBcImZlZXRnXCIsIFwibnNmd19uZWtvX2dpZlwiLCBcImVyb3l1cmlcIiwgXCJraXNzXCIsIFwia3VuaVwiLCBcInRpdHNcIiwgXCJwdXNzeV9qcGdcIiwgXCJjdW1fanBnXCIsIFwicHVzc3lcIiwgXCJsZXdka2Vtb1wiLCBcImxpemFyZFwiLCBcInNsYXBcIiwgXCJsZXdkXCIsIFwiY3VtXCIsIFwiY3VkZGxlXCIsIFwic3BhbmtcIiwgXCJzbWFsbGJvb2JzXCIsIFwiZ29vc2VcIiwgXCJSYW5kb21faGVudGFpX2dpZlwiLCBcImF2YXRhclwiLCBcImZveF9naXJsXCIsIFwibnNmd19hdmF0YXJcIiwgXCJodWdcIiwgXCJnZWNnXCIsIFwiYm9vYnNcIiwgXCJwYXRcIiwgXCJmZWV0XCIsIFwic211Z1wiLCBcImtlbW9ub21pbWlcIiwgXCJzb2xvZ1wiLCBcImhvbG9cIiwgXCJ3YWxscGFwZXJcIiwgXCJialwiLCBcIndvb2ZcIiwgXCJ5dXJpXCIsIFwidHJhcFwiLCBcImFuYWxcIiwgXCJiYWthXCIsIFwiYmxvd2pvYlwiLCBcImhvbG9lcm9cIiwgXCJmZWVkXCIsIFwibmVrb1wiLCBcImdhc21cIiwgXCJoZW50YWlcIiwgXCJmdXRhbmFyaVwiLCBcImVyb1wiLCBcInNvbG9cIiwgXCJ3YWlmdVwiLCBcInB3YW5rZ1wiLCBcImVyb25cIiwgXCJlcm9rZW1vXCJcclxuXHRcdF0sXHJcblx0XHRuc2Z3OiBbXHJcblx0XHRcdFwiZmVtZG9tXCIsIFwiY2xhc3NpY1wiLCBcImVyb2ZlZXRcIiwgXCJlcm9rXCIsIFwibGVzXCIsIFwiaG9sb2xld2RcIiwgXCJsZXdka1wiLCBcImtldGFcIiwgXCJmZWV0Z1wiLCBcIm5zZndfbmVrb19naWZcIiwgXCJlcm95dXJpXCIsIFwia2lzc1wiLCBcImt1bmlcIiwgXCJ0aXRzXCIsIFwicHVzc3lfanBnXCIsIFwiY3VtX2pwZ1wiLCBcInB1c3N5XCIsIFwibGV3ZGtlbW9cIiwgXCJsZXdkXCIsIFwiY3VtXCIsIFwic3BhbmtcIiwgXCJzbWFsbGJvb2JzXCIsIFwiUmFuZG9tX2hlbnRhaV9naWZcIiwgXCJmb3hfZ2lybFwiLCBcIm5zZndfYXZhdGFyXCIsIFwiYm9vYnNcIiwgXCJmZWV0XCIsIFwic29sb2dcIiwgXCJialwiLCBcInl1cmlcIiwgXCJ0cmFwXCIsIFwiYW5hbFwiLCBcImJsb3dqb2JcIiwgXCJob2xvZXJvXCIsIFwiZ2FzbVwiLCBcImhlbnRhaVwiLCBcImZ1dGFuYXJpXCIsIFwiZXJvXCIsIFwic29sb1wiLCBcInB3YW5rZ1wiLCBcImVyb25cIiwgXCJlcm9rZW1vXCJcclxuXHRcdF1cclxuXHR9LFxyXG5cdGJvZHk6IGFzeW5jIGZ1bmN0aW9uIGJvZHkobWVzc2FnZTogTWVzc2FnZSwgdmFsZTogQ2xhc3Nlcy5WYWxlKSB7XHJcblx0XHRsZXQgcGFydHM6IHN0cmluZ1tdID0gbWVzc2FnZS5jb250ZW50LnNwbGl0KCcgJyksXHJcblx0XHRcdHJlcGx5ID0gQ2xhc3Nlcy5mYWlsc2FmZS5iaW5kKG1lc3NhZ2UpO1xyXG5cclxuXHRcdGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XHJcblx0XHRcdGxldCBxdWVyeTogc3RyaW5nID0gcGFydHMuc2xpY2UoMSkuam9pbignXycpO1xyXG5cclxuXHRcdFx0aWYgKGNvbW1hbmQuZGF0YS5jbGFzc2VzLmluY2x1ZGVzKHF1ZXJ5KSkge1xyXG5cdFx0XHRcdGFzeW5jIGZ1bmN0aW9uIHByb2NlZWQoKTogUHJvbWlzZTx2b2lkPiB7XHJcblx0XHRcdFx0XHRsZXQgc3RyOiBzdHJpbmc7XHJcblxyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0c3RyID0gY29tbWFuZC5kYXRhLmNhY2hlLmdldChxdWVyeSkuZ2V0KCk7XHJcblx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRcdFx0c3RyID0gYXdhaXQgQ2xhc3Nlcy5mZXRjaChjb21tYW5kLmRhdGEuY2FjaGUuc291cmNlICsgcXVlcnkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGNvbW1hbmQuZGF0YS5jYWNoZS5yZXRyaWV2ZShxdWVyeSk7XHJcblxyXG5cdFx0XHRcdFx0c3RyID0gSlNPTi5wYXJzZShzdHIpLnVybDtcclxuXHJcblx0XHRcdFx0XHRyZXBseShzdHIpO1xyXG5cdFx0XHRcdH0gLy9wcm9jZWVkXHJcblxyXG5cdFx0XHRcdGlmICgobWVzc2FnZS5jaGFubmVsIGluc3RhbmNlb2YgVGV4dENoYW5uZWwpICYmIGNvbW1hbmQuZGF0YS5uc2Z3LmluY2x1ZGVzKHF1ZXJ5KSkge1xyXG5cdFx0XHRcdFx0aWYgKG1lc3NhZ2UuY2hhbm5lbC5uc2Z3KSB7XHJcblx0XHRcdFx0XHRcdHByb2NlZWQoKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJlcGx5KFwiVGhpcyBjYXRlZ29yeSBjYW5ub3QgYmUgdmlld2VkIHVzZWQgb3V0c2lkZSBvZiBOU0ZXIGNoYW5uZWxzLiAvOlwiKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cHJvY2VlZCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXBseShcIlRoaXMgY2F0ZWdvcnkgZG9lcyBub3QgZXhpc3QuIC86XCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRsZXQgZW1iZWQ6IFJpY2hFbWJlZCA9IG5ldyBSaWNoRW1iZWQoKSxcclxuXHRcdFx0XHRjYXQ6IHN0cmluZ1tdO1xyXG5cclxuXHRcdFx0ZW1iZWQuc2V0VGl0bGUoXCJJbWFnZVwiKVxyXG5cdFx0XHRcdC5zZXREZXNjcmlwdGlvbihcIkhlbHBcIilcclxuXHRcdFx0XHQuc2V0Q29sb3IoXCJSQU5ET01cIilcclxuXHRcdFx0XHQuc2V0Rm9vdGVyKFwiUG93ZXJlZCBieSBuZWtvcy5saWZlXCIpXHJcblx0XHRcdFx0LnNldEF1dGhvcihcIlZhbGUzXCIsIHZhbGUuY2xpZW50LnVzZXIuZGlzcGxheUF2YXRhclVSTCwgXCJodHRwczovL2dpdGh1Yi5jb20vVmFsZW4tSC9WYWxlLTNcIilcclxuXHRcdFx0XHQuc2V0VGh1bWJuYWlsKHZhbGUuY2xpZW50LnVzZXIuYXZhdGFyVVJMKVxyXG5cdFx0XHRcdC5zZXRUaW1lc3RhbXAoKVxyXG5cdFx0XHRcdC5hZGRCbGFua0ZpZWxkKHRydWUpXHJcblx0XHRcdFx0LnNldFVSTChcImh0dHBzOi8vbmVrb3MubGlmZS9hcGkvdjIvZW5kcG9pbnRzXCIpO1xyXG5cclxuXHRcdFx0aWYgKG1lc3NhZ2UuY2hhbm5lbCBpbnN0YW5jZW9mIFRleHRDaGFubmVsKSB7XHJcblx0XHRcdFx0aWYgKG1lc3NhZ2UuY2hhbm5lbC5uc2Z3KSB7XHJcblx0XHRcdFx0XHRjYXQgPSBjb21tYW5kLmRhdGEuY2xhc3NlcztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Y2F0ID0gY29tbWFuZC5kYXRhLmNsYXNzLmZpbHRlcigoY2xzOiBzdHJpbmcpOiBib29sZWFuID0+IGNvbW1hbmQuZGF0YS5uc2Z3LmluY2x1ZGVzKGNscykgPT0gZmFsc2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjYXQgPSBjb21tYW5kLmRhdGEuY2xhc3NlcztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZW1iZWQuYWRkRmllbGQoXCJDYXRlZ29yaWVzOlwiLCBjYXQuam9pbihcIiwgXCIpKTtcclxuXHJcblx0XHRcdHJlcGx5KHsgZW1iZWQgfSk7XHJcblx0XHR9XHJcblx0fSwgLy9ib2R5XHJcbn0pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXQodmFsZTogQ2xhc3Nlcy5WYWxlKTogUHJvbWlzZTxDbGFzc2VzLkNvbW1hbmQ+IHtcclxuXHRjb21tYW5kLnVzYWdlID0gdmFsZS5vcHRzLmNvbmZpZy5wcmVmaXggKyBjb21tYW5kLnVzYWdlO1xyXG5cdGNvbW1hbmQuZXhwID0gbmV3IFJlZ0V4cCgnXicgKyB2YWxlLm9wdHMuY29uZmlnLnByZWZpeCArIFwiaW1hP2dlPyggLispPyRcIiwgXCJtc2lcIik7XHJcblxyXG5cdGNvbW1hbmQuZGF0YS5jYWNoZS5yZXRyaWV2ZSA9IGFzeW5jIGZ1bmN0aW9uIHJldHJpZXZlKHF1ZXJ5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG5cdFx0bGV0IHN0ciA9IGF3YWl0IENsYXNzZXMuZmV0Y2godGhpcy5zb3VyY2UgKyBxdWVyeSk7XHJcblx0XHR0aGlzLmdldChxdWVyeSkucHVzaChzdHIpO1xyXG5cdFx0cmV0dXJuIHN0cjtcclxuXHR9OyAvL3JldHJpZXZlXHJcblxyXG5cdGF3YWl0IGNoaWxsb3V0LmZvckVhY2goY29tbWFuZC5kYXRhLmNsYXNzZXMsIChjbHM6IHN0cmluZyk6IHZvaWQgPT4ge1xyXG5cdFx0Y29tbWFuZC5kYXRhLmNhY2hlLm5ld19jYWNoZShjbHMsIG51bGwsIHRydWUsIGZhbHNlKTtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIGNvbW1hbmQ7XHJcbn0gLy9pbml0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0O1xyXG4iXX0=