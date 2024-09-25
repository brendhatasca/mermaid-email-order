import { createNewProduct } from "./modules/productList.js";
import { createTextBody, generateEmail } from "./modules/writeEmail.js";
import "./style.css";

document.addEventListener('DOMContentLoaded', () => { 
    const productFromSearch = document.getElementById('product-name-from-search');
    const productList = document.getElementById('product-list');
    const addBtn = document.querySelector('.add-to-list');
    const generateEmailBtn = document.querySelector('.generate-email');

    addBtn.addEventListener("click", () => {
        createNewProduct(productFromSearch, productList);
        productFromSearch.value = "";
    });

    generateEmailBtn.addEventListener("click", () => {
        generateEmail();
    })
}
);







