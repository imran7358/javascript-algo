let person = {
    firstName: 'Mohammad',
    lastName: 'Imran',
    getUser: function(){
        console.log(this.firstName)
    }
}
//Shallow Copy (Shaloow copy shared same memory for both object)// 
let a = person.firstName = 'Salman'
console.log(person.firstName)

//Deep Copy (Deep Copy create new memory location for each object) /////

let b = JSON.parse(JSON.stringify(person))
let c = b.firstName = 'Irfan'
console.log(person.firstName)