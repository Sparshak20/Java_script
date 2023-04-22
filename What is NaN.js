// When we try to subtract two string 
//we get NaN which means the answer is 
// Not a Number

console.log("V"-"S");
/// NaN is a property of Global object
// in other words it is a variable in global scope
// The initial value of NaN is Not - a - Number


var myphonenumber=9876543210;

var my_nameee="Vinod";

console.log(isNaN(myphonenumber));

console.log(isNaN(my_nameee));
 if(isNaN(my_nameee))
 {
    console.log("HELLO ITS TRUE")
 }
 else{
    console.log("ITS FALSE")
 }