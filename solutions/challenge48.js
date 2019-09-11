// Coding challenge #48. Create a function to return the longest word(s) in a string
// https://codeguppy.com/code.html?6O219iv12e5UaC30fcbG

var text = "Create a function to return the longest word(s) in a sentance.";

println(getLongestWords(text));

function getLongestWords(text)
{
    var words = getWords(text);
    
    var maxSize = 0;
    var maxPositions = [];
    
    for(var i = 0; i < words.length; i++)
    {
        var currWordSize = words[i].length;
        
        if (currWordSize > maxSize)
        {
            maxSize = currWordSize;
            maxPositions = [ i ];
        }
        else if (currWordSize === maxSize)
        {
            maxPositions.push(i);
        }
    }

    return getElements(words, maxPositions);
}

// Get only the elements from specified positions from the array
function getElements(ar, arPositions)
{
    var arNew = [];
    
    for(var pos of arPositions)
    {
        arNew.push(ar[pos]);
    }
    
    return arNew;
}

// Returns an array with the words from specified text
function getWords(text)
{
    let startWord = -1;
    let ar = [];
    
    for(let i = 0; i <= text.length; i++)
    {
        let c = i < text.length ? text[i] : " ";

        if (!isSeparator(c) && startWord < 0)
        {
            startWord = i;
        }
        
        if (isSeparator(c) && startWord >= 0)
        {
            let word = text.substring(startWord, i);
            ar.push(word);
            
            startWord = -1;
        }
    }

    return ar;
}

function isSeparator(c)
{
    var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?", "(", ")"];
    return separators.includes(c);
}
