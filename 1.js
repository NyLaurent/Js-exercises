function reverseNumber(x){
    let strNumber= x.toString();
    let reversedStr=strNumber.split('').reverse().join('');
    let reversedNumber=parseInt(reversedStr,10);

  return reversedNumber;

}
let x=2987;
let reversedx=reverseNumber(x);
console.log(reversedx);