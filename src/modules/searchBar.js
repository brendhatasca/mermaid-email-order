import { SEAFOOD_LIST } from "./products.js";
import { createNewProduct } from "./productList.js";

const dropdown = document.getElementById('dropdown');
const productList = document.getElementById('product-list');

export function populateDropdownMenu() {
    const searchInput = document.querySelector('.search-bar');
    const query = searchInput.value.toLowerCase(); // retrieve current input value and maek it lower case
    const nameArray = SEAFOOD_LIST.map(item => item.name); // will return array of name strings
    dropdown.innerHTML = '';  // Clear previous results, otherwise it would just append all results
    dropdown.style.display = 'none'; // Initially hide the dropdown

    if(query.length > 0) {
        const filteredProducts = nameArray.filter(item => // .filter() will only return elements that pass the test
            item.includes(query) //eg: item.includes('atl')
        );
    
        if(filteredProducts.length > 0) { // if we have results that match
            filteredProducts.forEach(product => {
                const item = document.createElement('div');
                item.textContent = product;
                item.onclick = () => {
                    createNewProduct(product, productList);
                    searchInput.value = '';
                    dropdown.innerHTML = ''; // clear result bc we found match
                    dropdown.style.display = 'none'; // hide dropdown
                };
                dropdown.appendChild(item);
            });
            dropdown.style.display = 'block';
        }; 
    };
}