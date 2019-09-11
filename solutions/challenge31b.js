// Coding challenge #31b. Create a function that will return the number of words in a text
// https://codeguppy.com/code.html?8pdZSfchSXNxBK1f7r7s

// Solution 2

function countWords(text)
{
    var words = 0;
    
    if (text.length > 0 && !isSeparator(text[0]))
        words++;
    
    for(var i = 1; i < text.length; i++)
    {
        var currChr = text[i];
        var prevChr = text[i - 1];
        
        if (!isSeparator(currChr) && isSeparator(prevChr))
        {
            words++;
        }
    }
    
    return words;
}

function isSeparator(c)
{
    var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
    return separators.includes(c);
}

println(countWords(""));
println(countWords("            "));
println(countWords("JavaScript!!!   "));
println(countWords("     JavaScript"));
println(countWords("    JavaScript is cool      "));
println(countWords("I like to learn JavaScript with codeguppy"));
