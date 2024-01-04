import {Locator,Page,expect} from "@playwright/test";

export default class ContactUsPage{
   readonly page: Page;
    contactUsTab: Locator;
    nameLocator: Locator;
    emailLocator: Locator;
    subjectLocator: Locator;
    userMessageHereLocator: Locator;
    submitButton: Locator;
    submittedMessage: Locator;

 
    constructor(page:Page){
        this.page=page;
        this.contactUsTab=page.locator("//a[.= ' Contact us']");
        this.nameLocator=page.locator('[placeholder="Name"]');
        this.emailLocator=page.locator('[placeholder="Email"]');
        this.subjectLocator=page.locator('[placeholder="Subject"]');
        this.userMessageHereLocator=page.locator('[placeholder="Your Message Here"]');
        this.submitButton=page.locator('[name="submit"]');
        this.submittedMessage=page.locator('[class="status alert alert-success"]');
        
        

    }

    async goToLogin(url:string){
        await this.page.goto(url);
    }

    async clickOnContactUsTab(){
        await this.contactUsTab.click();
    }

    async enterName(name:string){
        await this.nameLocator.fill(name);
    }

    async enterEmail(email:string){
        await this.emailLocator.fill(email);
    }
    async enterSubject(subject:string){
        await this.subjectLocator.fill(subject);
    }
    async enterUserMessageHere(message:string){
        await this.userMessageHereLocator.fill(message);
    }

    async clickOnSubmitButton(){
        await this.submitButton.click();
    }

    async verifySubmittedSuccssfully(){
        expect(this.submittedMessage).toBeTruthy();
    }
    
}