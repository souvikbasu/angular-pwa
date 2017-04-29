import { AngularPwaPage } from './app.po';

describe('angular-pwa App', () => {
  let page: AngularPwaPage;

  beforeEach(() => {
    page = new AngularPwaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
