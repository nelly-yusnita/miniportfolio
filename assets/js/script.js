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
		portfolioButtonLink = document.querySelectorAll('.portfolio__button-link'),
		viewLink = document.querySelectorAll('.view__link');

let modal = function(modalClick){
	modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((mb,i)=>{
	mb.addEventListener('click', ()=>{
		modal(i)
	})
})

viewLink.forEach((vc) =>{
	vc.addEventListener('click', ()=>{
		modalViews.forEach((mv) =>{
			mv.classList.remove('active-modal')
		})
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

// ===== LANGUAGES ===== //
const navLanguages = document.querySelector('.nav__languages'),
		languageButton = document.querySelectorAll('.language__button');

// 1. Home
const homeTitle1 = document.querySelector('.home__title-1'),
		homeTitle2 = document.querySelector('.home__title-2'),
		homeTitle3 = document.querySelector('.home__title-3'),
		homeTitle4 = document.querySelector('.home__title-4');

// 2. About
const aboutDescription1 = document.querySelector('.about__description-1'),
		aboutDescription2 = document.querySelector('.about__description-2'),
		aboutDescription3 = document.querySelector('.about__description-3');

// 3. About popup
const aboutPopupDescription = document.querySelector('.about__popup-description');

// 4. Contact
const contactDescription = document.querySelector('.contact__description');

languageButton.forEach(el =>{
	el.addEventListener('click', ()=>{
		navLanguages.querySelector('.active-language').classList.remove('active-language');
		el.classList.add('active-language');

		const attr = el.getAttribute('language');

		// 1. Home
		homeTitle1.textContent = data[attr].home__title1;
		homeTitle2.textContent = data[attr].home__title2;
		homeTitle3.textContent = data[attr].home__title3;
		homeTitle4.textContent = data[attr].home__title4;

		// 2. About
		aboutDescription1.textContent = data[attr].about__description1;
		aboutDescription2.textContent = data[attr].about__description2;
		aboutDescription3.textContent = data[attr].about__description3;

		// 3. About popup
		aboutPopupDescription.textContent = data[attr].about__popupdescription;

		// 4. Contact
		contactDescription.textContent = data[attr].contact__description;
	});
});

var data = {
	// ENGLISH //
	"english":{
		// 1. Home
		"home__title1" : "Custom design websites",
		"home__title2" : "& affordable prices",
		"home__title3" : "for individuals",
		"home__title4" : "& small businesses.",

		// 2. About
		"about__description1" : "Hey! My name is Nelly Yusnita. I'm a Freelance Junior Front-end Developer based in Indonesia. I love working on fun little 	projects especially for individuals and small businesses during my free time.",

		"about__description2" : "I provide custom designs at affordable prices. Frequently your website is the first impression your customers will get, so make sure it’s a good one. Since my time is split between a few different things, I’m not able to take on every project I’d like to, but I'm always looking for fun work.",

		"about__description3" : "Take a look at my portfolio below, if you think I'd be a good match send me an email or message on my social media.",

		// 3. About popup
		"about__popupdescription" : "I'm sorry, my resume still not available.",

		// 4. Contact
		"contact__description" : "If you have a project that you want to carry out, do not hesitate and tell me what it is, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you."

	},
	// end english //

	// INDONESIA //
	"indonesia":{
		// 1. Home
		"home__title1" : "Desain kustom website",
		"home__title2" : "& harga terjangkau",
		"home__title3" : "untuk individu",
		"home__title4" : "& bisnis kecil.",

		// 2. About
		"about__description1" : "Hai, nama saya Nelly Yusnita. Saya seorang freelance Front-end Developer dari Indonesia. Saya suka mengerjakan proyek kecil yang menyenangkan terutama untuk individu dan bisnis kecil di waktu luang saya.",

		"about__description2" : "Saya menyediakan desain khusus dengan harga terjangkau. Seringkali website Anda adalah kesan pertama yang akan didapatkan pelanggan Anda, jadi pastikan Anda punya website yang bagus. Karena waktu saya terbagi antara beberapa hal yang berbeda, saya tidak dapat mengerjakan setiap proyek yang saya inginkan, tetapi saya selalu mencari pekerjaan yang menyenangkan.",

		"about__description3" : "Lihatlah portofolio saya di bawah ini, jika menurut Anda saya cocok, kirimkan saya email atau pesan di media sosial saya.",

		// 3. About popup
		"about__popupdescription" : "Maaf, Resume saya belum tersedia.",

		// 4. Contact
		"contact__description" : "Jika Anda memiliki proyek yang ingin Anda laksanakan, jangan ragu dan beri tahu saya apa itu, kotak masuk saya selalu terbuka. Apakah Anda memiliki pertanyaan atau hanya ingin menyapa, saya akan mencoba yang terbaik untuk menghubungi Anda kembali."
	}
	// end indonesia //
}
// ===== end languages ===== //

// ===== SCROLL REVEAL ANIMATION ===== //
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
	// reset: true// animation repeat //
})

sr.reveal(`.home__container, .about__content:nth-child(1), .contact__content:nth-child(1)`, {origin: 'left'})
sr.reveal(`.section__title, .contact__description`)
sr.reveal(`.section__subtitle`, {delay: 100})
sr.reveal(`.about__content:nth-child(2), .contact__content:nth-child(2)`, {origin: 'right'})
sr.reveal(`.skills__data`, {delay: 100, interval: 100})
// ===== end scroll reveal animation ===== //