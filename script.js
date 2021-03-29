
function changeColor() {
  let v1 = document.getElementById("H");
  let v2 = document.getElementById("S");
  let v3 = document.getElementById("L");

  hsl = `hsl(${v1.value},${v2.value}%,${v3.value}%)`

  document.querySelector('.box').style.backgroundColor = hsl;

}
  
function clearBtn(){
    document.getElementById("H").value = "";
  document.getElementById("S").value = "";
  document.getElementById("L").value = "";

  document.querySelector('.box').style.backgroundColor = "white";
}  

function changeFonts(){
 let fonts = document.getElementById("fonts");
 document.querySelector('.letter').style.fontFamily = fonts.value;
}

function clearBtn1(){
    document.getElementById("fonts").value = "";

  document.querySelector('.letter').style.fontFamily = "";
}
