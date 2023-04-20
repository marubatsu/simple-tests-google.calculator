/// <reference types="cypress" />
import { Utilities } from '../utilities/utilities';

const CALCULATOR_SCREEN = 'span[jsname="VssY5c"]';
const ANSWER_SCREEN = 'span[jsname="ubtiRe"]';

const ZERO_BUTTON = 'div[jsname="bkEvMb"]';
const ONE_BUTTON = 'div[jsname="N10B9"]';
const TWO_BUTTON = 'div[jsname="lVjWed"]';
const THREE_BUTTON = 'div[jsname="KN1kY"]';
const FOUR_BUTTON = 'div[jsname="xAP7E"]';
const FIVE_BUTTON = 'div[jsname="Ax5wH"]';
const SIX_BUTTON = 'div[jsname="abcgof"]';
const SEVEN_BUTTON = 'div[jsname="rk7bOd"]';
const EIGHT_BUTTON = 'div[jsname="T7PMFe"]';
const NINE_BUTTON = 'div[jsname="XoxYJ"]';

const PLUS_BUTTON = 'div[jsname="XSr6wc"]';
const MINUS_BUTTON = 'div[jsname="pPHzQc"]';
const MULTIPLICATION_BUTTON = 'div[jsname="YovRWb"]';
const DIVISION_BUTTON = 'div[jsname="WxTTNd"]';
const DECIMAL_BUTTON = 'div[jsname="YrdHyf"]';

const EQUAL_BUTTON = 'div[jsname="Pt8tGc"]';
const AC_BUTTON = 'div[jsname="SLn8gc"]';
const CE_BUTTON = 'div[jsname="H7sWPd"]';

export class CalculatorPage {
  clickZeroButton() {
    cy.get(ZERO_BUTTON).click();
  }

  clickOneButton() {
    cy.get(ONE_BUTTON).click();
  }

  clickTwoButton() {
    cy.get(TWO_BUTTON).click();
  }

  clickThreeButton() {
    cy.get(THREE_BUTTON).click();
  }

  clickFourButton() {
    cy.get(FOUR_BUTTON).click();
  }

  clickFiveButton() {
    cy.get(FIVE_BUTTON).click();
  }

  clickSixButton() {
    cy.get(SIX_BUTTON).click();
  }

  clickSevenButton() {
    cy.get(SEVEN_BUTTON).click();
  }

  clickEightButton() {
    cy.get(EIGHT_BUTTON).click();
  }

  clickNineButton() {
    cy.get(NINE_BUTTON).click();
  }

  clickPlusButton() {
    cy.get(PLUS_BUTTON).click();
  }

  clickMinusButton() {
    cy.get(MINUS_BUTTON).click();
  }

  clickMultiplicationButton() {
    cy.get(MULTIPLICATION_BUTTON).click();
  }

  clickDivisionButton() {
    cy.get(DIVISION_BUTTON).click();
  }

  clickEqualButton() {
    cy.get(EQUAL_BUTTON).click();
  }

  clickDecimalButton() {
    cy.get(DECIMAL_BUTTON).click();
  }

  clickACButton() {
    cy.get(AC_BUTTON).click();
  }

  clickCEButton() {
    cy.get(CE_BUTTON).click();
  }

  enterValueCalculatorScreen(num) {
    cy.get(CALCULATOR_SCREEN).type(num);
  }

  //Assertions
  compareValueCalculatorScreen(expectedValue) {
    cy.get(CALCULATOR_SCREEN).should('have.text', expectedValue);
  }

  comparePartialValueCalculatorScreen(expectedValue) {
    cy.get(CALCULATOR_SCREEN).should('include.text', expectedValue);
  }

  compareAnsFromPreviousResult(expectedValue) {
    cy.get(ANSWER_SCREEN).should('have.text', 'Ans = ' + expectedValue);
  }

  compareEnteredOperation(expectedValue) {
    cy.get(ANSWER_SCREEN).should('have.text', expectedValue);
  }

  //Math Operations
  addTwoNumbers(num1, num2) {
    cy.get(CALCULATOR_SCREEN).type(num1);
    cy.get(PLUS_BUTTON).click();
    cy.get(CALCULATOR_SCREEN).type(num2);
    cy.get(EQUAL_BUTTON).click();
  }

  subtractTwoNumbers(num1, num2) {
    cy.get(CALCULATOR_SCREEN).type(num1);
    cy.get(MINUS_BUTTON).click();
    cy.get(CALCULATOR_SCREEN).type(num2);
    cy.get(EQUAL_BUTTON).click();
  }

  multiplyTwoNumbers(num1, num2) {
    cy.get(CALCULATOR_SCREEN).type(num1);
    cy.get(MULTIPLICATION_BUTTON).click();
    cy.get(CALCULATOR_SCREEN).type(num2);
    cy.get(EQUAL_BUTTON).click();
  }

  divideTwoNumbers(num1, num2) {
    cy.get(CALCULATOR_SCREEN).type(num1);
    cy.get(DIVISION_BUTTON).click();
    cy.get(CALCULATOR_SCREEN).type(num2);
    cy.get(EQUAL_BUTTON).click();
  }

  //Other functions
  enterWholeNumber() {
    const utilities = new Utilities();
    let randomNumber = utilities.generateWholeNumber();
    cy.get(CALCULATOR_SCREEN).type(randomNumber);
  }

  enterFloatNumber() {
    const utilities = new Utilities();
    let randomNumber = utilities.generateFloatNumber();
    cy.get(CALCULATOR_SCREEN).type(randomNumber);
  }

  checkDisplayedClearButton(text) {
    this.printAttributeFromAnObject(
      CE_BUTTON,
      'style',
      '      Style attribute for CE button: '
    );

    this.printAttributeFromAnObject(
      AC_BUTTON,
      'style',
      '      Style attribute for AC button: '
    );

    if (text == 'CE') {
      cy.get(CE_BUTTON).should('be.visible');
      cy.get(AC_BUTTON).should('not.be.visible');
    } else if (value == 'AC') {
      cy.get(CE_BUTTON).should('not.be.visible');
      cy.get(AC_BUTTON).should('be.visible');
    }
  }

  //Print something in terminal only
  printValueFromCalculatorScreenInTerminal() {
    cy.get(CALCULATOR_SCREEN).then(function ($elem) {
      cy.task(
        'log',
        '      Value from Google calculator screen: ' + $elem.text()
      );
    });
  }

  printValueFromPreviousResultInTerminal() {
    cy.get(ANSWER_SCREEN).then(function ($elem) {
      cy.task(
        'log',
        '      Values entered previously in Google calculator screen: ' +
          $elem.text()
      );
    });
  }

  printAttributeFromAnObject(element, attribute, msg) {
    cy.get(element).then(function ($elem) {
      cy.task('log', msg + $elem.attr(attribute));
    });
  }
}
