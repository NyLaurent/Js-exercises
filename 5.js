function longestWord(input){
    let words = input.split(' ');
    let longWord='';
    let maxlength=0;
    for(let longWord of words){
        if(longWord.length>maxlength){
            longestWord=longWord;
            maxlength=longWord.length;
        }
    }
    const doSomething= ()=>{
        
    }

    }

return longestWord;

let input='Web development officer';
let final=longestWord(input);
console.log(final);