// Coding challenge #30: Create a function that will add two 
// positive numbers of indefinite size. The numbers are received as strings 
// and the result should be also provided as string.
// https://codeguppy.com/code.html?yMQXcPgfrYxuaIxqQmZc

// solution 2

var n1 = "2909034221912398942349";
var n2 = "1290923909029309499";
var sum = add(n1, n2);

println(n1);
println(n2);
println(sum);

function add(sNumber1, sNumber2)
{
    var maxSize = Math.max(sNumber1.length, sNumber2.length);
    
    var s1 = sNumber1.padStart(maxSize, "0");
    var s2 = sNumber2.padStart(maxSize, "0");

    var s = "";
    var carry = 0;
    
    for(var i = maxSize - 1; i >= 0; i--)
    {
        var digit1 = parseInt(s1[i]);
        var digit2 = parseInt(s2[i]);
        
        var sum = digit1 + digit2;
        
        var digitSum = sum % 10;
        digitSum += carry;
        s = digitSum.toString() + s;
        
        carry = sum >= 10 ? 1 : 0;
    }
    
    if (carry > 0)
        s = carry + s;
    
    return s;
}
