import{test} from "@playwright/test";
import TestCasesPage from "../../PageObjects/Testcases-page/testcases-page";
import data from "../../TestData/Contact_us-data/contact-us-data.json";



test("verify user Should able to click on 'Test Cases' button and  user is navigated to test cases page successfully",async({page})=>{
  const testCasePage = new TestCasesPage(page);
  await testCasePage.goToLogin(data.url);
  await testCasePage.clickOnTestCasesTab();
  await testCasePage.verifyNavaigateTestcasePageSuccessfully();
  
})

   