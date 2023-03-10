    const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click',()=>{
        //toggle
        nav.classList.toggle('nav-active');
        //animated links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation =`navLinkFade 0.5s ease forwards ${index / 6 + .5}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');
    });
}
navSlide();
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener("click", function(e){
        e.preventDefault;
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});