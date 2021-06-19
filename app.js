// CHAPTER 17-20 ARRAYS AND LOOP

// 1.Declare and Initialize an empty multidimensional Array.
// (Array of Arrays)
//var arrayOfArrays = [ [], [], [] ];

//2.Declare and Initialize a multidimensional array representing the following matrix.
// var matrix = [ [0,1,2,3], [1,0,1,2], [2,1,0,1] ];
// for (var a = 0; a < 4; a++){
//     for(var b = 0; b < 4; b++){
//         document.write(matrix[a][b] + "   ");
//     }
//     document.write("<br>");
// }

// 3.Write a program to print numeric counting from 1 to 10.
// for( var a = 1; a <= 10; a++){
//     document.write([a] +"<br>");
// }

// 4.Write a program to print multiplication table of any number using for loop. 
// Table number & length should be taken as an input from user .
// var number = +prompt("Enter a number to show its Multiplication Table");
// var length = +prompt("Enter length multiplication table");

// document.write("Multiplication table of " + number);
// document.write("<br> Length "+ length +"<br>");
// for (var a = 1; a <= length; a++ ){
//       var table = a * number;
//     document.write("<br>"+`${number} * ${a} = ${table}`+ "<br>");
// }

// 5.Write a program to print items of the following array using for loop:

// var fruits = ["apple","banana","mango","orange","strawberry"];

// for(var a = 0; a < 5; a++){
//     document.write(fruits[a] + "<br>");
// }

// document.write("<br>Element at index O is "+ fruits[0]);
// document.write("<br>Element at index 1 is "+ fruits[1]);
// document.write("<br>Element at index 2 is "+ fruits[2]);
// document.write("<br>Element at index 3 is "+ fruits[3]);
// document.write("<br>Element at index 4 is "+ fruits[4]);

// 6.Generate the following Series in your browser.See Example Output.
 
// a.Counting: 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
// document.write("<h1>Counting:</h1>");
// for( var a = 1; a <= 15; a++){
//      document.write([a]+",");
// }

// b.Reverse counting: 10,9,8,7,6,5,4,3,2,1,
// document.write("<h1>Reverse Counting:</h1>");
// for( var a = 10; a >= 1; a--){
//      document.write([a]+",");
// }

// c.Even:0,2,4,6,8,10,12,14,16,18,20,
// document.write("<h1>Even:</h1>");
// for(a=0; a<=20; a++){
    
// if(a % 2 == 0){
//  document.write(a + ", ");
//  }
//  }

//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// document.write("<h1>Odd:</h1>");
// for(a=1; a<=19; a++){
//     if(a % 2 == 1){
//     document.write(a + ", ");
//     }
//     }

//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// document.write("<h1>Series</h1>");
// for(a=2; a<=20; a++){
    
// if(a % 2 == 0){
//  document.write(a + "k, ");
//  }
//  }

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
// var items = prompt("Welcome to ABC Bakery.What do you want to order Sir/Ma'am?");
// items = items.toLowerCase(); 
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]

// for (var i = 0; i <= 4; i++)
//  {    if (items === A[i])
//      {      alert(A[i]+" is available in our bakery at index "+[i]);  break
    
//     } 
    
//     else{
//         alert("We are Sorry. "+ items +" is not available in our bakery"); break
//     }
    
//     } 

// 8. Write a program to identify the largest number in the
// given array.
// var A = [24, 53, 78, 91, 12];
// var largest= 0;

// for (i=0; i<=largest;i++){
//     if (A[i]>largest) {
//         var largest=A[i];
//     }
// }
// document.write("Array Items: "+[A]);
// document.write("<br>The Largest Number is "+largest);

// 9. Write a program to identify the smallest number in the
// given array.
// 

// var A = [24, 53, 78, 91, 12];
// var min = Number.POSITIVE_INFINITY
// for (i = 0, l = A.length; i < l; i++) {
//   min = Math.min(min, A[i])
// }
// document.write("Array Items: "+[A]);
// document.write("<br>The Smallest Number is "+min);


// 10. Write a program to print multiples of 5 ranging 1 to
// 100.
// for(a =5; a<=100; a++){
//     if(a % 5 == 0){
//             document.write(a + ", ");
//             }
// }



//CHAPTER # 21-25 STRING METHODS


// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
// var firstName = prompt("Enter your first Name");
// var lastName = prompt("Enter your last Name");
// var fullName = firstName +" "+ lastName ;
// alert("Hey! "+fullName+" How are You?");

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
// var phoneModel = prompt("What's your favourite phone model");
// var charsInModel = phoneModel.length;
// document.write("My Favourite Phone is: "+phoneModel);
// document.write("<br>Length of String: "+charsInModel);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
// var str = "Pakistani";
// var n = str.indexOf("n");
// document.write("String: "+ str);
// document.write("<br>Index of 'n': "+ n);

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
// var str = "Hello World";
// var n = str.lastIndexOf("l");
// document.write("String: "+ str);
// document.write("<br>Last Index of 'l': "+ n);

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
// var str = "Pakistani";
// var res = str.charAt(3);
// document.write("String: "+ str);
// document.write("<br>Character at index '3': "+ res);

//6. Repeat Q1 using string concat() method.
// var str1 = prompt("Enter your first Name");
// var str2 = prompt("Enter your last Name");
// var res = str1.concat(str2);
// alert("Hey! "+res+" How are You?");

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
// var str = "Hyderabad";
// var res = str.replace("Hyder", "Islam");
// document.write("City: "+ str);
// document.write("<br>After Replacement: "+ res);


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = "Ali and Sami are best friends.They play cricket and football together.";
// var res = message.replace(/and/g, "&");
// document.write(message);
// document.write("<br>After Replacement: "+ res);

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
// var a = "472";
// document.write("Value: "+a);
// document.write("<br>Type: String");
// var a = parseInt("472");
// document.write("<br>Value: "+a);
// document.write("<br>Type: Number");


// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
// var a = prompt("Enter Your Word");
// b = a.toUpperCase(); 
// document.write("User Input: "+a);
// document.write("<br>Upper Case: "+b);

// 11. Write a program that takes user input. Convert and
// show the input in title case.
// var string = prompt("Enter Your Word");   
// var s = string.slice(0,1).toUpperCase() + string.slice(1).toLowerCase();
// document.write("User Input: "+string);
// document.write("<br>Title Case: "+s);


//12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.     
// var num = 35.36;
// var num = num.toString();
// document.write(num);


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var name = prompt("Enter Your Name");
// var symbol = ["@",".",",","!"];
// matchFound = false;
// for(var i = 0; i < name.length; i++){
//     for(var j = 0; j < symbol.length; j++){
//         if(name[i] === symbol[j]){
//             matchFound = true;
//             alert("Please! Enter Valid Name");
//         }
//     }
// }
// if(matchFound == false){
//     alert(name);
// }


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:
// var items = prompt("Welcome to ABC Bakery.What do you want to order Sir/Ma'am?");
// items = items.toLowerCase(); 
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]

// for (var i = 0; i <= 4; i++)
//  {    if (items === A[i])
//      {      alert(A[i]+" is available in our bakery at index "+[i]); break 
    
//     } 
//     else{
//         alert("We are Sorry. "+ items +" is not available in our bakery"); break
//     }
    
//     } 

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.


// var pass = prompt("Enter Your Password");
// var letterNumber = /^[0-9a-zA-Z]+$/;
// var number =  /^[0-9]+$/;

// if(pass.length < 6){
//     alert("Invalid Password!\nIt must at least 6 characters long");
// }
// else if((pass.slice(0,1).match(number))){
//     alert("Invalid Password!\nIt should not start with a number")
// }
// else if((pass.match(letterNumber))){
//     alert(pass)
// }
// else{
//     alert("Invalid Password!\nIt should only contain alphabets and numbers");
// }

 
// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
// var university = "University of Karachi";
// var ar = university.split(''); 
// document.write( ar );

// 17. Write a program to display the last character of a user
// input.
// var word = prompt("Enter your word");
// var res = word.charAt(word.length-1);
// document.write("User Input: "+ word);
// document.write("<br>Last Character of input:" +res);

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// var str = "The quick brown fox jumps over the lazy dog";
// var count = (str.match(/the/g) || []).length;
// document.write("Text: "+str);
// document.write("<br>There are "+count+"occurance(s) of word 'the'");