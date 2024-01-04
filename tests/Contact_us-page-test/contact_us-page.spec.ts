import{test} from "@playwright/test";
import ContactUsPage from "../../PageObjects/Contact_Us-page/contact-us-page";
import data from "../../TestData/Contact_us-data/contact-us-data.json";



test("verify user Should able to click on contact us button and submit successfully",async({page})=>{
    const contactUsPage= new ContactUsPage(page);

    await contactUsPage.goToLogin(data.url);
    await contactUsPage.clickOnContactUsTab();
    await contactUsPage.enterName(data.name);
    await contactUsPage.enterEmail(data.email);
    await contactUsPage.enterSubject(data.subject);
    await contactUsPage.enterUserMessageHere(data.message);
    await contactUsPage.clickOnSubmitButton();
    await contactUsPage.verifySubmittedSuccssfully();
})