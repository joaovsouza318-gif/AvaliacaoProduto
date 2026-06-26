/*
    Até R$ 3000,00 Isento
    Entre R$ 3000,00 até R$ 8.000,00 5%
    Entre R$ 8.000,00 até R$ 12.000,00 10%
    Entre R$ 12.000,00 até R$ 20.000,00 15%
    Acima de R$ 20.000,00 20%

    Sua tarefa é desenvolver um algoritmo utilizando as tecnologias HTML e JavaScript para atender a esse desafio.
    O sistema deverá conter um formulário que permita ao usuário informar os seguintes dados do lote:
    Descrição do Produto; Valor unitário; Quantidade.

    Após o envio do formulário, o sistema deverá exibir, na mesma página e abaixo do formulário, uma lista contendo:
    Valor adicional (ou a informação "Isento", quando aplicável); A lista deverá ser atualizada automaticamente a cada
    novo produto cadastrado, preservando os registros inseridos anteriormente. 
    Fica a seu critério mas é obrigatório utilizar: Array, Funções, Estrutura de repetição e Estrutura de Decisão.
*/

const produtoForm = document.querySelector("#form-produto")
const resultado = document.querySelector("#div-resultado")

