# Unlimited Memory Helper

* A Tool to help you review visuals from memory based on the techniques dicussed in Kevin Horseley's book *Unlimited Memory*

## Why?
* I feel really bad about myself whenever I forget concepts I learned from books, lectures, video talks, etc. I didn't want that to happen, so I sought out the book *Unlimited Memory* (To be honest, I didn't seek it, I was recommended to read this book).
* The techniques in this book are majestic, but it all won't matter if you don't review it enough as the author said himself. Which raises another problem:
* **How in the world will I remember to review?**

## How?
* It's as simple as writing a "todo list" of sorts, but the process of genrating dates and finding out what to review for today is automated.

### Setting up

1. You need nodejs installed
2. You need to run `npm install` or `yarn`

**This requires csv-parse**

3. Lastly, create a file called `memoryList.csv`
4. (Optional) Move `memoryhelp` shell script to where you put your custom scripts
Ex. I put mine in `/usr/local/bin`

## What this tool exactly does?
* It "reminds" you to remember a visual you made to remember a concept or idea.
* It "reminds" you every 1 day, 3 day, 7 day, 14 day, 21 day, 28 day, 2 month, and 3 month interval (as recommended by Kevin Horseley himself)

## Sorry Windows Users
* Yeah, `memoryhelp` shell script most probably doesn't work on Windows, but the NodeJS script still should work. Probably works on a Mac. And will work on Linux
