console.log("hello");
//alert("This is Bilawal's PC");

var a ="smoothe";
console.log(a);

var no = 45;
console.log(no);


//var b = prompt("What is you age?")
//document.getElementById('someText').innerHTML = b;

function fun(){
    alert("this is a new fun");
}
//fun()

function greeting(myname)
{
    
    var result = 'Hello ' + myname;
    console.log(result);
}

///var name =prompt('what is your name?');
//greeting(name)

function add(num1,num2)
{
    console.log(num1+num2);
}
add(10,10)
/*
var num = 0;
while(num<10){
    num+=1;
    console.log(num);

}

//For loop
for(let num =0; num<10; num++)
{
    console.log(num);
}
*/

//Data Types
let m_name = {first: 'Bilawal', last: 'Ali'}; //object

let groceries = ['apple','bananana','orages','123']; //listStyle: 
let random;  // a random
let s = 'bilawal\nkhan'
console.log(s.length);
//slicing
console.log(s.slice(2,6));
console.log(s.replace('khan','Alii'));

//Arrays 
 things = new Array('car','bus','plane');

 console.log(things.join('*'));
 console.log(things.pop(), things); // remove last element
 console.log(things.push('tesla'),things);
 things[things] = 'new ';
 console.log(things)
 things.shift();
 console.log(things);
 things.unshift('tractor');
 console.log(things.reverse());



 let emptya = new Array();
 for (let num =0; num<=10; num++)
 {
     emptya.push(num);
 }
 console.log(emptya);
 console.log(emptya);

 let student = {
     first: "bilawal", 
     last: "Ali",
     age: 21,
     my_fun: function(){
         return this.first+'\n'+this.last;
     }

};
 console.log(student.my_fun());
 console.log("Bilawal");