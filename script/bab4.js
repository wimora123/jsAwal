{
	let angka = prompt('Masukkan angka: ');

	if(angka%2 == 0){
		alert('Angka ' +angka + ' adalah bilangan genap');
	}
	else if (angka%2 == 1){
		alert('Angka ' +angka + ' adalah bilangan ganjil');
	}
	else{
		alert('Angka tidak valid');
	}

}

{
	let jumlahAngkot = 10;
	let angkotBeroperasi = 6;
	let noAngkot = 1;


	for(noAngkot; noAngkot <=jumlahAngkot; noAngkot++){
		// Jika angkot no 5 sedang lembur. Fungsi && harus bernilai true
		// Angkot no 5 benar sih lebih kecil dari 6. Dan sayangnya dia bukan no 5
		if(noAngkot <= 6 && noAngkot !== 5){	
			console.info('Angkot nomor ' + noAngkot + ' berfungsi dengan baik');	
		}
		// Pakai && tidak bisa karena ga mungkin ada angkot no 2 jadinya kondisinya ga akan tercapai
		// Sayangnya angkot no 5 itu tidak akan berfungsi jika tidak ditambah kondisi di mana angkot no 1-6 berfungsi dengan baik
		else if(noAngkot === 8 || noAngkot === 10 || noAngkot === 5){
			console.info('Angkot nomor ' + noAngkot + ' sedang lembur');
		}
		else{
			console.info('Angkot nomor ' + noAngkot + ' sedang tidak berfungsi');
		}
	}
}