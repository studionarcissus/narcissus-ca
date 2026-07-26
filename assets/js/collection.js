console.log("NEW COLLECTION JS LOADED");
// ===============================
// Narcissus Collection
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // -----------------------
    // FILTERS
    // -----------------------

    const filters = document.querySelectorAll(".filter");
    const items = document.querySelectorAll(".gallery-item");

    filters.forEach(button => {

        button.addEventListener("click", () => {

            filters.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            const filter = button.dataset.filter;

            items.forEach(item => {

                if (
                    filter === "all" ||
                    item.dataset.category === filter
                ) {

                    item.classList.remove("hide");

                } else {

                    item.classList.add("hide");

                }

            });

        });

    });

    // -----------------------
    // FADE IN
    // -----------------------

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{
        threshold:.15
    });

    items.forEach(item=>observer.observe(item));

    // -----------------------
    // LIGHTBOX
    // -----------------------

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightbox-image");

    const closeButton =
        document.querySelector(".lightbox-close");

    const nextButton =
        document.querySelector(".lightbox-next");

    const prevButton =
        document.querySelector(".lightbox-prev");

    const images =
        [...document.querySelectorAll(".gallery-item img")];

    let current = 0;

    function open(index){

        current=index;

        lightboxImage.src=images[index].src;

        lightboxImage.alt=images[index].alt;

        lightbox.classList.add("open");

        document.body.style.overflow="hidden";

    }

    function close(){

        lightbox.classList.remove("open");

        document.body.style.overflow="";

    }

    function next(){

        current++;

        if(current>=images.length){

            current=0;

        }

        open(current);

    }

    function prev(){

        current--;

        if(current<0){

            current=images.length-1;

        }

        open(current);

    }

    images.forEach((img,index)=>{

        img.addEventListener("click",()=>{

            open(index);

        });

    });

    closeButton.addEventListener("click",close);

    nextButton.addEventListener("click",next);

    prevButton.addEventListener("click",prev);

    lightbox.addEventListener("click",(e)=>{

        if(e.target===lightbox){

            close();

        }

    });

    document.addEventListener("keydown",(e)=>{

        if(!lightbox.classList.contains("open")) return;

        if(e.key==="Escape") close();

        if(e.key==="ArrowRight") next();

        if(e.key==="ArrowLeft") prev();

    });

});
