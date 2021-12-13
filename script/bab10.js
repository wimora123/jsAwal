{
	// Declaration 
	function tampilPesan(nama){
		console.info('Halo, ' +nama)
	}

	tampilPesan('wimora');

}

{
	// Expression sudah diakui sebagai function saat buat const
	const tampilPesan = function(nama){
		console.info('Halo, ' +nama);
	}

	tampilPesan('Daniel');
}

{
	// Array punya jumlah length
	let hari = ['Senin', 'Selasa', 'Rabu', 'kamis', 'jumat', 'sabtu', 'minggu'];
	console.info(`Hari 1: ${hari[0]}`);
	console.info(`Jumlah elemen: ${hari.length} elemen`);

	// Telusuri array
	for(let i =0; i< hari.length; i++){
		console.info(`Tampilkan hari ${i+1}: ${hari[i]}`);
	}

	// Metode join
	let join = hari.join(' - ');
	console.info(join);

	const nama =['Reza', 'Fadiah', 'Gama'];

	// Shift(Hilangkan elemen di awal) - unshift(Tambahkan elemen baru di awal), pop(elemen terakhir dihapus), push(dorong di akhir)
	nama.push('danny', 'mira');
	console.info(nama.join(' - '));

	nama.pop();
	console.info(nama.join(' - '));

	nama.unshift('Dian', 'Via');
	console.info(nama.join(' - '));

	nama.shift();
	console.info(nama.join(' - '));

	// Slice(Ambil beberapa bagian array). Splice(Sisip elemen di tengah)

	// Splice(index awal, mau dihapus berapa, elemen baru 1, elemen baru 2)
	nama.splice(3, 0, 'Sisi', 'Windi');
	console.info(`Splice tanpa hapus: ${nama.join(' - ')}`);

	nama.splice(2, 2, 'Virni', 'Gita');
	console.info(`Splice dengan hapus: ${nama.join(' - ')}`);

	// Slice untuk iris suatu array menjadi array yang baru
	// Slice hasilkan array baru. Array lama masih bisa diakses
	// Slice(awal, akhir). Maksudnya 1 terbawa, 3 nya tidak. Jadi nanti sisanya tinggal 2 elemen
	const nama2 =['Reza', 'Fadiah', 'Gama', 'Pia', 'Talia'];

	// Intinya elemen 'Fadiah', 'Gama' saja yang tidak dihapus apabila slice(1,3)
	// Array di depan mau dihapus berapa, array di belakang mau berapa yang dipertahankan di antara semua elemen setelah 2 terdepan dihapus
	// Kalau di antara 5 array, terus 1 uda dihapus, tapi ternyata akhirnya 4, berarti ada 1 lagi yg dihapus di belakang dan 3 array masih dipertahankan
	let nama3 = nama2.slice(1,3);
	console.info(`Array lama sebelum slice: ${nama2.join(' - ')}`);
	console.info(`Array lama setelah slice: ${nama3.join(' - ')}`);
}

