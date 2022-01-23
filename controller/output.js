// Stock General
const tableOutput = document.getElementById('tableOutput');
const outputSearch = document.getElementById('outputSearch');
const outputSearchButton = document.getElementById('outputSearchButton');

const outputList = [];

// Database connection and singleton-adapter pattern
for (let i = 0; i < output.length; i++) {
    var product = new Product(
        output[i].productId,
        output[i].productName,
        output[i].amount,
        output[i].date,
        output[i].name,
        output[i].ppp
    );

    outputList.push(product);
};


// First render table
for (let i = 0; i < outputList.length; i++) {
    tableOutput.innerHTML += `
    <tr>
        <th scope="row">${outputList[i].productId}</th>
        <td>${outputList[i].productName}</td>
        <td>${outputList[i].name}</td>
        <td>${outputList[i].amount}</td>
        <td>${outputList[i].ppp}</td>
        <td>${outputList[i].date}</td>
    </tr>
    `
}

// Filter table
outputSearchButton.addEventListener('click', function () {
    const filterText = outputSearch.value;

    tableOutput.innerHTML = '';

    for (let i = 0; i < output.length; i++) {

        if (outputList[i].productName.includes(filterText)) {
            tableOutput.innerHTML += `
            <tr>
                <th scope="row">${output[i].productId}</th>
                <td>${output[i].productName}</td>
                <td>${output[i].name}</td>
                <td>${output[i].amount}</td>
                <td>${output[i].ppp}</td>
                <td>${output[i].date}</td>
            </tr>
            `
        }
        
    }
})

