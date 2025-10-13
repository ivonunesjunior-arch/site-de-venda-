document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões de "Ver Detalhes"
    const botoesDetalhes = document.querySelectorAll('.saber-mais');

    // Adiciona um evento de clique a cada botão
    botoesDetalhes.forEach(botao => {
        botao.addEventListener('click', (evento) => {
            // Pega o nome do modelo de moto do atributo 'data-modelo'
            const modelo = evento.target.dataset.modelo;
            
            // Simulação de navegação ou exibição de modal de detalhes
            console.log(`Usuário clicou para ver detalhes do modelo: ${modelo}`);
            
            // Alerta simples para demonstrar a interatividade
            alert(`Você escolheu o modelo ${modelo}! Em um site real, você seria levado para uma página de detalhes completa.`);

            // Em um sistema real, aqui você faria uma requisição para carregar 
            // a página ou um modal com as especificações completas da moto.
        });
    });
});