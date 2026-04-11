const productSelect = document.getElementById("product");
if (productSelect) {
    const products = [
        { id: "fc-1888", name: "Solar Energy", averagerating: 4.5 },
        { id: "fc-2050", name: "Wind Energy", averagerating: 4.7 },
        { id: "fs-1987", name: "Hydro Energy", averagerating: 3.5 },
        { id: "ac-2000", name: "Geo-Thermal Energy", averagerating: 3.9 },
        { id: "jj-1969", name: "Biogas Energy", averagerating: 5.0 }
    ];

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}


const reviewCounter = document.getElementById("reviewCounter");
if (reviewCounter) {
    let count = Number(localStorage.getItem("reviewCount")) || 0;
    count++;
    localStorage.setItem("reviewCount", count);
    reviewCounter.textContent = count;
}