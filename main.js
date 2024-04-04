#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let mypin = 12345;
//promt strt
const pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin",
    },
]);
//promt end
//if else pin
// console.log(atm.q1);
if (pinAnswer.pin === mypin) {
    console.log("correct pin code!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select",
            type: "list",
            choices: ["fast cash", "withdraw", "check balance"],
        },
    ]);
    //fast cash 
    if (operationAns.operation === "fast cash") {
        let fast = await inquirer.prompt([
            {
                type: "list",
                name: "fast cash",
                message: "select your amoun",
                choices: [1000, 2000, 5000, 10000]
            }
        ]);
        myBalance -= fast["fast cash"];
        console.log("your trancsation successfully completed your remaining balnce is :" + myBalance);
    }
    //withrw ki amoungt
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enteryour amount",
                type: "number",
            },
        ]);
        //-= -=  += assign bh subraction bh
        //  myBalance -= amountAns.amount;
        //  console.log("your remaining balnce is :" + myBalance);
        //balnce chk krny k lye arthimatic operation use kia hai
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance. Please enter a valid amount.");
        }
        else {
            myBalance -= amountAns.amount;
            console.log("Your transaction  successful. Your remaining balance is: " + myBalance);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`you balnce is :${myBalance} `);
    }
}
else {
    console.log("incorrect pin");
}
