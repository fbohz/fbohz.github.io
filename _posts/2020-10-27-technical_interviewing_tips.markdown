---
layout: post
title: "Beating The Technical Interview"
date:       2020-10-27 09:31:03 -0400
permalink: technical_interviewing_tips
filename: 2020-10-27-technical_interviewing_tips
---

> In the last couple of months I’ve had the opportunity to interview with many companies...Today I’ll talk about some interviewing tips when tackling with such technical questions!

# Beating The Technical Interview

In the last couple of months I've had the opportunity to interview with many companies (couple of even had a FANG 🧛🏼‍♂). Today I'll talk about some interviewing tips when tackling with such technical questions!

**Knowing How to Solve Coding Problems**

- This is what will set you apart from others.
- Thought process is important in a coding interview.
- You must understand tradeoffs.

## What To Expect

When called for an interview, you can expect one (or a combination) of the following formats:

- Coding challenges
  - Week long coding (or data) project
  - Timed technical assessment
  - HackerRank, CoderPad or Codility challenge
  - Data science case study
- Technical phone screens
  - Trivia
  - Pair-programming
- In-person technical interviews
  - Trivia
  - White-boarding
  - Pair-programming

Be ready for common questions such as:

- What is your understanding of *X_ROLE*?
- Describe your ideal day at work?
- Tell me about yourself.
- Why do you think you are great fit for *X_ROLE*?
- Share your experience with *X_TECHNOLOGY* (from your resume).

Make sure you _are prepared_

- Know the structure / time-length of the interview.
  - Know if your interview is divided in x parts and how long is each part.
- Know the position you're interviewing for.
- Research about the company
- Prepare a list of study materials. Include videos, articles, courses etc.
- Practice, practice, practice! Use HackerRank, LeetCode etc.

**What are companies looking for**

- Analytic skills: hear your thought process
- Coding Skills: code clean, readable
- Technical skills: do you know the fundamentals
- Communication skills: personality matches company's personality?

They want smart people that solve problems themselves without having other people to walk them by the hand all the time.

## *The Flow*: Follow It and You Will Cruise the Interview.

As you follow the flow below, refer to [this video](https://www.youtube.com/watch?v=4UWDyJq8jZg&t=7s) for an example coding challenge. 

**Ask Questions**

- Any restrictions? Any additional info I need?
- What data structure, is it an array, object?
- Is data in sorted? Are there duplicates?
- Are you getting one data structure or two?
- *Repeat the question to the interviewer*.

**Talk out the Solution**

- You can diagram an example data with as much info as possible.
  - Depict example in a more visual way. Here e.g line with years.
- Come up with brute force _DON'T CODE YET_.
  - Go through all years, find alive and get highest population
  - Get min birth year and max death year. What's Big-O? O(N).
  - Have extra counter for number of peopleAlive ..etc

**Brute force**

- State brute force out-loud then code.
  - Ask clarifying questions what if X, what do I return?
  - Think about _unnecessary work_. E.g. do you need to check death year?
    - Death decrements population. Birth adds population.
    - Ask interviewer if they die that year does the death count that same year or following?
- Think about your data structure:
  - A hash with years: E.g. 1750: 1 birth, 2 deaths and so on.
  - Need your min and max birth year since birth is what increments.

**Refine solution with style**

- _Modularize code_
  - Each code one function.
  - It helps you focus on the _most interesting things to write_
  - If you modularize you don't have to write all code.
  - As you code:
    - _Talk out loud_ what each function is doing.
    - Test code.
    - Check for any math.
- Yes, _test_ your code. Start with small test cases, then throw larger cases.

**Repeat after me**: _A solution (even brute force solution) is better than no solution_.

## Some Reminders

1. Listen, ask questions. **Look for clues**.
2. Draw and example. Big and with no special cases.
3. Create (_don't code_) a descriptive solution. Walk through example before coding. State **Brute force algorithm**, if you feel you can do better than brute-force do the latter if not do brute-force. Again, a solution, is better than no solution.
4. **State Run-Time, Big-O**
5. **Solidify your understanding of algorithm**
6. Code and optimize as needed.
7. Modularize as much as possible.
8. Test your code. Simple test cases, then bigger test cases.

## K.O. Reminders

- In order to solve problems we need to learn Data Structures and Algorithms. 90% of the time you'll use these:
  - Data Structures: E.g. arrays, stacks, queues, linked lists, trees, tries graphs, hash tables
  - Algorithms: E.g. sorting, dynamic programming, BFS + DFS (searching), recursion
- **Don't jump straight into coding!** ask questions about parameters, how large are the parameters received, anything as needed. If not very large then you don't have to worry about time vs space complexity and Big-O.
- Stop and question as much as you can (but don't be annoying).
- Start with brute force approach:
  - Tell interviewer about it. Don't necessarily have to code this part.
- Avoid nested loops such as O(n^2) or O(a\*b).
- Interviewer wants to see:
  - You understand problem
  - Can solve it naively and brute by thinking it out loud.
  - Make logical steps towards the solution.
    - Modularize code (pieces of code that do one thing).
    - Make i
  - When you have a solution. Talk with interviewer as ways in which it can be broken down.
  - **AFTER YOU SOLVE IT** you can talk about your thinking and research you might do to make it better. Like ES6+ functions, other data structures that could make it more readable or work better.
- Interviewer if satisfied, or out of time, will end the interview accordingly.

## One Last Thing...

- **Be nice and be a team player**: A lot of times your interviewer wants to see how you perform as a team. This part is hugely underestimated but how your interviewer perceives how you **listen** to them and how you take feedback can have a tremendous effect on whether you'll get or not the job. At the end of the day you will be working with other people, so they want to see not only your coding chops but also that you are a team player and a nice person to be around. If you come off as a jerk they probably would not want to work with you. Don't just pretend to be nice: BE nice and you might be in for a big surprise 😁.
- Practice solving problems **without a text editor** and with a **time limit**.
- Mock interview with a friend.
- Brush up on things you don't know.
- Ask for clarifying questions
- **Focus on getting a working solution**. Done is better than perfect.
- You **won't know all the answers**
  - Don't be afraid of say 'I don't know'.
  - **Make an educated guess**.
- If you can, prepare your own questions ahead of time.
- **You don't know everything**. You can always follow up with your interviewer with additional details/improvements on a question or technical challenge. It will show your interviewer you are always learning and improving yourself. 

## BONUS: SAMPLE QUESTION

I decided to take a chance at the classic Facebook question delineated on [this video](https://www.youtube.com/watch?v=4UWDyJq8jZg&t=7s).

**The Question**

Given a list of people with their birth and death YEARS, find the (1) year with the highest population.

**The Solution**

I implemented a class-based approach. If you can't see the code below just access it [here](https://repl.it/@fbohz/CodingInterviewQsPractice#index.js).

<iframe height="400px" width="100%" src="https://repl.it/@fbohz/CodingInterviewQsPractice?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

**Note:** There are many variations of this question, and some of them might ask you a different output. Always ask for the edge cases! In this case there were only two test cases with obvious solutions.

You've got this! 👊🏼

## Resources

* [**WomenWhoCodeBoston Github Challenges**](https://github.com/WomenWhoCodeBoston/algorithms/tree/master/challenges)
* [**Project Euler**](https://projecteuler.net/)
* [**WomenWhoCodeNYC Algorithms**](https://github.com/WomenWhoCodeNYC/Algorithms)
* [**Hackerrank**](https://www.hackerrank.com/)
* [**Interviewing.io**](https://interviewing.io/)
* [**Leetcode**](https://leetcode.com/)
* [**Coderbyte**](https://coderbyte.com/)
* [**Careercup**](https://www.careercup.com/)
* [**Algorithms and Data Structures Cheatsheet**](https://algs4.cs.princeton.edu/cheatsheet/)
* [**JS Interview Questions**](https://github.com/sudheerj/javascript-interview-questions)
* [**Awesome Interview Qs**](https://github.com/MaximAbramchuck/awesome-interview-questions)
* [**Intro to Computer Science**](https://online-learning.harvard.edu/course/cs50-introduction-computer-science)
* [**Frontend Interview Questions**](https://github.com/young/frontend-interviewing/tree/master/questions)
* [**Odin Project's Preparing for Interviews**](https://www.theodinproject.com/courses/getting-hired/lessons/preparing-to-interview-and-interviewing)
