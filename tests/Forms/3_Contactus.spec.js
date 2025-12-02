import { test, expect } from '@playwright/test';
const path = require('path');

// selected the job seeker from dropdown and upload the resume and submit the form  //

test('check the dropdown', async ({ page }) => {
  await page.goto('https://pattemdigital.com/');
  await page.locator('#button--cta-fullpage-banner').click();
  await expect(page.locator('#modal__content--contact-us')).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter Your Name' }).click(); 
  await page.getByRole('textbox', { name: 'Enter Your Name' }).fill('surya');
  await page.getByRole('textbox', { name: 'Enter Your Email Address' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Email Address' }).fill('SuRya@playwright.com');
  await page.getByRole('textbox', { name: 'Enter Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Phone Number' }).fill('9876543210');

  await page.getByRole('button', { name: 'Select the options' }).click();
  await page.click('text=Job Seeker');
  const resumePath = path.resolve("C:\\Users\\surya\\Downloads\\Reshma S Babu CV.pdf")
  await page.setInputFiles('input[type="file"]', resumePath);
  const submitBtn = page.locator('#modal__content--contact-us #button--submit-contact-us');
  await expect(submitBtn).toBeVisible({ timeout: 5000 });
  await submitBtn.click();
  await page.waitForTimeout(5000); 
  await expect(page.locator('#form-success__message--contact-us')).toBeVisible({ timeout: 5000 });
  const successMessage = page.locator('#form-success__message--contact-us');
  await expect(successMessage).toBeVisible();
  });

// selected the client from dropdown and upload the resume and submit the form  //

test('check the dropdown for client', async ({ page }) => {
  await page.goto('https://pattemdigital.com/');
  await page.locator('#button--cta-fullpage-banner').click();
  await expect(page.locator('#modal__content--contact-us')).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter Your Name' }).click(); 
  await page.getByRole('textbox', { name: 'Enter Your Name' }).fill('surya');
  await page.getByRole('textbox', { name: 'Enter Your Email Address' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Email Address' }).fill( 'surya@playwright.com');
  await page.getByRole('textbox', { name: 'Enter Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Phone Number' }).fill('9876543210')

  await page.getByRole('button', { name: 'Select the options' }).click();
  await page.locator('div').filter({ hasText: /^Client$/ }).click();
  await page.locator('#clientProjectOverview');
  await page.getByRole('textbox',{ name: 'Project overview (Optional'}).click();
  await page.getByRole('textbox', { name: 'Project overview (Optional)' }).fill('looking for a ecommerce website'); 
  const resumePath = path.resolve("C:\\Users\\surya\\Downloads\\Reshma S Babu CV.pdf");
  await page.setInputFiles('input[type="file"]', resumePath);
  const submitBtn = page.locator('#modal__content--contact-us #button--submit-contact-us');
  await expect(submitBtn).toBeVisible({ timeout: 5000 });
  await submitBtn.click();
  await page.waitForTimeout(5000); 
  await expect(page.locator('#form-success__message--contact-us')).toBeVisible({ timeout: 5000 });
  const successMessage = page.locator('#form-success__message--contact-us');
  await expect(successMessage).toBeVisible();
 
});

// selected the vendor from dropdown and upload the resume and submit the form  //
test('check the dropdown for vendor', async ({ page }) => {
  await page.goto('https://pattemdigital.com/');
  await page.locator('#button--cta-fullpage-banner').click();
  await expect(page.locator('#modal__content--contact-us')).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter Your Name' }).click(); 
  await page.getByRole('textbox', { name: 'Enter Your Name' }).fill('surya');
  await page.getByRole('textbox', { name: 'Enter Your Email Address' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Email Address' }).fill('surya@playwright.com');
  await page.getByRole('textbox', { name: 'Enter Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Phone Number' }).fill('9876543210');

  await page.getByRole('button', { name: 'Select the options' }).click();
  await page.locator('div').filter({ hasText: /^Vendor$/ }).click();
  await page.getByRole('textbox',{ name:'Company Name' }).click();
  await page.getByRole('textbox', { name: 'Company Name' }).fill('Playwright inc');
  await page.getByLabel('Choose your sector').click();
  await page.locator('[data-value="assets"]').click();
  await page.locator('#vendorProjectOverview').fill('This software streamlines and automates manpower staffing processes...');
  await page.locator('.lucide.lucide-chevron-down.text-grey-dark.transition-transform');
  const resumePath = path.resolve("C:\\Users\\surya\\Downloads\\Reshma S Babu CV.pdf");
  await page.setInputFiles('input[type="file"]', resumePath);
  const submitBtn = page.locator('#modal__content--contact-us #button--submit-contact-us');
  await expect(submitBtn).toBeVisible({ timeout: 5000 });
  await submitBtn.click();
  await page.waitForTimeout(5000); 
  await expect(page.locator('#form-success__message--contact-us')).toBeVisible({ timeout: 5000 });
  const successMessage = page.locator('#form-success__message--contact-us');
  await expect(successMessage).toBeVisible();
});