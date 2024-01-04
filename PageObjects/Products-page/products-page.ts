import {Locator,Page,expect} from "@playwright/test";

export default class ProductsPage{
   readonly page: Page;
    productsTab: Locator;
    viewProductLocator: Locator;
    searchInputLocator: Locator;
    searchButton: Locator;
    productInformation: Locator;
    searchedProductList: Locator;
    addToCartSecondButton: Locator;
    addToCartButton: Locator;
    continueButton: Locator;
    nameLocator: Locator;
    emaillocator: Locator;
    submitButton: Locator;
    reviewSection: Locator;
    reviewSuccess: Locator;
  
    

 
    constructor(page:Page){
        this.page=page;
        this.productsTab=page.locator("//a[contains(.,' Products')]");
        this.viewProductLocator=page.locator("//a[.='View Product']").first();
        this.searchInputLocator=page.locator('[id="search_product"]');
        this.searchButton=page.locator('[id="submit_search"]');
        this.productInformation=page.locator('[class="product-information"]');
        this.searchedProductList=page.locator('[class="features_items"]');
        this.addToCartButton=page.locator("//a[.='Add to cart']").first();
        this.addToCartSecondButton=page.locator("//a[.='Add to cart']").first();
        this.continueButton=page.locator("//button[.='Continue Shopping']");
        this.nameLocator=page.locator('[id="name"]');
        this.emaillocator=page.locator('[id="email"]');
        this.reviewSection=page.locator('[id="review"]');
        this.submitButton=page.locator('[id="button-review"]');
        this.reviewSuccess=page.locator("//span[.='Thank you for your review.']");
        
    }

    async goToLogin(url:string){
        await this.page.goto(url);
        await this.page.waitForLoadState('load');
    }

    async clickOnProductsTab(){
        await this.productsTab.click();
    }

    async clickOnViewProduct(){
        await this.viewProductLocator.click();
    }

    async verifyProductsDetailsIsvisible(){
        expect(this.productInformation).toBeTruthy();
    }

    async searchTheProduct(search:string){
        await this.searchInputLocator.fill(search);
        await this.searchButton.click();
    }

    async verifySearchRelatedProductsVisible(){
        expect(this.searchedProductList).toBeTruthy();
    }

    async addOneProductToAddToCart(){
        await this.addToCartButton.click();
    }

     async verifyProductIsAdded(){
        expect(this.continueButton).toBeTruthy();
        await this.continueButton.click();
     }

     async addOneMoreProductToCart(){
        await this.page.waitForLoadState("load")
        await this.addToCartSecondButton.click();
     }

     async enterNameForReviewTheProduct(name:string){
        await this.nameLocator.fill(name);
     }

     async enterEmailForReviewTheProduct(email:string){
        await this.emaillocator.fill(email);
     }

     async enterReviewTheProduct(reviw:string){
        await this.reviewSection.fill(reviw);
     }

     async clickOnSubmitButton(){
        await this.submitButton.click();
     }

     async verifyReviewSentSuccessfully(){
        expect(this.reviewSuccess).toBeTruthy();
     }



}