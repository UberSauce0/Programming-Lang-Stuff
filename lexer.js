const grammar = {
  variable_declaration: [
  "KEYWORD(let)",
  "IDENTIFIER",
  "EQUALS",
  "NUMBER",
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
  {type: "KEYWORD", value: "let"},
  {type: "IDENTIFIER", value: "x"},
  {type: "EQUALS", value: "="},
  {type: "NUMBER", value: "3"},
  {type: "SEMICOLON", value: ";"},

  {type: "KEYWORD", value: "play"},
  {type: "LPAREN", value : "("},
  {type: "IDENTIFIER", value: "x"},
  {type: "LPAREN", value : ")"},
  {type: "SEMICOLON", value: ";"},
]
