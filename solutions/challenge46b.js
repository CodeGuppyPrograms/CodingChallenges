// Coding challenge #46-b. Find the maximum number in a jagged array of numbers or array of numbers
// https://codeguppy.com/code.html?VvLiW0W3lwnMrbwC9epp

// Solution 2

var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];

var max = findMax(ar);
println("Max  = ", max);

// Use a stack to find the maximum numeric value in an array of arrays
function findMax(arElements)
{
    var max = -Infinity;

    // This is the stack on which will put the first array and then 
    // all the other sub-arrays that we find as we traverse an array     
    var arrays = [];

    arrays.push(arElements);

    // Loop as long as are arrays added to the stack for processing
    while(arrays.length > 0)
    {
        // Extract an array from the stack
        ar = arrays.pop();
        
        // ... and loop through its elements
        for(var i = 0; i < ar.length; i++)
        {
            var el = ar[i];

            // If an element is of type array, we'll add it to stack
            // to be processed later
            if ( Array.isArray(el) )
            {
                arrays.push(el);
                continue;
            }
            
            if ( el > max )
            {
                max = el;
            }
        }
    }

    return max;
}
