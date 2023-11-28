let timeDisplay = document.getElementById("time");
//let day = document.getElementById("day");
let dateIn = document.getElementById("date");
let eye = document.querySelectorAll(".eye");

 const Mouths = [

    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'

 ]

const days = [

    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado'
]

let i = 1
let show 

function refreshTime() {
    var hour = new Date().getHours()
    let minutes = new Date().getMinutes()
    let date = new Date().getDate()
    let mouths = new Date().getMonth()
    let dayIn = new Date().getDay()

   let formattedString = `${hour < 10 ? '0' + hour : hour}:${minutes < 10 ? '0' + minutes : minutes}`;

    timeDisplay.innerHTML = formattedString;  

  
    const mouth = Mouths.filter((d,index) => index == mouths)
    const day = days.filter((d,index) => index == dayIn)

  dateIn.innerHTML = `${day}, ${date} de ${mouth}`

  if(hour <= 12 & hour >= 6){
    day.innerHTML = "Good Morning"
  }
  else if(hour >= 12 & hour <= 18){
    day.innerHTML = `Good Afternoon`
  }
  else{
    day.innerHTML = "Good Night"
  }

  
}

function eyeAnimation(){
  console.log("passou")
  for (let i = 0; i < eye.length; i++){
    eye[i].classList.add('eyeAnimation')
  }

}

//setInterval(eyeAnimation, 6000)

/*setInterval(() => {
  for (let i = 0; i < eye.length; i++){
    eye[i].classList.remove('eyeAnimation')
  }
 }, 8000)*/

setInterval(refreshTime, 1000)




let load = document.querySelector(".loading");

// Registra uma função anônima para o evento DOMContentLoaded
document.addEventListener("DOMContentLoaded", function(event) {
  // Muda a mensagem de status para "Pronto!"
  load.classList.add("hide")
});