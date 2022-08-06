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
* Comments should be present at the beginning of each procedure and class.
* Great to have comments before crucial code sections within the procedure.
*/
/**
* Define Global Variables
* 
*/
let navList = document.getElementById("navbar__list");
let sectionElements = document.getElementsByTagName('section');
let sectionId = [];
/**
* End Global Variables
* Start Helper Functions
* 
*/
//coll
for (let i = 0; i < sectionElements.length; i++) {
    sectionId[i] = sectionElements[i].getAttribute('id');
    }
    let items = navList.getElementsByTagName('li');
function highLight() {
    let index = -1;
    for (let i = 0; i < sectionElements.length; i++) {
        let boundaryY = sectionElements[i].getBoundingClientRect();
        // Add class 'active' to section when near top of viewport
        if (boundaryY.bottom >= 30 || boundaryY.top >= -5) {
            sectionElements[i].classList.add('your-active-class');
            items[i].style.background="black";
            index = i;
            removeUnnecessary(index);
            break;
        }
    }
}
//function to remove highlight from sections which are not in viewport
function removeUnnecessary(index) {
    let j = 0;
    while (j < sectionElements.length) {
        if (index != j) {
        sectionElements[j].classList.remove('your-active-class');
        items[j].style.background="";
        }
        j = j + 1;
    }
}
/**
* End Helper Functions
* Begin Main Functions
* 
*/
// build the nav
// Build menu 
for (let i = 0; i < sectionElements.length; i++) {
    let list = document.createElement('li');
    let link = document.createElement('a');
    link.innerText = "section" + (i + 1);
    link.setAttribute("href", "#" + sectionId[i]);
    link.style.color = 'red';
    list.appendChild(link);
    navList.appendChild(list);
}
/**
* End Main Functions
* Begin Events
* 
*/
// Scroll to section on link click
document.addEventListener(`click`, e => {
    let index = -1;
        if (e.target.tagName.toLowerCase() === 'a') {
            e.preventDefault();
            let id = e.target.getAttribute("href");
            id = id.substring(1, );
            let element = document.getElementById(id);
            element.scrollIntoView({
                behavior: "smooth"
            });
        for(let i=0;i<sectionId.length;i++){
            if(sectionId[i]==id)
                index=i;
        }
    }
});
document.addEventListener('scroll', e =>{
    e.preventDefault();
    // Set sections as active
    highLight();
});
