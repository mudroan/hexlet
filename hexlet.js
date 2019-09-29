//ЗАДАНИЕ 1
console.log('Hello, World!');


//ЗАДАНИЕ 2
const weight = 71; 
const c = 300000000; 
const energy = (weight * (Math.pow(c, 2))); 
console.log(energy);


//ЗАДАНИЕ 3
const squareOfSum = (a, b) => {
  return (Math.pow(a,2)) + 2 * a * b + (Math.pow(b,2)); 
};
console.log(squareOfSum(2, 3)); 


//ЗАДАНИЕ 4
const finalGrade = (exam, projects) => {
  if (exam > 90 || projects > 10) {
    return 100;
  }
  if (exam > 75 && projects >= 5) {
    return 90;
  }
  if (exam > 50 && projects >= 2) {
    return 75;
  } 
    return 0; 
  };  
  
  
//ЗАДАНИЕ 5
  //1.reference 
  const reference = () => {
    return ref; 
  };
  export default reference;
  
  //2.type
  const type = () => {
    const t = 10; 
    t ();  
    };    
export default type;


//ЗАДАНИЕ 6
const sequenceSum = (begin, end) => {
  if (begin > end) {
    return NaN;
  }
  if (begin === end) {
    return begin;
  } return begin + sequenceSum(begin + 1, end);
}; 
  
  
//ЗАДАНИЕ 7
const smallestDivisor = (num) => {
    const iter = (acc) => {
      if (acc > num / 2) {
        return num; 
      }
      if (num % acc === 0) {
        return acc; 
      }
      return iter (acc + 1);
    }
    return iter(2);
}; 


//ЗАДАНИЕ 8
const smallestDivisor = (num) => { 
    if (num < 1) {
        return NaN;
    } 
    if (num === 1) { //не уверен с else
        return num; 
    }
    let counter = 2;

    while (num % counter !== 0) {
        counter = counter + 1; 
}
    return counter; 
};
