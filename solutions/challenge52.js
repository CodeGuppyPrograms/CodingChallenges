// Coding challenge #52. Calculate Fibonacci(500) with high precision (all decimals)
// https://codeguppy.com/code.html?OD5GDYyCVo4wgTRCXzRU

println(fibonacci(500));

function fibonacci(n)
{
    if (n === 0)
        return "0";

    if (n === 1)
        return "1";

    var n1 = "0";
    var n2 = "1";

    for(var i = 2; i <= n; i++)
    {
        var sum = add(n1, n2);

        n1 = n2;
        n2 = sum;
    }

    return n2;
}

function add(sNumber1, sNumber2)
{
    var maxSize = Math.max(sNumber1.length, sNumber2.length);
    
    var s1 = sNumber1.padStart(maxSize, "0");
    var s2 = sNumber2.padStart(maxSize, "0");

    var s = "";
    var carry = 0;
    
    for(var i = maxSize - 1; i >= 0; i--)
    {
        var digit1 = parseInt(s1[i]);
        var digit2 = parseInt(s2[i]);
        
        var sum = digit1 + digit2 + carry;
        var digitSum = sum % 10;
        carry = sum >= 10 ? 1 : 0;

        s = digitSum.toString() + s;
    }
    
    if (carry > 0)
        s = carry + s;
    
    return s;
}
