const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const toSignup = document.getElementById("to-signup");
const toLogin = document.getElementById("to-login");

const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");

// Chuyển form đăng nhập / đăng ký
toSignup.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.remove("active");
  signupForm.classList.add("active");
});

toLogin.addEventListener("click", (e) => {
  e.preventDefault();
  signupForm.classList.remove("active");
  loginForm.classList.add("active");
});

// Lấy users từ localStorage
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

// Lưu users vào localStorage
function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// Regex check email hợp lệ
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

// Đăng ký
signupBtn.addEventListener("click", () => {
  const email = document.getElementById("emilSign").value.trim();
  const username = document.getElementById("usernameSign").value.trim();
  const password = document.getElementById("passwordSign").value;
  const cpass = document.getElementById("cpassSign").value;

  if (!email || !username || !password) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }
  if (!isValidEmail(email)) {
    alert("Email không hợp lệ!");
    return;
  }
  if (password.length < 6) {
    alert("Mật khẩu phải có ít nhất 6 ký tự!");
    return;
  }
  if (password !== cpass) {
    alert("Mật khẩu xác nhận không khớp!");
    return;
  }

  let users = getUsers();

  if (users.some(u => u.email === email || u.username === username)) {
    alert("Email hoặc Username đã tồn tại!");
    return;
  }

  users.push({ email, username, password });
  saveUsers(users);

  alert("Đăng ký thành công! Hãy đăng nhập.");
  signupForm.classList.remove("active");
  loginForm.classList.add("active");
});

// Đăng nhập
loginBtn.addEventListener("click", () => {
  const email = document.getElementById("emilLog").value.trim();
  const username = document.getElementById("usernameLog").value.trim();
  const password = document.getElementById("passwordLog").value;

  let users = getUsers();

  const user = users.find(u => 
    u.email === email && u.username === username && u.password === password
  );

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    alert("Đăng nhập thành công! Xin chào " + user.username);
    window.location.href = "../index.html";
  } else {
    alert("Sai thông tin đăng nhập!");
  }
});
