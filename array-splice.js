function panggilSplice() {
  var kota = ['jakarta','bandung','medan','makasar']
  console.log(kota);
  // kota.splice(2,0,'palembang')

  kota.splice(2,1)
  return kota;
}

console.log(panggilSplice());
