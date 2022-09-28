console.log("test running ...");

console.log(process.argv);

var args = process.argv;

var operator = args[2];

var num1 = parseInt(args[3]);

var num2 = parseInt(args[4]);

console.log(operator, typeof num1, typeof num2);

if (operator === "add") {
  console.log(num1 + num2);
}

if (operator === "subtract") {
    console.log(num1 - num2);
}

if (operator === "multiply") {
    console.log(num1 * num2);
}

if (operator === "divide") {
    console.log(num1 / num2);
}

