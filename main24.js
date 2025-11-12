//REG EXPRESSION

let rel1 = new RegExp("abc");
let rel2 = /abc/;

let eighteenplus = /eighteen\+/;

// console.log(eighteenplus);

//Testing For Matches
// console.log(/abc/.test("abcde"));
// console.log(/abc/.test("abxde"));

//Set of Characters

// console.log(/[0123456789]/.test("in 1992"));

// console.log(/[0-9]/.test("in 1992"));

//- hypen indicates a range of characters

// \d "Any digit character";
// \w "An alphanumeric character(word character)";
// \s "Any whitespace character(space, tab, new-line, and similar)";
// \D "A character that is not a digit";
// \W "A nonalphanumeric character";
// \S "A nonwhitespace character";
// . "Any character except for newline"

//Date and Time format like 01-30-2003 15:20 can be matched with RegExp below

let dateTime =/\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
// console.log(dateTime.test("01-30-2003 15:20"));

// console.log(dateTime.test("30-jan-2003 15:20"));
let dateTime2 = /\d\d-\D\D\D-\d\d\d\d \d\d:\d\d/;
// console.log(dateTime2.test("30-jan-2003 15:20"));

// [\d.] means any digit or period character;

//[.] looses its special maeaning in a square baracket;

//invert a set of charaacters i.e to express that you eant to match any character except the ones in the set write a caret(^) character after the opening square baracket;

let notBinary = /[^01]/;

// console.log(notBinary.test("1100100010100110"));

// console.log(notBinary.test("1100100010100110"));


//Repeating Parts of a Pattern
// console.log(/'\d+'/.test("'123'"));
// console.log(/'\d+'/.test("' '"));
// console.log(/'\d*'/.test("'123'"));
// console.log(/'\d*'/.test("''"));

//* occurs zero times or more than once;
//? occurs zero times or one time;

let neighbor = /neighbou?r/;

// console.log(neighbor.test("neighbour"));

// console.log(neighbor.test("neighbor"));

//Another version of dateTime

let dateTime3 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;

// console.log(dateTime3.test("1-30-2003 8:45"));

//open ended ranges with {5,} leaving the last number out in the curly barcket;

//Grouping Subexpressions

let cartoonCrying = /boo+(hoo+)+/i;

// console.log(cartoonCrying.test("Boohooooohooohoo"));
//i is used to make it case insensitive;

//Matches and Groups
 let match = /\d+/.exec("one two 100")

//  console.log(match); 

//  console.log("one two 100".match(/\d+/));

 let quotedText = /'([^']*)'/;
//  console.log(quotedText.exec("she said 'hello'"));

// console.log(/bad(ly)?/.exec("bad"));
// console.log(/(\d)+/.exec("123"));

//The Date Class
//date objectg using new;
// console.log(new Date());

// console.log(new Date(2009, 11, 9));

// console.log(new Date(2009, 11, 9, 1, 59, 59, 999));

//Last four arguments ( hours, minutes, sec, milliseconds);

//getTimeMethod

// console.log(new Date(2015, 9, 21).getTime());

// console.log(new Date(1445378400000));

// console.log(new Date().getTime());
// console.log(new Date().getFullYear());
// console.log(new Date().getMonth());
// console.log(new Date().getHours());

function getDate(string){
    let[_,month,day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month -1, day);
}

// console.log(getDate("1-30-2003"));

//word and string boundaries

// /^\d+$/ - matches a string consisiting entirely of one or more digits;

// /^!/ - matches any string that starts with an exclaimation mark;

// \b - makes sure the date starts and ends on a word vocabulary;

// console.log(/cat/.test("concatate"));
// console.log(/\bcat\b/.test("concatate"));

//choice patterns

//three regular expressions for a number followed by cows

let animalCount1 = /\b\d+\s+pigs?\b/, animalCount2 = /\b\d+\s+cows?\b/, animalCount3 = /b\d+\s+chickens?\b/;

let animalCountNorm = /\b\d+\s+(pig|cow|chicken)s?\b/;

// console.log(animalCountNorm.test("15 chickens"));

//The Mechanics of Matching

//Backtracking
/\b([01]+b|[\da-f]+h|\d+)\b/;



// console.log( /^.*x/.exec("abcxe"));

// console.log("papa".replace("p", "m"));

// console.log("Borobudur".replace(/[ou]/, "a"));

// console.log("Borobudur".replace(/[ou]/g, "a"));

// console.log(
//     "Liskov, Barbara\nMcCarthy, John\nWadler, Philip".replace(/(\w+), (\w+)/g, "$2, $1"));

let s = "the cia and fbi";

// console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase()));

let stock = "1 Lemon, 2 Cabbages, and 101 Eggs";

function minusOne(match, amount, unit){
    amount = Number(amount) - 1;
    if(amount === 1){
        unit = unit.slice(0, unit.length - 1);
    }else if(amount === 0){
        amount = "no";
    }
    return amount + " " + unit;
};

// console.log(stock.replace(/(\d+) (\w+)/g, minusOne));


//Greed

function stripComment(code){
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
};

// console.log(stripComment("1 + /* 2 */3"));

// console.log(stripComment("x = 10; // ten!"));

// console.log(stripComment("1 /* a */ + /* b */ 1"));

//Dynamicaly Creating RegExp Objects;



// let name = "harry";

// let text = "Harry is a suspicious character";

//Note: when creating the \b use 2 backslashes when writing in a  normal string, when not using a slashed-enclosed regular expression.

let regexp = new RegExp("\\b("  + name + ")\\b", "gi");

// console.log(text.replace(regexp, "_$1_"));

let name2 = "dea+hl[]rd";
let text = "This dea+hl[]rd guy is super annoying.";
let escaped = name2.replace(/[\\[.+*?(){|^$]/g, "\\$&");

let regexp2 = new RegExp("\\b"+escaped+"\\b", "gi");

// console.log(text.replace(regexp, "_$&_"));

//The Search Method

console.log("  word".search(/\S/));

console.log( "  ".search(/\S/));

//The lastIndex Property

// \g - global;
// \y - sticky;

let pattern = /y/g;
pattern.lastIndex = 3;
let match1 = pattern.exec("xyzzy");
// console.log(match1.index);
// console.log(pattern.lastIndex);

let global = /abc/g;
// console.log(global.exec("xyz abc"));

let sticky = /abc/y;

// console.log(sticky.exec("xyz abc"));

let digit = /\d/g;
// console.log(digit.exec("here it is: 1"));
// console.log(digit.lastIndex);
// console.log(digit.exec("and now: 1"));
// console.log(digit.lastIndex);

// console.log("Banana".match(/an/g));

//Looping Over Matches

let input = "A string with 3 numbers in it... 42 and 88.";

let number = /\b\d+\b/g;
let match3;

while(match3 = number.exec(input)){
    console.log("Found", match3[0], "at", match3.index);
}


let matchAllDigits = /(\d)+/g;

let digits = "boy 7 8 9 0";
console.log(digits.match(matchAllDigits));

//let allDigits =/[0-9]/

let email = "bish_123@yahoo.org";
let emailRegExp = /^[^\s]+@[^\s]+\.[^\s]+$/;
console.log(emailRegExp.test(email));

let words = "cat shoe rat mask, task, met";
let wordRegExp = words.match(/\b\w{3}\b/g);

console.log(wordRegExp);

let sentence = "This boy is here";

console.log(sentence.replace(/\s+/g, "-"));

let capRegExp = /^[A-Z]/g;

console.log(capRegExp.test("This is a Boy"))

let dateFormat = /\b\d{1,2}-\d{1,2}-\d{4}\b/;

let date = "Today's date is 02-14-1997";

console.log(date.match(dateFormat));


//Occurence in a string



function verify(regexp, yes, no){
    if(regexp.source == "...") return ;
    for(let str of yes) if (!regexp.test(str)){
        console.log(`Failure to match '${str}'`);
    }
    for(let str of no) if(regexp.test(str)){
        console.log(`Unexpected match for '${str}'`);
    }
}
verify(/ca[rt]/, ["my car", "bad cats"], ["camper", "high art"]);
verify(/pr?op/, ["pop culture", "mad props"], ["plop", "prrrop"]);
verify(/ferr[et|y|ari]/,  ["ferret", "ferry", "ferrari"], ["ferrum", "transfer A"]);
let popOrProp = /pr?op/.test("pop culture");
let feGroup = /ferr[et|y|ari]/.test("ferrum", "transfer A");

verify(/ious($|\P{L})/u, ["how delicious", "spacious room"], ["ruinous", "consciousness"])

let anyword = /ious($|\P{L})/u.test("ruinous", "conciousness" );
verify(/\s[.,:;]/, ["bad punctuation ."], ["escape the period"]);

let spacePeriodEtc = /\s[.,:;]/.test("bad punctuation .")

verify(/\p{L}{7}/u, ["Siebentausenddreihundertzweiundzwanzig"], ["no", "three small word"]);
let wordLongerThan7 = /\p{L}{7}/u.test("Siebentausenddreihundertzweiundzwanzig");

verify(/(^|\P{L})[^\P{L}e]+($|\P{L})/ui, ["red platypus", "wobbling nest"], ["earth bed", "bedovot abe", "BEET"]);

//Quoting Style

let texts = "'I'm the cook,' he said, 'it's my job'"

console.log(texts.replace(/(^|\P{L})'|'(\P{L}|$)/gu, '$1"$2'));

//Numbering Again

let numberAgain = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/;

for (let str of ["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4", "1e+12"]){
    if(!numberAgain.test(str)){
        console.log(`Failed to match '${str}'`)
    }
}

for (let str of ["1a", "+-1","1.2.3", "1+1", "1e4.5",".5.", "1f5", "."] ){
    if(numberAgain.test(str)){
    console.log(`Incorrectly accepted '{str}'`);

    }
}

