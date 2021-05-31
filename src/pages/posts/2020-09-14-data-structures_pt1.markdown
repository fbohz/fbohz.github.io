---
template: post
title:      "Learning About Data Structures Part 1"
date:       2020-09-14 07:31:03 -0400
permalink:  data-structures_pt1
filename: 2020-09-14-data-structures_pt1
---

> Learning about data structures is an essential part of becoming a more experienced developers. Such knowledge will also help you to be a better problem solver. 

# Learning About Data Structures Part 1

Learning about data structures is an essential part of becoming a more experienced developer. Such knowledge will also help you to be a better problem solver. 

While reading this article have this in mind:

`Programs = Data Structures + Algorithms`

OR

`Data Structures + Algorithms = Programs`

## What are Data Structures (DS)

If you know about data structures you can adapt to other coding problems and languages. If you know the fundamentals then you can make decisions in different areas.

Data Structures (DS):

- Collection of values, you can have functions apply to them. Each one is different of what it can do.
- They are specialized to do certain things. like tools. Most of the time they are prebuilt.
- You can put things in DS and take them out.
- There are **ton of Data Structures**. Most of them you wouldn't encounter them most of the time.
  - E.g. Blockchain is a DS a way to hold info, Arrays and Objects in JS are DS.
- There are always **tradeoffs**. Just like readability, memory and speed. 
- Common DS questions: 
  - How to build one?
  - How to use it?
- Each language has **data structures to organize data types**.   
- With each data structure you can do access, search, insertion, deletion, sort. Each data structure might be good for one or the other. See [Big-O CheatSheet](https://www.bigocheatsheet.com/).

## Computers and Data

- Variables are stored in RAM and is not persistent. Storage is persistance. RAM is faster than regular storage (e.g Hard Drive)
- RAM is like a shelf with a lot of info. Each shelf holds 1 byte of storage.
- DS in modern PCs are stored in different ways. E.g. a variable as number can stored in 32 bits or 4 bytes.
- Each data type has a number of bits and allocated on the system. Some data structures are organized next to each other others more apart. That is why DS are powerful, thinking a bit low level.
- This could help us write great code.
- In JS we could build our own data structures such as stacks as they are not included.

## Arrays

- Arrays are stored in sequential order, and have **smallest footprint**.
- Array methods like lookup are fast `O(1)`. Push `O(1)`. 
- Unshift or splice is `O(n)`: so we think add items at beginning, or deleting for is not the best data structure to do so.

**Static vs Dynamic Arrays**

- *Static*: you specify array and items. We copy array to new location to allocate space with new item in sequential order. C++ does this.
- *Dynamic*: Allow not think about memory and machine takes care of it. Like JS.

With this in mind `push` can also be O(n). JS usually doubles space when creating array and if you `push` JS could copy the array again and allocate new space.

# Hash Tables / (Objects in JS)

Like hashes in Ruby. They are referred as objects in JavaScript. 

- Hash Tables allow to set key/value pair.
  - With hash tables key is like our index in arrays.
  - This is done through a hash function.
- Hash Functions:
  - Functions that generates a value of fix length for every input received.
  - Idempotent: an function that given an input always has the same output.
- Hashes could be a bit slower because of hash functions.
  - We need them to be really fast then. The hashing function then is really fast.
- When declared hash properties are created somewhere in memory.
- Accessing properties some cases can be O(1)
- **Probably the most common interview question**.
  - Optimizing nested loops `O(n^2)` to `O(n)` with hash tables.

Remember: 

- Hashes have fast lookups, fast inserts, and flexible keys.
- However they are unordered and have slow key iteration.
- With hash tables we **increase space complexity (tradeoff)**.

**Hash Collisions**

- Nothing tells the hash function to evenly distribute data.
- Sometimes collisions occur. This is inevitable.
  - When two data are stored in same memory spaces, hashes needs to do something to deal with it.
  - Hash collisions theoretically **slows downs reading and writing as O(n)**
  - You can deal with collisions many ones one of them is linked lists.
- So lookups in hash tables occasionally are `O(n)`.
- As hashes do not have order, JS in ES6 implemented ways to have order such as Map() and Set() which are particular hashes/objects.

**Hash Tables vs Arrays**

- Hash tables allow very fast quick access to items `O(1)`. Arrays in search are `O(n)`.
- Most of the time in hash tables insert is O(1), although there are collisions.
- Arrays are placed next to each other and not order. Hash tables are kind of all over the place.


## Hashes and Arrays Questions Examples

Note: Usually string questions are **array questions**. Like reversing strings etc. If you cannot see question examples below, click [here](https://repl.it/@fbohz/DataStructuresBlogQA#index.js). 

<iframe height="400px" width="100%" src="https://repl.it/@fbohz/DataStructuresBlogQA?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Linked Lists

- Two types: Singly and doubly.
- Remember arrays had bad performance with insert and delete and they had to re-arrange themselves in memory once in a while. 
- Hashes brought problems like ordering. Hashes can be solved by linked lists.

What is a linked list?
- Link lists have pointers to next node.
- First node is called the head, and the last is usually the last node.
- Linked lists are **null terminated** so the tail **points to null**
- So these lists are simply elements that link to each other and the last points to null.

```javascript
    linkedList: apples --> grapes --> pears

    apples
    8947 --> grapes
             8742 --> pears
                       372 --> null
```
Javascript **doesn't have linked lists** but **we can build them**.

**Linked Lists vs Array vs Hashes**
- In link list you start at head then traverse / iterate as needed until hit null
- Array are located next to each other, linked lists are all over kind of like hashes
- Inserts in middle of linked lists are better than arrays.
- Linked lists have advantages from hash tables that it can sort data.
- Prepend and append is `O(1)`, lookup, insert, delete is `O(n)`. 

What is a pointer? Is a reference to another in memory. Example: 

```javascript
  const o1 = {a: true}
  // o2 has a pointer to o1 in memory, NOT copying it.
  const o2 = o1
  o1.a = false
  console.log('1', o1)
  console.log('2', o2)
  // => should log false both, since its a pointer.
```

If you delete the pointer then the reference sticks. There's garbage collection in JS.


## Building our JS Linked List

Check below or click [here](https://repl.it/@fbohz/BlogLinkedLists) for the code.

<iframe height="400px" width="100%" src="https://repl.it/@fbohz/BlogLinkedLists?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

- `insert()` is the hardest method to implement in linked lists.
- All you're doing is **removing pointers** or **adding pointers** as a way to add or delete from linked lists
- **How is inserting and deleting O(1)?** One step to add a new item, constant time, independent of total list length, therefore `O(1)`.
- If you were to implement the Stack as an array, you could add the element to the far end of the array and keep a length count. That’s also O(1). However, you’d need to prebuild the array to some maximum length otherwise you’d have to copy its contents to a new larger array when it was filled up. That copy counts as part of the computational work in maintaining the stack, so it’s `O(n)`.

Read more: [https://www.quora.com/How-is-inserting-into-a-linked-list-O-1-I-dont-understand-how-this-is-the-worst-case](https://www.quora.com/How-is-inserting-into-a-linked-list-O-1-I-dont-understand-how-this-is-the-worst-case)

## Doubly Linked Lists

- In doubly link lists the difference is that **there is a extra piece of data that points to previous node. So you can reverse**.
- In doubly you can traverse backwards. 
- Searching can be more efficient than singly linked list.
- However you **increase space complexity**.

### Converting Single to Doubly Linked list

Check below or click [here](https://repl.it/@fbohz/BlogLinkedLDoubly).

<iframe height="400px" width="100%" src="https://repl.it/@fbohz/BlogLinkedLDoubly?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
  
## Singly vs Doubly Linked Lists

- Singly requires less memory. **Could be a bit faster than doubly**.
- Singly is used for expensive memory and not that much searching.
- With doubly you can delete, insert backwards as needed. But there's more space complexity.
- With doubly you can delete fairly easy. They are good with good operations for searching.
- Most of the time the questions are theoretical and about singly linked lists.

## Linked Lists: Interview Questions

Reverse singly list. Create method reverse() that will reverse singly list. See below or click [here](https://repl.it/@fbohz/BlogLinkLQA#index.js):

<iframe height="400px" width="100%" src="https://repl.it/@fbohz/BlogLinkLQA?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Linked Lists Conclusion

- `reverse()` method above is probably the most difficult concept in data structures.
- Linked Lists are low level DS. Used in hashes and stacks.
- Linked Lists have slow lookup and more memory. But they are ordered, fast deletion/insertion and flexible size.
- Linked Lists working with them can be difficult to manage all pointers but **linked lists are useful in implementing browsing history, file systems etc**.
- You might want to use linked lists when deleting in hash tables, but this is up to you.

In our next chapter, things will get more interesting. So stay tuned for more data structures! 💫