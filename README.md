# Testing Google Calculator with Cypress

Automated tests to practice Cypress, using the Google Calculator.

## Language

- Javascript

## Dependencies

The following dependencies were added to package.json:
- Node.js
- cypress
- cypress-grep: to use grepTags like smoke and regression.
- mocha
- mochawesome-merge
- cypress-mochawesome-reporter: to generate a report in HTML.
- decimals: Because Javascript has problems with decimal numbers. (https://github.com/MikeMcl/decimal.js)
- prettier: to format the code automatically. Config in .prettierc.json.

## How to install dependencies

Navigate to the project (terminal in Windows or Visual Studio) and execute the following command:

```
npm install
```

## Structure

```
TestingGoogleCalculator
├─ cypress
│  ├─ e2e
│  │  ├─ addition_tests.cy.js
│  │  ├─ calculator_screen_tests.cy.js
│  │  ├─ division_tests.cy.js
│  │  ├─ multiplication_tests.cy.js
│  │  └─ subtraction_tests.cy.js
│  ├─ fixtures
│  ├─ page_objects
│  │  ├─ calculator_page.js
│  │  └─ search_page.js
│  ├─ reports
│  │  └─ html
│  │     └─ index.html
│  ├─ screenshots
│  ├─ support
│  │  ├─ commands.js
│  │  └─ e2e.js
│  ├─ utilities
│  │  └─ utilities.js     // Any other code that is not a test case or page object
│  └─ videos
├─ node_modules
├─ .gitignore
├─ .prettierc.json
├─ cypress.config.js
├─ package-lock.json
├─ package.json
└─ README.md

```

## How to execute the tests

Using the cypress app:

```
npx cypress open
```

To execute all the test cases (terminal only):

```
npx cypress run --env grepTags=regression
```

To execute a smoke test (terminal only):

```
npx cypress run --env grepTags=smoke
```

To execute test cases for a specific feature (terminal only):

```
npx cypress run --env grepTags="regression+screen"
npx cypress run --env grepTags="regression+addition"
npx cypress run --env grepTags="regression+subtraction"
npx cypress run --env grepTags="regression+multiplication"
npx cypress run --env grepTags="regression+division"
```

## Reports

A HTML report will be saved in cypress/reports folder, with evidences when a test case fails. The report will be deleted in the next execution, so the previous results are not saved.

## Videos

The videos with the last execution will be saved in cypress/videos folder. They will be deleted in the next execution.

## Test Cases

### Calculator Screen

- [CS-01] When I click the one button then I want to see 1 in the calculator screen
- [CS-02] When I click the two button then I want to see 2 in the calculator screen
- [CS-03] When I click the three button then I want to see 3 in the calculator screen
- [CS-04] When I click the four button then I want to see 4 in the calculator screen
- [CS-05] When I click the five button then I want to see 5 in the calculator screen
- [CS-06] When I click the six button then I want to see 6 in the calculator screen
- [CS-07] When I click the seven button then I want to see 7 in the calculator screen
- [CS-08] When I click the eight button then I want to see 8 in the calculator screen
- [CS-09] When I click the nine button then I want to see 9 in the calculator screen
- [CS-10] When I click the zero button then I want to see 0 in the calculator screen
- [CS-11] When I click the plus button then I want to see + in the calculator screen
- [CS-12] When I click the minus button then I want to see - in the calculator screen
- [CS-13] When I click the multiplication button then I want to see × in the calculator screen
- [CS-14] When I click the division button then I want to see ÷ in the calculator screen
- [CS-15] When I click the decimal point button then I want to see . in the calculator screen
- [CS-16] When I enter a value I want to see that AC button changes to CE
- [CS-17] When I enter several values and click CE button once then I want to see all the entered values except the last one
- [CS-18] When I enter X values and click CE button the same X times then I want to see 0 in the calculator screen
- [CS-19] When I do an operation and click AC button then I want to see 0 in the calculator screen, the answer to the last operation above the result screen and CE button
- [CS-20] /!\ THIS TEST WILL FAIL ON PURPOSE /!\

### Addition

- [A-01] When I add 2 positive whole numbers then I want to see the operation above the result, and the result in the calculator screen
- [A-02] When I add 2 negative whole numbers then I want to see the operation above the result, and the result in the calculator screen
- [A-03] When I add a positive and a negative whole number then I want to see the operation above the result, and the result in the calculator screen
- [A-04] When I add a negative and a positive whole number then I want to see the operation above the result, and the result in the calculator screen
- [A-05] When I add zero to a positive whole number then I want to see the operation above the result, and the result in the calculator screen
- [A-06] When I add zero to a negative whole number then I want to see the operation above the result, and the result in the calculator screen
- [A-07] When I add 2 positive decimal numbers then I want to see the operation above the result, and the result in the calculator screen
- [A-08] When I add 2 negative decimal numbers then I want to see the operation above the result, and the result in the calculator screen
- [A-09] When I add a positive and a negative decimal number then I want to see the operation above the result, and the result in the calculator screen
- [A-10] When I add a negative and a positive decimal number then I want to see the operation above the result, and the result in the calculator screen
- [A-11] When I add zero to a positive decimal number then I want to see the operation above the result, and the result in the calculator screen
- [A-12] When I add zero to a negative decimal number then I want to see the operation above the result, and the result in the calculator screen
- [A-13] When I add a whole number and a decimal number then I want to see the operation above the result, and the result in the calculator screen
- [A-14] When I have a result from a previous calculation, then I want to add another number, see the operation above the result, and the result in the calculator screen

### Subtraction

- [S-01] When I subtract 2 positive whole numbers then I want to see the operation above the result, and the result in the calculator screen
- [S-02] When I subtract a negative and a positive whole number then I want to see the operation above the result, and the result in the calculator screen
- [S-03] When I subtract zero to a positive whole number then I want to see the operation above the result, and the result in the calculator screen
- [S-04] When I subtract zero to a negative whole number then I want to see the operation above the result, and the result in the calculator screen
- [S-05] When I subtract 2 positive decimal numbers then I want to see the operation above the result, and the result in the calculator screen
- [S-06] When I subtract a negative and a positive decimal number then I want to see the operation above the result, and the result in the calculator screen
- [S-07] When I subtract zero to a positive decimal number then I want to see the operation above the result, and the result in the calculator screen
- [S-08] When I subtract zero to a negative decimal number then I want to see the operation above the result, and the result in the calculator screen
- [S-09] When I subtract a whole number and a decimal number then I want to see the operation above the result, and the result in the calculator screen
- [S-10] When I have a result from a previous calculation, then I want to subtract another number, see the operation above the result, and the result in the calculator screen

### Multiplication

- [M-01] When I multiply 2 positive whole numbers then I want to see the operation above the result, and the result in the calculator screen
- [M-02] When I multiply 2 negative whole numbers then I want to see the result in the calculator screen
- [M-03] When I multiply a positive and a negative whole number then I want to see the result in the calculator screen
- [M-04] When I multiply a negative and a positive whole number then I want to see the result in the calculator screen
- [M-05] When I multiply by zero a positive whole number then I want to see 0 in the calculator screen
- [M-06] When I multiply by zero a negative whole number then I want to see 0 in the calculator screen
- [M-07] When I multiply 2 positive decimal numbers then I want to see the operation above the result, and the result in the calculator screen
- [M-08] When I multiply 2 negative decimal numbers then I want to see the operation above the result, and the result in the calculator screen
- [M-09] When I multiply a positive and a negative decimal number then I want to see the operation above the result, and the result in the calculator screen
- [M-10] When I multiply a negative and a positive decimal number then I want to see the operation above the result, and the result in the calculator screen
- [M-11] When I multiply by zero a positive decimal number then I want to see the operation above the result, and 0 in the calculator screen
- [M-12] When I multiply by zero a negative decimal number then I want to see the operation above the result, and 0 in the calculator screen
- [M-13] When I multiply a whole number and a decimal number then I want to see the operation above the result, and the result in the calculator screen

### Division

- [D-01] When I divide 2 positive whole numbers then I want to see the operation above the result, and the result in the calculator screen
- [D-02] When I divide 2 negative whole numbers then I want to see the operation above the result, and the result in the calculator screen
- [D-03] When I divide a positive and a negative whole number then I want to see the operation above the result, and the result in the calculator screen
- [D-04] When I divide a negative and a positive whole number then I want to see the operation above the result, and the result in the calculator screen
- [D-05] When I divide by zero a positive whole number then I want to see the operation above the result, and Infinity in the calculator screen
- [D-06] When I divide by zero a negative whole number then then I want to see the operation above the result, and -Infinity in the calculator screen
- [D-07] When I divide zero by a positive whole number then I want to see the operation above the result, and 0 in the calculator screen
- [D-08] When I divide zero by a negative whole number then I want to see the operation above the result, and 0 in the calculator screen
- [D-09] When I divide 2 positive decimal numbers then I want to see the operation above the result, and the result in the calculator screen
- [D-10] When I divide 2 negative decimal numbers then I want to see the operation above the result, and the result in the calculator screen
- [D-11] When I divide a positive and a negative decimal number then I want to see the operation above the result, and the result in the calculator screen
- [D-12] When I divide a negative and a positive decimal number then I want to see the operation above the result, and the result in the calculator screen
- [D-13] When I divide by zero a positive decimal number then I want to see the operation above the result, and Infinity in the calculator screen
- [D-14] When I divide by zero a negative decimal number then I want to see the operation above the result, and -Infinity in the calculator screen
- [D-15] When I divide zero by a positive decimal number then I want to see the operation above the result, and 0 in the calculator screen
- [D-16] When I divide zero by a negative decimal number then I want to see the operation above the result, and 0 in the calculator screen
- [D-17] When I divide a whole number and a decimal number then I want to see the operation above the result, and the result in the calculator screen
