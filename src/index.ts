import inquirer from "inquirer";
import { calculateDistance } from "./calculateDistance";

const prompt = inquirer.createPromptModule();
let numberOfTestCases = 0;
let numberOfRows: number[] = [];

// Prompter function
prompt([
  { type: "input", message: "number of test cases", name: "entry0" },
  {
    type: "input",
    message: "how many rows and columns (space sperated)",
    name: "entry1",
  },
]).then((answers) => {
  const listOfInput = [];
  numberOfTestCases = answers.entry0;
  // Recording each test case input
  for (let i = 0; i < numberOfTestCases; i++) {
    numberOfRows = answers.entry1.split(" ");
    for (let j = 0; j < numberOfRows[0]; j++) {
      listOfInput.push({
        type: "input",
        message:
          "Insert Zero indicating Black and One indicating White for test case " +
          (i + 1) +
          " in row " +
          (j + 1) +
          ":",
        name: "testCase" + i + "row" + j,
      });
    }
  }
  prompt(listOfInput).then((rawInput) => {
    for (let i = 0; i < answers.entry0; i++) {
      const testCase = [];
      for (let j = 0; j < numberOfRows[0]; j++) {
        const row = rawInput[`testCase${i}row${j}`];
        // Creating a matrices
        testCase.push(row.split("").map(Number));
      }
      console.log("Result for testCase " + i + ":");
      console.log(calculateDistance(testCase as any));
    }
  });
});
