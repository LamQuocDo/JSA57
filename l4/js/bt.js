const items = [
  { id: 1, name: "Object 1" },
  { id: 2, name: "Object 2" },
  { id: 3, name: "Object 3" },
  { id: 4, name: "Object 4" },
  { id: 5, name: "Object 5" },
  { id: 6, name: "Object 6" },
  { id: 7, name: "Object 7" },
  { id: 8, name: "Object 8" },
  { id: 9, name: "Object 9" },
  { id: 10, name: "Object 10" },
];

//render user
function renderUser() {
  const ListContainer = document.getElementById("uList");
  ListContainer.innerHTML = ""; // xoa het noi dung cu

  // tao the li
  const ListItemHTML = items.map(function(s){
    return `<li data-id="${s.id}">${JSON.stringify(s)} <button>Edit</button> <button>Del</button></li>`
  })

  //chuyen sang string va gan vao ul
  ListContainer.innerHTML = ListItemHTML.join("")



  //----------------------------
  // add user
  function addUser(name){
    const newId = items[items.length - 1].id + 1
    const newUser = {id: newId, name: name}

    //add vao array
    items.push(newUser)
    //ghi vao ul
    const ListContainer = document.getElementById("uList")
    ListContainer.innerHTML += `<li data-id= "${newId}">${JSON.stringify(newUser)} <button>Edit</button> <button>Del</button></li>`
    
    //bat su kien form add
    document.getElementById("add-user").addEventListener("submit", function(e){
      e.preventDefault()
      const nameInp = DocumentFragment.getElementById("name").value.trim()
      addUser(nameInp)

      this.reset()
    })
  }
}

const editUserbyId = (id) => {
  const newName = prompt("Enter new name: ")
  if (newName){
    const user = items.find((s) => s.id === id)
    if (user){
      user.name = newName
      document.querySelector(
        `li[data-id= "${id}"]`
      ).innerHTML = `${JSON.stringify(user)} <button>Edit</button> <button>Del</button>`
    }
  }
}

const delUserById = (id) =>{
  const index = items.findIndex((s) => s.id === id)
  if(index !== -1){
    items.splice(index,1)
    const LiToDel = document.querySelector(`li[data-id="${id}]`)
    if (LiToDel){
      LiToDel.remove()
    }
  }
}

// bat su kien cho button edit + del
document.getElementById("uList").addEventListener("click", function (e) {
  // kiem tra bam vao nut edit
  if (e.target.tagName === "BUTTON") {
    // lay id tu thuoc tinh data-id cua the li cha
    const studentId = e.target.closest("li").dataset.id;
    const id = parseInt(studentId); // chuyen ve so
    if (e.target.textContent === "Edit") {
      // edit
      editUserbyId(id);
    } else if (e.target.textContent === "Del") {
      // del
      delUserById(id);
    }
  }
});

// main
document.addEventListener("DOMContentLoaded", function () {
  renderUser();
});