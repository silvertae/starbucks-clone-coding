//search
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
	searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
	searchEl.classList.add('focused');
	searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
	searchEl.classList.remove('focused');
	searchInputEl.setAttribute('placeholder', '');
});

//badge
const badgeEl = document.querySelector('header .badges');

window.addEventListener(
	'scroll',
	_.throttle(function () {
		console.log(window.scrollY);
		if (window.scrollY > 500) {
			// 배지 숨기기
			// gsap.to(요소, 지속시간, 옵션);
			gsap.to(badgeEl, 0.6, {
				opacity: 0,
				display: 'none',
			});
		} else {
			//배지 보이기
			gsap.to(badgeEl, 0.6, {
				opacity: 1,
				display: 'block',
			});
		}
	}, 300),
);
// _.throttle(함수, 시간(ms))

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
	gsap.to(fadeEl, 1, {
		delay: (index + 1) * 0.7, // 0.7s, 1.4s, 2.1s, 2.8s로 차례대로 나타남
		opacity: 1,
	});
});

// new Swiper(선택자, 옵션);
new Swiper('.notice-line .swiper', {
	direction: 'vertical',
	autoplay: true,
	loop: true,
});

new Swiper('.promotion .swiper', {
	slidesPerView: 3, //한 번에 보여지는 슬라이드 개수
	spaceBetween: 10, // 슬라이드 사이 여백 (px)
	centeredSlides: true, // 1번 슬라이드 정가운데 출력
	loop: true,
	// autoplay: {
	// 	delay: 5000,
	// },
	pagination: {
		el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
		clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
	},
	navigation: {
		prevEl: '.promotion .swiper-prev',
		nextEl: '.promotion .swiper-next',
	},
});

// toggle
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
	isHidePromotion = !isHidePromotion;
	if (isHidePromotion) {
		// 숨김 처리
		promotionEl.classList.add('hide');
	} else {
		// 보임 처리
		promotionEl.classList.remove('hide');
	}
});
