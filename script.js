let partida = 0
let jogador = 0
let empate = 0
let computador = 0
const Pedra = document.getElementById('pedra')//buscar qualquer elemnto do documento seja clase, id//
const Papel = document.getElementById('papel')//pegar elemnto id//
const Tesoura = document.getElementById('tesoura')
const Computador = document.getElementById('pc')

function jogar() {
    partida++;
    if (Pedra.checked == false &&
        Papel.checked == false &&
        Tesoura.checked == false) {
            alert('Escolha uma opção')
    } else {

        let sorteio=Math.floor(Math.random()*3)+1;
        switch (sorteio){
            case 1: Computador.src = "pcpedra.png";break;
            case 2: Computador.src = "papeltela.png";break;
            case 3: Computador.src = "pctesoura.png";break;
    }
    document.getElementById('partida').innerText = "Partida- "+partida;
}
}