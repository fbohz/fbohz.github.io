---
layout: post
title:      "Unix Cheatsheet"
date:       2020-09-07 07:31:03 -0400
permalink:  unix_cheatsheet
filename: 2020-09-07-unix_cheatsheet
---

> Following in our cheatsheet series. We now tackle into Unix. As Web developers we live a lot in the terminal so knowing Unix commands is a key skill, so let's dive in!

# Unix Cheatsheet 🤓📗!

Following in our cheatsheet series. Today we tackle into Unix. As Web developers we live a lot in the terminal so knowing Unix commands is a key skill. Let's dive in!

## Terminal Basic Commands

**Every command line command is actually a little computer program**, even with simple commands. These commands tend to have the following structure:

```js
    [command][options][arguments]
```

Starting Tip: Your home directory (`~`) is the directory where your terminal always starts.


**Basics Cheats**
- Exit terminal with `Ctrl + D`
- Press `tab` when writing and will autocomplete.
- `ls -l`: long detailed info
- `wc`: word count. e.g. `wc todo.txt`
- `cat`: The cat command is often used to print text files to the terminal, despite the fact that it’s really meant to **concatenate files**. E.g. `cat todo.txt todo2.txt`
- You can see the contents of the file you created using either the `cat` to display the contents, or `less` to open the file for viewing. After viewing with `less`, remember that you should hit `q` to get back to the terminal.
- `head` and `tail`: There are also two easy to remember programs for glimpsing the beginning or end of a text file: head and tail.
- `>` output direction: One easy way to create a file is using **output redirection**. Output redirection stores text that would be normally printed to the command line in a text file. You can use output redirection by typing the greater-than sign (>) at the end of a command followed by the name of the new file that will contain the output from the proceeding command. E.g. `echo "I'm in the file." > echo-out.txt`
  - You can also append text to the **end of a file** using two greater-than signs *(>>).* Let’s try this feature out: `echo "I have been appended." >> echo-out.txt`
- Edit files:
  - use `nano`: Control + O in order to save the changes you’ve made to the text file, or Control + X in order to exit nano and go back to the prompt.

**Migration and Destroy**

- Use cmd `mv` to move things
  - Also `mv` can *rename* things as second argument. E.g.  `mv todo.txt todo2.txt`
- `cp` copies, first argument the file you want to copy the second the location. `cp hi.txt Desktop`
  - `-r` option, ensures that the underlying directory structure of the directory you wish to copy remains intact.
- Delete **(not recommended)**
  - Use `rm` command. Be careful in terminal there's no undo button. E.g. `rm text.txt`

## More Cheats

- *`man` command*: Each of the commands that we’ve discussed so far are thoroughly documented, and you can view their documentation using the man for *manual* command, where the first argument to man is the command you’re curious about.
  - e.g. `man` ls
- You could type `apropos editor` into the command line which will print a list of results
- `less` command
  - Once you’ve opened a log file (or any file) using less file-name, use the following keys to search. Please note that the match will be highlighted automatically by default.

Forward Search:

- `/`: search for a pattern which will take you to the next occurrence.
- `n`: for next match in forward
- `N`: for previous match in backward
Backward Search
- `?`: search for a pattern which will take you to the previous occurrence.
- `n`: for next match in backward direction
- `N`: for previous match in forward direction
- The **`*` (“star”) wildcard** represents zero or more of any character, and it can be used to match names of files and folders in the command line. For example if I wanted to list all of the files in my Photos directory which have a name that starts with “2017” I could do the following `ls 2017 *`


**Searching**
- `grep`: used to search **within**. `grep "California states.txt`
- `find`: you can find files with any flags. `find . -name "*.jpg"`


- `history`: shows history of your commands.
  - `head -n 5 ~/.bash_history` look for recent history and **access actual file**.
  - history does not show the content of ~/.bash_history. Instead, it shows the current content of Bash's history list in memory for this session.
- `~/.bash_profile`
  - The ~/.bash_profile is a list of Unix commands that are run every time we open our terminal, usually with a different command on every line. 
  - One of the most common commands used in a ~/.bash_profile is the alias command, which creates a shorter name for a command. E.g. `alias docs='cd ~/Documents'` now you can use it with `docs`.
- *Differences in files*
  - `diff`: `diff first.txt second.txt`
  - We could also compare differing lines in a side-by-side comparison using sdiff: `sdiff four.txt six.txt`
  - we could do checksum with `md5 `.  E.g. `md5 states.txt`. Same with `shasum`.
- Using pipes `|`: The pipe allows us to take the output of a command, which would normally be printed to the console, and use it as the input to another command. It’s like fitting an actual pipe between the end of one program and connecting it to the top of another program. You use it with `grep`.
  - E.g. count all names that end in vowel: `grep "[aeiou]$" index.html | wc -l`
- `makefile`
  - You would get all files then cd into directory, get a makefile and run make.
  - E.g. `cd ~/Documents/Bio makefile install.make`

## Resources

Read this [article](https://www.digitalocean.com/community/tutorials/basic-linux-navigation-and-file-management).
