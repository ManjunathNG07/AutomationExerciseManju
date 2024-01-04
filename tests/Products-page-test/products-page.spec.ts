import{test} from "@playwright/test";
import ProductsPage from "../../PageObjects/Products-page/products-page";
import CartPage from "../../PageObjects/Cart-page/cart-page";
import data from "../../TestData/products-data/products-data.json";




test("verify user should be  all products and product details page",async({page})=>{
 const productsPage =new ProductsPage(page);
 

   await productsPage.goToLogin(data["TC008"].url);
   await productsPage.clickOnProductsTab();
   await productsPage.clickOnViewProduct();
   await productsPage.verifyProductsDetailsIsvisible();
})

test("verify user Should able to search the products  and  all the products related to search are visible",async({page})=>{
    const productsPage =new ProductsPage(page);
   
      await productsPage.goToLogin(data["TC009"].url);
      await productsPage.clickOnProductsTab();
      await productsPage.searchTheProduct(data["TC009"].search);
      await productsPage.verifySearchRelatedProductsVisible();
      
   })

   test("verify user Should able to add multiple products to cart in product page and verify  details of products in cart page",async({page})=>{
    const productsPage =new ProductsPage(page);
    const cartPage=new CartPage(page);
   
      await productsPage.goToLogin(data["TC009"].url);
      await productsPage.clickOnProductsTab();
      await productsPage.addOneProductToAddToCart();
      await productsPage.verifyProductIsAdded();
      await productsPage.addOneMoreProductToCart();
      await productsPage.verifyProductIsAdded();
      await cartPage.clickOnCartTab();
      await cartPage.verifyProductsDetailsVisible();

        
   })


   test("verify user should able to  add review on products in product page",async({page})=>{
    const productsPage =new ProductsPage(page);
   
      await productsPage.goToLogin(data["TC009"].url);
      await productsPage.clickOnProductsTab();
      await productsPage.clickOnViewProduct()
      await productsPage.enterNameForReviewTheProduct(data["TC023"].name);
      await productsPage.enterEmailForReviewTheProduct(data["TC023"].email);
      await productsPage.enterReviewTheProduct(data["TC023"].review);
      await productsPage.clickOnSubmitButton();
      await productsPage.verifyReviewSentSuccessfully();
      
   })