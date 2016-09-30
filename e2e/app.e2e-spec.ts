import { CvPage } from './app.po';

describe('CV App', function() {
  let page: CvPage;

  beforeEach(() => {
    page = new CvPage();
  });

  it('should display my CV', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Henrik Lau Eriksson');
  });
});
