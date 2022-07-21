function simpan(){
 var id_nama = document.getElementById("nama");
 var id_alamat = document.getElementById("alamat");
 var id_email = document.getElementById("email");
 var id_mobil = document.getElementById("mobil");
 var id_tambah = document.getElementById("tambah");
 var id_tamp1= document.getElementById("tampilan1");
 var id_tamp2= document.getElementById("tampilan2");
 var id_tamp3= document.getElementById("tampilan3");
 var id_tamp4= document.getElementById("tampilan4");
 var id_tamp5= document.getElementById("tampilan5");
 id_tamp1.innerText = id_nama.value;
 id_tamp2.innerText = id_alamat.value;
 id_tamp3.innerText = id_email.value;
 id_tamp4.innerText = id_mobil.value;
 id_tamp5.innerText = id_tambah.value;
 }	