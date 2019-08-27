// Coding challenge #25: Create a function that will receive two arrays 
// of numbers as arguments and return an array composed of all the numbers 
// that are either in the first array or second array but not in both

// https://codeguppy.com/code.html?Y9gRdgrl6PPt4QxVs7vf

var ar1 = [1, 2, 3, 10, 5, 3, 14];
var ar2 = [1, 4, 5, 6, 14];

var ar = mergeExclusive(ar1, ar2);
println(ar);

function mergeExclusive(ar1, ar2)
{
    var ar = [];
    
    for(let el of ar1)
    {
        if (!ar2.includes(el))
        {
            ar.push(el);
        }
    }
    
    for(let el of ar2)
    {
        if (!ar1.includes(el))
        {
            ar.push(el);
        }
    }
    
    return ar;
}
