// scroll reveal
const items = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

items.forEach(el => observer.observe(el));

// smooth scroll
document.querySelectorAll("a[href^='#']").forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(a.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});