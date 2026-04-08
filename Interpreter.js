const fs = reqiure('fs');

// Get filename from command line
const filename = process.argv[2];

if(!filename) {
  console.log("Please select your .football file");
  process.exit(1);
}

// Read the file
fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  console.log("=== Football Interpreter ===");
  console.log(data);
});
