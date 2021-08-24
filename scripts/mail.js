function sendMail() {
        var link = "mailto:contato@ratnacontabilidade.com.br"
                 + "?subject=" + encodeURIComponent("Contato - RATNA")
                 + "&body=" + 'Nome: ' + encodeURIComponent(document.getElementById('nameInput').value) + ' - Telefone: ' + encodeURIComponent(document.getElementById('messageInput').value) + ' - Mensagem: ' +encodeURIComponent(document.getElementById('messageInput').value)
        ;
        
        window.location.href = link;
    }