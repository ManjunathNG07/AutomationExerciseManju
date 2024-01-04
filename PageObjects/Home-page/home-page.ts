import { Locator, Page, expect } from "@playwright/test";

export default class HomePage {
    readonly page: Page;
    readonly homeIconLocator: Locator;
    readonly logoutLocator: Locator;
    readonly subscribeLocator: Locator;
    readonly subscribeButton: Locator;
    readonly subscribeSuccessMessage: Locator;
    readonly addToCartButton: Locator;
    readonly continueButton: Locator;
    readonly qunatityLocator: Locator;
    readonly viewProductLocator: Locator;
    readonly addToCartInView: Locator;
    readonly womenCategory: Locator;
    readonly womenDress: Locator;
    readonly menCategory: Locator;
    readonly menTshirt: Locator;
    readonly dressesvisible: Locator;
    hAndMBrand: Locator;
    recommendedAddToCart: Locator;
    deliveryAddress: Locator;
    billingAddress: Locator;
    uparrowlocator: Locator;
    fullfligedLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeIconLocator = page.locator('[class="fa fa-home"]');
        this.logoutLocator = page.locator("//a[.=' Logout']");
        this.subscribeLocator = page.locator('[id="susbscribe_email"]');
        this.subscribeButton = page.locator('[id="subscribe"]');
        this.subscribeSuccessMessage = page.locator('[id="success-subscribe"]');
        this.addToCartButton = page.locator("//a[.='Add to cart']").first();
        this.addToCartInView = page.locator('//button[contains(.,"Add to cart")]');
        this.continueButton = page.locator("//button[.='Continue Shopping']");
        this.qunatityLocator = page.locator('[id="quantity"]');
        this.viewProductLocator = page.locator("//a[.='View Product']").first();

        this.womenCategory = page.locator('[href="#Women"]');
        this.womenDress = page.locator("//a[.='Dress ']").first();
        this.menCategory = page.locator('[href="#Men"]');
        this.menTshirt = page.locator("//a[.='Tshirts ']");
        this.dressesvisible = page.locator('[class="features_items"]');
        this.hAndMBrand=page.locator('[href="/brand_products/H&M"]');
        this.recommendedAddToCart=page.locator('//div[@id="recommended-item-carousel" ]//a').first();
        this.deliveryAddress=page.locator('[id="address_delivery"]');
        this.billingAddress=page.locator('[id="address_invoice"]');

        this.uparrowlocator=page.locator('[id="scrollUp"]');
        this.fullfligedLocator=page.locator("//h2[.='Full-Fledged practice website for Automation Engineers']");
        
    }

    async navigateToUrl(url: string) {
        await this.page.goto(url);
        await this.page.waitForLoadState("load");
    }

    async verifyLoggedInSuccessfully() {
        await expect(this.logoutLocator).toBeTruthy();
    }

    async verifyHomePageIsVisible() {
        await expect(this.homeIconLocator).toBeVisible();
    }

    async clickOnLogOutButton() {
        await this.logoutLocator.click();
    }

    async verifyLogoutSuccessfully() {
        expect(this.homeIconLocator).toBeTruthy();
    }

    async enterEmailForSubscription(email: string) {
        await this.subscribeLocator.fill(email);
        await this.subscribeButton.click();
    }

    async verifySubscriptionIsSuccessfull() {
        expect(this.subscribeSuccessMessage).toBeTruthy();
    }

    async addOneProductToAddToCart() {
        await this.addToCartButton.click();
    }

    async verifyProductIsAdded() {
        expect(this.continueButton).toBeTruthy();
        await this.continueButton.click();
    }


    async clickOnViewProduct() {
        await this.viewProductLocator.click();
    }

    async increaseQunatity(quantity: string) {
        await this.qunatityLocator.fill(quantity);
    }

    async clickOnAddToCartThePrdouct() {
        await this.addToCartInView.click();
    }

    async clickOnWomenCategory(){
        await this.womenCategory.click();
    }

    async selectWomenDress(){
        await this.womenDress.click();
    }

    async verifyRelatedDressesVisible(){
        expect(this.dressesvisible).toBeTruthy();
    }

    async clickOnMenCategory(){
        await this.menCategory.click();
    }

    async selectMenTShirt(){
        await this.menTshirt.click();
    }

    async selectOneBrand(){
        await this.hAndMBrand.click();
    }

    async addRecommendedProductToAddToCart(){
        await this.recommendedAddToCart.click();
    }

    async verifyDeliveryAddressIsSame(){
        expect(this.deliveryAddress).toBeTruthy();
    }

    async verifyBillingAddressIsSame(){
        expect(this.billingAddress).toBeTruthy();
    }

    async clickOnUpArrowButton(){
        await this.uparrowlocator.click();
    }

    async verifyFullFledgedpracticeIsVisible(){
        expect(this.fullfligedLocator).toBeTruthy();
    }
}