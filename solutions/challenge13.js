// Coding challenge #13: Find the maximum number in an array of numbers
// https://codeguppy.com/code.html?THmQGgOMRUj6PSvEV8HD

function findMax(ar)
{
    var max = ar[0];
    
    for(var i = 0; i < ar.length; i++)
    {
        if (ar[i] > max)
        {
            max = ar[i];
        }
    }
    
    return max;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
println("Max: ", max);
