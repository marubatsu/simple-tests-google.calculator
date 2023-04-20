/// <reference types="cypress" />

import { SearchPage } from '../page_objects/search_page';
import { CalculatorPage } from '../page_objects/calculator_page';
import { Utilities } from '../utilities/utilities';

describe('[Substraction] Given I am in Google Calculator page.', () => {
  beforeEach('', () => {
    cy.visit('/');
    const searchPage = new SearchPage();
    searchPage.searchCalculator();
  });

  //These test cases are for whole numbers
  it(
    '[S-01] When I subtract 2 positive whole numbers then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['smoke', 'regression', 'subtraction'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateWholeNumber();
      let num2 = utilities.generateWholeNumber();
      let result = num1 - num2;
      calculatorPage.subtractTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('subtract', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} - ${num2} =`);
    }
  );

  it(
    '[S-02] When I subtract a negative and a positive whole number then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'subtraction'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateWholeNumber() * -1;
      let num2 = utilities.generateWholeNumber();
      let result = num1 - num2;
      calculatorPage.subtractTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('subtract', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} - ${num2} =`);
    }
  );

  it(
    '[S-03] When I subtract zero to a positive whole number then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'subtraction'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateWholeNumber();
      let num2 = 0;
      let result = num1 - num2;
      calculatorPage.subtractTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('subtract', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} - ${num2} =`);
    }
  );

  it(
    '[S-04] When I subtract zero to a negative whole number then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'subtraction'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateWholeNumber() * -1;
      let num2 = 0;
      let result = num1 - num2;
      calculatorPage.subtractTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('subtract', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} - ${num2} =`);
    }
  );

  //These test cases are for decimal numbers
  it(
    '[S-05] When I subtract 2 positive decimal numbers then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['smoke', 'regression', 'subtraction'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateFloatNumber();
      let num2 = utilities.generateFloatNumber();
      let result = num1 - num2;

      result = utilities.fixJavascriptIssueWithTwoDecimals(result);
      calculatorPage.subtractTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('subtract', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} - ${num2} =`);
    }
  );

  it(
    '[S-06] When I subtract a negative and a positive decimal number then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'subtraction'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateFloatNumber() * -1;
      let num2 = utilities.generateFloatNumber();
      let result = num1 - num2;

      result = utilities.fixJavascriptIssueWithTwoDecimals(result);
      calculatorPage.subtractTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('subtract', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} - ${num2} =`);
    }
  );

  it(
    '[S-07] When I subtract zero to a positive decimal number then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'subtraction'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateFloatNumber();
      let num2 = 0;
      let result = num1 - num2;

      result = utilities.fixJavascriptIssueWithTwoDecimals(result);
      calculatorPage.subtractTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('subtract', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} - ${num2} =`);
    }
  );

  it(
    '[S-08] When I subtract zero to a negative decimal number then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'subtraction'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateFloatNumber() * -1;
      let num2 = 0;
      let result = num1 - num2;

      result = utilities.fixJavascriptIssueWithTwoDecimals(result);
      calculatorPage.subtractTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('subtract', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} - ${num2} =`);
    }
  );

  //Other tests cases related to addition
  it(
    '[S-09] When I subtract a whole number and a decimal number then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'subtraction'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateWholeNumber();
      let num2 = utilities.generateFloatNumber();
      let result = num1 - num2;

      result = utilities.fixJavascriptIssueWithTwoDecimals(result);
      calculatorPage.subtractTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('subtract', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} - ${num2} =`);
    }
  );

  it(
    '[S-10] When I have a result from a previous calculation, then I want to subtract another number, see the operation above the result, and the result in the calculator screen',
    { tags: ['smoke', 'regression', 'subtraction'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();
      let num1 = utilities.generateWholeNumber();
      let num2 = utilities.generateFloatNumber();
      let num3 = utilities.generateWholeNumber();

      //First calculation to get the first answer
      let result = num1 - num2;
      calculatorPage.subtractTwoNumbers(num1, num2);
      result = utilities.fixJavascriptIssueWithTwoDecimals(result);
      utilities.printGeneratedValuesInTerminal('subtract', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();

      //Second calculation to use the value generated before
      let newResult = result - num3;
      newResult = utilities.fixJavascriptIssueWithTwoDecimals(newResult);
      calculatorPage.clickMinusButton();
      calculatorPage.enterValueCalculatorScreen(num3);
      calculatorPage.clickEqualButton();

      utilities.printGeneratedValuesInTerminal(
        'subtract',
        result,
        num3,
        newResult
      );
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(newResult);
      calculatorPage.compareEnteredOperation(`${result} - ${num3} =`);
    }
  );
});
