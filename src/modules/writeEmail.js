import { createProductList } from "./productList.js";
import { format, parse } from "date-fns";


export function generateEmail() {
    const email = "orders@seacore.ca";
    const subject = "The Mermaid Order";
    const body = createTextBody();

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
}

export function createTextBody() {
    const list = createProductList();

    let bodyText = "Hi\n\n";
    bodyText += "I would like to place an order for The Mermaid\n";
    bodyText += "250 Kerr St, Oakville\n\n";
    if (document.querySelector('.order-date').value !== '') {
        bodyText += `For ${getOrderdDate()}\n\n`
    } else {
        alert('Must select date!');
        return;
    };


    list.forEach(item => {
        bodyText += `${item.quantity} ${item.unit} ${item.productName}\n`;
    });


    return bodyText;
};

function getOrderdDate() {
    const dateInputValue = document.querySelector('.order-date').value;
    const selectedDate = parse(dateInputValue, 'yyyy-MM-dd', new Date());
    const formattedDate = format(selectedDate, 'EEEE, MMMM d');

    return formattedDate;
}

// fullList = { quantity: 2, unit: 'lbs', productName: 'shrimp' }



