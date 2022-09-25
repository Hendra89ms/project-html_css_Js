import Navbar from "../components/Navbar"
import axios from "axios"

const app = document.getElementById('app')

window.handleRegister = (event) => {
    event.preventDefault()

    let email = event.target.email.value;
    let password = event.target.password.value;
    let password2 = event.target.password2.value;

    if (!email || !password || !password2) {
        alert('Isi Semua Data Input !')
        return
    }

    if (password != password2) {
        alert('Password Harus Sama !')
        return
    }

    axios.post('http://localhost:3000/users', {
        email: email,
        password: password,
    })
        .then(res => {
            alert('Registrasi Berhasil')
            window.location.href = '/login'
        })
        .catch(err => {
            alert('Terjadi Kesalahan')
            console.log(err)
        })

}

export default function Register() {
    app.innerHTML = `
    ${Navbar()}

    <div class="flex justify-center items-center min-h-screen p-28">
        <form onsubmit="handleRegister(event)" autocomplete="off" class="w-[420px] h-[500px] flex flex-col gap-5 justify-center items-center border-orange-500 border-[2px] rounded-md shadow-slate-600 shadow-md">
            
            <h1 class="text-2xl mb-8">Register Page</h1>
            <div class="flex flex-col w-[250px] ">
                <label for="email">Email</label>
                <input type="email" id="email" class="border-slate-600 border-[1px] h-[40px] rounded-md p-[10px] active:border-orange-500" />
            </div>

            <div class="flex flex-col w-[250px] ">
                <label for="password">Password</label>
                <input type="password" id="password" class="border-slate-600 border-[1px] h-[40px] rounded-md p-[10px]" />
            </div>

            <div class="flex flex-col w-[250px] ">
                <label for="konfirmasiPassword">Konfirmasi Password</label>
                <input type="password" id="password2" class="border-slate-600 border-[1px] h-[40px] rounded-md p-[10px]" />
            </div>

            <button type="submit" class=" border-[1px] w-[250px] h-[40px] rounded-md text-white bg-orange-400 mt-4 hover:bg-orange-600 duration-300">Login</button>
           
            
        </form>
    
    </div>
    `
}