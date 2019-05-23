function panggilObject() {
  var mobil = {
    type: "Sedan",
    harga: 200000000,
    warna: "Putih",
    tahun: [2001,2002,2003,2004]
  }

  console.log(mobil);
  console.log(mobil.warna);
  console.log(mobil.tahun[2,1]);
}

panggilObject()
