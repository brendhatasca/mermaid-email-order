old 

function addToList() {

    const listItem = document.createElement('li');
    listItem.classList.add('product-item');

    const qtyInput = document.createElement('input');
    qtyInput.type = "number";
    qtyInput.classList.add("product-item-quantity");

    const unitInput = document.createElement('select');
    unitInput.classList.add('product-item-unit');

    const unitLbs = document.createElement('option');
    unitLbs.value = "lbs";
    unitLbs.textContent = "lbs";
    const unitCases = document.createElement('option');
    unitCases.value = "cases";
    unitCases.textContent = "cases";
    unitInput.append(unitCases);
    unitInput.append(unitLbs);

    const productName = document.createElement('div');
    productName.classList.add('product-item-description');
    productName.textContent = productFromSearch.value;

    listItem.appendChild(qtyInput);
    listItem.appendChild(unitInput);
    listItem.appendChild(productName);

    productList.appendChild(listItem)
}