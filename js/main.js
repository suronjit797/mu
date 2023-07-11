// preloader

const preloader = document.querySelector('.preloader')
window.addEventListener('load', function () {
	preloader.classList.add('d-none')
})



// animation on scroll

AOS.init();

// nav change on scorll
let lastScroll = 0

window.addEventListener('scroll', () => {
	const scroll = window.scrollY
	const nav = document.querySelector('nav')
	const toTop = document.querySelector('.to_top')


	if (lastScroll < scroll) {
		nav.style.top = "-100%"
		toTop.style.bottom = "-100%"
	} else {
		nav.style.top = "0"
		toTop.style.bottom = "50px"
	}
	lastScroll = scroll
})

//  hover effect

// nav

const navLink = document.querySelectorAll('.nav-link')

navLink.forEach((nLInk, ind) => {
	nLInk.addEventListener('mouseover', () => {
		nLInk.classList.add('nav-link_hover')
	})
	nLInk.addEventListener('mouseout', () => {
		nLInk.classList.remove('nav-link_hover')
	})
})

// mobile nav
const subHeader = document.querySelector('.mobile_nav_main_header')
const subBlack = document.querySelector('.mobile_nav_body_black')
const mobileNav = document.querySelector('.mobile_nav_body')
const navBtn = document.querySelector('.bars')
const html = document.querySelector('html')

navBtn.addEventListener('click', function () {
	mobileNav.classList.toggle('nav_show')
	html.style.overflow = 'hidden'
})

subHeader.addEventListener('click', function () {
	mobileNav.classList.remove('nav_show')
	html.style.overflowY = 'auto'
})
subBlack.addEventListener('click', function () {
	mobileNav.classList.remove('nav_show')
	html.style.overflowY = 'auto'
})



// monile nav sub

const mobileNavSub = document.querySelectorAll('.mobile_subbed');
mobileNavSub.forEach(item => {
	item.addEventListener('click', () => {
		item.classList.toggle('show')
	})
});



// news


const navCard = document.querySelectorAll('.news_card')

navCard.forEach((card, ind) => {
	card.addEventListener('mouseover', () => {
		card.classList.add('news_card_hover')
	})
	card.addEventListener('mouseout', () => {
		card.classList.remove('news_card_hover')
	})
})

// hero_slider

const swiperBullet = ['01', '02', '03', '04', '05', '06']
const swiper = new Swiper('.hero .swiper-container', {
	// Optional parameters
	loop: true,
	effect: 'fade',
	autoplay: {
		delay: 5000,
	},

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (swiperBullet[index]) + '</span>';
		}
	},

});

// services slider

const servicesSwiper = new Swiper('.services .swiper-container', {
	slidesPerView: 1,
	spaceBetween: 30,
	breakpoints: {
		'400': {
			slidesPerView: 2,
			spaceBetween: 20,
			centeredSlides: false,
		},
		'768': {
			slidesPerView: 3,
			spaceBetween: 40,
		},
		'991': {
			slidesPerView: 4,
			spaceBetween: 50,
		},
	}
});

// team slider

const teamSwiper = new Swiper('.team .swiper-container', {
	slidesPerView: 1,
	spaceBetween: 30,
	breakpoints: {
		'475': {
			slidesPerView: 2,
			spaceBetween: 20,
			centeredSlides: false,
		},
		'768': {
			slidesPerView: 3,
			spaceBetween: 40,
		},
	}
});


// projects slider
const projectSwiper = new Swiper('.projects .swiper-container', {
	slidesPerView: 1,
	loop: true,
	spaceBetween: 70,
	navigation: {
		nextEl: '.swiper-button-prev_custome',
		prevEl: '.swiper-button-next_custome',
	},

	breakpoints: {
		'768': {
			slidesPerView: 1,
			spaceBetween: 40,
		},
		'991': {
			slidesPerView: 2,
			spaceBetween: 50,
		},
	}


});

// client slider
const clientSwiper = new Swiper('.client .swiper-container', {
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 70,
	scrollbar: {
		el: '.swiper-scrollbar'
	},

	breakpoints: {

		'991': {
			slidesPerView: 2,
			spaceBetween: 50,
		},
	}


});

// brand slider
const brandSwiper = new Swiper('.brand .swiper-container', {
	slidesPerView: 1,
	spaceBetween: 30,
	breakpoints: {
		'480': {
			slidesPerView: 2,
			spaceBetween: 20,
			centeredSlides: false,
		},
		'576': {
			slidesPerView: 3,
			spaceBetween: 40,
		},
		'991': {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		'1200': {
			slidesPerView: 5,
			spaceBetween: 50,
		},
	}

});





// couner
$('.counter_body .count').counterUp({
	delay: 10,
	time: 1000
});



$(document).ready(function () {
	// to top
	$(window).scroll(function () {
		if ($(window).scrollTop() > 200) {
			$('.to_top').css("bottom", "50px !important")
		} else {
			$('.to_top').css("bottom", "-100%")
		}
	});


	$('.to_top').click(function (event) {
		event.preventDefault();

		$(window).scrollTop(0, 1000)

	});


	// mobile nav

	$('.mobile_line a').click(function (event) {
		event.preventDefault()

	})









});