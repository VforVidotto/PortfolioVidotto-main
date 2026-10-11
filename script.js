// Simulação do envio e validação do formulário de contato
function simularEnvio() {
    // Se o formulário não existir na página atual, o JS para por aqui e não dá erro
    if (!document.getElementById('nome')) return;

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação de campos vazios
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return; 
    }

    // Validação do formato de e-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert('Por favor, insira um formato de e-mail válido (exemplo: usuario@dominio.com).');
        return;
    }

    // Limpa os campos após validar
    document.getElementById('formContato').reset();
    
    // Mensagem final de sucesso
    alert('Mensagem enviada com sucesso!');
}

// Alternar entre o tema claro e escuro
function alternarTema() {
    document.body.classList.toggle('tema-escuro');
}