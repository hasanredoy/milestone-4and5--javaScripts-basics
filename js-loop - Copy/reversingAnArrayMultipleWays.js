//  1st way 
 const num =[45, 46, 1, 5,];

// let rever = num.reverse();

// console.log(rever)

// by using for of loop
 const y =[];
for(const x of num){
 y.unshift(x);
}
// console.log(y)

// by using for loop 

let result=[];
for(let i=num.length-1; i >=0; i--){
  // console.log(num[i]);
  result.push(num);
}
// console.log(result)

let crickete =['bat', 'ball', 'stumps'];

let rever = crickete.reverse();
console.log(rever);