import HomePage from "../pageobjects/home.page";
import LoginPage from "../pageobjects/login.page";
import CartPage from "../pageobjects/cart.page";
import { browser } from '@wdio/globals'

describe('Login test', () => {
    it('Test1 - Login successfully - PO based', async () => {
        await LoginPage.open()
        await LoginPage.login("standard_user", "secret_sauce")
        await HomePage.validateOnHomePage() 
        await HomePage.addToCart()
        await CartPage.open()
        await browser.pause(5000)

    });
    
    //it('Test2 - Login successfully - PO based', async () => {
    //    await LoginPage.open()
    //    await LoginPage.login("standard_user", "wrong_password")
    //    await HomePage.validateWrongPasswordDisplayed() 
    //}); 
});