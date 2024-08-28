const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const alternativas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativa: [
            {
                texto: "Implementar um programa universal de saúde pública com cobertura para todos, porém aumentando os imposots",
                afirmacao: "Você melhorou a saúde publica, mas os impostos aumentaram em 5x"
            },
            {
                texto: "Introduzir um sistema de renda básica universal que garanta uma quantia mínima de dinheiro a todos os cidadãos",
                afirmacao: "Você desestimulou o trabalho e gerou preocupações fiscais a longo prazo"
            }
        ]

    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativa: [
            {
                texto: "Aperte para eliminar o uso de combustiveis fosseis em todo o mundo",
                afirmacao: "crise energetica global e colapso economico"
            },
            {
                texto: "acabe com todo o desmatamento",
                afirmacao: "escassez de recursos, fome e problemas economicos"
            }
        ]

    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativa: [
            {
                texto: "desenvolva uma IA superinteligente",
                afirmacao: "perda massiva de empregos e aumento da desigualdade"
            },
            {
                texto: "garanta total privacidade online",
                afirmacao: "dificulta a aplicação da lei e o combate a crimes digitais"
            }
        ]

    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPerguntas() {
    if(atual>= alternativas.length){
        mostraResultado();
        return;

    }
    perguntaAtual = alternativas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}


function mostraAlternativas() {
    for (const opção of perguntaAtual.alternativa) {
        const botaoAlternativa = document.createElement('button');
        botaoAlternativa.textContent = opção.texto;
        botaoAlternativa.addEventListener("click",  ()=> respostaSelecionada(opção));
        caixaAlternativas.appendChild(botaoAlternativa);

    }
}

function respostaSelecionada(opcao){
    const afirmacoes = opcao.afirmacao;
    historiaFinal += afirmacoes+" ";
    atual++;
mostraPerguntas();
}
  
function mostraResultado (){
    caixaPerguntas.textContent = "em resumo vc escolheu...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""
}
    mostraPerguntas();