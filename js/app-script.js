var pagLargura = 0;
var pagAltura = 0;
var posX = 0;
var posY = 0;
var mosquito = document.createElement('img');
var pontos = 0;
var vidas = 1;
var tempo = 30;

/*DEFININDO A ÁREA*/
function AjustarTela(){
    pagAltura = window.innerHeight;
    pagLargura = window.innerWidth;

    console.log(pagAltura, pagLargura);
}

AjustarTela();

/*CRONOMETRO*/
var cronometro = setInterval(function () {
    tempo -= 1;

    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(criarMosquito);
        alert("Vitória");
        window.location.href = 'vitoria.html';
    }
    else{
        document.getElementById('cronometro').innerHTML = tempo.toString();
    }
}, 1000);


/*FUNÇÃO QUE GERA O MOSQUITO*/
function GerarMosquito(){

    if(document.getElementById('mosquito') != null || undefined){
        document.getElementById('mosquito').remove();

        if(vidas <= 3){
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas++;
        }
        else{
            alert('fim de jogo!');
            window.location.href = 'gameover.html';
        }
    }

    posX = Math.floor(Math.random() * pagLargura) - 100;
    posY = Math.floor(Math.random() * pagAltura) - 100;
    console.log(posX, posY);

    posX = posX < 0 ? 0 : posX;
    posY = posY < 0 ? 0 : posY;

    mosquito.src = 'imagens/mosca.png';
    mosquito.className = AjusteTamanhoMosquito() + ' ' + AjusteLadoMosquito();
    mosquito.style.left = posX + 'px';
    mosquito.style.top = posY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function () {
        this.remove();
        pontos += 1;
    }

    document.body.appendChild(mosquito);

    console.log('Mosquito criado na posição(', posX, ', ', posY, '), classe (', AjusteTamanhoMosquito(), ') e classe(', AjusteLadoMosquito(), ').');
    console.log('ptn: ', pontos);
}


/*DEFINI O TAMANHO DO MOSQUINO*/
function AjusteTamanhoMosquito() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1';

        case 1:
            return 'mosquito2';

        case 2:
            return 'mosquito3';
    }
}


/*DEFINE O LADO DA IMAGEM A SER EXIBIDA*/
function AjusteLadoMosquito() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA';

        case 1:
            return 'ladoB';
    }
}
