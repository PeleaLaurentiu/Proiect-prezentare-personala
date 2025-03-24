
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');
  
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
      
      // Prevent scrolling when menu is open
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
  }
  
  // Navbar - Always visible with white background
const navbar = document.querySelector('.navbar');

// Set navbar styles on load, without waiting for scroll
navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
navbar.style.backdropFilter = 'blur(10px)';
navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
navbar.style.padding = '0.75rem 0';

  
  // Animated Cards on Scroll
  const animatedCards = document.querySelectorAll('.animated-card');
  
  const checkInView = function() {
    animatedCards.forEach(card => {
      const cardPosition = card.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // If card is in viewport
      if (cardPosition.top < windowHeight * 0.9) {
        card.classList.add('visible');
      }
    });
  };
  
  // Run on load
  checkInView();
  
  // Run on scroll
  window.addEventListener('scroll', checkInView);
  
  // Run on resize
  window.addEventListener('resize', checkInView);
  
  // Animate skill bars on Experience page
  const skillBars = document.querySelectorAll('.skill-progress');
  
  if (skillBars.length > 0) {
    // Store original widths
    skillBars.forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0';
      bar.dataset.width = width;
    });
    
    const animateSkillBars = function() {
      skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (barPosition.top < windowHeight * 0.9) {
          bar.style.width = bar.dataset.width;
        }
      });
    };
    
    // Run on load with slight delay
    setTimeout(animateSkillBars, 500);
    
    // Run on scroll
    window.addEventListener('scroll', animateSkillBars);
  }
});
