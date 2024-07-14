var typed = new Typed('#element', {
    strings: ['Web Developer', 'Machine Learning Enthusiast', 'Competitive Programmer', 'About DSA'],
    typeSpeed: 50,
});

document.querySelector('nav ul li a[href="#about"]').addEventListener('click', function (event) {
    event.preventDefault();
    const aboutSection = document.getElementById('about');
    aboutSection.style.display = 'block';
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('nav ul li a[href="#skills"]').addEventListener('click', function (event) {
    event.preventDefault();
    const skillsSection = document.getElementsByClassName('skills')[0];
    skillsSection.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('nav ul li a[href="#contact"]').addEventListener('click', function (event) {
    event.preventDefault();
    const contactSection = document.getElementById('contact');
    contactSection.style.display = 'block';
    contactSection.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('nav ul li a[href="#home"]').addEventListener('click', function (event) {
    event.preventDefault();
    const homeSection = document.getElementById('Home');
    homeSection.style.display = 'block';
    homeSection.scrollIntoView({ behavior: 'smooth' });
});
