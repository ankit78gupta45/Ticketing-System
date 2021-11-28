import { AppDashboard } from './app.po';

describe('Ticketing syste component', () => {
  let page: AppDashboard;
  const sleep = 300;

  page = new AppDashboard();
  const browser = page.getBrowser();
  browser.driver.manage().window().setSize(600, 800);
  browser.sleep(sleep);
  page.navigateTo();

});
