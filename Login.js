function tampilkan(){
    uname = document.getElementById("user").value;
    pw = document.getElementById("pw").value;
        if (uname=="" && pw==""){alert("Silahkan Isi Username dan Password Anda Terlebih Dahulu");}
    else if (pw==""){alert("Silahkan Isi Password Anda Terlebih Dahulu");}
    else if (uname==""){alert("Silahkan Isi Username Anda Terlebih Dahulu");}
    else{alert("Selamat Anda Berhasil Masuk! Dengan Data"+
    "\n Username  : " + uname + 
    "\n Password  : " + pw);}}