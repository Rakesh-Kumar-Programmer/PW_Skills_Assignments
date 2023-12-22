//Problem 4:-

//Use a ternary operator to check that a person is eligible to vote or not by checking his age. If the age of the person is less than 18 then “You cannot vote” should be logged else “You can vote” :-

const age = 18; // value 18 assign to age variable.

let rightToVote = age >= 18 ? 'can' : 'cannot' ; // check ternary operator

console.log(`You ${rightToVote} vote`); // result : can