// Kita cari tahu supirnya siapa
// Angkot punya trayek yg berbeda
// Uang yang diperoleh saat penumpang turun angkot
// Penumpang ada yg turun dan naik


function Angkot(supir, jurusan, penumpang, kas){
	this.supir = supir;
	// Nanti diakui sebagai array saja
	this.jurusan = jurusan;
	// Ditampung di array saja
	this.penumpang = penumpang;
	this.kas = kas;

	// Apabila penumpang naik. Boleh kok buat function this. Anggap saja const this = function()
	this.penumpangNaik = function(namaPenumpang){
		// Sampai sini, kita sudah ketemu array. Gunakan push untuk tambah penumpang ya
		if(this.penumpang.length == 0){
			this.penumpang.push(namaPenumpang);
		}
		else{
			for(let i = 0; i< this.penumpang.length; i++){
				// namaPenumpang ini adalah parameter ya jadi jangan pakai this. Nanti kasnnya gak naik
				if(this.penumpang[i] == namaPenumpang){
					console.info(`Nama ${namaPenumpang} sudah naik`);
					return this.penumpang;
				}
				// Jika kursi masih kosong, kita push saja
				else if( i === penumpang.length-1){
					this.penumpang.push(namaPenumpang);
					return this.penumpang;
				}
			}
		}

		return this.penumpang;

	}

	// Apabila ada penumpang turun. Sekali this boleh diakui sebagai function. Anggap saja const this = function()
	// Jangan lupa bayar ya!!!
	this.penumpangTurun = function(namaPenumpang, bayar){
		if(this.penumpang.length === 0){
			alert('Angkot masih kosong');
			return false;
		}
		else{
			for(let i = 0; i< this.penumpang.length; i++){
				// namaPenumpang ini adalah parameter ya jadi jangan pakai this. Nanti kasnnya gak naik
				if(this.penumpang[i] == namaPenumpang){
					this.penumpang [i] = undefined;
					this.kas += bayar;
					return this.penumpang;
				}
				else if(i === this.penumpang.length-1){
					console.info(`Maaf, nama ${namaPenumpang} tidak sedang naik angkot`);
					return this.penumpang;
				}
			}
		}
	}

}

const dataAngkot1 = new Angkot('Febrian', ['bekasi', 'cikarang'], [], 0);
console.info(dataAngkot1);

const dataAngkot2 = new Angkot('Rahmat',['citayam', 'bogor'], [], 0);
console.info(dataAngkot2);