import Navbar from "../components/Navbar"

const app = document.getElementById('app')

export default function Home() {
    app.innerHTML = `
    ${Navbar()}

    <div>Home</div>
    `
}