// Coding challenge #45. Create a function to calculate the sum of all the numbers in a jagged array 
// (array contains numbers or other arrays of numbers on an unlimited number of levels)
// https://codeguppy.com/code.html?3gu4jcQRpBQWu2EsJrv0

var ar = [1, 2, [15, [23], [5, 12]], [100]];

println(sumArray(ar));

function sumArray(ar)
{
    var sum = 0;
    
    for(var el of ar)
    {
        if (Array.isArray(el))
        {
            el = sumArray(el);
        }
        
        sum += el;
    }
    
    return sum;
}
