// Switch Statement 
// Evaluates an Expression, matching the expression's value to a case
// clause, and excutes statements associated with that case

//Find area of circle, triangle and rectangle?

// Without switch using if else if

var area="circle";
var pi=3.142,l=5,b=4,r=3;

// if(area=="circle")
// {
//   console.log("The area is " +pi*r*r)
// }
// else if(area=="Triangle")
// {
//     console.log("The area is "+ 1/2*b*l)
// }
// else{
//     console.log("Error")
// }


//Using switch statement

switch(area)
{
    case 'circle':
        console.log("The area is " +pi*r*r)
        break;

    case 'triangle':
        console.log("The area is "+ 1/2*b*l)
        break;
    default:
        console.log("Error")


}