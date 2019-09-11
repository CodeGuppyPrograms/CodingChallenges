// Coding challenge #32. Create a function that will capitalize the first letter of each word in a text
// https://codeguppy.com/code.html?OJoMXT4GKasSfNeX4hjH

println(captializeWords("Create a function that will capitalize the first letter of each word in a text"));

function captializeWords(text)
{
    var text2 = "";
    
    for(var i = 0; i < text.length; i++)
    {
        var currChr = text[i];
        var prevChr = i > 0 ? text[i - 1] : " ";
        
        if (!isSeparator(currChr) && isSeparator(prevChr))
        {
            currChr = currChr.toUpperCase();
        }
        
        text2 += currChr;
    }
    
    return text2;
}

function isSeparator(c)
{
    var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
    return separators.includes(c);
}
