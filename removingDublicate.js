const arr = [1,1,2,3,2,4];
const t =[]
const sort = arr.map((n,i)=>{
  if(t.indexOf(n) == -1){
    t.push(n)
  }
})

console.log(t)