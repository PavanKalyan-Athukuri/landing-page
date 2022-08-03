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
var navList = document.getElementById("navbar__list");
var sectionElements = document.getElementsByTagName('section');
var sectionId=[];
//console.log(sectionElements[0].getAttribute('id'));
for(let i=0;i<sectionElements.length;i++){
    sectionId[i] = sectionElements[i].getAttribute('id');
}
for(let i=0;i<sectionElements.length;i++){
    var list = document.createElement('li');
    var link = document.createElement('a');
    link.innerText="section"+(i+1);
    link.setAttribute("href","#"+sectionId[i]);
    link.style.color='red';
    list.appendChild(link);
    navList.appendChild(list);
}
let items = navList.getElementsByTagName('li');
document.addEventListener(`click`, e => {
  //  let item = navList.getElementsByTagName('li');
    let index = -1;
    if (e.target.tagName.toLowerCase() === 'a') {
      e.preventDefault()
      var id = e.target.getAttribute("href");
      id = id.substring(1,);
      let element = document.getElementById(id);
      element.scrollIntoView({
        behavior: "smooth"
    });
    for(let i=0;i<sectionId.length;i++){
        if(sectionId[i]==id){
            index=i;
            items[i].style.background="black";
            sectionElements[i].classList.add('your-active-class');
            break;
        }
    }
    removeUnnecessary(index);
    for(let i=0;i<sectionElements.length;i++){
        console.log(items[i]);
    }
    }
  });
const clientHeight = document.documentElement.clientHeight;
document.addEventListener('scroll',function(e){
    e.preventDefault();
    highLight();
    //return true;
});
function highLight(){
    let index=-1;
for(let i=0;i<sectionElements.length;i++){
    let boundaryY = sectionElements[i].getBoundingClientRect();
    if (boundaryY.bottom >= 0 || boundaryY.top >= clientHeight && boundaryY.right <= window.innerWidth && boundaryY.bottom <= window.innerHeight) {
        sectionElements[i].classList.add('your-active-class');
        index = i;
        items[i].style.background = "black";
        break;
    }
    removeUnnecessary(index);
}
}
function removeUnnecessary(index){
let j=0;
while(j<sectionElements.length){
if(index!=j){
    items[j].style.removeProperty('background');
    sectionElements[j].classList.remove('your-active-class');
}
j = j+1;
}
}
/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


