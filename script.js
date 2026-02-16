document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. PRELOADER (3 Seconds) ---
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        // Changed timeout to 3000ms (3 seconds)
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
        }, 2000); 
    });

    // --- 2. MOBILE MENU TOGGLE & SCROLL INTERACTION ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');
    const header = document.getElementById('header');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('open');
        });
    });

    window.addEventListener('scroll', () => {
        if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    hamburger.classList.remove('open');
        }
        if (window.scrollY > 50) {
        header.classList.add('scrolled');
        } else {
        header.classList.remove('scrolled');
        }
    });

    // --- 3. SCROLL REVEAL ANIMATION ---
    const observerOptions = {
        threshold: 0.15, // Trigger when 15% of element is visible
    rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // --- 4. WHATSAPP BOOKING & FORM RESET ---
    // IMPORTANT: Replace with actual number
    const salonPhoneNumber = "2348000000000";

    const form = document.getElementById('whatsappForm');
    const toast = document.getElementById('toast');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

    const name = document.getElementById('name').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const message = `Hello Favour Luxe Hair & Beauty!%0A%0AI would like to book a session in Calabar.%0A%0A*Name:* ${name}%0A*Service:* ${service}%0A*Date:* ${date}%0A*Time:* ${time}%0A%0APlease confirm availability. Thank you!`;

    showToast();

        setTimeout(() => {
            const whatsappURL = `https://wa.me/${salonPhoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');

    // --- NEW: CLEAR FORM DATA ---
    form.reset(); 
        }, 1500);
    });

    function showToast() {
        toast.classList.add('show');
        setTimeout(() => {
        toast.classList.remove('show');
        }, 3000);
    }
});