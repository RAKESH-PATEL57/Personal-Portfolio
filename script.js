//toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });

      // active sections for animation on scroll
      sec.classList.add("show-animate");
    }

    //animation that repeats on scroll
    else {
      sec.classList.remove("show-animate");
    }
  });

  // sticky header

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // Remove toggle icon and navbar when click navbar links (scroll)

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// dark mode light
// let darkModeIcon = document.querySelector("#darkMode-icon");
// darkModeIcon.onclick = () => {
//   darkModeIcon.classList.toggle("bx-sun");
//   document.body.classList.toggle("dark-mode");
// };

// let neonModeIcon = document.querySelector("#Neon");
// neonModeIcon.onclick = () => {
//   // neonModeIcon.classList.toggle('bx-shower');
//   document.body.classList.toggle("neon-mode");
// };

//NeonProgressBar
// let progress = document.getElementById('progressbar');
//         let totalHeight = document.body.scrollHeight - window.innerHeight;
//         window.onscroll = function(){
//             let progressHeight = (window.pageYOffset / totalHeight) * 100;

//           progress.style.height = progressHeight + "%";
//         }

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    mobile_number: document.getElementById("mobile_number").value,
    email_subject: document.getElementById("email_subject").value,
    message: document.getElementById("message").value,
  };
  
  const serviceId = "service_n6ww68e";
  const templateID = "template_hon8jwj";
  
  emailjs.send(serviceId, templateID, params).then((res) => {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mobile_number").value = "";
  document.getElementById("email_subject").value = "";
  document.getElementById("message").value = "";
  console.log(res);
  alert("Your message sent successefully");
})
.catch(err => console.log(err));

}
