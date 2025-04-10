import {test, expect} from '@playwright/test';
import { HomePage } from '../Pages/HomePage';
import { ProductPage } from '../Pages/ProductPage';

test('agregar productos al carrito', async({page})=>{
    const home = new HomePage(page)
    const product = new ProductPage(page)

    await home.navigate()
    await home.searchProduct('rosas')
    await page.click('#main > section.main-category-wrapper.vc-section.container-inner > div > div.wpb_column.vc_column_container.vc_col-md-9.vc_col-md-push-3.vc_col-has-fill.woocommerce-product-holder > ul > li.product.type-product.post-9543.status-publish.first.instock.product_cat-4-amor-y-romance-flores-san-angel-floristerias.product_cat-https-sanangel-com-co-categoria-31-aniversarios-san-angel-floristerias-medellin-regalos.product_cat-8-ramos-de-flores-para-cumpleanos.product_cat-mas-de-200k.product_cat-22-rosas-san-angel-floristerias-medellin.has-post-thumbnail.featured.shipping-taxable.purchasable.product-type-variable.has-default-attributes > a > img') 
    await product.addToCart()

    await expect(page.locator('.woocommerce-message')).toHaveText(/se ha añadido a tu carrito/i);

    const tittle = page.locator('#post-196 > header > h1');
    await expect(tittle).toHaveText('Finalizar Compra');
})