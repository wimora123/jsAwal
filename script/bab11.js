{
	// For
	const angka = [4,5,7,2,3,8,7,5,8];
	for(let i = 0; i < angka.length; i++){
		console.info(`Foreach: ${angka[i]}`);
	}

	// Foreach angka.Tapi lagi2 forEach tidak return array
	angka.forEach(function(e, i){
		console.info(`Angka forEach ke: ${i+1}: ${e}`);
	});

	// Berlawanan dengan forEach, map return array
	const mapKali = angka.map(function(e){
		return e*2;
	});

	console.info(`Perkalian map: ${mapKali.join(' - ')}`);


	// Map mengembalikan array
	angka.map((function(e){
		console.info(`Map: ${e}`);
	}));

	// Foreach. Ingat, di forEach function, parameter 1 adalah nama, parameter ke 2 adalah length
	// Tapi forEach tidak mengembalikan array
	const nama=['Arina', 'Sandi', 'Dian', 'Albert'];
	nama.forEach(function(e, i){
		console.info(`Mahasiswa ke: ${i+1}: ${e}`);
	});

	// Sort. Hati2! Ada angka di atas 9 sehingga sort gagal! Buat function di dalam sort
	const angka2 = [5,2,1,4,9,8,20,13,15];
	angka2.sort(function(a,b){
		// Buat urutan array dengan benar dengan bandingin a dan b. 
		console.info(a,b);
		// Untuk ascending a ke b
		return a-b;
	});

	console.info('Sort: ' + angka2.join(' - '));

}

{
	// Filter mencari banyak nilai pada array dan mengembalikan ke dalam bentuk array
	const angka3 = [8,6,7,11,16,3,7,9];
	const angkaFilter = angka3.filter((function(x){
		return x%2 === 1;
	}));

	// Mari kita buat function di dalam sort biar berurutan
	angkaFilter.sort(function(a,b){
		return a-b;
	})

	console.info(`Filter angka ganjil: ${angkaFilter.join(' - ')}`);
}


{
	// Find menemukan 1 nilai saja. Tapi dia tidak menghasilkan array jadi jangan pakai join atau sort!
	const angka = [8,6,7,11,16,3,7,9];
	const angkaFind = angka.find((function(x){
		return x%2 === 1;
	}));

	console.info(`Find angka ganjil: ${angkaFind}`);
}