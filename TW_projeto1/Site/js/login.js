document.addEventListener('DOMContentLoaded', function() {
    var loginBtn = document.getElementById('login-btn');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', function(event) {
            event.preventDefault();
            // Exibir mensagem de sucesso
            alert('Login efetuado com sucesso!');
            
            // Redirecionar para outra pÃ¡gina
            location.href = "index.html";
        });
    }
});