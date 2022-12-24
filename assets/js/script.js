// ===== SHOW MENU ===== //
const navMenu = document.getElementById('nav-menu'),
		navToggle = document.getElementById('nav-toggle'),
		navClose = document.getElementById('nav-close');

// Menu Show
// Validate if constant exists
if(navToggle){
	navToggle.addEventListener('click', () =>{
		navMenu.classList.add('show-menu')
	})
}

// Menu Hidden
// Validate if constant exists
if(navClose){
	navClose.addEventListener('click', () =>{
		navMenu.classList.remove('show-menu')
	})
}
// ===== end show menu ===== //

// ===== REMOVE MENU MOBILE ===== //
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
	const navMenu = document.getElementById('nav-menu')

	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));
// ===== end remove menu mobile ===== //

// ===== SCROLL SECTIONS ACTIVE LINK ===== //
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
				sectionTop = current.offsetTop - 58,
				sectionId = current.getAttribute('id')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else{
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive);
// ===== end scroll sections active link ===== //

// ===== CHANGE BACKGROUND HEADER ===== //
function scrollHeader(){
	const header = document.getElementById('header')

	if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);
// ===== end change background header ===== //

// ===== DARK LIGHT THEME ===== //
const themeButton = document.getElementById('theme-button'),
		darkTheme = 'dark-theme',
		iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme'),
		selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
	themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
	document.body.classList.toggle(darkTheme)
	themeButton.classList.toggle(iconTheme)

	localStorage.setItem('selected-theme', getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon())
})
// ===== end dark light theme ===== //

// ===== PORTFOLIO ===== //
const modalViews = document.querySelectorAll('.portfolio__modal'),
		modalBtns = document.querySelectorAll('.portfolio__button'),
		modalClose = document.querySelectorAll('.portfolio__modal-close'),
		portfolioButtonLink = document.querySelectorAll('.portfolio__button-link');

let modal = function(modalClick){
	modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((mb,i)=>{
	mb.addEventListener('click', ()=>{
		modal(i)
	})
})

modalClose.forEach((mc) =>{
	mc.addEventListener('click', ()=>{
		modalViews.forEach((mv) =>{
			mv.classList.remove('active-modal')
		})
	})
})

portfolioButtonLink.forEach((bc) =>{
	bc.addEventListener('click', ()=>{
		modalViews.forEach((bv) =>{
			bv.classList.remove('active-modal')
		})
	})
})
// ===== end portfolio ===== //

// ===== SCROLL UP ===== //
function scrollUp(){
	const scrollUp = document.getElementById('scrollup');

	if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);
// ===== end scroll up ===== //

// ===== EMAIL JS ===== //
const contactForm = document.getElementById('contact-form'),
		contactName = document.getElementById('contact-name'),
		contactEmail = document.getElementById('contact-email'),
		contactProject = document.getElementById('contact-project'),
		contactMessage = document.getElementById('contact-message');

const sendEmail = (e) =>{
	e.preventDefault()

	// Check if the field has a value
	if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
		// Add and remove color
		contactMessage.classList.remove('color-blue');
		contactMessage.classList.add('color-red');

		// Show message
		contactMessage.textContent = 'Write all the input fields 🥺'
	}else{
		// serviceID - templateID - #form - public Key
		emailjs.sendForm('service_fy25yup', 'template_415mqli', '#contact-form', 'A7e9LoG3WoK78lYld')
		.then(() =>{
			// Show message and add color
			contactMessage.classList.add('color-blue')
			contactMessage.textContent = 'Thank you 😉 Message sent ✅'

			// Remove message after five seconds
			setTimeout(() =>{
				contactMessage.textContent = ''
			}, 5000)
		}, (error) =>{
			// Send error
			alert('OOPS! SOMETHING HAS FAILED...', error)
		})

		// To clear the input field
		contactName.value = ''
		contactEmail.value = ''
		contactProject.value = ''
	}
}

contactForm.addEventListener('submit', sendEmail);
// ===== end email js ===== //

// ===== ABOUT POPUP ===== //
const downloadButton = document.querySelector('.download__button'),
		popup = document.querySelector('.about__popup')

downloadButton.addEventListener('click', ()=>{
	popup.style.display = 'flex';

	setTimeout(() =>{
		popup.style.display = 'none';
	}, 2500)
})
// ===== end about popup ===== //

// ===== SCROLL REVEAL ANIMATION ===== //
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
	// reset: true// animation repeat //
})

sr.reveal(`.home__container, .about__blob-box, .contact__content:nth-child(1)`, {origin: 'left'})
sr.reveal(`.section__title, .contact__description, .footer__container`)
sr.reveal(`.section__subtitle`, {delay: 100})
sr.reveal(`.about__content, .contact__content:nth-child(2)`, {origin: 'right'})
sr.reveal(`.skills__data`, {delay: 100, interval: 100})
// ===== end scroll reveal animation ===== //