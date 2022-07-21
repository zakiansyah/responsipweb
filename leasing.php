<?php
    $nama       =$_POST['nama'];
    $alamat     =$_POST['alamat'];
    $email      =$_POST['email'];
    $mobil      =$_POST['mobil'];
    $tambah    =$_POST['tambah']; 

    echo "<head><title>INVOICE RENTAL SUMBER MAKMUR</head></title>";
    $fp = fopen("struk_SM.txt","a+");
    fputs($fp,"$nama\n$alamat\n$email\n$mobil\n$tambah\n");
    fclose($fp);

    echo "Selamat menikmati dan hati-hati dijalan<br>";
?>