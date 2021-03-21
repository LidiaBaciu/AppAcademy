# Radix Sort
Radix Sort is a non-comparison, integer sorting algorithm. Its time complexity is superior to every other sorting algorithm we've encountered thus far, but it can only be used in the special case where we are strictly sorting integer data.

Radix Sort is most often used on lists of binary numbers, but that doesn't mean that its only application is to sort cryptic machine code! All sorts of data can be converted into binary format before being processed, including long strings of text and image data. Regardless of the type of data we'd like to sort, it is critical that all data be converted to binary (or some other integer representation) before Radix Sort is invoked.

But have no fear! For the sake of simplicity, we'll be exploring Radix Sort while working with standard base 10 integers, rather than with binary numbers.

## Why Integer Data?
The reason we can only run Radix Sort on integer data is because it works by exploiting some specific properties of that data type. Numbers have meta information about themselves baked into their representation - and we're going to take advantage of it.

Claim: We can determine the relative size of an integer based on the number of digits it has.

When working with positive numbers, we know that any 3 digit number is greater than any other 2 digit number. The individual digits themselves are irrelevant. We can write our algorithm without actually comparing any values, simply sorting based on an integer's digit-length.

In order to implement Radix Sort, there are some basic questions we'll need to answer. Since we'll need to answer them repeatedly throughout our algorithm, we can abstract the process of answering each question out into a set of helper functions.

## Helper Function	Question	Returns
getDigitFrom(num, place)	What digit is at the given place value in num?	integer
getIntLength(num)	How many digits are in num?	integer
getMaxDigits(nums)	How many digits does the integer with the most digits have?	integer

These methods are rather math-oriented, and are all considered "already-solved-problems". In an interview setting, if delivered with confidence, it would be fair to state that you would have pre-defined these helper functions before beginning the task of implementing Radix Sort, and as long as you denote their names, inputs, and outputs, you can probably get away with avoiding implementing them entirely.

This saves you a lot of time in getting to the real meat of the problem, and helps you avoid looking silly as you stumble over the math.

However, if you like a good math problem and would like to attempt implementing these functions on your own, by all means, stop here and do so in your own editor!

Just don't continue until you're finished, because the solutions to these helper functions are coming up next.

## Radix Sort Helper Function Solutions
The following code provides is the solutions to getDigitFrom. getIntLength, and getMaxDigits:

``getDigitFrom
const getDigitFrom = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;;``

``getIntLength
const getIntLength = (num) => (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;``
We need to know the number of digits of the largest number in our list.
This is how we know how many times to run through or algorithmic process; how many times to bucket and unbucket our numbers.

``getMaxDigits
function getMaxDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
  }
  return maxDigits;
}``

# Time and Space Complexity Analysis
## Time Complexity
In general, the best, average, and worst case time complexities of Radix Sort are all the same.

Since this algorithm requires iterating over all n elements of the input array, and doing so k times, where k is the length (number of digits) of the longest integer in the array, we wind up with a run time of O(n * k). This makes Radix Sort faster than any of the previous comparison-based algorithms we've seen earlier in the course!

However, there is actually some debate in the computer science community over this topic. There exists a camp that believes that when Radix Sort's input array contains entirely unique values, due to a characteristic of the way computers store numerical data, that k becomes log k. (See Wikipedia: Radix Sort)

If this is true, the absolute worst case scenario becomes the case where the length of the longest integer in the input array, k, is equal to (or greater than) the total number of elements in the array, n. In this scenario, we wind up with an O(n log(k)), or approximately O(n log(n)), run time, making Radix Sort, at worst, equal in speed to our fastest comparison-based sorting algorithm.

Though it will require some additional research, this may be a worthwhile talking point in an interview setting!

## Space Complexity
Radix Sort is an O(n + k) space algorithm.

The amount of memory consumed by the algorithm increases relative to both the size of the input array and the length of the longest integer.

## When should we use Radix Sort?
You should consider using Radix sort whenever you need to:

Sort a list of any sort of binary data, including numeric, text, or image data in binary format.
Sort a list of integers, and you don't know the value of the largest element in the list.
If you do know the largest element in the list, see countingSort!
Radix Sort's run time, O(n * k), is dependent on the length (number of digits) of the largest integer in the input, k. For this reason, it is fastest when k is relatively small.
