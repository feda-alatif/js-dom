/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

let navbar = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//Function to check if an element in viewport or not
function viewport(e) {
	var x = e.getBoundingClientRect();

	return (
		x.top >= -300 &&
		x.left >= 0 &&
		x.bottom <= (1.3 * window.innerHeight || document.documentElement.clientHeight) &&
		x.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

//Function to remove active classes
function sectionna() {
    sections.forEach((element)=>{
        element.classList.remove("your-active-class", "active");
    });
}

function nlna() {
    let anchor = document.querySelectorAll(".nav__hyperlink");
    anchor.forEach((element)=>{
        element.classList.remove("active-nav");
    });
}

/**
 * End Helper Functions
 * Begin Main Functions 
 * 
*/

// building the nav
window.addEventListener('load', buildnb())

// Add class 'active' to the section when near of viewport
function sectionac(sectionc) {
    sectionc.classList.add("your-active-class", "active");

    nlna();
    navLsa(sectionc.getAttribute('id'));
}
//      
function navLsa(currentSectionId) {
    let anchor = document.querySelectorAll(".nav__hyperlink");
  
    anchor.forEach((element)=>{
            if(element.getAttribute('href') == `#${currentSectionId}`) {
                element.classList.add("active-nav");
            }
        });
}

// croll to anchor id using scrollTO event
function scrollToSectionOnClick() {
    let anchor = document.querySelectorAll(".nav__hyperlink");
    anchor.forEach((element) => {
        element.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector(element.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
/**
 * End Main Functions
 * Begin Events
 * 
*/
// Build menu
function buildnb() {
	sections.forEach((element)=>{
	    let li = document.createElement("li");
	    li.classList.add("navbar__list__item");
    	let nn = element.getAttribute("data-nav");
    	let currentSectionId = element.getAttribute("id");
        li.innerHTML = `<a href="#${currentSectionId}" class="nav__hyperlink">${nn}</a>`;
        navbar.appendChild(li);
    });
}

// Scroll to section on link click
scrollToSectionOnClick();

// Set sections as active
window.addEventListener('scroll', function (event) {
	event.preventDefault();
	
    sections.forEach((element) => {
       
        if (viewport(element)) {
           sectionna();
           sectionac(element);
        } else if(window.scrollY==0) {
            sectionna();
            nlna();
        }
    }, false);
});



