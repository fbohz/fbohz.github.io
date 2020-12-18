---
layout: post
title:      "On CS Algorithms: Chapter I"
date:       2020-12-18 19:31:03 -0400
permalink:  algorithms_ch1
filename: 2020-12-18-algorithms_ch1
---

> Today we'll discuss regarding the last piece of the puzzle on good problem solving in software engineering, namely algorithms. On this first chapter we'll talk about Recursion and Sorting Algorithms.

# On CS Algorithms: Chapter I

Today we'll discuss regarding the last piece of the puzzle on good problem solving in software engineering, namely algorithms. On this first chapter we'll talk about Recursion and Sorting Algorithms. These are mostly notes from articles and online courses I've taken. Enjoy!

## Intro To Algorithms and Recursion Pattern

Remember: `DS + ALG = programs`:
- A two line function is technically an algorithm.
- There are thousands of well established algorithm.
- There are important algorithms we'll learn. 
- With good algorithms we can enhance our Big-O

**What is Recursion?**

- It's more of a concept, than an algorithm
- Common topic in an interview.
- E.g. type `ls -R` on terminal in a folder: it will give you all files and folders.
- **Recursion is a function that refers to itself inside of the function**. Sounds too philosophical? 🤯

It can be, recursive function can be easy as this:
```javascript
// Caution: Stack Overflow
function(inception) {
    inception()
}
```

Recursion will be used in searching and sorting algorithms. DOM traversal on a website uses recursion. An object inside of an object you can use recursion.

Two problems of recursion
- Difficult to understand at first.
- **Stack overflow** also could happen. Self calling function could cause your function to ran out your memory. Infinite loops.
- A **base case** will help the recursive function to stop.

## Anatomy of Recursion

Base case will help it stop. An example could be:

```javascript
let counter = 0
function(inception) {
    if (counter > 3) {
        return 'done'
    }
    counter++
// will ensure 'done' returned    
    return inception()
}
inception()
```

Three rules to build recursion:
1. Identify the base case
2. Identify the recursive case
3. Get closer and closer and return when needed. **Usually you have 2 returns**.

### Recursion Exercise - Factorial

A factorial multiplies itself depending on number for example:
`5! = 5 * 4 * 3 * 2 * 1`

You can solve this through looping or recursion. See below or click [here](https://repl.it/@fbohz/BlogRecursionEg1#index.js). Note both are `O(n)`.

<iframe height="400px" width="100%" src="https://repl.it/@fbohz/BlogRecursionEg1?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Recursion Exercise - Fibonacci

Fibonacci adds first two items equals third item. Again this one can be done either loops or recursive. See below or click [here](https://repl.it/@fbohz/BlogRecursionEg2#index.js).

<iframe height="400px" width="100%" src="https://repl.it/@fbohz/BlogRecursionEg2?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Recursion vs Iteration

- **Anything that can be done recursively can be done with a loop (iteratively)**
- You can go all life without recursion.
- Thoughts:
- **Recursion can keep your code DRY**
- **Recursion creates an extra memory footprint** and stack overflow
- Takes time to learn.
- **So not always a good idea.**
- **When to use recursion**
- When you don't know how deep the data structure is.
- Useful for tree data structure.
- Traversing through trees and graphs, sorting through items.
  
## Recursion Tips:

- Every time **using a tree or converting to a tree consider recursion**
 - You see a lot of divide and conquer in recursive solutions like a phonebook. These divide and conquer usually have recursive solutions.
- Tail call optimization
- allows recursion without increasing the call stack.
- REF: https://2ality.com/2015/06/tail-call-optimization.html
- Great real world application example of when to use recursion: 
- https://stackoverflow.com/questions/105838/real-world-examples-of-recursion

Interview triggers: 
1. A problem can be divided into small problems, smaller instances of those problems. 
2. **Each of these instances of problems are identical in nature**. Calculations are same over and over
3. If you solve smaller problems (leaf notes of tree) and you combine them, that solves problem at hand. 

**Conclusion**
- Remember try to avoid stack overflow with recursion.
- Use recursion to make code DRY, but be careful with performance in recursion.
- Recursive although expensive, with graphs and sort can use recursion.

# Sorting 

Sorting is very important for interviews. But, why you care about sorting if you have `sort()` in JS?

**Sorting is not a big deal with small input data**. But as it grows it gets more complicated.

Examples:
- Google needs to sort articles on a particular event in time
- Amazon needs to sort articles
- Netflix needs to show all movies, tv shows.
  
**All these example cannot use built in sort methods. They need to create their own sort method**.
**Most scaled companies sort their data**. 

This topic is very important:
- What sorting algorithm you can use depending on the problem.
- There are a lot of sorting algorithms. Most likely you'll never implement your own, except for a small example on an interview.
- The goal is to understand high level these sorting algorithms to talk intelligently on interviews.
- Key to learn as more companies grow, **sorting and searching become more and more crucial**.
- We'll go through these sorts:
  - Easier to remember, might come up in interviews:
  - Bubble Sort, Insertion Sort, Selection Sort
  - More complex, more efficient sometimes:
  - Merge Sort, Quick sort

## Built-in `sort()`

```javascript
const basket = [2,65,34,1,6]
const sp = ['único', 'árbol', 'cosas']

// to implement sp sort you'll do this:
basket.sort((a,b) => {
    return a - b 
})
spanish.sort(function(a,b){
    return a.localCompare(b)
})
```

Try running line sort(). You might have surprise because JS converts to string. With JS each browser will use their own ECMAScript implementation so differences might come as well.
  
Read more [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).

### Sorting Algorithms

- You don't need to write from scratch, more likely ever, but need to know about them.
- Most of the time talk about it, and implement it with frameworks.
- **Interviews, will ask you for sure.**
- There are Big O tradeoffs when using sorting algorithms.
- [Great learning resource](https://www.toptal.com/developers/sorting-algorithms). 

## Bubble Sort - DO NOT USE

- How would you bubble sort: 6,5,4,3,2?
  - Compare each one and swap them out. **Bubble up the highest number**
- A lot of comparison, and slow. Space complexity O(1) but time complexity is `O(n^2)` so slow.
- Probably **not the best algorithm**

Example Bubble Sort: Scroll until the end of this article.

## Selection Sort - DO NOT USE
- Scan list of items for smallest then swap to first position.
  - It also means a lot of passes to find the smallest item through the list.
- Time complexity is `O(n^2)` and O(1) as space. So also **not very efficient**.

Example Selection Sort: Scroll until the end of this article.

## Insertion Sort
- Not most efficient, but **it is efficient in some ways**.
- If the list is almost sorted, it can give you O(n)
- **Works as comparing and inserting into the list**. More like you'll do with your brain. Works well with small data set.

Insertion Sort Example: Scroll until the end of this article.

Best case scenario is O(n) **very fast**. If your set is **mostly sorted use insertion sort**.

## Merge Sort and `O(n log n)`

- This performs better than others.
- **Divide and conquer: Merge sort and quick sort use this conquer along with recursion**.
- These **don't have nested loops**.
- This O(n log n) is because it is still compared, everything at least once, but it is not compared everything to everything.
- The list is divided until there's 1 item per group.
  - This is building a **reversed tree**. 
  - These groups are compared until sorting is done.
- Very efficient than most, but **more space complexity* with `O(n)`.
- You probably won't be asked to do merge sort by yourself.

Merge sort is stable but very hard to implement for yourself. [More about stability in sorting algorithms](https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important).

Merge Sort example: Scroll until the end of this article.

## Quick Sort

Also divide and conquer `O(n log n)`.

Uses pivoting technique. **Pretty complex to understand.**
- Picks random pivot, e.g. random value.
  - Compares it with all numbers less than pivot to left and higher to move to right.
  - With pivot you have two lists and keep doing and breaking things down like a tree until everything is sorted and then combine.
- How you pick pivot point? It depends.
- How will you code it? Pretty challenging.
- Quick sort is very useful. Space complexity is very good could better than merge sort O(log n) but in worst cases very bad O(n^2).
- **Selecting pivot is very important to avoid worst case**.
- Quick sort is fastest on average, but can have bad consequences if you don't know how to use it. You can rely on merge or others if unsure.

**[Quick sort example](https://repl.it/@fbohz/quickSort)**.

## Which Sort is Best?

**This can come in an interview, choose sorting sort based upon x case**?
- Insertion Sort can be used:  
  - If you only have few items, small input, and already sorted.
- Merge Sort (**often used**)
  - O(n log n) fast b/c of divide and conquer. Best fast and worst case is consistent.
  - If you're worried about worst case scenarios use this one. 
  - If space is an issue, it can be very expensive as O(n)
- Quick sort (**often used**):
  - Better than merge sort. Best space complexity and popular
  - Downside is worst case which is bad.
- Bubble Sort: **never use it**. Only for educational purposes.
- Selection Sort: **never use it**. Only for educational purposes.

Others:
  - Heapsort: can be slower but merge/quick are preferred most cases.
  - Bucket, Radix: will learn more.

## Other Sorts:

Can we beat `O(n log n)`? Mathematically, is impossible. Means we have to sort by comparison.

Tell me more about the other sorts:
- [Heap sort](https://brilliant.org/wiki/heap-sort/).  
- [Quick vs Heap sort comparison](https://stackoverflow.com/questions/2467751/quicksort-vs-heapsort). 

**Non Comparison Sorts**:
- Radix sort and Counting Sort use this.
- Non comparison uses the way that number and data are stored on computers and take advantage of that.
- This *only work with numbers*, specifically integers in a specific range.
- *Doesn't work* on other data universally.
- So you could use it with numbers.

**Resources**:
- [Radix Sort](https://brilliant.org/wiki/radix-sort/). 
- [Radix Sort Animation](https://www.cs.usfca.edu/~galles/visualization/RadixSort.html). 
- [Counting Sort](https://brilliant.org/wiki/counting-sort/).
- [Counting Sort Animation](https://www.cs.usfca.edu/~galles/visualization/CountingSort.html) 

## Common Sorting Interview Questions

1. Sort 10 schools around your house by distance:
   - insertion sort. Really fast and easy to code with good space. Schools could be presorted.

2.  eBay sorts listings by the current Bid amount:
    - radix or counting sort. Because are numbers and set amount.

3.  Sort scores on ESPN
    - Quick sort. Since it varies with decimals etc. Take advantage of better space complexity.

4.  Massive database (can't fit all into memory) needs to sort through past year's user data
    - Merge Sort. Worried about performance b/c big data so no Quick sort.

5. Almost sorted Udemy review data needs to update and add 2 new reviews
    - Insertion Sort. Assuming prev data is already sorted and adding 2 new reviews will take less.

6.  Temperature Records for the past 50 years in Canada
    - radix or counting sort IF no decimals
    - Quick sort IF decimal places

7.  Large user name database needs to be sorted. Data is very random.
    - Quick / Merge sort. Not a lot of info here. If not worried on worst case.

8.  You want to teach sorting
    - Bubble sort, Selection sort

## Sorting Review

- JS included `.sort()`, depending on its engine might use merge / quick or insertion sort for smaller arrays. So depends on engine used by browser.
- Quick Sort: average space performance concern.
- Merge sort: more stable always gives same results in order if two items are same.
- In real life you won't use others unless small (insertion).
- **In interview TIP**: 
  - You can say you can use implement a bubble sort b/c time constrain.
  - OR say will implement Merge sort and explain.
- [**Dancing Algorithms (Videos)**](https://www.youtube.com/user/AlgoRythmics/videos). 

## Sorting Algorithms Examples

Wanna see the code in action? Check them out below or click [here](https://repl.it/@fbohz/BlogSortingAlgorithmsExamples#index.js).

<iframe height="400px" width="100%" src="https://repl.it/@fbohz/BlogSortingAlgorithmsExamples?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
