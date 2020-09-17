---
layout: post
title:      "Learning About Data Structures Part 2"
date:       2020-09-16 09:31:03 -0400
permalink:  data-structures_pt2
filename: 2020-09-16-data-structures_pt2
---

> Learning about data structures is an essential part of becoming a more experienced developer. This is the second part of the series (and will be the longest one), buckle down 🚀.

# Learning About Data Structures Part 2

Learning about data structures is an essential part of becoming a more experienced developer. This is the second part of the series (and will be the longest one), buckle down 🚀.

## Stacks & Queues

- Stack and queues are very similar to linear data structures.
- Only difference is how items are removed.
- Stack and queues have less methods. This could be an advantage as it could limit what can be done. 

**Stacks are like plates**
- You can only touch the first plate, and go one by one. This is **called last in first out (LIFO)**
- These are very good to know the very last value.
- Most programming languages have a stack mindset like LIFO.

**Other uses**

- Browser history. Undo/Redo. This idea comes from stack. 
- Methods are `pop()` O(1), `push()` O(1) and `peek()` O(1). Traverse is not recommended in stack.

**Queues**

Are like an entrance to a rollercoaster. They have a **first in first out (FIFO)**

Uses:

- If you have a wait-list app, could use queues. Restaurant to see if you have table, could use queues. Uber/Lyft uses queues. Printers too.
- Methods are `enqueue()` O(1), `dequeue()` O(1) and `peek()` O(1). Again traversing is not recommended (lookup())
- Dequeue() unlike pop() takes first one out whereas pop() in Stacks takes last.

*Reminder*: Do not build a queue using arrays since its inefficient.

## Stack and Queues Implementations

- Stacks: Use Arrays or build out of Linked Lists
  - **Both work very well.** 
  - Think about what are your needs.
- Queues: Also Arrays or through Linked lists. 
  - Here **Arrays not recommended**. Because you have to traverse O(n) when you shift and remove.
  - Use always Linked Lists for queues.

So, how can you build stack and queues using JavaScript?

### Stack / Queues Example

See below or click [here](https://repl.it/@fbohz/BlogStackQueuesEG#index.js).

<iframe height="400px" width="100%" src="https://repl.it/@fbohz/BlogStackQueuesEG?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Stack / Queues Review

- Stacks are like plates. Queues are like waiting lists
- Stacks and Queues are great for removing and inserting. **fast peek**
- Data is ordered.
- **Do not use Arrays when building queues. Because you have to traverse O(n) when you shift and remove.**
- **Slow lookup for both.**

For example interview Question check [discussion](https://leetcode.com/problems/implement-queue-using-stacks/description/). Solution below and [here](https://repl.it/@fbohz/BlogQueueUsingStacksQS#index.js).

<iframe height="400px" width="100%" src="https://repl.it/@fbohz/BlogQueueUsingStacksQS?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>


## Trees

- Trees have a hierarchical structure. 
- Linked lists, arrays are linear. Linked lists are considered a type of tree
- Trees have **only one parent** and it can **leaf notes**
- Within trees you can have **sub trees**
- Facebook comments have a tree DS, with comments of comments etc.
- Abstract syntax tree. Code is broken down by a machine as this.
- There are many tree data structures.

Examples: DOM is a tree data structure. HTML is parent then body is parent with many children.

## Binary Trees

- Each node can only have 0,1,2 nodes. Each node represents a certain state.
- Each child can only have one parent.
- Types of binary trees:
  - **Perfect Binary tree** - nodes are full nothing is missing. They are efficient. Number of nodes double as it goes down. Second property states that bottom levels equal top levels + 1. **So there are some efficiencies here** as O(log N)
  - **Full binary tree** - the opposite and only meets requirements of binary tree.

### `O(log n)`- Reminder
- There is a certain way to calculate num of nodes of perfect binary trees.
    - You calculate 2 to the power of level in question.
    - E.g. Level 0: 2^0 = 1. Number of nodes: 1. Lvl 2: 2^2 = 4. etc.
    - Based on this formula you can do 2^treeHeight - 1 to know how many total nodes. E.g. 3 Level Tree: 2^3 - 1 = 7 nodes.
    - We can simplify as **log notes = treeHeight**. So you by knowing this, you can limit steps by going in one branch.
- So O(log n) is like **divide and conquer**. Choice of next element is one of several. We only choose one not all. 
- **Like looking through a phone book**. You look based upon the names you want. So divide an conquer. Only need to explore subset of tree.
- Binary search trees allows us to search efficiently. Google uses this method too.

If this sounds complicated, try to get the idea to begin with 😅.

## Binary Search Trees (BST)

Most Common Tree Data Structure. What is BST?
- They are **really good at searching** and comparing things.
- BSTs preserves relationships. Like folders, parent folder, sub-folder etc., unlike Hash Tables.

Visual example:
```      
      101
      /  \
      33   105
      / \    / \
      9  37  104 144
```
- Here lookup is very easy you can find by going left of right depending on number.
 - Insert and delete are also `O(log n)`. For example delete 105, decide which node to start.
- Always use traversing and with conditionals saving time to insert, delete.

Read more: [https://visualgo.net/bn/bst?slide=1](https://visualgo.net/bn/bst?slide=1)


### BST Pros and Cons

- Very good performance better than `O(n)`, assuming BST is balanced.
- Ordered and flexible size.
- **No** O(1) operations, since traversal is required.

*Note*: BST is not the fastest, sometimes Arrays outperform them.

### Unbalanced vs Balanced BSTs

- **Unbalanced BST**: Where are the nodes are either on the right or left. Becoming more like linked lists. Unbalanced become O(n) for lookup, insert, delete. 
- **Balanced (preferred)**: 

How do you balance your trees?
By algorithms. Programming languages do provide libraries and tools to help you build them.


### BST Example In Code

See below or click [here](https://repl.it/@fbohz/BlogBST-eg).


### AVL Trees + Red Black Tree (Balancing Binary Search Trees)

- These trees are used with a library and balance trees.
- These balance the trees when it finds they are not unbalanced.

There are resources for you to visualize them:
  - [https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7](https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7)
  - [https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5](https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5)
  - [https://www.cs.usfca.edu/~galles/visualization/AVLtree.html](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html)
  - [https://www.cs.usfca.edu/~galles/visualization/RedBlack.html](https://www.cs.usfca.edu/~galles/visualization/RedBlack.html)

🤓📗 Always look up how to visualize trees and any data structure in fact. 

### Heaps and Tries

**Heaps**

Heaps are mostly *Binary Heaps*.
- **Parent greater than children**.
- Like priority queues, sorting algorithms.
- But left and right can be any value. So lookup as `O(n)` here.
- They are good at doing comparative.
- **There's left to right insertion**. You can implement binary heap with arrays.

Priority Queues:
- Different than queues with FIFO.
- **Elements with higher priority are server before than lower priority**.
- Example of priority queue:
  - Emergency room, airplane boarding.
- It gives a sense of structure and order.

**Remember**

- `Memory Heap != Heap Data Structure in JS.`
- Searching lookup is slower.
- Gives idea of priority.
- Most of the time insert is fast.
- Methods like find max and fin min are available and very fast.
  
**Trie**

- Specialized tree used in searching, most often with text.
- In most cases it outperform most data structures, depending what is doing.

**How Tries work**
- Empty root node.
- Letters are added after.
- They are also called **prefixed tree**, like autocompleted.
- Used for searching words on dictionary, word suggestions. 
- Lookup here is fast, you look for length then move. Space complexity also has advantages. Prefixes save space.

## Recap on Trees

- You need to understand how they work.    
- Try to practice and build one from scratch.

[**Arboreal.js**](https://github.com/afiore/arboreal) lets you use it and create the tree you want. You won't be creating trees from scratch.

## Graphs

Our last data structure! 🙌🏼

What are Graphs?

- Graph is a set of values related in pair fashion.
- Like a network
- Each item is called a node or vertex.
- Nodes are connected with edges.
- They model real work relationships. Kind of like how the internet works. 
- Used to represent roads, friends. Google maps uses graphs to determine the shortest route.

**Linked lists, trees are a type of graphs!**

### Types of Graphs

Directed vs Undirected

- **Directed**:
  - One way street.
  - Twitter is more directed if they follow me i don't necessarily follow them
- **Undirected**:
  - Two way street.
  - Facebook is undirected a friend can be connected to another

Unweighted and Weighted

- Weighted graphs has information in the edges / connections too.
- Google Maps uses weighted graphs. Like fastest way in 1-6.

Cyclic vs Acyclic

- If vertices are connected in a cycle are cyclic.
  - Cyclic are common in weighted because there's a way to go back.
- Directed Acyclic Graph is common in projects such as IOTA a blockchain project. Many trees can also create this data structure.
- There are some online graph resources you can see and check to test your knowledge.

Example: [https://internet-map.net/](https://internet-map.net/)

### Graph Exercise

Building / representing a graph. Considering this graph how can you build it.
```
    2 - 0
    /  \
    1   3
```

Some options:

**Edge List**: Like with an array of arrays. Stating the connections.

```javascript
  const graph = [[0,2], [2,3], [2,1], [1,3]]
```

**Adjacent List**: A graph like array, objects, linked lists. Index is the node, and value is the node neighbors.

```javascript
  const graph = [[2], [2,3], [0,1,3], [1,2]]
```

**Adjacent Matrix**: will only have 0s and 1s if X have connections to note Y. 0 is no Y is yes.

```javascript
  const graph = {
   0: [0,0,1,0],
   1: [0,0,1,1],
   2: [1,1,0,1],
   3: [0,1,1,0]
  }
```

### Graph (Undirected / Unweighted) Implementation:

- Using adjacency list. **Use a hash table**.
- We use objects because shifting/unshifting in Arrays is expensive.

See below or click [here](https://repl.it/@fbohz/BlogGraphExample#index.js) for the example code.

<iframe height="400px" width="100%" src="https://repl.it/@fbohz/BlogGraphExample?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Last Words on Graphs

- They look pretty complex but they are pretty simple once you have other DS taken care of.
- **In interviews graphs aren't that big because it takes time to build them**.

Learn the fundamentals.
- Think how you hold data in graphs such as adjacency matrix
- Types of graphs. How you can create graphs.
- Performance and Big O is complicated because of so many graphs.
- There are algorithms to help.
- Scaling is hard as you will need a big team to build graph structures that scale well

[**Neo4j**](https://neo4j.com/) a tool to build complex structures as this.

# Data Structures (DS) Review

- Technology is built on data structures. There might be more to come but make sure you have a strong foundation on the basics.
- Anyone can build their own data structure. E.g. with Blockchain we have special hashes, linked lists, tries etc. 
- With DS understood now you can take on algorithms, the other piece of the puzzle that many large companies ask.
- Programming languages do provide libraries and tools to help you build many data structures.
- Don't feel you have to reinvent the wheel!

**Remember** all this information is important to know it high level but do not worry if you can't grasp it all. The more you study it and see it and with time concepts will settle in and. In no time you'll be making magic with data structures! 🧙🏾‍♂️