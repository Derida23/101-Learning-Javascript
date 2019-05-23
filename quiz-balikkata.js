function forBalikKata(str) {
  var balik = "";
  for (var i = str.length - 1 ; i>=0; i--){
    balik  += str[i];
  }
  return balik;
}

console.log(forBalikKata("Niomic!"));
console.log(forBalikKata("Javascript"));
console.log(forBalikKata("alohhola"));
console.log(forBalikKata("Jawa_barat"));
