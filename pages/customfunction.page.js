import { expect } from "@playwright/test";

export async function clickMenuItem(page, item) {
      // Get the menu item attributes
      const menuItem = page.getByRole('link', { name: item, exact: true });

      // Check the menu item is visible
      await expect(menuItem).toBeVisible();

      // Click the menu
      await menuItem.click();

      // await page.waitForLoadState('networkidle');
      console.log(`Clicked on menu item: ${item}`);
}


export async function checkurl(page, substring) {
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
}
