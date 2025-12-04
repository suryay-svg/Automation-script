import { test, expect } from '@playwright/test';
import path from 'path';

test('fill the career form ', async ({ page }) => {

    await page.goto('https://pattemdigital.com/career/aem-technical-architect');
    await page.getByRole('button', { name: 'Get Started' }).click();
    await expect(page.locator('#modal__content--video')).toBeVisible();
    const videoPath = path.resolve("C:\\Users\\surya\\Downloads\\b026f2fb-1049-4532-ba74-0ab6381e6b55.webm");
    await page.getByRole('button', { name: 'Upload Video' }).click();
    await page.setInputFiles('input[type="file"]', videoPath);

    const resumePath = path.resolve("C:\\Users\\surya\\Downloads\\Reshma S Babu CV.pdf");
    await page.setInputFiles('input[type="file"]', resumePath);

    await page.getByPlaceholder('Enter your Name').fill('John Doe');
    await page.getByPlaceholder('Enter your E-mail').fill('john@playwright.com');
    await page.getByPlaceholder('Enter Phone Number').fill('6385677156');
    await page.getByPlaceholder('Enter your current location').fill('Chennai');
    await page.getByPlaceholder('Enter your current designation').fill('AEM Developer');
    await page.getByPlaceholder('Enter the total years of experience').fill('5');
    await page.getByPlaceholder('Enter current CTC (Lakhs Per Annum)').fill('10.5');
    await page.getByPlaceholder('Enter expected CTC (Lakhs Per Annum)').fill('12.0');
    await page.getByPlaceholder('Paste links in appropriate format here').fill('https://www.linkedin.com/in/johndoe');

    await page.locator('text=What is your relevant experience as an AEM Technical Architect').scrollIntoViewIfNeeded();
    await page.getByLabel('1–2 years').nth(0).scrollIntoViewIfNeeded();
    await page.getByLabel('1–2 years').nth(0).click();
    await expect(page.getByLabel('1–2 years').nth(0)).toBeChecked();

    await page.locator ('text=How long have you been working as an Architect?').scrollIntoViewIfNeeded();
    await page.getByLabel('1–2 years').nth(1).scrollIntoViewIfNeeded();
    await page.getByLabel('1–2 years').nth(1).click();
    await expect(page.getByLabel('1–2 years').nth(1)).toBeChecked();

    await page.locator ('text=How long have you worked with Adobe Managed Services (AMS) Cloud Manager?').scrollIntoViewIfNeeded();
    await page.getByLabel('1–2 years').nth(2).scrollIntoViewIfNeeded();
    await page.getByLabel('1–2 years').nth(2).click();
    await expect(page.getByLabel('1–2 years').nth(2)).toBeChecked();

    await page.locator ('text=What is your experience with integrating Adobe Analytics, Target, Campaign and performing data migration in AEM?').scrollIntoViewIfNeeded();
    await page.getByLabel('Beginner (1–2 projects)').scrollIntoViewIfNeeded();
    await page.getByLabel('Beginner (1–2 projects)').click();
    await expect(page.getByLabel('Beginner (1–2 projects)')).toBeChecked();

    await page.locator('text=Rate your experience in AEM backend development (Sling Servlets, OSGi, JCR, Apache Sling, Apache Felix)').scrollIntoViewIfNeeded();
    await page.getByLabel('Intermediate').nth(1).scrollIntoViewIfNeeded();
    await page.getByLabel('Intermediate').nth(1).click();
    await expect(page.getByLabel('Intermediate').nth(1)).toBeChecked();

    await page.locator('text=How long have you worked with AEM as Cloud Service (AEMaaCS)?').scrollIntoViewIfNeeded();
    await page.getByLabel('1–2 years').nth(3).scrollIntoViewIfNeeded();
    await page.getByLabel('1–2 years').nth(3).click();
    await expect(page.getByLabel('1–2 years').nth(3)).toBeChecked();

    await page.locator('text=During which phase of your career did you work as an Architect?').scrollIntoViewIfNeeded();
    await page.getByLabel('Currently in my role as an Architect').scrollIntoViewIfNeeded();
    await page.getByLabel('Currently in my role as an Architect').click();
    await expect(page.getByLabel('Currently in my role as an Architect')).toBeChecked();


    await page.locator('text=Do you hold any AEM certifications?').scrollIntoViewIfNeeded();
    await page.getByLabel('Yes').scrollIntoViewIfNeeded();
    await page.getByLabel('Yes').click();
    await expect(page.getByLabel('Yes')).toBeChecked();

    await page.locator('text=How soon could you join us?').scrollIntoViewIfNeeded();
    await page.getByLabel('Within 30 days').scrollIntoViewIfNeeded();
    await page.getByLabel('Within 30 days').click();
    await expect(page.getByLabel('Within 30 days')).toBeChecked();

    await page.locator('text=What is your current city?').scrollIntoViewIfNeeded();
    await page.getByLabel('Noida').nth(1).click();
    await expect(page.getByLabel('Noida').nth(1)).toBeChecked();

    await page.locator('text=What would be your preferred work location?').scrollIntoViewIfNeeded();
    await page.getByLabel('Bangalore').nth(1).click();
    await expect(page.getByLabel('Bangalore').nth(1)).toBeChecked();

    await page.locator('text=What’s your preferable work mode?').scrollIntoViewIfNeeded();
    await page.getByLabel('Hybrid').scrollIntoViewIfNeeded();
    await page.getByLabel('Hybrid').click();
    await expect(page.getByLabel('Hybrid')).toBeChecked();

    await page.locator('text=Specify your current employment status:').scrollIntoViewIfNeeded();
    await page.getByLabel('Completed my notice period ').scrollIntoViewIfNeeded();
    await page.getByLabel('Completed my notice period ').click();
    await expect(page.getByLabel('Completed my notice period ')).toBeChecked();


    await page.locator('text=What is your official notice period?').scrollIntoViewIfNeeded();
    await page.getByLabel('More than 60 days').scrollIntoViewIfNeeded();
    await page.getByLabel('More than 60 days').click();
    await expect(page.getByLabel('More than 60 days')).toBeChecked();   

    await page.locator('text=How long have you been working in your current company?').scrollIntoViewIfNeeded();
    await page.getByLabel('1–2 years').nth(4).scrollIntoViewIfNeeded();
    await page.getByLabel('1–2 years').nth(4).click();
    await expect(page.getByLabel('1–2 years').nth(4)).toBeChecked();

    await page.locator('text=When was your last hike?').scrollIntoViewIfNeeded();
    await page.getByLabel('Less than 6 months').scrollIntoViewIfNeeded();
    await page.getByLabel('Less than 6 months').click();
    await expect(page.getByLabel('Less than 6 months')).toBeChecked();

    await page.getByRole('button', { name: 'Submit request' }).click();
    await page.waitForLoadState('networkidle'); 
    await expect(page.locator('form-success__container--career-application')).toBeVisible();
    await expect(page.getByLabel('Success! Your Application is on Its Way')).toBeVisible({ timeout: 20000 });

});