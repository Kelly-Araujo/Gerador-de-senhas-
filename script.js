function gerarSenha() {
    var comprimento = document.getElementById("comprimento").value;
    var maiusculas = document.getElementById("maiusculas").checked;
    var numeros = document.getElementById("numeros").checked;
    var especiais = document.getElementById("especiais").checked;

    var caracteres = 'abcdefghijklmnopqrstuvwxyz'; // Letras minúsculas
    if (maiusculas) {
        caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Letras maiúsculas
    }
    if (numeros) {
        caracteres += '0123456789'; // Números
    }
    if (especiais) {
        caracteres += '!@#$%^&*()_+-={}[]|;:<>,.?/~`'; // Caracteres especiais
    }

    var senha = '';
    for (var i = 0; i < comprimento; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    document.getElementById("senha").textContent = senha;
}