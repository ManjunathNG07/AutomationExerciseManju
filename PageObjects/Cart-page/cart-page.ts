import {Locator,Page,expect} from "@playwright/test";

export default class CartPage{
   readonly page: Page;
    cartTabLocator: Locator;
    subscribeLocator: Locator;
    subscribeButton: Locator;
    subscribeSuccessMessage: Locator;
    productsList: Locator;
    proceeToCheckOutLocator: Locator;
    registerAndLoginButton: Locator;
    placeOrderButton: Locator;
    nameOnCardLocator: Locator;
    cardNumberLocator: Locator;
    cvcLocator: Locator;
    expireLocator: Locator;
    yearLocator: Locator;
    payAndConfirmOrderButton: Locator;
    orderplacedSuccess: Locator;
    downloadInvoicelocator: Locator;
    removeProduct: Locator;
    verifyProductremove: Locator;
 
    

 
    constructor(page:Page){
        this.page=page;
        this.cartTabLocator=page.locator("//a[.=' Cart']");
        this.subscribeLocator=page.locator('[id="susbscribe_email"]');
        this.subscribeButton=page.locator('[id="subscribe"]');
        this.subscribeSuccessMessage=page.locator('[id="success-subscribe"]');
        this.productsList=page.locator('[id="cart_info_table"]');
        this.proceeToCheckOutLocator=page.locator("//a[.='Proceed To Checkout']");
        this.registerAndLoginButton=page.locator("//a[.='Register / Login']");
        this.placeOrderButton=page.locator("//a[.='Place Order']");
        this.nameOnCardLocator=page.locator('[name="name_on_card"]');
        this.cardNumberLocator=page.locator('[name="card_number"]');
        this.cvcLocator=page.locator('[name="cvc"]');
        this.expireLocator=page.locator('[name="expiry_month"]');
        this.yearLocator=page.locator('[name="expiry_year"]');
        this.payAndConfirmOrderButton=page.locator('[id="submit"]');
        this.orderplacedSuccess=page.locator('[data-qa="order-placed"]');
        this.downloadInvoicelocator=page.locator("//a[.='Download Invoice']");
        this.removeProduct=page.locator('[class="cart_quantity_delete"]');
        this.verifyProductremove=page.locator("//b[.='Cart is empty!']");
       
    
    }

    async goToLogin(url:string){
        await this.page.goto(url);
    }

    async clickOnCartTab(){
        await this.cartTabLocator.click();
    }

    async enterEmailForSubscription(email:string){
        await this.subscribeLocator.fill(email);
        await this.subscribeButton.click();
    }

    async verifySubscriptionIsSuccessfull(){
        expect (this.subscribeSuccessMessage).toBeTruthy();
    }

    async verifyProductsDetailsVisible(){
        expect(this.productsList).toBeTruthy();
    }

    async clickOnProceedToChechOut(){
        await this.proceeToCheckOutLocator.click();
    }

    async clickOnRigsterAndLoginLink(){
        await this.registerAndLoginButton.click();
    }

    async clickOnPlaceOrder(){
        await this.placeOrderButton.click();
    }

    async enterNameOnTheCard(nameCard:string){
        await this.nameOnCardLocator.fill(nameCard);
    }

    async enterCardNumber(cardNo:string){
        await this.cardNumberLocator.fill(cardNo);
    }

    async enterCVC(cvc:string){
        await this.cvcLocator.fill(cvc);
    }

    async enterExpireMonth(exMonth:string){
        await this.nameOnCardLocator.fill(exMonth);
    }

    async enterExpireYear(exYear:string){
        await this.yearLocator.fill(exYear);
    }

    async clickOnPlaceOrderButton(){
        await this.placeOrderButton.click();
    }

    async verifyTheOrderPlacedSuccessfully(){
        expect(this.orderplacedSuccess).toBeTruthy();
    }

    async clickOnDownLoadInvoiceButton(){
        await this.downloadInvoicelocator.click();
    }

    async clickOnPayAndConfirmOrderButton(){
        await this.payAndConfirmOrderButton.click();
    }

    async removeProductFromCart(){
        await this.removeProduct.click();
    }

    async verifyProductIsRemovedFromCart(){
        expect(this.verifyProductremove).toBeTruthy();
    }
}