const ageCalculator = function(name, yearOfBirth, currentYear){
  let age = currentYear - yearOfBirth;
  let finalExpression = (name + ' is '+ age + ' years old.');
  return finalExpression
}

console.log(ageCalculator("Suzie", 1983, 2015));
