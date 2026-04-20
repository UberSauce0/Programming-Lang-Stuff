# Programming-Lang-Stuff
## Group Members 
1. Ryan Zetterberg
2. Joseph Kang
--------------------- 

## Name of the Language
Name: Football Script

## Image/Picture 
<img width="300" height="300" alt="image" src="https://github.com/user-attachments/assets/0e57de8d-ecfa-4fb2-aa74-089dbe2f2b67" />

## Overview
LangCraft Football Script is a custom programming language inspired by American Football.
It replaces traditional programming concepts with football terminology such as plays, drives, and players.

The Language is designed to simulate football logic while demonstrating programming fundamentals such as variables, loops, and conditionals.

## Example Code Snippet
```Football```
//Game Starts
team Lions;
score = 4;
down = 3;
yards = 6;

// Define a play
play runPlay(rb){
  yards = yards + 5;
}

//Drive Loop
drive(down <= 4){
  runPlay(rb);

ifDown (yards >= 10){
  result = "First Down"
  down = 1;
  yards = 0;
} elsePlay {
  down = down + 1;
  }
}

//Checking if Touchdown
ifDown (yards >= 100){
  touchdown;
}
```Football```

## Full Syntax Table

| Element | Example | Description |
|--------|--------|--------|
| Variable | score = 4; | Value Storage |
| Integer | yards = 6; | Numbers |
| String | "Lions" | Text
| Boolean| win = true; | True/False |
| Block | { } | Code Block
| Condition | ( ) | Logic Check
| End Statement | ; | End of the coding line
| Pass Action | QB -> WR; | Passing Play |
| Addition | + | Yards Gain |
| Subtraction | - | Loss of Yards |
| Function | play | Define play |
| Loop | drive | Repeating it |
| Conditional | ifDown | If Statement |
| Else | elsePlay | Else block |
| Object | roster | Player/team |

## Grammar Statements

program = { statement } ;
statement = variable | play | drive | conditional ;
variable = identifier "=" value ";" ;


