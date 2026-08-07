function contarCoracao(botao) {
    if (botao.disabled) return;

    let numero = botao.querySelector("span");
    numero.innerText = Number(numero.innerText) + 1;
    botao.disabled = true;
}

function contarCurtida(botao) {
    if (botao.disabled) return;

    let numero = botao.querySelector("span");
    numero.innerText = Number(numero.innerText) + 1;
    botao.disabled = true;
}
