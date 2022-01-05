const tableInput = document.getElementById('tableInput');
const inputSearch = document.getElementById('inputSearch');
const inputSearchButton = document.getElementById('inputSearchButton');

// Product Form
const productId = document.getElementById('productId');
const productName = document.getElementById('productName');
const amount = document.getElementById('amount');
const date = document.getElementById('date');
const sellerName = document.getElementById('sellerName');
const ppp = document.getElementById('ppp');
const addProduct = document.getElementById('addProduct');

const inputList = [];

// Database connection and singleton-adapter pattern
for (let i = 0; i < input.length; i++) {
    var product = new Product(
        input[i].productId,
        input[i].productName,
        input[i].amount,
        input[i].date,
        input[i].name,
        input[i].ppp
    );

    inputList.push(product);
};

// First render table
function renderTable() {
    tableInput.innerHTML = '';
    for (let i = 0; i < inputList.length; i++) {
        tableInput.innerHTML += `
        <tr>
            <th scope="row">${inputList[i].productId}</th>
            <td>${inputList[i].productName}</td>
            <td>${inputList[i].name}</td>
            <td>${inputList[i].amount}</td>
            <td>${inputList[i].ppp}</td>
            <td>${inputList[i].date}</td>
        </tr>
        `
    }
};
renderTable();

inputSearchButton.addEventListener('click', function () {
    const filterText = inputSearch.value;
    tableInput.innerHTML = '';

    for (let i = 0; i < inputList.length; i++) {

        if (inputList[i].productName.includes(filterText)) {
            tableInput.innerHTML += `
            <tr>
                <th scope="row">${inputList[i].productId}</th>
                <td>${inputList[i].productName}</td>
                <td>${inputList[i].name}</td>
                <td>${inputList[i].amount}</td>
                <td>${inputList[i].ppp}</td>
                <td>${inputList[i].date}</td>
            </tr>
            `
        }
        
    }
})


// Add product
addProduct.addEventListener('click',function() {
    const newProduct = new Product(
        productId.value,
        productName.value,
        amount.value,
        date.value,
        sellerName.value,
        ppp.value,
        date.value
    );

    inputList.push(newProduct);
    renderTable();
    
})