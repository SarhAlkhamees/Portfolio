// -------------------Hamburger menu for mobile view (Start)-------------------
const hamburger_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

hamburger_btn.addEventListener('click', function () {
	hamburger_btn.classList.toggle('is-active');
	mobile_menu.classList.toggle('is-active');
});

document.querySelectorAll('.mobile-nav').forEach(n => n.addEventListener('click', () => {
	hamburger_btn.classList.remove('is-active');
	mobile_menu.classList.remove('is-active');
}));
// -------------------Hamburger menu for mobile view (End)-------------------

// -------------------Carousel (Start)-------------------
document.querySelectorAll(".box").forEach(box => {
	const item = box.querySelectorAll(".item");
	const insertDots = Array.from(item, () => { return `<div class="dot"></div>`; });
	box.insertAdjacentHTML("beforeend", `<nav class="nav-dots"> ${insertDots.join("")} </nav>`);
	const Dots = box.querySelectorAll(".dot");
	Dots.forEach((dot, i) => {
		dot.addEventListener("click", () => {
			item.forEach(i => i.classList.remove("item-active"));
			Dots.forEach(dot => dot.classList.remove("dot-active"));

			item[i].classList.add("item-active");
			dot.classList.add("dot-active");
		});
	});
	item[0].classList.add("item-active");
	Dots[0].classList.add("dot-active");
});
// -------------------Carousel (End)-------------------