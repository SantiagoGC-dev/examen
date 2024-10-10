document.getElementById('year').textContent = new Date().getFullYear();

document.querySelector('.navbar-toggler').addEventListener('click', function() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.toggle('show');
        }, index * 100); 
    });
});
