import {test, expect} from '@playwright/test'
import { HomePage } from '../Pages/HomePage'

test('Buscar producto', async({page})=>{
    const home = new HomePage (page)
    await home.navigate()
    await home.searchProduct('rosas')
    await expect(page).toHaveURL(/s=rosas/)
})