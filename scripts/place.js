const temperature = 59; 
const windSpeed = 6.2;

function calculateWindChill(tempF, speedMph) {
    return (
        35.74 +
        0.6215 * tempF -
        35.75 * Math.pow(speedMph, 0.16) +
        0.4275 * tempF * Math.pow(speedMph, 0.16)
    ).toFixed(1);
}

function displayWindChill() {
    const wcElement = document.getElementById("windchill");
    const validTemp = temperature <= 50;
    const validWind = windSpeed > 3;

    if (validTemp && validWind) {
        wcElement.textContent = calculateWindChill(temperature, windSpeed) + " °F";
    } else {
        wcElement.textContent = "N/A";
    }
}

displayWindChill();




const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;