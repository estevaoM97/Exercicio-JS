const form = document.getElementById('form-numero');
const primeiroNumero = document.getElementById('primeiro-numero');
const segundoNumero = document.getElementById('segundo-numero');
const mensagemMaior = ` <b>${primeiroNumero.value}</b> é maior que <b>${segundoNumero.value}</b>`;
const mensagemIgual = ` <b>${primeiroNumero.value}</b> é igual a <b>${segundoNumero.value}</b>`;
const mensagemMenor = ` <b>${primeiroNumero.value}</b> é menor que <b>${segundoNumero.value}</b>`;
const containerMensagemMaior = document.querySelector('.mensagem-maior');
const containerMensagemMenor = document.querySelector('.mensagem-menor');
const containerMensagemIgual = document.querySelector('.mensagem-igual');

form.addEventListener('submit', function(e){
    e.preventDefault();





if (primeiroNumero.value > segundoNumero.value) {
    containerMensagemMaior.innerHTML = mensagemMaior;
    containerMensagemMaior.style.display = 'block';
    containerMensagemMenor.style.display = 'none';
    containerMensagemIgual.style.display = 'none';
}



if (primeiroNumero.value < segundoNumero.value){
    containerMensagemMenor.innerHTML = mensagemMenor;
    containerMensagemMenor.style.display = 'block';
    containerMensagemMaior.style.display = 'none';
    containerMensagemIgual.style.display = 'none';
}

if (primeiroNumero.value == segundoNumero.value){
    containerMensagemIgual.innerHTML = mensagemIgual;
    containerMensagemIgual.style.display = 'block';
    containerMensagemMaior.style.display = 'none';
    containerMensagemMenor.style.display = 'none';
}

});
