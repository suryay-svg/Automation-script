import { test, expect } from '@playwright/test';
import path from 'path';

test('fill the career form ', async ({ page }) => {

    await page.goto('https://www.pattemdigital.com/free-consultation');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('#form__container--project')).toBeVisible();
    await page.getByPlaceholder('Enter your name') .fill('testing purpose'); 
    await page.getByPlaceholder('Enter your E-mail id') .fill('testingpurpose@playwright.com');
    await page.getByPlaceholder('Enter your company name') .fill('Tech Solutions Inc.');
    await page.getByPlaceholder('Enter phone number') .fill('9876543210');

    await page.getByRole('heading', { name: 'Type of project' }).click();
    await page.getByText('Strategy', { exact: true }).click();
    await page.getByRole('checkbox').nth(1).click();
    await page.getByText('Design', { exact: true }).click();
    await page.getByRole('checkbox').nth(3).click();



    await expect(page.locator("(//h4[normalize-space()='Timeline'])[1]")).toBeVisible();
    await page.locator("(//div[contains(@role,'radio')])[3]").click();
    const budgetSlider = page.getByRole('slider');
    await budgetSlider.fill('45');
    await expect(budgetSlider).toHaveValue('45');


    await page.getByPlaceholder('Write here about your project').fill('This is a test project description for automation testing.');
    await expect(page.getByText('Attach project Documents', { exact: true })).toBeVisible();
    const resumePath = "C:\\Users\\surya\\Downloads\\Reshma S Babu CV.pdf";
    await page.locator('input[type="file"]').setInputFiles(resumePath);

    await page.getByRole('heading', { name: 'Heard us via' }) .click();
    await page.getByText('Word of Mouth').click();
    await page.locator('div').filter({ hasText: /^Word of Mouth$/ }).click();
    await page.getByRole('button', { name: 'Submit Request' }).click();


   await expect(page.locator('#form-success__container--consultation')).toBeVisible ();
   await page.waitForLoadState('networkidle');
   const successMessage = page.locator('#form-success__container--consultation');


});
