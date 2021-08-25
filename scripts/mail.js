
$(document).ready(function($) {  
  
    $('#enviarMsg').click(function() {
      var nome = $('#nameInput').val()
      var email = $('#emailInput').val()
      var tel = $('#telephoneInput').val()
      var msg = $('#messageInput').val()
  
      if(nome == ''){      
        Swal.fire({
          text: 'Preencha o nome corretamente.',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      } else if(email == ''){
        Swal.fire({
          text: 'Preencha o email corretamente.',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      } else if(tel == ''){
        Swal.fire({
          text: 'Preencha o telefone corretamente.',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      } else if(msg == ''){
        Swal.fire({
          text: 'Preencha a mensagem corretamente.',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      } else {
        $.ajax({
          type: "POST",
          url: "envio.php",
          data: {nome, email, tel, msg}
        }).done(function( msg ) {
          Swal.fire({
              text: 'Mensagem de contato enviada com sucesso.',
              icon: 'success',
              confirmButtonText: 'Ok'
          })
        });
      }
    });
  
  });
  