// Add event listener to nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const sectionId = link.getAttribute('href');
        const section = document.querySelector(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});