const { test, expect } = require('@playwright/test')

// HOOKS BEFORE RUN EVERY TEST
test.beforeEach(async({ page })=> {
    await page.goto('https://practicetestautomation.com/practice-test-login/')
})
// HOOKS AFTER RUN EVERY TEST
test.afterEach(async () => {
    console.log('Test Complete')
})
// +++++++++++++++++++++  positve test ==================== 
// TC_001 Verify login page open

test('TC_001 Verify login page open', async ({ page }) => {
     await expect(page).toHaveTitle('Test Login | Practice Test Automation');
})


// TC-002 VALID USERNAME AND PASSWORD

test('TC_002 Valid username and password', async ({ page }) => {
    await page.locator('#username').fill('student')
    await page.locator('#password').fill('Password123')
    await page.locator('#submit').click()
    await expect(page).toHaveURL(/logged-in-successfully/)
})

// TC_003 Verify username is visible 
test('TC_003 Verify username is visible', async ({ page }) => {
    await expect(page.locator('#username')).toBeVisible();
})

// TC_004 Verify password field is visible
test('TC_004 verify password field is visible', async ({ page }) => {
    await expect(page.locator('#password')).toBeVisible()
})

// TC_005 Verify submit button is visible and enable
test('TC_005 Verify submit button is visible and enable ', async ({ page }) => {
    await expect(page.locator('#submit')).toBeVisible()
    await expect(page.locator('#submit')).toBeEnabled()
})
// ================== negative test ====================

// TC_005 verify USERNAME INVALID
test('TC_006 verify username invlid', async ({ page }) => {
    await page.locator('#username').fill('student123');
    await page.locator('#password').fill('Password123')
    await page.locator('#submit').click()
    await expect(page.locator('#error')).toContainText('Your username is invalid!')
})


//TC_007 verify PASSWORD INVALID
test('TC_007 verify password invalid', async ({ page }) => {
    await page.locator('#username').fill('student')
    await page.locator('#password').fill('invalid123')
    await page.locator('#submit').click()
    await expect(page.locator('#error')).toContainText('Your password is invalid!')
})
//TC_008 verify username and  password invalid
test('TC_008  verify username and  password invalid', async ({ page }) => {
    await page.locator('#username').fill('student1234')
    await page.locator('#password').fill('password123456')
    await page.locator('#submit').click()
    await expect(page.locator('#error')).toContainText('Your username is invalid!')
})
//TC_009 verify empty username
test('TC_009 verify Empty username', async ({ page }) => {
    await page.locator('#username').fill('')
    await page.locator('#password').fill('Password123')
    await page.locator('#submit').click()
    await expect(page.locator('#error')).toContainText('Your username is invalid!')
})

//TC_010 verify empty password
test('TC_010 verify Empty password', async ({ page }) => {
    await page.locator('#username').fill('student')
    await page.locator('#password').fill('')
    await page.locator('#submit').click()
    await expect(page.locator('#error')).toContainText('Your password is invalid!')
})

//TC_011 verify empty username & password 
test('TC_011 verifyusername &  Empty password', async ({ page }) => {
    await page.locator('#username').fill('')
    await page.locator('#password').fill('')
    await page.locator('#submit').click()
    await expect(page.locator('#error')).toContainText('Your username is invalid!')
})

