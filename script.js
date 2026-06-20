document.addEventListener("DOMContentLoaded", function(){
    //untuk daftar email//
    const subscribeBtn = document.getElementById("btn-subscribe");
    if (subscribeBtn) {
        subscribeBtn.addEventListener("click", function (e) {
            e.preventDefault();
            // masukkan email pengguna //
            const userEmail = prompt("Masukkan alamat email Anda untuk mendapatkan berita viral terupdate:");
            if (userEmail) {
                // masukkan format email//
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (emailPattern.test(userEmail)) {
                    alert('Terima kasih! Email (${userEmail}) berhasil didaftarkan di SorotNet.');
                } else {
                    alert("Format email tidak valid. Silahkan coba lagi.");
                }
            }
        });
    }
    //aktifkan navigasi otomatis//
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            //menghapus border merah pada menu tadi//
            navLinks.forEach(item => {
                item.classList.remove("active", "border-bottom", "border-danger", "border-3");
            });
            //menambahkan efek ketika di klik menu pengguna yang daftar//
            this.classList.add("active", "border-bottom", "border-danger", "border-3");
        })
    })
})