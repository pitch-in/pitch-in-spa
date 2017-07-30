import { browser, by, element } from 'protractor';

export class PitchInPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pi-root h1')).getText();
  }
}
