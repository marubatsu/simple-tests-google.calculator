/// <reference types="cypress" />

import { SearchPage } from '../page_objects/search_page';
import { CalculatorPage } from '../page_objects/calculator_page';
import { Utilities } from '../utilities/utilities';

describe('[Addition] Given I am in Google Calculator page.', () => {
  beforeEach('', () => {
    cy.visit('/');
    const searchPage = new SearchPage();
    searchPage.searchCalculator();
  });

  //These test cases are for whole numbers
  it(
    '[A-01] When I add 2 positive whole numbers then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['smoke', 'regression', 'addition'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateWholeNumber();
      let num2 = utilities.generateWholeNumber();
      let result = num1 + num2;
      calculatorPage.addTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('addition', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} + ${num2} =`);
    }
  );

  it(
    '[A-02] When I add 2 negative whole numbers then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'addition'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateWholeNumber() * -1;
      let num2 = utilities.generateWholeNumber() * -1;
      let result = num1 + num2;
      calculatorPage.addTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('addition', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} - ${num2 * -1} =`); //because calculator changes + to - for second negative numbers
    }
  );

  it(
    '[A-03] When I add a positive and a negative whole number then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'addition'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateWholeNumber();
      let num2 = utilities.generateWholeNumber() * -1;
      let result = num1 + num2;
      calculatorPage.addTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('addition', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} - ${num2 * -1} =`); //because calculator changes + to - for second negative numbers
    }
  );

  it(
    '[A-04] When I add a negative and a positive whole number then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'addition'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateWholeNumber() * -1;
      let num2 = utilities.generateWholeNumber();
      let result = num1 + num2;
      calculatorPage.addTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('addition', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} + ${num2} =`);
    }
  );

  it(
    '[A-05] When I add zero to a positive whole number then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'addition'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateWholeNumber();
      let num2 = 0;
      let result = num1 + num2;
      calculatorPage.addTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('addition', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} + ${num2} =`);
    }
  );

  it(
    '[A-06] When I add zero to a negative whole number then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'addition'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateWholeNumber() * -1;
      let num2 = 0;
      let result = num1 + num2;
      calculatorPage.addTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('addition', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} + ${num2} =`);
    }
  );

  //These test cases are for decimal numbers
  it(
    '[A-07] When I add 2 positive decimal numbers then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'addition'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateFloatNumber();
      let num2 = utilities.generateFloatNumber();
      let result = num1 + num2;
      calculatorPage.addTwoNumbers(num1, num2);
      result = utilities.fixJavascriptIssueWithTwoDecimals(result);
      utilities.printGeneratedValuesInTerminal('addition', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} + ${num2} =`);
    }
  );

  it(
    '[A-08] When I add 2 negative decimal numbers then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'addition'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateFloatNumber() * -1;
      let num2 = utilities.generateFloatNumber() * -1;
      let result = num1 + num2;
      calculatorPage.addTwoNumbers(num1, num2);
      result = utilities.fixJavascriptIssueWithTwoDecimals(result);
      utilities.printGeneratedValuesInTerminal('addition', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} - ${num2 * -1} =`); //because calculator changes + to - for second negative numbers
    }
  );

  it(
    '[A-09] When I add a positive and a negative decimal number then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'addition'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateFloatNumber();
      let num2 = utilities.generateFloatNumber() * -1;
      let result = num1 + num2;
      calculatorPage.addTwoNumbers(num1, num2);
      result = utilities.fixJavascriptIssueWithTwoDecimals(result);
      utilities.printGeneratedValuesInTerminal('addition', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} - ${num2 * -1} =`); //because calculator changes + to - for second negative numbers
    }
  );

  it(
    '[A-10] When I add a negative and a positive decimal number then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'addition'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateFloatNumber() * -1;
      let num2 = utilities.generateFloatNumber();
      let result = num1 + num2;
      calculatorPage.addTwoNumbers(num1, num2);
      result = utilities.fixJavascriptIssueWithTwoDecimals(result);
      utilities.printGeneratedValuesInTerminal('addition', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} + ${num2} =`);
    }
  );

  it(
    '[A-11] When I add zero to a positive decimal number then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'addition'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateFloatNumber();
      let num2 = 0;
      let result = num1 + num2;
      calculatorPage.addTwoNumbers(num1, num2);
      result = utilities.fixJavascriptIssueWithTwoDecimals(result);
      utilities.printGeneratedValuesInTerminal('addition', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} + ${num2} =`);
    }
  );

  it(
    '[A-12] When I add zero to a negative decimal number then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'addition'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateFloatNumber() * -1;
      let num2 = 0;
      let result = num1 + num2;
      calculatorPage.addTwoNumbers(num1, num2);
      result = utilities.fixJavascriptIssueWithTwoDecimals(result);
      utilities.printGeneratedValuesInTerminal('addition', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} + ${num2} =`);
    }
  );

  //Other tests cases related to addition
  it(
    '[A-13] When I add a whole number and a decimal number then I want to see the operation above the result, and the result in the calculator screen',
    { tags: ['regression', 'addition'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateWholeNumber();
      let num2 = utilities.generateFloatNumber();
      let result = num1 + num2;
      calculatorPage.addTwoNumbers(num1, num2);
      result = utilities.fixJavascriptIssueWithTwoDecimals(result);
      utilities.printGeneratedValuesInTerminal('addition', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(result);
      calculatorPage.compareEnteredOperation(`${num1} + ${num2} =`);
    }
  );

  it(
    '[A-14] When I have a result from a previous calculation, then I want to add another number, see the operation above the result, and the result in the calculator screen',
    { tags: ['smoke', 'regression', 'addition'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();
      let num1 = utilities.generateWholeNumber();
      let num2 = utilities.generateFloatNumber();
      let num3 = utilities.generateWholeNumber();

      //First calculation to get the first answer
      let result = num1 + num2;
      calculatorPage.addTwoNumbers(num1, num2);
      result = utilities.fixJavascriptIssueWithTwoDecimals(result);
      utilities.printGeneratedValuesInTerminal('addition', num1, num2, result);
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();

      //Second calculation to use the value generated before
      let newResult = result + num3;
      newResult = utilities.fixJavascriptIssueWithTwoDecimals(newResult);
      calculatorPage.clickPlusButton();
      calculatorPage.enterValueCalculatorScreen(num3);
      calculatorPage.clickEqualButton();

      utilities.printGeneratedValuesInTerminal(
        'addition',
        result,
        num3,
        newResult
      );
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(newResult);
      calculatorPage.compareEnteredOperation(`${result} + ${num3} =`);
    }
  );
});
