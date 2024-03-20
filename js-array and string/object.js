let xx ={
  a: 'hi',
  b: 'hello',
  c: 'world'
};

console.log(Object.keys(xx));

console.log(Object.values(xx));

// for adding new values in object = object name.key = value

xx.a ='heellow';
xx['c'] ='heellow';
console.log(xx)

// for adding new key in object = object name.new key = value

xx.nn = 'hiii';

// for deleting  any keys from Object = delete Object name.key;

delete xx.b
console.log(xx)

// object ke loop korar jonno for in loop bebohar kora lagbe 
// object er key gulu ke access korar jonno = key
// object er value gulu ke access korar jonno = object namae [key]
 console.log('************************************************************************************')
for(let key in xx){
  console.log(key)

  console.log(xx[key])
}

// for maikin  a Object to array = template array 

let str = `HI ${xx.a} hellow ${xx.b} how. ${xx.nn}`
console.log(str)