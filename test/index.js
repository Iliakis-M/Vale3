"use strict";

const mod = require("../index.js"),
	fs = require("fs-extra"),
	path = require("path");

var lock = false;

fs.watch("dist/", {
	recursive: true
}, (evt, file) => {
	if (!file.includes("commands")) {
		console.log("Restarting process...");
		process.exit(2);
	} else if (!lock) {
		lock = true;
		global["bot"]._loadCMD(path.join("dist", file)).then(() => lock = false);
	}
});
