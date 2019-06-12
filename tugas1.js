 function squareDigits (num) {
   var string = num.toString();
   var Output = [];

   for (var i = 0; i < string.length; i++) {
     var Angka = string[i];

     Output.push(Angka * Angka);
   }
   return Number(Output.join(''));
 }

 console.log(squareDigits(9119));
 console.log(squareDigits(121));
 console.log(squareDigits(553));
 console.log(squareDigits(44991));