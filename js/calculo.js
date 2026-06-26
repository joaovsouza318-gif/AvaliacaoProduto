export function calcular(descricao, valorUnitario, quantidade, resultado) {
    if (valorTotal <= 3000) {
        resultado.innerHTML += `<p>Produto: ${descricao.value} | Valor adicional: Isento</p>`
    } else if (valorTotal > 3000 && valorTotal <= 8000) {
        const valorAdicional = valorTotal * 0.05
        resultado.innerHTML += `<p>Produto: ${descricao.value} | Valor adicional: R$ ${valorAdicional.toFixed(2)}</p>`
    } else if (valorTotal > 8000 && valorTotal <= 12000) {
        const valorAdicional = valorTotal * 0.10
        resultado.innerHTML += `<p>Produto: ${descricao.value} | Valor adicional: R$ ${valorAdicional.toFixed(2)}</p>`
    } else if (valorTotal > 12000 && valorTotal <= 20000) {
        const valorAdicional = valorTotal * 0.15
        resultado.innerHTML += `<p>Produto: ${descricao.value} | Valor adicional: R$ ${valorAdicional.toFixed(2)}</p>`
    } else if (valorTotal > 20000) {
        const valorAdicional = valorTotal * 0.20
        resultado.innerHTML += `<p>Produto: ${descricao.value} | Valor adicional: R$ ${valorAdicional.toFixed(2)}</p>`
    }}