import { PitchInPage } from './app.po';

describe('pitch-in App', () => {
  let page: PitchInPage;

  beforeEach(() => {
    page = new PitchInPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
