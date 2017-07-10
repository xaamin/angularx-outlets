import { RouterOutletsPage } from './app.po';

describe('router-outlets App', () => {
  let page: RouterOutletsPage;

  beforeEach(() => {
    page = new RouterOutletsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
