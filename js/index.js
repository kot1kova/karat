gsap.registerPlugin(ScrollTrigger)

const { innerHeight } = window

var scene = document.getElementById('scene')

var parallaxInstance = new Parallax(scene, {
	relativeInput: true,
	pointerEvents: false,
})

// ===========================================
// ===========================================
// ===========================================
// ===========================================

// const lastCard = document.querySelector('.card:last-child')

// gsap.utils.toArray('.card').forEach((card, i) => {
// 	let tl = gsap.timeline({
// 		scrollTrigger: {
// 			trigger: cards,
// 			start: 'top +=7%',
// 			end: 'bottom +=200px',
// 			scrub: 5,
// 			pin: true,
// 			pinSpacing: false,
// 			// markers: true,
// 			onLeave: () => gsap.to(card, { opacity: 0, duration: 1, scale: 0.4 }),
// 			onEnterBack: () => gsap.to(card, { opacity: 1, duration: 1, scale: 1 }),
// 		},
// 	})

// 	tl.to(card.querySelector('.cards__img-img'), {
// 		rotate: 180,
// 		duration: 10,
// 		ease: 'power2.inOut',
// 		onComplete: () => {},
// 	})
// })

gsap.to('.zoom__item', {
	scale: 10,
	// scale: 2,
	// duration: 100,
	ease: 'power2.inOut',
	scrollTrigger: {
		trigger: '#zoom',
		start: 'top top',
		end: 'bottom bottom',
		pin: true,
		end: `+=${innerHeight * 2}`,
		scrub: 3,
		onLeave: () => gsap.to(zoom__item, { opacity: 0, duration: 0.2 }),
		onEnterBack: () => gsap.to(zoom__item, { opacity: 1, duration: 1 }),
		// markers: true,
	},
})

let timeline = gsap.timeline({
	scrollTrigger: {
		trigger: '#zoom',
		start: 'top +=30px', // Начало анимации при прокрутке
		end: `+=${innerHeight * 1.3}`, // Продолжительность прокрутки
		pin: true, // Закрепляем элемент
		scrub: 5, // Привязка анимации к скроллу для плавности
		//   markers: true,  // Включить для отладки
	},
})

gsap.utils.toArray('.card').forEach((card, i) => {
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: card,
			start: 'top +=7%',
			end: 'bottom +=200px',
			scrub: 5,
			pin: true,
			pinSpacing: false,
			// markers: true,
			onLeave: () => gsap.to(card, { opacity: 0, duration: 1, scale: 0.4 }),
			onEnterBack: () => gsap.to(card, { opacity: 1, duration: 1, scale: 1 }),
		},
	})

	// tl.to(card.querySelector('.cards__img-img'), {
	// 	rotate: 180,
	// 	duration: 10,
	// 	ease: 'power2.inOut',
	// 	onComplete: () => {},
	// })
})

timeline.fromTo(
	'.zoom__info',

	{ opacity: 0, scale: 0.2 }, // Начальное состояние — невидимый и маленький элемент
	{
		scrub: 50,
		opacity: 1, // Полностью видимый элемент
		scale: 2, // Масштабирование элемента
		duration: 240, // Время на проявление и увеличение
		ease: 'power2.inOut', // Плавная анимация
	}
)

timeline.to('.zoom__info', {
	scrub: 50,
	opacity: 0, // Исчезновение элемента
	scale: 4, // Элемент продолжает увеличиваться
	duration: 80, // Время на исчезновение
	ease: 'power2.inOut', // Плавная анимация
})

// const tz = gsap.timeline({
// 	ScrollTrigger: {
// 		trigger: '.zoom__info',
// 		start: 'top center',
// 		end: 'bottom +=30%',
// 		scrub: true,
// 		markers: true,
// 	},
// })
// tz.fromTo(
// 	'.zoom__info',
// 	{
// 		opacity: 0,
// 		scale: 0.2,
// 	},
// 	{
// 		opacity: 1, // Полностью видимый элемент
// 		scale: 2, // Масштабирование элемента
// 		duration: 80, // Время на проявление и увеличение
// 		ease: 'power2.inOut', // Плавная анимация
// 	},
// 	tl.to({
// 		opacity: 0, // Исчезновение элемента
// 		scale: 8, // Элемент продолжает увеличиваться
// 		duration: 80, // Время на исчезновение
// 		ease: 'power2.inOut',
// 	})
// )

// function ripple() {
// 	// -------------------------------

// 	let tl1 = gsap.timeline()
// 	//let tl2 = gsap.timeline();

// 	tl1.to('.zoom__wrapper > div', {
// 		scale: 1.2,
// 		ease: 'none',
// 		duration: 0.75,
// 		stagger: { each: 0.15, repeat: 1, yoyo: true },
// 	})

// 	// nesting TLs in case I need more later
// 	let masterTl = gsap
// 		.timeline({
// 			repeat: -1,
// 			repeatDelay: 1,
// 		})
// 		.add(tl1)

// 	// -------------------------------
// } // end function

// gsap.set('.zoom__wrapper', { autoAlpha: 1 })

// // Do it
// ripple()
