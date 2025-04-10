import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
    constructor(page) {
      super(page);
      this.checkoutButton = '#product-9543 > div.summary.entry-summary > form > div > div > div.woocommerce-variation-add-to-cart.variations_button.woocommerce-variation-add-to-cart-enabled > button';
    }
  
    async goToCheckout() {
      await this.page.click(this.checkoutButton);
    }
  }