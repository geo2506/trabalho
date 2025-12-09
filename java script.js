<script>
    // Seleciona o botão pelo seu seletor (neste caso, a tag 'button' é única)
    var meuBotao = document.querySelector('button');

    // Adiciona um "ouvinte de evento" (event listener) para o clique
    meuBotao.addEventListener('click', function() {
        // Exibe o alerta com o texto especificado
        alert('Você clicou no botão!')
    });
</script>