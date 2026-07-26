/* ==========================================
   NARCISSUS COLLECTION
========================================== */

const galleryItems = document.querySelectorAll(".gallery-item");
const filters = document.querySelectorAll(".filter");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

const closeBtn = document.querySelector(".close-lightbox");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const currentImage = document.getElementById("current-image");
const totalImages = document.getElementById("total-images");

let currentIndex = 0;

const images = [...galleryItems].map(item=>{

    return item.querySelector("img");

});

totalImages.textContent = images.length;
const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{
threshold:.15
});

galleryItems.forEach(item=>observer.observe(item));
filters.forEach(button=>{

button.addEventListener("click",()=>{

filters.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const filter = button.dataset.filter;

galleryItems.forEach(item=>{

if(filter==="all"){

item.style.display="block";

requestAnimationFrame(()=>{

item.style.opacity=1;

});

return;

}

if(item.classList.contains(filter)){

item.style.display="block";

requestAnimationFrame(()=>{

item.style.opacity=1;

});

}else{

item.style.opacity=0;

setTimeout(()=>{

item.style.display="none";

},250);

}

});

});

});
galleryItems.forEach((item,index)=>{

item.addEventListener("click",()=>{

currentIndex=index;

openImage();

});

});

function openImage(){

lightbox.classList.add("open");

lightboxImage.src=images[currentIndex].src;

currentImage.textContent=currentIndex+1;

document.body.style.overflow="hidden";

}
function closeLightbox(){

lightbox.classList.remove("open");

document.body.style.overflow="";

}

closeBtn.addEventListener("click",closeLightbox);

lightbox.addEventListener("click",e=>{

if(e.target===lightbox){

closeLightbox();

}

});
nextBtn.addEventListener("click",()=>{

currentIndex++;

if(currentIndex>=images.length){

currentIndex=0;

}

openImage();

});
prevBtn.addEventListener("click",()=>{

currentIndex--;

if(currentIndex<0){

currentIndex=images.length-1;

}

openImage();

});
document.addEventListener("keydown",e=>{

if(!lightbox.classList.contains("open")) return;

if(e.key==="Escape"){

closeLightbox();

}

if(e.key==="ArrowRight"){

nextBtn.click();

}

if(e.key==="ArrowLeft"){

prevBtn.click();

}

});
document.addEventListener("contextmenu",e=>{

e.preventDefault();

});

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("draggable","false");

});

document.addEventListener("dragstart",e=>{

e.preventDefault();

});

document.addEventListener("selectstart",e=>{

e.preventDefault();

});
