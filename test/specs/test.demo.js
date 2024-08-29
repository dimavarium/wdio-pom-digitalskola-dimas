describe('Test saucedemo.com', () => {
    it('Test 1 - Login successfully', async () => {
        await browser.url("https://www.saucedemo.com/")

        const usernameTextBox = await browser.$("#user-name")
        const passwordTextBox = await browser.$("#password")
        const loginButton = await browser.$('//input[@type="submit"]')
        
        await usernameTextBox.addValue("standard_user")
        await passwordTextBox.addValue("secret_sauce")
        await loginButton.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(browser).toHaveTitle('Swag Labs')
        //await browser.pause(5000) 
    });

    it('Test 2 - Login unsuccessfully', async () => {
        await browser.url("https://www.saucedemo.com/")

        const usernameTextBox = await browser.$("#user-name")
        const passwordTextBox = await browser.$("#password")
        const loginButton = await browser.$('//input[@type="submit"]')
        
        await usernameTextBox.addValue("standard_user")
        await passwordTextBox.addValue("wrong_password")
        await loginButton.click()

        const errorMessageBox = await browser.$('//*[@id="login_button_container"]/div/form/div[3]/h3')            
        await expect(errorMessageBox).toContain("Epic sadface: Username and password do not match any user in this service")
         
    });
});