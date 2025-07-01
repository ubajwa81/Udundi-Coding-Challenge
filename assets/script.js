const modal = document.getElementById("exploreModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");
const content = document.querySelector(".content");

const showModal = () => {
    modal.classList.remove("opacity-0","invisible","scale-0");
    content.classList.add("opacity-0","invisible");
    document.body.style.overflow = "hidden";
    modal.querySelector("button").focus();
};

const hideModal = () => {
    content.classList.remove("opacity-0","invisible");
    modal.classList.add("opacity-0","invisible","scale-0");
    document.body.style.overflow = "";
    openBtn.focus();
};

openBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", hideModal);
modal.addEventListener("click", (e) => {
    if (e.target === modal) hideModal();
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("flex")) hideModal();
});