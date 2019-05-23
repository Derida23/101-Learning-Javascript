function panggilNestedArray(value){
  for ( var i=0; i<value[0].length; i++){
    console.log(value[0][i], value[1][i], value[2][i]);
  }
}
var nestedArray = [
   [1,2,3,4],
   ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
   ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

panggilNestedArray(nestedArray)
