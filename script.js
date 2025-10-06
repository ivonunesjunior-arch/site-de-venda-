document.addEventListener('DOMContentLoaded', () => {
    let contagemCarrinho = 0;
    const infoCarrinho = document.getElementById('carrinho-info');
    const botoesAdicionar = document.querySelectorAll('.add-carrinho');

    // Função para atualizar o número no cabeçalho
    function atualizarCarrinho() {
        infoCarrinho.textContent = `Carrinho (${contagemCarrinho})`;
    }

    // Adiciona um evento de clique para cada botão "Adicionar ao Carrinho"
    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', (event) => {
            contagemCarrinho++; // Aumenta a contagem
            atualizarCarrinho(); // Atualiza a exibição

            // Opcional: Mostra qual produto foi adicionado
            const produtoElement = event.target.closest('.produto');
            const nomeProduto = produtoElement.dataset.nome;
            alert(`${nomeProduto} adicionada(o) ao carrinho! Total: ${contagemCarrinho}`);
            
            // Aqui você adicionaria a lógica mais complexa: 
            // - Salvar o item no LocalStorage ou em um Array
            // - Calcular o valor total
        });
    });

    // Inicializa a contagem ao carregar a página
    atualizarCarrinho();
});