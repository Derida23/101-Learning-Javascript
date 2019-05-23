function panggilBilanganKelipatan() {
  var data = []
  for(var i = 1 ; i< 50 ; i++){
    if(i%6 === 0 ){
      data.push(i)
    }
  }
  return data;
}

console.log(panggilBilanganKelipatan());
