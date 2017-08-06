import { MyAppDreamPage } from './app.po';

describe('my-app-dream App', () => {
  let page: MyAppDreamPage;

  beforeEach(() => {
    page = new MyAppDreamPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
