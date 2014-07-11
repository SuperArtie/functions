var prompt = require('sync-prompt').prompt;

function increment(x){
  x++;
  return x;
}

function square(x){
  x *= x;
  return x;
}

function area(length, width){
  return length * width;
}

function volume(l, w, h){
  return area(l,w) * h;
}

function sayHello(){
  console.log('world');
}

function makeUpper(string){
  return string.toUpperCase();
}

function canDrink(age){
  return (age >= 21);
}

function letterGrade(grade){
  if(grade >= 90){
    return 'A';
  }else if(grade >= 80){
    return 'B';
  }else if(grade >= 70){
    return 'C';
  }else if(grade >= 60){
    return 'D';
  }else{
    return 'F';
  }
}

function addTax(amount, tax){
  return amount + (amount * (tax/100));
}

function sum(numbers){
  var sigma = 0;

  for(var i = 0; i < numbers.length; i++){
    sigma += numbers[i];
  }

  return sigma;
}

function factorial(n){
  var product = 1;

  for(var i = 2; i <= n; i++){
    product *= i;
  }

  return product;
}

function rollDie(){
  return Math.floor(Math.random() * 6) + 1;
}

function isPair(roll1, roll2){
  return roll1 === roll2;
}

function countPairs(x){
  var count = 0;

  for(var i = 0; i < x; i++){
    if(isPair(rollDie(), rollDie())){
      count++;
    }
  }

  return count;
}

var z;

z = countPairs(10000);
console.log(z);

for(var i = 0; i < 10; i++){
  z = rollDie();
  console.log('roll:', z);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

sayHello();
z = sum([2,3,4]);
z = canDrink(25);
z = makeUpper('hello');
z = area(square(increment(3) + increment(4)), square(2));
z = increment(3);
z = square(2);
z = area(3,4);
z = volume(3,4,5);

