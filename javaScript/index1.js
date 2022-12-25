let arr = []

function tambahData(data) {
    arr.push(data)
}

const tampilkanData = () => {
    console.log(arr)
}

const filterData = () => {
    arr.filter()
}

function main() {
    tambahData({
        nama: 'hendra',
        alamat: 'jl. mangga kota jambi',
        umur: 22,
        jenis_kelamin: 'laki laki'
    })
    tampilkanData()
}

main()