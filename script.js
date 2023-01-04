function marcaPrato(numPrato){
    if (numPrato === 1){
        document.querySelector(".pratos>div:nth-child(2)").classList.remove('bordaVerde');
        document.querySelector(".pratos>div:nth-child(2) ion-icon").classList.remove('checkVerde');

        document.querySelector(".pratos>div:nth-child(3)").classList.remove('bordaVerde');
        document.querySelector(".pratos>div:nth-child(3) ion-icon").classList.remove('checkVerde');

        document.querySelector(".pratos>div:nth-child(1)").classList.add('bordaVerde');
        document.querySelector(".pratos>div:nth-child(1) ion-icon").classList.add('checkVerde');
        return numPrato;

    } else if (numPrato === 2){
        document.querySelector(".pratos>div:nth-child(1)").classList.remove('bordaVerde');
        document.querySelector(".pratos>div:nth-child(1) ion-icon").classList.remove('checkVerde');

        document.querySelector(".pratos>div:nth-child(3)").classList.remove('bordaVerde');
        document.querySelector(".pratos>div:nth-child(3) ion-icon").classList.remove('checkVerde');

        document.querySelector(".pratos>div:nth-child(2)").classList.add('bordaVerde');
        document.querySelector(".pratos>div:nth-child(2) ion-icon").classList.add('checkVerde');
        return numPrato;

    } else if (numPrato === 3){
        document.querySelector(".pratos>div:nth-child(1)").classList.remove('bordaVerde');
        document.querySelector(".pratos>div:nth-child(1) ion-icon").classList.remove('checkVerde');

        document.querySelector(".pratos>div:nth-child(2)").classList.remove('bordaVerde');
        document.querySelector(".pratos>div:nth-child(2) ion-icon").classList.remove('checkVerde');

        document.querySelector(".pratos>div:nth-child(3)").classList.add('bordaVerde');
        document.querySelector(".pratos>div:nth-child(3) ion-icon").classList.add('checkVerde');
        return numPrato;
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
        return numPrato;

    } else if (numPrato === 2){
        document.querySelector(".bebidas>div:nth-child(1)").classList.remove('bordaVerde');
        document.querySelector(".bebidas>div:nth-child(1) ion-icon").classList.remove('checkVerde');

        document.querySelector(".bebidas>div:nth-child(3)").classList.remove('bordaVerde');
        document.querySelector(".bebidas>div:nth-child(3) ion-icon").classList.remove('checkVerde');

        document.querySelector(".bebidas>div:nth-child(2)").classList.add('bordaVerde');
        document.querySelector(".bebidas>div:nth-child(2) ion-icon").classList.add('checkVerde');
        return numPrato;

    } else if (numPrato === 3){
        document.querySelector(".bebidas>div:nth-child(1)").classList.remove('bordaVerde');
        document.querySelector(".bebidas>div:nth-child(1) ion-icon").classList.remove('checkVerde');

        document.querySelector(".bebidas>div:nth-child(2)").classList.remove('bordaVerde');
        document.querySelector(".bebidas>div:nth-child(2) ion-icon").classList.remove('checkVerde');

        document.querySelector(".bebidas>div:nth-child(3)").classList.add('bordaVerde');
        document.querySelector(".bebidas>div:nth-child(3) ion-icon").classList.add('checkVerde');
        return numPrato;
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
        return numPrato;

    } else if (numPrato === 2){
        document.querySelector(".sobremesas>div:nth-child(1)").classList.remove('bordaVerde');
        document.querySelector(".sobremesas>div:nth-child(1) ion-icon").classList.remove('checkVerde');

        document.querySelector(".sobremesas>div:nth-child(3)").classList.remove('bordaVerde');
        document.querySelector(".sobremesas>div:nth-child(3) ion-icon").classList.remove('checkVerde');

        document.querySelector(".sobremesas>div:nth-child(2)").classList.add('bordaVerde');
        document.querySelector(".sobremesas>div:nth-child(2) ion-icon").classList.add('checkVerde');
        return numPrato;

    } else if (numPrato === 3){
        document.querySelector(".sobremesas>div:nth-child(1)").classList.remove('bordaVerde');
        document.querySelector(".sobremesas>div:nth-child(1) ion-icon").classList.remove('checkVerde');

        document.querySelector(".sobremesas>div:nth-child(2)").classList.remove('bordaVerde');
        document.querySelector(".sobremesas>div:nth-child(2) ion-icon").classList.remove('checkVerde');

        document.querySelector(".sobremesas>div:nth-child(3)").classList.add('bordaVerde');
        document.querySelector(".sobremesas>div:nth-child(3) ion-icon").classList.add('checkVerde');
        return numPrato;
    }
}