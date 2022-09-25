

export default function Navbar() {
    let userData = localStorage.getItem('userData');

    return `
    <nav class=" w-full fixed bg-orange-500 text-white">
        <div class=" flex justify-between items-center px-12 h-[70px]">
            <h1 class="select-none uppercase text-xl">Hendra Blogs</h1>
            ${userData ? `
            <menu class="flex gap-4 text-white font-light">
                <a href="/">Home</a>
                <a href="/addBlog">Add Blog</a>
                <a onclick="handleLogout()" class="cursor-pointer" >Logout</a>
                <span class="px-4 bg-orange-700 items-center rounded-full">
                    ${JSON.parse(userData).user.email}
                </span>
            </menu>
            `:
            `<menu class="flex gap-10 text-lg">
                <a href="/">Home</a>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </menu> `
        }

            
        </div>
        
    </nav>
    `
}