// Coding challenge #31a. Create a function that will return the number of words in a text
// https://codeguppy.com/code.html?r4kwkcWiHfzQZkM1qrX4

// Solution 1

function countWords(text)
{
    var wasSeparator = true;
    var words = 0;
    
    for(var c of text)
    {
        // if current character is separator then advance and
        // set that the previous character was separator
        if (isSeparator(c))
        {
            wasSeparator = true;
            continue;
        }

        // if current character is not separator
        // ... but if previous was separator...
        if (wasSeparator)
        {
            words++;
            wasSeparator = false;
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
