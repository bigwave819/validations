function add(){
let r=document.getElementById('name').value
let e=document.getElementById('mail').value
let d=document.getElementById('pass').value
let a=document.getElementById('comf').value
if( r === ""){
document.getElementById('p').innerHTML="<p style=color:red;>please fill this field<p>"
}
else if(e === ""){
    document.getElementById('b').innerHTML="<p style=color:red;>please fill this field</p>"
    }
    else if(d === ""){
        document.getElementById('d').innerHTML="<p style=color:red;>please fill this field</p>"
        }
        else if(a === ""){
            document.getElementById('a').innerHTML="<p style=color:red;>please fill this field</p>"
            }
        else if(a === ""){
            document.getElementById('a').innerHTML="<p style=color:red;>please fill this field</p>"
            }
else if(d.length < 6 && a.length != 6){
    document.getElementById('d').innerHTML="<p style=color:red;>password must be at least 6 characters</p>"
}
else if(d != a){
    document.getElementById("a").innerHTML="<p style=color:red;>please match the password</p>"
}
else{window.location.href="index.html"} 
}