// Coding challenge #46-a. Find the maximum number in a jagged array of numbers or array of numbers
// https://codeguppy.com/code.html?oT5nrxux2yAgIRsuXBSK

// Solution 1

var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];

var max = findMax(ar);
println("Max  = ", max);

// Use recursion to find the maximum numeric value in an array of arrays
function findMax(ar)
{
    var max = -Infinity;

    // Cycle through all the elements of the array
    for(var i = 0; i < ar.length; i++)
    {
        var el = ar[i];

        // If an element is of type array then invoke the same function
        // to find out the maximum element of that subarray
        if ( Array.isArray(el) )
        {
            el = findMax( el );
        }

        if ( el > max )
        {
            max = el;
        }
    }

    return max;
}
