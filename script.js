// 1. Controle do Chatbot (Abrir/Fechar)
function toggleChat() {
    const chat = document.getElementById('chat-container');
    if (chat.style.display === 'none' || chat.style.display === '') {
        chat.style.display = 'flex';
    } else {
        chat.style.display = 'none';
    }
}

// 2. Controle do Modal (Linguagens em construção)
function abrirModal() {
    document.getElementById('meuModal').style.display = 'block';
}

function fecharModal() {
    document.getElementById('meuModal').style.display = 'none';
}

// Fechar modal se clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('meuModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// 3. Troca de Tema (Claro/Escuro)
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('modo-claro');
    // Pequeno ajuste visual no botão
    if (document.body.classList.contains('modo-claro')) {
        themeBtn.textContent = 'Modo Escuro';
    } else {
        themeBtn.textContent = 'Modo Claro';
    }
});

// 4. Lógica de envio do Chat (Simulação inicial)
const btnEnviar = document.getElementById('btn-enviar');
const inputChat = document.getElementById('chat-input');
const chatWindow = document.getElementById('chat-window');

btnEnviar.addEventListener('click', () => {
    const mensagem = inputChat.value;
    if (mensagem.trim() !== "") {
        // Adiciona mensagem do usuário na tela
        chatWindow.innerHTML += `<p class="user-msg" style="text-align:right; color:var(--neon-blue);"><b>Você:</b> ${mensagem}</p>`;
        
        // Limpa o input
        inputChat.value = "";
        
        // Simula resposta (no futuro aqui entra o Make.com)
        setTimeout(() => {
            chatWindow.innerHTML += `<p class="bot-msg">Recebi sua mensagem! Em breve meu fluxo no <b>Make.com</b> irá processar isso.</p>`;
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }, 1000);
    }
});