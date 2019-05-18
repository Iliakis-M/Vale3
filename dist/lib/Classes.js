"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vale3_1 = tslib_1.__importDefault(require("./vale3"));
const Discord = tslib_1.__importStar(require("discord.js"));
const fs = tslib_1.__importStar(require("fs-extra"));
const path = tslib_1.__importStar(require("path"));
const events_1 = require("events");
const os_1 = require("os");
const util_1 = require("util");
exports.chalk = require("chalk");
try {
    exports.stripAnsi = require("strip-ansi");
}
catch (opt) {
    exports.stripAnsi = c => c;
}
/**
 * VAL-1: TO BE USED BOTH WITH USER AND BOTS ACCOUNTS
 */
var Classes;
(function (Classes) {
    let Errors;
    (function (Errors) {
        Errors.EBADSZ = new RangeError("Bad Size.");
    })(Errors = Classes.Errors || (Classes.Errors = {})); //Errors
    class Vale extends events_1.EventEmitter {
        constructor(opts = Vale.defaultOpts) {
            super();
            this.commands = new Map();
            let nopts = {};
            Object.assign(nopts, Vale.defaultOpts);
            Object.assign(nopts, opts);
            this.opts = nopts;
            this.client = new Discord.Client(opts.config.client);
        } //ctor
        start() {
            vale3_1.default.setup(this);
            this.client.login(this.opts.token); //!destroy()
            return this;
        } //start
        async command(message) {
            try {
                let found = Array.from(this.commands.values()).find((cmd) => cmd.exp.test(message.content));
                if (found) {
                    //@ts-ignore
                    this._debug(exports.chalk.keyword("orange").dim(message.author.tag + " (" + message.channel.name + "  -  [ " + message.guild.name + " ] )") + ":", exports.chalk.yellow(message.content), "---", exports.chalk.grey.dim(Date()));
                    //@ts-ignore
                    if (this.whook)
                        this.whook.send("```" + message.author.tag + " (" + message.channel.name + "  -  [ " + message.guild.name + " ] ): " + message.content + "  ---  " + Date() + "```");
                    return await found.body(message, this);
                }
            }
            catch (err) {
                return this._debug(exports.chalk.red(util_1.inspect(err)));
            }
        } //command
        _debug(...msg) {
            let prec;
            this._debuglog += (prec = msg.join(' ')) + " --- " + Date() + os_1.EOL;
            this.emit("log", prec);
            if (this._panel && this._panel.sock)
                this._panel.sock.of("/admin").to("admin").send(exports.stripAnsi(prec));
            return prec;
        } //_debug
        async _loadCMD(from = "dist/lib/commands/") {
            let files = await fs.readdir(from);
            for (let file of files) {
                let comm, full;
                try {
                    delete require.cache[require.resolve(full = path.resolve(path.join(from, file)))];
                    comm = require(full);
                    await comm.init(this);
                }
                catch (err) {
                    this._debug(exports.chalk.red(util_1.inspect(err)));
                }
                this.commands.set(comm.command.name, comm.command);
            }
            this._debug(exports.chalk.cyan.dim("Loaded bot commands"), exports.chalk.grey.dim(" ---  " + Date()));
            return this;
        } //_loadCMD
    } //Vale
    Vale.defaultOpts = {
        token: '',
        config: {
            prefix: '!',
            cust: "cust.config.json",
            client: {
                messageCacheLifetime: 1800,
                disableEveryone: true
            }
        },
        custconfig: {}
    };
    Classes.Vale = Vale;
    class Command {
        constructor(opts) {
            this.desc = '';
            this.usage = '';
            this.category = '';
            this.data = {};
            Object.assign(this, opts);
        } //ctor
        //@Override
        async body(message, vale) {
            //must support non-message commanding
        } //body
        //@Override
        async _remove(vale) {
            //cleanup
        } //_remove
    } //Command
    Classes.Command = Command;
    class CacheBank {
        constructor(name, size = 50, autopurge = true) {
            this.size = 0;
            this.cache = [];
            this.name = "CacheBank-" + CacheBank.cntr++;
            this.autopurge = true;
            this.name = name || this.name;
            this.size = size;
            this.autopurge = autopurge;
        } //ctor
        get(item) {
            if (this.cache.length === 0)
                throw Errors.EBADSZ;
            if (item === undefined || item === null) {
                return this.cache[Math.round(Math.random() * (this.cache.length - 1))];
            }
            else {
                return this.cache[item];
            }
        } //random
        purge(items = 1) {
            let out = [];
            this._arrange();
            while (items--) {
                out.push(this.cache.shift());
            }
            return out;
        } //purge
        push(item) {
            if (this.autopurge && this.cache.length === this.size - 1)
                this.purge();
            return this.cache.push({
                entry: item,
                timestamp: Date.now()
            });
        } //push
        _arrange() {
            return this.cache = this.cache.sort((a, b) => a.timestamp - b.timestamp);
        } //_arrange
    } //CacheBank
    CacheBank.cntr = 0;
    Classes.CacheBank = CacheBank;
})(Classes = exports.Classes || (exports.Classes = {})); //Classes
exports.default = Classes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xhc3Nlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9DbGFzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0FBRWIsNERBQTRCO0FBQzVCLDREQUFzQztBQUV0QyxxREFBK0I7QUFDL0IsbURBQTZCO0FBQzdCLG1DQUFzQztBQUN0QywyQkFBeUI7QUFDekIsK0JBQStCO0FBQ2xCLFFBQUEsS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUl0QyxJQUFJO0lBQ0gsaUJBQVMsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7Q0FDbEM7QUFBQyxPQUFPLEdBQUcsRUFBRTtJQUNiLGlCQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDbkI7QUFHRDs7R0FFRztBQUdILElBQWMsT0FBTyxDQTROcEI7QUE1TkQsV0FBYyxPQUFPO0lBMkNwQixJQUFpQixNQUFNLENBSXRCO0lBSkQsV0FBaUIsTUFBTTtRQUVULGFBQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUVuRCxDQUFDLEVBSmdCLE1BQU0sR0FBTixjQUFNLEtBQU4sY0FBTSxRQUl0QixDQUFDLFFBQVE7SUFTVixNQUFhLElBQUssU0FBUSxxQkFBWTtRQXNCckMsWUFBWSxPQUF5QixJQUFJLENBQUMsV0FBVztZQUNwRCxLQUFLLEVBQUUsQ0FBQztZQWhCVCxhQUFRLEdBQXlCLElBQUksR0FBRyxFQUFFLENBQUM7WUFrQjFDLElBQUksS0FBSyxHQUF1QyxFQUFHLENBQUM7WUFDcEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBRWxCLElBQUksQ0FBQyxNQUFN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QUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRyxDQUFDLENBQUMsVUFBVTtNQUVYLFdBQVc7SUEzQ0wsY0FBSSxHQUFXLENBQUMsQ0FBQztJQVBaLGlCQUFTLFlBa0RyQixDQUFBO0FBRUYsQ0FBQyxFQTVOYSxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUE0TnBCLENBQUMsU0FBUztBQUVYLGtCQUFlLE9BQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IFZhbGUzIGZyb20gXCIuL3ZhbGUzXCI7XHJcbmltcG9ydCAqIGFzIERpc2NvcmQgZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0ICogYXMgYWRtX3BhbmVsIGZyb20gXCJhZG0tcGFuZWwyXCI7XHJcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmcy1leHRyYVwiO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCJldmVudHNcIjtcclxuaW1wb3J0IHsgRU9MIH0gZnJvbSBcIm9zXCI7XHJcbmltcG9ydCB7IGluc3BlY3QgfSBmcm9tIFwidXRpbFwiO1xyXG5leHBvcnQgY29uc3QgY2hhbGsgPSByZXF1aXJlKFwiY2hhbGtcIik7XHJcblxyXG5leHBvcnQgdmFyIHN0cmlwQW5zaTtcclxuXHJcbnRyeSB7XHJcblx0c3RyaXBBbnNpID0gcmVxdWlyZShcInN0cmlwLWFuc2lcIik7XHJcbn0gY2F0Y2ggKG9wdCkge1xyXG5cdHN0cmlwQW5zaSA9IGMgPT4gYztcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBWQUwtMTogVE8gQkUgVVNFRCBCT1RIIFdJVEggVVNFUiBBTkQgQk9UUyBBQ0NPVU5UU1xyXG4gKi9cclxuXHJcblxyXG5leHBvcnQgbW9kdWxlIENsYXNzZXMge1xyXG5cclxuXHRleHBvcnQgbmFtZXNwYWNlIE9wdGlvbnMge1xyXG5cclxuXHRcdGV4cG9ydCBpbnRlcmZhY2UgVmFsZU9wdHMge1xyXG5cclxuXHRcdFx0dG9rZW4/OiBzdHJpbmc7XHJcblx0XHRcdGNvbmZpZz87XHJcblx0XHRcdGN1c3Rjb25maWc/O1xyXG5cclxuXHRcdH0gLy9WYWxlT3B0c1xyXG5cclxuXHRcdGV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZE9wdHMge1xyXG5cclxuXHRcdFx0bmFtZTogc3RyaW5nO1xyXG5cdFx0XHRleHA6IFJlZ0V4cDtcclxuXHRcdFx0ZGVzYzogc3RyaW5nO1xyXG5cdFx0XHR1c2FnZTogc3RyaW5nO1xyXG5cdFx0XHQvKipcclxuXHRcdFx0ICogVXRpbGl0eSwgT3duZXJcclxuXHRcdFx0ICogXHJcblx0XHRcdCAqIEB0eXBlIHtzdHJpbmd9XHJcblx0XHRcdCAqIEBtZW1iZXJvZiBDb21tYW5kT3B0c1xyXG5cdFx0XHQgKi9cclxuXHRcdFx0Y2F0ZWdvcnk6IHN0cmluZztcclxuXHRcdFx0ZGF0YT86IGFueTtcclxuXHRcdFx0Ym9keT86IChtZXNzYWdlOiBEaXNjb3JkLk1lc3NhZ2UsIHZhbGU6IFZhbGUpID0+IFByb21pc2U8YW55PjtcclxuXHRcdFx0X3JlbW92ZT86ICh2YWxlPzogVmFsZSkgPT4gUHJvbWlzZTxhbnk+O1xyXG5cclxuXHRcdH0gLy9Db21tYW5kT3B0c1xyXG5cclxuXHRcdGV4cG9ydCBpbnRlcmZhY2UgQ2FjaGVCYW5rT3B0cyB7XHJcblxyXG5cdFx0XHRzaXplOiBudW1iZXI7XHJcblx0XHRcdGNhY2hlOiBDYWNoZUVudHJ5W107XHJcblx0XHRcdG5hbWU/OiBzdHJpbmc7XHJcblx0XHRcdGF1dG9wdXJnZT86IGJvb2xlYW47XHJcblxyXG5cdFx0fSAvL0NhY2hlQmFua09wdHNcclxuXHJcblx0fSAvL09wdGlvbnNcclxuXHJcblxyXG5cdGV4cG9ydCBuYW1lc3BhY2UgRXJyb3JzIHtcclxuXHJcblx0XHRleHBvcnQgY29uc3QgRUJBRFNaID0gbmV3IFJhbmdlRXJyb3IoXCJCYWQgU2l6ZS5cIik7XHJcblxyXG5cdH0gLy9FcnJvcnNcclxuXHJcblxyXG5cdHR5cGUgQ2FjaGVFbnRyeSA9IHtcclxuXHRcdHRpbWVzdGFtcDogbnVtYmVyO1xyXG5cdFx0ZW50cnk6IGFueVxyXG5cdH1cclxuXHJcblxyXG5cdGV4cG9ydCBjbGFzcyBWYWxlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcclxuXHJcblx0XHRvcHRzOiBPcHRpb25zLlZhbGVPcHRzO1xyXG5cdFx0Y2xpZW50OiBEaXNjb3JkLkNsaWVudDtcclxuXHRcdHdob29rOiBEaXNjb3JkLldlYmhvb2s7XHJcblx0XHRfZGVidWdsb2c6IHN0cmluZztcclxuXHRcdF9wYW5lbDogYWRtX3BhbmVsLkNsYXNzZXMuUGFuZWw7XHJcblx0XHRjb21tYW5kczogTWFwPHN0cmluZywgQ29tbWFuZD4gPSBuZXcgTWFwKCk7XHJcblxyXG5cdFx0c3RhdGljIGRlZmF1bHRPcHRzOiBPcHRpb25zLlZhbGVPcHRzID0ge1xyXG5cdFx0XHR0b2tlbjogJycsXHJcblx0XHRcdGNvbmZpZzoge1xyXG5cdFx0XHRcdHByZWZpeDogJyEnLFxyXG5cdFx0XHRcdGN1c3Q6IFwiY3VzdC5jb25maWcuanNvblwiLFxyXG5cdFx0XHRcdGNsaWVudDoge1xyXG5cdFx0XHRcdFx0bWVzc2FnZUNhY2hlTGlmZXRpbWU6IDE4MDAsXHJcblx0XHRcdFx0XHRkaXNhYmxlRXZlcnlvbmU6IHRydWVcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGN1c3Rjb25maWc6IHsgfVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdHJ1Y3RvcihvcHRzOiBPcHRpb25zLlZhbGVPcHRzID0gVmFsZS5kZWZhdWx0T3B0cykge1xyXG5cdFx0XHRzdXBlcigpO1xyXG5cclxuXHRcdFx0bGV0IG5vcHRzOiBPcHRpb25zLlZhbGVPcHRzID0gPE9wdGlvbnMuVmFsZU9wdHM+eyB9O1xyXG5cdFx0XHRPYmplY3QuYXNzaWduKG5vcHRzLCBWYWxlLmRlZmF1bHRPcHRzKTtcclxuXHRcdFx0T2JqZWN0LmFzc2lnbihub3B0cywgb3B0cyk7XHJcblx0XHRcdHRoaXMub3B0cyA9IG5vcHRzO1xyXG5cclxuXHRcdFx0dGhpcy5jbGllbnQgPSBuZXcgRGlzY29yZC5DbGllbnQob3B0cy5jb25maWcuY2xpZW50KTtcclxuXHRcdH0gLy9jdG9yXHJcblxyXG5cdFx0c3RhcnQoKSB7XHJcblx0XHRcdFZhbGUzLnNldHVwKHRoaXMpO1xyXG5cdFx0XHR0aGlzLmNsaWVudC5sb2dpbih0aGlzLm9wdHMudG9rZW4pOyAgLy8hZGVzdHJveSgpXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSAvL3N0YXJ0XHJcblxyXG5cdFx0YXN5bmMgY29tbWFuZChtZXNzYWdlOiBEaXNjb3JkLk1lc3NhZ2UpIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRsZXQgZm91bmQgPSBBcnJheS5mcm9tKHRoaXMuY29tbWFuZHMudmFsdWVzKCkpLmZpbmQoKGNtZDogQ29tbWFuZCkgPT4gY21kLmV4cC50ZXN0KG1lc3NhZ2UuY29udGVudCkpO1xyXG5cclxuXHRcdFx0XHRpZiAoZm91bmQpIHtcclxuXHRcdFx0XHRcdC8vQHRzLWlnbm9yZVxyXG5cdFx0XHRcdFx0dGhpcy5fZGVidWcoY2hhbGsua2V5d29yZChcIm9yYW5nZVwiKS5kaW0obWVzc2FnZS5hdXRob3IudGFnICsgXCIgKFwiICsgbWVzc2FnZS5jaGFubmVsLm5hbWUgKyBcIiAgLSAgWyBcIiArIG1lc3NhZ2UuZ3VpbGQubmFtZSArIFwiIF0gKVwiKSArIFwiOlwiLCBjaGFsay55ZWxsb3cobWVzc2FnZS5jb250ZW50KSwgXCItLS1cIiwgY2hhbGsuZ3JleS5kaW0oRGF0ZSgpKSk7XHJcblx0XHRcdFx0XHQvL0B0cy1pZ25vcmVcclxuXHRcdFx0XHRcdGlmICh0aGlzLndob29rKSB0aGlzLndob29rLnNlbmQoXCJgYGBcIiArIG1lc3NhZ2UuYXV0aG9yLnRhZyArIFwiIChcIiArIG1lc3NhZ2UuY2hhbm5lbC5uYW1lICsgXCIgIC0gIFsgXCIgKyBtZXNzYWdlLmd1aWxkLm5hbWUgKyBcIiBdICk6IFwiICsgbWVzc2FnZS5jb250ZW50ICsgXCIgIC0tLSAgXCIgKyBEYXRlKCkgKyBcImBgYFwiKTtcclxuXHRcdFx0XHRcdHJldHVybiBhd2FpdCBmb3VuZC5ib2R5KG1lc3NhZ2UsIHRoaXMpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2RlYnVnKGNoYWxrLnJlZChpbnNwZWN0KGVycikpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSAvL2NvbW1hbmRcclxuXHJcblx0XHRfZGVidWcoLi4ubXNnOiBhbnkpIHtcclxuXHRcdFx0bGV0IHByZWM6IHN0cmluZztcclxuXHRcdFx0dGhpcy5fZGVidWdsb2cgKz0gKHByZWMgPSBtc2cuam9pbignICcpKSArIFwiIC0tLSBcIiArIERhdGUoKSArIEVPTDtcclxuXHRcdFx0dGhpcy5lbWl0KFwibG9nXCIsIHByZWMpO1xyXG5cdFx0XHRpZiAodGhpcy5fcGFuZWwgJiYgdGhpcy5fcGFuZWwuc29jayl0aGlzLl9wYW5lbC5zb2NrLm9mKFwiL2FkbWluXCIpLnRvKFwiYWRtaW5cIikuc2VuZChzdHJpcEFuc2kocHJlYykpO1xyXG5cdFx0XHRyZXR1cm4gcHJlYztcclxuXHRcdH0gLy9fZGVidWdcclxuXHJcblx0XHRhc3luYyBfbG9hZENNRChmcm9tOiBzdHJpbmcgPSBcImRpc3QvbGliL2NvbW1hbmRzL1wiKSB7XHJcblx0XHRcdGxldCBmaWxlcyA9IGF3YWl0IGZzLnJlYWRkaXIoZnJvbSk7XHJcblxyXG5cdFx0XHRmb3IgKGxldCBmaWxlIG9mIGZpbGVzKSB7XHJcblx0XHRcdFx0bGV0IGNvbW0sXHJcblx0XHRcdFx0XHRmdWxsOiBzdHJpbmc7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdGRlbGV0ZSByZXF1aXJlLmNhY2hlW3JlcXVpcmUucmVzb2x2ZShmdWxsID0gcGF0aC5yZXNvbHZlKHBhdGguam9pbihmcm9tLCBmaWxlKSkpXTtcclxuXHRcdFx0XHRcdGNvbW0gPSByZXF1aXJlKGZ1bGwpO1xyXG5cdFx0XHRcdFx0YXdhaXQgY29tbS5pbml0KHRoaXMpO1xyXG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdFx0dGhpcy5fZGVidWcoY2hhbGsucmVkKGluc3BlY3QoZXJyKSkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLmNvbW1hbmRzLnNldChjb21tLmNvbW1hbmQubmFtZSwgY29tbS5jb21tYW5kKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5fZGVidWcoY2hhbGsuY3lhbi5kaW0oXCJMb2FkZWQgYm90IGNvbW1hbmRzXCIpLCBjaGFsay5ncmV5LmRpbShcIiAtLS0gIFwiICsgRGF0ZSgpKSk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSAvL19sb2FkQ01EXHJcblxyXG5cdH0gLy9WYWxlXHJcblxyXG5cdGV4cG9ydCBjbGFzcyBDb21tYW5kIGltcGxlbWVudHMgT3B0aW9ucy5Db21tYW5kT3B0cyB7XHJcblxyXG5cclxuXHRcdG5hbWU6IHN0cmluZztcclxuXHRcdGV4cDogUmVnRXhwO1xyXG5cdFx0ZGVzYzogc3RyaW5nID0gJyc7XHJcblx0XHR1c2FnZTogc3RyaW5nID0gJyc7XHJcblx0XHRjYXRlZ29yeTogc3RyaW5nID0gJyc7XHJcblx0XHRkYXRhOiBhbnkgPSB7IH07XHJcblx0XHRcclxuXHRcdGNvbnN0cnVjdG9yKG9wdHM6IE9wdGlvbnMuQ29tbWFuZE9wdHMpIHtcclxuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRzKTtcclxuXHRcdH0gLy9jdG9yXHJcblxyXG5cdFx0Ly9AT3ZlcnJpZGVcclxuXHRcdGFzeW5jIGJvZHkobWVzc2FnZT86IERpc2NvcmQuTWVzc2FnZSwgdmFsZT86IFZhbGUpIHtcclxuXHRcdFx0Ly9tdXN0IHN1cHBvcnQgbm9uLW1lc3NhZ2UgY29tbWFuZGluZ1xyXG5cdFx0fSAvL2JvZHlcclxuXHJcblx0XHQvL0BPdmVycmlkZVxyXG5cdFx0YXN5bmMgX3JlbW92ZSh2YWxlPzogVmFsZSkge1xyXG5cdFx0XHQvL2NsZWFudXBcclxuXHRcdH0gLy9fcmVtb3ZlXHJcblxyXG5cdH0gLy9Db21tYW5kXHJcblxyXG5cdGV4cG9ydCBjbGFzcyBDYWNoZUJhbmsgaW1wbGVtZW50cyBPcHRpb25zLkNhY2hlQmFua09wdHMge1xyXG5cclxuXHRcdHNpemU6IG51bWJlciA9IDA7XHJcblx0XHRjYWNoZTogQ2FjaGVFbnRyeVtdID0gW107XHJcblx0XHRuYW1lOiBzdHJpbmcgPSBcIkNhY2hlQmFuay1cIiArIENhY2hlQmFuay5jbnRyKys7XHJcblx0XHRhdXRvcHVyZ2U6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuXHRcdHN0YXRpYyBjbnRyOiBudW1iZXIgPSAwO1xyXG5cclxuXHRcdGNvbnN0cnVjdG9yKG5hbWU/OiBzdHJpbmcsIHNpemU6IG51bWJlciA9IDUwLCBhdXRvcHVyZ2U6IGJvb2xlYW4gPSB0cnVlKSB7XHJcblx0XHRcdHRoaXMubmFtZSA9IG5hbWUgfHwgdGhpcy5uYW1lO1xyXG5cdFx0XHR0aGlzLnNpemUgPSBzaXplO1xyXG5cdFx0XHR0aGlzLmF1dG9wdXJnZSA9IGF1dG9wdXJnZTtcclxuXHRcdH0gLy9jdG9yXHJcblxyXG5cdFx0Z2V0KGl0ZW06IG51bWJlcikge1xyXG5cdFx0XHRpZiAodGhpcy5jYWNoZS5sZW5ndGggPT09IDApIHRocm93IEVycm9ycy5FQkFEU1o7XHJcblxyXG5cdFx0XHRpZiAoaXRlbSA9PT0gdW5kZWZpbmVkIHx8IGl0ZW0gPT09IG51bGwpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jYWNoZVtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAodGhpcy5jYWNoZS5sZW5ndGggLSAxKSldO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmNhY2hlW2l0ZW1dO1xyXG5cdFx0XHR9XHJcblx0XHR9IC8vcmFuZG9tXHJcblxyXG5cdFx0cHVyZ2UoaXRlbXMgPSAxKSB7XHJcblx0XHRcdGxldCBvdXQ6IENhY2hlRW50cnlbXSA9IFsgXTtcclxuXHJcblx0XHRcdHRoaXMuX2FycmFuZ2UoKTtcclxuXHJcblx0XHRcdHdoaWxlIChpdGVtcy0tKSB7XHJcblx0XHRcdFx0b3V0LnB1c2godGhpcy5jYWNoZS5zaGlmdCgpKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIG91dDtcclxuXHRcdH0gLy9wdXJnZVxyXG5cclxuXHRcdHB1c2goaXRlbTogYW55KSB7XHJcblx0XHRcdGlmICh0aGlzLmF1dG9wdXJnZSAmJiB0aGlzLmNhY2hlLmxlbmd0aCA9PT0gdGhpcy5zaXplIC0gMSkgdGhpcy5wdXJnZSgpO1xyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIHRoaXMuY2FjaGUucHVzaCh7XHJcblx0XHRcdFx0ZW50cnk6IGl0ZW0sXHJcblx0XHRcdFx0dGltZXN0YW1wOiBEYXRlLm5vdygpXHJcblx0XHRcdH0pO1xyXG5cdFx0fSAvL3B1c2hcclxuXHJcblx0XHRfYXJyYW5nZSgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY2FjaGUgPSB0aGlzLmNhY2hlLnNvcnQoKGE6IENhY2hlRW50cnksIGI6IENhY2hlRW50cnkpID0+IGEudGltZXN0YW1wIC0gYi50aW1lc3RhbXApO1xyXG5cdFx0fSAvL19hcnJhbmdlXHJcblxyXG5cdH0gLy9DYWNoZUJhbmtcclxuXHJcbn0gLy9DbGFzc2VzXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbGFzc2VzO1xyXG4iXX0=