function tampilkan(){
    nama = document.getElementById("nama").value;
    jenisK = document.getElementById("jenisK").value;
    uname = document.getElementById("user").value;
    email = document.getElementById("email").value;
    pw = document.getElementById("pw").value;
      if (nama =="" && jenisK =="" && uname=="" && email=="" && pw==""){alert("Silahkan Lengkapi Data Diri Anda Terlebih Dahulu");}
      else if (nama==""){alert("Silahkan Isi Nama Anda Terlebih Dahulu");}
      else if (jenisK==""){alert("Silahkan Isi Jenis Kelamin Anda Terlebih Dahulu");}
      else if (email==""){alert("Silahkan Isi Email Anda Terlebih Dahulu");}
      else if (pw==""){alert("Silahkan Isi Password Anda Terlebih Dahulu");}
      else if (uname==""){alert("Silahkan Isi Username Anda Terlebih Dahulu");}
      else{alert("Selamat Anda Berhasil Mendaftar! Dengan Data"+
      "\n Nama          : " +nama + 
      "\n Jenis Kelamin : " +jenisK +
      "\n Username      : " + uname + 
      "\n Email         : " + email + 
      "\n Password      : " + pw);}}