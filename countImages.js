const fs = require("fs");
let files = fs.readdirSync("./source");
let length = files.length;

fs.writeFileSync("input.txt", length.toString());
