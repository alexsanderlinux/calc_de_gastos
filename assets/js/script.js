
/*
    1. pegar o valor informado 
    2. pegar a categoria informada
    3. impedir que o usuário insira números negativos
    4. atrelar o valor digitado ao campo da categoria
    4.1 criar variaveis para controlar ou armazenar os valores de cada uma das categorias
    5. atualizar interface
    6. limpar campos  
*/

const matrizGastos =[
    ["Alimentação",0 ],
    ["Transporte",0 ],
    ["Lazer",0 ],
    ["Outros",0 ],
    ["Total",0 ]
]

//funções utilitarias
const obterElemento = (id) => document.getElementById(id);
const valorNegativo = (valor) => valor < 0;
const somaValor = (total, valor) => total + valor;
const limparCampos = () => obterElemento('valor').value = '';
const formataMoeda = (valor) => valor.toFixed(2).replace('.',',');

//obter valores do formulário
const obterValorInformado = () => parseFloat(obterElemento('valor').value);
const obterCategoriaInformada = () => obterElemento('categoria').value;

//obter categoria da matriz 
const obterCategoria = (matriz, nomeCategoria) => matriz.find((item) => item[0] === nomeCategoria);

//atualizar valores matriz
const atualizarValorCategoria = (categoria, valor) => categoria[1] = somaValor(categoria[1], valor);

const atualizarInterface = () => {
    matrizGastos.forEach(([nome, valor]) => {
        const elemento = obterElemento(nome);
        elemento.textContent = ` ${nome}: R$ ${formataMoeda(valor)}`
    })

}



function adicionarGasto(){

    const valorInformado = obterValorInformado();
    const categoriaINformada = obterCategoriaInformada();

    if(valorNegativo(valorInformado)){
        alert("Valor inválido. O valor não pode ser negativo.");
        return;
    }

    const categoria = obterCategoria(matrizGastos, categoriaINformada);
    const total = obterCategoria(matrizGastos, "Total");

    atualizarValorCategoria(categoria, valorInformado);

    atualizarValorCategoria(total, valorInformado);

    atualizarInterface();

    

    limparCampos();




}