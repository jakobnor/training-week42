/*
    Hi.
    This is a set of practice exercises.
    The purpose is to focus on a few things at a time.
    You do this by writing your answer after a task is given (see the example).

    DO NOT change any code that is provided unless the task specifically says so.
*/

/* -----------------------------------------------------------------------------
// Task: Example
// Write the code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"];

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    Create a function that returns an array of length m-n, 
    n is the min value. 
    m is the max value. 
    if n = 5 and m is 10 the returned array should be [5,6,7,8,9]
    Use loops and arrays to achieve the goal. 
*/
console.log("Task: A");

function createArray(n, m) {
    let arr = [];
    for (let i = n; i < m; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(createArray(5, 10));

/* -----------------------------------------------------------------------------
    Task: B
    Create two arrays using your function from task A.
    first array n = 5, m = 11
    second array n = 8, m = 23
    
    Create a function that combines the two arrays into one, but no duplicate values. 
    Use for loops
*/
console.log("Task: B");

let array1 = createArray(5, 11);
let array2 = createArray(8, 23);

function combineArrays(arr1, arr2) {
    let combined = [...arr1];
    for (let i = 0; i < arr2.length; i++) {
        if (!combined.includes(arr2[i])) {
            combined.push(arr2[i]);
        }
    }
    return combined;
}

console.log(combineArrays(array1, array2));

/* -----------------------------------------------------------------------------
    Task: C
    Following you will find an alphabet and an encrypted text with a shift value. 
    The message is encrypted using a Caesar cipher https://en.wikipedia.org/wiki/Caesar_cipher 
    Create a function that 
    - Takes three parameters: message, alphabet, and shift 
    - Creates the key based on the alphabet and the shift value. 
    - Decrypts and returns the message.
    Use arrays and for loops. 
*/
console.log("Task: C");

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const encryptedMessage = "cshh jtkq"; 
const shift = 6;

function decryptMessage(message, alphabet, shift) {
    let decryptedMessage = "";
    
    for (let char of message) {
        if (char === " ") {
            decryptedMessage += " "; 
        } else {
            let index = alphabet.indexOf(char);
            let newIndex = (index - shift + alphabet.length) % alphabet.length; 
            decryptedMessage += alphabet[newIndex];
        }
    }
    
    return decryptedMessage;
}

console.log(decryptMessage(encryptedMessage, ALPHABET, shift)); 

/* -----------------------------------------------------------------------------
    Task: D
    You are given a list of numbers.
    Write a function that takes the list and a target sum as input parameters
    The function is then to figure out what two numbers in the list that summed makes the provided sum.

    Example:
    [3,2,6,9]
    target 9
    -> [3,6]
*/
console.log("Task: D");

const numbers = [1, 23, 14, 56, 42, 33, 0, 3];
const target = 36;

function findPairWithSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [numbers[i], numbers[j]];
            }
        }
    }
    return null;
}

console.log(findPairWithSum(numbers, target));

/* -----------------------------------------------------------------------------
    Task: E
    Create a function that takes a number as input and returns the number of digits in that number. 
    123 -> 3
    2 -> 1
    42693 -> 5
*/
console.log("Task: E");

function countDigits(num) {
    return num.toString().length;
}

console.log(countDigits(123));
console.log(countDigits(2));
console.log(countDigits(42693));
