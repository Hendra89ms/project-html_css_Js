let submit = document.getElementById('form');
let render = document.getElementById('root');

// reset button
let reset = document.getElementById('reset')

submit.addEventListener('submit', (event) => {
    let name = event.target.name.value;
    let summary = event.target.summary.value;
    let phone = event.target.phone.value;
    let email = event.target.email.value;
    let address = event.target.address.value;

    if (name === '' && summary === '' && phone === '' && email === '' && address === '') {
        alert('You must Input data !!')
    }
    else {
        render.innerHTML += `
        <h1>${name}</h1>
        <p>${summary}</p>
        <div class="phone">
            <span class="material-symbols-outlined"> call </span>
            <span>${phone}</span>     
        </div>
        <div class="email>
            <span class="material-symbols-outlined"> mail </span>
            <span>${email}</span>
        </div>
        <div class="address">
            <span class="material-symbols-outlined"> location_on </span>
            <span>${address}</span>
        </div>
        <div class="garisBawah"></div>
    `
        event.target.input.value = ""
    }
})

reset.addEventListener('click', () => {
    console.log('reset data')
    render.innerHTML = '';
})

