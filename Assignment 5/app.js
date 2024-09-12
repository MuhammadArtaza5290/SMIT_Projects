
//====== toggle effect==========>
const toggleBtn = document.querySelector(".bar");
const sideBar = document.querySelector(".sidebar");
const navLinks = document.querySelector(".navbar ul");
const croseBtn =document.querySelector(".xrosse");

toggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked");
    toggleBtn.style.display = "none";
    croseBtn.style.display = "block";
    navLinks.classList.toggle("active");
    sideBar.classList.toggle("active");
  
    

});
croseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    navLinks.classList.remove("active");
    sideBar.classList.remove("active");
    croseBtn.classList.remove("active");
    toggleBtn.style.display = "block";
    croseBtn.style.display = "none";
})
