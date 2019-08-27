// Coding challenge #10: Calculate the sum of numbers in an array of numbers
// https://codeguppy.com/code.html?TteeVr0aj33ZyCLR685L

function sumArray(ar)
{
    var sum = 0;
    
    for(var i = 0; i < ar.length; i++)
    {
        sum += ar[i];
    }
    
    return sum;
}

var ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
var sum = sumArray(ar);
println(sum);
