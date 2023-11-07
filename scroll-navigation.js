document.addEventListener('DOMContentLoaded', (event) => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                document.querySelector(`.sidebar nav ul li a[href="#${id}"]`).classList.add('active');
            } else {
                document.querySelector(`.sidebar nav ul li a[href="#${id}"]`).classList.remove('active');
            }
        });
    }, { rootMargin: "-50% 0px -50% 0px" });

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });

    // Scroll to section when nav link is clicked
    document.querySelectorAll('.sidebar nav ul li a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            let target = document.querySelector(e.target.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });

            // Optional: close sidebar if it's a mobile menu
        });
    });
});

// Optional: adjust the CSS for `.active` class to highlight the navigation link.
