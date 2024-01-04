import { test } from "@playwright/test";
import HomePage from "../../PageObjects/Home-page/home-page";
import CartPage from "../../PageObjects/Cart-page/cart-page";
import { SignupAndLoginPage } from "../../PageObjects/SIgnup_Login-page/signup-login-page";
import DeleteAccountPage from "../../PageObjects/DeleteAccount-page/deleteAccount-page";

import data1 from "../../TestData/cart-data/cart-data.json";
import data from "../../TestData/Home-data/home-data.json";



test("verify user should able to enter email address and 'SUBSCRIPTION' in home page", async ({ page }) => {
   const homePage = new HomePage(page);

   await homePage.navigateToUrl(data["TC010"].url);
   await homePage.verifyHomePageIsVisible();
   await homePage.enterEmailForSubscription(data["TC010"].email);
   await homePage.verifySubscriptionIsSuccessfull();
})

test("verify user Should able to view product in homepage and Increase quantity to 4  and add  to cart then verify product in cart page", async ({ page }) => {
   const homePage = new HomePage(page);
   const cartPage = new CartPage(page);

   await homePage.navigateToUrl(data["TC013"].url);
   await homePage.verifyHomePageIsVisible();
   await homePage.clickOnViewProduct();
   await homePage.increaseQunatity(data["TC013"].qunatity);
   await homePage.clickOnAddToCartThePrdouct();
   await homePage.verifyProductIsAdded();
   await cartPage.clickOnCartTab();
   await cartPage.verifyProductsDetailsVisible();

})

test("verify user Should able to add one product to cart and place the order with register while checkout", async ({ page }) => {
   const homePage = new HomePage(page);
   const cartPage = new CartPage(page);
   const signupAndLoginPage = new SignupAndLoginPage(page);

   await homePage.navigateToUrl(data1["TC014"].url);
   await homePage.verifyHomePageIsVisible();
   await homePage.addOneProductToAddToCart();
   await homePage.verifyProductIsAdded();
   await cartPage.clickOnCartTab();
   await cartPage.clickOnProceedToChechOut();
   await cartPage.clickOnRigsterAndLoginLink();
   await signupAndLoginPage.enterLoginEmailAddress(data1["TC014"].email);
   await signupAndLoginPage.enterLoginPassword(data1["TC014"].password);
   await signupAndLoginPage.clickOnLoginButton();
   await cartPage.clickOnCartTab();
   await cartPage.clickOnProceedToChechOut();
   await cartPage.clickOnPlaceOrder();
   await cartPage.enterNameOnTheCard(data1["TC014"].nameCard);
   await cartPage.enterCardNumber(data1["TC014"].cardNo);
   await cartPage.enterCVC(data1["TC014"].cvc);
   await cartPage.enterExpireMonth(data1["TC014"].exMonth);
   await cartPage.enterExpireYear(data1["TC014"].exyear);
   await cartPage.clickOnPayAndConfirmOrderButton();
   await cartPage.verifyTheOrderPlacedSuccessfully();

})

test("verify user Should able to login  and add one product to cart and place the order with register while checkout", async ({ page }) => {
   const homePage = new HomePage(page);
   const cartPage = new CartPage(page);
   const signupAndLoginPage = new SignupAndLoginPage(page);

   await homePage.navigateToUrl(data1["TC015"].url);
   await homePage.verifyHomePageIsVisible();
   await signupAndLoginPage.clickOnSignUpAndLoginTab();
   await signupAndLoginPage.enterLoginEmailAddress(data1["TC015"].email);
   await signupAndLoginPage.enterLoginPassword(data1["TC015"].password);
   await signupAndLoginPage.clickOnLoginButton();
   await homePage.addOneProductToAddToCart();
   await homePage.verifyProductIsAdded();
   await cartPage.clickOnCartTab();
   await cartPage.clickOnProceedToChechOut();
   await cartPage.clickOnPlaceOrder();
   await cartPage.enterNameOnTheCard(data1["TC015"].nameCard);
   await cartPage.enterCardNumber(data1["TC015"].cardNo);
   await cartPage.enterCVC(data1["TC015"].cvc);
   await cartPage.enterExpireMonth(data1["TC015"].exMonth);
   await cartPage.enterExpireYear(data1["TC015"].exyear);
   await cartPage.clickOnPayAndConfirmOrderButton();
   await cartPage.verifyTheOrderPlacedSuccessfully();

})

test("verify user Should able to add one product to cart and place the order with register while checkout and delete account", async ({ page }) => {
   const homePage = new HomePage(page);
   const cartPage = new CartPage(page);
   const signupAndLoginPage = new SignupAndLoginPage(page);
   const deleteAccountPage = new DeleteAccountPage(page);

   await homePage.navigateToUrl(data1["TC014"].url);
   await homePage.verifyHomePageIsVisible();
   await homePage.addOneProductToAddToCart();
   await homePage.verifyProductIsAdded();
   await cartPage.clickOnCartTab();
   await cartPage.clickOnProceedToChechOut();
   await cartPage.clickOnRigsterAndLoginLink();
   await signupAndLoginPage.enterLoginEmailAddress(data1["TC014"].email);
   await signupAndLoginPage.enterLoginPassword(data1["TC014"].password);
   await signupAndLoginPage.clickOnLoginButton();
   await cartPage.clickOnCartTab();
   await cartPage.clickOnProceedToChechOut();
   await cartPage.clickOnPlaceOrder();
   await cartPage.enterNameOnTheCard(data1["TC014"].nameCard);
   await cartPage.enterCardNumber(data1["TC014"].cardNo);
   await cartPage.enterCVC(data1["TC014"].cvc);
   await cartPage.enterExpireMonth(data1["TC014"].exMonth);
   await cartPage.enterExpireYear(data1["TC014"].exyear);
   await cartPage.clickOnPayAndConfirmOrderButton();
   await cartPage.verifyTheOrderPlacedSuccessfully();
   await deleteAccountPage.clickOnDeleteAccountTab();
   await deleteAccountPage.verifyAccountDeletedSuccessfully();

})

test("verify user Should able to login  and add one product to cart and place the order with register while checkout and delete account", async ({ page }) => {
   const homePage = new HomePage(page);
   const cartPage = new CartPage(page);
   const signupAndLoginPage = new SignupAndLoginPage(page);
   const deleteAccountPage = new DeleteAccountPage(page);

   await homePage.navigateToUrl(data1["TC015"].url);
   await homePage.verifyHomePageIsVisible();
   await signupAndLoginPage.clickOnSignUpAndLoginTab();
   await signupAndLoginPage.enterLoginEmailAddress(data1["TC015"].email);
   await signupAndLoginPage.enterLoginPassword(data1["TC015"].password);
   await signupAndLoginPage.clickOnLoginButton();
   await homePage.addOneProductToAddToCart();
   await homePage.verifyProductIsAdded();
   await cartPage.clickOnCartTab();
   await cartPage.clickOnProceedToChechOut();
   await cartPage.clickOnPlaceOrder();
   await cartPage.enterNameOnTheCard(data1["TC015"].nameCard);
   await cartPage.enterCardNumber(data1["TC015"].cardNo);
   await cartPage.enterCVC(data1["TC015"].cvc);
   await cartPage.enterExpireMonth(data1["TC015"].exMonth);
   await cartPage.enterExpireYear(data1["TC015"].exyear);
   await cartPage.clickOnPayAndConfirmOrderButton();
   await cartPage.verifyTheOrderPlacedSuccessfully();
   await deleteAccountPage.clickOnDeleteAccountTab();
   await deleteAccountPage.verifyAccountDeletedSuccessfully();

})

test("verify user Should able to signup and  add one product to cart and place the order with register while checkout and delete account", async ({ page }) => {
   const homePage = new HomePage(page);
   const cartPage = new CartPage(page);
   const signUpAndLoginPage = new SignupAndLoginPage(page);
   const deleteAccountPage = new DeleteAccountPage(page);

   await homePage.navigateToUrl(data1["TC018"].url);
   await homePage.verifyHomePageIsVisible();
   await signUpAndLoginPage.clickOnSignUpAndLoginTab();
   await signUpAndLoginPage.verifySignupPage();
   await signUpAndLoginPage.enterName(data1["TC018"].name);
   await signUpAndLoginPage.enterEmail(data1["TC018"].email);
   await signUpAndLoginPage.clickOnSignUpButton();
   await signUpAndLoginPage.selectTitle();
   await signUpAndLoginPage.enterPassword(data1["TC018"].password);
   await signUpAndLoginPage.selectDateOfBirth(data1["TC018"].day, data1["TC018"].month, data1["TC018"].year);
   await signUpAndLoginPage.selectSignUpForNewsLetterChechbox();
   await signUpAndLoginPage.selectSpecialOffersPartnersChechbox();
   await signUpAndLoginPage.enterFirstName(data1["TC018"].firstName);
   await signUpAndLoginPage.enterLastName(data1["TC018"].lastName);
   await signUpAndLoginPage.enterCompany(data1["TC018"].company);
   await signUpAndLoginPage.enterAddress(data1["TC018"].address);
   await signUpAndLoginPage.enterState(data1["TC018"].state);
   await signUpAndLoginPage.enterCity(data1["TC018"].city);
   await signUpAndLoginPage.enterZipCode(data1["TC018"].zipcode);
   await signUpAndLoginPage.enterMobileNumber(data1["TC018"].mobileNo);
   await signUpAndLoginPage.clickOnCreateAccountButton();
   await signUpAndLoginPage.verifyAccountIsCreated();
   await homePage.addOneProductToAddToCart();
   await homePage.verifyProductIsAdded();
   await cartPage.clickOnCartTab();
   await cartPage.clickOnProceedToChechOut();
   await cartPage.clickOnPlaceOrder();
   await cartPage.enterNameOnTheCard(data1["TC018"].nameCard);
   await cartPage.enterCardNumber(data1["TC018"].cardNo);
   await cartPage.enterCVC(data1["TC018"].cvc);
   await cartPage.enterExpireMonth(data1["TC018"].exMonth);
   await cartPage.enterExpireYear(data1["TC018"].exyear);
   await cartPage.clickOnPayAndConfirmOrderButton();
   await cartPage.verifyTheOrderPlacedSuccessfully();
   await deleteAccountPage.clickOnDeleteAccountTab();
   await deleteAccountPage.verifyAccountDeletedSuccessfully();

})


test("TC020:verify user Should able to view the men and women category", async ({ page }) => {
   const homePage = new HomePage(page);

   await homePage.navigateToUrl(data["TC010"].url);
   await homePage.verifyHomePageIsVisible();
   await homePage.clickOnWomenCategory();
   await homePage.selectWomenDress();
   await homePage.verifyRelatedDressesVisible();
   await homePage.clickOnMenCategory();
   await homePage.selectMenTShirt();
   await homePage.verifyRelatedDressesVisible();


})

test("TC021:verify user should able to view and cart brand products in Home page", async ({ page }) => {
   const homePage = new HomePage(page);

   await homePage.navigateToUrl(data["TC010"].url);
   await homePage.verifyHomePageIsVisible();
   await homePage.selectOneBrand();
   await homePage.verifyRelatedDressesVisible();


})

test("verify user Should able to  add to cart the recommended items in the page ", async ({ page }) => {
   const homePage = new HomePage(page);
   const cartPage = new CartPage(page);

   await homePage.navigateToUrl(data["TC013"].url);
   await homePage.verifyHomePageIsVisible();
   await homePage.addRecommendedProductToAddToCart();
   await homePage.verifyProductIsAdded();
   await cartPage.clickOnCartTab();
   await cartPage.verifyProductsDetailsVisible();

})

test("verify user Should able to signup account details as same as checkout details should be same.", async ({ page }) => {
   const homePage = new HomePage(page);
   const cartPage = new CartPage(page);
   const signUpAndLoginPage = new SignupAndLoginPage(page);
  
   await homePage.navigateToUrl(data1["TC018"].url);
   await homePage.verifyHomePageIsVisible();
   await signUpAndLoginPage.clickOnSignUpAndLoginTab();
   await signUpAndLoginPage.verifySignupPage();
   await signUpAndLoginPage.enterName(data1["TC018"].name);
   await signUpAndLoginPage.enterEmail(data1["TC018"].email);
   await signUpAndLoginPage.clickOnSignUpButton();
   await signUpAndLoginPage.selectTitle();
   await signUpAndLoginPage.enterPassword(data1["TC018"].password);
   await signUpAndLoginPage.selectDateOfBirth(data1["TC018"].day, data1["TC018"].month, data1["TC018"].year);
   await signUpAndLoginPage.selectSignUpForNewsLetterChechbox();
   await signUpAndLoginPage.selectSpecialOffersPartnersChechbox();
   await signUpAndLoginPage.enterFirstName(data1["TC018"].firstName);
   await signUpAndLoginPage.enterLastName(data1["TC018"].lastName);
   await signUpAndLoginPage.enterCompany(data1["TC018"].company);
   await signUpAndLoginPage.enterAddress(data1["TC018"].address);
   await signUpAndLoginPage.enterState(data1["TC018"].state);
   await signUpAndLoginPage.enterCity(data1["TC018"].city);
   await signUpAndLoginPage.enterZipCode(data1["TC018"].zipcode);
   await signUpAndLoginPage.enterMobileNumber(data1["TC018"].mobileNo);
   await signUpAndLoginPage.clickOnCreateAccountButton();
   await signUpAndLoginPage.verifyAccountIsCreated();
   await homePage.addOneProductToAddToCart();
   await homePage.verifyProductIsAdded();
   await cartPage.clickOnCartTab();
   await cartPage.clickOnProceedToChechOut();
   await homePage.verifyDeliveryAddressIsSame();
   await homePage.verifyBillingAddressIsSame();
   
})

test("verify user Should able to signup account details as same as checkout details should be same and delete that account successfully.", async ({ page }) => {
   const homePage = new HomePage(page);
   const cartPage = new CartPage(page);
   const signUpAndLoginPage = new SignupAndLoginPage(page);
   const deleteAccountPage = new DeleteAccountPage(page);

   await homePage.navigateToUrl(data1["TC018"].url);
   await homePage.verifyHomePageIsVisible();
   await signUpAndLoginPage.clickOnSignUpAndLoginTab();
   await signUpAndLoginPage.verifySignupPage();
   await signUpAndLoginPage.enterName(data1["TC018"].name);
   await signUpAndLoginPage.enterEmail(data1["TC018"].email);
   await signUpAndLoginPage.clickOnSignUpButton();
   await signUpAndLoginPage.selectTitle();
   await signUpAndLoginPage.enterPassword(data1["TC018"].password);
   await signUpAndLoginPage.selectDateOfBirth(data1["TC018"].day, data1["TC018"].month, data1["TC018"].year);
   await signUpAndLoginPage.selectSignUpForNewsLetterChechbox();
   await signUpAndLoginPage.selectSpecialOffersPartnersChechbox();
   await signUpAndLoginPage.enterFirstName(data1["TC018"].firstName);
   await signUpAndLoginPage.enterLastName(data1["TC018"].lastName);
   await signUpAndLoginPage.enterCompany(data1["TC018"].company);
   await signUpAndLoginPage.enterAddress(data1["TC018"].address);
   await signUpAndLoginPage.enterState(data1["TC018"].state);
   await signUpAndLoginPage.enterCity(data1["TC018"].city);
   await signUpAndLoginPage.enterZipCode(data1["TC018"].zipcode);
   await signUpAndLoginPage.enterMobileNumber(data1["TC018"].mobileNo);
   await signUpAndLoginPage.clickOnCreateAccountButton();
   await signUpAndLoginPage.verifyAccountIsCreated();
   await homePage.addOneProductToAddToCart();
   await homePage.verifyProductIsAdded();
   await cartPage.clickOnCartTab();
   await cartPage.clickOnProceedToChechOut();
   await homePage.verifyDeliveryAddressIsSame();
   await homePage.verifyBillingAddressIsSame();
   await deleteAccountPage.clickOnDeleteAccountTab();
   await deleteAccountPage.verifyAccountDeletedSuccessfully();
   
})



test("verify user Should able to signup and  purchase one order and download Invoice", async ({ page }) => {
   const homePage = new HomePage(page);
   const cartPage = new CartPage(page);
   const signUpAndLoginPage = new SignupAndLoginPage(page);

   await homePage.navigateToUrl(data1["TC018"].url);
   await homePage.verifyHomePageIsVisible();
   await signUpAndLoginPage.clickOnSignUpAndLoginTab();
   await signUpAndLoginPage.verifySignupPage();
   await signUpAndLoginPage.enterName(data1["TC018"].name);
   await signUpAndLoginPage.enterEmail(data1["TC018"].email);
   await signUpAndLoginPage.clickOnSignUpButton();
   await signUpAndLoginPage.selectTitle();
   await signUpAndLoginPage.enterPassword(data1["TC018"].password);
   await signUpAndLoginPage.selectDateOfBirth(data1["TC018"].day, data1["TC018"].month, data1["TC018"].year);
   await signUpAndLoginPage.selectSignUpForNewsLetterChechbox();
   await signUpAndLoginPage.selectSpecialOffersPartnersChechbox();
   await signUpAndLoginPage.enterFirstName(data1["TC018"].firstName);
   await signUpAndLoginPage.enterLastName(data1["TC018"].lastName);
   await signUpAndLoginPage.enterCompany(data1["TC018"].company);
   await signUpAndLoginPage.enterAddress(data1["TC018"].address);
   await signUpAndLoginPage.enterState(data1["TC018"].state);
   await signUpAndLoginPage.enterCity(data1["TC018"].city);
   await signUpAndLoginPage.enterZipCode(data1["TC018"].zipcode);
   await signUpAndLoginPage.enterMobileNumber(data1["TC018"].mobileNo);
   await signUpAndLoginPage.clickOnCreateAccountButton();
   await signUpAndLoginPage.verifyAccountIsCreated();
   await homePage.addOneProductToAddToCart();
   await homePage.verifyProductIsAdded();
   await cartPage.clickOnCartTab();
   await cartPage.clickOnProceedToChechOut();
   await cartPage.clickOnPlaceOrder();
   await cartPage.enterNameOnTheCard(data1["TC018"].nameCard);
   await cartPage.enterCardNumber(data1["TC018"].cardNo);
   await cartPage.enterCVC(data1["TC018"].cvc);
   await cartPage.enterExpireMonth(data1["TC018"].exMonth);
   await cartPage.enterExpireYear(data1["TC018"].exyear);
   await cartPage.clickOnPayAndConfirmOrderButton();
   await cartPage.verifyTheOrderPlacedSuccessfully();
   await cartPage.clickOnDownLoadInvoiceButton();
})



test("verify user Should able to signup and  purchase one order and download Invoice and delete account", async ({ page }) => {
   const homePage = new HomePage(page);
   const cartPage = new CartPage(page);
   const signUpAndLoginPage = new SignupAndLoginPage(page);
   const deleteAccountPage = new DeleteAccountPage(page);

   await homePage.navigateToUrl(data1["TC018"].url);
   await homePage.verifyHomePageIsVisible();
   await signUpAndLoginPage.clickOnSignUpAndLoginTab();
   await signUpAndLoginPage.verifySignupPage();
   await signUpAndLoginPage.enterName(data1["TC018"].name);
   await signUpAndLoginPage.enterEmail(data1["TC018"].email);
   await signUpAndLoginPage.clickOnSignUpButton();
   await signUpAndLoginPage.selectTitle();
   await signUpAndLoginPage.enterPassword(data1["TC018"].password);
   await signUpAndLoginPage.selectDateOfBirth(data1["TC018"].day, data1["TC018"].month, data1["TC018"].year);
   await signUpAndLoginPage.selectSignUpForNewsLetterChechbox();
   await signUpAndLoginPage.selectSpecialOffersPartnersChechbox();
   await signUpAndLoginPage.enterFirstName(data1["TC018"].firstName);
   await signUpAndLoginPage.enterLastName(data1["TC018"].lastName);
   await signUpAndLoginPage.enterCompany(data1["TC018"].company);
   await signUpAndLoginPage.enterAddress(data1["TC018"].address);
   await signUpAndLoginPage.enterState(data1["TC018"].state);
   await signUpAndLoginPage.enterCity(data1["TC018"].city);
   await signUpAndLoginPage.enterZipCode(data1["TC018"].zipcode);
   await signUpAndLoginPage.enterMobileNumber(data1["TC018"].mobileNo);
   await signUpAndLoginPage.clickOnCreateAccountButton();
   await signUpAndLoginPage.verifyAccountIsCreated();
   await homePage.addOneProductToAddToCart();
   await homePage.verifyProductIsAdded();
   await cartPage.clickOnCartTab();
   await cartPage.clickOnProceedToChechOut();
   await cartPage.clickOnPlaceOrder();
   await cartPage.enterNameOnTheCard(data1["TC018"].nameCard);
   await cartPage.enterCardNumber(data1["TC018"].cardNo);
   await cartPage.enterCVC(data1["TC018"].cvc);
   await cartPage.enterExpireMonth(data1["TC018"].exMonth);
   await cartPage.enterExpireYear(data1["TC018"].exyear);
   await cartPage.clickOnPayAndConfirmOrderButton();
   await cartPage.verifyTheOrderPlacedSuccessfully();
   await cartPage.clickOnDownLoadInvoiceButton();
   await deleteAccountPage.clickOnDeleteAccountTab();
   await deleteAccountPage.verifyAccountDeletedSuccessfully();

})


test("verify user should scroll up using arrow and scroll down functionality", async ({ page }) => {
   const homePage = new HomePage(page);

   await homePage.navigateToUrl(data["TC010"].url);
   await homePage.verifyHomePageIsVisible();
   await page.evaluate(()=>{
      window.scrollBy(0,90);

   })
   await homePage.clickOnUpArrowButton();
   await homePage.verifyFullFledgedpracticeIsVisible();

})

test("verify user should scroll up us", async ({ page }) => {
   const homePage = new HomePage(page);

   await homePage.navigateToUrl(data["TC010"].url);
   await homePage.verifyHomePageIsVisible();
   await page.evaluate(()=>{
      window.scrollBy(0,100);

   })
   await page.evaluate(()=>{
      window.scrollBy(100,0);

   })
   await homePage.verifyFullFledgedpracticeIsVisible();

})
