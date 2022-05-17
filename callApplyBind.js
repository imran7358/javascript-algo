var pokeman = {
    firstname: 'Mohammad',
    lastanme: 'Imran',
    getPokeman: function(){
        var fullname = this.firstname + ' ' + this.lastanme;
        return fullname
    }
}
var newpokeman = function(a,b){
    console.log(this.getPokeman() + ' ' + 'loves' + ' ' + a + ' '+ 'and' + ' ' + b )
}
newpokeman.call(pokeman,'kashif','fariha') //call Method Passing Parament individually with seperated comma , 
newpokeman.apply(pokeman,['kashif1','fariha1'])  // Apply Method passing parmeter with an array Foramt
var logopokeman = newpokeman.bind(pokeman) // Make a copy of main function 
logopokeman('sushi', 'algorithms')// and pass the argument same like call method