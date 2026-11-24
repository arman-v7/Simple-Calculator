export function calculate(a, operator, b) {
  const num1 = Number(a);
  const num2 = Number(b);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    return "Error";
  }

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 === 0 ? "Cannot divide by 0" : num1 / num2;
    default:
      return "Error";
  }
}
