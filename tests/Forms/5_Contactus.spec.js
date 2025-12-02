import{test,expect}from'@playwright/test';
const path=require('path'); 
// selected the job seeker from dropdown and upload the resume and submit the form  //

test('Fill PattemDigital Contact Form jobseeker', async ({ page }) => {    
    await page.goto('https://pattemdigital.com/')
    await page.getByRole('button', { name: 'Ask Us' }).click();
    await expect(page.locator('#modal__content--contact-us')).toBeVisible();
    await page.locator('#modal__content--contact-us').click();   
    await page.getByRole('textbox', { name: 'Enter Your Name' }).click(); 
    await page.getByRole('textbox', { name: 'Enter Your Name' }).fill('surya');
    await page.getByRole('textbox', { name: 'Enter Your Email Address' }).click();
    await page.getByRole('textbox', { name: 'Enter Your Email Address' }).fill('jobseeker@playwright.com');
    await page.getByRole('textbox', { name: 'Enter Phone Number' }).click();
    await page.getByRole('textbox', { name: 'Enter Phone Number' }).fill('9876543210');

    await page.getByRole('button', { name: 'Select the options' }).click();
    await page.click('text=Job Seeker');
    const resumePath=path.resolve("C:\\Users\\surya\\Downloads\\Reshma S Babu CV.pdf"  );   
    await page.setInputFiles('input[type="file"]', resumePath); 
    await page.locator('#modal__content--contact-us #button--submit-contact-us').click();
    await page.waitForTimeout(5000);
    await expect(page.locator('#form-success__message--contact-us')).toBeVisible({ timeout: 5000 });

    });

test('Fill PattemDigital Contact Form client', async ({ page }) => {    
    await page.goto('https://pattemdigital.com/')
    await page.getByRole('button', { name: 'Ask Us' }).click();
    await expect(page.locator('#modal__content--contact-us')).toBeVisible();
    await page.locator('#modal__content--contact-us').click();   
    await page.getByRole('textbox', { name: 'Enter Your Name' }).click(); 
    await page.getByRole('textbox', { name: 'Enter Your Name' }).fill('surya');
    await page.getByRole('textbox', { name: 'Enter Your Email Address' }).click();
    await page.getByRole('textbox', { name: 'Enter Your Email Address' }).fill('client@playwright.com');
    await page.getByRole('textbox', { name: 'Enter Phone Number' }).click();
    await page.getByRole('textbox', { name: 'Enter Phone Number' }).fill('9876543210');

    await page.getByRole('button', { name: 'Select the options' }).click();
    await page.locator('div').filter({ hasText: /^Client$/ }).click();
    await page.locator('#clientProjectOverview');
    await page.getByRole('textbox', { name: 'Project overview (Optional)' }).click();
    await page.getByRole('textbox', { name: 'Project overview (Optional)' }).fill('A project overview is a high-level summary of a project that describes its goals, objectives, and key details. It provides a concise snapshot for stakeholder');
    const resumePath=path.resolve("C:\\Users\\surya\\Downloads\\Reshma S Babu CV.pdf"  );   
    await page.locator('#clientDocument').setInputFiles(resumePath); 
    await page.locator('#modal__content--contact-us #button--submit-contact-us').click();
    await page.waitForTimeout(5000);
    await expect(page.locator('#form-success__message--contact-us')).toBeVisible({ timeout: 5000 });
    });

test('Fill PattemDigital Contact Form vendor', async ({ page }) => {    
    await page.goto('https://pattemdigital.com/')
    await page.getByRole('button', { name: 'Ask Us' }).click();
    await expect(page.locator('#modal__content--contact-us')).toBeVisible();
    await page.locator('#modal__content--contact-us').click();
    await page.getByRole('textbox', { name: 'Enter Your Name' }).click(); 
    await page.getByRole('textbox', { name: 'Enter Your Name' }).fill('surya');
    await page.getByRole('textbox', { name: 'Enter Your Email Address' }).click();
    await page.getByRole('textbox', { name: 'Enter Your Email Address' }).fill('vendor@playwright.com');
    await page.getByRole('textbox', { name: 'Enter Phone Number' }).click();
    await page.getByRole('textbox', { name: 'Enter Phone Number' }).fill('9876543210');

    await page.getByRole('button', { name: 'Select the options' }).click();
    await page.locator('div').filter({ hasText: /^Vendor$/ }).click();
    await page.getByPlaceholder('Enter Your Organization Name').clear();
    await page.getByPlaceholder('Enter Your Organization Name').fill('Tech Innovations Ltd.');
    await page.getByLabel('Choose your sector').click();
    await page.locator('[data-value="staffing"]').click();
    await page.locator('#vendorProjectOverview').fill('This software streamlines and automates manpower staffing processes...');
    
    await page.locator('.lucide.lucide-chevron-down.text-grey-dark.transition-transform');
    const resumePath=path.resolve("C:\\Users\\surya\\Downloads\\Reshma S Babu CV.pdf"  );
    await page.locator('#vendorDocument').setInputFiles(resumePath); 
    await page.locator('#modal__content--contact-us #button--submit-contact-us').click();
    await page.waitForTimeout(5000);
    await expect(page.locator('#form-success__message--contact-us')).toBeVisible({ timeout: 5000 });
    });