import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getNameOfFirst() {
    return element(by.css('#user-0 #name')).getText();
  }

  setUsernameToFilter(username: string) {
    element(by.id('username')).sendKeys(username);
  }

  clickFilter() {
    element(by.id('filter')).click();
  }
}
