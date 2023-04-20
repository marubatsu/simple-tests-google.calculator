/// <reference types="cypress" />

import { SearchPage } from '../page_objects/search_page';
import { CalculatorPage } from '../page_objects/calculator_page';
import { Utilities } from '../utilities/utilities';

describe('[Multiplication] Given I am in Google Calculator page.', () => {
  beforeEach('', () => {
    cy.visit('/');
    const searchPage = new SearchPage();
    searchPage.searchCalculator();
  });

  //These test cases are for whole numbers
  it(
    '[M-01] When I multiply 2 positive whole numbers then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['smoke', 'regression', 'multiplication'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateWholeNumber();
      let num2 = utilities.generateWholeNumber();
      let result = num1 * num2;
      calculatorPage.multiplyTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('multi', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} × ${num2} =`);
    }
  );

  it(
    '[M-02] When I multiply 2 negative whole numbers then I want to see the result in the calculator screen',
    { tags: ['regression', 'multiplication'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateWholeNumber() * -1;
      let num2 = utilities.generateWholeNumber() * -1;
      let result = num1 * num2;
      calculatorPage.multiplyTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('multi', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} × ${num2} =`);
    }
  );

  it(
    '[M-03] When I multiply a positive and a negative whole number then I want to see the result in the calculator screen',
    { tags: ['regression', 'multiplication'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateWholeNumber();
      let num2 = utilities.generateWholeNumber() * -1;
      let result = num1 * num2;
      calculatorPage.multiplyTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('multi', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} × ${num2} =`);
    }
  );

  it(
    '[M-04] When I multiply a negative and a positive whole number then I want to see the result in the calculator screen',
    { tags: ['regression', 'multiplication'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateWholeNumber() * -1;
      let num2 = utilities.generateWholeNumber();
      let result = num1 * num2;
      calculatorPage.multiplyTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('multi', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} × ${num2} =`);
    }
  );

  it(
    '[M-05] When I multiply by zero a positive whole number then I want to see 0 in the calculator screen',
    { tags: ['regression', 'multiplication'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateWholeNumber();
      let num2 = 0;
      let result = num1 * num2;
      calculatorPage.multiplyTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('multi', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} × ${num2} =`);
    }
  );

  it(
    '[M-06] When I multiply by zero a negative whole number then I want to see 0 in the calculator screen',
    { tags: ['regression', 'multiplication'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateWholeNumber() * -1;
      let num2 = 0;
      let result = num1 * num2;
      calculatorPage.multiplyTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('multi', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} × ${num2} =`);
    }
  );

  //These test cases are for decimal numbers
  it(
    '[M-07] When I multiply 2 positive decimal numbers then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['smoke', 'regression', 'multiplication'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateFloatNumber();
      let num2 = utilities.generateFloatNumber();
      let result = utilities.multiplyDecimalNumbers(num1, num2);
      calculatorPage.multiplyTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('multi', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} × ${num2} =`);
    }
  );

  it(
    '[M-08] When I multiply 2 negative decimal numbers then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'multiplication'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateFloatNumber() * -1;
      let num2 = utilities.generateFloatNumber() * -1;
      let result = utilities.multiplyDecimalNumbers(num1, num2);
      calculatorPage.multiplyTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('multi', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} × ${num2} =`);
    }
  );

  it(
    '[M-09] When I multiply a positive and a negative decimal number then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'multiplication'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateFloatNumber();
      let num2 = utilities.generateFloatNumber() * -1;
      let result = utilities.multiplyDecimalNumbers(num1, num2);
      calculatorPage.multiplyTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('multi', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} × ${num2} =`);
    }
  );

  it(
    '[M-10] When I multiply a negative and a positive decimal number then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'multiplication'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateFloatNumber() * -1;
      let num2 = utilities.generateFloatNumber();
      let result = utilities.multiplyDecimalNumbers(num1, num2);
      calculatorPage.multiplyTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('multi', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} × ${num2} =`);
    }
  );

  it(
    '[M-11] When I multiply by zero a positive decimal number then I want to see the operation above the result, and 0 in the calculator screen',
    { tags: ['regression', 'multiplication'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateFloatNumber();
      let num2 = 0;
      let result = utilities.multiplyDecimalNumbers(num1, num2);
      calculatorPage.multiplyTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('multi', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} × ${num2} =`);
    }
  );

  it(
    '[M-12] When I multiply by zero a negative decimal number then I want to see the operation above the result, and 0 in the calculator screen',
    { tags: ['regression', 'multiplication'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateFloatNumber() * -1;
      let num2 = 0;
      let result = utilities.multiplyDecimalNumbers(num1, num2);
      calculatorPage.multiplyTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('multi', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} × ${num2} =`);
    }
  );

  //Other tests cases
  it(
    '[M-13] When I multiply a whole number and a decimal number then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'multiplication'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateWholeNumber();
      let num2 = utilities.generateFloatNumber();
      let result = utilities.multiplyDecimalNumbers(num1, num2);
      calculatorPage.multiplyTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('multi', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} × ${num2} =`);
    }
  );
});
