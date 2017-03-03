//Assignment 3, Part 1
//
//Practice with Arrays (5 points)
//Within a new web page, create the following applications. Remember to comment out every application once you’ve finished with that step:
//1. Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
     // ANSWER
//var arrMovies = ["Philomena", "Marco Polo", "Alexander", "Woman in gold", "The Crown"];
//window.console.log(arrMovies[1]);


//2. Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.
     // ANSWER
//var arrMovies = new Array(5);
//arrMovies[0] = "Philomena";
//arrMovies[1] = "Marco Polo";
//arrMovies[2] = "Alexander";
//arrMovies[3] = "Woman in gold";
//arrMovies[4] = "The Crown";
//window.console.log(arrMovies[0]);


//3. Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.
       // ANSWER
//var arrMovies = ["Philomena", "Marco Polo", "Alexander", "Woman in gold", "The Crown"]; 
//arrMovies[2] = "Analyze this";
//arrMovies[3] = "Alexander";
//arrMovies[4] = "Woman in gold";
//arrMovies[5] = "The Crown";
//window.console.log(arrMovies);


//4. Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.
       // ANSWER
//var arrMovies = [];
//arrMovies[0] = "Philomena";
//arrMovies[1] = "Marco Polo";
//arrMovies[2] = "Alexander";
//arrMovies[3] = "Woman in gold";
//arrMovies[4] = "The Crown";
//delete arrMovies[0];
//window.console.log(arrMovies);


//5. Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window.
       // ANSWER
//var arrMovies = [];
//var i =0 ;
//arrMovies[0] = "Philomena";
//arrMovies[1] = "Marco Polo";
//arrMovies[2] = "Alexander";
//arrMovies[3] = "Woman in gold";
//arrMovies[4] = "The Crown";
//arrMovies[5] = "Analyze this";
//arrMovies[5] = "Meet the Fockers";
//do {
//window.console.log(arrMovies[i]);
//	i++;
//}while (i < arrMovies.length);

//6. Now, use a for-in loop to iterate through the array and display each movie within the console window.
      // ANSWER
//var arrMovies = [];
//arrMovies[0] = "Philomena";
//arrMovies[1] = "Marco Polo";
//arrMovies[2] = "Alexander";
//arrMovies[3] = "Woman in gold";
//arrMovies[4] = "The Crown";
//arrMovies[5] = "Analyze this";
//arrMovies[5] = "Meet the Fockers";
//for (var i=0; i<arrMovies.length; i++) {
//window.console.log(arrMovies[i]);
//}


//7. Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.
     //ANSWER
//var arrMovies = [];
//var i =0 ;
//arrMovies[0] = "Philomena";
//arrMovies[1] = "Marco Polo";
//arrMovies[2] = "Alexander";
//arrMovies[3] = "Woman in gold";
//arrMovies[4] = "The Crown";
//arrMovies[5] = "Analyze this";
//arrMovies[5] = "Meet the Fockers";
//do {
//for ( var x in arrMovies){
//	window.console.log(arrMovies[x]);
//	i++;}
//}while (i < arrMovies.length);


//8. Under the previous movies array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):
//Movies I like:
//
//Movie 1
//Movie 2
//Movie 3
//…
//
//Movies I regret watching:
//
//Movie 1
//Movie 2
//Movie 3
    // ANSWER
//var arrMoviesLike = ["Philomena", "Marco Polo", "Alexander", "Woman in gold", "The Crown"]; 
//var arrMoviesRegret = ["Aa", "Bb", "Cc"];
//arrMoviesAll = arrMoviesLike.concat(arrMoviesRegret);
//var i=0;
//do {
//window.console.log("Movies I like watching: ");
//for ( var x in arrMoviesLike){	
//	window.console.log(arrMoviesLike[x]);
//	i++;}
//window.console.log("Movies I regret watching: ");
//for ( var y in arrMoviesRegret){
//	window.console.log(arrMoviesRegret[y]);
//	i++;}
//}while (i < arrMoviesAll.length);


//9. Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.
    // ANSWER
//var arrMoviesLike = ["Philomena", "Marco Polo", "Alexander", "Woman in gold", "The Crown"]; 
//var arrMoviesRegret = ["Aa", "Bb", "Cc"];
//var arrMoviesAll = arrMoviesLike.concat(arrMoviesRegret);
//window.console.log("All movies  " +arrMoviesAll);
//var arrMoviesAllReverse = arrMoviesAll.reverse();
//window.console.log("Reverse  " + arrMoviesAllReverse);
//var arrMoviesAllReverseSort = arrMoviesAllReverse.sort();
//window.console.log("Reverse & Sort  " +arrMoviesAllReverseSort);


//10. Return just the last item in the array and display it within the console window.
    //ANSWER
//var arrMoviesLike = ["Philomena", "Marco Polo", "Alexander", "Woman in gold", "The Crown"]; 
//var arrMoviesRegret = ["Aa", "Bb", "Cc"];
//var arrMoviesAll = arrMoviesLike.concat(arrMoviesRegret);
//var arrMoviesAllReverse = arrMoviesAll.reverse();
//var arrMoviesAllReverseSort = arrMoviesAllReverse.sort();
//var i = arrMoviesAllReverseSort.length;
//lastItem = arrMoviesAllReverseSort[i-1];
//window.console.log("Last Item of  "+ arrMoviesAllReverseSort + "   is  " + lastItem);


//11. Remove the previous method and this time return just the first item in the array and display it within the console window.
    //ANSWER
//var arrMoviesLike = ["Philomena", "Marco Polo", "Alexander", "Woman in gold", "The Crown"]; 
//var arrMoviesRegret = ["Aa", "Bb", "Cc"];
//var arrMoviesAll = arrMoviesLike.concat(arrMoviesRegret);
//var arrMoviesAllReverse = arrMoviesAll.reverse();
//var arrMoviesAllReverseSort = arrMoviesAllReverse.sort();
//var i = arrMoviesAllReverseSort.length;
//firstItem = arrMoviesAllReverseSort[0];
//window.console.log("First Item of  "+ arrMoviesAllReverseSort + "   is  " + firstItem);

//12. Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. 
    //ANSWER
//var arrMoviesLike = ["Philomena", "Marco Polo", "Alexander", "Woman in gold", "The Crown"]; 
//var arrMoviesRegret = ["Aa", "Bb", "Cc"];
//
//var arrMoviesAll = arrMoviesLike.concat(arrMoviesRegret);
//alert("These are all movies including the ones I don't like:" + arrMoviesAll);
//
//var newMoviesILike = ["ZZ", "HH", "MM"];
//
//var arrMoviesAll= arrMoviesAll.splice(0, 4);
//var arrMoviesAll = arrMoviesAll.concat(newMoviesILike);
//alert("These are the final movies:" + arrMoviesAll);


//13. Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window. 
    //ANSWER
//var employee1 =[];
//employee1 ["id"] = 3456;
//employee1 ["name"] = "Juan Perez" ;
//employee1 ["title"] = "programer"  ;
//employee1 ["department"] = "IT" ;
//employee1 ["isActive"] = false; 
//				 
//var employee2 =[];
//employee2 ["id"] = 7890;
//employee2 ["name"] = "Rosa Garcia" ;
//employee2 ["title"] = "Graphic Designer" ;
//employee2 ["department"] = "Design" ;
//employee2 ["isActive"] = true; 		
//
//window.console.log(employee2["name"]);


//14. Using the above code, modify the code slightly so that you’re using a loop to loop through the array and printing out the names of both employees.
    //ANSWER
//var employee = [] ;
//employee[0] =
//	[[id = 3456],[name = "Juan Perez"],[title = "programer"],[department = "IT"],[isActive = false ]];
//
//employee[1] = 
//	[[id = 7890],[name = "Rosa Garcia"],[title = "Graphic Designer"],[department = "Design"],[isActive = true]];
// 
//for (var j=0; j<=employee.length; j++) { 	
//window.console.log(employee[j][1]);	
//};


//*15. And to really tick you off, add a third employee and set his employment status to false. Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window.
    //ANSWER
//var employee = [] ;
//employee[0] =
//	[3456, "Juan Perez","programer","IT",true ];
//
//employee[1] = 
//	[7890,"Rosa Garcia","Graphic Designer","Design",true];
//
//employee[2] = 
//	[4680,"Alice Fuentes","Public Relations","Marketing",false];
//
//for (var i=0; i<=employee.length; i++) {
//	if (employee[i][4]){
//window.console.log("This is are active employees " +employee[i][1]);	
//	} else {
//window.console.log("This are not active employees " + employee[i][1])}
//};


//16. Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: 
//movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
//Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.
    //ANSWER
//var arrMoviesLike = [["Philomena", 4], ["Marco Polo", 4], ["Alexander", 5] , ["Woman in gold", 4], ["The Crown", 3]]; 
//
//for (var i=0; i<= arrMoviesLike.length; i++){
//	key = arrMoviesLike[i];
//	for var j=0; j<=key.length; j++) {
//		value = key[j];
//	}
//	function displayMovie(){
//		for (var j = 1){
//		alert(key(value[j]);
//}}


//Practice with Functions (5 points)
//*1. Create an anonymous function named displayMessage that accepts one parameter. Within the function write a statement that prints out the value of the parameter out into the console window. Now, call the function and pass in a string as the parameter in the function call.
    //ANSWER
//function displayMessage (){
//    var x !== " " ;
//  window.console.log(x);
//}
//displayMessage("Buenas tardes!");

//2. Create a named function named calculate that accepts two parameters. Within the function write a statement that returns the modulus of the first and second parameters. Now, call the function and pass in two numbers as parameters into the function call. Make sure to display the result within the console window.
    //ANSWER
//function calculate(x, y) {
//	return x | y;
//};
//
//window.console.log(calculate(3, 6));

//*3. Create a string array called employees and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:
//
//Employees: 
//
//ZAK 
//JESSICA 
//MARK 
//FRED 
//SALLY
    //ANSWER
//------OPTION 1
//var employees = ["Juan Garcia", "Ana Lopez", "Pablo Martinez", "Marta Juarez"];
//function showEmployee(x) {
//	for (i=0; i<= employees.length; i++){
//	window.console.log ("Employees:" + "\n" + "\n" + showEmployee[i]+ "\n");
//	};};
//	
//showEmployee(employees);

//-----OPTION 2
		////var employees =["Juan Garcia", "Ana Lopez", "Pablo Martinez", "Marta Juarez"];
		////alert(employees instanceof Array); //just checking

//function showEmployee(array) {
//    if (array instanceof Array) {
//        return array.length;
//		for (i=0; i<= array.length; i++){
//		window.console.log ("Employees:"+"\n");
//		window.console.log ("\n" +  " "+"\n");
//		window.console.log ("\n" +  " "+"\n");
//		window.console.log (array[i])	
//		};
//    } else {
//        return 0;
//}
//var employees =["Juan Garcia", "Ana Lopez", "Pablo Martinez", "Marta Juarez"];
//showEmployee(employees);

