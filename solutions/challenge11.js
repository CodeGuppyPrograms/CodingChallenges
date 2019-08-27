// Coding challenge #11: Calculate the average of the numbers in an array of numbers
// https://codeguppy.com/code.html?7i9sje6FuJsI44cuncLh

function averageArray(ar)
{
    var n = ar.length;
    var sum = 0;
    
    for(var i = 0; i < n; i++)
    {
        sum += ar[i];
    }
    
    return sum / n;
}

var ar = [1, 3, 9, 15, 90];
var avg = averageArray(ar);

println("Average: ", avg);
