// JavaScript Function Exercises

// 1. Define a function called "divideByTwo". It should accept one parameter called "number".
//    The function should divide the number by two and output the answer.
console.log('Question 1');
var divideByTwo = function (number){
  var val = number / 2
  console.log(val);
};
divideByTwo(24);

// 2. Define a function called "greeting". It should accept two parameters, which will be names.
//    The function should output the a greeting to both people.
console.log('Question 2');
var greeting = function(question, name) {
	var greetingFunc = question + name
  console.log(greetingFunc);
};
var question = "Good morning ";
var name = "David!";
greeting(question, name);

// 3. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month, but the price keeps changing.
//    Write a function that takes the price per unit and calculates the total for you each month.
console.log('Question 3');
var price = function (monthPrice) {
  return monthPrice * 6;
};
  var priceMonth = price();
  console.log(priceMonth);
var monthlyPrice = 7.99;
var pricePerMonth = monthlyPrice * 6;
price(priceMonth);

// 4. Write a function that accepts the following array and separates the people into two teams.
//    No names next to eachother in the array should be on the same team.
console.log('Question 4');
teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]
// this is my incorrect code. just kept here to see what i did wrong
// function everyOther(teammates) {
//   for (var i = 0, x = 0; i < teammates.length; i++, t += 2){
//     nameEveryOther[key[i]] = value.slice(0, lineLength[x]);
//   }
// }
// everyOther(teammates);
var odd = [];
var even = [];
var teammate;
for (var i = 0; i < teammates.length; i++) {
  teammate = teammates[i];
  var remainder = i % 2;
  var isOdd = remainder === 1;
  if (isOdd){
  	even.push(teammate);//since Harlod is in the 1st spot he's technically odd, even though he's in 0 index spot
  } else {
    odd.push(teammate);
  }
  //console.log(i, teammate);//this is only to show the loop logging the people coming out of the array
}
console.log('even' , even);
console.log('odd' , odd);


// 5. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.
console.log('Question 5');
var quarter = function (number) {
  var value = number * .25
  console.log(value);
};
quarter(24);

// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.
console.log('Question 6');
var geometry = function(length, width) {
  var areaRec = length * width
  var perimeterRec = length + length + length + length
  console.log (areaRec);
  console.log (perimeterRec);
}
var length = 6;
var width = 4;


// 7. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, print a statement to the console about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.
console.log('Question 7');
var sleepings = function(hours){
  if(hours >= 8){
    msg = "That\'s too much sleep!";
  } else {
    msg = "That\'s not enough sleep!";
  }
  return msg
  }
var message = sleepings(6);
console.log(message);

// 8. Prompt a user to enter a three digit number. Write a function that adds the numbers together.
//    HINT: You may need to google how to turn a string into an integer.
//          Note: Strings can be treated as arrays too.
// console.log('haha so funny' [5]);// the string can be used like an array- pulls out the 5th character
console.log('Question 8');
function getAndAddDigits(){
  var digits = prompt('Please enter a three digit number!');
  alert(getAndAddDigits(digits));
}
getAndAddDigits();
getAndAddDigits()

var num = [1, 2, 3, 4, 5];
console.log(addDigits ('123'));
console.log(addDigits ('124678759853'));
console.log(addDigits ('1674687823'));
console.log(addDigits ('124345356767463'));

function addDigits(str) {
	var total = 0;
	for (var i = 0; i < str.length; i++) {
		total += +str[i];
	}
	return total;
}
function addThreeDigits(str){
	return +str[0] + +str[1] + +str[2];
}
console.log(addThreeDigits('123'))

// 9. You've finally gotten around to counting the change in your piggy bank. Write a function that accepts four parameters (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Googling the toFixed method will help you with the format.

// 10. Develop a function that determines a person's age by prompting them for their birth year.


// 11. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.

// 12. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
       arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]

// 13. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     To get the random number rolled by each die, use Math.random and Math.floor.

// 14. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.

// Extra Challenge:
// 15. Write a function that takes a year and reports whether or not it is a leap year.
//     Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is.  1900 is not a leapyear, but 2000 is.
