// Coding challenge #37. Create a function that will convert a string in an array containing the ASCII codes of each character
// https://codeguppy.com/code.html?suDlTrNYYmCpNJhZpPdB

println(getCharCodes("I like JavaScript"));

function getCharCodes(s)
{
    var ar = [];
    
    for(var i = 0; i < s.length; i++)
    {
        var code = s.charCodeAt(i);
        ar.push(code);
    }
    
    return ar;
}
