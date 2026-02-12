// ===== MOBILE MENU TOGGLE =====
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// ===== DOWNLOAD TIMER SCRIPT =====
const btnDownload = document.getElementById('startDownload');
const countdownContainer = document.getElementById('countdown');
const timeDisplay = document.getElementById('time');
const linksContainer = document.getElementById('links');

if (btnDownload) {
  btnDownload.addEventListener('click', function() {
    btnDownload.style.display = 'none';
    countdownContainer.classList.remove('hidden');
    
    let timeLeft = 10;
    
    const countdownInterval = setInterval(function() {
      timeLeft--;
      timeDisplay.textContent = timeLeft;
      
      if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        countdownContainer.style.display = 'none';
        linksContainer.classList.remove('hidden');
      }
    }, 1000);
  });
}

// ===== SMOOTH SCROLL ANIMATION =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== FADE-IN ANIMATION ON SCROLL =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(30px)';
  element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(element);
});

// ===== DOWNLOAD LINKS LOADING ANIMATION =====
document.querySelectorAll('.download-link').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.href === '#' || this.href.endsWith('#')) {
      e.preventDefault();
      this.innerHTML = '<span style="animation: pulse 1s infinite;">⏳ Téléchargement...</span>';
      setTimeout(() => {
        this.innerHTML = '<svg class="link-icon" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/></svg> Lien disponible bientôt';
      }, 2000);
    }
  });
});

// ===== ACTIVE NAV LINK =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.getAttribute('href') === currentPage || 
      (currentPage === '' && link.getAttribute('href') === 'index.html')) {
    link.classList.add('active');
  }
});

// ===== SCROLL TO TOP BUTTON =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00ff87 0%, #60efff 100%);
  color: #000;
  border: none;
  font-size: 24px;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  z-index: 999;
  box-shadow: 0 4px 20px rgba(0, 255, 135, 0.3);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.style.opacity = '1';
    scrollTopBtn.style.visibility = 'visible';
  } else {
    scrollTopBtn.style.opacity = '0';
    scrollTopBtn.style.visibility = 'hidden';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

scrollTopBtn.addEventListener('mouseenter', () => {
  scrollTopBtn.style.transform = 'translateY(-5px)';
  scrollTopBtn.style.boxShadow = '0 6px 30px rgba(0, 255, 135, 0.5)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
  scrollTopBtn.style.transform = 'translateY(0)';
  scrollTopBtn.style.boxShadow = '0 4px 20px rgba(0, 255, 135, 0.3)';
});
