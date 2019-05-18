"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Classes = module.parent.exports.Classes;
exports.command = new Classes.Command({
    name: "eval",
    desc: "Evaluate JS expressions",
    exp: new RegExp('', "sim"),
    usage: "code<String>",
    _compl: '',
    _priority: Infinity,
    body: function body(code) {
        return eval(code);
    },
    parse: function parse(line, panel) {
        return this.body(line);
    } //parse
});
exports.default = exports.command;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9jb21tYW5kcy9ldmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7QUFFbkMsUUFBQSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ3hDLElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSSxFQUFFLHlCQUF5QjtJQUMvQixHQUFHLEVBQUUsSUFBSSxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQztJQUMxQixLQUFLLEVBQUUsY0FBYztJQUNyQixNQUFNLEVBQUUsRUFBRTtJQUNWLFNBQVMsRUFBRSxRQUFRO0lBQ25CLElBQUksRUFBRSxTQUFTLElBQUksQ0FBQyxJQUFZO1FBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFDRCxLQUFLLEVBQUUsU0FBUyxLQUFLLENBQUMsSUFBWSxFQUFFLEtBQUs7UUFDeEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxPQUFPO0NBQ1QsQ0FBQyxDQUFDO0FBRUgsa0JBQWUsZUFBTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IENsYXNzZXMgPSBtb2R1bGUucGFyZW50LmV4cG9ydHMuQ2xhc3NlcztcblxuZXhwb3J0IHZhciBjb21tYW5kID0gbmV3IENsYXNzZXMuQ29tbWFuZCh7XG5cdG5hbWU6IFwiZXZhbFwiLFxuXHRkZXNjOiBcIkV2YWx1YXRlIEpTIGV4cHJlc3Npb25zXCIsXG5cdGV4cDogbmV3IFJlZ0V4cCgnJywgXCJzaW1cIiksXG5cdHVzYWdlOiBcImNvZGU8U3RyaW5nPlwiLFxuXHRfY29tcGw6ICcnLFxuXHRfcHJpb3JpdHk6IEluZmluaXR5LFxuXHRib2R5OiBmdW5jdGlvbiBib2R5KGNvZGU6IHN0cmluZykge1xuXHRcdHJldHVybiBldmFsKGNvZGUpO1xuXHR9LCAvL2JvZHlcblx0cGFyc2U6IGZ1bmN0aW9uIHBhcnNlKGxpbmU6IHN0cmluZywgcGFuZWwpIHtcblx0XHRyZXR1cm4gdGhpcy5ib2R5KGxpbmUpO1xuXHR9IC8vcGFyc2Vcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb21tYW5kO1xuIl19