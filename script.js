let pratoSelecionado = 0;
let bebidaSelecionada = 0;
let sobremesaSelecionada = 0;

function terminouPedido(){
    if((pratoSelecionado !== 0) && (bebidaSelecionada !== 0) && (sobremesaSelecionada !== 0)){
        document.querySelector('footer button').disabled = false;
        document.querySelector('footer button').classList.add('backgroundVerdeClicavel');
        document.querySelector('footer button').innerHTML = "<p>Fechar pedido</p>";
    }
}

function marcaPrato(numPrato){
    if (numPrato === 1){
        document.querySelector(".pratos>div:nth-child(2)").classList.remove('bordaVerde');
        document.querySelector(".pratos>div:nth-child(2) ion-icon").classList.remove('checkVerde');

        document.querySelector(".pratos>div:nth-child(3)").classList.remove('bordaVerde');
        document.querySelector(".pratos>div:nth-child(3) ion-icon").classList.remove('checkVerde');

        document.querySelector(".pratos>div:nth-child(1)").classList.add('bordaVerde');
        document.querySelector(".pratos>div:nth-child(1) ion-icon").classList.add('checkVerde');
        pratoSelecionado = 1;
        terminouPedido();

    } else if (numPrato === 2){
        document.querySelector(".pratos>div:nth-child(1)").classList.remove('bordaVerde');
        document.querySelector(".pratos>div:nth-child(1) ion-icon").classList.remove('checkVerde');

        document.querySelector(".pratos>div:nth-child(3)").classList.remove('bordaVerde');
        document.querySelector(".pratos>div:nth-child(3) ion-icon").classList.remove('checkVerde');

        document.querySelector(".pratos>div:nth-child(2)").classList.add('bordaVerde');
        document.querySelector(".pratos>div:nth-child(2) ion-icon").classList.add('checkVerde');
        pratoSelecionado = 2;
        terminouPedido();

    } else if (numPrato === 3){
        document.querySelector(".pratos>div:nth-child(1)").classList.remove('bordaVerde');
        document.querySelector(".pratos>div:nth-child(1) ion-icon").classList.remove('checkVerde');

        document.querySelector(".pratos>div:nth-child(2)").classList.remove('bordaVerde');
        document.querySelector(".pratos>div:nth-child(2) ion-icon").classList.remove('checkVerde');

        document.querySelector(".pratos>div:nth-child(3)").classList.add('bordaVerde');
        document.querySelector(".pratos>div:nth-child(3) ion-icon").classList.add('checkVerde');
        pratoSelecionado = 3;
        terminouPedido();
    }
}

function marcaBebida(numPrato){
    if (numPrato === 1){
        document.querySelector(".bebidas>div:nth-child(2)").classList.remove('bordaVerde');
        document.querySelector(".bebidas>div:nth-child(2) ion-icon").classList.remove('checkVerde');

        document.querySelector(".bebidas>div:nth-child(3)").classList.remove('bordaVerde');
        document.querySelector(".bebidas>div:nth-child(3) ion-icon").classList.remove('checkVerde');

        document.querySelector(".bebidas>div:nth-child(1)").classList.add('bordaVerde');
        document.querySelector(".bebidas>div:nth-child(1) ion-icon").classList.add('checkVerde');
        bebidaSelecionada = 1;
        terminouPedido();

    } else if (numPrato === 2){
        document.querySelector(".bebidas>div:nth-child(1)").classList.remove('bordaVerde');
        document.querySelector(".bebidas>div:nth-child(1) ion-icon").classList.remove('checkVerde');

        document.querySelector(".bebidas>div:nth-child(3)").classList.remove('bordaVerde');
        document.querySelector(".bebidas>div:nth-child(3) ion-icon").classList.remove('checkVerde');

        document.querySelector(".bebidas>div:nth-child(2)").classList.add('bordaVerde');
        document.querySelector(".bebidas>div:nth-child(2) ion-icon").classList.add('checkVerde');
        bebidaSelecionada = 2;
        terminouPedido();

    } else if (numPrato === 3){
        document.querySelector(".bebidas>div:nth-child(1)").classList.remove('bordaVerde');
        document.querySelector(".bebidas>div:nth-child(1) ion-icon").classList.remove('checkVerde');

        document.querySelector(".bebidas>div:nth-child(2)").classList.remove('bordaVerde');
        document.querySelector(".bebidas>div:nth-child(2) ion-icon").classList.remove('checkVerde');

        document.querySelector(".bebidas>div:nth-child(3)").classList.add('bordaVerde');
        document.querySelector(".bebidas>div:nth-child(3) ion-icon").classList.add('checkVerde');
        bebidaSelecionada = 3;
        terminouPedido();
    }
}

function marcaSobremesa(numPrato){
    if (numPrato === 1){
        document.querySelector(".sobremesas>div:nth-child(2)").classList.remove('bordaVerde');
        document.querySelector(".sobremesas>div:nth-child(2) ion-icon").classList.remove('checkVerde');

        document.querySelector(".sobremesas>div:nth-child(3)").classList.remove('bordaVerde');
        document.querySelector(".sobremesas>div:nth-child(3) ion-icon").classList.remove('checkVerde');

        document.querySelector(".sobremesas>div:nth-child(1)").classList.add('bordaVerde');
        document.querySelector(".sobremesas>div:nth-child(1) ion-icon").classList.add('checkVerde');
        sobremesaSelecionada = 1;
        terminouPedido();

    } else if (numPrato === 2){
        document.querySelector(".sobremesas>div:nth-child(1)").classList.remove('bordaVerde');
        document.querySelector(".sobremesas>div:nth-child(1) ion-icon").classList.remove('checkVerde');

        document.querySelector(".sobremesas>div:nth-child(3)").classList.remove('bordaVerde');
        document.querySelector(".sobremesas>div:nth-child(3) ion-icon").classList.remove('checkVerde');

        document.querySelector(".sobremesas>div:nth-child(2)").classList.add('bordaVerde');
        document.querySelector(".sobremesas>div:nth-child(2) ion-icon").classList.add('checkVerde');
        sobremesaSelecionada = 2;
        terminouPedido();

    } else if (numPrato === 3){
        document.querySelector(".sobremesas>div:nth-child(1)").classList.remove('bordaVerde');
        document.querySelector(".sobremesas>div:nth-child(1) ion-icon").classList.remove('checkVerde');

        document.querySelector(".sobremesas>div:nth-child(2)").classList.remove('bordaVerde');
        document.querySelector(".sobremesas>div:nth-child(2) ion-icon").classList.remove('checkVerde');

        document.querySelector(".sobremesas>div:nth-child(3)").classList.add('bordaVerde');
        document.querySelector(".sobremesas>div:nth-child(3) ion-icon").classList.add('checkVerde');
        sobremesaSelecionada = 3;
        terminouPedido();
    }
}

function fecharPedido(){
    document.querySelector('footer button').classList.add('backgroundVermelho');
}