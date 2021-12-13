let penumpang = ['Gilbert', 'Hera'];

// Nilai pertama adalah namaPenumpang. Yg kedua adalah array penumpang
const tambahPenumpang = function(namaPenumpang, penumpang){
	// Angkot kosong?
	if(penumpang.length == 0){
		// Karena kosong, tambah penumpang di array pakai push
		penumpang.push(namaPenumpang);
		// Kembalikan isi array dan keluar dari function
		return penumpang;
	}
	else{
		// Telusuri kursi
		for(let i = 0; i< penumpang.length; i++){
			// Ada kursi kosong?
			if(penumpang[i] == undefined){
				// Tambah penumpang di kursi
				penumpang[i] = namaPenumpang;
				// Kembalikan isi array dan keluar dari function
				return penumpang;
			}

			else if(penumpang.includes(namaPenumpang)){
				// Kesalahan ditampilkan
				console.info(`Maaf! ${namaPenumpang} sudah di dalam angkot`);
				return penumpang;
			}

			// Seluruh kursi terisi sampai ujung kah? Cari berdasarkan penumpang.length - 1 karena lengthnya mulai dari 0
			// Kalau sudah menelusuri sampai akhir, lengthnya dikurangi 1
			// Kalau lengthnya tidak dikurangi 1, bisa2 saat nambah data berikutnya, jadi undefined
			else if( i == penumpang.length-1){
				// Kursi terakhir ada yg isi, berarti kita push penumpang baru
				penumpang.push(namaPenumpang);
				return penumpang;
			}
		}
	}
}

const hapusPenumpang = function(namaPenumpang, penumpang){
	if(penumpang.length == 0){
		console.info('Penumpang masih kosong');
	}
	else{
		for(let i = 0; i< penumpang.length; i++){

			// Apakah ada nama penumpang di kursi tersebut
			if(penumpang[i] == namaPenumpang){
				// Penumpangnya mau turun nih, jadi undefined
				penumpang[i] = undefined;
				return penumpang;
			}
			// Else if sampai kursi terakhir eh ternyata kosong beneran
			else if( i == penumpang.length-1){
				console.info('Nama ' + namaPenumpang + ' tidak ada di dalam angkot');
				return penumpang;
			}
		}
	}

	return penumpang;
}

// console.info(tambahPenumpang('Debra', penumpang));
console.info(hapusPenumpang('Gilbert', penumpang));