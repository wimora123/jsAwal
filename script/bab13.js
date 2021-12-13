{
	// Object berbeda dengan array. Array kembalikan nilai.
	// Object mempunyai kumpulan nilai tapi memiliki nama, nilainya tidak punya index
	// Object haru%s dipahami dulu
	const mahasiswa = [{
		nama: "Hendri",
		lulus:true,
		ipSemester: [2.88,2.50, 2.81],
		alamat:
		{
			jalan: "Gatot subroto",
			kota: "Jakarta",
			provinsi: "DKI Jakarta"
		}
	},
	{
		nama: "Diva",
		lulus:true,
		ipSemester: [3.21,2.90, 3.31],
		alamat:{
			jalan: "Dewi sartika",
			kota: "Bandung",
			provinsi: "Jawa barat"
		}
	}];

	mahasiswa.map((result)=>console.info(result))
		

	console.info(mahasiswa);
}

{
	// const mhs1 = {
	// 	nama: "Hendri",
	// 	nrp:47753347911,
	// 	email: "hendri@gmail.com"
	// 	jurusan: "Akuntansi"
	// }

	// const mhs2 = {
	// 	nama: "Dewi",
	// 	nrp: 43522552,
	// 	email: "dewi@gmail.com"
	// 	jurusan: "Teknik sipil"
	// }

	// Function declaration

	function buatobjectMahasiswa(nama, nrp, email, jurusan){
		// Kosongin object
		let mhs={};

		// Mulai isi sesuai dengan parameter
		mhs.nama = nama;
		mhs.nrp = nrp;
		mhs.email = email;
		mhs.jurusan = jurusan;

		return mhs;
	}

	const mhs3= buatobjectMahasiswa("Indra", 766433233, "indra@gmail.com", "Teknik sipil");
	console.info(mhs3);

	const mhs4=buatobjectMahasiswa('Santi', 243536622, 'santi@yahoo.com', "Manajemen");
	console.info(mhs4);

	// Constructor seperti class. Selalu pakai huruf besar. Terus pakai keyword this
	function Mahasiswa(nama, nrp, email, jurusan){
		// Anggap saja const this = {}
		this.nama = nama;
		this.nrp = nrp;
		this.email = email;
		this.jurusan = jurusan
		// Akhirnya tidak butuh return this;
	}

	// Nah karena pakai constructor, butuh new
	const mhs5 = new Mahasiswa('Erik', 3366755575, 'erik@yahoo.com', "DKV");
	console.info(mhs5);

}
