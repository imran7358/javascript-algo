var arr = 12345;
var rev = 0;
var lastdigit;
 
while(arr !== 0){

  lastdigit = arr % 10;
  rev = rev * 10 + lastdigit;
  arr = Math.floor(arr / 10);
}
console.log(rev)