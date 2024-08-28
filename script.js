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
                texto: ": Adotar uma política de proteção rígida de áreas naturais, preservando grandes áreas de florestas e parques nacionais",
                afirmacao: "Você limitou o desenvolvimento econômico e uso de recursos naturais"
            },
            {
                texto: "Investir em uma vasta rede de transporte público elétrico e infraestrutura para bicicletas",
                afirmacao: "Você mudou o hábito de muitos e gerou muitos custos para iniciar o projeto"
            }
        ]

    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativa: [
            {
                texto: "Adotar um sistema global de inteligência artificial (IA) para otimizar a gestão de recursos naturais e prever desastres ambientais",
                afirmacao: "Você gerou panico global sobre a segurança dos dados de todos"
            },
            {
                texto: " Implementar uma política de automação em larga escala para indústrias e serviços, melhorando a eficiência e reduzindo os custos operacionais",
                afirmacao: "Você gerou grande desemprego e aumentou a desigualdade econômica"
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