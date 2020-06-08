var acaoEscolhida = "";
var valor1 = "";
var valor2 = "";

function botaoDigitoClick(event) {
    var digito = event.target.value;
    atualizarTela(`${valor2}${digito}`);
}

function botaoAcaoClick(event) {
    var acao = event.target.value;
    executarAcao(acao);
}

function atualizarTela(valor) {
    var tela = document.getElementById('tela');
    valor2 = valor;
    tela.innerHTML = valor2;
}

function executarAcao(acao) {
    if (acao === '=') {
        var resultado;
        if(acaoEscolhida === '+') {
            resultado = parseInt(valor2) + parseInt(valor1);
        }
        if(acaoEscolhida === '-') {
            resultado = parseInt(valor2) - parseInt(valor1);
        }
        if(acaoEscolhida === '*') {
            resultado = parseInt(valor2) * parseInt(valor1);
        }
        if(acaoEscolhida === '/') {
            resultado = parseInt(valor2) / parseInt(valor1);
        }
        atualizarTela(resultado);
    } else {

        if (acao === 'limpar') {
            location.reload();
        }

        valor1 = valor2;
        atualizarTela("");
        acaoEscolhida = acao;
    }
}