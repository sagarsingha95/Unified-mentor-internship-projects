gsap.registerPlugin(ScrollTrigger);

const blogGrid = document.getElementById("blogGrid");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageInfo = document.getElementById("pageInfo");

let blogs = [];
let currentPage = 1;
const blogsPerPage = 3;

/* Fetch JSON blogs */
fetch("blogs.json")
  .then(res => res.json())
  .then(data => {
    blogs = data;
    renderBlogs();
  });

function renderBlogs() {
  blogGrid.innerHTML = "";

  const start = (currentPage - 1) * blogsPerPage;
  const end = start + blogsPerPage;
  const paginatedBlogs = blogs.slice(start, end);

  paginatedBlogs.forEach(blog => {
    const article = document.createElement("article");
    article.className = "blog-card";
    article.setAttribute("role", "listitem");
    article.setAttribute("tabindex", "0");

    article.innerHTML = `
      <h3>${blog.title}</h3>
      <p>${blog.desc}</p>
    `;

    blogGrid.appendChild(article);
  });

  pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(
    blogs.length / blogsPerPage
  )}`;

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === Math.ceil(blogs.length / blogsPerPage);

  gsap.from(".blog-card", {
    opacity: 0,
    y: 40,
    duration: 0.6,
    stagger: 0.2
  });
}

gsap.from(".category-card", {
  scrollTrigger: {
    trigger: ".categories",
    start: "top 80%"
  },
  opacity: 0,
  y: 40,
  stagger: 0.2,
  duration: 0.6
});

gsap.from(".why-ai, .newsletter, .about", {
  scrollTrigger: {
    trigger: ".why-ai",
    start: "top 85%"
  },
  opacity: 0,
  y: 30,
  duration: 0.8
});


/* Pagination controls */
prevBtn.addEventListener("click", () => {
  currentPage--;
  renderBlogs();
});

nextBtn.addEventListener("click", () => {
  currentPage++;
  renderBlogs();
});

/* Dark mode */
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
