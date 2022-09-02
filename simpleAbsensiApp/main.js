let absensi_form = document.getElementById('absensi_form');
let root = document.getElementById('root');
let input = document.getElementById('fullname');

let absensi_data = [];

absensi_form.addEventListener('submit', (e) => {
    e.preventDefault();

    // validasi Input
    if (input.value === '') {
        alert('You Must Input Data !!!');
        return;
    }

    let fullname = e.target.fullname.value;

    absensi_data.push({
        namaLengkap: fullname,
        waktu: new Date().toLocaleTimeString(),
        tanggal: new Date().toLocaleDateString(),
    });
    console.log(absensi_data);

    renderToHtml();

    input.value = ''; // sama dengan e.target.fullname.value;
});

const renderToHtml = () => {
    root.innerHTML = '';

    // mapping array to html element
    absensi_data.forEach((e, i) => {
        root.innerHTML += `
    <div class="card" draggable="true" ondragend="handleDelete(${i})">
      <span>  ${i + 1}. &nbsp;  ${e.namaLengkap} </span> 
      <span>${e.waktu} ${e.tanggal} </span>
    </div>
    `;
    });
};

const handleDelete = (i) => {
    absensi_data.splice(i, 1);

    renderToHtml();
};

