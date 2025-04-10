
export class BuyPage {
    constructor(page) {
      this.page = page;
      this.title = '#post-196 > header > h1';
      this.firstName = '#billing_first_name';
      this.lastName = '#billing_last_name';
      this.documentId = '#billing_document_id';
      this.phone = '#billing_phone';
      this.email = '#billing_email';
      this.createAccountCheckbox = '#createaccount';
      this.fullNameCard = '#order_nombre_completo';
      this.city = '#order_ciudad';
      this.address = '#order_additional_address';
      this.additionalAddress = '#order_additional_address_2';
      this.mobile = '#order_additional_phone';
      this.message = '#order_comments';
      this.cardSignature = '#order_additional_card_signature';
      this.deliveryDate = '#order_additional_date';
      this.deliveryHour = '#order_additional_time';
      this.cardMessage = '#order_additional_card_message';
      this.placeOrderButton = '#place_order';
    }
  
    async fillOutTheForm(data) {
      await this.page.waitForSelector(this.firstName);
      await this.page.fill(this.firstName, data.firstName);
      await this.page.fill(this.lastName, data.lastName);
      await this.page.fill(this.documentId, data.documentId);
      await this.page.fill(this.phone, data.phone);
      await this.page.fill(this.email, data.email);
  
      await this.page.check(this.createAccountCheckbox);
  
      await this.page.fill(this.fullNameCard, data.fullNameCard);
      await this.page.selectOption(this.city, data.city);
      await this.page.fill(this.address, data.address);
      await this.page.fill(this.additionalAddress, data.additionalAddress);
      await this.page.fill(this.mobile, data.mobile);
      await this.page.fill(this.message, data.message);
      await this.page.fill(this.cardSignature, data.cardSignature);
      await this.page.fill(this.deliveryDate, data.deliveryDate);
      await this.page.selectOption(this.deliveryHour, data.deliveryHour);
      await this.page.fill(this.cardMessage, data.cardMessage);
  
      await this.page.click(this.placeOrderButton);
    }
  }