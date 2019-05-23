// function panggilregExp(value) {
//
//   console.log(/Satu/.test(value));
// }
//
// panggilregExp("Belajar Satu Tahun Bersama Niomic")


function panggilRegexp(value) {
  var found = /(html)|(css)/.test(value)
  if (found === true) {
    console.log(value);
  } else {
    console.log("Belajar");
  }
}

panggilRegexp("Belajar html")
panggilRegexp("Belajar javascript")
panggilRegexp("Belajar css")
panggilRegexp("Belajar php")
