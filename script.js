const elements = [
    { symbol: "H", name: "Hydrogen", atomicNumber: 1, description: "Hydrogen is a chemical element with symbol H and atomic number 1." },
    { symbol: "He", name: "Helium", atomicNumber: 2, description: "Helium is a chemical element with symbol He and atomic number 2." },
    { symbol: "Li", name: "Lithium", atomicNumber: 3, description: "Lithium is a chemical element with symbol Li and atomic number 3." },
    // Add more elements here...
    { symbol: "Og", name: "Oganesson", atomicNumber: 118, description: "Oganesson is a chemical element with symbol Og and atomic number 118." }
];

const periodicTable = document.getElementById("periodic-table");

elements.forEach(element => {
    const elementDiv = document.createElement("div");
    elementDiv.classList.add("element");
    elementDiv.innerHTML = `<strong>${element.symbol}</strong><br>${element.atomicNumber}`;
    elementDiv.onclick = () => showDetails(element);
    periodicTable.appendChild(elementDiv);
});

function showDetails(element) {
    document.getElementById("element-name").innerText = element.name;
    document.getElementById("element-details-content").innerText = element.description;
    document.getElementById("element-details").classList.remove("hidden");
}

function closeDetails() {
    document.getElementById("element-details").classList.add("hidden");
}
