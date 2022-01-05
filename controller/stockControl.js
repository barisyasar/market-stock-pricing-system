// Stock General
const tableStock = document.getElementById('tableStock');
const stockSearch = document.getElementById('stockSearch');
const stockSearchButton = document.getElementById('stockSearchButton');

const stockList = [];

// Database connection and singleton-adapter pattern
for (let i = 0; i < input.length; i++) {
    var product = new Product(
        input[i].productId,
        input[i].productName,
        input[i].amount - output[i].amount,
        input[i].date,
        input[i].name,
        input[i].ppp
    );

    stockList.push(product);
};

// First render table
for (let i = 0; i < stockList.length; i++) {
    tableStock.innerHTML += `
    <tr>
        <th scope="row">${stockList[i].productId}</th>
        <td>${stockList[i].productName}</td>
        <td>${stockList[i].name}</td>
        <td>${stockList[i].amount}</td>
        <td>${stockList[i].ppp}</td>
        <td>${stockList[i].date}</td>
    </tr>
    `
}
// Filter table
stockSearchButton.addEventListener('click', function () {
    const filterText = stockSearch.value;

    tableStock.innerHTML = '';

    for (let i = 0; i < stockList.length; i++) {

        if (stockList[i].productName.includes(filterText)) {
            tableStock.innerHTML += `
            <tr>
                <th scope="row">${stockList[i].productId}</th>
                <td>${stockList[i].productName}</td>
                <td>${stockList[i].name}</td>
                <td>${stockList[i].amount}</td>
                <td>${stockList[i].ppp}</td>
                <td>${stockList[i].date}</td>
            </tr>
            `
        }
        
    }
})

