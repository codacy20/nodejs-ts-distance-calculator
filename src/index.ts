import inquirer from "inquirer";

const prompt = inquirer.createPromptModule();

prompt([
  { type: "input", message: "number of test cases?", name: "entry0" },
  {
    type: "input",
    message: "how many rows and columns (space sperated)",
    name: "entry1",
  },
]).then((answers) => {
  const listOfInput = [];
  for (let i = 0; i < answers.entry0; i++) {
    listOfInput.push({
      type: "input",
      message: "insert numbers indicating black and white",
      name: "row" + i,
    });
  }
  prompt(listOfInput).then((answers) => {
    console.log(answers);
  });
});
