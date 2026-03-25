// Basic Interactive Logic
document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle logic (setup for potential future expansion)
    const mobileToggle = document.querySelector('.mobile-toggle');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            // we could expand this to open a side drawer
            alert('Menu feature coming soon!');
        });
    }

    // Wishlist Toggle
    const wishlistBtns = document.querySelectorAll('.wishlist-btn');
    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const icon = this.querySelector('i');
            if (icon.classList.contains('ph')) {
                icon.classList.remove('ph');
                icon.classList.add('ph-fill');
                icon.style.color = '#ef4444'; // Red filled heart
            } else {
                icon.classList.remove('ph-fill');
                icon.classList.add('ph');
                icon.style.color = '';
            }
        });
    });
});
// Mobile Navigation Logic
const mobileToggle = document.querySelector('.mobile-toggle');
const mobileClose = document.createElement('div');
const mobileNav = document.createElement('div');
const backdrop = document.createElement('div');

// Set up Mobile Nav structure
mobileNav.className = 'mobile-nav-overlay';
backdrop.className = 'mobile-nav-backdrop';
mobileNav.innerHTML = `
    <div class="mobile-nav-close"><i class="ph ph-x"></i></div>
    <div class="mobile-nav-links">
        <a href="index.html">Home</a>
        <a href="about.html">About Us</a>
        <a href="contact.html">Contact Us</a>
        <a href="book.html" class="btn btn-primary" style="margin-top: 1rem;">Book Now</a>
    </div>
`;

document.body.appendChild(mobileNav);
document.body.appendChild(backdrop);

const closeBtn = mobileNav.querySelector('.mobile-nav-close');

const toggleMenu = (open) => {
    mobileNav.classList.toggle('active', open);
    backdrop.classList.toggle('active', open);
    document.body.classList.toggle('body-lock', open);
};

mobileToggle.addEventListener('click', () => toggleMenu(true));
closeBtn.addEventListener('click', () => toggleMenu(false));
backdrop.addEventListener('click', () => toggleMenu(false));

// Close menu on link click
mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
});
