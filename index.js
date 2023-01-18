    
// --------------------------------------------- END OF PARALLAX TEXT --------------------------------------------

const words = ["A Customer Service Rep.", "A Digital Marketer.", "A Frontend Developer.", "Your Best Choice!"]

let cursor = gsap.to('.cursor', {opacity: 0, ease:"power2.inOut", repeat: -1})

let boxTl = gsap.timeline()

boxTl.to('.box', {duration: 1, width:"11vw", delay: 0.5, ease: "power4.inOut"})
.from('.hi', {duration: 1, y:"7vw", ease:"power3.out", onComplete: () => masterTl.play()})
.to('.box', {duration: 1, height:"7vw", ease:"elastic.out"})
.to('.box', {duration: 2, autoAlpha: 0.5, yoyo: true, repeat: -1, ease: "rough({ template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})"})

let masterTl = gsap.timeline({repeat: -1}).pause()

words.forEach(word => {
    let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1})
    tl.to('.text', {duration: 1.5, text: word})
    masterTl.add(tl)
})

// ---------------------------------------------------- // 

let links = document.querySelectorAll('.filters-primary a');

links.forEach(a => {
    a.addEventListener('click', () => {
        resetLinks();
        a.classList.add('active');
    })
})

function resetLinks() {
    links.forEach(a => {
        a.classList.remove('active');
    })
} 

// ------------------------------------------------------ //

{
    const nav = document.querySelector('.filters-primary');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (lastScrollY < window.scrollY) {
            nav.classList.add('nav__hidden');
        } else {
            nav.classList.remove('nav__hidden');
        }

        lastScrollY = window.scrollY;
    })
}

// --------------------------------------------------------- //

const sendEmail = () => {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "aruobebhn@gmail.com",
        Password : "arupassword111",
        To : 'aruobebhn@gmail.com',
        From : document.getElementById('email').value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById('name').value
            + '<br/> Email: ' + document.getElementById('email').value
            + '<br/> Phone No: ' + document.getElementById('phone').value
            + '<br/> Message: ' + document.getElementById('messaage').value
    }).then(
      message => alert("Message Sent Successfuly")
    );
}