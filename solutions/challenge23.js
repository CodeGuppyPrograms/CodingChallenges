// Coding challenge #23: Reverse a string
// https://codeguppy.com/code.html?pGpyBz0dWlsj7KR3WnFF

var s = reverseString("JavaScript");
println(s);

function reverseString(s)
{
    var s2 = "";
    
    for(var i = s.length - 1; i >= 0; i--)
    {
        var char = s[i];
        s2 += char;
    }
    
    return s2;
}
