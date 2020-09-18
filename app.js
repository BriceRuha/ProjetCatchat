const randomButton = document.querySelector("#randomButton");
var affichage = document.querySelector(".affichage");


randomButton.addEventListener('click', catImageGenerator);

function catImageGenerator() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => affichage.style.backgroundImage = "url('"+data[0].url+"')");
}

catImageGenerator();