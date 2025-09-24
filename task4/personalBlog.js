document.addEventListener("DOMContentLoaded", () => {
const posts = [
 
  {title: "Getting Started with PHP", date: "Sep 21, 2025", desc: "A beginner’s guide to PHP development.", img: "https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4", category: 'tech'},
  {title: "Hiking in Switzerland", date: "Sep 19, 2025", desc: "An unforgettable Alpine adventure.", img: "https://fastly.picsum.photos/id/291/3264/2176.jpg?hmac=8rA3poPO3ageaXrlGFvh6WsDVSmtXQ9RGqJIgxSZmMg", category: 'travel'},
  {title: "Top 5 JavaScript Frameworks", date: "Sep 22, 2025", desc: "Choosing the right framework for your project.", img: "https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o", category: 'tech'},
  {title: "Best Street Food in Asia", date: "Sep 16, 2025", desc: "Tasting Asia’s most famous street bites.", img: "https://fastly.picsum.photos/id/299/5000/3288.jpg?hmac=vajPmKo1hPW0RLYeb2h14Ry9Mp5Gw0rs0yc78FmBmdM", category: 'food'},
  {title: "Why Learn Data Structures?", date: "Sep 23, 2025", desc: "The importance of DSA in programming.", img: "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I", category: 'tech'},
  {title: "A Week in Paris", date: "Sep 18, 2025", desc: "The best spots to visit in the City of Light.", img: "https://fastly.picsum.photos/id/318/3264/2448.jpg?hmac=zkYZ29-Ww_A4O_kZ3gjlpFQuEYELWgeM6aI_CMG01BU", category: 'travel'},
  {title: "The Future of AI", date: "Sep 20, 2025", desc: "Exploring how AI is shaping our future.", img: "https://fastly.picsum.photos/id/420/200/300.jpg?hmac=ih0PBRbVFAuhDn9BNwNXfVgA55O-jX9RdDstDtY0wiI", category: 'tech'},
  {title: "Exploring Lebanon", date: "Sep 24, 2025", desc: "Hidden gems in the heart of Lebanon.", img: "https://fastly.picsum.photos/id/373/4896/3264.jpg?hmac=vTrYn2mUEwsfJnkaoiBskuIlDUaM3Xim-TFA_SK6lAg", category: 'travel'},
  {title: "10 Easy Pasta Recipes", date: "Sep 15, 2025", desc: "Quick meals for every occasion.", img: "https://fastly.picsum.photos/id/292/3852/2556.jpg?hmac=cPYEh0I48Xpek2DPFLxTBhlZnKVhQCJsbprR-Awl9lo", category: 'food'},
  
];


const blogContainer = document.getElementById("blog-cards");
  const paginationContainer = document.getElementById("pagination");
  const searchInput = document.getElementById("searchInput");

  let currentCategory = "all";
  let currentPage = 1;
  const postsPerPage = 5;

  // Render posts function
  function renderPosts(category = currentCategory, keyword = "", page = currentPage) {
    let filtered = category === "all" ? posts : posts.filter(p => p.category.toLowerCase() === category.toLowerCase());
   

    if (keyword.trim() !== "") {
      const lower = keyword.toLowerCase();
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(lower) ||
        p.desc.toLowerCase().includes(lower)
      );
    }

    const totalPages = Math.ceil(filtered.length / postsPerPage);
    if (page > totalPages) page = 1;
    currentPage = page;

    const start = (page - 1) * postsPerPage;
    const end = start + postsPerPage;
    const pagePosts = filtered.slice(start, end);

    blogContainer.innerHTML = "";
    if (pagePosts.length === 0) {
      blogContainer.innerHTML = `<p style="text-align:center; color:#777;">No posts found.</p>`;
    } else {
      pagePosts.forEach(post => {
        const card = document.createElement("div");
        card.className = "blog-card";
        card.innerHTML = `
          <img src="${post.img}" alt="${post.title}" class="blog-img">
          <div class="blog-content">
            <h3 class="blog-title">${post.title}</h3>
            <p class="blog-desc">${post.desc}</p>
            <p class="blog-date">${post.date}</p>
          </div>
        `;
        blogContainer.appendChild(card);
      });
    }

    renderPagination(totalPages);
  }

  // Pagination buttons
  function renderPagination(totalPages) {
    paginationContainer.innerHTML = "";
    if (totalPages <= 1) return;

    const prevBtn = document.createElement("button");
    prevBtn.textContent = "Prev";
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => renderPosts(currentCategory, searchInput.value, currentPage - 1);
    paginationContainer.appendChild(prevBtn);

    for (let i = 1; i <= totalPages; i++) {
      const pageBtn = document.createElement("button");
      pageBtn.textContent = i;
      pageBtn.className = i === currentPage ? "active" : "";
      pageBtn.onclick = () => renderPosts(currentCategory, searchInput.value, i);
      paginationContainer.appendChild(pageBtn);
    }

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Next";
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => renderPosts(currentCategory, searchInput.value, currentPage + 1);
    paginationContainer.appendChild(nextBtn);
  }

  // Expose global functions for your HTML buttons
  window.filterPosts = function(category) {
    currentCategory = category;
    currentPage = 1;
    renderPosts(currentCategory, searchInput.value, currentPage);
  };

  window.searchPosts = function() {
    currentPage = 1;
    renderPosts(currentCategory, searchInput.value, currentPage);
  };

  

  // Initial render
  renderPosts();
});