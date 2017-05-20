import { DistribuidoraPage } from './app.po';

describe('distribuidora App', () => {
  let page: DistribuidoraPage;

  beforeEach(() => {
    page = new DistribuidoraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
