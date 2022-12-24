"use strict"

const menu = document.querySelector('.menu');
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu){
	

	iconMenu.addEventListener("click", function (e) {
		menu.classList.toggle('_active-menu');
	});

		iconMenu.addEventListener("click", function (e) {
		iconMenu.classList.toggle('_close-menu__icon');
	});
}
	

const openSubmenu = document.querySelector('.submenu-opener');
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

const menuCloseArea = document.querySelector('._menu__close-area');
const wrapper = document.querySelector('.wrapper');
if (wrapper){
	iconMenu.addEventListener("click", function (e) {
		wrapper.classList.toggle('_menu__close-area');
	});
}



if (menuCloseArea){
	menuCloseArea.addEventListener("click", function (e) {
  
		menu.classList.remove('_active-menu');

		iconMenu.classList.remove('_close-menu__icon');
	});
}