console.log("hello world");
function discount(age, resident, member) {
  age < 12 || age > 65,
    resident || member ? console.log("Yes") : console.log("No");
}
discount(10, false, true);
