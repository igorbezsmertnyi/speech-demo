import { SpeechDemoPage } from './app.po';

describe('speech-demo App', () => {
  let page: SpeechDemoPage;

  beforeEach(() => {
    page = new SpeechDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
