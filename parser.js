function parse(tokens) {
  let current = 0;

  let ast = {
    type: "Program",
    body: []
  };

  while (current < tokens.length) {
    let token = tokens[current];

     if (
      current + 4 < tokens.length &&
      tokens[current].type === "KEYWORD" &&
      tokens[current].value === "let" &&
      tokens[current + 1].type === "IDENTIFIER" &&
      tokens[current + 2].type === "EQUALS" &&
      tokens[current + 3].type === "NUMBER" &&
      tokens[current + 4].type === "SEMICOLON"
    ) {
      ast.body.push({
        type: "VariableDeclaration",
        name: tokens[current + 1].value,
        value: {
          type: "NumberLiteral",
          value: tokens[current + 3].value
        }
      });

      current = current + 5;
    }
         
     else if (
      current + 4 < tokens.length &&
      tokens[current].type === "KEYWORD" &&
      tokens[current].value === "play" &&
      tokens[current + 1].type === "LPAREN" &&
      tokens[current + 2].type === "IDENTIFIER" &&
      tokens[current + 3].type === "RPAREN" &&
      tokens[current + 4].type === "SEMICOLON"
    ) {
      ast.body.push({
        type: "Play",
        argument: {
          type: "Identifier",
          name: tokens[current + 2].value
        }
      });

      current = current + 5;
    }

     else if (
      current + 4 < tokens.length &&
      tokens[current].type === "KEYWORD" &&
      tokens[current].value === "passPlay" &&
      tokens[current + 1].type === "LPAREN" &&
      tokens[current + 2].type === "STRING" &&
      tokens[current + 3].type === "RPAREN" &&
      tokens[current + 4].type === "SEMICOLON"
    ) {
      ast.body.push({
        type: "passPlay",
        argument: {
          type: "String",
          name: tokens[current + 2].value
        }
      });

      current = current + 5;
    }

     else if (
      current + 4 < tokens.length &&
      tokens[current].type === "KEYWORD" &&
      tokens[current].value === "drive" &&
      tokens[current + 1].type === "LPAREN" &&
      tokens[current + 2].type === "IDENTIFIER" &&
      tokens[current + 3].type === "RPAREN" &&
      tokens[current + 4].type === "SEMICOLON"
    ) {
      ast.body.push({
        type: "drive",
        argument: {
          type: "Condition",
          name: tokens[current + 2].value
        }
      });

      current = current + 5;
    }
         
    else {
        throw new Error("Syntax error:" + current);
    }
  }
    return ast;
}
