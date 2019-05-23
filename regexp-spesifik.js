function panggilRegExp(value) {
  var ambilData = value.match(/ke/g); //ambil ke pada value
  console.log(ambilData);

  var ambilData2 = value.match(/[kea]/g) //ambil data k , e , a
  console.log(ambilData2)

  var ambilData3 = value.match(/[^ke]/g) //ambil data kecuali k dan e
  console.log(ambilData3)

  var ambilData4 = value.match(/[a-c]/g) //hanya di ambil antara a sampai i saja
  console.log(ambilData4)

}

panggilRegExp("Bulan ke 1 sd ke 4");
