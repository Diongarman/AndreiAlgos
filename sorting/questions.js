//#1 - Sort 10 schools around your house by distance:


/*

Dion: I would choose selection or insertion sort for this task. The reason being that they are easy to implement and their n^2 complexity won't have a chance to grow too large because of the small input size

Andreas: insertion, O(1) space, fats on small sorts, easy implementation


*/

//#2 - eBay sorts listings by the current Bid amount:

/*
Dion: I would choose merge sort over quick sort. Merge sort, whilst taking up O(n) space, has a worst case of O(nlogn), this consistency is desired because bid amounts need to be guaranteed to be updated in a timely fashion else the buyer may not get the best price if a quicksort happened to run a worst case.


Andreas: radix or counting, a bid is usually a number between 1-100(dollars), can beat O(nlogn)

*/

//#3 - Sport scores on ESPN


/*

Dion:?

Andreas: quicksort, efficient, space complexity is a worry,

*/

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data


/*
Dion: I would pick quick sort, it is an in-place sorting algorithm and therefore has a good space complexity of O(logn) best case and O(n) worst.

Seeing as memory is finite, we want to optimise for space.


Andreas:merge sort - we need to sort it externally because can't fit in memory, so space complexity doesn't matter, because data is so big we care about speed, want to guarantee O(nlogn)


*/

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews



/*

Dion: I would pick heap sort because it has nlogn sorting and nlogn for insert.



Andreas: insertion sort, assuming previous data already sorted, so we want optimal insertion

*/

//#6 - Temperature Records for the past 50 years in Canada

/*

Dion: merge sort, memo not an issue

Andreas:

- radix or counting if no decimal places. An int in a small range

-decimal places: quick sort, so can do in memo sorting. Memo is an issue

*/

//#7 - Large user name database needs to be sorted. Data is very random.


/*


Dion: Quicksort, more random data means that the chances of worst case complexity is low

Andreas: Merge sort if have enough memo or quick sort if memo is an issue 


*/

//#8 - You want to teach sorting for the first time?

/*

Dion: Bubble sort, most simple implementation

Andreas: Bubble and selection sort.

*/