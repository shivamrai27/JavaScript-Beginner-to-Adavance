// console.log("Namaste World");
// console.log('Namaste World');
// console.log(" " + " ");

// var name = true;
// console.log(name);

////          💥typeof()💥
// console.log(typeof(name));

////  You can subtract string from integer

// console.log("9"-"2"); // Ans is 7   
// console.log(9-"2");  //Ans is 7

////  Lets subtract string from string
// console.log("Shivam" - "Rai") //NaN (Not a number)

////  But you cant add bcz it will concatinate

// console.log("9"+"2");
// console.log(9+"2");

// Lest substract Boolean(T/F)

// console.log(true+true) //// (1+1) ans 2 bcz true = 1
// console.log(false - false) //// (0+0) ans 0 bcz false = 0
// console.log(true - false) ////  (1-0) ans = 1
// console.log(false - true) //// (0-1) ans = -1

// var name = "hello";
// var number = 10;
// console.log(isNaN(name));  ////  isNaN(is Not a number) function
// console.log(isNaN(number));

//// 💥💥💥💥💥💥💥💥 OPERATORS 💥💥💥💥💥💥💥💥💥

////  💥......... Assignment operator..................💥
// var a = 5, b=5;
// console.log("is both number are equal" + a==b);
////  es6
// console.log(`is both are equal: ${a==b}`);

////  💥........Arithmatic Operator...................💥

//  console.log(3+2); //// Addtion operator
//  console.log(3-1); //// subtraction operator
//  console.log(3*2); //// multiplication opertaor 
//  console.log(30/2); ////  Divisio operator
//  console.log(33%2); ////  module or remainder operator

////  💥...........Pre and Post increment and decrement operator...........💥

// var num = 4;
// var newNum = num++;
// console.log(newNum);
// console.log(num);

// var num = 4;
// var newNum = ++num;
// console.log(newNum);
// console.log(num);

////  💥..................Comparison operator.....................💥

// var a = 7;
// var b = 4;

// console.log(a==b);
// console.log(a!=b);
// console.log(a>=b);
// console.log(a<=b);

// LOGICAL AND (&&)

// var a = 7;
// var b = 4;
// console.log(a>b && b==5); ////  all condition must be true for true ans

////  LOGICAL OR(||)

// var a = 7;
// var b = 4;
// console.log(a>b || b==44); ////  if one conditon is true then ans is true same for false condition

////  LOGICAL NOT (!) ////  it make true into false and vice versa
// var a = 7;
// var b = 4;
// console.log(!((a<5)||(b==4)));

////  💥..........Concatinating operator(+))..............💥

// var name = "Shivam";
// console.log(name + " Rai" );

////  💥.........Exponentitaion operator (**)..........💥

// console.log(10**3); ////  ans is 1000 it multiply 10 into 3 times
// console.log(3**3);  ////  ans is 27 it multiply 3 into 3 times
// console.log(10 ** -1); ////  ans is 0.1 expression is = 1/10

//// 💥.......value swapping using third variable..................💥

//  var a=3;
//  var b=5;
//  var temp;

//  temp = b;
//  b=a;
//  a=temp;
//  console.log("The vale of a is " + a);
//  console.log("The vale of b is " + b);

////  💥.......value swapping without using third variable..................💥

// var a = 5;
// var b = 10;

// a = a+b;
// b = a-b;
// a = a-b;
// console.log("The vale of a is " + a);
// console.log("The vale of b is " + b);

////  💥.....Difference beteween == and === ..........💥

// var num1 = 5;
// var num2 = '5';

// console.log(num1 == num2);  ////  true:  it check only values not data type
// console.log(num1 === num2); ////  fasle: it check both data type and values

////  💥💥💥💥....................Comtrol statement..................💥💥💥💥
// (if else)
// var a = 'rain';
// if(a === 'rain'){
//     console.log('Take a raincoat');
// }else{
//     console.log('No need a raincoat ');
// }

//// 💥 ...........Leap year programm..................💥

// var year = 2024;
// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             console.log(year + " is the leap year")
//         } else {
//             console.log(year + " is not the leap year")
//         }

//     } else {
//         console.log(year + " is the leap year")
//     }

// } else {
//     console.log(year + " is not the leap year")
// }

////  💥Truthy and falsy value in javaScript💥

////   ❗There are  6 falsy vlaues in javascript
////   ❗0, null, undefined, NaN, " ", false
////   ❗if we put any falsy value in if statement then it directly print or
////   ❗go in else block and execute the else section

// if (true){  //// to prevent from else block you can put any number or true in if block 
// console.log("hello");
// }else{
//     console.log("Hella");
// }

////  💥.................. Ternary Operator...............💥

// var age = 16;
// console.log((age >= 18)? "You can vote":"You can't vote");

////  💥........>Switch Case...................💥

// var area = 'triangle';
// var PI = 3.14, l = 5, b = 4, r = 3;

// switch (area) {
//     case 'circle'
//     :
//         console.log("The area of the cirle is : " + PI * r ** 2);
//         break;

//     case 'triangle':
//         console.log("The area of the triangle is : " + (l * b) / 2);
//         break;

//     case 'rectangle':
//         console.log("The area of the rectangle is " + (l * b));
//         break;

//     default:
//         console.log("please enter valid input");
// }

////  💥...............While Loop.....................💥

// var num = 11;
//  while (num<=1000) {
//      console.log(num);
//     num++;
//  }

////  💥 ...............Do-While Loop.....................💥

// var num = 11;
// do {
//     console.log(num);
//     num++;
// } while (num <= 10);

////  💥...............For Loop........................💥

// var tab = 19;
// for(var num = 1; num<=10; num++){
//     console.log(tab +" * " +num +" = "+tab*num);
// }


////  💥💥💥💥💥-----FUNCTION IN JAVASCRIPT-----💥💥💥💥💥💥

// function sum (a, b){ //// declare function with function keyword
//     return total = a+b;
// }
// console.log(sum(30,12)); // fun call

////  💥..........Function Expression..................💥

// function sum (a, b){
//     return total = a+b;
// }
// var exp = console.log(sum(3, 30));   ////  fun call and store in another variable
// exp;    ////  just by writing the name of variable ans is printed this is called function expression

////  💥.............. Anonymous Function..................💥

////  Anonymous function is similar to function expression
////  Anonymous function don't have any function name
////  here we directly declare and define the function in the variable

// var anoFun = function(a,b){  ////  no function name but we define or initialize in another variable
//     return total = a+b;
// }
// // if you just write the anonymous function name then it will return the whole function body
// // soo prevent form this you can call anonymous fun by using third variable too

// var sum = anoFun(10,10);
// console.log("The sum is "+ sum);

// var sum1 = anoFun(10,0);
// console.log("The sum is "+ sum1);

// console.log(sum > sum1);
// // or you can directly call inside console 
// console.log(anoFun(12,25));

////               💥.......Default Parameters.............💥


// function mul(a, b=5){ ////  here we set the value of b if we dont pass second value while fun calling it's fine
//     return a*b;
// }
// console.log(mul(7));



//// 💥💥💥===========> let , const and var <=========== ES6 (2015)💥💥💥

////     💥 ......Templete Literals(Templete String)...............💥

// for (let num = 1; num<=10;num++){
//     let tab = 12;
//     //     console.log(tab +" * " +num +" = "+tab*num);
//     ////  we can bypass string concatinationby this method
//     console.log(`${tab}*${num} =${tab*num}`);
// }


////  💥💥💥💥💥💥💥💥  ARRAY IN JAVASCRIPT  💥💥💥💥💥💥💥💥💥💥💥

////  💥💥💥💥💥💥💥💥  Traverseal in array  💥💥💥💥💥💥💥💥💥💥💥

////  You can add any value in array block of JS int or char etc.

// var myFriend = ['ram','shyam',"shivam",'mahesh','arjun'];
// console.log(myFriend); ////  traversal of an array print all elements
// console.log(myFriend[2]); ////  print the targeted element by giving its index position value which starts from 0
// console.log(myFriend.length); ////  it shows the the number elements present in an array so its index start from 1 for actual index number subtract to 1
// console.log(myFriend[myFriend.length-1]); ////  print the last element of array

////  💥.............Navigation using for Loop................💥

// var myFriend = ['ram','shyam',"shivam",'mahesh','arjun'];
// for (var i=0; i<myFriend.length;i++){
//     console.log(i);  //for index printing
//     console.log(myFriend[i]);// for elements printing
// }

////  💥.........For-in AND For-of Loops is JS.............💥
////  These types of loops are specially launch for array related work in ES6 (2015) 


////  💥for-in loop💥

////  they just print all the index numbers conatining in an array with elements word
// var myFriend = ['ram','shyam',"shivam",'mahesh','arjun'];
// for (elements in myFriend){
//     console.log(elements);
// }

////  💥for-of loop💥

////  they just print all the values conataining in that array ...not index value thats the only difference between for in and for of loop

// var myFriend = ['ram','shyam',"shivam",'mahesh','arjun'];
// for(elements of myFriend){
//     console.log(elements)
// }

////  💥..........for-each loop using anonymous fun............💥

////  this is all in one loop which can work both loops work
////  which is for-in and for-of  by using just one loop
////  for-each loop return undefined  
////  we cant apply break keyword in forEach Loop

// var myFriend = ['ram','shyam',"shivam",'mahesh','arjun'];
// myFriend.forEach(function(element, index, array){ ////  anonymus function is created
//     console.log(element); ////  we can see one by one result
//     console.log(index);
//   console.log(index+" "+element); //// or we can also see in this way too 
// });

////  💥..........for-each loop using fat arrow (=>) function............💥

////  for-each loop return undefined
////  fat arrow function is similar to anonymous fun but here 
////  we don't write function keyword too just  like we did in anonymous fun 
////  instead we use fat arrow in last of first closing parenthesis
////  fat arrow did'nt support this argument

// var myFriend = ['ram','shyam',"shivam",'mahesh','arjun'];
// let nmf = myFriend.forEach((element, index, array)=>{
//     console.log(` ${index} ${element} `);
//     //console.log(index+" "+element);
   
// });
// console.log(nmf) // we print for each loop return value hence it return undefine 
 
////  💥💥💥💥💥💥💥💥💥  searching and filter in an array💥💥💥💥💥💥💥💥💥

////  ⏪⏪⏪⏪⏪⏪⏪⏪⏪⏪ .indexOf() ⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩

////  It only return index number on which element is present
// Case sensitive
////  This search from left to right(first to last) in the index
////  If the entered string isn't present in the array block it will return -1
 

//var myFriend = ['ram','shyam',"shivam",'mahesh',"shivam",'arjun'];
// console.log(myFriend.indexOf("shivam")) ////   ans is 2 by default it searches from 0th index
//console.log(myFriend.indexOf("shivam",3)) ////  it will start searching from 3rd index and skip it previous index number
 

////  ⏪⏪⏪⏪⏪⏪⏪⏪⏪⏪ .lastIndexOf() ⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩

////  It is similar to indexOf the only differnce is it searches from last index
////  Case sensitive
////  This search from right to left(last to first) in the index
////  If the entered string isn't present in the array block it will return -1

// var myFriend = ['ram','shyam',"shivam",'mahesh',"shivam",'arjun'];
// console.log(myFriend.lastIndexOf("shivam")) ////  ans is 4 bcz from last it get "shivam" bcx from last it present on 4th index


////  ⏪⏪⏪⏪⏪⏪⏪⏪⏪⏪ .include() ⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩

////  It return true or false if the element required element is present

// var myFriend = ['ram','shyam',"shivam",'mahesh',"shivam",'arjun'];
// console.log(myFriend.includes('ram'))
// console.log(myFriend.includes('mahesh',4)) ////  it will return false bcz it will search from index 4 not going backward


////  ⏪⏪⏪⏪⏪⏪⏪⏪⏪⏪ .find() ⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩
//////////////////////////// .findIndex()
///////////////////////////  .filter()

////  Returns the found element in the array, if some element in the 
////  array satisfies , or undefined if not found.
////  Only problem is that it return only one element maybe other value exists but didn't show atall

 //const prices = [200,300,350,400,450,500,600];

 //{[price < 400]} suppose find the product whose price is less than 400 
 //// we have 3 output (200, 300, 350) but it only show 1 ans i.e. 200
 //const findElements = prices.find((element) =>  element < 400 );
 //console.log(findElements);



////  ⏪⏪⏪⏪⏪⏪⏪⏪⏪⏪ CRUD OPERATION ⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩

////           💥💥💥💥💥💥💥💥💥 .push() 💥💥💥💥💥💥💥💥💥

////  use to add one or more elements to the end of an array
////  and return the new length of array ex. if have 2 elements previously and you add 1 more then it will add and return 3 

// const  ufc = ['khabib', 'conor', 'dustin'];
// const count = ufc.push('diaz', 'brock');
// console.log(count)
// console.log(ufc); 

////           💥💥💥💥💥💥💥💥💥 .unshift() 💥💥💥💥💥💥💥💥💥

////  use to add one or more elements to the beginning of an array
////  and return the new length of array.

// const  ufc = ['khabib', 'conor', 'dustin'];
// const count = ufc.unshift('diaz', 'brock');
// console.log(count)
// console.log(ufc); 

////           💥💥💥💥💥💥💥💥💥 .pop() 💥💥💥💥💥💥💥💥💥

////  remove the last element of an array and returns that elements

// const lang = ['java', 'python', 'perl', 'dart', 'javascript'];
// const count = lang.pop()
// console.log(count);
// console.log(lang)

////           💥💥💥💥💥💥💥💥💥 .shift() 💥💥💥💥💥💥💥💥💥

////  remove the first element of an array and returns that elements

// const lang = ['java', 'python', 'perl', 'dart', 'javascript'];
// const count = lang.shift()
// console.log(count);
// console.log(lang)

////  ⏪⏪⏪⏪⏪⏪⏪⏪⏪⏪ splice Method ⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩

////  This method return deleted elements bcz we use this mostly for deletion purpose we can psuh also but return empty array bcz we did't delete anything
////  💥💥💥💥💥 We can add or remove from anywhare in an array 💥💥💥💥

//const game = ['FC', 'COD', 'BF', 'NFS', 'COC'];

// const newGame = game.splice(1,0,'AC'); ////  Index position where you want to add, 💥Any item you want to delete, 💥Element you wnat to add
// console.log(game)   

//  game.splice(game.length,0,'PUBG');  ////  this will add element at the last if you don't know the length
//  console.log(game)

// const newGame = game.splice(1,1,'CODMW'); ////   Here we pass desired starting indexnumber  (1) 💥 now delete COD by passing it's index vale (1 )💥 and update to 'CODMW'
// console.log(game)   


////  ⏪⏪ 💥Replace Raj Kumar to Raja Kumari without counting the index number of Raj Kumar use .indexOf() method💥 ⏪⏪

// var name = ["Mahesh Chand", "Jeff Prosise", "Dave McCarter", "Allen O'neill",  
// "Monica Rathbun", "Henry He", "Raj Kumar", "Mark Prime",  
// "Rose Tracey", "Mike Crown"];

//const iNum = name.indexOf('Raj Kumar');
// if(iNum != -1){
//     name.splice(iNum,1,'Raja Kumari') Repalced
//     console.log(name)
// } else {
//     console.log("wrong name entered")
// }


////  ⏪⏪ 💥Remove Henry He  without counting the index number of Henrey He use .indexOf() method💥 ⏪⏪

// var name = ["Mahesh Chand", "Jeff Prosise", "Dave McCarter", "Allen O'neill",  
// "Monica Rathbun", "Henry He", "Raj Kumar", "Mark Prime",  
// "Rose Tracey", "Mike Crown"];

// const iNum = name.indexOf('Henry He');
// if(iNum != -1){
//   const dNum =   name.splice(iNum,1) ////  just name is deleted
//   console.log("Name successfuly removed");
//   console.log(dNum)
//   console.log(name)
// } else {
//     console.log("wrong name entered")
// }


////       💥💥💥💥💥💥💥💥💥 .map() 💥💥💥💥💥💥💥💥💥💥💥

////  return element of new array after executing something
////  in other words it returns the new array without changing or mutating the current array 
////  it work similar to for-Each loop but it retuen new set of array not like for who return undefined
////  Ability to cahin other method (for example => redeuce(), sort(, firlter() and soo on ) it means it is a chainable method


// const array = [1, 2, 3, 54, 76, 90];

// let newarray = array.filter((curEle, index, arr)=>{
//   return curEle >9;
// });

// console.log(array);
// console.log(newarray);

// var ar = [10, 20, 30, 40, 50];

//  let newAr = ar.map((elem, index, array)=>{   ////  💥
//    return `${elem} of Index No. ${index} of ARRAY ${array}`;
// });
// console.log(newAr)

// let newArfor = ar.forEach((elem, index, array)=>{ ////  💥
//   return `${elem} of Index No. ${index} of ARRAY ${array}`;
// });
// console.log(newArfor)

//// 💥💥💥💥💥💥💥💥💥 .reduce() 💥💥💥💥💥💥💥💥💥💥💥

////  ===>> USES of reduce

//// Flatten an array,  means to convert the 2D, 3D array into one-dimenssional array
//// We use this to get a single  output value Exm. add, divide, multiply, percentage an array 
//// Soo it perform on bunch of data and use to give a single value as an ans
//// It takes 4 argument accu, curVal, index and array.....

// let arr = [2,4,6];
// debugger;
// let sum = arr.reduce((accumulator, curVal, index, array)=>{
//     return accumulator = accumulator+ curElem;
// },10);  //// By this way you can also set a default or initial value of accumulator 

// console.log(sum)


//⏪⏪⏪⏪⏪⏪⏪⏪ Challenge Time ⏩⏩⏩⏩⏩⏩⏩⏩

////  1. find the square root of each element in an array 
//// 2. multiply each element by 2 and return only those elements which are grater than 10
 

// 💥sol 1
// let arr = [25, 36, 49, 64, 81, 100 ]
// let sqrArr = arr.map((elem)=> Math.sqrt(elem) );
// console.log(sqrArr)

// 💥sol 2 
//let arr = [2, 3, 4, 7, 14] ////  use .filter method on behalf of .map() also refer as chaining method  

// let arr2 = arr.map((elem) =>{ 
//     return elem * 2;
// }).filter((elem)=>{  ////  chaining with filter()
//     let newAr =  elem > 10;
// }).reduce((accu,elem)=>{ ////  did Extra not ask in question 
//     return accu+=elem
// })
// console.log(newAr);
// console.log(arr2);


//         ⏪⏪⏪⏪⏪⏪⏪⏪⏪⏪ String in JS ⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩ 

////  💥Escape Special charecter (\)
////  as we know we cant print double quotes inside double quotes
////  so for special char if we want to print use back_slash (\)
 
// let name = "My name is \"Shivam\" rai"
//  console.log(name)

//// But we can use double quote 
////   only if the main string is inside the single quote(' ') vice-versa not possible

//  let str = 'We are the "Legion"'
// console.log(str)

////  💥💥💥💥💥 .length 💥💥💥💥💥💥

// let gameName = 'Assassin Creed Origins'
// console.log(gameName.length)

////  💥💥💥💥💥 Finding A String Inside String💥💥💥💥💥💥

////  all method and properties do similar functinality like we use in array 
// Exm.- indexOf() lastIndexOf()

// let name = 'My name is Shivam Rai'

// // 💥indexOf()
// //if string found return the Index number otherwise return -1 if not found
// console.log(name.indexOf("Shivam")) // ans is 11 bcz S in Shivam start from 11th posiotion (include blank space)
// console.log(name.indexOf("i",9)) //start searching from 9 index 

// // 💥lastIndexOf()
// // start searching from backword
// console.log(name.lastIndexOf("i",9)) 

// //        💥💥💥💥 search() 💥💥💥💥 ////  searching string inside string

////  work similar like indexOf method but 
//// it can't take second start position as start
// console.log(name.search("Shivam"))


////     ⏪⏪⏪⏪⏪⏪⏪⏪⏪⏪ Extracting String Part ⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩

//There are 3 methods for extracting a part of a string:
//// slice(start, end)
//// substring(start, end) 
//// substr(start, length)


//💥slice(start, end)💥   //// Note: The original array will not be changed.

//// The method takes 2 parameters: the start position, 
////  and the end position (end not included).

//// only demerit is it accept negative arguments and hence function didn't gave any output at all

//  let greetings = "hey, hello, hola, wtsup"
// // console.log(greetings.slice(4))  //// It slice till 3rd index and print all the remaing elements
// console.log(greetings.slice(0,3))  //// It will slice all index number except given index number i.e. (0,3) 
                                       //// and print whatever lie in between those index number but doesn't include the end positon or didn't print



//💥 substring() Method💥 is similar to slice().

//// The difference is that substring() cannot accept 
//// negative indexes.

//// If we give negative value then the characters are
////  counted from the 0th pos 

// var str = "Apple, Bananaa, Kiwi";
// let res = str.substring(-2, 8);
// console.log(res);

// 💥 The substr() Method 💥

//// substr() is similar to slice().

//// The difference is that the second parameter specifies the 
//// length of the extracted part.


// var str = "Apple, Bananaa, Kiwi";
// // let res = str.substr(7,-2);
// let res = str.substr(-4);
// console.log(res);




//// 😀11: challenge Time 🏁

//// Display only 280 characters of a string like the in Twitter?

// let para = "The classical conditioning occurs when a conditioned stimulus is coupled with an unconditioned stimulus. Usually, the conditioned stimulus (CS) is an impartial stimulus like the sound of a tuning fork, the unconditioned stimulus (US) is biologically effective like the taste of food and the unconditioned response (UR) to the unconditioned stimulus is an unlearned reflex response like salivation or sweating.After this coupling process is repeated (for example, some learning may already occur after a single coupling), an individual shows a conditioned response (CR) to the conditioned stimulus,when the conditioned stimulus is presented alone. The conditioned response is mostly similar to the unconditioned response, but unlike the unconditioned response, it must be acquired through experience and is nearly impermanent."
// let actualPara = para.slice(0, 281)
// console.log(actualPara)


//// 💥 .replace(searchFor, replaceWith) Method 💥


//// The replace() method replaces a specified value 
//// with another value in a string.

//// let myBioData = `I am vinod bahadur thapa vinod`;

// let game =  'Far cry is the good game'
// console.log(game.replace('good', 'best'))
// console.log(game)

//// Points to remember 
//// 1: The replace() method does not change the string 
//// it is called on.  It returns a new string.
//// 2: By default, the replace() method replaces only 
//// the first match
//// 3:By default, the replace() method is case sensitive. 


// // 💥 The charAt() Method 💥
// //    The charAt() method returns the character at a 
// //    specified index (position) in a string

// let js = 'Hello world'
// console.log(js.charAt(6))  //// return w


// // 💥 The charCodeAt() Method 💥

////The charCodeAt() method returns the ASCII value or Decimal value or Unicode of the 
// // character at a specified index in a string:

/*

Dec  Char     Dec  Char     Dec  Char
---------     ---------     ----------
 32  SPACE    64  @         96  `
 33  !        65  A         97  a
 34  "        66  B         98  b
 35  #        67  C         99  c
 36  $        68  D        100  d
 37  %        69  E        101  e
 38  &        70  F        102  f
 39  '        71  G        103  g
 40  (        72  H        104  h
 41  )        73  I        105  i
 42  *        74  J        106  j
 43  +        75  K        107  k
 44  ,        76  L        108  l
 45  -        77  M        109  m
 46  .        78  N        110  n
 47  /        79  O        111  o
 48  0        80  P        112  p
 49  1        81  Q        113  q
 50  2        82  R        114  r
 51  3        83  S        115  s
 52  4        84  T        116  t
 53  5        85  U        117  u
 54  6        86  V        118  v
 55  7        87  W        119  w
 56  8        88  X        120  x
 57  9        89  Y        121  y
 58  :        90  Z        122  z
 59  ;        91  [        123  {
 60  <        92  \        124  |
 61  =        93  ]        125  }
 62  >        94  ^        126  ~
 63  ?        95  _        127  DEL


*/

// // The method returns a UTF-16 code a well known ASCII value
// //  (an integer between 0 and 65535).

// // The Unicode Standard provides a unique number for every 
// // character, no matter the platform, device, application, 
// // or language. UTF-8 is a popular Unicode encoding which
// //  has 88-bit code units.

// let str = "~the PaSs have @#$_123"
// console.log(str.charCodeAt(7))


// 😀12: challenge Time 🏁

// Return the Unicode of the last character in a string

// let str = 'fhyf46#$%^&*'
// //let lastStr = str.length-1;
// console.log(str.charCodeAt(str.length-1))


//// 💥 Property Access 💥
//// ECMAScript 5 (2009) allows property access [ ] on strings

// let str = 'HELLO WORLD'
// console.log(str[1])  //// return E

//👉  Other useful methods 

let name = "shivAmRai"

// console.log(name)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
