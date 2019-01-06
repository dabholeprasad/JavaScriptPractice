var myName ="Pavankumar";

console.log(myName.length);

console.log(myName[0]);// It will print P i.e. first character from name.
myName[0]= "B"; // Strings are immutable.
console.log(myName[0]);
console.log(myName);
// Last letter of Name.
console.log(myName[myName.length-1]);
// String in Function.
function name(first, middle, last) 
{
    var result = "";
    result += "My full name is " + first + " " + middle + " " + last;
   // result += `My full name is "${first} ${middle} ${last}"`
    return result;
}
console.log(name("Prasad","Shankar","Dabhole"));
//console.log();
