function sum(a, b = 10) {
    return a + b;
}
  
console.log(sum(1))

const sumArrow = (a, b = 10) => {
    return a + b;
};
  
// Mesma coisa que acima
const sumArrow2 = (a, b = 10) => a + b;
  
const sumValue = sumArrow2(2);
  
console.log(sumValue);