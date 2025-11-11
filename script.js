/* =========================================================
   XYZ HOTEL | SCRIPT FILE
   Description: Handles navbar toggle, animations, slider, 
   parallax scroll, and gallery lightbox
   ========================================================= */


/* ================== MOBILE MENU TOGGLE ================== */
function toggleMenu() {
  document.querySelectorAll('.nav-links').forEach(nav => {
    nav.classList.toggle('active');
  });
}


/* ================== FADE-UP SCROLL ANIMATION ================== */
const fadeElements = document.querySelectorAll('.fade-up');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target); // Animate once
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => fadeObserver.observe(el));


/* ================== PARALLAX SCROLL EFFECT ================== */
window.addEventListener('scroll', () => {
  const parallaxImages = document.querySelectorAll('.room-img');
  parallaxImages.forEach(img => {
    const rect = img.getBoundingClientRect();
    const offset = rect.top * -0.1; // Controls parallax speed
    img.style.backgroundPosition = `center ${offset}px`;
  });
});


/* ================== TITLE FADE + GOLD UNDERLINE ================== */
const fadeTitles = document.querySelectorAll('.fade-title');
const titleObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      titleObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

fadeTitles.forEach(title => titleObserver.observe(title));


/* ================== SECTION SLIDE-UP REVEAL ================== */
const fadeNext = document.querySelectorAll('.fade-next');
const nextObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      nextObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

fadeNext.forEach(el => nextObserver.observe(el));


/* ================== LUXURY SLIDER / CAROUSEL ================== */
document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('#lux-slider .slide'));
  if (!slides.length) return;

  let current = 0;
  let interval = null;
  const delay = 4000; // 4 seconds per slide

  // Function: Set Active Slide
  const setActive = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    current = index;
  };

  // Initialize first slide
  setActive(0);

  // Function: Start Autoplay
  const startAutoplay = () => {
    stopAutoplay();
    interval = setInterval(() => {
      const next = (current + 1) % slides.length;
      setActive(next);
    }, delay);
  };

  // Function: Stop Autoplay
  const stopAutoplay = () => {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  };

  // Slider Controls
  const prevBtn = document.querySelector('.slider-controls .prev');
  const nextBtn = document.querySelector('.slider-controls .next');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const prev = (current - 1 + slides.length) % slides.length;
      setActive(prev);
      startAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const next = (current + 1) % slides.length;
      setActive(next);
      startAutoplay();
    });
  }

  // Pause on Hover (Accessibility)
  const slider = document.getElementById('lux-slider');
  slider.addEventListener('mouseenter', stopAutoplay);
  slider.addEventListener('mouseleave', startAutoplay);
  slider.addEventListener('focusin', stopAutoplay);
  slider.addEventListener('focusout', startAutoplay);

  // Keyboard Controls
  slider.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prev = (current - 1 + slides.length) % slides.length;
      setActive(prev);
      startAutoplay();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      const next = (current + 1) % slides.length;
      setActive(next);
      startAutoplay();
    }
  });
  slider.setAttribute('tabindex', '0'); // Enables keyboard navigation

  // Start autoplay on load
  startAutoplay();

  // Cleanup on unload
  window.addEventListener('beforeunload', stopAutoplay);
});




document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");
  const backToTop = document.getElementById("backToTop");

  // Lightbox
  document.querySelectorAll(".gallery-item img").forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => lightbox.style.display = "none");
  lightbox.addEventListener("click", e => {
    if (e.target !== lightboxImg) lightbox.style.display = "none";
  });

  // Fade animations
  const fadeElements2 = document.querySelectorAll(".fade-up");
  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer2.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  fadeElements2.forEach(el => observer2.observe(el));

  // Back to Top
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});




// 🌟 our-inn.js — Premium Interactive Version for XYZ Hotel 🌟
document.addEventListener("DOMContentLoaded", () => {
  /* =======================================
     1️⃣  FADE-UP SCROLL ANIMATION
  ======================================= */
  const fadeElements3 = document.querySelectorAll(".fade-up");
  const observer3 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer3.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  fadeElements3.forEach((el) => observer3.observe(el));

  /* =======================================
     2️⃣  BACK TO TOP BUTTON
  ======================================= */
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 400 ? "block" : "none";
  });
  backToTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

  /* =======================================
     3️⃣  LOGO GLOW ANIMATION (Luxury Intro)
  ======================================= */
  const logoIcon = document.querySelector(".logo-icon");
  if (logoIcon) {
    logoIcon.classList.add("glow-once");
    setTimeout(() => logoIcon.classList.remove("glow-once"), 2000);
  }

  /* =======================================
     4️⃣  PARALLAX HERO EFFECT
  ======================================= */
  const hero = document.querySelector(".inn-hero");
  window.addEventListener("scroll", () => {
    if (hero) hero.style.backgroundPositionY = `${window.scrollY * 0.4}px`;
  });

  /* =======================================
     5️⃣  FEATURE CARD INTERACTIONS
  ======================================= */
  const cards = document.querySelectorAll(".feature-card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transition = "0.6s ease";
      card.style.transform = "translateY(-10px) scale(1.05)";
      card.style.boxShadow = "0 12px 30px rgba(191,168,122,0.35)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
      card.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
    });
  });

  /* =======================================
     6️⃣  PAGE SMOOTH FADE-IN ON LOAD
  ======================================= */
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 1.5s ease-in-out";
  window.addEventListener("load", () => {
    document.body.style.opacity = 1;
  });

  /* =======================================
     7️⃣  AUTO YEAR UPDATE IN FOOTER
  ======================================= */
  const footerText = document.querySelector(".footer-bottom p");
  if (footerText)
    footerText.innerHTML = `© ${new Date().getFullYear()} XYZ Hotel. All Rights Reserved.`;

  /* =======================================
     8️⃣  GOLDEN MOUSE LIGHT TRAIL
  ======================================= */
  const glow = document.createElement("div");
  glow.style.position = "fixed";
  glow.style.width = "14px";
  glow.style.height = "14px";
  glow.style.borderRadius = "50%";
  glow.style.background = "rgba(191,168,122,0.6)";
  glow.style.pointerEvents = "none";
  glow.style.transition = "transform 0.1s ease-out, opacity 0.3s ease";
  glow.style.zIndex = "9999";
  glow.style.opacity = "0";
  document.body.appendChild(glow);

  document.addEventListener("mousemove", (e) => {
    glow.style.opacity = "1";
    glow.style.transform = `translate(${e.clientX - 7}px, ${e.clientY - 7}px)`;
    setTimeout(() => (glow.style.opacity = "0"), 250);
  });

  /* =======================================
     9️⃣  QUICK BOOK POPUP MODAL
  ======================================= */
  const cta = document.querySelector(".inn-cta");
  if (cta) {
    const bookPopup = document.createElement("div");
    bookPopup.className = "book-popup";
    bookPopup.innerHTML = `
      <div class="popup-content">
        <h3>Book Your Stay</h3>
        <p>Experience the best luxury stay in the city.</p>
        <button class="popup-btn">Reserve Now</button>
        <span class="popup-close">&times;</span>
      </div>
    `;
    document.body.appendChild(bookPopup);

    const popupClose = bookPopup.querySelector(".popup-close");
    const popupBtn = bookPopup.querySelector(".popup-btn");

    setTimeout(() => bookPopup.classList.add("show"), 4000); // auto show after 4s
    popupClose.addEventListener("click", () => bookPopup.classList.remove("show"));
    popupBtn.addEventListener("click", () => {
      bookPopup.classList.remove("show");
      window.location.href = "rooms.html";
    });
  }

  /* =======================================
     🔟  NAV ACTIVE LINK AUTO-HIGHLIGHT
  ======================================= */
  const navLinks = document.querySelectorAll(".nav-links a");
  const currentPage = window.location.pathname.split("/").pop();
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) link.classList.add("active");
  });
});




//booking
document.addEventListener("DOMContentLoaded",()=>{
  const fadeEls=document.querySelectorAll(".fade-up");
  const preloader=document.getElementById("preloader");

  // preloader fade
  window.addEventListener("load",()=>setTimeout(()=>preloader.style.display="none",2700));

  // fade-up intersection observer
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  },{threshold:0.2});
  fadeEls.forEach(el=>obs.observe(el));
});

function handleBooking(e){
  e.preventDefault();
  document.getElementById("successMessage").style.display="flex";
  window.scrollTo({top:0,behavior:"smooth"});
  return false;
}


window.addEventListener("scroll", () => {
  const header = document.querySelector(".booking-header");
  if (window.scrollY > 60) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});



//about stay 
// Reveal on scroll animations
const fadeElements4 = document.querySelectorAll(".fade-up, .fade-down");
const observer4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer4.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
fadeElements4.forEach(el => observer4.observe(el));

// Auto-update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Parallax hero effect
const hero2 = document.querySelector(".about-hero");
window.addEventListener("scroll", () => {
  if (hero2) hero2.style.backgroundPositionY = `${window.scrollY * 0.4}px`;
});





//dining
// Entrance Animation
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
  }, 3000);
});

// Smooth Scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Review Slider
let currentReview = 0;
const reviews = document.querySelectorAll(".review");
setInterval(() => {
  reviews[currentReview].classList.remove("active");
  currentReview = (currentReview + 1) % reviews.length;
  reviews[currentReview].classList.add("active");
}, 4000);

// Reservation Form
const form = document.getElementById("reservationForm");
const thankYou = document.getElementById("thankYou");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  thankYou.style.display = "block";
  form.reset();
});



// PRELOADER FUNCTION
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.classList.add("fade-out");
  }, 3000); // Preloader visible for 3 seconds before fade-out
});

