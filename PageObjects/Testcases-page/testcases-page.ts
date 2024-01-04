import {Locator,Page,expect} from "@playwright/test";

export default class TestCasesPage{
   readonly page: Page;
    testCasesTab: Locator;
    verifyTestcasePage: Locator;
    

 
    constructor(page:Page){
        this.page=page;
        this.testCasesTab=page.locator("//a[.=' Test Cases']");
        this.verifyTestcasePage=page.locator("//b[.='Test Cases']");
       
        
        

    }

    async goToLogin(url:string){
        await this.page.goto(url);
    }

    async clickOnTestCasesTab(){
        await this.testCasesTab.click();
    }

    async verifyNavaigateTestcasePageSuccessfully(){
        expect (this.verifyTestcasePage).toBeTruthy();
    }
}