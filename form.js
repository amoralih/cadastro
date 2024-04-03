<script>
    function validarCadastro() {
        var nome = document.getElementById("nome").value;
        var nome = document.getElementById("email").value;
        var nome = document.getElementById("senha").value;
        
        if (nome.trim() === '' || email.trim() === '' || senha.trim() === '') {
            alert("Por favor, preencha todos os campos.");
            return false
        }
        
        return true;
    }
</script>
