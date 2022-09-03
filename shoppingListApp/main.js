// tangkap element html
let modal = document.getElementById('modal');
let floating_button = document.getElementById('floating_button');
let modal_bg = document.getElementById('modal_bg')
let addlist_form = document.getElementById('addlist_form')
let root = document.getElementById('root')
let subtitle = document.getElementById('subtitle')

// tambahkan data ke subtitle
subtitle.innerHTML = new Date().toLocaleDateString()

//data list belanja
let data_list_belanja = []

// event listener floating button
floating_button.addEventListener('click', () => {

    // munculkan modal
    if (modal.style.display === 'none') {
        showModal()
        return
    }

    // sembunyikan kembali
    hideModal()
})

// meambahkan evenlistener kemodal bg
modal_bg.addEventListener('click', () => {
    // sembunyikan kembali
    hideModal()
})

// tambah evenlistener submit ke addlist form
addlist_form.addEventListener('submit', (e) => {
    // stop reload page
    e.preventDefault()

    // tangkap value dari masing2 inputfield
    let barang = e.target.barang.value;
    let harga = e.target.harga.value;

    data_list_belanja.push({
        nama_barang: barang,
        harga_barang: harga,
        tanggal: new Date().toLocaleDateString()
    })

    console.log(data_list_belanja)

    hideModal()

    // clear input 
    e.target.barang.value = ''
    e.target.harga.value = ''

    renderToHtml()
})

// render to Html
const renderToHtml = () => {
    root.innerHTML = '';

    data_list_belanja.forEach((e, i) => {
        root.innerHTML += `
        <div class="card">
            <small>${e.tanggal}</small>
            <div>
                ${e.nama_barang} <span>Rp. ${e.harga_barang}</span>
            </div>
            <button onclick="handleDelete(${i})">Selesai</button>
        </div>
        `
    })
}

// show modal 
const showModal = () => {
    modal.style.display = 'flex'
    floating_button.style.backgroundColor = "gray"
    floating_button.style.transform = 'rotate(45deg)'
}

//hide modal
const hideModal = () => {
    modal.style.display = 'none'
    floating_button.style.backgroundColor = "#f28086"
    floating_button.style.transform = 'rotate(0deg)'
}

// delete data pada array
const handleDelete = (index) => {
    data_list_belanja.splice(index, 1);

    renderToHtml()
}


