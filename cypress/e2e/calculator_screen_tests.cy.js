/// <reference types="cypress" />

import { SearchPage } from '../page_objects/search_page';
import { CalculatorPage } from '../page_objects/calculator_page';
import { Utilities } from '../utilities/utilities';

describe('[Calculator Screen] Given I am in the Google Calculator page.', () => {
  beforeEach('', () => {
    cy.visit('/');
    const searchPage = new SearchPage();
    searchPage.searchCalculator();
  });

  it(
    '[CS-01] When I click the one button then I want to see 1 in the calculator screen',
    { tags: ['smoke', 'regression', 'screen'] },
    () => {
      const calculatorPage = new CalculatorPage();
      calculatorPage.clickOneButton();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen('1');
    }
  );

  it(
    '[CS-02] When I click the two button then I want to see 2 in the calculator screen',
    { tags: ['regression', 'screen'] },
    () => {
      const calculatorPage = new CalculatorPage();
      calculatorPage.clickTwoButton();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen('2');
    }
  );

  it(
    '[CS-03] When I click the three button then I want to see 3 in the calculator screen',
    { tags: ['regression', 'screen'] },
    () => {
      const calculatorPage = new CalculatorPage();
      calculatorPage.clickThreeButton();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen('3');
    }
  );

  it(
    '[CS-04] When I click the four button then I want to see 4 in the calculator screen',
    { tags: ['regression', 'screen'] },
    () => {
      const calculatorPage = new CalculatorPage();
      calculatorPage.clickFourButton();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen('4');
    }
  );

  it(
    '[CS-05] When I click the five button then I want to see 5 in the calculator screen',
    { tags: ['regression', 'screen'] },
    () => {
      const calculatorPage = new CalculatorPage();
      calculatorPage.clickFiveButton();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen('5');
    }
  );

  it(
    '[CS-06] When I click the six button then I want to see 6 in the calculator screen',
    { tags: ['regression', 'screen'] },
    () => {
      const calculatorPage = new CalculatorPage();
      calculatorPage.clickSixButton();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen('6');
    }
  );

  it(
    '[CS-07] When I click the seven button then I want to see 7 in the calculator screen',
    { tags: ['regression', 'screen'] },
    () => {
      const calculatorPage = new CalculatorPage();
      calculatorPage.clickSevenButton();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen('7');
    }
  );

  it(
    '[CS-08] When I click the eight button then I want to see 8 in the calculator screen',
    { tags: ['regression', 'screen'] },
    () => {
      const calculatorPage = new CalculatorPage();
      calculatorPage.clickEightButton();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen('8');
    }
  );

  it(
    '[CS-09] When I click the nine button then I want to see 9 in the calculator screen',
    { tags: ['regression', 'screen'] },
    () => {
      const calculatorPage = new CalculatorPage();
      calculatorPage.clickNineButton();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen('9');
    }
  );

  it(
    '[CS-10] When I click the zero button then I want to see 0 in the calculator screen',
    { tags: ['regression', 'screen'] },
    () => {
      const calculatorPage = new CalculatorPage();
      calculatorPage.clickZeroButton();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen('0');
    }
  );

  it(
    '[CS-11] When I click the plus button then I want to see + in the calculator screen',
    { tags: ['regression', 'screen'] },
    () => {
      const calculatorPage = new CalculatorPage();
      calculatorPage.clickPlusButton();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.comparePartialValueCalculatorScreen('+');
    }
  );

  it(
    '[CS-12] When I click the minus button then I want to see - in the calculator screen',
    { tags: ['regression', 'screen'] },
    () => {
      const calculatorPage = new CalculatorPage();
      calculatorPage.clickMinusButton();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen('-');
    }
  );

  it(
    '[CS-13] When I click the multiplication button then I want to see × in the calculator screen',
    { tags: ['regression', 'screen'] },
    () => {
      const calculatorPage = new CalculatorPage();
      calculatorPage.clickMultiplicationButton();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.comparePartialValueCalculatorScreen('×');
    }
  );

  it(
    '[CS-14] When I click the division button then I want to see ÷ in the calculator screen',
    { tags: ['regression', 'screen'] },
    () => {
      const calculatorPage = new CalculatorPage();
      calculatorPage.clickDivisionButton();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.comparePartialValueCalculatorScreen('÷');
    }
  );

  it(
    '[CS-15] When I click the decimal point button then I want to see . in the calculator screen',
    { tags: ['regression', 'screen'] },
    () => {
      const calculatorPage = new CalculatorPage();
      calculatorPage.clickDecimalButton();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.comparePartialValueCalculatorScreen('.');
    }
  );

  it(
    '[CS-16] When I enter a value I want to see that AC button changes to CE',
    { tags: ['regression', 'screen'] },
    () => {
      const calculatorPage = new CalculatorPage();
      calculatorPage.clickOneButton();
      calculatorPage.checkDisplayedClearButton('CE');
    }
  );

  it(
    '[CS-17] When I enter several values and click CE button once then I want to see all the entered values except the last one',
    { tags: ['regression', 'screen'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();
      let times = utilities.generateWholeNumberFromOneToTen() + 1; //from 2 to 11
      let enteredValue = '';

      for (let i = 0; i <= times; i++) {
        calculatorPage.clickOneButton();
        enteredValue = enteredValue + '1';
      }

      calculatorPage.clickCEButton();
      utilities.printGeneratedValuesInTerminal('x', enteredValue, '', '');
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen(
        enteredValue.substring(0, enteredValue.length - 1)
      );
    }
  );

  it(
    '[CS-18] When I enter X values and click CE button the same X times then I want to see 0 in the calculator screen',
    { tags: ['regression', 'screen'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();
      let times = utilities.generateWholeNumberFromOneToTen() + 1; //from 2 to 11
      let enteredValue = '';

      for (let i = 0; i <= times; i++) {
        calculatorPage.clickOneButton();
        enteredValue = enteredValue + '1';
      }

      for (let i = 0; i <= times; i++) {
        calculatorPage.clickCEButton();
      }

      utilities.printGeneratedValuesInTerminal('x', enteredValue, '', '');
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen('0');
    }
  );

  it(
    '[CS-19] When I do an operation and click AC button then I want to see 0 in the calculator screen, the answer to the last operation above the result screen and CE button',
    { tags: ['smoke', 'regression', 'screen'] },
    () => {
      const calculatorPage = new CalculatorPage();
      const utilities = new Utilities();

      let num1 = utilities.generateWholeNumber();
      let num2 = utilities.generateWholeNumber();
      let result = num1 + num2;
      calculatorPage.addTwoNumbers(num1, num2);
      utilities.printGeneratedValuesInTerminal('addition', num1, num2, result);
      calculatorPage.clickACButton();
      calculatorPage.printValueFromPreviousResultInTerminal();
      calculatorPage.printValueFromCalculatorScreenInTerminal();
      calculatorPage.compareValueCalculatorScreen('0');
      calculatorPage.compareAnsFromPreviousResult(result);
      calculatorPage.checkDisplayedClearButton('CE');
    }
  );

  it(
    '[CS-20] /!\\ THIS TEST WILL FAIL ON PURPOSE /!\\ ',
    { tags: ['smoke', 'regression', 'screen'] },
    () => {
      const calculatorPage = new CalculatorPage();
      calculatorPage.compareValueCalculatorScreen(999999);
    }
  );
});
