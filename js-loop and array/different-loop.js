// or 
for (let i = 0; i <=100; i++) {
  if (i % 4 == 0  || i % 6 === 0) {
    console.log(i);
  
}
}
// and
for (let i = 0; i <=100; i++) {
  if (i % 4 == 0  && i % 6 === 0) {
    console.log(i);
  
}
}

// sum of 1 to 20 divisible by 3
console.log("sum of 1 to 20 divisible by 3");
let sum = 0;

for (let i = 1; i <= 20; i++) {
  if (i % 3 == 0) {
    sum = sum + i;
    console.log( 'total',sum);
    console.log(i);
  }
}