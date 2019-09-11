// Coding challenge #33. Calculate the sum of numbers received in a comma delimited string
// https://codeguppy.com/code.html?QL6H38rpqjGarwCfsbO3

println(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));

function sumCSV(s)
{
    var ar = s.split(",");
    
    var sum = 0;
    
    for(var n of ar)
    {
        sum += parseFloat(n);
    }
    
    return sum;
}
