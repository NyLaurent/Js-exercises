function capitalizeWords(input){
    let words = input.split(' ');
    let capitalizedWords= words.map(function(word){
        return word.charAt(0).toUpperCase()+ word.slice(1);
    });
    let result= capitalizedWords.join(' ');
    return result;
}
 

let input= 'the quick brown fox';
let final=capitalizeWords(input);
console.log(final);