const { test, expect } = require('@playwright/test');
import { EvincedSDK, setUploadToPlatformConfig } from "@evinced/js-playwright-sdk";

test.describe('Andrew Test', () => {
  let evincedService;
  let filename;
  let filepath = "test-results/";
  test.beforeAll(() => {
    setUploadToPlatformConfig({ enableUploadToPlatform: true });
  })
  test.beforeEach(async ({page}, testInfo)=>{
    evincedService = new EvincedSDK(page);
    evincedService.testRunInfo.addLabel({
      testName: testInfo.title,
      testFile: testInfo.file,
      environment: 'Development'
    })
    await evincedService.evStart();
  })

  test.afterEach(async ()=>{
    const issues = await evincedService.evStop({
      enableScreenshots: true,
    });
    filepath = filepath.concat(filename,".html");
    evincedService.evSaveFile(issues, 'html', filepath);
  })

  test('Main Dropdown Test', async ({ page }) => {
    await page.goto("https://demo.evinced.com");

    const BASE_FORM_SELECTOR = `#gatsby-focus-wrapper > main > div.wrapper-banner > div.filter-container`;
    const SELECT_HOME_DROPDOWN = `${BASE_FORM_SELECTOR} > div:nth-child(1) > div > div.dropdown.line`;
    const SELECT_WHERE_DROPDOWN = `${BASE_FORM_SELECTOR} > div:nth-child(2) > div > div.dropdown.line`;
    const TINY_HOME_OPTION = `${BASE_FORM_SELECTOR} > div:nth-child(1) > div > ul > li:nth-child(2)`;
    const EAST_COST_OPTION = `${BASE_FORM_SELECTOR} > div:nth-child(2) > div > ul > li:nth-child(3)`;

    await page.locator(SELECT_HOME_DROPDOWN).click();
    await page.locator(TINY_HOME_OPTION).click();
    await page.locator(SELECT_WHERE_DROPDOWN).click();
    await page.locator(EAST_COST_OPTION).click();

    filename = "main";
  });

  test('Footer Test', async ({ page }) => {
    await page.goto("https://demo.evinced.com");

    const FOOTER_SELECTOR = `#gatsby-focus-wrapper > footer`;
    const TWITTER = `${FOOTER_SELECTOR} > div:nth-child(1) > a:nth-child(1)`;
    const YOUTUBE = `${FOOTER_SELECTOR} > div:nth-child(1) > a:nth-child(2)`;
    const FACEBOOK = `${FOOTER_SELECTOR} > div:nth-child(1) > a:nth-child(3)`;
    const TRVL = `${FOOTER_SELECTOR} > div:nth-child(2) > a:nth-child(1)`;

    await page.locator(TWITTER).click();
    await page.locator(YOUTUBE).click();
    await page.locator(FACEBOOK).click();
    await page.locator(TRVL).click();

    filename = "footer";

  });

  test('Subscribe Test', async ({ page }) => {
    await page.goto("https://demo.evinced.com");

    const SEND_SELECTOR = `#gatsby-focus-wrapper > footer > form > input:nth-child(2)`;

    await page.locator(SEND_SELECTOR).click();

    filename = "subscribe";

  });
})