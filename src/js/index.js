const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();

        preencheBotaoSelecionado(botao);

        esconderImagemAtiva();

        mostrarImagemSelecionada(indice);
    });

});

function mostrarImagemSelecionada(indice) {
    imagens[indice].classList.add('ativa');
}

function preencheBotaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

