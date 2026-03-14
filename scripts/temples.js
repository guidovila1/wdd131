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