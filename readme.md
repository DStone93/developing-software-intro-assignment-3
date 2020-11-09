# Focus College ACSD Assignment 3

This respository is intended for the use of Focus College Students enrolled in the Advanced Certificate of Software Development located in Kelowna, BC and Surrey, BC.

---
# Gerlads Calculator v3
![Gerald's Image]

## How to use this Application:
*  ### You first need to run:
```

$ npm install
$ tsc
```
---
## Using the commands:

*  You may pass in arguments as normal without adding a name; such as:

```
npm start -- calc-wood-needed -w 8 -l 8
```
*  If you would like to input your requirements as inches, use --inches at the end of your arguments:
```
npm start -- calc-wood-needed -w 96 -l 96 --inches
```

* A first time client parameters will be saved to dist the folder by using the argument:
```
npm start -- calc-wood-needed --name example -w 8 -l 8
```
* To recall the save house simply insert:
* Note: If the name is not found nothing will return
```
npm start -- client --name example
```

* node dist/index.js is the alternative to npm run start. Example:
```
node dist/index.js calc-wood-needed -w 16 -l 24
```
---
## Test logs:
```
* node dist/index.js calc-wood-needed -w 8 -l 8

| House Measurement |posts: studs: plates: returned |  Last test Ran By 
|       ---         |             ---               |         ---       
|      8 x 8        | posts:0 studs: 28 plates: 7   |       Derrick
|     16 x 24       | posts:4 studs: 70 plates: 20  |       Derrick
```
```
* npm start -- calc-wood-needed -w 96 -l 96 --inches

| House Measurement |posts: studs: plates: returned |  Last test Ran By 
|       ---         |             ---               |         ---       
|      96 x 96      | posts:0 studs: 28 plates: 7   |       Derrick
|      192 x 288    | posts:4 studs: 70 plates: 20  |       Derrick
```
```
npm start -- calc-wood-needed --name example -w 16 -l 24

```
```
Command: npm start client --clientname example
( 16 x 24)

House {
widthMaterials: {  
function: 'buildWall',
    inches: 192,
    studs: 13,
    posts: 0,
    plates: 6
  },
  lengthMaterials: {
    function: 'buildWall',
    inches: 288,
    studs: 19,
    posts: 1,
    plates: 9
  }
}


```
---
## Gerald has supplied us with his new requirements:

As Gerald, I need to enter inches into the required measurements on the command line.
The current application assumes --width 8 and --length 8 are feet, but Gerald would like to be able to set the units. In discussion, we came up with several ideas that would accomplish the goal:

*  Allowing --width 8ft 3in as an entry
*  Allowing --width 8'3" as an entry

*  Adding a flag to determine the units (i.e. --width 99 --units inches)
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

// Test push from Desktop