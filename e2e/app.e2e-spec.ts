import { PrimeBugDemoPage } from './app.po';

describe('prime-bug-demo App', function() {
  let page: PrimeBugDemoPage;

  beforeEach(() => {
    page = new PrimeBugDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
