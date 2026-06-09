// DARK MODE TOGGLE - BEKERJA DI SEMUA HALAMAN
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== DARK MODE ==========
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // Cek preferensi yang tersimpan
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (darkModeToggle) darkModeToggle.textContent = '☀️ Light Mode';
    }
    
    // Event listener untuk toggle dark mode
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                darkModeToggle.textContent = '☀️ Light Mode';
            } else {
                localStorage.setItem('theme', 'light');
                darkModeToggle.textContent = '🌙 Dark Mode';
            }
            
            // Debug: cek apakah class ditambahkan
            console.log('Dark mode active:', document.body.classList.contains('dark-mode'));
        });
    } else {
        console.log('Tombol dark mode tidak ditemukan!');
    }
    
    // ========== WELCOME BUTTON (HALAMAN BERANDA) ==========
    const welcomeBtn = document.getElementById('welcomeBtn');
    if (welcomeBtn) {
        welcomeBtn.addEventListener('click', function() {
            alert('Selamat datang di website kami! 🎉');
        });
    }
    
    // ========== FORM CONTACT (HALAMAN KONTAK) ==========
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
                
                // Simpan ke localStorage (opsional)
                const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
                messages.push({ name, email, message, date: new Date().toISOString() });
                localStorage.setItem('contactMessages', JSON.stringify(messages));
            } else {
                formStatus.innerHTML = 'Harap isi semua field!';
                formStatus.style.color = 'red';
            }
        });
    }
    
    // ========== BLOG MODAL (HALAMAN BLOG) ==========
    const modal = document.getElementById('blogModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const closeModal = document.querySelector('.close-modal');
    const readMoreBtns = document.querySelectorAll('.read-more');
    
    function showModal(title, content) {
        if (modalTitle && modalContent && modal) {
            modalTitle.textContent = title;
            modalContent.textContent = content;
            modal.style.display = 'block';
        }
    }
    
    function closeModalFunc() {
        if (modal) modal.style.display = 'none';
    }
    
    // Event listener untuk tombol "Baca Selengkapnya"
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            const content = this.getAttribute('data-content');
            showModal(title, content);
        });
    });
    
    // Tutup modal ketika klik tombol close
    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunc);
    }
    
    // Tutup modal ketika klik di luar modal
    window.addEventListener('click', function(event) {
        if (modal && event.target === modal) {
            closeModalFunc();
        }
    });
    
    // ========== ANIMASI FADE-IN UNTUK SEMUA HALAMAN ==========
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
