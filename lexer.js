const grammar = {
  variable_declaration: [
  "KEYWORD(let)",
  "IDENTIFIER",
  "EQUALS",
  "VALUE",
  "SEMICOLON",
  ],
  
  play: [
  "KEYWORD(play)",
  "LPAREN",
  "IDENTIFIER",
  "RPAREN",
  "SEMICOLON",
  ],
  
  passPlay: [
  "KEYWORD(passPlay)",
  "LPAREN",
  "STRING",
  "RPAREN",
  "SEMICOLON",
  ],
  
  drive [
  "KEYWORD(drive)",
  "LPAREN",
  "CONDITION",
  "RPAREN",
  "SEMICOLON",
  ],
  
  function: [
  "KEYWORD(passPlay)",
  "LPAREN",
  "ARG",
  "RPAREN",
  "SEMICOLON",
  ],
};

const tokens = [
  {}
]
