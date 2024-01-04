import {Locator,Page,expect} from "@playwright/test";

export default class DeleteAccountPage{
   readonly page: Page;
   readonly deleteAccountTab: Locator;
   readonly accountDeletedText: Locator;
   readonly continueButton: Locator;
 
    constructor(page:Page){
        this.page=page;
        this.deleteAccountTab=page.locator("//a[.=' Delete Account']");
        this.accountDeletedText=page.locator("//b[.='Account Deleted!']");
        this.continueButton=page.locator("//a[.='Continue']");

    }

    async clickOnDeleteAccountTab(){
        await this.deleteAccountTab.click();
    }

    async verifyAccountDeletedSuccessfully(){
        await expect(this.accountDeletedText).toBeTruthy();
        await this.continueButton.click();
    }


}


