// Assignment operator
// An assignment operator assigns a value to its left operand
// based on the value to its right operand
// The simple assignment operator is equal(=)

var x=5;
var y=5;
console.log("Is both x and y are equal" +x==y);
// it gives false
// here + is used to concatenate with the string
console.log(+x==y)


// Arithmetic Operators;
// an arithmetic operator takes numerical values
//either literals or variables as their operands
// and returns a single numerical value
console.log(3+3)
console.log(3-3)
console.log(3*3)
console.log(3/3)
console.log(3%3)

//increment or Decrement
var num=14;
var newnum=num++;
console.log(num);
console.log(newnum)


//Comparison OPERATOR
var a=3;
var b=10;
console.log(a==b)
console.log(a!=b)
console.log(a>b)

console.log(a>=b)
console.log(a<b)
console.log(a<=b)

// LOgical operators
var ax=10
var bx=-20

//logival AND (&&)
console.log(ax>bx  && bx>0)
//logical OR (||)
console.log(ax>bx || bx>0 || bx<0)

//logical NOT
console.log(!(ax>0 || bx<0))


// String Concatenation

var myname="f"
console.log(myname+"VVVV");



console.log(3**5) // 3*3*3*3*3


// CHECKING IF THE VALUE OF A STRING IS EQUAL TO VALUE OF NUMBER

var as=5;
var ans="5"
console.log(as==ans)
// true becoz it only checks the value

// if we use === it will show false as it checks value as well as data type

