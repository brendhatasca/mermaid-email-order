import { createNewProduct } from "./modules/productList.js";
import { generateEmail } from "./modules/writeEmail.js";
import { populateDropdownMenu } from "./modules/searchBar.js";
import "./style.css";

document.addEventListener('DOMContentLoaded', () => { 
    const productList = document.getElementById('product-list');
    const addBtn = document.querySelector('.add-to-list');
    const generateEmailBtn = document.querySelector('.generate-email');
    const searchInput = document.querySelector('.search-bar');

    searchInput.addEventListener('keyup', () => {
        populateDropdownMenu();
    });

    addBtn.addEventListener("click", () => {
        createNewProduct(searchInput.value, productList);
        searchInput.value = "";
        console.log(document.querySelector('.order-date').value)
    });

    searchInput.addEventListener("keydown", (event) => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            createNewProduct(searchInput, productList);
            searchInput.value = "";
        }
    });

    generateEmailBtn.addEventListener("click", () => {
        if (document.querySelector('.order-date').value !== '') {
            generateEmail();
        } else {
            alert('Must select date!');
            return;
        };
     });
}
);







