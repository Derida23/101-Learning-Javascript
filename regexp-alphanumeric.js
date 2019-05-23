function panggilRegExp(value) {
  var ambilData = value.match(/\w/g) //smua data diambil
    console.log(ambilData);

  var ambilAngka = value.match(/\d/g) //mengambil angka saja
    console.log(ambilAngka);

  var ambilSpasi = value.match(/\s/g) //mengambil spasi
    console.log(ambilSpasi);
    console.log(ambilSpasi.length);

  var ambilNot = value.match(/\W/g) //tidak mengambil huruf dan angka (W) Capslock
    console.log(ambilNot);

  var ambilNotAngka = value.match(/\D/g) //mengambil tidak angka
    console.log(ambilNotAngka);

  var ambilNotSpasi = value.match(/\S/g) //mengambil tanpa spasi
    console.log(ambilNotSpasi);
}

panggilRegExp("Bulan ke 1 sampai 4")
