// Coding challenge #49. Shuffle an array of strings
// https://codeguppy.com/code.html?EHvbHKy5uPvSKxsaeqWv

var ar = ["Shuffle", "an", "array", "of", "strings"];

println(shuffleArray(ar));

// Shuffle array implemented using Fisher–Yates shuffle algorithm
function shuffleArray(ar)
{
    for(var i = ar.length - 1; i > 0; i--)
    {
        var j = randomInt(0, i - 1);
        
        var t = ar[i];
        ar[i] = ar[j];
        ar[j] = t;
    }
    
    return ar;
}

// Get a random int between min and max (both included)
function randomInt(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
