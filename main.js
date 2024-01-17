const catalogo = [
    {
        id: 1,
        nome: 'Vip Esmeralda',
        duracao: '30 dias',
        preco: 29.99,
        desconto: 19.99,
        imagem: 'esmeralda.png',
        site: 'vip-esmeralda.html',
    },
    {
        id: 2,
        nome: 'Vip Ouro',
        duracao: '90 dias',
        preco: 49.99,
        desconto: 39.99,
        imagem: 'ouro.png',
        site: 'vip-ouro.html'
    },
    {
        id: 3,
        nome: 'Vip Diamante',
        duracao: '365 dias',
        preco: 99.99,
        desconto: 79.99,
        imagem: 'diamante.png',
        site: 'vip-diamante.html'
    },
    {
        id: 4,
        nome: '150k NightCoins',
        duracao: 'Uso único',
        preco: 11.99,
        desconto: 7.99,
        imagem: 'nightcoin.png',
        site: '150knightcoins.html'
    }
]

function produtos() {
    for (const produtoCatalogo of catalogo) {
        const cardProduto =
            `<div class="produto" id='produto-${produtoCatalogo.id}'>
                <img 
                    src="./Assets/imgs/${produtoCatalogo.imagem}"
                />
                <p class='nome'>${produtoCatalogo.nome}</p>
                <p class='duracao'>(${produtoCatalogo.duracao})</p>
                <p class='preco'><s>R$${produtoCatalogo.preco}</s></p>
                <p class='desconto'>R$${produtoCatalogo.desconto}</p>
                <a href="./${produtoCatalogo.site}" class="info-item">Mais Informações</a>
            </div>`;

        document.getElementById("container-products").innerHTML += cardProduto
    }
}

let button = document.getElementById('read-button')
button.addEventListener('click', function() {
    let regras = document.querySelector('.regras')
    regras.classList.toggle('active')
    if (regras.classList.contains('active')) {
        return button.textContent = "Ler Menos"
    }
    button.textContent = "Ler Mais +"
})

produtos();
