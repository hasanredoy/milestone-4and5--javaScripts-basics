// while loop 

let x = 0;

while (x <= 10) {
    console.log(x);
    x++;
}

// for loop 

console.log("for loop");

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// even Numbers
console.log("even numbers");

for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// odd Numbers 
console.log("odd numbers");

for (let i = 0; i <= 10; i++) {
  if (i % 2!= 0) {
    console.log(i);
  }
}

for (let i = 0; i <= 10; i++) 
{
  console.log("helloWorld");
}

// sum 

    let sum = 0;

    for (let i = 0; i <= 10; i++) {
        sum = sum + i
    }

  console.log('0 to 10 sum number is', sum);

  // decremental loop
  console.log("decremental loop");

  for (let i = 10; i >= 0; i--) {
    console.log(i);
  }

  // decrementalLoop
  let i = 10;
  while (i >= 0) {
      console.log(i);
      i--;
  }