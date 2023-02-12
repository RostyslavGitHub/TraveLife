"use strict"

const menu = document.querySelector('.menu');
const iconMenu = document.querySelector('.menu__icon');
const menuCloseArea = document.querySelector('.close_area');
const openSubmenu = document.querySelector('.submenu-opener');

if (iconMenu){
	iconMenu.addEventListener("click", function (e) {

		menu.classList.toggle('_active-menu');
		menuCloseArea.classList.toggle('_menu__close-area');
		iconMenu.classList.toggle('close-menu__icon');
	
	});
}

if (menuCloseArea){
	menuCloseArea.addEventListener("click", function (e) {
  
		menuCloseArea.classList.remove('_menu__close-area');
		menu.classList.remove('_active-menu');
		iconMenu.classList.remove('close-menu__icon');

	});
}


if (openSubmenu){
	const submenu = document.querySelector('.submenu');
	openSubmenu.addEventListener("click", function (e) {
		
		submenu.classList.toggle('_active-submenu')
		
	});

	openSubmenu.addEventListener("click", function (e) {
		openSubmenu.classList.toggle('_active-submenu')
	});
}

const isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	IOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobole/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.IOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
			);
	}
};

if (isMobile.any()) {
	document.body.classList.add('_mobile');
} else {
	document.body.classList.add('_pc');
}



const scrUp = document.querySelector('.scroll-up');
if (scrUp){
	let scrollpos = window.scrollY;
	const scrollButton = document.querySelector(".scroll-up");
	let scrollChange = 340;
	const add_class_on_scroll = () => scrollButton.classList.add("_show-scroll-up");
	window.addEventListener('scroll', function() { 
	  scrollpos = window.scrollY;

	  if (scrollpos >= scrollChange) { add_class_on_scroll(); }
	});

	const remove_class_on_scroll = () => scrollButton.classList.remove("_show-scroll-up");
	window.addEventListener('scroll', function() { 
	  scrollpos = window.scrollY;

	  if (scrollpos >= scrollChange) { add_class_on_scroll(); }
	  else { remove_class_on_scroll(); }
	  
	});
}
