/** Arrays in JavaScript */
/**
 * when we use var we can store only one value at time
 * When we feel like storing multiple values in one variable the instead of var
 * we will use array
 * In Js we have array class and arrays are the prototype of this class 
 */

// var f1="ramesh";
// var f2="Suresh";
// var f3="ram";

// //instead of doing this we can do

// var myfriends=["ramesh","Suresh","ram",true,533];
/**First element of array is Lower Index/ Lower Boundary
 * Last element is Upper Index/ Upper Boundary
 * Individual boxes in an array in which element are stored are represented using index
 * index starts from 0 and ends with array length -1;
 

here we will do Traversal of array
searching and filter in an array
hoow to sort and compare an array
how to insert, add, replace, and delete elements in array(CRUD)
Map(),reduce(),filter() 
 */


//  var myfriends=["ramesh","Suresh","ram"];

// var myfriends=new Array; // optional


//Traversal in an array
//navigate through an array
// var myfriends=["ramesh","Suresh","ram"];
// console.log(myfriends[1]);

// // If we want to check the length of the data
// console.log(myfriends.length);
// console.log(myfriends[myfriends.length-1]);
// // we use for loop
// for(var i=0;i<myfriends.length;i++)
// {
//     console.log(myfriends[i]);
// }


// After ES6 we have for..in and for.. of loop too

// for..in provides the index of the elements in the array
// for(let elements in myfriends)
// {
//     console.log(elements);
// }

// for(let elements of  myfriends)
// {
//     console.log(elements);
// }


/** Array.prototype.forEach()
 * Calls a function for each element in the array
 * 
 */

// myfriends.forEach(function(element,index,array){
//     console.log(element);
// })

/**Searching and Filter in an array
 * Array.prototype.indexOf() (Searching mein use)
 * Returns the first index of an element within an array equal to an element or -1 if none
 * is found, It search the element from the 0th Index number
 */

// var myfriends=["ramesh","Suresh","ram"];
// console.log(myfriends.indexOf("Suresh"));
//  // return index
//  console.log(myfriends.indexOf("Suresh",3)); // starts position 4

/** Array.prototype.lastIndexOf()
 * Return the last (greatest) index of an element within the array equal 
 * to an element or -1 if none is found. It search the element last to first
 * 
 */
// var myfriends=["ramesh","Suresh","ram"];
// console.log(myfriends.lastIndexOf("Suresh"));
//  // return index
//  console.log(myfriends.lastIndexOf("Suresh",3));

/**Array.prototype.include()
 * Determines whether the array contains a value 
 * returning true or false
 */
// var myfriends=["ramesh","Suresh","ram"];
// console.log(myfriends.includes("Suresh"));
//  // return index
//  console.log(myfriends.includes("Suresh",3));


/**Array.prototype.find()
 * arr.find(callback(element[,index[,array]])[,thisArg])
 * Returns the found eleement in an array if some element in the array
 * satisfies the testing function or undefined if not found
 * only problem is that it return only one element
 */

// const prices=[200,300,350,400,450,500,600];

// // price<400
// const findele=prices.find((currentval)=>{
//     return currentval<400;
// })
// const findelem=prices.findIndex((currentval)=>{
//     return currentval<400;
// })
// console.log(findele);
// console.log(findelem)

/** Array.prototype.filter()
 * returns a new array containing all the eleemnts of the calling 
 * array for which the provided filtering function returns true
 */

// const prices=[200,300,350,400,450,500,600];
// //price<400;

// const newprice=prices.filter((elem,index)=>{
//     return elem<400;
// })
// console.log(newprice)

// if condition not satisfied returns empty array


/**How to sort an array
 * Array.prototype.sort()
 * The sort () method sorts the elements of an array in place and returns
 * the sorted arraay. The default sort order is ascending built upon converting 
 * the elements into strings
 * then comparing their sequences of UTF-16 code units values
 *  * 
 */
//  const months=['March','Jan','Feb','Dec','Nov']
//  console.log(months.sort());

//  const array1=[1,30,4,21,21111,99];
//  console.log(array1.sort());  // works with strings


/** Perform create, Read, Update , Delete
 * Array.prototype.push()
 * the push() method adds one or more eleements to the end of the arrays and 
 * returns the length of the array
 */

// const animals=['snake', 'sheep','fish'];
// const count=animals.push('Chicken');
// console.log(animals)
// console.log(count)
// const counts=animals.push('Chicken','crab','snail');
// console.log(animals);
// console.log(counts)

/** Array.prototype.unshift()
 * The unshift() method adds one or more eleemnts to the beginning of an array
 * returns the new length of the arrays
 * 
 */

// const animals=['snake', 'sheep','fish'];
// const count=animals.unshift('Chicken');
// console.log(animals)
// console.log(count)
// const counts=animals.unshift('Chicken','crab','snail');
// console.log(animals);
// console.log(counts)

/** Array.prototype.pop()
 * The pop() method removes the last element from an array and returns that element This
 * method changes the length of the array
 */

// const animals=['snake', 'sheep','fish'];
// console.log(animals.pop());
// console.log(animals)

/** Array.prototype.shift()
 * The pop() method removes the first element from an array and returns that element This
 * method changes the length of the array
 */
// const animals=['snake', 'sheep','fish'];
// console.log(animals.shift());
// console.log(animals)

/** Array.prototype.splice() Mostly used for deleting
 * Adds or removes elements from an array
 */
// const months=['jan','march','april','july'];
// const newmoonth=months.splice(months.length,0,'dec');
// console.log(months)

/**Map and Reduce method
 * Array.prototype.map()
 * let newarray=arr.map(callback(currentValue[,index[,array]])
 * {
 * //return element for newarray after executing something 
 * }[,thisarg]);
 * Returns a new array containing the results of calling a function
 * on every element in this array
 */
// const arr1=[1,4,9,16,25];

// // num>9
// let newarr=arr1.map((currele,index,arr)=>{
//     return currele>9;
// })
// console.log(arr1)
// console.log(newarr)


/**Reduce method
 * flatten an array means to convert the 3d or 2d array into single dimensional
 * array
 */

/**The reduce method executes a reducer function (that you provide) on each element of the
 * array resulting in single output value
 * The reducer function takes four arguments:
 * Accumulator|Current value| current index|Source array
 */

let arr=[1,4,3];
let sum= arr.reduce((accumulator,currele,index,arr)=>{
    return accumulator+=currele
})
console.log(sum)