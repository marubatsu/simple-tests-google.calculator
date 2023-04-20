/// <reference types="cypress" />

const SEARCH_TEXT_FIELD = 'textarea[name="q"]';
const SEARCH_BUTTON = 'input[name="btnK"][role="button"]';
const CALCULATOR_TEXT = 'Calculator';

export class SearchPage {
  enterSearchText() {
    cy.get(SEARCH_TEXT_FIELD).type(CALCULATOR_TEXT);
  }

  clickSearchButton() {
    cy.get(SEARCH_BUTTON).first().click();
  }

  searchCalculator() {
    this.enterSearchText();
    this.clickSearchButton();
  }
}
