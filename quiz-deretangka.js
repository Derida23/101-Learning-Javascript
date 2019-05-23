function deretAngka(n) {
  for (var i=1; i <= n; i++){
    if(i%3 === 0 && i%5 !== 0) {
      console.log("NIO");
    }
    else if (i%5 === 0 && i%3 !== 0) {
      console.log("MIC");
    }
    else if (i%5 === 0 && i%3 === 0) {
      console.log("NIOMIC");
    } else {
      console.log(i);
    }
  }
}

deretAngka(15);
