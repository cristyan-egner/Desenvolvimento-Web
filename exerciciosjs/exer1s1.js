const produto = {
    nome: "Monitor",
    categoria: "Informática",
    preco: "899.90",
    estoque: 5
};

produto.preco = Number(produto.preco);

function exibirProduto(produto) {
    console.log(`Produto: ${produto.nome}`);
    console.log(`Categoria: ${produto.categoria}`);
    console.log(`Preço: R$ ${produto.preco}`);
}

if (isNaN(produto.preco)) {
    console.log("Preço inválido");
} else {
    exibirProduto(produto);

    console.log("");

    if (produto.estoque < 10) {
        console.log("Estoque baixo");
    } else {
        console.log("Estoque adequado");
    }

    console.log("");
    console.log(JSON.stringify(Object.keys(produto)));

    console.log("");

    for (let chave in produto) {
        console.log(`${chave}: ${typeof produto[chave]}`);
    }
}