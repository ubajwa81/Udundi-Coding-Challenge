const modal = document.getElementById("exploreModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");
const content = document.querySelector(".content");

const showModal = (e) => {

    //openBtn.classList.add('scale-0', 'opacity-0');
    
    openBtn.classList.add("opacity-0","invisible");
    modal.classList.remove("opacity-0","invisible","scale-0");
    content.classList.add("opacity-0","invisible");
    document.body.style.overflow = "hidden";
    gsap.fromTo(e.currentTarget.querySelector('svg'), {scale: 1}, {scale: 0.75, duration: 0.25, yoyo: true, repeat: 1, overwrite: true});
    modal.querySelector("button").focus();
    setTimeout(() => {
        

    }, 300);



};

const hideModal = () => {
    content.classList.remove("opacity-0","invisible");
    modal.classList.add("opacity-0","invisible","scale-0");
    document.body.style.overflow = "";
    
    openBtn.classList.remove("opacity-0","invisible");
    openBtn.focus();    
    setTimeout(() => {
        // openBtn.classList.remove('scale-0', 'opacity-0');
        // openBtn.classList.add('scale-100', 'opacity-100');
        
    }, 400);


};

openBtn.addEventListener("click", (e) => showModal(e));
closeBtn.addEventListener("click", hideModal);
modal.addEventListener("click", (e) => {
    if (e.target === modal) hideModal();
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("flex")) hideModal();
});

