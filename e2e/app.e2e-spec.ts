import { JsonResponsePage } from './app.po';

describe('json-response App', () => {
  let page: JsonResponsePage;

  beforeEach(() => {
    page = new JsonResponsePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
