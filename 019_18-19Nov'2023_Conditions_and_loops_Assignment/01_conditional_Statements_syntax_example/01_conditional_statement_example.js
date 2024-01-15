// conditional statements example

let value1 = 10;
let value2 = 20;

// if statement example

if (value1 == 10) {
  console.log(`Value1 is equal to 10 , condition true`);
}

// if else statement example

if (value1 > value2) {
  console.log(`if value1 is grater then value2`);
} else {
  console.log(`else statement exicuted "value1 is not grater then value2"`);
}

// nested if statement example
// check user email or passward fill correctly or not

let email = "rakesh.bahel@gmail.com";
let passward = "passward";

if (email) {
  if (passward) {
    console.log(`Thanks for entring email & passward, welcome user`);
  } else {
    console.log(`please enter your passward`);
  }
} else {
  console.log(`please enter your email ID`);
}

// if else if ladder example
// check value2 = 20 is even or odd ?

if (value2 == 0) {
  console.log(`value2 is not even nor odd ,this is zero`);
} else if (value2 % value1 == 0) {
  console.log(`value2 is even number `);
} else {
  console.log(`value2 is odd number`);
}
