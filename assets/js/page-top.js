// Page Top Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create page top button
    const pageTopBtn = document.createElement('div');
    pageTopBtn.className = 'page-top-btn';
    pageTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    pageTopBtn.setAttribute('title', 'ページトップ');
    document.body.appendChild(pageTopBtn);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            pageTopBtn.classList.add('show');
        } else {
            pageTopBtn.classList.remove('show');
        }
    });

    // Smooth scroll to top when clicked
    pageTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
