var timeDisplay = document.getElementById("time");
//var day = document.getElementById("day");
var dateIn = document.getElementById("date");


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
setInterval(refreshTime, 1000)



