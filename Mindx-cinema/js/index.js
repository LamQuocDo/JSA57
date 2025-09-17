document.addEventListener("DOMContentLoaded", () => {
  // Hiển thị phim từ localStorage
  const mainContent = document.querySelector(".main-content");
  if (mainContent) {
    const movies = JSON.parse(localStorage.getItem("movies")) || [];

    movies.forEach(movie => {
      const movieDiv = document.createElement("div");
      movieDiv.classList.add("movie");

      movieDiv.innerHTML = `
        <img src="${movie.imgURL}" alt="${movie.name}" />
        <div class="cnt">
          <h1 id="name-movie">${movie.name}</h1>
          <h4>Thể loại: ${movie.genre}</h4>
          <h4>Xuất xứ: ${movie.origin}</h4>
          <h4>Thời lượng: ${movie.duration}</h4>
          <h4>Hãng sản xuất phim: ${movie.studio}</h4>
          <h4>Tóm tắt nội dung: ${movie.summary}</h4>
        </div>
      `;
      mainContent.appendChild(movieDiv);
    });
  }

  // Cập nhật home-link dựa vào currentUser
  const homeLink = document.getElementById("home-link");
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!homeLink) return;

  if (!currentUser) {
    homeLink.textContent = "Đăng nhập";
    homeLink.href = "./pages/login.html";
  } else {
    homeLink.textContent = "Trang chủ";
    homeLink.href = "./index.html";

    // Thêm nút Đăng xuất
    const logoutBtn = document.createElement("button");
    logoutBtn.textContent = "Đăng xuất";
    logoutBtn.style.marginLeft = "10px";
    logoutBtn.style.padding = "5px 10px";
    logoutBtn.style.cursor = "pointer";
    logoutBtn.style.backgroundColor = "rgb(240,21,21)";
    logoutBtn.style.color = "white";
    logoutBtn.style.border = "none";
    logoutBtn.style.borderRadius = "5px";
    logoutBtn.style.transition = "0.3s";

    // Thêm hover effect
    logoutBtn.addEventListener("mouseenter", () => {
      logoutBtn.style.backgroundColor = "rgb(162,0,0)";
    });
    logoutBtn.addEventListener("mouseleave", () => {
      logoutBtn.style.backgroundColor = "rgb(240,21,21)";
    });

    homeLink.parentNode.appendChild(logoutBtn);

    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("currentUser");
      location.reload(); // tải lại trang để cập nhật navbar
    });
  }
});
