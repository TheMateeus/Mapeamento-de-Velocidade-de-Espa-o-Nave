let spaceShips = {nome:"",tipo:"", velocidadeMaxima:""};
let velocity = 0;
let spaceNome, spaceType, maxVelocity;
const BTN = document.querySelector("#send");

BTN.addEventListener("click" ,function(e){
    e.preventDefault();
    spaceNome = document.querySelector("#nome");
     spaceType = document.querySelector("#tipo");
     maxVelocity = document.querySelector("#velocity");
     let display = document.getElementById("sectionone").style.display ="none"
     let display2 = document.getElementById("sectiontwo").style.display = "flex"
    return dadosObjeto(),showDisplay();
})

function dadosObjeto () {
    spaceShips.nome = spaceNome.value;
    spaceShips.tipo = spaceType.value;
    spaceShips.velocidadeMaxima = maxVelocity.value;
}
alert(spaceShips);

function showDisplay(){
    document.getElementById("nomenave").innerHTML = spaceShips.nome;
    document.getElementById("tiponave").innerHTML = spaceShips.tipo;
    document.getElementById("velmaxnave").innerHTML = spaceShips.velocidadeMaxima;
}

function speedUp(){
    let velmax = parseInt(spaceShips.velocidadeMaxima);
    let speed = prompt("Informe o valor para acelerar a Nave");
    let speedtoint = parseInt(speed);
    if ((velocity += speedtoint) < velmax){
        alert("Sua velocidade atual é de "+velocity+" KM/S");
    }else{
        velocity -= speedtoint;
        alert("Voce ira ultrapassar a velocidade maxima");
    }
}
function speedDown(){
    alert ("Informações da sua nave \n Nome :"+spaceShips.nome+"\n Tipo :"+spaceShips.tipo+"\n Velocidade Atingida :"+velocity +"KM/S \n Nave parada");
}
