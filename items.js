function B1001() {
    addBurger({
        id: 'B1001',
        name: 'Classic Burger (Large)',
        imgSrc: '/image/Bueger 1/Classic Burger (Large) .png',
        unitPrice: 750.00,
        discount: '-',
        netPrice: 750.00
    });
}

function B1002() {
    addBurger({
        id: 'B1002',
        name: 'Classic Burger (Regular)',
        imgSrc: '/image/Bueger 1/Classic Burger (Regular).png',
        unitPrice: 1500.00,
        discount: '15%',
        netPrice: 1275.00
    });
}

function B1003() {
    addBurger({
        id: 'B1003',
        name: 'Turkey Burger',
        imgSrc: '/image/Bueger 1/Turkey Burger.png',
        unitPrice: 1600.00,
        discount: '-',
        netPrice: 1600.00
    });
}

function B1004() {
    addBurger({
        id: 'B1004',
        name: 'Chicken Burger (Large)',
        imgSrc: '/image/Bueger 1/Chicken Burger (Large).png',
        unitPrice: 1400.00,
        discount: '-',
        netPrice: 1400.00
    });
}

function B1005() {
    addBurger({
        id: 'B1005',
        name: 'Chicken Burger (Regular)',
        imgSrc: '/image/Bueger 1/Chicken Burger (Regular).png',
        unitPrice: 1400.00,
        discount: '20%',
        netPrice: 1120.00
    });
}

function B1006() {
    addBurger({
        id: 'B1006',
        name: 'Cheese Burger (Large)',
        imgSrc: '/image/Burger 2/Cheese Burger (Large).png',
        unitPrice: 1000.00,
        discount: '-',
        netPrice: 1000.00
    });
}

function B1007() {
    addBurger({
        id: 'B1007',
        name: 'Cheese Burger (Regular)',
        imgSrc: '/image/Burger 2/Cheese Burger (Regular).png',
        unitPrice: 600.00,
        discount: '-',
        netPrice: 600.00
    });
}

function B1008() {
    addBurger({
        id: 'B1008',
        name: 'Bacon Burger',
        imgSrc: '/image/Burger 2/Bacon Burger.png',
        unitPrice: 650.00,
        discount: '15%',
        netPrice: 552.50
    });
}

function B1009() {
    addBurger({
        id: 'B1009',
        name: 'Shawarma Burger',
        imgSrc: '/image/Burger 2/Shawarma Burger.png',
        unitPrice: 800.00,
        discount: '-',
        netPrice: 800.00
    });
}

function B1010() {
    addBurger({
        id: 'B1010',
        name: 'Olive Burger',
        imgSrc: '/image/Burger 2/Olive Burger.png',
        unitPrice: 1800.00,
        discount: '-',
        netPrice: 1800.00
    });
}

function B1012() {
    addBurger({
        id: 'B1012',
        name: 'Double-Cheese Burger',
        imgSrc: '/image/Burger 3/Double-Cheese Burger.png',
        unitPrice: 1250.00,
        discount: '20%',
        netPrice: 1000.00
    });
}

function B1013() {
    addBurger({
        id: 'B1013',
        name: 'Crispy Chicken Burger (Regular)',
        imgSrc: '/image/Burger 3/Crispy Chicken Burger (Regular).png',
        unitPrice: 1200.00,
        discount: '-',
        netPrice: 1200.00
    });
}

function B1014() {
    addBurger({
        id: 'B1014',
        name: 'Crispy Chicken Burger (Large)',
        imgSrc: '/image/Burger 3/Crispy Chicken Burger (Large).png',
        unitPrice: 1600.00,
        discount: '10%',
        netPrice: 1440.00
    });
}

function B1015() {
    addBurger({
        id: 'B1015',
        name: 'Paneer Burger',
        imgSrc: '/image/Burger 3/Paneer Burger.png',
        unitPrice: 900.00,
        discount: '-',
        netPrice: 900.00
    });
}

function B1016() {
    addBurger({
        id: 'B1016',
        name: 'Crispy Chicken Submarine (Large)',
        imgSrc: '/image/Submarine 1/Crispy Chicken Submarine (Large).png',
        unitPrice: 2000.00,
        discount: '-',
        netPrice: 2000.00
    });
}

function B1017() {
    addBurger({
        id: 'B1017',
        name: 'Crispy Chicken Submarine (Regular)',
        imgSrc: '/image/Submarine 1/Crispy Chicken Submarine (Regular).png',
        unitPrice: 1500.00,
        discount: '-',
        netPrice: 1500.00
    });
}

function B1018() {
    addBurger({
        id: 'B1018',
        name: 'Chicken Submarine (Large)',
        imgSrc: '/image/Submarine 1/Chicken Submarine (Large) .png',
        unitPrice: 1800.00,
        discount: '3%',
        netPrice: 1746.00
    });
}

function B1019() {
    addBurger({
        id: 'B1019',
        name: 'Chicken Submarine (Regular)',
        imgSrc: '/image/Submarine 1/Chicken Submarine (Regular).png',
        unitPrice: 1400.00,
        discount: '-',
        netPrice: 1400.00
    });
}

function B1020() {
    addBurger({
        id: 'B1020',
        name: 'Grinder Submarine',
        imgSrc: '/image/Submarine 1/Grinder Submarine.png',
        unitPrice: 2300.00,
        discount: '-',
        netPrice: 2300.00
    });
}

function B1021() {
    addBurger({
        id: 'B1021',
        name: 'Cheese Submarine',
        imgSrc: '/image/Submarine 2/Cheese Submarine.png',
        unitPrice: 2200.00,
        discount: '-',
        netPrice: 2200.00
    });
}

function B1022() {
    addBurger({
        id: 'B1022',
        name: 'Double Cheese n Chicken Submarine',
        imgSrc: '/image/Submarine 2/Double Cheese n Chicken Submarine.png',
        unitPrice: 1900.00,
        discount: '16%',
        netPrice: 1596.00
    });
}

function addBurger(burgerData) {
    const { id, name, imgSrc, unitPrice, discount, netPrice } = burgerData;
    const newBurgerData = {
        id,
        name,
        imgSrc,
        quantity: 1,
        unitPrice,
        discount,
        netPrice,
    };

    // Retrieve existing burger data from session storage
    const existingBurgerData = JSON.parse(sessionStorage.getItem('burgerData')) || [];

    // Check if burger data already exists
    const existingItem = existingBurgerData.find(item => item.id === newBurgerData.id);
    if (existingItem) {
        // Update the quantity and net price
        existingItem.quantity += newBurgerData.quantity;
        existingItem.netPrice = existingItem.netPrice * existingItem.quantity;
    } else {
        // Add the new data
        existingBurgerData.push(newBurgerData);
    }

    // Store the updated data in session storage
    sessionStorage.setItem('burgerData', JSON.stringify(existingBurgerData));

    // Redirect to the order page
    //window.location.href = 'order_page.html';

    // Display success message
    alert('Item added to cart successfully!');

}

function removeRow(button) {
    const row = button.closest('tr');
    if (row) {
        const itemId = row.querySelector('td').innerText;
        let burgerData = JSON.parse(sessionStorage.getItem('burgerData')) || [];
        burgerData = burgerData.filter(item => item.id !== itemId);
        sessionStorage.setItem('burgerData', JSON.stringify(burgerData));
        row.remove();
    }
}

function back(button) {
    window.history.back();
}


document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('order_page.html')) {
        const tableBody = document.getElementById('tableBody');

        const burgerData = JSON.parse(sessionStorage.getItem('burgerData'));

        if (burgerData && burgerData.length > 0) {
            burgerData.forEach(item => {
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <td style="background-color: #FFBC5F;">${item.id}</td>
                    <td style="background-color: #FFBC5F;">
                        <img src="${item.imgSrc}" alt="" width="50px" height="50px" style="border-radius: 10px;">
                        <br>${item.name}
                    </td>
                    <td style="background-color: #FFBC5F;">${item.quantity}</td>
                    <td style="background-color: #FFBC5F;">${item.unitPrice}</td>
                    <td style="background-color: #FFBC5F;">${item.discount}</td>
                    <td style="background-color: #FFBC5F;">${item.netPrice}</td>
                    <td style="background-color: #FFBC5F;">
                        <button type="button" class="btn btn-danger" onclick="removeRow(this)">
                            <i class="bi bi-trash"></i> Remove
                        </button>
                    </td>
                    <td style="background-color: #FFBC5F;">
                        <button type="button" class="btn btn-success" onclick="back(this)">
                            <i class="bi bi-back"></i> Back
                        </button>
                    </td>
                `;

                tableBody.appendChild(newRow);
            });
        } else {
            console.error('No burger data found in session storage');
        }
    }
});


