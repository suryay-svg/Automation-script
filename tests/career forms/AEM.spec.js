import { test, expect } from '@playwright/test';
import path from 'path';

test('fill the career form ', async ({ page }) => {
    await page.goto('https://pattemdigital.com/career/aem-technical-architect');
    await page.getByRole('button', { name: 'Upload Resume' }).click(); 
    const resumePath = path.resolve("C:\\Users\\surya\\Downloads\\Reshma S Babu CV.pdf");
    await page.setInputFiles('input[type="file"]', resumePath);
    await page.getByPlaceholder('Enter your Name') .click ();
    await page.getByPlaceholder('Enter your Name') .fill ('John Doe');
    await page.getByPlaceholder('Enter your E-mail') .click ();
    await page.getByPlaceholder('Enter your E-mail') .fill ('john@playwright.com');
    await page.getByPlaceholder('Enter Phone Number') .click ();
    await page.getByPlaceholder('Enter Phone Number') .fill ('6385677156');
    await page.getByPlaceholder('Enter your current location') .click ();
    await page.getByPlaceholder('Enter your current location') .fill ('Chennai');
    await page.getByPlaceholder('Enter the total years of experience') .click ();
    await page.getByPlaceholder('Enter the total years of experience') .fill ('5');
    await page.getByPlaceholder('Enter current CTC (Lakhs Per Annum)') .click ();
    await page.getByPlaceholder('Enter current CTC (Lakhs Per Annum)') .fill ('10.5');
    await page.getByPlaceholder('Enter expected CTC (Lakhs Per Annum)') .click ();
    await page.getByPlaceholder('Enter expected CTC (Lakhs Per Annum)') .fill ('12.0');
    await page.getByPlaceholder('Paste links in appropriate format here') .click ();
    await page.getByPlaceholder('Paste links in appropriate format here') .fill ('https://www.linkedin.com/in/johndoe');
    await page.locator('div', { hasText: 'What is your relevant experience as an AEM Technical Architect?' }).getByLabel('Less than 1 year').check();
    await expect(page.locator('div', { hasText: 'What is your relevant experience as an AEM Technical Architect?' }).getByLabel('Less than 1 year')
).toBeChecked();

        
});