const { calculatorMock, invalidInputErrorMessage, divideByZeroErrorMessage } = require("../src/calculatorMock");

describe("Calculator", () => {
  describe("Операції вводу", () => {
    it("При введенні 2х символів повинна виводитись помилка", () => {
      const input = "5 2";
      try {
        calculatorMock(input)
      } catch (error) {
        expect(error.message).toBe(invalidInputErrorMessage);
      }
    });

    it("При введенні пустого рядку повинна виводитись помилка", () => {
      const input = "";
      try {
        calculatorMock(input)
      } catch (error) {
        expect(error.message).toBe(invalidInputErrorMessage);
      }
    });
  });
  
  describe("Арифметичні операції", () => {
    it("При введенні ділення на 0 повинна виводитись помилка", () => {
      const input = "5 0 /";
      try {
        calculatorMock(input)
      } catch (error) {
        expect(error.message).toBe(divideByZeroErrorMessage);
      }
    });
  });
});
