//challenge 1: Your age in Days

function ageInDays(){
    var byear = prompt('What year were you born?');
    var ageDays = (2021 - byear)*365;
    var h1 = document.createElement('h1');
    var textAsnwer = document.createTextNode('You are  '+ ageDays+ ' days old');
     h1.appendChild(textAsnwer);
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(ageDays); 

}

function reset() {
  //  document.getElementById('ageInDays').remove();
    var myobj = document.getElementById("ageInDays");
     myobj.remove();
}
