document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("homeMenuButton");
  const menu = document.getElementById("homeMenu");
  if (menuButton && menu) {
    menuButton.addEventListener("click", function () {
      const isOpen = menu.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
    document.addEventListener("click", function (event) {
      if (!event.target.closest(".nav-dropdown")) {
        menu.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  }

  const slides = [
    { eyebrow: "WORK SMARTER", title: "Achieve Your Goals", description: "Track progress, manage information, and improve productivity with a clear and organized workflow.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=90" },
    { eyebrow: "WORK TOGETHER", title: "Better Team Collaboration", description: "Bring your team together, share information, and keep every project moving forward.", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=90" },
    { eyebrow: "STAY ORGANIZED", title: "Management Made Simple", description: "Keep your tasks and information organized so you can focus on what matters most.", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=90" }
  ];
  const hero = document.querySelector(".hero");
  const heroTitle = document.getElementById("heroTitle");
  if (hero && heroTitle) {
    let currentSlide = 0;
    const eyebrow = document.getElementById("heroEyebrow");
    const description = document.getElementById("heroDescription");
    const dots = Array.from(document.querySelectorAll(".dot"));
    function showSlide(index) {
      currentSlide = (index + slides.length) % slides.length;
      const slide = slides[currentSlide];
      eyebrow.textContent = slide.eyebrow;
      heroTitle.textContent = slide.title;
      description.textContent = slide.description;
      hero.style.backgroundImage = 'url("' + slide.image + '")';
      dots.forEach((dot, i) => dot.classList.toggle("active", i === currentSlide));
    }
    document.getElementById("prevSlide").addEventListener("click", () => showSlide(currentSlide - 1));
    document.getElementById("nextSlide").addEventListener("click", () => showSlide(currentSlide + 1));
    dots.forEach(dot => dot.addEventListener("click", () => showSlide(Number(dot.dataset.slide))));
    showSlide(0);
  }

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    const password = document.getElementById("password");
    const toggle = document.getElementById("togglePassword");
    const message = document.getElementById("formMessage");
    toggle.addEventListener("click", function () {
      const reveal = password.type === "password";
      password.type = reveal ? "text" : "password";
      toggle.textContent = reveal ? "Hide" : "Show";
    });
    loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!loginForm.reportValidity()) {
        return;
    }

    alert("Login successful!");
    window.location.href = "home.html";
});
    document.getElementById("forgotPassword").addEventListener("click", function () {
      message.textContent = "Password recovery is a demo feature and is not connected to an account service.";
    });
    document.getElementById("createAccount").addEventListener("click", function () {
      message.textContent = "Account creation is not connected in this demo.";
    });
  }

  const modal = document.getElementById("courseModal");
  if (modal) {
    const courseDetails = {
      HTML: "HTML stands for HyperText Markup Language. It provides the structure of web pages using elements such as headings, paragraphs, images, and links.",
      CSS: "CSS stands for Cascading Style Sheets. It controls the appearance of web pages, including colors, fonts, spacing, and layouts.",
      Bootstrap: "Bootstrap is a front-end toolkit for building responsive websites with a grid system, reusable components, and utility classes.",
      JavaScript: "JavaScript makes web pages interactive. It can respond to user actions, validate forms, and update page content dynamically."
    };
    const title = document.getElementById("modalTitle");
    const description = document.getElementById("modalDescription");
    function closeModal() {
      modal.classList.remove("visible");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    }
    document.querySelectorAll(".course-button").forEach(button => {
      button.addEventListener("click", function () {
        const course = button.dataset.course;
        title.textContent = course;
        description.textContent = courseDetails[course];
        modal.classList.add("visible");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
        document.getElementById("modalClose").focus();
      });
    });
    document.getElementById("modalClose").addEventListener("click", closeModal);
    document.getElementById("modalX").addEventListener("click", closeModal);
    modal.addEventListener("click", event => { if (event.target === modal) closeModal(); });
    document.addEventListener("keydown", event => { if (event.key === "Escape") closeModal(); });
  }
});
