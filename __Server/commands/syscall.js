"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Classes = module.parent.exports.Classes, chalk = module.parent.exports.chalk;
const child_process_1 = require("child_process");
exports.command = new Classes.Command({
    name: "syscall",
    desc: "Perform a system call",
    exp: new RegExp('^' + Classes.Command.prefix + "s(ys)? .+$", "sim"),
    usage: eval("'" + Classes.Command.prefix + "'") + "sys[ command<String>]",
    _compl: eval("'" + Classes.Command.prefix + "'") + "sys ",
    _priority: 5,
    body: async function body(panel, command) {
        return new Promise((res, rej) => {
            command = command.split(' ');
            let child = child_process_1.spawn(command.shift(), command, {
                shell: true,
                windowsHide: true
            });
            panel._output.write('\n');
            child.stdout.pipe(panel._output);
            child.stderr.pipe(panel._error);
            child.once("close", (code) => {
                panel._output.write(chalk `\n{italic Process exited with code: {cyan ${code}}}\n\n`);
                res(Classes.Null);
            });
            child.on("error", rej);
        });
    },
    parse: function parse(line, panel) {
        return this.body(panel, line.split(' ').slice(1).join(' '));
    } //parse
});
exports.default = exports.command;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzY2FsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9jb21tYW5kcy9zeXNjYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQzVDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7QUFFckMsaURBQXNDO0FBRzNCLFFBQUEsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUN4QyxJQUFJLEVBQUUsU0FBUztJQUNmLElBQUksRUFBRSx1QkFBdUI7SUFDN0IsR0FBRyxFQUFFLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxZQUFZLEVBQUUsS0FBSyxDQUFDO0lBQ25FLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLHVCQUF1QjtJQUN6RSxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxNQUFNO0lBQ3pELFNBQVMsRUFBRSxDQUFDO0lBQ1osSUFBSSxFQUFFLEtBQUssVUFBVSxJQUFJLENBQUMsS0FBZSxFQUFFLE9BQTBCO1FBQ3BFLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxHQUE0QixFQUFFLEdBQTRCLEVBQUUsRUFBRTtZQUNqRixPQUFPLEdBQVksT0FBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUV2QyxJQUFJLEtBQUssR0FBRyxxQkFBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUU7Z0JBQzNDLEtBQUssRUFBRSxJQUFJO2dCQUNYLFdBQVcsRUFBRSxJQUFJO2FBQ2pCLENBQUMsQ0FBQztZQUVILEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFZLEVBQUUsRUFBRTtnQkFDcEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFBLDZDQUE2QyxJQUFJLFFBQVEsQ0FBQyxDQUFDO2dCQUNwRixHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25CLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0QsS0FBSyxFQUFFLFNBQVMsS0FBSyxDQUFDLElBQVksRUFBRSxLQUFlO1FBQ2xELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQyxDQUFDLE9BQU87Q0FDVCxDQUFDLENBQUM7QUFFSCxrQkFBZSxlQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IENsYXNzZXMgPSBtb2R1bGUucGFyZW50LmV4cG9ydHMuQ2xhc3NlcyxcclxuXHRjaGFsayA9IG1vZHVsZS5wYXJlbnQuZXhwb3J0cy5jaGFsaztcclxuXHJcbmltcG9ydCB7IHNwYXduIH0gZnJvbSBcImNoaWxkX3Byb2Nlc3NcIjtcclxuaW1wb3J0IHsgQ2xhc3NlcyBhcyBDVCB9IGZyb20gXCIuLi9DbGFzc2VzXCI7XHJcblxyXG5leHBvcnQgdmFyIGNvbW1hbmQgPSBuZXcgQ2xhc3Nlcy5Db21tYW5kKHtcclxuXHRuYW1lOiBcInN5c2NhbGxcIixcclxuXHRkZXNjOiBcIlBlcmZvcm0gYSBzeXN0ZW0gY2FsbFwiLFxyXG5cdGV4cDogbmV3IFJlZ0V4cCgnXicgKyBDbGFzc2VzLkNvbW1hbmQucHJlZml4ICsgXCJzKHlzKT8gLiskXCIsIFwic2ltXCIpLFxyXG5cdHVzYWdlOiBldmFsKFwiJ1wiICsgQ2xhc3Nlcy5Db21tYW5kLnByZWZpeCArIFwiJ1wiKSArIFwic3lzWyBjb21tYW5kPFN0cmluZz5dXCIsXHJcblx0X2NvbXBsOiBldmFsKFwiJ1wiICsgQ2xhc3Nlcy5Db21tYW5kLnByZWZpeCArIFwiJ1wiKSArIFwic3lzIFwiLFxyXG5cdF9wcmlvcml0eTogNSxcclxuXHRib2R5OiBhc3luYyBmdW5jdGlvbiBib2R5KHBhbmVsOiBDVC5QYW5lbCwgY29tbWFuZDogc3RyaW5nIHwgc3RyaW5nW10pIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZCwgcmVqOiAocmVhc29uOiBFcnJvcikgPT4gdm9pZCkgPT4ge1xyXG5cdFx0XHRjb21tYW5kID0gKDxzdHJpbmc+Y29tbWFuZCkuc3BsaXQoJyAnKTtcclxuXHJcblx0XHRcdGxldCBjaGlsZCA9IHNwYXduKGNvbW1hbmQuc2hpZnQoKSwgY29tbWFuZCwge1xyXG5cdFx0XHRcdHNoZWxsOiB0cnVlLFxyXG5cdFx0XHRcdHdpbmRvd3NIaWRlOiB0cnVlXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cGFuZWwuX291dHB1dC53cml0ZSgnXFxuJyk7XHJcblx0XHRcdGNoaWxkLnN0ZG91dC5waXBlKHBhbmVsLl9vdXRwdXQpO1xyXG5cdFx0XHRjaGlsZC5zdGRlcnIucGlwZShwYW5lbC5fZXJyb3IpO1xyXG5cdFx0XHRjaGlsZC5vbmNlKFwiY2xvc2VcIiwgKGNvZGU6IG51bWJlcikgPT4ge1xyXG5cdFx0XHRcdHBhbmVsLl9vdXRwdXQud3JpdGUoY2hhbGtgXFxue2l0YWxpYyBQcm9jZXNzIGV4aXRlZCB3aXRoIGNvZGU6IHtjeWFuICR7Y29kZX19fVxcblxcbmApO1xyXG5cdFx0XHRcdHJlcyhDbGFzc2VzLk51bGwpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y2hpbGQub24oXCJlcnJvclwiLCByZWopO1xyXG5cdFx0fSk7XHJcblx0fSwgLy9ib2R5XHJcblx0cGFyc2U6IGZ1bmN0aW9uIHBhcnNlKGxpbmU6IHN0cmluZywgcGFuZWw6IENULlBhbmVsKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5ib2R5KHBhbmVsLCBsaW5lLnNwbGl0KCcgJykuc2xpY2UoMSkuam9pbignICcpKTtcclxuXHR9IC8vcGFyc2VcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21tYW5kO1xyXG4iXX0=