const randomButton = document.querySelector("#randomButton");
const autoChangeButton = document.querySelector("#autoChangeButton");
var affichage = document.querySelector(".affichage");


randomButton.addEventListener('click', catImageGenerator);

function catImageGenerator() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => affichage.style.backgroundImage = "url('"+data[0].url+"')");
}

catImageGenerator();


autoChangeButton.addEventListener('click', autoCatImageGenerator);


function autoCatImageGenerator(){
    let timerInterval
    Swal.fire({
      title: 'Chatléatoire en mode auto!',
      html: 'Un chat va apparaître toutes les 10 secondes.',
      timer: 4000,
      timerProgressBar: true,
      onBeforeOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getContent()
          if (content) {
            const b = content.querySelector('b')
            if (b) {
              b.textContent = Swal.getTimerLeft()
            }
          }
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })

    setInterval(catImageGenerator,10000);
}