// Coding challenge #40. Implement the bubble sort algorithm for an array of numbers
// https://codeguppy.com/code.html?6bPnKHLhArSPdUPK2mqm

var ar = [23, 1000, 1, -1, 8, 3];
println(ar);
bubbleSort(ar);
println(ar);

function bubbleSort(ar)
{
    var shouldSort = true;
    var length = ar.length;

    while(shouldSort)
    {
        shouldSort = false;
        length--;
        
        for(var i = 0; i < length; i++)
        {
            var a = ar[i];
            if ( a > ar[i+1] )
            {
                ar[i] = ar[i+1];
                ar[i+1] = a;
                shouldSort = true;
            }
        }
    }
}
