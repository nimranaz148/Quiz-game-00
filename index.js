import inquirer from "inquirer";
let point = 0;
let num_of_questions = 0;
console.clear();
console.log("--------------Welcome To Quiz Game-------------");
let options = await inquirer.prompt({
    name: "question",
    type: "list",
    message: "Please select one",
    choices: ["Array"]
});
//--------------------------Array q1------------------------------
if (options.question === "Array") {
    let array1 = await inquirer.prompt({
        name: "ans",
        type: "list",
        message: "What is the correct way to declare a TypeScript array?",
        choices: ["let arr = [1, 2, 3]", "const arr = (1, 2, 3)", "array arr = [1, 2, 3]", "var arr = {1, 2, 3}"]
    });
    ++num_of_questions;
    if (array1.ans === "let arr = [1, 2, 3]") {
        console.log("correct answer ");
        ++point;
    }
    else {
        console.log("incorrect answer");
    }
    //-----------------------------Array q2---------------------------
    let array2 = await inquirer.prompt({
        name: "ans",
        type: "list",
        message: "How can you access the third element in a TypeScript array?",
        choices: ["arr(2)", "arr[3]", "arr(3)", "arr[2]"]
    });
    ++num_of_questions;
    if (array2.ans === "arr[2]") {
        console.log("correct answer");
        ++point;
    }
    else {
        console.log("incorrect answer");
    }
    //-------------------------------Array q3-----------------------
    let array3 = await inquirer.prompt({
        name: "ans",
        type: "list",
        message: "What method is used to add elements to the end of a TypeScript array?",
        choices: ["append()", "insert()", "add()", "push()"]
    });
    ++num_of_questions;
    if (array3.ans === "push()") {
        console.log("correct answer");
        ++point;
    }
    else {
        console.log("incorrect answer");
    }
    console.log(`\n
        your correct answer is: ${point}
        your incorrect answer is: ${num_of_questions - point}
        you got ${point} points`);
    let confirm = await inquirer.prompt({
        name: "ans",
        type: "confirm",
        message: "Do you want to play more"
    });
    //-------------------------------function---------------------------
    if (confirm.ans === true) {
        let options2 = await inquirer.prompt({
            name: "question",
            type: "list",
            message: "please select one",
            choices: ["Functions"]
        });
        //-----------------------------------function q1--------------------
        if (options2.question === "Functions") {
            let function1 = await inquirer.prompt({
                name: "ans",
                type: "list",
                message: "What is the purpose of using typescript functions?",
                choices: ["To manipulate strings", "To write reusable code", "To create loops", "To style web pages"]
            });
            ++num_of_questions;
            if (function1.ans === "To write reusable code") {
                console.log("correct answer");
                ++point;
            }
            else {
                console.log("incorrect answer");
            }
            //-----------------------------function q2---------------------------
            let function2 = await inquirer.prompt({
                name: "ans",
                type: "list",
                message: "How do you declare a function in typescript?",
                choices: ["func myFunction()", "function myFunction()", "def myFunction()", "method myFunction()"]
            });
            ++num_of_questions;
            if (function2.ans === "function myFunction()") {
                console.log("correct answer");
                ++point;
            }
            else {
                console.log("incorrect answer");
            }
            //-------------------------------function q3-----------------------
            let function3 = await inquirer.prompt({
                name: "ans",
                type: "list",
                message: "What is the correct way to call a typescript function named 'add' with two arguments?",
                choices: ["call add", "function add", "add()", "add(argument1, argument2)"]
            });
            ++num_of_questions;
            if (function3.ans === "add(argument1, argument2)") {
                console.log("correct answer");
                ++point;
            }
            else {
                console.log("incorrect answer");
            }
        }
        console.log(`\n
    your correct answer is: ${point}
    your incorrect answer is: ${num_of_questions - point}
    you got point ${point} point `);
    }
}
console.log("---------Thank you for playing Quiz 🎉--------------");
