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
