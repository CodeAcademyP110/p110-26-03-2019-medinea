
"use strict";

// 1.İstifadəçidən yaratmaq istədiyi Array-in uzunluğunu soruşursunuz. 
// Həmin rəqəm qədər istifadəçidən ədəd istəyirsiniz və bir array-ə doldurursunuz. 
// Daha sonra o rəqəmlər arasında ən böyüyünü, ən kiçiyini və orta rəqəmi tapın.


// let numbers = [];
// let arrayLength = +prompt("Include a number length: ");

// for (var i = 0; i < arrayLength; i++) {
//  let userInput = +prompt(i+1 + "-ci reqemi yaz");
//  numbers.push(userInput);
    
// }

// let max = numbers[0]
// for (var i = 0; i < arrayLength; i++)
// {
//  if(numbers[i] > max) max = numbers[i]
// }


// let min = numbers[0];
//  for (var i = 0; i < arrayLength; i++)
//  {
//      if(numbers[i] < min) min = numbers[i];
//  }

//  let middle = numbers[0];
//  let b = 0;
//  let edediorta = 0;
//  for (var i = 0; i < arrayLength; i++)
//  {
//  b = b + numbers[i] ;
//  }

//  edediorta = b / arrayLength;
 

// console.log("Numbers: " + numbers)
// console.log("Max Number: " + max)
// console.log("Min Number: " + min)
// console.log("Ededi orta: " + edediorta)




//2.İstifadəçidən yaratmaq istədiyi Array-in uzunluğunu soruşursunuz.
//Həmin rəqəm qədər istifadəçidən ədəd istəyirsiniz və bir array-ə doldurursunuz.
//Daha sonra o rəqəmlər arasında yalnız cüt ədədlərin sayını tapırsınız və console-a yazdırırsınız.

// let numbers = [];
// let arrayLength = +prompt("Include a number length: ");

// for (var i = 0; i < arrayLength; i++) {
//  let userInput = +prompt(i+1 + "-ci reqemi yaz");
//  numbers.push(userInput);
    
// }
// let cut = 0;
// for(var i = 0; i<arrayLength; i++){
//  if(numbers[i] % 2==0)  
//  cut++
// }

// console.log("Numbers: " + numbers)
// console.log("Cut ededlerin sayi: " + cut)



// 3.İstifadəçidən yaratmaq istədiyi Array-in uzunluğunu soruşursunuz.
// Həmin rəqəm qədər istifadəçidən ədəd istəyirsiniz və bir array-ə doldurursunuz. 
// Daha sonra bütün rəqəmlərin cəmini, tək ədədlərin cəmini və cüt rəqəmlərin cəmini ayrıca hesablayıb console-a yazdırırsınız.

// let numbers = [];
// let arrayLength = +prompt("Include a number length: ");

// for (var i = 0; i < arrayLength; i++) {
//  let userInput = +prompt(i+1 + "-ci reqemi yaz");
//  numbers.push(userInput);
    
// }
// let cem = 0;
// for(var i = 0; i<arrayLength; i++){
//  cem+=numbers[i] 
// }

// let tek = 0;
// let tekCem = 0
// for(var i = 0; i < arrayLength; i++){
//  if(numbers[i] % 2==1 | numbers[i] % 2==-1)
//  tekCem+=numbers[i]
// }

// let cut = 0;
// let cutCem = 0
// for(var i = 0; i < arrayLength; i++){
//  if(numbers[i] % 2==0)
//  cutCem+=numbers[i]
// }

// console.log("Numbers: " + numbers)
// console.log("Umumi ededlerin cemi: " + cem)
// console.log("Tek ededlerin cemi: " + tekCem)
// console.log("Cut ededlerin cemi: " + cutCem)

// 4.İstifadəçidən 10 ədəd söz istəyirsiniz, 
// onları bir array-ə doldurursunuz və həmin sözlər arasında ən uzununu və ən qısasını tapıb console-a yazdırmalısınız.

let words = [];


for (var i = 0; i < 10; i++) {
    let userInput = prompt(i+1 + "-ci sozu yaz");
    words.push(userInput);  
}

console.log("Words: " + words)


