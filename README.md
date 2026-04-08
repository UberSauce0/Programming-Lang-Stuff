# Programming-Lang-Stuff
## Group Members 
1. Ryan Zetterberg
2. Joseph Kang
--------------------- 
Name: Football Script

## Language Theme Image
<img width="300" height="300" alt="image" src="https://github.com/user-attachments/assets/0e57de8d-ecfa-4fb2-aa74-089dbe2f2b67" />

## Overview
LangCraft Football Script is a custom programming language inspired by American Football.
It replaces traditional programming concepts with football terminology such as plays, drives, and players.

The Language is designed to simulate football logic while demonstrating programming fundamentals such as variables, loops, and conditionals.

## Example for Code Snippet
```Football
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


