let play = true;
const jumlahKesempatan = 3;
let comp = Math.floor(Math.random()*10+1);

alert('Silahkan masukkan angka 1-10');
while(play){
	for(let i = jumlahKesempatan; i > 0; i--){
		let j = i-1;

		// Jangan buat prompt di luar looping, hasilnya prompt tidak akan kembali
		const p = prompt('Masukkan angka 1-10: Kamu punya ' +jumlahKesempatan+ ' kali kesempatan');

		if(p == comp){
			alert(`Angka ${comp} benar`);
		}
		else if(p < comp){
			if(j == 0){
				alert('Kesempatan sudah habis');
			}else{
				alert(`Angka ${comp} terlalu rendah. Anda masih punya kesempatan ke ${j}`);
			}
		}
		else if(p > comp){
			if(j==0){
				alert('Kesempatan sudah habis');
			}else{
				alert(`Angka ${comp} terlalu tinggi. Anda masih punya kesempatan ke ${j}`);
			}
		}
		else{
			if(j==0){
				alert('Kesempatan sudah habis');
			}else{
				alert(`Angka tidak valid. Anda masih punya kesempatan ke ${j}`);
			}
		}
	}

	play = confirm('Main lagi? ');
	
}

alert('Good bye');

