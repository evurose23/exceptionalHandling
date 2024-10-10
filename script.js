//function check(){
 //   alert("Button clicked")
var erro= document.getElementById("err")
function check()
{
    try{
        alsrt("button clicked")
    }catch (error){ 
        console.log(error.message)
        erro.innerText=error.message
     }
}

function display(){
    var inp = document.getElementById('val').value;
    var err2=document.getElementById('err2');
    console.log("btn clicked")
    try{
      if (inp == "") throw "box cannot be empty";
      if (isNaN(inp)) throw "value is not a number";
      if (inp < 10) throw "value cannot be less than 10";
      if (inp > 20) throw "value cannot be greater than 20";
      if (inp>=10||inp<=20) throw "value is correct";
    } catch (error){
err2.innerText=error
}
finally{
    inp.innerText=""
}
}
