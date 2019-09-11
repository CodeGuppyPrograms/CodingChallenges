// Coding challenge #30: Create a function that will add two 
// positive numbers of indefinite size. The numbers are received as strings 
// and the result should be also provided as string.
// https://codeguppy.com/code.html?v5A0QBsdHaiAVA2CPN5y

// solution 1

var n1 = "2909034221912398942349";
var n2 = "1290923909029309499";
var sum = add(n1, n2);

println(n1, "\n", n2, "\n", sum);

function add(sNumber1, sNumber2)
{
    var s = "";
    var carry = 0;
    
    var maxSize = Math.max(sNumber1.length, sNumber2.length);
    
    for(var i = 0; i < maxSize; i++)
    {
        var digit1 = digitFromRight(sNumber1, i);
        var digit2 = digitFromRight(sNumber2, i);
        
        var sum = digit1 + digit2 + carry;
        var digitSum = sum % 10;
        carry = sum >= 10 ? 1 : 0;
        
        s = digitSum.toString() + s;
    }
    
    if (carry > 0)
        s = carry + s;
    
    return s;
}

function digitFromRight(s, digitNo)
{
    if (digitNo >= s.length)
        return 0;
        
    var char = s[ s.length - 1 - digitNo ];
    return parseInt(char);
}
