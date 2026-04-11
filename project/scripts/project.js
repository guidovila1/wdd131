const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const header = document.querySelector("header");

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    header.classList.toggle('menu-open');
});

const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;

const energy = [
    {
        energyName: "Solar energy",
        energysource: "Sun Radiation",
        howdoesitwork: "Uses solar panels to convert sunlight into electricity using photovoltaic cells.",
        nightwork: "No",
        imageUrl:
            "https://cdn.pixabay.com/photo/2017/03/13/07/34/photovoltaic-2138992_1280.jpg"
    },
    {
        energyName: "Wind energy",
        energysource: "Wind Movement",
        howdoesitwork: "Wind turns turbine blades, which spin a generator to produce electricity.",
        nightwork: "No",
        imageUrl:
            "https://cdn.pixabay.com/photo/2014/10/05/06/16/windrader-474574_1280.jpg"
    },
    {
        energyName: "Geo-Thermal Energy",
        energysource: "Geothermal Heat",
        howdoesitwork: "Heat from inside the Earth turns water into steam, which powers turbines.",
        nightwork: "Yes",
        imageUrl:
            "https://cdn.pixabay.com/photo/2012/11/28/09/18/power-plant-67538_1280.jpg"
    },
    {
        energyName: "Hydro-electric Power",
        energysource: "Water Flow",
        howdoesitwork: "Flowing water spins turbines connected to generators to create electricity.",
        nightwork: "Yes",
        imageUrl:
            "https://cdn.pixabay.com/photo/2013/11/12/22/33/dam-209757_1280.jpg"
    },
    {
        energyName: "Biomass Energy",
        energysource: "Organic Material",
        howdoesitwork: "Organic material is burned to produce heat, which is used to generate electricity.",    
        nightwork: "Yes",
        imageUrl:
            "https://cdn.pixabay.com/photo/2024/01/26/19/46/pellet-8534567_1280.jpg"
    },
    {
        energyName: "Biogas Energy",
        energysource: "Organic Waste",
        howdoesitwork: "Organic waste is decomposed to produce biogas, which is then used to generate electricity.",
        nightwork: "Yes",
        imageUrl:
            "https://cdn.pixabay.com/photo/2017/11/05/00/08/biogas-2919235_1280.jpg"
    },
    {
        energyName: "Liquid Hydrogen Energy",
        energysource: "Hydrogen Fuel",
        howdoesitwork: "Hydrogen is liquefied and stored for use as a fuel, typically in fuel cells to generate electricity.",
        nightwork: "Yes",
        imageUrl:
            "https://www.trenyrail.com/wp-content/uploads/2020/02/200221-Hydrogen.jpg"

    },

];  

createEnergyCard(energy);

const homeLink = document.querySelector("#home");
const solarLink = document.querySelector("#solar");
const windLink = document.querySelector("#wind");
const hydroLink = document.querySelector("#hydro");


homeLink.addEventListener("click", () => {
    createEnergyCard(energy);
});

solarLink.addEventListener("click", () => {
    createEnergyCard(
        energy.filter(e => e.energysource === "Sun Radiation"),"solar"
    );
    showRedirectButton("solar");
});


windLink.addEventListener("click", () => {
    createEnergyCard(
        energy.filter(e => e.energysource === "Wind Movement"),"wind"
    );

    showRedirectButton("wind");
});

hydroLink.addEventListener("click", () => {
    createEnergyCard(
        energy.filter(e => e.energysource === "Water Flow"),"hydro"
    );
    showRedirectButton("hydro");

});




function createEnergyCard(filteredEnergy) {
    const container = document.querySelector(".energyContainer");
    container.innerHTML = "";
    filteredEnergy.forEach(energy => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let energysource = document.createElement("p");
        let howdoesitwork = document.createElement("p");
        let nightwork = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = energy.energyName;
        energysource.innerHTML = `<span class = "label">Energy Source:</span> ${energy.energysource}`;
        howdoesitwork.innerHTML = `<span class = "label">How It Works:</span> ${energy.howdoesitwork}`;
        nightwork.innerHTML = `<span class = "label">Night Work:</span> ${energy.nightwork} `;
        img.setAttribute("src", energy.imageUrl);
        img.setAttribute("alt", `${energy.energyName} Energy Image`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "400px");
        img.setAttribute("height", "250px");

        card.appendChild(name);
        card.appendChild(energysource);
        card.appendChild(howdoesitwork );
        card.appendChild(nightwork);
        card.appendChild(img);

        document.querySelector(".energyContainer").appendChild(card);

    })
}

function showRedirectButton(energyType) {
    const container = document.querySelector(".energyContainer");
    const button = document.createElement("button");
    button.textContent = `Learn more about ${energyType.charAt(0).toUpperCase() + energyType.slice(1)} Energy →`;
    button.classList.add("redirect-btn");

    button.addEventListener("click", () => {
        window.location.href = `project-${energyType}.html`;
    });

    container.appendChild(button);
}

