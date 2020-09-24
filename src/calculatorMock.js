const invalidInputErrorMessage = "Невірні вхідні данні. Формат даних <число> <число> <операція>";
const divideByZeroErrorMessage = "Ділення на 0 не є валідною операцією";

function calculatorMock(input) {
  if (input.length === 0) throw Error(invalidInputErrorMessage)
  const splittedString = input.trim().split(' ');
  if (splittedString.length !== 3) throw Error(invalidInputErrorMessage);

  if (splittedString[2] === "/" && splittedString[1] === "0") throw Error(divideByZeroErrorMessage);
}

module.exports.calculatorMock = calculatorMock;
module.exports.divideByZeroErrorMessage = divideByZeroErrorMessage;
module.exports.invalidInputErrorMessage = invalidInputErrorMessage;