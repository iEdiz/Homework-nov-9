// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

const sum = (a: number, b: number): number => a + b;

console.log(sum(1, 2));
console.log(sum(1, 10));
console.log(sum(99, 1));

// Write a function that takes a value as argument
// Return the type of the value

const functionValue = (a: any): any => typeof a;

console.log(functionValue(1));
console.log(functionValue(false));
console.log(functionValue(null));
console.log(functionValue('string'));
console.log(functionValue(['array']));

// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

const typeValue = (a: any, b: any) => {
  if (a === b && typeof a === typeof b) {
    return true;
  }
  return false;
};

console.log(typeValue(2, 3));
console.log(typeValue(3, 3));
console.log(typeValue(1, '1'));
console.log(typeValue('10', '10'));

// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'

const nthChar = (a: string, n: number) => a.charAt(n - 1);

console.log(nthChar('abcd', 1));
console.log(nthChar('zyxbwpl', 5));
console.log(nthChar('gfedcba', 3));

// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

const removeChar = (a: string) => a.substring(3);

console.log(removeChar('abcdefg'));
console.log(removeChar('1234'));
console.log(removeChar('fgedcba'));

// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

const removeLast = (a: string) => a.substring(a.length - 3);

console.log(removeLast('abcdefg'));
console.log(removeLast('1234'));
console.log(removeLast('fgedcba'));

// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

const firstThree = (a: string) => a.substring(0, 3);

console.log(firstThree('abcdefg'));
console.log(firstThree('1234'));
console.log(firstThree('fgedcba'));

// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

const firstHalf = (a: string) => {
  if (a.length % 2 === 0) {
    return a.slice(0, a.length / 2);
  }
  return a;
};

console.log(firstHalf('abcdefgh'));
console.log(firstHalf('1234'));
console.log(firstHalf('gedcba'));

// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

const lastThree = (a: string) => a.slice(0, -3);

console.log(lastThree('abcdefg'));
console.log(lastThree('1234'));
console.log(lastThree('fgedcba'));

// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

const percentNumbers = (a: number, b: number) => (b / 100) * a;

console.log(percentNumbers(100, 50));
console.log(percentNumbers(10, 1));
console.log(percentNumbers(500, 25));

// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order

const sixNumbers = (a: number, b: number, c: number, d: number, e: number, f: number) =>
(((a + b) - c) * d / e) ** f;

console.log(sixNumbers(6, 5, 4, 3, 2, 1));
console.log(sixNumbers(6, 2, 1, 4, 2, 3));
console.log(sixNumbers(2, 3, 6, 4, 2, 3));

// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

const evenNumber = (a: number) => {
  if (a % 2 === 0) {
    return true;
  }
  return false;
};

console.log(evenNumber(10));
console.log(evenNumber(-4));
console.log(evenNumber(5));
console.log(evenNumber(-111));

// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

const occurance = (a: string, b: string) => b.split(a).length - 1;

console.log(occurance('m', 'how many times does the character occur in this sentence?'));
console.log(occurance('h', 'how many times does the character occur in this sentence?'));
console.log(occurance('?', 'how many times does the character occur in this sentence?'));
console.log(occurance('z', 'how many times does the character occur in this sentence?'));

// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

const wholeNumber = (a: number) => {
  if (a % 1 === 0) {
    return true;
  }
  return false;
};

console.log(wholeNumber(4));
console.log(wholeNumber(1.123));
console.log(wholeNumber(1048));
console.log(wholeNumber(10.48));

// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

const isSmaller = (a: number, b: number) => {
  if (a < b) {
    return a / b;
  }
  return a * b;
};

console.log(isSmaller(10, 100));
console.log(isSmaller(90, 45));
console.log(isSmaller(8, 20));
console.log(isSmaller(2, 0.5));

// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

const containsString = (a: string, b: string) => {
  if (a.includes(b)) {
    return b + a;
  }
  return a + b;
};

console.log(containsString('cheese', 'cake'));
console.log(containsString('lips', 's'));
console.log(containsString('Java', 'script'));
console.log(containsString(' think, therefore I am', 'I'));

// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

const roundNumber = (a: number) => Math.round(a * 100) / 100;

console.log(roundNumber(2.12397));
console.log(roundNumber(3.136));
console.log(roundNumber(1.12397));
console.log(roundNumber(26.1379));

// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting

const splitNumber = (a: number) => {
  const b = a.toString();
  return b.split('');
};

console.log(splitNumber(10));
console.log(splitNumber(91));
console.log(splitNumber(193278));

// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.

const replaceString = (a: string, b: string) => {
  const splitString = b.split('');
  const reverseString = splitString.reverse();
  const joinString = reverseString.join('');
  const sumString = a + joinString;
  return sumString.charAt(0).toLocaleUpperCase() + sumString.slice(1).replace('%', '');
};

console.log(replaceString('java', 'tpi%rcs'));
console.log(replaceString('c%ountry', 'edis'));
console.log(replaceString('down', 'nw%ot'));

// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

const primeNumbers = (a: number) => {
  if (a <= 1) return false;
  if (a < 3) return true;
  if (a % 2 === 0 || a % 3 === 0) return false;
  for (let i = 5; i * i <= a; i += 6) {
    if (a % i === 0 || a % (i + 2) === 0) return false;
  }
  return true;
};

const findNextPrime = (num: number) => {
  let nextNumber = num;
  while (true) {
    if (primeNumbers(nextNumber)) {
      return nextNumber;
    }
    nextNumber++;
  }
};

const findAnyNumber = (num: number) => {
  if (primeNumbers(num)) {
    return num;
  }
  return findNextPrime(num);
};

console.log(findAnyNumber(38));
console.log(findAnyNumber(7));
console.log(findAnyNumber(127));
console.log(findAnyNumber(2000));

// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

const isDivisable = (x: number, y: number) => {
  while (x % y !== 0) {
    x++;
  }
  return x;
};

console.log(isDivisable(1, 23));
console.log(isDivisable(23, 23));
console.log(isDivisable(7, 3));
console.log(isDivisable(-5, 7));

// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

const twoString = (a: string, b: string) => a.replace(/(?=(...)+$)/g, b);

console.log(twoString('1234567', '.'));
console.log(twoString('abcde', '$'));
console.log(twoString('zxyzxyzxyzxyzxyz', 'w'));

// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

const nextLetter = (a: string) => {
  let result = '';
  for (let i = 0; i < a.length; i++) {
    let char = a[i];
    if (char >= 'a' && char <= 'z') {
      char = String.fromCharCode(((char.charCodeAt(0) - 97 + 1) % 26) + 97);
    }
    result += char;
  }
  return result;
};

console.log(nextLetter('bnchmf'));
console.log(nextLetter('bgddrd'));
console.log(nextLetter('sdrshmf'));

// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

const arrayReturn = (a: number[], b: number) => a[b - 1];

console.log(arrayReturn([1, 2, 3, 4, 5], 3));
console.log(arrayReturn([10, 9, 8, 7, 6], 5));
console.log(arrayReturn([7, 2, 1, 6, 3], 1));

// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

const removeArray = (a: number[]) => a.slice(3);

console.log(removeArray([1, 2, 3, 4]));
console.log(removeArray([5, 4, 3, 2, 1, 0]));
console.log(removeArray([99, 1, 1]));

// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

const lastThreeArray = (a: number[]) => {
  const secondArray = a.slice(-3);
  return secondArray;
};

console.log(lastThreeArray([1, 2, 3, 4]));
console.log(lastThreeArray([5, 4, 3, 2, 1, 0]));
console.log(lastThreeArray([99, 1, 1]));

// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

const firstThreeArray = (a: number[]) => {
  const secondArray = a.slice(0, 3);
  return secondArray;
};

console.log(firstThreeArray([1, 2, 3, 4]));
console.log(firstThreeArray([5, 4, 3, 2, 1, 0]));
console.log(firstThreeArray([99, 1, 1]));

// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

const lastElements = (a: number[], n: number) => {
  const secondArray = a.slice(-n);
  return secondArray;
};

console.log(lastElements([1, 2, 3, 4, 5], 2));
console.log(lastElements([1, 2, 3], 6));
console.log(lastElements([1, 2, 3, 4, 5, 6, 7, 8], 3));

// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

const clearArray = (a: any, b: any) => {
  const unfilteredArray = a.filter((number: any) => number !== b);
  return unfilteredArray;
};

console.log(clearArray([1, 2, 3], 2));
console.log(clearArray([1, 2, '2'], '2'));
console.log(clearArray([false, '2', 1], false));
console.log(clearArray([1, 2, '2', 1], 1));

// Write a function that takes an array (a) as argument
// Return the number of elements in a

const numberOfElementsArray = (a: number[]) => a.length;

console.log(numberOfElementsArray([1, 2, 2, 4]));
console.log(numberOfElementsArray([9, 9, 9]));
console.log(numberOfElementsArray([4, 3, 2, 1, 0]));

// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

const negativeValues = (a: number[]) => {
  const negativesCount = a.filter((value) => value < 0);
  return negativesCount.length;
};

console.log(negativeValues([1, -2, 2, -4]));
console.log(negativeValues([0, 9, 1]));
console.log(negativeValues([4, -3, 2, 1, 0]));

// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

const sortArray = (a: number[]) => a.sort().reverse();

console.log(sortArray([1, 3, 2]));
console.log(sortArray([4, 2, 3, 1]));

// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result

const stringSortArray = (a: string[]) => a.sort();

console.log(stringSortArray(['b', 'c', 'd', 'a']));
console.log(stringSortArray(['z', 'c', 'd', 'a', 'y', 'a', 'w']));

// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

const averageNumbersArray = (a: number[]) => a.reduce((a, b) => a + b, 0) / a.length;

console.log(averageNumbersArray([10, 100, 40]));
console.log(averageNumbersArray([10, 100, 1000]));
console.log(averageNumbersArray([-50, 0, 50, 200]));

// Write a function that takes an array of strings as argument
// Return the longest string

const longestString = (a: string[]) => {
  let longest = '';
  for (const str of a) {
    if (str.length > longest.length) {
      longest = str;
    }
  }
  return longest;
};

console.log(longestString(['help', 'me']));
console.log(longestString(['I', 'need', 'candy']));

// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

const equalElements = (a: any[]) => {
  const referenceElements = a[0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== referenceElements) {
      return false;
    }
  }
  return true;
};

console.log(equalElements([true, true, true, true]));
console.log(equalElements(['test', 'test', 'test']));
console.log(equalElements([1, 1, 1, 2]));
console.log(equalElements(['10', 10, 10, 10]));

// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

const multipleArrays = (...arrays: any[]) => [].concat(...arrays);

console.log(multipleArrays([1, 2, 3], [4, 5, 6]));
console.log(multipleArrays(['a', 'b', 'c'], [4, 5, 6]));
console.log(multipleArrays([true, true], [1, 2], ['a', 'b']));

// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

const arrayOfObjects = (arr: any[]) => arr.sort((a, b) => a.a - b.b);

console.log(arrayOfObjects([{ a: 1, b: 2 }, { a: 5, b: 4 }]));
console.log(arrayOfObjects([{ a: 2, b: 10 }, { a: 5, b: 4 }]));
console.log(arrayOfObjects([{ a: 1, b: 7 }, { a: 2, b: 1 }]));

// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

const removeDublicates = (a: number[], b: number[]) => {
  const mergedArrays = a.concat(b);
  const sortedArrays = mergedArrays.sort((c, d) => c - d);
  const result = [];
  for (let i = 0; i < sortedArrays.length; i++) {
    if (sortedArrays[i] !== sortedArrays[i - 1]) {
      result.push(sortedArrays[i]);
    }
  }
  return result;
};

console.log(removeDublicates([1, 2, 3], [3, 4, 5]));
console.log(removeDublicates([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));

// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

const sumElements = (a: number[], b: number) => {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b) {
      result += a[i];
    }
  }
  return result;
};

console.log(sumElements([1, 2, 3, 4, 5, 6, 7], 2));
console.log(sumElements([-10, -11, -3, 1, -4], -3));
console.log(sumElements([78, 99, 100, 101, 401], 99));

// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

const minMax = (min: number, max: number) => {
  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
};

console.log(minMax(2, 10));
console.log(minMax(1, 3));
console.log(minMax(-5, 5));
console.log(minMax(2, 7));

// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

const fristLetterGroup = (arr: string[]) => {
  const firstObejct: Record<string, string[]> = {};
  for (let i = 0; i < arr.length; i++) {
    const firstLetter = arr[i][0];
    if (!firstObejct[firstLetter]) {
      firstObejct[firstLetter] = [];
    }
    firstObejct[firstLetter].push(arr[i]);
  }
  return firstObejct;
};

console.log(fristLetterGroup(['Alf', 'Alice', 'Ben']));
console.log(fristLetterGroup(['Ant', 'Bear', 'Bird']));
console.log(fristLetterGroup(['Berlin', 'Paris', 'Prague']));

// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

const elementsArray = (arr: any[], n: number) => {
  const result = [];
  if (n >= 6) {
    result[0] = n;
  } else {
    result[0] = 0;
  }
  return result.concat(arr);
};

console.log(elementsArray([1, 2, 3], 6));
console.log(elementsArray(['a', 'b'], 2));
console.log(elementsArray([null, false], 11));

// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

const nthArray = (a: number[], n: number) => {
  const result = [];
  for (let i = -1; i < a.length; i += n) {
    result.push(a[i]);
  }
  result.shift();
  return result;
};

console.log(nthArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(nthArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5));
console.log(nthArray([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2));

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

const objectCountry = (obj: {country: string, continent: string}) => obj.country;

console.log(objectCountry({ continent: 'Asia', country: 'Japan' }));
console.log(objectCountry({ country: 'Sweden', continent: 'Europe' }));

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor

const newObject = (obj: Record<string, any>) => obj['prop-2'];

console.log(newObject({ one: 1, 'prop-2': 2 }));
console.log(newObject({ 'prop-2': 'two', prop: 'test' }));

// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

const newObjectAB = (obj: { [prop1: string]: any }, str: string) => {
  if (str in obj) {
    return obj[str];
  }
  return undefined;
};

console.log(newObjectAB({ continent: 'Asia', country: 'Japan' }, 'continent'));
console.log(newObjectAB({ country: 'Sweden', continent: 'Europe' }, 'country'));

// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

const objectAndString = (obj: Record<string, any>, str: string) => {
  if (str in obj) {
    return true;
  }
  return false;
};

console.log(objectAndString({ a: 1, b: 2, c: 3 }, 'b'));
console.log(objectAndString({ x: 'a', y: 'b', z: 'c' }, 'a'));
console.log(objectAndString({ x: 'a', y: 'b', z: 'c' }, 'z'));

// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object

const keyObject = (a: string) => {
  const myObject = {
    key: a,
  };
  return myObject;
};

console.log(keyObject('a'));
console.log(keyObject('z'));
console.log(keyObject('b'));

// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

const twoStringObject = (a: string, b:string) => {
  const myObject = {
    [a]: b,
  };
  return myObject;
};

console.log(twoStringObject('a', 'b'));
console.log(twoStringObject('z', 'x'));
console.log(twoStringObject('b', 'w'));

// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

const arrayObjects = (a: any[], b: any[]) => {
  const myObject: Record<string, any> = {};
  for (let i = 0; i < a.length; i++) {
    myObject[(a[i])] = b[i];
  }
  return myObject;
};

console.log(arrayObjects(['a', 'b', 'c'], [1, 2, 3]));
console.log(arrayObjects(['w', 'x', 'y', 'z'], [10, 9, 5, 2]));
console.log(arrayObjects([1, 'b'], ['a', 2]));

// Write a function that takes an object (a) as argument
// Return an array with all object keys

const newKeyObject = (obj: Record<string, any>) => Object.keys(obj);

console.log(newKeyObject({ a: 1, b: 2, c: 3 }));
console.log(newKeyObject({
  j: 9, i: 2, x: 3, z: 4,
}));
console.log(newKeyObject({ w: 15, x: 22, y: 13 }));

// Write a function that takes an object (a) as argument
// Return the sum of all object values

const sumObjectValues = (obj: Record<string, any>) => {
  const values = Object.values(obj);
  const summedElements = values.reduce((acc, currentValue) => acc + currentValue, 0);
  return summedElements;
};

console.log(sumObjectValues({ a: 1, b: 2, c: 3 }));
console.log(sumObjectValues({
  j: 9, i: 2, x: 3, z: 4,
}));
console.log(sumObjectValues({ w: 15, x: 22, y: 13 }));

// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

const objectNoB = (obj: Record<string, any>) => {
  delete obj.b;
  return obj;
};

console.log(objectNoB({ a: 1, b: 7, c: 3 }));
console.log(objectNoB({ b: 0, a: 7, d: 8 }));
console.log(objectNoB({
  e: 6, f: 4, b: 5, a: 3,
}));

// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

const twoObjects = (obj: Record<string, any>, obj2: Record<string, any>) => {
  obj2.d = obj2.b;
  delete obj2.b;
  const objectCopy = Object.assign(obj, obj2);
  return objectCopy;
};

console.log(twoObjects({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
console.log(twoObjects({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));

// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

const multiplyObject = (a: Record<string, any>, b: number) => {
  const randomObject: Record<string, any> = {};
  for (const key in a) {
    if (a.hasOwnProperty(key)) {
      randomObject[key] = a[key] * b;
    }
  }
  return randomObject;
};

console.log(multiplyObject({ a: 1, b: 2, c: 3 }, 3));
console.log(multiplyObject({
  j: 9, i: 2, x: 3, z: 4,
}, 10));
console.log(multiplyObject({ w: 15, x: 22, y: 13 }, 6));

// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

const swappedKeyValues = (obj: Record<string, any>) => {
  const swappedValues = Object.entries(obj).map(([key, value]) => [value, key]);
  return Object.fromEntries(swappedValues);
};

console.log(swappedKeyValues({
  z: 'a', y: 'b', x: 'c', w: 'd',
}));
console.log(swappedKeyValues({
  2: 'a', 4: 'b', 6: 'c', 8: 'd',
}));
console.log(swappedKeyValues({ a: 1, z: 24 }));

// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

const emptyStringsObject = (obj: Record<string, any>) => {
  for (const key in obj) {
    if (typeof obj[key] === 'string' && obj[key].trim() === '') {
      obj[key] = null;
    }
  }
  return obj;
};

console.log(emptyStringsObject({ a: 'a', b: 'b', c: '' }));
console.log(emptyStringsObject({
  a: '', b: 'b', c: ' ', d: 'd',
}));
console.log(emptyStringsObject({
  a: 'a', b: 'b ', c: ' ', d: '',
}));

// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

const personalObject = (obj: Record<string, any>) => {
  const myObject: Record<string, any> = {};

  if (obj.hasOwnProperty('fn')) {
    myObject.fn = obj.fn;
  }
  if (obj.hasOwnProperty('ln')) {
    myObject.ln = obj.ln;
  }
  if (obj.hasOwnProperty('size')) {
    myObject.size = `${obj.size.toString()}cm`;
  }
  if (obj.hasOwnProperty('weight')) {
    myObject.weight = `${obj.weight.toString()}cm`;
  }
  return myObject;
};

console.log(personalObject({
  fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67,
}));
console.log(personalObject({
  fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102,
}));
console.log(personalObject({
  fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71,
}));
console.log(personalObject({
  fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de',
}));

// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array

const arrayStringAndObjects = (obj: Record<string, any>, str: string) => {
  for (let i = 0; i < obj.length; i++) {
    obj[i].continent = str;
  }
  return obj;
};

console.log(arrayStringAndObjects([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'));
console.log(arrayStringAndObjects([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe'));

// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

const arrayToObject = (arr: number []) => {
  const myObject: Record<string, any> = {};

  for (let i = 0; i < arr.length; i++) {
    if (myObject[arr[i]] === undefined) {
      myObject[arr[i]] = 1;
    } else {
      myObject[arr[i]]++;
    }
  }
  return myObject;
};

console.log(arrayToObject([1, 2, 2, 3]));
console.log(arrayToObject([9, 9, 9, 99]));
console.log(arrayToObject([4, 3, 2, 1]));

// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise

const dateInstances = (date1: Date, date2: Date): boolean => {
  if (date1.getTime() === date2.getTime()) {
    return true;
  }
  return false;
};

console.log(dateInstances(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));
console.log(dateInstances(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));
console.log(dateInstances(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));

// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

const daysBetween = (date1: Date, date2: Date): number => {
  const time = date1.getTime() - date2.getTime();
  const days = time / (1000 * 3600 * 24);
  return Math.abs(days);
};

console.log(daysBetween(new Date('2020-06-11'), new Date('2020-06-01')));
console.log(daysBetween(new Date('2000-01-01'), new Date('2020-06-01')));

// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

const sameDay = (date1: Date, date2: Date): boolean => {
  if (date1.getDay() === date2.getDay()) {
    return true;
  }
  return false;
};

console.log(sameDay(new Date('2000/01/01'), new Date('2000/01/01')));
console.log(sameDay(new Date('2000/01/01'), new Date('2000/01/02')));
console.log(sameDay(new Date('2001/01/01'), new Date('2000/01/01')));
console.log(sameDay(new Date('2000/11/01'), new Date('2000/01/01')));

// Write a function that takes two number arrays as parameters
// and return an array which contains elements from both
// arrays

const spreadArray = (...array: any[]) => [].concat(...array);

console.log(spreadArray([1, 2], [3, 4]));
console.log(spreadArray([1, 2], [3, 4, 5, 6]));

// Write a function that takes an array and a string as parameters
// and return an array which contains all elements from the given array
// and the given string as the last element

const arrayAndString = (arr: any[], str: string) => [...arr, str];

console.log(arrayAndString(['Apple', 'Orange', 'Banana'], 'Kiwi'));

// Write a function that takes an array and a string as parameters
// and return an array which contains all elements from the given array
// and the given string as the first element

const stringAndArray = (arr: any[], str: string) => [str, ...arr];

console.log(stringAndArray(['Apple', 'Orange', 'Banana'], 'Kiwi'));

// Write a function that takes two objects as parameters
// and return an object which contains properties from both
// objects

const mergeObjects = (a: Record<string, number>, b: Record<string, number>):
{[x: string]: number} => {
  const myObject = { ...a, ...b };
  return myObject;
};

console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));
console.log(mergeObjects({ a: 1, b: 2 }, {
  c: 3, d: 4, e: 5, f: 6,
}));

// Write a function that takes an object and a string as parameters
// and return an object which contains properties from the given object
// and a new property favoriteMovie with the value equal to the given string

const newProperty = (obj: Record<string, any>, str: string): {[x: string]: number} => {
  const myObject = { ...obj };
  myObject.favoriteMovie = str;
  return myObject;
};

console.log(newProperty({ eyeColor: 'green', age: 10 }, 'Garfield'));
console.log(newProperty({ eyeColor: 'blue', age: 15 }, 'Twilight'));
