document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });
    
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
                        if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.querySelector('i').classList.toggle('fa-times');
                menuToggle.querySelector('i').classList.toggle('fa-bars');
            }
        });
    });
    
    const stat1 = document.getElementById('stat1');
    const stat2 = document.getElementById('stat2');
    const stat3 = document.getElementById('stat3');
    
    function animateStats() {
        animateValue(stat1, 0, 65, 2000);
        animateValue(stat2, 0, 40, 2000);
        animateValue(stat3, 0, 92, 2000);
    }
    
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.textContent = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    
    const statsSection = document.querySelector('.problematica-section');
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateStats();
            observer.unobserve(statsSection);
        }
    }, { threshold: 0.5 });
    
    observer.observe(statsSection);
    
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            this.classList.add('active');
            
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    const testimonios = document.querySelectorAll('.testimonio');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentTestimonio = 0;
    
    function showTestimonio(index) {
        testimonios.forEach(testimonio => testimonio.classList.remove('active'));
        testimonios[index].classList.add('active');
    }
    
    prevBtn.addEventListener('click', function() {
        currentTestimonio = (currentTestimonio - 1 + testimonios.length) % testimonios.length;
        showTestimonio(currentTestimonio);
    });
    
    nextBtn.addEventListener('click', function() {
        currentTestimonio = (currentTestimonio + 1) % testimonios.length;
        showTestimonio(currentTestimonio);
    });
    
    setInterval(() => {
        currentTestimonio = (currentTestimonio + 1) % testimonios.length;
        showTestimonio(currentTestimonio);
    }, 5000);
    
formContacto.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensaje').value;
    const telefonoAdmin = "51932408057"; // Cambia al número real del admin

    const texto = `Hola, soy ${nombre}. ${mensaje}\nMe gustaría unirme al grupo: https://chat.whatsapp.com/GYsFRHWJBqR2CCgB2m9tpK`;
    const url = `https://wa.me/${telefonoAdmin}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
    formContacto.reset();
});

    
    const sections = document.querySelectorAll('section');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        fadeObserver.observe(section);
    });
});
document.getElementById('btnUnirme').addEventListener('click', function(e) {
    e.preventDefault();

    const enlaceGrupo = "https://chat.whatsapp.com/GYsFRHWJBqR2CCgB2m9tpK";

    // Solo abrir el enlace del grupo
    window.open(enlaceGrupo, '_blank');
});
