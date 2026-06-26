export function valorTotal(valorUnitario, quantidade) {
    return valorUnitario * quantidade
}

export function calcular(descricao, valorTotal) {
    if (valorTotal <= 3000) {
        return "Isento"

    } else if (valorTotal > 3000 && valorTotal <= 8000) {
        const valorAdicional = valorTotal * 0.05
        return `Produto: ${descricao} | Valor adicional: R$ ${valorAdicional.toFixed(2)}`

    } else if (valorTotal > 8000 && valorTotal <= 12000) {
        const valorAdicional = valorTotal * 0.10
        return `<p>Produto: ${descricao.value} | Valor adicional: R$ ${valorAdicional.toFixed(2)}</p>`

    } else if (valorTotal > 12000 && valorTotal <= 20000) {
        const valorAdicional = valorTotal * 0.15
        return `<p>Produto: ${descricao.value} | Valor adicional: R$ ${valorAdicional.toFixed(2)}</p>`
    
    } else if (valorTotal > 20000) {
        const valorAdicional = valorTotal * 0.20
        return `<p>Produto: ${descricao.value} | Valor adicional: R$ ${valorAdicional.toFixed(2)}</p>`
    }}