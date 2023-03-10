let pratoSelecionado = false;
let bebidaSelecionada = false;
let sobremesaSelecionada = false;

const num2ArredondamentoReais = 2;

let nomePrato = "";
let nomeBebida = "";
let nomeSobremesa = "";

let valorPrato = 0;
let valorBebida = 0;
let valorSobremesa = 0;

let nomeCliente = "";
let endCliente = "";

let valorFinal = 0;
let valorFinalCorrigido = 0;

function terminouPedido(){
    if((pratoSelecionado === true) && (bebidaSelecionada === true) && (sobremesaSelecionada === true)){
        const foot_button = document.querySelector('footer button')
        foot_button.disabled = false;
        foot_button.classList.add('backgroundVerdeClicavel');
        foot_button.innerHTML = "<p>Fechar pedido</p>";
    }
}

function marcaPrato(qualPrato){
    pratoSelecionado = true;

    const bordaSelecionadaAnteriormente = document.querySelector('.pratos .bordaVerde');
    const checkSelecionadoAnteriormente = document.querySelector('.pratos .checkVerde');

    if(bordaSelecionadaAnteriormente != null){
        bordaSelecionadaAnteriormente.classList.remove('bordaVerde');
        checkSelecionadoAnteriormente.classList.remove('checkVerde');
    }

    qualPrato.classList.add('bordaVerde');
    qualPrato.querySelector('ion-icon').classList.add('checkVerde');
    nomePrato = qualPrato.querySelector('p').innerHTML;
    valorPrato = parseFloat((qualPrato.querySelector('span').innerHTML).replace(",", "."));

    terminouPedido();
}

function marcaBebida(qualBebida){
    bebidaSelecionada = true;

    const bordaSelecionadaAnteriormente = document.querySelector('.bebidas .bordaVerde');
    const checkSelecionadoAnteriormente = document.querySelector('.bebidas .checkVerde');

    if(bordaSelecionadaAnteriormente != null){
        bordaSelecionadaAnteriormente.classList.remove('bordaVerde');
        checkSelecionadoAnteriormente.classList.remove('checkVerde');
    }

    qualBebida.classList.add('bordaVerde');
    qualBebida.querySelector('ion-icon').classList.add('checkVerde');
    nomeBebida = qualBebida.querySelector('p').innerHTML;
    valorBebida = parseFloat((qualBebida.querySelector('span').innerHTML).replace(",", "."));

    terminouPedido();
}

function marcaSobremesa(qualSobremesa){
    sobremesaSelecionada = true;

    const bordaSelecionadaAnteriormente = document.querySelector('.sobremesas .bordaVerde');
    const checkSelecionadoAnteriormente = document.querySelector('.sobremesas .checkVerde');

    if(bordaSelecionadaAnteriormente != null){
        bordaSelecionadaAnteriormente.classList.remove('bordaVerde');
        checkSelecionadoAnteriormente.classList.remove('checkVerde');
    }

    qualSobremesa.classList.add('bordaVerde');
    qualSobremesa.querySelector('ion-icon').classList.add('checkVerde');
    nomeSobremesa = qualSobremesa.querySelector('p').innerHTML;
    valorSobremesa = parseFloat((qualSobremesa.querySelector('span').innerHTML).replace(",", "."));

    terminouPedido();
}

function fecharPedido(){
    document.querySelector('.whiteCover').classList.toggle('escondido');
    document.querySelector('.caixinhaVerde').classList.toggle('escondido');

    nomeCliente = prompt("Insira o seu nome:");
    endCliente = prompt("Agora, insira seu endere??o:");
    valorFinal = valorPrato + valorBebida + valorSobremesa;
    valorFinalCorrigido = valorFinal.toFixed(num2ArredondamentoReais);

    document.querySelector('.item1>p').innerHTML = `${nomePrato}`;
    valorPrato = valorPrato.toFixed(num2ArredondamentoReais);
    document.querySelector('.item1 p:nth-child(2)').innerHTML = `R$ ${(valorPrato.toString()).replace(".", ",")}`;

    document.querySelector('.item2>p').innerHTML = `${nomeBebida}`;
    valorBebida = valorBebida.toFixed(num2ArredondamentoReais);
    document.querySelector('.item2 p:nth-child(2)').innerHTML = `R$ ${(valorBebida.toString()).replace(".", ",")}`;

    document.querySelector('.item3>p').innerHTML = `${nomeSobremesa}`;
    valorSobremesa = valorSobremesa.toFixed(num2ArredondamentoReais);
    document.querySelector('.item3 p:nth-child(2)').innerHTML = `R$ ${(valorSobremesa.toString()).replace(".", ",")}`;

    document.querySelector('.total p:nth-child(2)').innerHTML = `R$ ${(valorFinalCorrigido.toString()).replace(".", ",")}`;
}

function fecharPedido2(){
    const mensagem = `Ol??, gostaria de fazer o pedido: \n
                        - Prato: ${nomePrato}\n
                        - Bebida: ${nomeBebida}\n
                        - Sobremesa: ${nomeSobremesa}\n
                        Total: R$ ${valorFinalCorrigido}\n
                        \n
                        Nome: ${nomeCliente}\n
                        Endere??o: ${endCliente}`;
    const mensagemCorrigida = encodeURIComponent(mensagem);
    open("https://wa.me/5532999999999?text="+mensagemCorrigida);
}

function cancelarPedido(){
    location.reload();
}