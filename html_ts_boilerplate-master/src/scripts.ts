import { testResultsProcessor } from '../jest.config';

const sum = (a: number, b: number): number => a + b;

console.log(sum(1, 2));
console.log(sum(1, 10));
console.log(sum(99, 1));

const functionValue = (a: any) => typeof a;

console.log(functionValue(1));
console.log(functionValue(false));
console.log(functionValue(null));
console.log(functionValue('string'));
console.log(functionValue(['array']));

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

const nthChar = (a: string, n: number) => a.charAt(n - 1);

console.log(nthChar('abcd', 1));
console.log(nthChar('zyxbwpl', 5));
console.log(nthChar('gfedcba', 3));

const removeChar = (a: string) => a.substring(3);

console.log(removeChar('abcdefg'));
console.log(removeChar('1234'));
console.log(removeChar('fgedcba'));

const removeLast = (a: string) => a.substring(a.length - 3);

console.log(removeLast('abcdefg'));
console.log(removeLast('1234'));
console.log(removeLast('fgedcba'));

const firstThree = (a: string) => a.substring(0, 3);

console.log(firstThree('abcdefg'));
console.log(firstThree('1234'));
console.log(firstThree('fgedcba'));

const firstHalf = (a: string) => {
  if (a.length % 2 === 0) {
    return a.slice(0, a.length / 2);
  }
  return a;
};

console.log(firstHalf('abcdefgh'));
console.log(firstHalf('1234'));
console.log(firstHalf('gedcba'));

const lastThree = (a: string) => a.slice(0, -3);

console.log(lastThree('abcdefg'));
console.log(lastThree('1234'));
console.log(lastThree('fgedcba'));

const percentNumbers = (a: number, b: number) => (b / 100) * a;

console.log(percentNumbers(100, 50));
console.log(percentNumbers(10, 1));
console.log(percentNumbers(500, 25));

const sixNumbers = (a: number, b: number, c: number, d: number, e: number, f: number) => (((a + b) - c) * d / e) ** f;

console.log(sixNumbers(6, 5, 4, 3, 2, 1));
console.log(sixNumbers(6, 2, 1, 4, 2, 3));
console.log(sixNumbers(2, 3, 6, 4, 2, 3));

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

const occurance = (a: string, b: string) => b.split(a).length - 1;

console.log(occurance('m', 'how many times does the character occur in this sentence?'));
console.log(occurance('h', 'how many times does the character occur in this sentence?'));
console.log(occurance('?', 'how many times does the character occur in this sentence?'));
console.log(occurance('z', 'how many times does the character occur in this sentence?'));

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

const roundNumber = (a: number) => Math.round(a * 100) / 100;

console.log(roundNumber(2.12397));
console.log(roundNumber(3.136));
console.log(roundNumber(1.12397));
console.log(roundNumber(26.1379));

const splitNumber = (a: number) => {
  const b = a.toString();
  return b.split('');
};

console.log(splitNumber(10));
console.log(splitNumber(91));
console.log(splitNumber(193278));

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

const twoString = (a: string, b: string) => a.replace(/(?=(...)+$)/g, b);

console.log(twoString('1234567', '.'));
console.log(twoString('abcde', '$'));
console.log(twoString('zxyzxyzxyzxyzxyz', 'w'));

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

const arrayReturn = (a: number[], b: number) => a[b - 1];

console.log(arrayReturn([1, 2, 3, 4, 5], 3));
console.log(arrayReturn([10, 9, 8, 7, 6], 5));
console.log(arrayReturn([7, 2, 1, 6, 3], 1));

const removeArray = (a: number[]) => a.slice(3);

console.log(removeArray([1, 2, 3, 4]));
console.log(removeArray([5, 4, 3, 2, 1, 0]));
console.log(removeArray([99, 1, 1]));

const lastThreeArray = (a: number[]) => {
  const secondArray = a.slice(-3);
  return secondArray;
};

console.log(lastThreeArray([1, 2, 3, 4]));
console.log(lastThreeArray([5, 4, 3, 2, 1, 0]));
console.log(lastThreeArray([99, 1, 1]));

const firstThreeArray = (a: number[]) => {
  const secondArray = a.slice(0, 3);
  return secondArray;
};

console.log(firstThreeArray([1, 2, 3, 4]));
console.log(firstThreeArray([5, 4, 3, 2, 1, 0]));
console.log(firstThreeArray([99, 1, 1]));

const lastElements = (a: number[], n: number) => {
  const secondArray = a.slice(-n);
  return secondArray;
};

console.log(lastElements([1, 2, 3, 4, 5], 2));
console.log(lastElements([1, 2, 3], 6));
console.log(lastElements([1, 2, 3, 4, 5, 6, 7, 8], 3));

const clearArray = (a: any, b: any) => {
  const unfilteredArray = a.filter((number: any) => number !== b);
  return unfilteredArray;
};

console.log(clearArray([1, 2, 3], 2));
console.log(clearArray([1, 2, '2'], '2'));
console.log(clearArray([false, '2', 1], false));
console.log(clearArray([1, 2, '2', 1], 1));

const numberOfElementsArray = (a: number[]) => a.length;

console.log(numberOfElementsArray([1, 2, 2, 4]));
console.log(numberOfElementsArray([9, 9, 9]));
console.log(numberOfElementsArray([4, 3, 2, 1, 0]));

const negativeValues = (a: number[]) => {
  const negativesCount = a.filter((value) => value < 0);
  return negativesCount.length;
};

console.log(negativeValues([1, -2, 2, -4]));
console.log(negativeValues([0, 9, 1]));
console.log(negativeValues([4, -3, 2, 1, 0]));

const sortArray = (a: number[]) => a.sort().reverse();

console.log(sortArray([1, 3, 2]));
console.log(sortArray([4, 2, 3, 1]));

const stringSortArray = (a: string[]) => a.sort();

console.log(stringSortArray(['b', 'c', 'd', 'a']));
console.log(stringSortArray(['z', 'c', 'd', 'a', 'y', 'a', 'w']));

const averageNumbersArray = (a: number[]) => a.reduce((a, b) => a + b, 0) / a.length;

console.log(averageNumbersArray([10, 100, 40]));
console.log(averageNumbersArray([10, 100, 1000]));
console.log(averageNumbersArray([-50, 0, 50, 200]));

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

const multipleArrays = (...arrays: any[]) => [].concat(...arrays);

console.log(multipleArrays([1, 2, 3], [4, 5, 6]));
console.log(multipleArrays(['a', 'b', 'c'], [4, 5, 6]));
console.log(multipleArrays([true, true], [1, 2], ['a', 'b']));
