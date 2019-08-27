// Coding challenge #27: Create a function that will receive an array of numbers 
// as argument and will return a new array with distinct elements
// https://codeguppy.com/code.html?OkbtP1ZksGHXwqk7Jh3i

// solution 1

var ar = getDistinctElements([1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100]);
println(ar);

function getDistinctElements(ar)
{
    var ar2 = [];
    
    for(let i = 0; i < ar.length; i++)
    {
        if (!isInArray(ar[i], ar2))
        {
            ar2.push(ar[i]);
        }
    }
    
    return ar2;
}

function isInArray(n, ar)
{
    for(let i = 0; i < ar.length; i++)
    {
        if (ar[i] === n)
            return true;
    }
    
    return false;
}
