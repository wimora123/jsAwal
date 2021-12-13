// Paksakan menjadi angka dengan parseInt()
// let angka = parseInt(prompt('Masukkan angka: '));

// switch(angka){
// 	case 1:
// 	alert('angka 1');
// 	break;

// 	case 2:
// 	alert('angka 2');
// 	break;

// 	case 3:
// 	alert('angka 3');
// 	break;

// 	default:
// 	alert('angka anda salah');
// 	break;
// }

{
	let item = prompt('Masukkan nama makanan / minuman: \n (cth: nasi, daging, susu, hamburger, softdrink)');
	switch(item){
		case 'nasi': 
		case 'daging':
		case 'susu':
			alert('Makanan / minuman sehat');
			break;
		case 'hamburger':
		case 'softdrink':
			alert('Makanan / minuman tidak sehat');
			break;
		default:
			alert('Makanan / minuman tidak valid');
			break;
	}
}

{
	console.info('Loop bersarang part 1');
	let string = '';
	for(let i = 0; i< 10; i++){
		for(let j = 0; j<= i; j++){
			string += '*';
		}
		string += '\n';
	}

	console.info(string);
}

{
	console.info('Loop bersarang part 2');
	let string = '';
	for(let i = 10; i > 0; i--){
		for(let j = 0; j <= i; j++){
			string+= '*';
		}
		string += '\n';
	}

	console.info(string);
}

{
	console.info('Loop bersarang part 3');
	let string = "";
	// External loop
	for (let i = 1; i <= 5; i++) {
	  // printing spaces
	  for (let j = 1; j <= 5 - i; j++) {
	    string += " ";
	  }
	  // // printing star
	  for (let k = 0; k < 2 * i - 1; k++) {
	    string += "*";
	  }
	  string += "\n";
	}
	console.log(string);
}