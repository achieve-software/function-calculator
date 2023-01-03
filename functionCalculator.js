const calculator = (operator, value1, value2) => {
  if (operator === "+") {
    return value1 + value2;
  } else if (operator === `-`) {
    return value1 - value2;
  } else if (operator === `*`) {
    return value1 * value2;
  } else if (operator === `/`) {
    return value1 / value2;
  } else {
    return `invalid number or operator`;
  }
};
console.log(calculator("+", 5, 7));
