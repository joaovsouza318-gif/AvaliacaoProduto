export function valorTotal(valorUnitario, quantidade) {
    return valorUnitario * quantidade;
}

export function calcular(descricao, valorTotal) {

    if (valorTotal <= 3000) {
        return "Item Isento de Valores Adicionais";

    } else if (valorTotal <= 8000) {
        const valorAdicional = valorTotal * 0.05;
        return `Uma Taxa de 5% será Aplicada | Valor Adicional: R$ ${valorAdicional.toFixed(2)}`;

    } else if (valorTotal <= 12000) {
        const valorAdicional = valorTotal * 0.10;
        return `Uma Taxa de 10% será Aplicada | Valor Adicional: R$ ${valorAdicional.toFixed(2)}`;

    } else if (valorTotal <= 20000) {
        const valorAdicional = valorTotal * 0.15;
        return `Uma Taxa de 15% será Aplicada | Valor Adicional: R$ ${valorAdicional.toFixed(2)}`;

    } else {
        const valorAdicional = valorTotal * 0.20;
        return `Uma Taxa de 20% será Aplicada | Valor Adicional: R$ ${valorAdicional.toFixed(2)}`;
    }
}