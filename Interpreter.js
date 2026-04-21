const fs = require("fs");

const filename = process.argv[2];

if (!filename) {
    console.log("Usage: node interpreter.js program.txt");
    process.exit(1);
}

function lexer(input) {
    const tokens = [];
    let i = 0;

    const keywords = [
        "team", "play", "drive", "ifDown", "elsePlay",
        "touchdown", "roster"
    ];

    while (i < input.length) {
        let char = input[i];

        // Skip whitespace
        if (/\s/.test(char)) {
            i++;
            continue;
        }

        // Identifiers or keywords
        if (/[A-Za-z]/.test(char)) {
            let value = "";
            while (/[A-Za-z0-9]/.test(input[i])) {
                value += input[i];
                i++;
            }

            if (keywords.includes(value)) {
                tokens.push({ type: "KEYWORD", value });
            } else {
                tokens.push({ type: "IDENTIFIER", value });
            }
            continue;
        }

        // Numbers
        if (/[0-9]/.test(char)) {
            let value = "";
            while (/[0-9]/.test(input[i])) {
                value += input[i];
                i++;
            }
            tokens.push({ type: "NUMBER", value: Number(value) });
            continue;
        }

        // Strings
        if (char === '"') {
            i++;
            let value = "";
            while (input[i] !== '"') {
                value += input[i];
                i++;
            }
            i++; // closing quote
            tokens.push({ type: "STRING", value });
            continue;
        }

        // Operators
        if (char === "+" || char === "-" || char === "=") {
            tokens.push({ type: "OPERATOR", value: char });
            i++;
            continue;
        }

        // <,>, and =
        if (char === "<" || char === ">") {
            let value = char;
            if (input[i + 1] === "=") {
                value += "=";
                i++;
            }
            tokens.push({ type: "COMPARATOR", value });
            i++;
            continue;
        }

        // Pass action
        if (char === "-" && input[i + 1] === ">") {
            tokens.push({ type: "PASS", value: "->" });
            i += 2;
            continue;
        }

        // Punctuation
        const punct = {
            ";": "SEMICOLON",
            "(": "LPAREN",
            ")": "RPAREN",
            "{": "LBRACE",
            "}": "RBRACE",
            ",": "COMMA"
        };

        if (punct[char]) {
            tokens.push({ type: punct[char], value: char });
            i++;
            continue;
        }

        throw new Error("Unexpected character: " + char);
    }

    return tokens;
}

function interpreter(ast) {
    console.log("Interpreter not implemented yet.");
}
const fullProgram = fs.readFileSync(filename, "utf8");
const tokens = lexer(fullProgram);
const ast = parse(tokens);

console.log(JSON.stringify(ast, null, 2));
