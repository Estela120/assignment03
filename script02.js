//Assignment 3, Part 2
//	
//The Rock, Paper, Scissors Game (10 points)
//Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:
//Rock destroys scissors.
//Scissors cut paper.
//Paper covers rock.
//Our code will break the game into 3 phases:
//1. User makes a choice. How will we collect the user’s choice?
   //ANSWER
//var playerChoice = prompt("Choose one option from: rock, paper or scissors");

//2. Computer makes a choice. How will we collect the computer’s choice?
    //ANSWER
//var computerChoice = Math.random();

//3. A conditional that determines who wins.
//In this lab you will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path: 
//1. Begin by prompting the user for their choice.
    //ANSWER
//var playerChoice = prompt("Choose one option from: rock, paper or scissors");

//2. Create the computer’s choice. This will be generated similarly to the coin flip that you did last week. Remember though, rather than 2 options, there will be 3 here.
//3. Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
    //ANSWER
//var computerChoice = Math.random();
//if (computerChoice < 0.35) {
//    computerChoice = "rock";
//} else if(computerChoice <= 0.65) {
//    computerChoice = "paper";
//} else {
//    computerChoice = "scissors";
//}


//4. Create a conditional that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is. 
//5. What if the result ends in a tie? Figure out how to handle that as well.
//6. What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.
    //ANSWER
//var userChoice = prompt("Do you choose rock, paper or scissors?");
//if(userChoice !== 'rock' && userChoice !=='paper' && userChoice !== 'scissors'){
//console.log("Please enter a correct choice");
//}
//var computerChoice = Math.random();
//if (computerChoice < 0.35) {
//computerChoice = "rock";
//} else if(computerChoice <= 0.65) {
//computerChoice = "paper";
//} else {
//computerChoice = "scissors";
//}
//
//alert("Your choice is: " + userChoice +  " and the computer choice is: " + computerChoice);
//
//var compare = function(choice1, choice2){
//if(choice1 === choice2){
//return "There is no winner, result is a tie!";
//}
//if(choice1 ==='rock'){
//if(choice2 ==='scissors'){
//return 'rock wins';
//    }else {
//        return "paper wins";
//    }
//}
//if(choice1 === 'paper'){
//    if(choice2 === 'rock') {
//        return'paper wins';
//        }
//        else{
//            return 'scissors wins';
//        }
//    }
//    if(choice1 === 'scissors'){
//        if(choice2 === 'rock'){
//            return'rock wins';
//        }
//        else{
//            return 'scissors wins';
//        }
//    }
//};
//console.log(compare(userChoice,computerChoice));


//The Basic Calculator (10 points)
//In this part of the assignment you will build a simple calculator. You will ask the user for a number, a second number, and then finally ask them what kind of operation they want to perform, either add, subtract, multiply, or divide. Depending on what they select, you will perform that operation. To complete this lab follow the steps outlined here:
//1. Prompt the user for a number and store that in a variable.
      //ANSWER
//var num1 = prompt(Enter a number :);

//2. Prompt the user for a second number and store that in a variable.
     //ANSWER
//var num2 = prompt(Enter a second number :);

//3. Prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and store that in a variable.
     //ANSWER
//var operator = prompt(Enter a Math Operation to perform :);

//4. Create a new named function called calculate() that accepts 3 parameters.
     //ANSWER
//function calculate(num1, num2, operator) {
//    var n1 = num1;
//    var n2 = num2;
//	var op = operator;
//    switch (op) {
//		case "+":
//			var op = n1+n2;
//			break;
//		case "-":
//			var op = n1-n2;
//			break;	
//		case "*":
//			var op = n1*n2;
//			break;	
//		case "/":
//			var op = n1/n2;
//			break;
//		case "%":
//			var op = n1%n2;
//			break;
//		default :
//			alert ( "Is not a valid option, enter again");	
//	}
//	var result = (n1 op n2);
//	window.console.log(result);
//}


//5. Call the calculate function and pass in the 3 variables as parameters. 	
//HINT: You will need to convert the 2 numbers from strings to numbers.
     //ANSWER
//var num1 = prompt("Enter a number :");
//var num2 = prompt("Enter a second number :");
//var operator = prompt("Enter a Math Operation to perform :");
//var nnum1 = Number(num1);
//var nnum2 = Number(num2);
//function calculate (nnum1, nnum2, operator) {
//	var result = nnum1 * nnum2;
//	return result;
//}
//	print(result);
//    alert (result);


			   
//6. Within the calculate() function use a switch statement to evaluate the operation parameter being passed in. Depending on what it is, perform that operation, and display the result within an alert box.
//7. Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide, they are displayed an alert message telling them that. Then you’ll have to rerun the application so that the application asks the user for the numbers and operation once more.
     //ANSWERS 
//function fnOperator(op) { 
//    this.operation = op;
// debugger;
//    this.evaluate = function evaluate(param1, param2) {
//        switch(this.operation) {
//            case "+":
//                return param1 + param2;
//            case "-":
//                return param1 - param2;
//            case "*":
//                return param1 * param2;
//            case "/":
//                return param1 / param2;
//            case "<":
//                return param1 < param2;
//            case ">":
//                return param1 > param2;
//			  default:
//				alert( "Please rerun again the application!")
//        }
//    }
//}


//Death by JavaScript (4 points each for 20 points total)
//Solve the following function/array-related problems. Each solution should be written within its own function and the output should be displayed within a console window. The display should be the return value of the function call.
//1. Write a JavaScript function that when called, returns a passed in string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.
//Sample Data and Output
//Example string: 'webmaster' 
//Expected Output: 'abeemrstw'
     //ANSWER
//function inOrder(str)
//  {
//return str.split('').sort().join('');
//  }
//window.console.log(inOrder("This is a test"));


//2. Write a JavaScript function that accepts a string as a parameter and when called, converts the first letter of each word of the string to upper case characters and return it.
//Sample Data and Output
//Example string: 'the quick brown fox' 
//Expected Output: 'The Quick Brown Fox'
      //ANSWER
//function firstLetterUpperCase(str)
//{
//  var array01 = str.split(' ');
//  var newArray = [];  
//  for(var x = 0; x < array01.length; x++){   newArray.push(array01[x].charAt(0).toUpperCase()+array01[x].slice(1));
//  }
//  return newArray.join(' ');
//}
//window.console.log(firstLetterUpperCase("this is a test"));

//3. Write a JavaScript function that accepts a string as a parameter and when called, counts the number of vowels within the string and returns that number.
//Sample Data and Output
//Example string: 'The quick brown fox' 
//Expected Output: 5
     //ANSWER
//function countVowels(str1)
//{
//  var listOfVowels = 'aeiouAEIOU';
//  var result = 0;
//  for(var x = 0; x < str1.length ; x++)
//  {
//	  if (listOfVowels.indexOf(str1[x]) !== -1)
//	  {
//		  result += 1;  // I'm counting here
//		}
//	  }
//  return result;
//}
//window.console.log(countVowels("This is a test"));


//4. Write a JavaScript function that when called, generates a string id (specified length) of 8 random characters and returns those characters as a string. This is a great application to learn for making password generator-type applications.
//Sample Data and Output
//Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA
    //ANSWER
//function idGenerator(leng)
//{
//var listOfChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//var text = "";
//	for(var i=0; i < leng; i++ )
//	{  
//	var temp1 = Math.floor(Math.random() * listOfChars.length);
//	text += listOfChars.charAt(temp1);
//	alert(text);
//		//text += listOfChars.charAt(Math.floor(Math.random() * listOfChars.length)); // another way
//	}	
//		return text;
//}
//window.console.log(idGenerator(10));


//5. Write a JavaScript function that accepts a list of country names as input and when called, returns the longest country name as the output.
//Sample Data and Output
//Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
//Expected output: "United States of America"
  //ANSWER
//function longestName(countryName)
//{
//  for ( i=0 ; i>= longestName.length; i++){
//var oneName = longestName[i];
//	if (oneName > longestName[i]) {
//  oneName = longestName[i];
//	} else {
//	i = i++;
//}
//}
//	window.console.log(oneName);

//longestName(["Argentina", "Germany", "United States of America"]);