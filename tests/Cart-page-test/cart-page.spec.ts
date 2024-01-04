import{test} from "@playwright/test";
import CartPage from "../../PageObjects/Cart-page/cart-page";
import HomePage from "../../PageObjects/Home-page/home-page";
import data from "../../TestData/cart-data/cart-data.json";
import { SignupAndLoginPage } from "../../PageObjects/SIgnup_Login-page/signup-login-page";



test("verify user should able to enter email address and 'SUBSCRIPTION' in Cart page",async({page})=>{
 const cartPage=new CartPage(page);
 await cartPage.goToLogin(data["TC011"].url);
 await cartPage.clickOnCartTab();
 await cartPage.enterEmailForSubscription(data["TC011"].email);
 await cartPage.verifySubscriptionIsSuccessfull();

   
})

test("verify user should able to remove the product in the cart page",async({page})=>{
    const homePage = new HomePage(page);
   const cartPage = new CartPage(page);
 

   await homePage.navigateToUrl(data["TC018"].url);
   await homePage.verifyHomePageIsVisible();
   await homePage.addOneProductToAddToCart();
   await homePage.verifyProductIsAdded();
   await cartPage.clickOnCartTab();
   await cartPage.removeProductFromCart();
   await cartPage.verifyProductIsRemovedFromCart();
   
      
   })

   test("verify user Should able to search product and add to cart  and then login with creditails and verify added product in the cart page", async ({ page }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const signupAndLoginPage = new SignupAndLoginPage(page);
 
    await homePage.navigateToUrl(data["TC015"].url);
    await homePage.verifyHomePageIsVisible();
    await homePage.addOneProductToAddToCart();
    await homePage.verifyProductIsAdded();
    await cartPage.clickOnCartTab();
    await cartPage.verifyProductsDetailsVisible();
    await signupAndLoginPage.clickOnSignUpAndLoginTab();
    await signupAndLoginPage.enterLoginEmailAddress(data["TC014"].email);
    await signupAndLoginPage.enterLoginPassword(data["TC014"].password);
    await signupAndLoginPage.clickOnLoginButton();
    await cartPage.clickOnCartTab();
    await cartPage.verifyProductsDetailsVisible();
   })
