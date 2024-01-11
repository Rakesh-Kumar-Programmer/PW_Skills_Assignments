function calculateTax(amount) {
  if (amount <= 20000) {
    return (amount = (amount * 10) / 100);
  } else if (amount > 20000 && amount <= 40000) {
    return (amount = (amount * 20) / 100);
  } else if (amount > 40001 && amount <= 80000) {
    return (amount = (amount * 30) / 100);
  } else amount > 80001;
  return (amount = (amount * 40) / 100);
}

console.log(`${calculateTax(80000)} tax to be paid by you`); // you can pass any value this function calculate the tax
