let x = 10;
console.info(`Hello, anda punya angka ${x}`);

// let nama = prompt('Masukkan nama: ');
// alert(nama);

// const tes = confirm('Kamu yakin? ');
// if(tes == true){
//     alert('Oke')
// }
// else{
//     alert('Cancel');
// }

alert('Halo');
let lagi = true;

// if(lagi){
//     let nama = prompt('Masukkan nama: ');
//     alert('Hello, ' +nama);

//     lagi = confirm('Coba lagi? ');
// }

//     alert('Terima kasih');

while(lagi === true){
    let nama = prompt('Masukkan nama: ');
    alert('Hello, ' +nama);

    lagi = confirm('Coba lagi? ');
}

alert('Terima kasih');