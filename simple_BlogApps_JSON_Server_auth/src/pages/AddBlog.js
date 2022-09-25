
const app = document.getElementById('app')

window.handleBlog = (event) => {
    event.preventDefault()

    let 
}

export default function AddBlog() {
    app.innerHTML = `
        <div class="h-screen w-screen flex items-center justify-center ">
           
            <form onsubmit="handleBlog(event)" autocomplete="off" class="p-10 w-[400px] h-[500px] border-orange-500 border-[1px] flex flex-col gap-3 ">
            
                <h1 class="text-2xl text-center mb-6">Add Your Blogs</h1>
                <div class="flex flex-col gap-1">
                    <label>Judul</label>
                    <input type="text" class="border-slate-400 border-[1px] px-2 h-[40px] font-normal text-lg rounded-[5px]" />
                </div>

                <div class="flex flex-col gap-1">
                    <label>Link Gambar</label>
                    <input type="text" class="border-slate-400 border-[1px] px-2 h-[40px] font-normal text-lg rounded-[5px]" />
                </div>
                
                <div class="flex flex-col">
                    <label>Content</label>
                    <textarea class="border-slate-400 border-[1px] h-[90px] rounded-[5px] p-2 text-lg"></textarea>
                </div>

                <button type="submit" class="w-[100px] h-[40px] bg-orange-500 text-white rounded-md flex items-center justify-center hover:bg-orange-700">Add</button>

            </form>
        </div>
    `

}