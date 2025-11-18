import { test, expect } from '@playwright/test'

test.describe('Testing a Playwright practice section', () => {
      test.beforeEach(async ({ page }) => {
            // Visit the page using url
            await page.goto('https://testautomationpractice.blogspot.com/');
            // Check the url of the website
            await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');

            // Click the PlaywrightPractice menu button
            await page.getByText('PlaywrightPractice').isVisible();
            await page.getByText('PlaywrightPractice').click();
      })

      test('Test by getByRole() Locators', async ({ page }) => {
            // Click the Primary action button
            const primary_button = page.getByRole('button', { name: 'Primary Action' });
            await primary_button.isVisible();   // Check the button is visible
            await primary_button.click();

            // Click the toggle button
            const toggle_button = page.getByRole('button', { name: 'Toggle Button' });
            await toggle_button.isVisible();    // Check the button is visible
            await toggle_button.click();

            // Enter the text in a input box
            const text_box = page.getByRole('textbox', { name: 'Username:' });
            await text_box.fill("Hello, I'm working with Playwright.");

            // Click the check box
            const check_box = page.getByRole('checkbox', { name: 'Accept terms' });
            await check_box.isVisible();
            await check_box.click();

            // Click the div with button role
            const div_btn = page.getByRole('button', { name: 'Div with button role' });
            await div_btn.isVisible();
            await div_btn.click();

            // Click the div button with important msg
            const imp_btn = page.getByRole('alert');
            await imp_btn.isVisible();
            await imp_btn.click();

      })


      test('Test by getByLabel() Locators', async ({ page }) => {
            // Click the input box and enter the email
            const email_input = page.getByLabel('Email Address:');
            await email_input.isVisible();
            await email_input.fill("shriganth@gmail.com");

            // Click the input box and enter the password
            const password_input = page.getByLabel('Password:');
            await password_input.isVisible();
            await password_input.fill("Shri@1234");

            // Click the input box and enter the age
            const age_input = page.getByLabel('Your Age:');
            await age_input.isVisible();
            await age_input.fill("22");

            // Select the shipping button
            const ship_method = page.getByLabel('Express');
            await ship_method.isVisible();
            await ship_method.click();
      })


      test('Test by getByPlaceholder() Locators', async ({ page }) => {
            // Click the input by placeholder and enter the name
            const full_name = page.getByPlaceholder('Enter your full name');
            await full_name.isVisible();
            await full_name.fill('Shriganth RA');

            // Click the input by placeholder and enter the phone number
            const phone_number = page.getByPlaceholder('Phone number (xxx-xxx-xxxx)');
            await phone_number.isVisible();
            await phone_number.fill('8003882464');

            // Click the input by placeholder and enter the message
            const message = page.getByPlaceholder('Type your message here...');
            await message.isVisible();
            await message.fill("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");

            // Click the input by placeholder and the enter the product name
            const search_feilds = page.getByPlaceholder('Search products...');
            await search_feilds.isVisible();
            await search_feilds.fill('Nike');

            // Click the search button
            const search_btn = page.getByPlaceholder('Search');
            await search_btn.isVisible();
            await search_btn.click();
      })


      test('Test by getByAltText() Locators', async({page}) => {
            // Check the logo is visible
            const logo = page.getByAltText('logo image');
            await logo.isVisible();
      })


      test('Test by getByTitle() Locators', async({page}) => {
            // Hover 
      })
})