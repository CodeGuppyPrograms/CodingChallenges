// Coding challenge #17: Calculate the sum of digits of a 
// positive integer number
// https://codeguppy.com/code.html?RHA714FYio8gWgmjWYPz

function sumDigits(n)
{
    var s = n.toString();
    var sum = 0;
    
    for(var char of s)
    {
        var digit = parseInt(char);
        sum += digit;
    }
    
    return sum;
}

var sum = sumDigits(1235231);
println("Sum: ", sum);
