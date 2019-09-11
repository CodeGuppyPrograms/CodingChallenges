// Coding challenge #51. Find the frequency of characters inside a string. Return the result as an array of objects. 
// Each object has 2 fields: character and number of occurrences.
// https://codeguppy.com/code.html?e8wHQuJmeYCDKml5k07d

var ar = getCharFrequency("Find the frequency of characters inside a string");
println(JSON.stringify(ar));

function getCharFrequency(text)
{
    var ar = [];

    for(var chr of text)
    {
        updateFrequency(ar, chr);
    }
    
    return ar;
}

function updateFrequency(ar, chr)
{
    for(var el of ar)
    {
        if (el.chr === chr)
        {
            el.count++;
        }
    }
    
    ar.push({ chr : chr, count : 1 });
}
