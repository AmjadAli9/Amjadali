document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    setTimeout(function() {
        loader.style.display = 'none';
        mainContent.classList.remove('hidden');
    }, 1500); 
   
    const sections = document.querySelectorAll('section');

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
