import * as func from "./calculo.js";

const produtos = [];
const produtoForm = document.querySelector("#produtoForm");
const resultado = document.querySelector("#div-resultado");

produtoForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const dados = new FormData(produtoForm);

    const produto = {
        descricao: dados.get("nomeP"),
        valorUnitario: Number(dados.get("valorUni")),
        quantidade: Number(dados.get("quantidade")),
    };

    const listaProdutos = () => {
        resultado.innerHTML = "";

        produtos.forEach((elem, i) => {

            const valorTotal = func.valorTotal(
                elem.valorUnitario,
                elem.quantidade
            );

            const situacao = func.calcular(
                elem.descricao,
                valorTotal
            );

            resultado.innerHTML += `
                <br>
                ================ Dados do Produto ${i + 1} ================<br>
                Descrição do Produto: ${elem.descricao}<br>
                Valor Unitário do Produto: R$ ${elem.valorUnitario.toFixed(2)}<br>
                Quantidade de Produtos: ${elem.quantidade}<br>
                Valor Total do Produto considerando Quantidade: R$ ${valorTotal.toFixed(2)}<br>
                ${situacao}
                <br><br>
            `;
        });
    };

    const addListaProdutos = (objetoProduto) => {
        produtos.push(objetoProduto);
        listaProdutos();
    };

    addListaProdutos(produto);

    produtoForm.reset();
});