# Micro Coding Challenges - with solutions

Mastering these coding challenges may not get you a job at google... but you'll be one step closer to building your own JavaScript game at [codeguppy.com](https://codeguppy.com). 

These coding challenges are intended for beginners. Therefore the solutions are implemented using only simple / classical programming elements. Each solution is acompanied by an online link that helps you quickly run it in a code playground at [codeguppy.com](https://codeguppy.com)

> Note: The code is making use of the codeguppy specific function `println()` to print the results. If you want to run these solutions outside [codeguppy.com](https://codeguppy.com), just replace `println()` with `console.log()` then run them using your browser console tool or node.js in command line.

## Coding challenge #1: Print numbers from 1 to 10

<https://codeguppy.com/code.html?mrgCtLGA90Ozr0Otrs5Z>

```
for(var i = 1; i <= 10; i++)
{
    println(i);
}
```

## Coding challenge #2: Print the odd numbers less than 100

<https://codeguppy.com/code.html?eDLA5XPp3bPxP79H2jKT>

```
for(var i = 1; i <= 100; i += 2)
{
    println(i);
}
```


## Coding challenge #3: Print the multiplication table with 7

<https://codeguppy.com/code.html?fpnQzIhnGUUmCUZy1fyQ>

```
for(var i = 1; i <= 10; i++)
{
    var row = "7 * " + i + " = " + 7 * i;
    println(row);
}
```

## Coding challenge #4:	Print all the multiplication tables with numbers from 1 to 10

<https://codeguppy.com/code.html?78aD4mWSCzoNEVxOQ8tI>

```
for(var i = 1; i <= 10; i++)
{
    printTable(i);
    println("");
}

function printTable(n)
{
    for(var i = 1; i <= 10; i++)
    {
        var row = n + " * " + i + " = " + n * i;
        println(row);
    }
}
```

## Coding challenge #5:	Calculate the sum of numbers from 1 to 10

<https://codeguppy.com/code.html?Vy6u9kki2hXM4YjsbpuN>

``
var sum = 0;

for(var i = 1; i <= 10; i++)
{
    sum += i;
}

println(sum);
``

## Coding challenge #6: Calculate 10!

<https://codeguppy.com/code.html?IIuJX4gnXOndNu0VrywA>

```
var prod = 1;

for(var i = 1; i <= 10; i++)
{
    prod *= i;
}

println(prod);
```

## Coding challenge #7:	Calculate the sum of even numbers greater than 10 and less than 30

<https://codeguppy.com/code.html?DcOffOyoIArmNZHVNM2u>

```
var sum = 0;

for(var i = 11; i <= 30; i += 2)
{
    sum += i;
}

println(sum);
```

## Coding challenge #8:	Create a function that will convert from Celsius to Fahrenheit

<https://codeguppy.com/code.html?oI5mWm6QIMRjY1m9XAmI>

```
function celsiusToFahrenheit(n)
{
    return n * 1.8 + 32;
}

var r = celsiusToFahrenheit(20);
println(r);
```


## Coding challenge #9:	Create a function that will convert from Fahrenheit to Celsius

<https://codeguppy.com/code.html?mhnf8DpPRqqgsBgbJNpz>

```
function fahrenheitToCelsius(n)
{
    return (n - 32) / 1.8;
}

var r = fahrenheitToCelsius(68);
println(r);
```


## Coding challenge #10: Calculate the sum of numbers in an array of numbers

<https://codeguppy.com/code.html?TteeVr0aj33ZyCLR685L>

```
function sumArray(ar)
{
    var sum = 0;
    
    for(var i = 0; i < ar.length; i++)
    {
        sum += ar[i];
    }
    
    return sum;
}

var ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
var sum = sumArray(ar);
println(sum);
```


## Coding challenge #11: Calculate the average of the numbers in an array of numbers

<https://codeguppy.com/code.html?7i9sje6FuJsI44cuncLh>

```
function averageArray(ar)
{
    var n = ar.length;
    var sum = 0;
    
    for(var i = 0; i < n; i++)
    {
        sum += ar[i];
    }
    
    return sum / n;
}

var ar = [1, 3, 9, 15, 90];
var avg = averageArray(ar);

println("Average: ", avg);
```


## Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers

Solution 1:

<https://codeguppy.com/code.html?0eztj1v6g7iQLzst3Id3>

```
function getPositives(ar)
{
    var ar2 = [];
    
    for(var i = 0; i < ar.length; i++)
    {
        var el = ar[i];
        
        if (el >= 0)
        {
            ar2.push(el);
        }
    }
    
    return ar2;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);

println(ar2);
```


## Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers

Solution 2

<https://codeguppy.com/code.html?KefrPtrvJeMpQyrB8V2D>

```
function getPositives(ar)
{
    var ar2 = [];
    
    for(var el of ar)
    {
        if (el >= 0)
        {
            ar2.push(el);
        }
    }
    
    return ar2;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);

println(ar2);
```


## Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers

Solution 3

<https://codeguppy.com/code.html?qJBQubNA7z10n6pjYmB8>

```
function getPositives(ar)
{
    return ar.filter(el => el >= 0);
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
println(ar2);
```


## Coding challenge #13: Find the maximum number in an array of numbers

<https://codeguppy.com/code.html?THmQGgOMRUj6PSvEV8HD>

```
function findMax(ar)
{
    var max = ar[0];
    
    for(var i = 0; i < ar.length; i++)
    {
        if (ar[i] > max)
        {
            max = ar[i];
        }
    }
    
    return max;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
println("Max: ", max);
```

## Coding challenge #14: Print the first 10 Fibonacci numbers without recursion

<https://codeguppy.com/code.html?rKOfPxHbVwxNWI2d8orH>

```
var f0 = 0;
println(f0);

var f1 = 1;
println(f1);

for(var i = 2; i < 10; i++)
{
    var fi = f1 + f0;
    println(fi);
    
    f0 = f1;
    f1 = fi;
}
```

## Coding challenge #15: Create a function that will find the nth Fibonacci number using recursion

<https://codeguppy.com/code.html?IneuIg9O0rRV8V76omBk>

```
function findFibonacci(n)
{
    if (n == 0)
        return 0;
        
    if (n == 1)
        return 1;
        
    return findFibonacci(n - 1) + findFibonacci(n - 2);
}

var n = findFibonacci(10);
println(n);
```

## Coding challenge #16: Create a function that will return a Boolean specifying if a number is prime

<https://codeguppy.com/code.html?fRYsPEc2vcZTbIU8MKku>

```
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

println(2, " is prime? ", isPrime(2));
println(3, " is prime? ", isPrime(3));
println(4, " is prime? ", isPrime(4));
println(5, " is prime? ", isPrime(5));
println(9, " is prime? ", isPrime(9));
```

<https://codeguppy.com/code.html?RHA714FYio8gWgmjWYPz>

## Coding challenge #17: Calculate the sum of digits of a positive integer number

```
function sumDigits(n)
{
    var s = n.toString();
    var sum = 0;
    
    for(var char of s)
    {
        var digit = parseInt(char);
        sum += digit;
    }
    
    return sum;
}

var sum = sumDigits(1235231);
println("Sum: ", sum);
```


## Coding challenge #18: Print the first 100 prime numbers

<https://codeguppy.com/code.html?gnMVeOZXN6VhLekyvui8>

```
printPrimes(100);

// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
    var n = 0;
    var i = 2;
    
    while(n < nPrimes)
    {
        if (isPrime(i))
        {
            println(n, " --> ", i);
            n++;
        }
        
        i++;
    }
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
```


## Coding challenge #19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

<https://codeguppy.com/code.html?mTi7EdKrviwIn4bfrmM7>

```
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
```

## Coding challenge #20: Rotate an array to the left 1 position

<https://codeguppy.com/code.html?MRmfvuQdZpHn0k03hITn>

```
var ar = [1, 2, 3];
rotateLeft(ar);
println(ar);

function rotateLeft(ar)
{
    var first = ar.shift();
    ar.push(first);
}
```


## Coding challenge #21: Rotate an array to the right 1 position

<https://codeguppy.com/code.html?fHfZqUmkAVUXKtRupmzZ>

```
var ar = [1, 2, 3];
rotateRight(ar);
println(ar);

function rotateRight(ar)
{
    var last = ar.pop();
    ar.unshift(last);
}
```

## Coding challenge #22: Reverse an array

<https://codeguppy.com/code.html?GZddBqBVFlqYrsxi3Vbu>

```
var ar = [1, 2, 3];
var ar2 = reverseArray(ar);
println(ar2);

function reverseArray(ar)
{
    var ar2 = [];
    
    for(var i = ar.length - 1; i >= 0; i--)
    {
        ar2.push(ar[i]);
    }
    
    return ar2;
}
```

## Coding challenge #23: Reverse a string

<https://codeguppy.com/code.html?pGpyBz0dWlsj7KR3WnFF>

```
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
```

 ## Coding challenge #24: Create a function that will merge two arrays and return the result as a new array

<https://codeguppy.com/code.html?vcTkLxYTAbIflqdUKivc>

 ```
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];

var ar = mergeArrays(ar1, ar2);
println(ar);

function mergeArrays(ar1, ar2)
{
    var ar = [];
    
    for(let el of ar1)
    {
        ar.push(el);
    }
    
    for(let el of ar2)
    {
        ar.push(el);
    }
    
    return ar;
}
```

## Coding challenge #25: Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

<https://codeguppy.com/code.html?Y9gRdgrl6PPt4QxVs7vf>

```
var ar1 = [1, 2, 3, 10, 5, 3, 14];
var ar2 = [1, 4, 5, 6, 14];

var ar = mergeExclusive(ar1, ar2);
println(ar);

function mergeExclusive(ar1, ar2)
{
    var ar = [];
    
    for(let el of ar1)
    {
        if (!ar2.includes(el))
        {
            ar.push(el);
        }
    }
    
    for(let el of ar2)
    {
        if (!ar1.includes(el))
        {
            ar.push(el);
        }
    }
    
    return ar;
}
```

## Coding challenge #26: Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

<https://codeguppy.com/code.html?bUduoyY6FfwV5nQGdXzH>

```
var ar1 = [1, 2, 3, 10, 5, 3, 14];
var ar2 = [-1, 4, 5, 6, 14];

var ar = mergeLeft(ar1, ar2);
println(ar);

function mergeLeft(ar1, ar2)
{
    var ar = [];
    
    for(let el of ar1)
    {
        if (!ar2.includes(el))
        {
            ar.push(el);
        }
    }

    return ar;
}
```

## Coding challenge #27: Create a function that will receive an array of numbers  as argument and will return a new array with distinct elements

Solution 1

<https://codeguppy.com/code.html?OkbtP1ZksGHXwqk7Jh3i>

```
var ar = getDistinctElements([1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100]);
println(ar);

function getDistinctElements(ar)
{
    var ar2 = [];
    
    for(let i = 0; i < ar.length; i++)
    {
        if (!isInArray(ar[i], ar2))
        {
            ar2.push(ar[i]);
        }
    }
    
    return ar2;
}

function isInArray(n, ar)
{
    for(let i = 0; i < ar.length; i++)
    {
        if (ar[i] === n)
            return true;
    }
    
    return false;
}
```


## Coding challenge #27: Create a function that will receive an array of numbers  as argument and will return a new array with distinct elements

Solution 2

<https://codeguppy.com/code.html?NjGtyQdMP49QiaAkmwpU>

```
var ar = getDistinctElements([1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100]);
println(ar);

function getDistinctElements(ar)
{
    var ar2 = [];
    
    var lastIndex = ar.length - 1;
    
    for(let i = 0; i <= lastIndex; i++)
    {
        if (!isInArray(ar[i], ar, i + 1, lastIndex))
        {
            ar2.push(ar[i]);
        }
    }
    
    return ar2;
}

function isInArray(n, ar, fromIndex, toIndex)
{
    for(var i = fromIndex; i <= toIndex; i++)
    {
        if (ar[i] === n)
            return true;
    }
    
    return false;
}
```

## Coding challenge #28: Calculate the sum of first 100 prime numbers

<https://codeguppy.com/code.html?v0O9sBfnHbCi1StE2TxA>

```
var n = 10;
println("Sum of first ", n, " primes is ", sumPrimes(10));

function sumPrimes(n)
{
    var foundPrimes = 0;
    var i = 2;
    var sum = 0;
    
    while(foundPrimes < n)
    {
        if (isPrime(i))
        {
            foundPrimes++;
            sum += i;
        }
        
        i++;
    }
    
    return sum;
}

// Returns true if number n is prime
function isPrime(n)
{
    if (n < 2)
        return false;
        
    if (n == 2)
        return true;
    
    var maxDiv = Math.sqrt(n);
    
    for(var i = 2; i <= maxDiv; i++)
    {
        if (n % i === 0)
        {
            return false;
        }
    }
    
    return true;
}
```


## Coding challenge #29: Print the distance between the first 100 prime numbers

<https://codeguppy.com/code.html?xKQEeKYF1LxZhDhwOH7V>

```
printDistances(100);

// Print distances between the first n prime numbers
function printDistances(n)
{
    var lastPrime = 2;
    var i = lastPrime + 1;
    var foundPrimes = 1;
    
    while(foundPrimes < n)
    {
        if (isPrime(i))
        {
            println(i - lastPrime, "\t", i, " - ", lastPrime);

            foundPrimes++;
            lastPrime = i;
        }
        
        i++;
    }
}

// Returns true if number n is prime
function isPrime(n)
{
    if (n < 2)
        return false;
        
    if (n == 2)
        return true;
    
    var maxDiv = Math.sqrt(n);
    
    for(var i = 2; i <= maxDiv; i++)
    {
        if (n % i === 0)
        {
            return false;
        }
    }
    
    return true;
}
```

## Coding challenge #30: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.

Solution 1

<https://codeguppy.com/code.html?v5A0QBsdHaiAVA2CPN5y>

```
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
        
        var sum = digit1 + digit2;
        
        var digitSum = sum % 10;
        digitSum += carry;
        s = digitSum.toString() + s;
        
        carry = sum >= 10 ? 1 : 0;
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
```

## Coding challenge #30: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.

Solution 2

<https://codeguppy.com/code.html?yMQXcPgfrYxuaIxqQmZc>

```
var n1 = "2909034221912398942349";
var n2 = "1290923909029309499";
var sum = add(n1, n2);

println(n1);
println(n2);
println(sum);

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
        
        var sum = digit1 + digit2;
        
        var digitSum = sum % 10;
        digitSum += carry;
        s = digitSum.toString() + s;
        
        carry = sum >= 10 ? 1 : 0;
    }
    
    if (carry > 0)
        s = carry + s;
    
    return s;
}
```

Others coding challenges to try on your own:

31.	Create a function that will return the number of words in a text
32.	Create a function that will capitalize the first letter of each word in a text
33.	Calculate the sum of numbers received in a comma delimited string
34.	Create a function that returns the number of occurrences of each word inside a text. The return will be an array with objects inside {word, count}
35.	Create a function to convert a CSV text to a “bi-dimensional” array
36.	Create a function that converts a string to an array of characters
37.	Create a function that will convert a string in an array containing the ASCII codes of each character
38.	Create a function that will convert an array containing ASCII codes in a string
39.	Implement the Caesar cypher
40.	Implement the bubble sort algorithm for an array of numbers
41.	Create a function to calculate the distance between two points defined by their x, y coordinates
42.	Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
43.	Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
44.	Create a function that will convert a string containing a binary number into a number
45.	Create a function to calculate the sum of all the numbers in a jagged array (contains numbers or other arrays of numbers on an unlimited number of levels)
46.	Find the maximum number in a jagged array of numbers or array of numbers
47.	Deep copy a jagged array with numbers or other arrays in a new array
48.	Create a function to return the longest word in a string
49.	Shuffle an array of strings
50.	Create a function that will receive n as argument and return an array of n random numbers from 1 to n. The numbers should be unique inside the array.
51.	Find the frequency of letters inside a string. Return the result as an array of arrays. Each subarray has 2 elements: letter and number of occurrences.
52.	Calculate Fibonacci(500) with high precision (all decimals)
53.	Calculate 70! with high precision (all decimals)


> Remember to check [@codeguppy](https://twitter.com/codeguppy) on Twitter for new JavaScript coding challenges and [codeguppy.com](http://codeguppy.com) for more coding fun such as challenges, games, animations
