import { Ng2MessageDialogPage } from './app.po';

describe('ng2-message-dialog App', () => {
  let page: Ng2MessageDialogPage;

  beforeEach(() => {
    page = new Ng2MessageDialogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
