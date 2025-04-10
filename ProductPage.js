import { BasePage } from "./BasePage";
export class ProductPage extends BasePage {
    constructor(page) {
      super(page);
      this.addToCartButton = '#product-21738 > div.summary.entry-summary > form > button';
    }
  
    async addToCart() {
      await this.page.click(this.addToCartButton);
    }
  }