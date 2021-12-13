let tanya = true;

while(tanya){
	// Pilihan player
	let p = prompt('Pilihan: \n(cth: gajah, orang, semut)');

	// Pilihan komputer harus random
	let comp = Math.random();
	if(comp < 0.34){
		comp = 'gajah';
	}
	else if(comp >= 0.34 && comp < 0.67){
		comp = 'orang';
	}
	else{
		comp = 'semut'
	}

	console.info(comp);

	// Rules
	let hasil = '';
	if(p == comp){
	 	hasil = "seri";
	}
	else if(p == "gajah"){
		hasil = (comp == "orang") ? "menang" : "kalah";
	}
	else if(p == "orang"){
		hasil = (comp == "semut" ? "menang" : "kalah");
	}
	else if (p == "semut"){
		hasil = (comp == "gajah" ? "menang" : "kalah");
	}
	else{
		hasil = "salah masuk inputan";
	}

	console.info(`Komputer memilih: ${comp}. Kamu memilih ${p}. Hasilnya anda ${hasil}`);
	tanya = confirm('Main lagi?');
}

alert('Good bye');