function objectGen(event){
    event.preventDefault();
    let a={}
a.pw=document.getElementById("password-length");
a.symbol=document.getElementById("symbols");
a.digit=document.getElementById("digits")
a.lCase=document.getElementById("lowercase");
a.uCase= document.getElementById("uppercase");
a.duplicate =document.getElementById("duplicates");
a.ambiguity=document.getElementById("ambiguity");
console.log(a)



}
objectGen()
