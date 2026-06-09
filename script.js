// Script untuk halaman beranda
document.addEventListener('DOMContentLoaded', function() {
    // Welcome button di halaman beranda
    const welcomeBtn = document.getElementById('welcomeBtn');
    if (welcomeBtn) {
        welcomeBtn.addEventListener('click', function() {
            alert('Selamat datang di website kami! 🎉');
        });
    }

    // Form handling di halaman kontak
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                formStatus.innerHTML = `Terima kasih ${name}, pesan Anda telah dikirim! Kami akan membalas ke ${email}.`;
                formStatus.style.color = 'green';
                contactForm.reset();
            } else {
                formStatus.innerHTML = 'Harap isi semua field!';
                formStatus.style.color = 'red';
            }
        });
    }

    // Animasi sederhana untuk semua halaman
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 100);
    });
});
