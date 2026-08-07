function curtir(botao) {
    if (botao.innerText == "Curtir") {
        botao.innerText = "Curtido!";
    } else {
        botao.innerText = "Curtir";
    }
}