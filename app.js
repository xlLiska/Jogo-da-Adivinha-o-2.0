let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecretoVar = gerarNumeroAleatorio();
let tentativa = 1;

mensagemInicial();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function mensagemInicial() {
    exibirTextoNaTela("h1", "Jogo da advinhação");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

function verificarPalpite() {
    let palpite = document.querySelector("input").value;
    console.log(palpite, numeroSecretoVar, palpite == numeroSecretoVar);

    if (palpite == numeroSecretoVar) {
        exibirTextoNaTela("h1", "Acertou");
        let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
        let mensagemAcerto = `Parabéns!!! Você acertou o número secreto com ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela("p", mensagemAcerto);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (palpite > numeroSecretoVar) {
            exibirTextoNaTela("p", "O número secreto é menor");
        } else {
            exibirTextoNaTela("p", "O número secreto é maior");
        }
    } tentativa++
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = Math.floor(Math.random() * numeroLimite) + 1;
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    palpite = document.querySelector("input");
    palpite.value = "";
}

function reiniciarJogo() {
    numeroSecretoVar = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    console.log(numeroSecretoVar, palpite == numeroSecretoVar);
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
