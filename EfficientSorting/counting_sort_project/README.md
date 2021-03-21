# Counting Sort 
is another non-comparison, integer sorting algorithm. Just like Radix Sort, its time complexity is superior to every other comparison-based sorting algorithm we've encountered thus far, but it can only be used in the special case where we are sorting integer data. Additionally, we must know the largest interger value in the input array (which we'll refer to as k) prior to beginning our sort. (Or...we must be willing to take the time to search for it first.)

## Why Integer Data?
The reason we can only run Counting Sort on integer data is similar to Radix Sort; because it works by exploiting some specific properties of the integer data type. In this case, the property we're exploiting about integers is simpler, and is linked to our friend the array data structure. We're simply going to take advantage of the fact that an arrays indices are integers, and that they are pre-sorted for us. We'll use an array data structure as a storage device for us to count the number of occurences of each integer in our input array. (Thus, the name "Counting Sort".)

## Why we need to know the largest integer of the input array in advance:
If we're going to use an array as a counting device, and that array must have one element for every possible integer in our input array, we must know in advance how long our counter array will be. This way, when we encounter a new, previously-uncounted integer while iterating through our input, we have a position in the counter array to...count it!

### NOTE: This strategy will only work for input arrays containing exclusively positive integers.

However, if we are clever, we can adapt our strategy to work with an input that contains negative integers as well. With just a little extra preliminary information - the smallest integer in the input array - we can allocate largest - smallest (where smallest is negative) elements to our counter array upon initialization, remembering that our counter array's indices now represent values that are offset by Math.abs(smallest).

For simplicity, and to get the base algorithm down, let's just assume our input has all positive integers for now.

## Implementation - How does it work?
Counting Sort works by allocating an array of counters k elements long, where k is the largest integer in our input. Upon initialization, we set each element of the new counter array to zero. As long as k is not giant, this will be fine for our purposes.

After allocating an array of counters, we iterate across the input array. As we approach each integer, we increment the counter at the index that is equal to the number we have just approached in our input by one.

For example, if the integer we've approached in the input array is 5, we count it by incrementing the value at i = 5 in our counter array by 1. In this way, we keep track of the number of occurences of each integer in our input array, and we do it in ascending order!

When we're finished counting, we iterate across the counters array. For each non-zero value we find, we push that number of the current counters index, i, to our output array.

Finally, we return the output array, which should now contain each of our input array's elements in ascending order. If you'd prefer to sort in descending order, simply iterate through the counters array backwards and follow the same process.

# Time and Space Complexity Analysis
## Time Complexity
In general, the best, average, and worst case time complexities of Counting Sort are all the same.

Since this algorithm requires iterating over all n elements of the input array, and then subsequently iterating over our each element of our counter array (which has length k), we wind up with a run time of O(n + k). This makes Counting Sort faster than any of the previous comparison-based algorithms, and also faster than Radix Sort!

## Space Complexity
The trade off for Counting Sort comes with its space complexity. The smaller the range of integers that can possibly occur in our input array, the more memory efficient Counting Sort will be. The larger k is, the larger the number of elements we'll have to allocate in our counter array. Thus, the space complexity of Counting Sort is O(k).

NOTE: In an interview setting, always ask the interviewer if you can be guaranteed that the largest element in the input array is not huge.

If asked why, mention that you may choose to use the Counting Sort algorithm to achieve a linear sort, but are considering the memory-cost trade offs involved. According to the ECMA-262 5th edition spec, due to 32-bit numbers, the upper-bound length of a JavaScript array is 232 - 1, which is 4,294,967,295. If the largest possible integer in your array is larger than this, you'll have to optimize the Counting Sort algorithm to use less total memory if you intend to use it.

## When should we use Counting Sort?
You should consider using Counting Sort whenever you need to:

Sort a list of integer data, and you do know the value of the largest element in the list.
If you do not know the largest element in the list, see radixSort!
Counting Sort's run time, O(n + k), is depedendent on the size of the largest integer in the input, k. For this reason, it is fastest when k is relatively small.
