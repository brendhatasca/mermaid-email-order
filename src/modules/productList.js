import { createInputElement, createSelectElement } from "./domHelpers.js";

// will create <li> element and add product-item class to it
// with the dom helper function createInputElement, input type="number" will be created
// with the dom helper function createSelectElement, select will be created
// along with options
export function createNewProduct(productFromSearch, productList) {
    const listItem = document.createElement('li');
    listItem.classList.add('product-item');

    const qtyInput = createInputElement("number", "product-item-quantity");

    const unitOptions = [
        { value: "lbs", text: "lbs"},
        { value: "cases", text: "cases"},
        { value: "sides", text: "sides" }
    ];
    const unitInput = createSelectElement(unitOptions, "product-item-unit");

    const productName = document.createElement('div');
    productName.classList.add('product-item-description');
    productName.textContent = productFromSearch.value;

    listItem.append(qtyInput, unitInput, productName);
    productList.appendChild(listItem);
};

// gonna loop through all <li> items retrieving their children's values (name, unit, qty)
// and generate an array of products that are needed
export function createProductList() {
    const itemsList = document.querySelectorAll('.product-item');
    let fullProductList = [];

    itemsList.forEach(item => {
        const quantity = item.querySelector('.product-item-quantity');
        const unit = item.querySelector('.product-item-unit');
        const itemName = item.querySelector('.product-item-description');

        const itemObj = createItemObj(quantity, unit, itemName);
        fullProductList.push(itemObj)
    });

    // will create an obj storing all data about the product
    function createItemObj(qty, unitMeasure, product) {
    const itemObj = { };

    itemObj.quantity = qty.value;
    itemObj.unit = unitMeasure.value;
    itemObj.productName = product.textContent;
    
    return itemObj;
    };

    return fullProductList;
};
