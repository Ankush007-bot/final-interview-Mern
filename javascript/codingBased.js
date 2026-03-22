

//Algorithm , Logic, Coding round



// Basic Level
//1. Reverse a string

// Input: "hello" → Output: "olleh"

//2. Check for a palindrome

// "racecar" → true, "hello" → false

//3. Find the largest number in an array

// [1, 5, 3, 9, 2] → 9

//4. Count the number of vowels in a string

// "hello" → 2

//5. Remove duplicates from an array

// [1, 2, 2, 3, 4, 4] → [1, 2, 3, 4]

//6. Sum all numbers in an array

// [1, 2, 3] → 6

//7. Factorial of a number

// 5! = 120

// ⚙️ Intermediate Level
//8. Fibonacci sequence (n-th term or full list)

// 0, 1, 1, 2, 3, 5, 8, ...

//9. Anagram checker

// "listen" and "silent" → true

//10. Check if two arrays are equal

// [1,2,3] vs [3,2,1] → false (if order matters)

//11. Flatten a nested array

// [1, [2, [3, 4]], 5] → [1, 2, 3, 4, 5]

//12. Find the first non-repeating character in a string

// "aabbcde" → "c"

//13. Check if a number is prime

//14. Sort an array without using sort()

//15. Find missing number in a sequence

//16.Find all pairs in an array that sum to a target

// Input: [1, 2, 3, 4], target = 5 → Output: [[1,4], [2,3]

//17.Find the second largest number in an array

// Input: [10, 5, 20, 8] → Output: 10



//19.Move all zeros to the end of an array (in-place)

// Input: [0,1,0,3,12] → Output: [1,3,12,0,0]

//20.Rotate an array by k steps

// Input: [1,2,3,4,5], k = 2 → Output: [4,5,1,2,3]

//21.Check if two strings are rotations of each other

// "abcd", "cdab" → true

c

//23.Capitalize the first letter of every word

// "hello world" → "Hello World"

//24.Check if string has all unique characters (no repeat)

// "abcdef" → true, "aabc" → false

//25.Check if a number is a power of 2

// 8 → true, 10 → false

//26.Convert decimal to binary (without toString)

// Input: 10 → Output: "1010"

//27.Find the square root without using Math.sqrt


//28.Find the missing number in a sorted, rotated array

// [4,5,6,7,1,2,3] — use binary search to find the smallest element

//29.Check if a subarray with zero sum exists

// Input: [4, 2, -3, 1, 6] → true (subarray [2, -3, 1])

//30.Merge two sorted arrays (without using .sort())

// [1,3,5], [2,4,6] → [1,2,3,4,5,6]

//31.




//reverse string 

// let str = "Hello";

//   str = str.split("");

//   let revStr = [];

//   ["Hello"];

//   for (let i = str.length - 1; i >= 0; i--) {
//     revStr.push(str[i]);
//   }
//   revStr.toString();

//   console.log(revStr, "revStr");

//   console.log(str, "str");





//   Check for a palindrome

  // "racecar" → true, "hello" → false

//   const revStr = (string) => {
//     let str = string;

//     str = str.split("");

//     let revStr = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//       revStr += str[i];
//     }
//     return revStr;
//   };

//   let palindrome = revStr("racecar");

//   if (palindrome === "racecar") {
//     console.log("string is palindrom");
//   } else {
//     console.log("string is not palindrom");
//}


// Find the largest number in an array

let arr = [1, 5, 3, 9, 2, 10];
let lrgNum = 0;

// for(let i=0;i<arr.length;i++){

//   for(let j=i;j<arr.length;i++){
//     if(arr[i]>arr[j]){
//       lrgNum=arr[i]
//     }
//   }
// }

// for (let j = 0; j < arr.length; j++) {
//   if (lrgNum < arr[j]) {
//     lrgNum = arr[j];
//   }
// }

// console.log("lrgNumbr1");
// console.log(lrgNum, "lrgNumbr");


//32. What is linked list
//33. write a program to reverse linked list
//34. Give an algorithm for Binary search

//<-----ANAGRAM----->

function isAnagram(str1, str2) {
  // Step 1: Check length
  if (str1.length !== str2.length) return false;

  // Step 2: Create frequency counters
  const count1 = {};
  const count2 = {};

  // Step 3: Manual lowercase and count for str1
  for (let i = 0; i < str1.length; i++) {
    let ch = str1[i];

    // Convert uppercase to lowercase manually using ASCII
    if (ch >= 'A' && ch <= 'Z') {
      ch = String.fromCharCode(ch.charCodeAt(0) + 32);
    }

    count1[ch] = (count1[ch] || 0) + 1;
  }

  // Step 4: Manual lowercase and count for str2
  for (let i = 0; i < str2.length; i++) {
    let ch = str2[i];

    if (ch >= 'A' && ch <= 'Z') {
      ch = String.fromCharCode(ch.charCodeAt(0) + 32);
    }

    count2[ch] = (count2[ch] || 0) + 1;
  }

  // Step 5: Compare frequency maps
  for (let key in count1) {
    if (count1[key] !== count2[key]) {
      return false;
    }
  }

  return true;
}



//Sort an array without using sort(


const arr=[2,4,3,6,5,6,8,11,7,9]


for(let i=0;i<arr.length;i++){
    
    if(arr[i]>arr[i+1]){
        let a= arr[i]
        arr[i]=arr[i+1]
        arr[i+1]=a
    }
}




//1.Bubble Sort
Compares adjacent elements and swaps them if needed.

Time Complexity: O(n²)


function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++)
    for (let j = 0; j < arr.length - i - 1; j++)
      if (arr[j] > arr[j + 1])
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
  return arr;
}

//2. Selection Sort
//Finds the minimum element and places it at the beginning.


function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++)
      if (arr[j] < arr[minIdx]) minIdx = j;
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

//12. Find the first non-repeating character in a string

// "aabbcde" → "c"
function firstNonRepeatingChar(str) {
  const charCount = {};

  // Count occurrences of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with count 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // If no non-repeating character found
}

const input = "ababbcde";
const result = firstNonRepeatingChar(input);

console.log(`First non-repeating character is: ${result}`);


//check if number is prime

function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

//15. Find missing number in a sequence

function findMissingNumber(arr) {
  const n = arr.length + 1; // one number is missing
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

// Example usage
const numbers = [1, 2, 3, 5];
console.log("Missing number is:", findMissingNumber(numbers));


//SIMPLE SORTING CODE

let arr= [2,5,3,7,6,8]

let sorteddArr=[]

let temp;

for(let i=0;i<arr.length;i++){
   
     if(arr[i]>arr[i+1]){
             temp=arr[i]
             arr[i]=arr[i+1]
             arr[i+1]=temp
             
         }
}

//Check if two arrays are equal

// [1,2,3] vs [3,2,1] → false (if order matters)

let arr1=[1,2,3,5]
let arr2=[3,2,1,4]

let c=[]

const checkArr=(arr1,arr2)=>{
   
    if(arr1.length!=arr2.length) return false
   
    // arr[0]=1
    // arr[2]=1
   
    for(let i=0;i<arr1.length;i++){
       
        for(let j=0;j<arr2.length;j++){
           
            if(arr1[i]===arr2[j]){
                 c.push(arr2[j])
            }
        }
    }
   
    if(arr1.length==c.length){
       
        return 'arrays are equal'
    }
   
    return 'arrays are not equal'
   
}

console.log(checkArr(arr1,arr2))


/////////////////////////////////

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  // Create frequency maps
  const countMap1 = {};
  const countMap2 = {};

  for (let num of arr1) {
    countMap1[num] = (countMap1[num] || 0) + 1;
  }

  for (let num of arr2) {
    countMap2[num] = (countMap2[num] || 0) + 1;
  }

  // Compare frequency maps
  for (let key in countMap1) {
    if (countMap1[key] !== countMap2[key]) {
      return false;
    }
  }

  return true;
}

// Example
console.log(arraysEqual([1, 2, 3], [3, 2, 1])); // true
console.log(arraysEqual([1, 2, 2], [2, 1, 1])); // false


//binary search

//find index of 7

// first find the mid element

let target = 5

let left= 0
let right= arr.length-1

let mid= Math.floor((left+right)/2)

//console.log(mid)

while(left<right){
   
    if(arr[mid]===target){
       
        console.log('target element is :',arr[mid])
        return mid
    }
   
    if(arr[mid]<target){
       //[6,7,8,9,10]
       
       left=mid
         mid=Math.floor((left+right)/2)
    }
   
    if(arr[mid]>target){
       
  ///[2,3,4,5,6]
      right = mid
      mid=Math.floor((left+right)/2)
    }
}





// by chat GPT binary search

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1; // Not found
}


//8. Fibonacci sequence (n-th term or full list)

// 0, 1, 1, 2, 3, 5, 8, ...

let n=0
let m=1 

console.log(n)
 let fib
 
 
 
 for(let i=1;i<=20;i++){
     fib =m+n
     console.log(fib)
     n=m 
     m=fib
 }


function fib(n) {
  if (n < 1) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

function printFibonacci(n) {
  for (let i = 0; i < n; i++) {
    console.log(fib(i));
  }
}

printFibonacci(10);
function fib(n) {
  if (n < 1) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

function printFibonacci(n) {
  for (let i = 0; i < n; i++) {
    console.log(fib(i));
  }
}

printFibonacci(10);


//10. Check if two arrays are equal

// [1,2,3] vs [3,2,1] → false (if order matters)

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

console.log(arraysEqual([1, 2, 3], [1, 2, 3])); // true
console.log(arraysEqual([1, 2, 3], [3, 2, 1])); // false


//11. Flatten a nested array

// [1, [2, [3, 4]], 5] → [1, 2, 3, 4, 5]

const arr=[1, [2, [3, 4]], 5]
const result=[]






const flatenArr=(arry)=>{
    
  for(let i=0;i<arry.length;i++){
      
      if(Array.isArray(arry[i])){
          
          flatenArr(arry[i])
      }else{
          result.push(arry[i])
      }
  }
}
flatenArr(arr)
console.log(result,'result')

//12. Find the first non-repeating character in a string

// "aabbcde" → "c"

function firstNonRepeatingChar(str) {
  const freq = {};

  // First pass: count character frequency
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    freq[ch] = (freq[ch] || 0) + 1;
  }

  // Second pass: find first character with frequency 1
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (freq[ch] === 1) {
      return ch;
    }
  }

  return null; // or return -1 if no non-repeating char
}


// chech number is prime
function isPrime(n) {
  // Step 1: Agar number 1 ya usse chhota hai, prime nahi hai
  if (n <= 1) return false;

  // Step 2: 2 prime hai (special case)
  if (n === 2) return true;

  // Step 3: Agar number even hai (2 ke alawa), to prime nahi ho sakta
  if (n % 2 === 0) return false;

  // Step 4: Ab check karo ki koi number 3 se lekar √n tak divide karta hai ya nahi
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) {
      return false; // agar divide ho gaya to prime nahi hai
    }
  }

  return true; // agar koi bhi divide nahi karta, to prime hai
}


//15. find missing number 
function findMissingNumber(arr) {
  const n = arr.length + 1; // Since one number is missing
  let expectedSum = (n * (n + 1)) / 2;
  
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  return expectedSum - actualSum;
}




//rotate array k times

function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n; // handle if k > n

  reverse(arr, 0, n - 1);      // Step 1: reverse entire array
  reverse(arr, 0, k - 1);      // Step 2: reverse first k elements
  reverse(arr, k, n - 1);      // Step 3: reverse remaining elements

  return arr;
}

// helper function to reverse array in place
function reverse(arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

// Example:
let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

console.log(rotateArray(arr, k)); 
// Output: [5, 6, 7, 1, 2, 3, 4]





//Return the length of the longest substring with all unique characters  "abcabcbb"

let str="abcabcbb"

const findSubs=(str)=>{
    sml=2
    lrg=str.length-1
     let subStr
     const strObj={}
    for( let i=2;i<str.length;i++){
       subStr =substring(str,i)

       let s=""
       
        for(let j=0;j<subStr.length;j++){
            let isRepeat=false
              for(let k=0;k<s.length;k++){
                     if(subStr[j]==s[k]){
                        isRepeat=true
                           break;
                     }
              }
              if(!isRepeat){
                    s +=subStr[j]
              }
               
        }

        strObj[s.length]=s
        
    }
     

    let lengthOflongestStr = Object.keys(strObj).pop();
     
    return lengthOflongestStr
}

const substring=(str,length)=>{
    let substr=""
      for(let i=0;i<length;i++){
            substr+=str[i]
      }
      return substr
}
       
console.log(findSubs(str))




///////////////////////////
function longestUniqueSubstring(s) {
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    let str = "";
    for (let j = i; j < s.length; j++) {
      let char = s[j];
      // check if char already present in str
      let found = false;
      for (let k = 0; k < str.length; k++) {
        if (str[k] === char) {
          found = true;
          break;
        }
      }
      if (found) break; // repeat mila toh ruk jao
      str += char; // unique hai toh add karo
      if (str.length > maxLen) maxLen = str.length;
    }
  }

  return maxLen;
}

console.log(longestUniqueSubstring("abcabcbb")); // Output: 3

/////////////////////////
function longestSubstring(s) {
  let left = 0;
  let maxLen = 0;
  let set = new Set();

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log(longestSubstring("abcabcbb")); // 3 ("abc")
console.log(longestSubstring("bbbbb"));    // 1 ("b")
console.log(longestSubstring("pwwkew"));   // 3 ("wke")



////Binary search Algorithm


const binarySearch=(arr,target)=>{
    let start=0
    let end= arr.length-1
  
    while(start<=end){
  let mid= Math.floor((start+end)/2)
         if(arr[mid]==target){
                return  mid
        }

    //[1,2,3,4,5,6,7,8]
      if(arr[mid]>target){
        end=mid-1
      }
      if(arr[mid]<target){
            start=mid+1
      }
      
        
    }

  
}

console.log(binarySearch(array,3))



//30.Merge two sorted arrays (without using .sort())

// [1,3,5], [2,4,6] → [1,2,3,4,5,6]

function mergeSorted(arr1, arr2) {
  let i = 0, j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements
  while (i < arr1.length) result.push(arr1[i++]);
  while (j < arr2.length) result.push(arr2[j++]);

  return result;
}

console.log(mergeSorted([1, 3, 5], [2, 4, 6]));
// [1, 2, 3, 4, 5, 6]



//22.Find the longest word in a sentence

// "I am learning JavaScript" → "JavaScript"

let str="I am learningggggg JavaScript"
  
 let arr=str.split(" ")
 
 
 let longest=""
 for(let i=0;i<arr.length;i++){
     
     if(arr[i].length>longest.length){
         longest=arr[i]
     }
 }
 
 console.log(longest)