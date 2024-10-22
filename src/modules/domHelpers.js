export function createInputElement(type, className) {
    const input = document.createElement('input');
    input.type = type;
    input.classList.add(className);
    return input;
};

export function createSelectElement(options, className) { // gonna take an obj as parameter
    const select = document.createElement('select');
    select.classList.add(className);

    options.forEach(option => {
        const optElement = document.createElement('option');
        optElement.value = option.value;
        optElement.textContent = option.text;
        select.appendChild(optElement);
    });

    return select;
};

export function createParagraph(paraContent, paraClass) {
    const para = document.createElement('p');
    if (paraClass !== undefined) {
        para.classList.add(paraClass);
    }

    para.textContent = paraContent;

    return para;
};

export function createButton(text, className, onCLickHandler) {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.classList.add(className);
    btn.onclick = onCLickHandler;

    return btn;
};

export function createDiv(text, className) {
    const div = document.createElement('div');
    div.textContent = text;
    div.classList.add(className);

    return div;
}