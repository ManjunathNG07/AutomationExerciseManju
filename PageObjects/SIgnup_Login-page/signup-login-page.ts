import { Locator, Page, expect } from "@playwright/test";

export class SignupAndLoginPage {
    readonly page: Page;
    readonly signUpAndLoginTabLocator: Locator;
    readonly newUserSignupPage: Locator;
    readonly nameLocator: Locator;
    readonly emailAddressSignupLocator: Locator;
    readonly signUpButtonLocator: Locator;
    readonly genderLocator: Locator;
    readonly passwordLocator: Locator;
    readonly accountInformationText: Locator;
    readonly dateOfBirthDaysLocator: Locator;
    readonly dateOfBirthYearsLocator: Locator;
    readonly dateOfBirthMonthsLocator: Locator;
    readonly newsletterCheckbox: Locator;
    readonly specialOffersCheckbox: Locator;
    readonly firstNameLocator: Locator;
    readonly lastNameLocator: Locator;
    readonly companyNameLocator: Locator;
    readonly addressLocator: Locator;
    readonly countryLocator: Locator;
    readonly stateLocator: Locator;
    readonly cityLocator: Locator;
    readonly zipcodeLocator: Locator;
    readonly mobileNumberLocator: Locator;
    readonly createAccountButton: Locator;
    readonly accountCreatedText: Locator;
    readonly continueLink: Locator;
    emailAddressLoginLocator: Locator;
    loginPasswordLocator: Locator;
    LoginButton: Locator;
    errorMessage: Locator;
    emailIdAlreadyExistMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signUpAndLoginTabLocator = page.locator("//a[.=' Signup / Login']");
        this.newUserSignupPage = page.locator("//h2[.='New User Signup!']");
        this.nameLocator = page.locator('[placeholder="Name"]');
        this.emailAddressSignupLocator = page.locator('[placeholder="Email Address"]').last();
        this.signUpButtonLocator = page.locator("//button[.='Signup']");
        this.accountInformationText = page.locator("//b[.='Enter Account Information']");
        this.genderLocator = page.locator('[name="title"]').first();
        this.passwordLocator = page.locator('[id="password"]');
        this.dateOfBirthDaysLocator = page.locator('[id="days"]');
        this.dateOfBirthMonthsLocator = page.locator('[id="months"]');
        this.dateOfBirthYearsLocator = page.locator('[id="years"]');
        this.newsletterCheckbox = page.locator('[id="newsletter"]');
        this.specialOffersCheckbox = page.locator('[id="optin"]');


        this.firstNameLocator = page.locator('[id="first_name"]');
        this.lastNameLocator = page.locator('[id="last_name"]');
        this.companyNameLocator = page.locator('[id="company"]');
        this.addressLocator = page.locator('[id="address1"]');
        this.countryLocator = page.locator('[id="country"]');
        this.stateLocator = page.locator('[id="state"]');
        this.cityLocator = page.locator('[id="city"]');
        this.zipcodeLocator = page.locator('[id="zipcode"]');
        this.mobileNumberLocator = page.locator('[id="mobile_number"]');
        this.createAccountButton = page.locator("//button[.='Create Account']");

        this.accountCreatedText = page.locator("//b[.='Account Created!']");
        this.continueLink = page.locator("//a[.='Continue']");
        this.emailIdAlreadyExistMessage=page.locator("//p[.='Email Address already exist!']");


        this.emailAddressLoginLocator = page.locator('[placeholder="Email Address"]').first();
        this.loginPasswordLocator=page.locator('[placeholder="Password"]');
        this.LoginButton=page.locator("//button[.='Login']");
        this.errorMessage=page.locator("//p[.='Your email or password is incorrect!']");


    }


    async goToLogin(url: string) {
        await this.page.goto(url);
        await this.page.waitForLoadState('load');
    }

    async clickOnSignUpAndLoginTab() {
        await this.signUpAndLoginTabLocator.click();
    }

    async  verifySignupPage() {
        await expect(this.newUserSignupPage).toBeTruthy();
    }

    async enterEmail(email: string) {
        await this.emailAddressSignupLocator.fill(email);
    }

    async enterName(name: string) {
        await this.nameLocator.fill(name);
    }

    async clickOnSignUpButton() {
        await this.signUpButtonLocator.click();
    }

    async selectTitle() {
        await this.genderLocator.click();
    }

    async enterPassword(password:string){
        await this.passwordLocator.fill(password);
    }

    async selectDateOfBirth(day:string,month:string,year:string){
        await this.dateOfBirthDaysLocator.selectOption(day);
        await this.dateOfBirthMonthsLocator.selectOption(month);
        await this.dateOfBirthYearsLocator.selectOption(year);
    }

    async selectSignUpForNewsLetterChechbox(){
        await this.newsletterCheckbox.click();
    }

    async selectSpecialOffersPartnersChechbox(){
        await this.specialOffersCheckbox.click();
    }

    async enterFirstName(firstName:string){
        await this.firstNameLocator.fill(firstName);
    }

    async enterLastName(lastName:string){
        await this.lastNameLocator.fill(lastName);
    }

    async enterCompany(company:string){
        await this.companyNameLocator.fill(company);
    }

    async enterAddress(address:string){
        await this.addressLocator.fill(address);
    }

    async selectCountry(country){
        await this.countryLocator.selectOption(country);
    }

    async enterState(state:string){
        await this.stateLocator.fill(state);
    }

    async enterCity(city:string){
        await this.cityLocator.fill(city);
    }

    async enterZipCode(zipcode:string){
        await this.zipcodeLocator.fill(zipcode);
    }

    async enterMobileNumber(mobileNo:string){
        await this.mobileNumberLocator.fill(mobileNo);
    }

    async clickOnCreateAccountButton(){
        await this.createAccountButton.click();
    }

    async verifyAccountIsCreated(){
        await expect(this.accountCreatedText).toBeVisible();
        await this.continueLink.click()
    }

    async verifyEmailIdIsAlreadyExistMassage(){
        expect(this.emailIdAlreadyExistMessage).toBeTruthy();
    }

    //-----------------Login-----------------

    async enterLoginEmailAddress(email:string){
        await this.emailAddressLoginLocator.fill(email);
    }

    async enterLoginPassword(password:string){
        await  this.loginPasswordLocator.fill(password);
    }

    async clickOnLoginButton(){
        await this.LoginButton.click();
    }

    async verifyProperErrorMessage(){
        await expect(this.errorMessage).toBeTruthy();
    }
    

    
}