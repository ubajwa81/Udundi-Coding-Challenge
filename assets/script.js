const modal = document.getElementById("exploreModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");
const mainContent = document.querySelector(".content");
const content = document.querySelector(".content-heading");

const showModal = (e) => {
    openBtn.classList.add("opacity-0","invisible");
    content.classList.add("opacity-0","invisible");
    mainContent.classList.add("active");
    document.body.style.overflow = "hidden";
    gsap.fromTo(e.currentTarget.querySelector('svg'), {scale: 1}, {scale: 0.75, duration: 0.25, yoyo: true, repeat: 1, overwrite: true});
    modal.querySelector("button").focus();
};

const hideModal = (e) => {
    mainContent.classList.remove("active");
    document.body.style.overflow = "";
    openBtn.classList.remove("opacity-0","invisible");
    content.classList.remove("opacity-0","invisible");
    gsap.fromTo(openBtn.querySelector('svg'), {scale: 1}, {scale: 0.75, duration: 0.25, yoyo: true, repeat: 1, overwrite: true}); 
    openBtn.focus();   
};

openBtn.addEventListener("click", (e) => showModal(e));
closeBtn.addEventListener("click", (e) => hideModal(e));
modal.addEventListener("click", (e) => {
    if (e.target === modal) hideModal();
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("flex")) hideModal();
});

