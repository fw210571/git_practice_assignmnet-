//check palindrome or not
let str = "shoot" ;
let rev = "" ;
for( let i= str.length-1 ; i>=0 ; i++ ){
  rev += str[i+1] ;
}
console.log(str===rev) ;