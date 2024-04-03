<script>
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var senha = document.getElementById("senha").value;

        if (nome.trim() === '' || email.trim() === '' || senha.trim() === '') {
            alert("Por favor, preencha todos os campos.");
            event.preventDefault(); // Impede o envio do formulário
        }
    });
</script>