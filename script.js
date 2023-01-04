let pratoSelecionado = 0;
let bebidaSelecionada = 0;
let sobremesaSelecionada = 0;

let nomePrato = "";
let nomeBebida = "";
let nomeSobremesa = "";

let valorPrato = 0;
let valorBebida = 0;
let valorSobremesa = 0;

let valorFinal = 0;

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
        nomePrato = "Frango Yin Yang";
        valorPrato = 14.90;
        terminouPedido();

    } else if (numPrato === 2){
        document.querySelector(".pratos>div:nth-child(1)").classList.remove('bordaVerde');
        document.querySelector(".pratos>div:nth-child(1) ion-icon").classList.remove('checkVerde');

        document.querySelector(".pratos>div:nth-child(3)").classList.remove('bordaVerde');
        document.querySelector(".pratos>div:nth-child(3) ion-icon").classList.remove('checkVerde');

        document.querySelector(".pratos>div:nth-child(2)").classList.add('bordaVerde');
        document.querySelector(".pratos>div:nth-child(2) ion-icon").classList.add('checkVerde');
        pratoSelecionado = 2;
        nomePrato = "Hambúrguer";
        valorPrato = 16.90;
        terminouPedido();

    } else if (numPrato === 3){
        document.querySelector(".pratos>div:nth-child(1)").classList.remove('bordaVerde');
        document.querySelector(".pratos>div:nth-child(1) ion-icon").classList.remove('checkVerde');

        document.querySelector(".pratos>div:nth-child(2)").classList.remove('bordaVerde');
        document.querySelector(".pratos>div:nth-child(2) ion-icon").classList.remove('checkVerde');

        document.querySelector(".pratos>div:nth-child(3)").classList.add('bordaVerde');
        document.querySelector(".pratos>div:nth-child(3) ion-icon").classList.add('checkVerde');
        pratoSelecionado = 3;
        nomePrato = "Sushi";
        valorPrato = 24.90;
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
        nomeBebida = "Coquinha gelada";
        valorBebida = 4.90;
        terminouPedido();

    } else if (numPrato === 2){
        document.querySelector(".bebidas>div:nth-child(1)").classList.remove('bordaVerde');
        document.querySelector(".bebidas>div:nth-child(1) ion-icon").classList.remove('checkVerde');

        document.querySelector(".bebidas>div:nth-child(3)").classList.remove('bordaVerde');
        document.querySelector(".bebidas>div:nth-child(3) ion-icon").classList.remove('checkVerde');

        document.querySelector(".bebidas>div:nth-child(2)").classList.add('bordaVerde');
        document.querySelector(".bebidas>div:nth-child(2) ion-icon").classList.add('checkVerde');
        bebidaSelecionada = 2;
        nomeBebida = "Milkshake";
        valorBebida = 6.90;
        terminouPedido();

    } else if (numPrato === 3){
        document.querySelector(".bebidas>div:nth-child(1)").classList.remove('bordaVerde');
        document.querySelector(".bebidas>div:nth-child(1) ion-icon").classList.remove('checkVerde');

        document.querySelector(".bebidas>div:nth-child(2)").classList.remove('bordaVerde');
        document.querySelector(".bebidas>div:nth-child(2) ion-icon").classList.remove('checkVerde');

        document.querySelector(".bebidas>div:nth-child(3)").classList.add('bordaVerde');
        document.querySelector(".bebidas>div:nth-child(3) ion-icon").classList.add('checkVerde');
        bebidaSelecionada = 3;
        nomeBebida = "Suco natural";
        valorBebida = 5.90;
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
        nomeSobremesa = "Pudim";
        valorSobremesa = 7.90;
        terminouPedido();

    } else if (numPrato === 2){
        document.querySelector(".sobremesas>div:nth-child(1)").classList.remove('bordaVerde');
        document.querySelector(".sobremesas>div:nth-child(1) ion-icon").classList.remove('checkVerde');

        document.querySelector(".sobremesas>div:nth-child(3)").classList.remove('bordaVerde');
        document.querySelector(".sobremesas>div:nth-child(3) ion-icon").classList.remove('checkVerde');

        document.querySelector(".sobremesas>div:nth-child(2)").classList.add('bordaVerde');
        document.querySelector(".sobremesas>div:nth-child(2) ion-icon").classList.add('checkVerde');
        sobremesaSelecionada = 2;
        nomeSobremesa = "Brownie no pote";
        valorSobremesa = 11.90;
        terminouPedido();

    } else if (numPrato === 3){
        document.querySelector(".sobremesas>div:nth-child(1)").classList.remove('bordaVerde');
        document.querySelector(".sobremesas>div:nth-child(1) ion-icon").classList.remove('checkVerde');

        document.querySelector(".sobremesas>div:nth-child(2)").classList.remove('bordaVerde');
        document.querySelector(".sobremesas>div:nth-child(2) ion-icon").classList.remove('checkVerde');

        document.querySelector(".sobremesas>div:nth-child(3)").classList.add('bordaVerde');
        document.querySelector(".sobremesas>div:nth-child(3) ion-icon").classList.add('checkVerde');
        sobremesaSelecionada = 3;
        nomeSobremesa = "Sorvete";
        valorSobremesa = 9.90;
        terminouPedido();
    }
}

function fecharPedido(){
    valorFinal = valorPrato + valorBebida + valorSobremesa;
    const valorFinalCorrigido = valorFinal.toFixed(2);
    const mensagem = "Olá, gostaria de fazer o pedido: \n- Prato: "+nomePrato+"\n- Bebida: "+nomeBebida+"\n- Sobremesa: "+nomeSobremesa+" \nTotal: R$ "+valorFinalCorrigido;
    const mensagemCorrigida = encodeURIComponent(mensagem);
    open("https://wa.me/5532998382271?text="+mensagemCorrigida);
}