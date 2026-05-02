function parse(tokens) {
    let i = 0;

    function parseExpression() {
        let left = parseTerm();
        
        while (i < tokens.length && tokens[i].type === "PLUS") {
            let operator = tokens[i];
            i++;

            let right = parseTerm();

            left = {
                type:"BinaryExpression",
                operator: operator.type,
                left,
                right
            };
        }

        return left;
    }

    function parseTerm() {
        let token = tokens[i];

        if (token.type === "NUMBER") {
            i++;
            return { type: "NumberLiteral", value: token.value };
        }

        if (token.type === "IDENTIFIER") {
            i++;
            return { type: "Identifier", name: token.value };
        }

        throw new Error("Unexpected token: " + token.type);
    }

    function parseStatement() {
        let token = tokens[i];
        
        //Assignment
        if (token.type === "IDENTIFIER" && tokens[i + 1]?.type === "EQUALS") {
            let name = token.value;
            i += 2; //skip identifier + '=' 

            let value = parseExpression();

            return {
                type: "Assignment",
                name,
                value
            };
        }
        
        //Print
        if (token.type === "PRINT"){
            i++;
            let value = parseExpression();

            return {
                type: "Print",
                value
            };
        }

        throw new Error("Invalid statement starting with: " + token.type);
    }

    const body = [];

    while (i < tokens.length) {
        body.push(parseStatement());
    }

    return { 
        type: "Program", 
        body 
    };
}

module.exports = { parse };
