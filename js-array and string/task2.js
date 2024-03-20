// let x ='hello world are awesome awesome are Are You Are Awesome';
// for (let i=0; i<x.length; i++) {
//   let num =x[i];
//   let sum = 0;
//   if(num ==='a' ){
//      sum =sum+1 + num;
//   }
//   else if(num ==='A' ){
//     sum =sum + num ;
//   }
//   console.log(sum);
// }

// let x ='hello world are awesome awesome are Are You Arev Awesome';
// for (let i=0; i<x.length; i++) {
//   let num =x[i];
//   let sum = 0;
//   if(num ==='a'||num ==='e' ||num ==='i'||num ==='o'||num ==='u'||num ==='A'){
//      sum =sum + num+1;
//   }

//   console.log(sum);
// }

// let xy = 'x X y Y';

// let result = xy.replace(/x X y Y/g,'X x Y y');

// console.log(result);
const s = "this is a sample string";
const capitalizedString = s.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

console.log(capitalizedString)