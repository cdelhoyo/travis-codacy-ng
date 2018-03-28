import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('travis-codacy-ng App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display name of first user', () => {
    page.navigateTo();
    expect(page.getNameOfFirst()).toEqual('Leanne Graham');
  });

  it('should filter', () => {
    page.navigateTo();
    page.setUsernameToFilter('Antonette');
    page.clickFilter();
    expect(page.getNameOfFirst()).toEqual('Ervin Howell');
  });

});
