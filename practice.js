// console.log(typeof(NaN));
// console.log({}+[]); // [object Object]
// console.log({}); // {}

// function abc(){
//     return 
//         a:1
    
// }
// console.log(abc());

// let arr=[10,15,30];
// arr[5]=20;
// console.log(arr);

// console.log(arr.length);

// const arr = [1,3,4,'a','d',6,7,'e','r'];

// function separator(){
//   const  num = [];
//   const str = [];

//   for(let i=0;i<arr.length;i++){
//     if(typeof arr[i] === typeof 1){
//         num.push(arr[i])
//     }else{
//         str.push(arr[i])
//     }
    
// }
// console.log(num, str);

// }
// separator()

// var a={
//     id:1,
//     title:"Amit",
//     abc:"A"
// }

// var b={
//     id:2,
//     title:"Prakash"
// }

// var c= {
//     ...a,...b
// }
// console.log(c);

// const arr=[1,3,4,6,7];

// const double = arr.forEach(num => num * 2
// )
// console.log(double);

// console.log(typeof (null));
// console.log(typeof (undefined));

// const obj = {
//     pqe:100,
//     abc:200,
//     xyz:{
//         pqr:300,
//         abc:200
//     }
// }
//  const {pqe, abc, xyz:{pqr,abc:q}} = obj 
//  console.log(pqe, abc,pqr, q);
 
// const arr=[1,3,4,6,7];
// const filteredArray = arr.map((e) => e>3)
// console.log(filteredArray);


//find the shortest word from string

// let str = "hello how are you, I am fine";

// function findShortest(str){
//     let word = str.split(" ");
//     let res = word.reduce((acc, curr) => 
//         curr.length < acc.length ? curr : acc
//     )
//     return res
//     console.log(res)
// }
//      console.log(findShortest(str));
//      findShortest(str)

//find the longest word from string

// let str = "hello how are you, I am fine";

// function findLongest(){
//     let word = str.split(" ");
//     let res = word.reduce((acc, curr)=> 
//         curr.length > acc.length ? curr : acc
//     )
//     console.log(res);
    
// }
// findLongest()

//find the longest word from string without method

// let str = "hello how are you, I am fine";

// str +=" ";
// let longest="";
// let longestLen=0;
// let temp=""

// for(let i=0; i<str.length; i++){
//     if (str[i] == " ") {
//         if(temp.length > longest.length){
//             longest = temp;
//     }
//     temp = ""
// }
//     else {
//         temp +=str[i]
//     }
// }
// console.log(longest);


//find the shortest word from string without method

// let str = "hello how are you, I am fine";

// str +=" ";
// let shortest="";
// let temp=""

// for(let i=0; i<str.length; i++){
//     if (str[i] == " ") {
//         if(temp.length > 0){
//             if(shortest =="" || temp.length < shortest.length){

//                 shortest = temp;
//             }
//     }
//     temp = ""
// }
//     else {
//         temp +=str[i]
//     }
// }
// console.log(shortest);

//related to currying function
// console.log(sum(5)(6));
// console.log(sum(5,6));

// function sum(a,b){
//     if(b === undefined){

//         return function(B){
//             return a+B;
//         }
//     }
//     return a+b
// }

// const arr = [15, 20, 35, 60, 30];
// const target = 125;

// function findTargetSum(array, targetSum) {
//     let currentSum = 0;
//     let start = 0;

//     for (let end = 0; end < array.length; end++) {
//         // 1. Right side se element ko sum mein add karo
//         currentSum += array[end];

//         // 2. Agar currentSum target se bada ho jaye, toh left side se minus karo
//         while (currentSum > targetSum && start < end) {
//             currentSum -= array[start];
//             start++;
//         }

//         // 3. Agar sum target ke barabar mil gaya
//         if (currentSum === targetSum) {
//             const elements = array.slice(start, end + 1);
//             const indexes = [];
//             for (let i = start; i <= end; i++) {
//                 indexes.push(i);
//             }
            
//             return {
//                 numbers: elements,
//                 indexes: indexes,
//                 message: `Success: ${elements.join(" + ")} = ${targetSum}`
//             };
//         }
//     }

//     return "No match found!";
// }

// const result = findTargetSum(arr, target);
// console.log(result);


// find sorted array without predefined method
// function bubbleSort(arr) {
//     let n = arr.length;
    
//     // Outer loop to access each array element
//     for (let i = 0; i < n; i++) {
//         // Inner loop to compare adjacent elements
//         // (n - i - 1) prevents checking already sorted elements at the end
//         for (let j = 0; j < n - i - 1; j++) {
//             // Compare adjacent elements
//             if (arr[j] > arr[j + 1]) {
//                 // Swap the elements
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// // Example usage:
// const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
// const sortedArray = bubbleSort(unsortedArray);

// console.log("Sorted Array:", sortedArray); 
// Output: [11, 12, 22, 25, 34, 64, 90]


// let arr = [22,10,15,29,2,40]
// let n= arr.length
// for(let i=0; i<n; i++){
//     for(let j=0; j<n-i-1;j++){
//         if(arr[j] < arr[j+1]){
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
//     }
// }
// console.log(arr);


// console.log(a);
// console.log(b); //b is not define
// var a=b=200;

// function para(...arr){
// console.log(typeof arr);

// }
// para(1,2,3,4,5)
// console.log(NaN === NaN);


//remove duplicates array
// let arr = [0,0,1,1,2,3,4,4,4];

// let j=1;

// for(let i=1; i<arr.length; i++){
//     if(arr[i] != arr[i-1]){
//         arr[j] = arr[i]
//         j++
//     }
    
// }
// arr.length = j;
// console.log(arr);


// // How To find duplicate elements in array
// let arr1 = [0,0,1,1,2,3,4,4,4];
// let duplicates=arr1.filter((ele,index,arr)=>arr.indexOf(ele)!==index)
// console.log(duplicates);


// // How To find duplicate elements in array without predefined method
// let arr = [0, 0, 1, 1, 2, 3, 4, 4, 4];
// let duplicates = [];
// let dupCount = 0;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         // Agar aage koi same element mil gaya
//         if (arr[i] === arr[j]) {
            
//             // Check karo ki kahin yeh duplicate pehle hi list mein add toh nahi ho chuka?
//             let alreadyAdded = false;
//             for (let k = 0; k < dupCount; k++) {
//                 if (duplicates[k] === arr[i]) {
//                     alreadyAdded = true;
//                     break;
//                 }
//             }
            
//             // Agar pehle add nahi hua hai, toh add kar lo
//             if (!alreadyAdded) {
//                 duplicates[dupCount] = arr[i];
//                 dupCount++;
//             }
//             break; // Andar wale loop se bahar aao kyunki duplicate mil gaya
//         }
//     }
// }

// console.log(duplicates); // Output: [0, 1, 4]


//How to find max number in an array
// let arr = [10, 2, 78, 100, 4];
// let max = arr[0];
// for(let i=1; i<arr.length;i++){
//     if(max<arr[i]){
//         max =arr[i];
//     }
// }
// console.log(max);

// 2nd method 
// let arr = [10, 2, 78, 100, 4];
// const maxFunction=(arr)=>{
//     return arr.reduce(function(pre,curr){
//         return pre>curr ? pre:curr 
//     })
// }
// console.log(maxFunction(arr));


//How to find min element of an array 
// let arr = [10, 2, 78, 100, 4];
// let min=arr[0];
// for(let i=1;i<arr.length;i++){
//     if(min>arr[i]){
//         min=arr[i]
//     }
// }
// console.log("min number in an array",min);

// 2nd method 
// let arr = [10, 2, 78, 100, 4];
// const minFunction=(arr)=>{
//     return arr.reduce(function(pre,curr){
//         return pre<curr ? pre:curr 
//     })
// }
// console.log(minFunction(arr));


//How to find 2nd max number in an array 
// let arr = [10,30,44,44,44];

// let max=Math.max(arr[0], arr[1]); 
// let sMax = Math.min(arr[0], arr[1]);

// for(let i=2; i<arr.length; i++){
//     if(arr[i]>max){
//         sMax = max
//         max = arr[i];
//     }else if(arr[i]> sMax && max != arr[i]){
//         sMax = arr[i] 
//     }
// }
// console.log(sMax);

// 2nd method 
// const largestValue=(arr)=>{
//     firstLargestValue=Math.max(...arr)
//     index=arr.indexOf(firstLargestValue)
//     arr.splice(index,1)
//     secondLargestValue=Math.max(...arr)
//     return(secondLargestValue)
// }
// console.log(largestValue(arr));


//How to find missing elements in a given array 1 to 10
    // const arrNum=[1,2,3,4,5,6,9,10]
    // const missArray=[]
    // const missingValue=(arr)=>{
    //     const minValue=Math.min(...arr)
    //     const maxValue=Math.max(...arr)
    //     for(let i=minValue;i<maxValue;i++){
    //         if(arr.indexOf(i)<0){
    //             missArray.push(i)
    //         }
    //     }
    //     return missArray
    // }
    // console.log(missingValue(arrNum));
    

//How to find Factorial(n!) of a given number in js?
    // const inputNum=prompt("please enter number")
    // var fact=1;
    // if(inputNum<0){
    //     console.log(`factorial of ${inputNum} is not possible`); 
    // }else{
    //     for(let i=1;i<=inputNum;i++){
    //         fact *=i
    //     }
    //     console.log(`factorial of ${inputNum} is ${fact}`);
        
    // }

// How to find prime number in javascript
// var number = prompt("enter number")
// if(number==1){
//     console.log(`${number} is not prime neither composite`);
// }else if(number<1){
//     console.log(`prime number of  ${number} is not possible`);
// }else{  
//     for(let i=2;i<number;i++){
//         if(number%i==0){
//             var result =`${number} is not prime number`
//             break;
//         }else{
//             var result=`${number} is prime number`
//         }
//     }
//     console.log(result);
    
// }


//How to find vowels from string
    // var string="b"
    // string=string.toLowerCase()
    // if(string=='a' || string=='e' ||string=='i' ||string=='o' ||string=='u'){
    //     console.log(`${string} is vowel`);
    // }else{
    //     console.log(`${string} is not vowel`);
        
    // }

    // 2nd type
    // var string = "amit"
    // const vowels=['a','e','i','o','u']
    // const countVowel=(str)=>{
    //     var count=0;
    //     for(let letter of str.toLowerCase()){
    //         if(vowels.includes(letter)){
    //             count++
    //         }
    //     }
    //     return count
    // }
    // console.log(countVowel(string));
    

//How to reverse a string
// const reverseString= (str)=>{
//     var strToArray=str.split("")
//     var arrReverse=strToArray.reverse()
//     var strReverse = arrReverse.join("")
//     return strReverse
// }
// console.log(reverseString("butter"));


//How to find palindrome in js

// let string=prompt("enter value")
// string=string.toLowerCase()
// const palindromeFind=(str)=>{
//     //reverse string
//     var reverseStr=str.split("").reverse().join("")
//     if(reverseStr===str){
//         console.log(`${string} is palindrome`);
        
//     }else{console.log(`${string} is not palindrome`);
//     }
// }
// palindromeFind(string)


//How to swap two variables without using the third
// let a=7
// let b=8;
//with using third variable
// let temp=a
// a=b
// b=temp
//without third variable
// [a,b]=[b,a]
// console.log(`value of a is ${a} and value of b is ${b}`);


//How to find factor of a given integer in javascript
// const num=prompt("please enter positive number")
// if(num<0){
//     console.log(`factors of ${num} is not possible`);
// }else{

//     console.log(`factors of ${num}`);
//     for(let i=0;i<=num;i++){
//         if(num%i==0){
//             console.log(i);
            
//         }
//     }
// }


//Simple calculator
// const operator=prompt("please select operator either + - /  *")
// const num1=parseFloat(prompt("enter num1"))
// const num2=parseFloat(prompt("enter num2"))
// if(operator == '+'){
//     result=num1+num2
// }else if(operator == '-'){
//     result=num1-num2
// }else if(operator == '*'){
//     result=num1*num2
// }else{
//     result=num1/num2
// }
// console.log(`${num1} ${operator} ${num2} = ${result}`);


//How to compare two arrays are equal or not in js
// var arr1=[2,9,6,8,4]
// var arr2=[4,8,6,9,2]
// const isArrSame=arr1.length==arr2.length &&

// //indexOf method return -1 if element is not exist in array
// //every method check each and every element fulfill the condition exist in array
// arr1.every((curEle)=>{
//     if(arr2.indexOf(curEle)>-1){
//         return(curEle=[arr2.indexOf(curEle)])
//     }
// })
// console.log(isArrSame);

// const fun = async () => {
//     console.log("read 1");

//     await console.log("read 2");
//     console.log("read 3");
// }
// fun()
// console.log("read 4");
// read 1
// read 2
// read 4
// read 3



