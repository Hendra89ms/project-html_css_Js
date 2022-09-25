import Navbar from "../components/Navbar"
import axios from "axios"

const app = document.getElementById('app')

window.handleLogin = (event) => {
    event.preventDefault()

    let email = event.target.email.value;
    let password = event.target.password.value;

    if (!email || !password) {
        alert('Harap Isi Data !')
        return
    }

    axios.post('http://localhost:3000/login', {
        email: email,
        password: password
    })
        .then(res => {
            alert('Login Berhasil !')
            localStorage.setItem('userData', JSON.stringify(res.data))
            window.location.href = '/'
        })
        .catch(err => {
            alert('Terjadi Kesalahan !')
            console.log(err)
        })
}

export default function Login() {

    document.title = 'Login Page'

    app.innerHTML = `
    ${Navbar()}

    <div class="flex justify-center items-center min-h-screen ">
        <form onsubmit="handleLogin(event)" autocomplete="off" class="w-[400px] h-[410px] flex flex-col gap-5 justify-center items-center border-orange-500 border-[2px] rounded-md shadow-slate-600 shadow-md">
            
            <h1 class="text-2xl mb-8">Login Page</h1>
            <div class="flex flex-col w-[250px] ">
                <label for="email">Email</label>
                <input type="email" id="email" class="border-slate-600 border-[1px] h-[40px] rounded-md p-[10px] active:border-orange-500" />
            </div>

            <div class="flex flex-col w-[250px] ">
                <label for="password">Password</label>
                <input type="password" id="password" class="border-slate-600 border-[1px] h-[40px] rounded-md p-[10px]" />
            </div>

            <button type="submit" class=" border-[1px] w-[250px] h-[40px] rounded-md text-white bg-orange-400 mt-2 hover:bg-orange-600 duration-300">Login</button>
           
            
        </form>
    
    </div>
    `
}