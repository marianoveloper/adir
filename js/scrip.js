$(function () {


    

    /*-----------------------------------------------------------
  3. INICIANDO VENOBOX
  -------------------------------------------------------------*/

    $('.venobox-video').venobox({
        autoplay: true,
        bgcolor: 'rgba(255, 255, 255, 0.4)',
        border: '5px',
        closeColor: '#fff',
        overlayColor: 'rgba(12, 60, 22, 0.83)',
        spinner: 'three-bounce'
    });


  



})

document.getElementById('hablar').addEventListener("click",()=>{
    decir(document.getElementById("texto").value=
    'ARID es una organización social sin fines de lucro que trabaja en redes con otras organizaciones,que promueve y efectiviza a través de sus diferentes servicios la inclusión, que brinda apoyos a la Persona con     Discapacidad y sus entornos a fin de que puedan ejercer sus derechos     para desarrollar un proyecto de vida');});

function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}


