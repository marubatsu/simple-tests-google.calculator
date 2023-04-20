/// <reference types="cypress" />

import { SearchPage } from '../page_objects/search_page';
import { CalculatorPage } from '../page_objects/calculator_page';
import { Utilities } from '../utilities/utilities';

describe('[Division] Given I am in Google Calculator page.', () => {
  beforeEach('', () => {
    cy.visit('/');
    const searchPage = new SearchPage();
    searchPage.searchCalculator();
  });

  //These test cases are for whole numbers
  it(
    '[D-01] When I divide 2 positive whole numbers then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['smoke', 'regression', 'division'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateWholeNumber();
      let num2 = utilities.generateWholeNumber();
      let result = utilities.divideDecimalNumbers(num1, num2);
      calculatorPage.divideTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('division', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.comparePartialValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} ÷ ${num2} =`);
    }
  );

  it(
    '[D-02] When I divide 2 negative whole numbers then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'division'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateWholeNumber() * -1;
      let num2 = utilities.generateWholeNumber() * -1;
      let result = utilities.divideDecimalNumbers(num1, num2);
      calculatorPage.divideTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('division', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.comparePartialValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} ÷ ${num2} =`);
    }
  );

  it(
    '[D-03] When I divide a positive and a negative whole number then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'division'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateWholeNumber();
      let num2 = utilities.generateWholeNumber() * -1;
      let result = utilities.divideDecimalNumbers(num1, num2);
      calculatorPage.divideTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('division', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.comparePartialValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} ÷ ${num2} =`);
    }
  );

  it(
    '[D-04] When I divide a negative and a positive whole number then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'division'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateWholeNumber() * -1;
      let num2 = utilities.generateWholeNumber();
      let result = utilities.divideDecimalNumbers(num1, num2);
      calculatorPage.divideTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('division', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.comparePartialValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} ÷ ${num2} =`);
    }
  );

  it(
    '[D-05] When I divide by zero a positive whole number then I want to see the operation above the result, and Infinity in the calculator screen',
    { tags: ['smoke', 'regression', 'division'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateWholeNumber();
      let num2 = 0;
      let result = utilities.divideDecimalNumbers(num1, num2);
      calculatorPage.divideTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('division', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.comparePartialValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} ÷ ${num2} =`);
    }
  );

  it(
    '[D-06] When I divide by zero a negative whole number then then I want to see the operation above the result, and -Infinity in the calculator screen',
    { tags: ['regression', 'division'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateWholeNumber() * -1;
      let num2 = 0;
      let result = utilities.divideDecimalNumbers(num1, num2);
      calculatorPage.divideTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('division', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.comparePartialValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} ÷ ${num2} =`);
    }
  );

  it(
    '[D-07] When I divide zero by a positive whole number then I want to see the operation above the result, and 0 in the calculator screen',
    { tags: ['smoke', 'regression', 'division'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = 0;
      let num2 = utilities.generateWholeNumber();
      let result = utilities.divideDecimalNumbers(num1, num2);
      calculatorPage.divideTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('division', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.comparePartialValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} ÷ ${num2} =`);
    }
  );

  it(
    '[D-08] When I divide zero by a negative whole number then I want to see the operation above the result, and 0 in the calculator screen',
    { tags: ['regression', 'division'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = 0;
      let num2 = utilities.generateWholeNumber() * -1;
      let result = utilities.divideDecimalNumbers(num1, num2);
      calculatorPage.divideTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('division', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.comparePartialValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} ÷ ${num2} =`);
    }
  );

  //These test cases are for decimal numbers
  it(
    '[D-09] When I divide 2 positive decimal numbers then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['smoke', 'regression', 'division'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateFloatNumber();
      let num2 = utilities.generateFloatNumber();
      let result = utilities.divideDecimalNumbers(num1, num2);
      calculatorPage.divideTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('division', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.comparePartialValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} ÷ ${num2} =`);
    }
  );

  it(
    '[D-10] When I divide 2 negative decimal numbers then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'division'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateFloatNumber() * -1;
      let num2 = utilities.generateFloatNumber() * -1;
      let result = utilities.divideDecimalNumbers(num1, num2);
      calculatorPage.divideTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('division', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.comparePartialValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} ÷ ${num2} =`);
    }
  );

  it(
    '[D-11] When I divide a positive and a negative decimal number then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'division'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateFloatNumber();
      let num2 = utilities.generateFloatNumber() * -1;
      let result = utilities.divideDecimalNumbers(num1, num2);
      calculatorPage.divideTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('division', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.comparePartialValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} ÷ ${num2} =`);
    }
  );

  it(
    '[D-12] When I divide a negative and a positive decimal number then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'division'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateFloatNumber() * -1;
      let num2 = utilities.generateFloatNumber();
      let result = utilities.divideDecimalNumbers(num1, num2);
      calculatorPage.divideTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('division', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.comparePartialValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} ÷ ${num2} =`);
    }
  );

  it(
    '[D-13] When I divide by zero a positive decimal number then I want to see the operation above the result, and Infinity in the calculator screen',
    { tags: ['regression', 'division'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateFloatNumber();
      let num2 = 0;
      let result = utilities.divideDecimalNumbers(num1, num2);
      calculatorPage.divideTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('division', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.comparePartialValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} ÷ ${num2} =`);
    }
  );

  it(
    '[D-14] When I divide by zero a negative decimal number then I want to see the operation above the result, and -Infinity in the calculator screen',
    { tags: ['regression', 'division'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateFloatNumber();
      let num2 = 0;
      let result = utilities.divideDecimalNumbers(num1, num2);
      calculatorPage.divideTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('division', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.comparePartialValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} ÷ ${num2} =`);
    }
  );

  it(
    '[D-15] When I divide zero by a positive decimal number then I want to see the operation above the result, and 0 in the calculator screen',
    { tags: ['regression', 'division'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = 0;
      let num2 = utilities.generateFloatNumber();
      let result = utilities.divideDecimalNumbers(num1, num2);
      calculatorPage.divideTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('division', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.comparePartialValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} ÷ ${num2} =`);
    }
  );

  it(
    '[D-16] When I divide zero by a negative decimal number then I want to see the operation above the result, and 0 in the calculator screen',
    { tags: ['regression', 'division'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = 0;
      let num2 = utilities.generateFloatNumber() * -1;
      let result = utilities.divideDecimalNumbers(num1, num2);
      calculatorPage.divideTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('division', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.comparePartialValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} ÷ ${num2} =`);
    }
  );

  //Other tests cases
  it(
    '[D-17] When I divide a whole number and a decimal number then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'division'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateWholeNumber();
      let num2 = utilities.generateFloatNumber();
      let result = utilities.divideDecimalNumbers(num1, num2);
      calculatorPage.divideTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('division', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.comparePartialValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} ÷ ${num2} =`);
    }
  );
});
