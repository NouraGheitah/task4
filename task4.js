function isDivisibleBy10(number) {
    return number % 10 === 0;
  }
  console.log(isDivisibleBy10(20)); 
  console.log(isDivisibleBy10(33)); 
  function findMaxNumber(arr) {
    return Math.max(...arr);
  }
  console.log(findMaxNumber([10, 5, 25, 8])); 
  console.log(findMaxNumber([-3, -1, -7, -10])); 
  function reverseArray(arr) {
    return arr.reverse();
  }  
  console.log(reverseArray([1, 2, 3, 4])); 
  console.log(reverseArray(["a", "b", "c"])); 