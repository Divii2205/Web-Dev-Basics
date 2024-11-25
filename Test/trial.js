// 1. reverse an array
// function reverseArray(arr){
//     // let newArr = [];
//     // for (let i = arr.length-1; i>=0; i--) newArr.push(arr[i]);
//     // return newArr;
//     return arr.reverse()
// }
// const arr = [1, 2, 3, 4, 5, 6]
// console.log(reverseArray(arr))

// 2. remove duplicates
// function removeDuplicate(arr){
//     let newArr = [];
//     for (let i = 0; i<arr.length; i++){
//         if (newArr.indexOf(arr[i]) === -1) newArr.push(arr[i]);
//     }
//     return newArr;
// }
// const arr = [1, 2, 2, 4, 4, 3]
// console.log(removeDuplicate(arr))

// 3. findMaximum
// function findMax(arr){
//     let max = arr[0]
//     for (let i = 1; i<arr.length; i++) if (arr[i]>max) max = arr[i]
//     return max;
// }
// const arr = [1, 2, 2, 4, 4, 3]
// console.log(findMax(arr))

// 4. sum of elements
// function sumArray(arr, el){
//     arr = arr + el;
//     return arr;
// }
// const arr = [1, 2, 2, 4, 4, 3]
// console.log(arr.reduce(sumArray))

// // 5. flatten nested arrays
// function flattenArray(arr){
//     // let newArr = []
//     // for (let i = 0; i<arr.length; i++){
//     //     if (Array.isArray(arr[i])) newArr = newArr.concat(flattenArray(arr[i]));
//     //     else newArr.push(arr[i])
//     // } 
//     // return newArr
//     return arr.flat(Infinity)
// }
// const arr = [1, [2, 2], 4, [4, [3]]]
// console.log(flattenArray(arr))

// 6. merge two objects
// const obj1 = {name:'divi', age:18, female: true}
// const obj2 = {name:'dishaa', age:13, male: false}
// console.log(Object.assign({}, obj1, obj2))
// console.log(obj1)
// console.log(obj2)

// 6. use function to merge two objects
// function mergeObjects(obj1, obj2){
//     let ans = {}
//     for (let i in obj1)
//         ans[i] = obj1[i]
//     for (let i in obj2)
//         ans[i] = obj2[i]
//     return ans
// }
// const obj1 = {name:'divi', age:18, female: true}
// const obj2 = {name2:'dishaa', age2:13, male: false}
// console.log(mergeObjects(obj1, obj2))

// 7. count the no of properties
// function countProperties(obj){
//     let count = 0;
//     for (let i in obj) {
//         (obj.hasOwnProperty(i)) 
//         count++
//     }
//     return count
// }
// const obj = {name:'divi', age:18, female: true, object:{name: 'hemang', age:'18'}}
// console.log(countProperties(obj))

// 8. Deep Clone
// function deepClone(obj){
//     let cloned = {}
//     for (let key in obj) cloned[key] = obj[key]
//     // if(cloned !== obj) console.log(1)
//     return cloned
// }
// const obj = {name:'divi', age:18, female: true}
// console.log(deepClone(obj))

// 9. Filter By Keys
// let filterByKeys = (obj, keys) => {
//     let ans = {};
//     for (let i = 0; i<keys.length; i++){
//         if (obj.hasOwnProperty(keys[i])){
//             ans[keys[i]] = obj[keys[i]];
//         }
//     }
//     return ans;
// }
// console.log(filterByKeys({a: 1, b: 2, c: 3}, ['a', 'c']));

// 10. Swap keys and values
// function swap(obj){
//     let swapped = {}
//     for (let i in obj){
//         swapped[obj[i]] = i;
//     }
//     return swapped;
// }
// console.log(swap({a: 1, b: 2}));

// 11. Reverse String
// function reverseString(str){
//     let strNew = "";
//     for (let i = str.length-1; i>=0; i--) strNew += str[i];
//     return strNew;
// }
// console.log(reverseString("hello"));

// 12. Count vowels
// function countVowels(str){
//     let count = 0;
//     let vowels = "aeiouAEIOU"
//     for (let i = 0; i<str.length; i++) if (vowels.indexOf(str[i]) !== -1) count++;
//     return count;
// }
// console.log(countVowels("hello world")); 

// 13. Check palindrome
// function isPalindrome(str){
//     // let reverse = "";
//     // for (let i = str.length-1; i>=0; i--) reverse+=str[i];
//     // return reverse === str;

//     for (let i = 0; i<str.length/2; i++){
//         if (str[i] !== str[str.length - i -1]) return false;
//     }
//     return true;
// }
// console.log(isPalindrome("racecar"));

// 14. Remove whitespaces
// function removeWhitespaces(str){
//     let modified = "";
//     for (let i = 0; i<str.length; i++) if (str[i] !== " ") modified += str[i];
//     return modified;
// }
// console.log(removeWhitespaces("hello world"));

// 15. Capitalise every word
// function capitalizeWords(str){
//     // let capitalised = ""
//     // capitalised += str[0].toUpperCase();
//     // for (let i = 1; i<str.length; i++){
//     //     if (str[i] === " "){
//     //         capitalised += str[i] + str[i+1].toUpperCase();
//     //         i++;
//     //     } else capitalised += str[i];
//     // }

//     let cap = str.split(' ');
//     let ans = " ";
//     for (let i = 0; i<cap.length; i++){
//         let word = cap[i];
//         ans+= word.charAt(0).toUpperCase() + word.slice(1);
//         if( i!== word.length-1){
//             ans+= " "
//         }
//     }
//     return ans;
// }
// console.log(capitalizeWords("hello world"));

// 26. Double number of an array using map function
// function doubleNumbers(arr){
//     return arr.map(num => num*2)
// }
// console.log(doubleNumbers([1, 2, 3])); 

// 27. Remove falsey values
// function filterFalsey(arr){
//     return arr.filter(Boolean)
// }
// console.log(filterFalsey([0, 1, false, 2, "", 3]))

// 28. Find key value in object
// function findUser(users, name){
//     return users.find(user => user.name === name)
// }
// console.log(findUser([{name: 'Alice'}, {name: 'Bob'}], 'Bob'))

// 29. Sum of array elee=ments
// function sumArray(nums){
//     return nums.reduce((store, curr) => store + curr, 0)
// }
// console.log(sumArray([1, 2, 3, 4]))

// 30. Check even numbers
// function allEven(nums){
//     return nums.every(num => num%2 == 0)
// }
// console.log(allEven([1, 2, 3]))

// function fibonacci(N){
//     let num1 = 0;
//     let num2 = 1;
//     console.log(num1 + " ")
//     console.log(num2 + " ")
//     let sum = num1+num2;
//     while (sum<=N){
//         console.log(sum + " ")
//         num1 = num2
//         num2 = sum
//         sum = num1 + num2
//     }
// }

// fibonacci(56)

// Test
// let a = "This only works if and only if";
// let b = a.slice(a.indexOf("only"));
// let c = b.lastIndexOf("only");

// b[c] = "i";

// console.log(a);
// console.log(b);


// const a = [16,17,18,19]

// let b = []

// for(let i=0;i<a.length;i++){
//     b[i] = a[i];
// }

// b[0] = 14

// console.log(a)
// console.log(b)

// const a = {
//     "Name": "Archisman",
//     "age": 12
// }

// console.log(a.hasOwnProperty("Namee"))

// {
//     // TDZ starts at beginning of scope
//     const func = () => console.log(letVar); // OK
  
//     // Within the TDZ letVar access throws `ReferenceError`
  
//     func(); // Called outside TDZ!
//     let letVar = 3; // End of TDZ (for letVar)
//   }
  
// function func() {
//     var a = 'Geeks';
//     let b = 'Geeks';
    
//     if (true) {
//         let a = 'GeeksforGeeks'; // Legal Shadowing
//         // var b = 'Geeks'; // Illegal Shadowing
//         console.log(a); // It will print 'GeeksforGeeks'
//         console.log(b); // It will print error
//     }
//     // var a = 'heiohf'
//     console.log(a);
    
// }
// func();


// Sort array in descending
// let a = [15,78,20,1,19]
// function sortArray(a){
//     return a.sort().reverse()
// }

// console.log(sortArray(a));