import { RoutingexPage } from './app.po';

describe('routingex App', function() {
  let page: RoutingexPage;

  beforeEach(() => {
    page = new RoutingexPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
