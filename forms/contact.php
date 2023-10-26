<?php
if(isset($_POST['email'])) {

    // Ganti email penerima dengan email yang sesuai
    $email_to = "cs@herro.co.id";
    $email_subject = "Formulir Kontak Website";

    function died($error) {
        echo "Maaf, tetapi terdapat kesalahan dalam formulir yang Anda kirim.";
        die();
    }

    // validasi data
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['subject']) ||
        !isset($_POST['message'])) {
        died('Maaf, terdapat masalah dengan formulir yang Anda kirim.');       
    }

    $name = $_POST['name']; // diambil dari formulir
    $email_from = $_POST['email']; // diambil dari formulir
    $subject = $_POST['subject']; // diambil dari formulir
    $message = $_POST['message']; // diambil dari formulir

    $email_message = "Detail formulir kontak:\n\n";
    $email_message .= "Nama: ".$name."\n";
    $email_message .= "Email: ".$email_from."\n";
    $email_message .= "Subject: ".$subject."\n";
    $email_message .= "Pesan: ".$message."\n";

    // create email headers
    $headers = 'From: '.$email_from."\r\n".
    'Reply-To: '.$email_from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);  
?>
<!-- include your own success html here -->
Terima kasih telah menghubungi kami. Kami akan segera menghubungi Anda kembali.
<?php
}
?>
