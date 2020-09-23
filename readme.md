# Focus College ACSD Assignment 3

This respository is intended for the use of Focus College Students enrolled in the Advanced Certificate of Software Development located in Kelowna, BC and Surrey, BC.

---
# Gerlads Calculator v3
![Gerald's Image]

## How to use this Application:
*  ### You first need to run:
```
Npm install
```


*  You may pass in arguments as normal without adding a name; such as:
It will return with "No name specified" but will not save it.
```
npm run start -- calc-wood-needed -w 8 -l 8
```
*  If you would like to create a house that you can recall you will use:
```
npm run start -- calc-wood-needed -client "name" -w 8 -l 8
```
* To recall the save house simply insert:
```
npm run start client "their name"
```
---
## Gerald has supplied us with his new requirements:

As Gerald, I need to enter inches into the required measurements on the command line.
The current application assumes --width 8 and --length 8 are feet, but Gerald would like to be able to set the units. In discussion, we came up with several ideas that would accomplish the goal:

*  Allowing --width 8ft 3in as an entry
*  Allowing --width 8'3" as an entry
* Adding a flag to determine the units (i.e. --width 99 --units inches)
Only one method is required, but decimal values are NOT acceptable. (Gerald doesn't want 8.3 to be confused with 8'3").

**As Gerald, I need to be able to recall prior house builds without knowing their dimensions.**

*  The current application requires that I put in a width and length to make a calculation. Gerald would like to be able to assign set of parameters to a customer by name, and then recall the results by that same name.

**As Gerald, I need the application to seperate between studs and plates.**

*  Currently, we return the total number of studs required for the building. Gerald need to know the different between the top/bottom boards (called "plates") and the vertical boards (called "studs"). We also need to calculate two rows of top plates. The bottom plates will still only have one row.

**As Gerald, I need the application to seperate between studs and plates.**

*  Currently, we return the total number of studs required for the building. Gerald need to know the different between the top/bottom boards (called "plates") and the vertical boards (called "studs"). We also need to calculate two rows of top plates. The bottom plates will still only have one row.


---
I used the yargs package [Yargs package] for the processing of the command line parameters. 

[Yargs package]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

[Gerald's Image]: https://i.pinimg.com/originals/c5/0e/0a/c50e0a205f5d839a09c2239e45dee376.png