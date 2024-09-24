import { createProductList } from "./productList.js";

export function generateEmail() {
    const email = "orders@seacore.ca";
    const subject = "The Mermaid Order";
    const body = listToTextBody();

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
}

export function createTextBody() {
    const list = createProductList();

    let bodyText = "Hi\n\n";
    bodyText += "I would like to place an order for The Mermaid\n";
    bodyText += "250 Kerr St, Oakville\n\n"


    list.forEach(item => {
        bodyText += `${item.quantity} ${item.unit} ${item.productName}\n`;
    });


    return bodyText;
};

// fullList = { quantity: 2, unit: 'lbs', productName: 'shrimp' }



