import { test, expect } from '@playwright/test';
import { products } from '../../test-data/selectproducts';
import { SelectProduct } from '../../pages/UI/SelectProduct';


test('select product and add to chart', async ({ page }) => {

    const productsAdded = new SelectProduct(page);
    await productsAdded.selectProduct(products);

    //await expect(productsAdded.addedmodal).toBeVisible();
    //to await
}
)