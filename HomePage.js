import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
    constructor (page){
        super(page)
        this.searchInput = '#dgwt-wcas-search-input-1';
        this.searchButton = '#sticky-wrapper > header > div.header-wrapper.container > nav.header-cart > ul > li:nth-child(1) > div > div > div.dgwt-wcas-search-icon.js-dgwt-wcas-search-icon-handler > svg';

    }

    async searchProduct(productName){
        await this.page.click(this.searchButton)
        await this.page.waitForSelector(this.searchInput)
        await this.page.fill(this.searchInput, productName)
        await this.page.press(this.searchInput, 'Enter')
    }
}