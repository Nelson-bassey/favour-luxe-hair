//  JAVASCRIPT LOGIC 
  document.addEventListener("DOMContentLoaded", () => {
    // --- 1. PRELOADER (2 Seconds) ---
    const preloader = document.getElementById("preloader");
    window.addEventListener("load", () => {
      setTimeout(() => {
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
      }, 2000);
    });

    // --- 2. MOBILE MENU TOGGLE & SCROLL INTERACTION ---
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li a");
    const header = document.getElementById("header");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("open");
    });

    // Allow keyboard navigation for accessibility
    hamburger.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            navLinks.classList.toggle("active");
            hamburger.classList.toggle("open");
        }
    });

    links.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("open");
      });
    });

    window.addEventListener("scroll", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("open");
      }
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });

    // --- 3. SCROLL REVEAL ANIMATION ---
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    // --- 4. WHATSAPP BOOKING & FORM RESET ---
    const salonPhoneNumber = "2347065959183";

    const form = document.getElementById("whatsappForm");
    const toast = document.getElementById("toast");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const service = document.getElementById("service").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;

      const message = `Hello Favour Luxe Hair & Beauty!%0A%0AI would like to book a session in Calabar.%0A%0A*Name:* ${name}%0A*Service:* ${service}%0A*Date:* ${date}%0A*Time:* ${time}%0A%0APlease confirm availability. Thank you!`;

      showToast();

      setTimeout(() => {
        const whatsappURL = `https://wa.me/${salonPhoneNumber}?text=${message}`;
        window.open(whatsappURL, "_blank");
        form.reset();
      }, 1500);
    });

    function showToast() {
      toast.classList.add("show");
      setTimeout(() => {
        toast.classList.remove("show");
      }, 3000);
    }
  });

  // --- 5. NAV LINK UNDERLINE ON SCROLL ---
  const navItems = document.querySelectorAll(".nav-links li a");

  window.addEventListener("scroll", () => {
    let current = "";

    navItems.forEach((item) => {
      const section = document.querySelector(item.getAttribute("href"));
      if (section && section.offsetTop <= window.scrollY + 100) {
        current = item.getAttribute("href");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === current) {
        item.classList.add("active");
      }
    });
  });