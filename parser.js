function parse(tokens) {
    let i = 0;

    function parseStatement() {
        let token = tokens[i];

        if (token.type === "IDENTIFIER") {
            let name = token.value;
            i++; //move past identifier 

            if (tokens[i].type !== "EQUALS") {
                throw new Error("Expected =");
            }

            i++; // skip '='

            let value = tokens[i].value;
            i++;

            return {
                type: Assignment,
                name,
                value
            };
        }

        if (token.type === "PRINT"){
            i++;
            let value = tokens[i].value;
            i++;

            return {
                type: "Print",
                value
            };
        }
    }

    const body = [];
    while (i < tokens.length) {
        body.push(parseStatement());
    }
    return { type: "Program", body };
}

module.exports = { parse };
