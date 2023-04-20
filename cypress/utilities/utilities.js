import { Decimal } from 'decimal.js';

export class Utilities {
  generateWholeNumber() {
    return Math.round(Math.random() * 100);
  }

  generateWholeNumberFromOneToTen() {
    return Math.round(Math.random() * 10) + 1;
  }

  //To generate a random float number with 2 decimals
  generateFloatNumber() {
    return Math.round(Math.random() * 10000) / 100;
  }

  fixJavascriptIssueWithTwoDecimals(num) {
    return Math.round(num * 100) / 100;
  }

  multiplyDecimalNumbers(num1, num2) {
    let numDecimal1 = new Decimal(num1);
    let numDecimal2 = new Decimal(num2);
    let resultDecimal = numDecimal1.times(numDecimal2);
    return resultDecimal.toNumber();
  }

  divideDecimalNumbers(num1, num2) {
    num1 = num1.toString();
    num2 = num2.toString();
    let numDecimal1 = new Decimal(num1);
    let numDecimal2 = new Decimal(num2);

    if (num2 == 0 && num1 > 0) {
      return 'Infinity';
    } else if (num2 == 0 && num1 < 0) {
      return '-Infinity';
    }

    let resultDecimal = numDecimal1.dividedBy(numDecimal2);
    resultDecimal = resultDecimal.toFixed(11);
    return Number(resultDecimal);
  }

  printGeneratedValuesInTerminal(op, num1, num2, num3) {
    let message = '';
    switch (op) {
      case 'addition':
        message = `\n      Values generated for testing: ${num1} + ${num2} = ${num3}`;
        break;
      case 'subtract':
        message = `\n      Values generated for testing: ${num1} - ${num2} = ${num3}`;
        break;
      case 'multi':
        message = `\n      Values generated for testing: ${num1} x ${num2} = ${num3}`;
        break;
      case 'division':
        message = `\n      Values generated for testing: ${num1} ÷ ${num2} = ${num3}`;
        break;
      default:
        message = `\n      Values generated for testing: ${num1}, ${num2}, ${num3}`;
    }
    cy.task('log', message);
  }
}
