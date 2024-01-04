import { test } from "@playwright/test";
import DeleteAccountPage from "../../PageObjects/DeleteAccount-page/deleteAccount-page";
import HomePage from "../../PageObjects/Home-page/home-page";
import { SignupAndLoginPage } from "../../PageObjects/SIgnup_Login-page/signup-login-page";
import data from "../../TestData/Signup-Login-data/signup-login-data.json";



test("verify user Should able to signup the account and verify user should able to delete account succsussfully", async ({ page }) => {
    const signUpAndLoginPage = new SignupAndLoginPage(page);
    const deleteAccountpage = new DeleteAccountPage(page);
    const homePage = new HomePage(page);
    await signUpAndLoginPage.goToLogin(data["TS001"].url);
    await homePage.verifyHomePageIsVisible();
    await signUpAndLoginPage.clickOnSignUpAndLoginTab();
    await signUpAndLoginPage.verifySignupPage();
    await signUpAndLoginPage.enterName(data["TS001"].name);
    await signUpAndLoginPage.enterEmail(data["TS001"].email);
    await signUpAndLoginPage.clickOnSignUpButton();
    await signUpAndLoginPage.selectTitle();
    await signUpAndLoginPage.enterPassword(data["TS001"].password);
    await signUpAndLoginPage.selectDateOfBirth(data["TS001"].day,data["TS001"].month,data["TS001"].year);
    await signUpAndLoginPage.selectSignUpForNewsLetterChechbox();
    await signUpAndLoginPage.selectSpecialOffersPartnersChechbox();
    await signUpAndLoginPage.enterFirstName(data["TS001"].firstName);
    await signUpAndLoginPage.enterLastName(data["TS001"].lastName);
    await signUpAndLoginPage.enterCompany(data["TS001"].company);
    await signUpAndLoginPage.enterAddress(data["TS001"].address);
    await signUpAndLoginPage.enterState(data["TS001"].state);
    await signUpAndLoginPage.enterCity(data["TS001"].city);
    await signUpAndLoginPage.enterZipCode(data["TS001"].zipcode);
    await signUpAndLoginPage.enterMobileNumber(data["TS001"].mobileNo);
    await signUpAndLoginPage.clickOnCreateAccountButton();
    await signUpAndLoginPage.verifyAccountIsCreated();
    await deleteAccountpage.clickOnDeleteAccountTab();
    await deleteAccountpage.verifyAccountDeletedSuccessfully();
    
})


test("verify user Should able to login with valid email and password and verify user should able to delete account succsussfully", async ({ page }) => {
    const signUpAndLoginPage = new SignupAndLoginPage(page);
    const deleteAccountpage = new DeleteAccountPage(page);
    const homePage = new HomePage(page);
    await signUpAndLoginPage.goToLogin(data["TS002"].url);
    await homePage.verifyHomePageIsVisible();
    await signUpAndLoginPage.clickOnSignUpAndLoginTab();
    await signUpAndLoginPage.enterLoginEmailAddress(data["TS002"].email);
    await signUpAndLoginPage.enterLoginPassword(data["TS002"].password);
    await signUpAndLoginPage.clickOnLoginButton();
    await homePage.verifyLoggedInSuccessfully();
    await deleteAccountpage.clickOnDeleteAccountTab();
    await deleteAccountpage.verifyAccountDeletedSuccessfully();
})

test("verify user Should able to login with Invalid email and password check proper error message ", async ({ page }) => {
    const signUpAndLoginPage = new SignupAndLoginPage(page);
    const deleteAccountpage = new DeleteAccountPage(page);
    const homePage = new HomePage(page);
    await signUpAndLoginPage.goToLogin(data["TS003"].url);
    await homePage.verifyHomePageIsVisible();
    await signUpAndLoginPage.clickOnSignUpAndLoginTab();
    await signUpAndLoginPage.enterLoginEmailAddress(data["TS003"].email);
    await signUpAndLoginPage.enterLoginPassword(data["TS003"].password);
    await signUpAndLoginPage.clickOnLoginButton();
    await signUpAndLoginPage.verifyProperErrorMessage();

})


test("verify user Should able to login with valid email and password and Logout succsussfully", async ({ page }) => {
    const signUpAndLoginPage = new SignupAndLoginPage(page);
    const deleteAccountpage = new DeleteAccountPage(page);
    const homePage = new HomePage(page);
    await signUpAndLoginPage.goToLogin(data["TS004"].url);
    await homePage.verifyHomePageIsVisible();
    await signUpAndLoginPage.clickOnSignUpAndLoginTab();
    await signUpAndLoginPage.enterLoginEmailAddress(data["TS004"].email);
    await signUpAndLoginPage.enterLoginPassword(data["TS004"].password);
    await signUpAndLoginPage.clickOnLoginButton();
    await homePage.verifyLoggedInSuccessfully();
    await homePage.clickOnLogOutButton();
    await homePage.verifyLogoutSuccessfully();
})

test("verify user Should able to login with  name and already registered email address check proper error message ", async ({ page }) => {
    const signUpAndLoginPage = new SignupAndLoginPage(page);
    const deleteAccountpage = new DeleteAccountPage(page);
    const homePage = new HomePage(page);
    await signUpAndLoginPage.goToLogin(data["TS005"].url);
    await homePage.verifyHomePageIsVisible();
    await signUpAndLoginPage.clickOnSignUpAndLoginTab();
    await signUpAndLoginPage.verifySignupPage();
    await signUpAndLoginPage.enterName(data["TS005"].name);
    await signUpAndLoginPage.enterEmail(data["TS005"].email);
    await signUpAndLoginPage.clickOnSignUpButton();
    await signUpAndLoginPage.verifyEmailIdIsAlreadyExistMassage();

})