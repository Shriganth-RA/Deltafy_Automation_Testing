import { expect } from "@playwright/test";
import path from 'path';

export async function clickMenuItem(page, item, attr) {
      // Get the menu item attributes
      const menuItem = page.locator(attr).getByRole('link', { name: item, exact: true });
      console.log(`menu: ${menuItem}`)

      // Check the menu item is visible
      await expect(menuItem).toBeVisible();

      // Click the menu
      await menuItem.click();

      // await page.waitForLoadState('networkidle');
      console.log(`Clicked on menu item: ${item}`);
}

export async function checkurl(page, substring) {
      console.log(`Checking the url ubstring: ${substring}...`);
      // Verify the URL
      await expect(page).toHaveURL(new RegExp(substring));
}

export async function clickButton(page, attr, btn) {
      // Get the button attribute
      const button = page.locator(`${attr}`).getByText(`${btn}`);

      // Check the button is visible
      await expect(button).toBeVisible();

      // Click the button
      await button.click();

      // await page.waitForLoadState('networkidle');
      console.log(`Checked: ${btn}`)
}

export async function validateInputFeilds(page, value, attr) {
      // Get the feild attribute
      const feildInput = await page.locator(`${attr}`);

      // Check the feild is visible
      await expect(feildInput).toBeVisible();

      // Enter the value in the feilds
      await feildInput.fill(value);

      // Check the value in the feilds
      await expect(feildInput).toHaveValue(value);

      console.log(`Checked: ${value}`);
}


export async function validateRadioFeilds(page, attr) {
      // Get the feild attribute
      const radioInput = await page.locator(`${attr}`);

      // Check the feild is visible
      await expect(radioInput).toBeVisible();

      // Click the feilds
      await radioInput.check();

      console.log(`Checked: ${attr}`);
}


export async function validateDropdownFeilds(page, attr, value) {
      // Get the feild attribute
      const dropdownInput = await page.locator(attr);

      // Check the feild is visible
      await expect(dropdownInput).toBeVisible();

      // Click the feilds
      await dropdownInput.selectOption(value);

      console.log(`Checked: ${value}`);
}


export async function validateDatepickerFeilds(page, feild_attr, cal_attr, year_attr, month_attr, date_attr, year, month, date) {
      // Get the feild attribute
      const datepickerInput = await page.locator(feild_attr);
      const calender = await page.locator(cal_attr);
      const yearFeild = await page.locator(year_attr);
      const monthFeild = await page.locator(month_attr);
      const dateFeild = await page.locator(date_attr);

      await datepickerInput.click();

      // Check the calender is visible
      await expect(calender).toBeVisible();

      // Click the input
      await expect(yearFeild).toBeVisible();    // Check the Year is visible
      await yearFeild.click();      // Click the Year feild
      await yearFeild.selectOption(year);       // Select the Year

      await expect(monthFeild).toBeVisible();   // Check the Month is visible
      await monthFeild.click();     // Click the Month feild
      await monthFeild.selectOption(month);     // Select the Month

      await expect(dateFeild).toBeVisible();     // Check the Day is visible
      await dateFeild.click();      // Enter the Date

      console.log("Checked: Validate Date picker feilds");
}


export async function validateSingleUpload(page, values, feild_attr, btn_attr) {
      // Get the feild attribute
      const fileInput = page.locator(feild_attr);
      const submit = page.locator(btn_attr);

      // Set the file for upload
      await fileInput.setInputFiles(path.join(__dirname, `../fixtures/${values}`));

      // Click the Submit button
      await submit.click();

      console.log("Checked: validate Single file upload");
}


export async function validateMultipleUploads(page, values, feild_attr, btn_attr) {
      // Get the feild attribute
      const fileInput = page.locator(feild_attr);
      const submit = page.locator(btn_attr);

      for (const value of values) {
            // Set the file for upload
            await fileInput.setInputFiles(path.join(__dirname, `../fixtures/${value}`));
      }

      // Click the Submit button
      await submit.click();

      console.log("Checked: Validate Multiple file uploads");
}


export async function validateMultipleCheckboxes(page, attr1, attr2) {
      const pagenationUl = document.getElementById('pagination');
      const pagenationLi = pagenationUl.querySelectorAll('li');

      for (const li of pagenationLi) {
            const tab = page.locator(li);
            await tab.click();
      }
}

