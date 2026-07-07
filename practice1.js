let string="AMIT PRAKASH SINGH"
const vowels=["a","e","i","o","u"]

const vowelsCount=(str)=>{
    let count=0
    for(let letter of str.toLowerCase()){
        if(vowels.includes(letter)){
            count++
        }
    }
    return count
}
console.log(vowelsCount(string));
