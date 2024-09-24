import { createNewProduct } from "./modules/productList.js";
import { createTextBody } from "./modules/writeEmail.js";
import { format } from "date-fns";

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
        createTextBody();

        const dateInputValue = document.querySelector('.order-date').value;
        const selectedDate = new Date(dateInputValue);
        const formattedDate = format(selectedDate, 'EEEE, MMMM d');
        console.log(formattedDate);
    })
}
);

const myDate = document.querySelector('.order-date');
console.log(myDate.value);






