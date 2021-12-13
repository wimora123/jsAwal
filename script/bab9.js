{
	// Refactoring untuk mengubah kode lebih baik tanpa mengubah fungsionalitas
	function jumlahVolumeDuaKubus(a,b){
		let total;
		total = (a*a*a) + (b*b*b);
		return total;
	}

	const hasil = jumlahVolumeDuaKubus(8,3);
	console.info(hasil);
}

{
	function jumlahVolumeDuaKubus(a,b){
		let total;
		total = Math.pow(a,1) + Math.pow(b, 2);
		return total;
	}

	// Hasilnya 11, karena yg pertama adalah 2 pangkat 1 = 2 + 3 pangkat 2 = 9. Jadinya 2+9=11
	const hasil = jumlahVolumeDuaKubus(2,3);
	console.info(hasil);
}

{
	// Scope mendefinisikan variable yang dapat diakses di dalam program
	const a = 1;

	function test(){
		const b = 2;
	}

	test();
	// Jika tangkap const b, tidak akan tertangkap karena ada di dalam function test!
}

{
	// Rekursif adalah sebuah fungsi yang memanggil diri sendiri. Dia harus berakhir dengan menghasilkan nilai
	function tampilAngka(n){
		if(n === 0){
			// return saja untuk berhenti
			return;
		}

		else{
			console.info(n);
			// Panggil function sendiri
			return tampilAngka(n-1);
		}
		
	}

	function faktorial(n){
		if(n === 0){
			return 1;
		}
		else{
			return n * faktorial(n-1);
		}
	}

	const hasilFaktorial = faktorial(5);
	console.info(`Hasil faktorial: ${hasilFaktorial}`);

	function faktorial2(n){

		// Jangan 0 karena saat dikali, nanti hasilnya juga 0
		let hasil = 1;
		for(let i = n; i > 0; i--){
			hasil *= i;
		}

		return hasil;
	}

	const hasilFaktorial2 = faktorial2(5);
	console.info(`Hasil faktorial: ${hasilFaktorial2}`);
}

