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


    await page.getByRole('button', { name: 'Product Development', exact: true }).click();
    await page.getByRole('button', { name: 'Staff Augmentation', exact: true }).click();
    await page.getByRole('heading', { name: 'Technology' }).click();
    await page.getByText('Developer', { exact: true }).click();
    await page.getByRole('checkbox').nth(1).click();
    await page.getByText('Designer').click();
    await page.getByRole('checkbox').nth(3).click();


    await page.getByRole('heading', { name: 'Developer' }) .click();
    await page.getByText('Headcount').first().click();
    await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).click();
    await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).click();
    await page.getByRole('button', { name: 'INR (₹)' }).nth(1).click(); 
    await page.locator('div').filter({ hasText: /^INR \(₹\)$/ }).nth(5).click();
    await page.getByRole('button', { name: 'Monthly' }).first().click();
    await page.locator('div').filter({ hasText: /^Yearly$/ }).nth(1).click();
    await page.getByPlaceholder('Amount').first().fill('100');

    await page.getByRole('heading', { name: 'Designer' }) .click();
    await page.locator('div:nth-child(4) > .mx-token-4 > div > .flex > button:nth-child(3)').click();
    await page.locator('div:nth-child(4) > .mx-token-4 > div > .flex > button').first().click();
    await page.getByRole('button', { name: 'INR (₹)' }).nth(1).click();
    await page.locator('div').filter({ hasText: /^USD \(\$\)$/ }).nth(1).click();
    await page.waitForLoadState('networkidle');
    await page.getByRole('button', { name: 'Monthly' }).click();
    await page.getByRole('button', { name: 'Yearly' }).click();
    await page.getByPlaceholder('Amount').nth(1).fill('122');  
    await page.getByText('Total Cost Estimation*Exclusive of Taxes$').click();


    await page.getByRole('heading', { name: 'Heard us via' }) .click();
    await page.getByText('Word of Mouth').click();
    await page.locator('div').filter({ hasText: /^Word of Mouth$/ }).click();
    await page.getByRole('button', { name: 'Submit Request' }).click();
    await page.waitForLoadState('networkidle');

   await expect(page.locator('#form-success__container--consultation')).toBeVisible ();
   const successMessage = page.locator('#form-success__container--consultation');


});