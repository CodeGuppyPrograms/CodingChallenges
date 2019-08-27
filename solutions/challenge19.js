// Coding challenge #19: Create a function that will return in an array 
// the first "nPrimes" prime numbers greater than a particular number "startAt"
// https://codeguppy.com/code.html?mTi7EdKrviwIn4bfrmM7

println(getPrimes(10, 100));

function getPrimes(nPrimes, startAt)
{
    var ar = [];
    
    var i = startAt;
    
    while(ar.length < nPrimes)
    {
        if (isPrime(i))
        {
            ar.push(i);
        }
        
        i++;
    }
    
    return ar;
}

// Returns true if a number is prime
function isPrime(n)
{
    if (n < 2)
        return false;
        
    if (n == 2)
        return true;
    
    var maxDiv = Math.sqrt(n);
    
    for(var i = 2; i <= maxDiv; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }
    
    return true;
}
