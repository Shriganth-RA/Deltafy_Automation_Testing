import {expect, test} from '@playwright/test'
import { beforeEach } from 'node:test'
import { clickMenuItem, checkurl, validateInputFeilds, validateRadioFeilds, validateDropdownFeilds, validateDatepickerFeilds, validateSingleUpload, validateMultipleUploads } from '../pages/testAuto.customfunction.page';

test.describe('Validate the header section', () => {
      test.beforeEach(async ({page}) => {
            await page.goto('https://testautomationpractice.blogspot.com/');
            await checkurl(page, 'https://testautomationpractice.blogspot.com/');
      })

      test('Validate the navigation bar', async ({page}) => {
            const menuItem = [
                  {name: 'Home', url: ''},
                  {name: 'Udemy Courses', url: 'udemy-courses.html?'},
                  {name: 'Online Trainings', url: ''},
                  {name: 'Blog', url: ''},
                  {name: 'PlaywrightPractice', url: 'playwrightpractice.html'},
            ];

            for (const item of menuItem) {
                  await clickMenuItem(page, item.name, '#PageList2');
                  await checkurl(page, item.url);
                  await page.goBack();
                  await checkurl(page, 'https://testautomationpractice.blogspot.com/');
            }
      })
})


test.describe('Validate the Home page', () => {
      test.beforeEach(async({page}) => {
            await page.goto('https://testautomationpractice.blogspot.com/');
            await checkurl(page, 'https://testautomationpractice.blogspot.com/');
      })

      test('Validate the form in the Home page', async({page}) => {
            // Validate the Name feilds
            await validateInputFeilds(page, "Shriganth RA", '.form-group #name');

            // Validate the Email feilds
            await validateInputFeilds(page, "shriganth@gmail.com", '.form-group #email');

            // Validate the Phone feilds
            await validateInputFeilds(page, "9003695415", '.form-group #phone');

            // Validate the Address feilds
            await validateInputFeilds(page, "123, Main road", '.form-group #textarea');

            // Validate the Gender feilds
            await validateRadioFeilds(page, 'input[type="radio"][value="male"]');

            // Validate the Days feilds
            await validateRadioFeilds(page, 'input[type="checkbox"][value="sunday"]');
            await validateRadioFeilds(page, 'input[type="checkbox"][value="wednesday"]');
            await validateRadioFeilds(page, 'input[type="checkbox"][value="friday"]');

            // Validate the Country feilds
            await validateDropdownFeilds(page, '.form-group select[id="country"]', "usa");

            // Validate the Colors feilds
            await validateDropdownFeilds(page, '.form-group select[id="colors"]', "yellow");

            // Validate the Sorted List feilds
            await validateDropdownFeilds(page, '.form-group select[id="animals"]', "cheetah")

            // Validate the Date picker_1 feilds
            await validateInputFeilds(page, "08/08/2002", 'input[id="datepicker"]');

            // Validate the Date picker_2 feilds
            await validateDatepickerFeilds(page, 'input[id="txtDate"]', 'table[class="ui-datepicker-calendar"]', 'select[aria-label="Select year"]', 'select[aria-label="Select month"]', 'table[class="ui-datepicker-calendar"], a[class="ui-state-default ui-state-highlight"][data-date="3"]', "2025", "May", "3");

            // Validate the Date picker_3 feilds
            // await validateInputFeilds(page, "08/08/2002", 'input[id="start-date"][type="date"]');

            // To validate a single file be uploaded
            await validateSingleUpload(page, 'data.json', '#singleFileInput', 'form[id="singleFileForm"] button[type="submit"]');

            // To validate the multiple files be uploads
            await validateMultipleUploads(page, ['user.json', 'data.json'], '#multipleFilesInput', 'form[id="multipleFilesForm"] button[type="submit"]');

            

            // Validate the Section_1 feilds
            // await validateInputFeilds();

            // Validate the Section_2 feilds

            // Validate the Section_3 feilds


      })
})

