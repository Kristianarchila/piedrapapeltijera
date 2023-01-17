var juego = ["piedra","papel","tijera"]


function jugar(numero){
    var computadora = Math.floor(Math.random() * 3);
    console.log(juego[numero],juego[computadora])
    if(juego[numero]==juego[computadora]){
        document.getElementById("resultados").innerHTML="Empate"
        console.log("Empate")
    
    }else if(juego[numero]=="piedra" && juego[computadora]=="tijera"  )
    {document.getElementById("resultados").innerHTML="Gane"
    
        console.log("Gane")
    
    }else if(juego[numero]=="papel" && juego[computadora]=="tijera" ){
        console.log("Perdite")
        document.getElementById("resultados").innerHTML="Gane"
    
    }else if(juego[numero]=="tijera" && juego[computadora]=="piedra"){
        console.log("Perdiste")
        document.getElementById("resultados").innerHTML="Perdiste"
    
    }else if (juego[numero]=="piedra"&& juego [computadora]=="tijera"){
        console.log("Gane")
        document.getElementById("resultados").innerHTML="Gane"
    
    }else if (juego[numero]=="papel" && juego [computadora]=="piedra"){
        console.log("Gane")
        document.getElementById("resultados").innerHTML="Gane"
    
    }else if(juego[numero]=="piedra" && juego[computadora]== "papel"){
        console.log("Perdiste")
        document.getElementById("resultados").innerHTML="Perdiste"
    
    }else if (juego [numero]=="tijera" && juego[computadora=="papel"]){
        console.log("Gane")
    }document.getElementById("resultados").innerHTML="Gane"

    
}





