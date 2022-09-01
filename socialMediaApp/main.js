let form = document.getElementById('form');
let input = document.getElementById('input')
let msg = document.getElementById('msg')
let post = document.getElementById('post')



form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('button telah diklik')
    formValidation()
})

const formValidation = () => {
    if (input.value === '') {
        msg.innerHTML = `
            <div class = 'message'>
                Data Harus Diisi !!!
                <div class="removeMsg" onclick="removeMsg()" >x</div>
            </div>
             `
    }
    else {
        acceptData()
    }
}

// Function remove msg
const removeMsg = () => {
    msg.innerHTML = ""
}

let data = [];

const acceptData = () => {
    data[0] = input.value;
    console.log(data)
    createPost()
}

let createPost = () => {
    post.innerHTML += `
  <div>
    <p>${data}</p>
    <span class="options">
      <i onclick="editPost(this)" class="fas fa-edit"></i>
      <i onclick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
  `;
    input.value = "";
};

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};

