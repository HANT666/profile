window.onload = function(){
  var label = $("#kazna");
  label.style.background = "red";
}

/*function $(selector){
  return document.querySelector(selector);
}*/

function other(text_edit){
  text_edit.focus();
}

function size1(){
  size = document.getElementById("size_input").value;
  document.getElementById("size_output").innerHTML = size;
  
  for (var index = 0; index < 7; index++){
    if(parseInt(document.getElementsByClassName("site-type").item(index).id) <= size)
      document.getElementsByClassName("site-type").item(index).style.background = "rgba(0,175,0,0.6)";//"#00AF00";
    else{
      document.getElementsByClassName("site-type").item(index).style.background = "rgba(255,255,255,1)";
      document.getElementsByClassName("site-type").item(index).style.background = "rgba(175,0,0,0.6)";
      }
  }
}

function set_size(size){
  document.getElementById("size_input").value = size;
  size1();
}

