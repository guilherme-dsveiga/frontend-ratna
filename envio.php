
<?php
    require("/home2/jobsdigi/qualityseguranca.com/PHPMailer-master/src/PHPMailer.php");
    require("/home2/jobsdigi/qualityseguranca.com/PHPMailer-master/src/SMTP.php");

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $msg = $_POST['msg'];


    /* CORPO DO E-MAIL */
    $body .= "<h2>RATNA | CONTABILIDADE</h2>";
    $body .= "Nome: $nome <br>";
    $body .= "E-mail: $email <br>";
    $body .= "Telefone: $tel <br>";
    $body .= "Mensagem:<br>";
    $body .= $msg;
    $body .= "<br>";
    $body .= "----------------------------";
    $body .= "<br>";
    $body .= "Enviado em <strong>".date("h:m:i d/m/Y")." por ".$_SERVER['REMOTE_ADDR']."</strong>"; //mostra a data e o IP
    $body .= "<br>";
    $body .= "----------------------------";


    $mail = new PHPMailer\PHPMailer\PHPMailer();
    $mail->IsSMTP(); // enable SMTP
    $mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
    $mail->SMTPAuth = true; // authentication enabled
    $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
    $mail->Host = "mail.ratnacontabilidade.com.br";
    $mail->Port = 465; // or 587
    $mail->IsHTML(true);
    $mail->Username = "contato@ratnacontabilidade.com.br";
    $mail->Password = "Contabilratna2021.";
    $mail->SetFrom($email);
    $mail->Subject = "Contato Site | Ratna";
    $mail->AddAddress("contato@ratnacontabilidade.com.br");
    $mail->MsgHTML($body);
    if(!$mail->Send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
    } else {
    echo "Mensagem enviada com sucesso";
    }
?>