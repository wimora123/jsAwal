{
    let jumlahAngkot = 10;
    let noAngkot = 1;

    let nilaiAwal = 1;

    console.info('While part 1');
    while(nilaiAwal <= 10){
        console.info(`Angkot no. ${nilaiAwal} beroperasi dengan baik`);
        nilaiAwal++;
    }

    console.info('While part 2');
    while(noAngkot <= jumlahAngkot){
        console.info(`Angkot no. ${noAngkot} beroperasi dengan baik`);
        noAngkot++;
    }
}

{
    // For
    console.info(`For`);
    // let nilaiAwal = 1;
    // for(nilaiAwal; nilaiAwal <= 10; nilaiAwal++){
    //     console.info('hello ' + nilaiAwal + 'x');
    // }
    let jumlahAngkot = 10;
    let angkotBeroperasi = 6;
    let noAngkot = 1;

    while(noAngkot <= angkotBeroperasi){
        console.info(`Angkot no. ${noAngkot} beroperasi dengan baik`);
        noAngkot++;
    }

    for(noAngkot = angkotBeroperasi+1; noAngkot<=jumlahAngkot; noAngkot++){
        console.info(`Angkot no. ${noAngkot} sedang tidak beroperasi dengan baik`);
    }

}