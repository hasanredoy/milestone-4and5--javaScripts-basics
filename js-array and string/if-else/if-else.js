let age = 15;
let price = 500;

if(age <= 12 || age >= 80){
  console.log('you can eat for free')
}else if(age <= 15 || age >= 70){
  let discount = price * 50 / 100;
  console.log(`you're bill is` + ' '+ discount)
}
else{
  console.log(`No discount, You're bill is` +' '+ price)
}
age <= 18 ? console.log("you can't vote ") : console.log('you can vote')