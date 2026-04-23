const fs = require("fs");

const filename = process.argv[2];

if (!filename) {
    console.log("Usage: node interpreter.js program.txt");
    process.exit(1);
}

let fullProgram = "";
