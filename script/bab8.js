// Pakai let berulang-ulang jadi tidak tertib. Buatlah pakai function
function jumlahVolumeDuaKubus(a,b){
	let volumeA;
	let volumeB;
	let total;

	// a dan b diakui sebagai parameter
	volumeA = a*a*a;
	volumeB = b*b*b;
	total = volumeA+volumeB;

	// Function butuh return
	return total;
	
}

// Panggil function dan isi parameter
jumlahVolumeDuaKubus(5,4);
jumlahVolumeDuaKubus(8,2);

console.info(`Volume dua kubus: ${jumlahVolumeDuaKubus(5,4)}`);
console.info(`Volume dua kubus: ${jumlahVolumeDuaKubus(10,15)}`);

function tambah(a,b){
	// Function butuh return
	return a+b;
}

function kali(a,b){
	return a*b;
}

// Bisa juga parameter diakui sebagai function
const hasilTambah = kali(tambah(3,1), tambah(2,5));
console.info(hasilTambah);

// Coba argumentnya lebih dari 3, bisa2 parameter ke 3 diabaikan
function fungsiArguments(){
	let catchHasil = 0;
	// Function sama tapi kita manfaatkan arguments karena bentuknya array
	// Looping untuk menghitung panjang arguments
	for(let i = 0; i < arguments.length; i++){
		catchHasil += arguments[i];
	}

	return catchHasil;
}

const hasilArguments = fungsiArguments(9,3,5,8);
console.info(hasilArguments);