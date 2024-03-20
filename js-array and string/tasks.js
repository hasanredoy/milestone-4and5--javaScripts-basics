// 1 st task 
const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": '#daa520'
};

console.log(colors["golden rod"]);

// 2nd task
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  'passenger Capacity': 5
};

// 3rd task
const student = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
      subject: "HSC Physics",
      author: "Shahjahan Tapan",
      marks: 30
  }
};

console.log(student.physics.marks);

// 4th task

let students = {
  name: 'Ariana Grande',
  age: 21,
  city: 'Gaibandha',
  isStudent: true
};
console.log(Object.keys(students).length);

// 5th task

let myObject = {

  name: 'John Doe',
  age: 25,
  city: 'Example City',
  isStudent: true
  };

  let key = Object.keys(myObject);
  let value= Object.values(myObject);
  console.log(key);

  for(let i = 0; i < key.length; i++){
    console.log('key: ' + key[i] +'| type: '+ typeof(value[i]));

  }

  