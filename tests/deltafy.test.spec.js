import { test, expect } from '@playwright/test';
import { clickMenuItem, checkurl, clickButton, validateInputFeilds } from '../pages/customfunction.page';

test.describe('Validate the Header section', () => {
      test('Validate Navigation Menu', async ({ page }) => {
            await page.goto('https://www.deltafyqa.com/');

            const menuItems = [
                  { name: 'Home', url: '' },
                  { name: 'Services', url: 'services' },
                  { name: 'About us', url: 'about' },
                  { name: 'Contact Us', url: 'contactus' },
                  { name: 'Privacy Policy', url: 'privacy-policy' },
            ];

            for (const item of menuItems) {
                  await clickMenuItem(page, item.name);
            }
      });
})


test.describe('Validate the Home page', () => {
      test.beforeEach(async ({ page }) => {
            await page.goto('https://www.deltafyqa.com/');
      })

      test('Validate the Action button', async ({ page }) => {
            await clickButton(page, '.entry-content .pagelayer-btn-text', 'Take the next step');
            await checkurl(page, 'services');
      })
})


test.describe('Validate the Services page', () => {
      test.beforeEach(async ({ page }) => {
            await page.goto('https://www.deltafyqa.com/');

            await clickMenuItem(page, 'Services');
            await checkurl(page, 'services');
      })

      test('Validate the form in Services page', async ({ page }) => {
            await validateInputFeilds(page, 'Shriganth RA', 'div.entry-content input[name="name"]');
            await validateInputFeilds(page, 'shriganth@gmail.com', 'div.entry-content input[name="email"]');
            await validateInputFeilds(page, 'E-commerce', 'div.entry-content input[name="business"]');
            await validateInputFeilds(page, 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', 'div.entry-content textarea[name="about"]');

            await clickButton(page, '.entry-content .pagelayer-btn-text', 'Submit');
      })
})


test.describe('Validate the About Us page', () => {
      test.beforeEach(async ({ page }) => {
            await page.goto('https://www.deltafyqa.com/');

            await clickMenuItem(page, 'About us');
            await checkurl(page, 'about');
      })

      test('Validate the Learn more button', async ({ page }) => {
            await clickButton(page, '.entry-content .pagelayer-btn-text', 'LEARN MORE');
            await checkurl(page, 'services');
      })

      test('Validate the Take the next step button', async ({ page }) => {
            await clickButton(page, '.entry-content .pagelayer-btn-text', 'take the next step');
            await checkurl(page, 'contactus');
      })

      test('Validate the Explore solution button', async ({ page }) => {
            await clickButton(page, '.entry-content .pagelayer-btn-text', 'explore solution');
            await checkurl(page, 'services');
      })
})


test.describe('Validate the Contact Us page', () => {
      test.beforeEach(async ({page}) => {
            await page.goto('https://www.deltafyqa.com/');

            await clickMenuItem(page, 'Contact Us');
            await checkurl(page, 'contactus');
      })

      test('Validate the contact form', async ({page}) => {
            await validateInputFeilds(page, 'Shriganth RA', '.entry-content input[name="name"]');
            await validateInputFeilds(page, '9257391022', '.entry-content input[name="phone"]');
            await validateInputFeilds(page, 'shriganth@gmail.com', '.entry-content input[name="email"]');

            await validateInputFeilds(page, 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', '.entry-content textarea[name="message"]');

            await clickButton(page, '.entry-content .pagelayer-btn-text', 'send a message');
      })
})


test.describe('Validate the footer section', () => {
      test.beforeEach(async ({ page }) => {
            await page.goto('https://www.deltafyqa.com/');
      })

      test('Validate the email feild in the footer section', async ({ page }) => {
            await validateInputFeilds(page, 'shriganth@gmail.com', 'footer.pagelayer-footer input[name="email"]');
            await clickButton(page, 'footer.pagelayer-footer .pagelayer-btn-text', 'Subscribe');
      })
})

