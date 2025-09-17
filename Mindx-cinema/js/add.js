document.addEventListener("DOMContentLoaded", () => {
  const tBtn = document.getElementById("t-btn");

  // Lấy danh sách phim từ localStorage
  function getMovies() {
    return JSON.parse(localStorage.getItem("movies")) || [];
  }

  // Lưu danh sách phim vào localStorage
  function saveMovies(movies) {
    localStorage.setItem("movies", JSON.stringify(movies));
  }

  // Thêm phim mới
  tBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const inputs = document.querySelectorAll(".add-movie-form input");
    const [name, imgURL, genre, origin, duration, studio, summary] = Array.from(inputs).map(input => input.value.trim());

    if (!name || !imgURL || !genre || !origin || !duration || !studio || !summary) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const movies = getMovies();

    const newMovie = {
      name,
      imgURL,
      genre,
      origin,
      duration,
      studio,
      summary
    };

    movies.push(newMovie);
    saveMovies(movies);

    alert(`Đã thêm phim "${name}" thành công!`);

    // reset form
    inputs.forEach(input => input.value = "");

    // Nếu đang ở index, hiển thị ngay
    if (document.querySelector(".main-content")) {
      displayMovies();
    }
  });

  // Hiển thị phim ra main-content
  function displayMovies() {
    const mainContent = document.querySelector(".main-content");
    if (!mainContent) return;

    mainContent.innerHTML = ""; // xóa cũ

    const movies = getMovies();

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

  // Nếu đang ở index, load phim đã lưu
  if (document.querySelector(".main-content")) {
    displayMovies();
  }
});
