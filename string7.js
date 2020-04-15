function balikKata(kata) {
  var balik = '';
  for (var i = kata.length-1; i >= 0; i--) {
    balik = balik + kata[i];
  }
  
  return balik;
}

// TEST CASES
console.log(balikKata('JavaScript')); // tpircSavaJ
console.log(balikKata('Pemprograman Java')); // avaJ namargormeP

