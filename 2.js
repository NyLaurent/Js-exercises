function isPalindrome(str){
    let cleanStr = str.toLowerCase();
    return cleanStr ===cleanStr.split('').reverse().join('')
}
console.log(isPalindrome("directly"));