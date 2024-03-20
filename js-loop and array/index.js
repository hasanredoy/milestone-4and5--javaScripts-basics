//  let x = [15, 30, 20];

//  x.push(21);
//  x.unshift(2);
// x.pop();
// x.pop();
//  console.log(x)
 

// for changing the position of the elements in an array

let x = [15, 30, 20, 40, 50, 60, 70, 80];

let i = x[2];

x[2]=x[0];
x[0]=i;
console.log(x);