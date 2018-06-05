const minStep = input => {
  // put your code here !!
  // console.log(input, ':input');
  for (i = 0; input != 1; i++) {
    if(input % 2 == 0) { // console.log(input, ':even');
      input = input/2;
    } else { // console.log(input, ':odd');
      // check
      let y = 1;
      let yA = 1;
      let yB = 1;
      for (let x = y; y < input; x++){
        y = y*2;
        // console.log(y, ':y');
        // 32 > 16 > 8 > 4 > 2 > 1
        if(yA == yB) {
          yA = y;
        } else {
          yB = yA;
          yA = y;
        }
      }
      // console.log('(('+yA+' - '+input+')/2):'+((yA - input)/2)+' < ('+input+' - '+yB+') :'+(input - yB));
      if(((yA - input)/2) < (input - yB)) {
        if (input <= 3) {
          input = input-1;
        }else{
          input = input+1;
        }
      } else {
        input = input-1;
      }
      // console.log(y, ':y 1');
      // console.log(input, ':input 2');
      // 47 > 48 > 24 > 12 > 6 > 3 > 2 > 1
      /* if((input+1) == y) {
        input = input+1;
      } else {
        input = input-1;
      } */
    }
  }
  // console.log(i, ':expected');
  return i;
};

// *** Uncomment this when you want to know result *** //
// const result = minStep(23);
// console.log(result, ':result');
// *** Uncomment this when you want to know result *** //

module.exports = { minStep };
