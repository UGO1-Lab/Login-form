var body = document.getElementById("body");
var purple = document.getElementById("purple");
var red = document.getElementById("red");
var blue = document.getElementById("blue");
var green = document.getElementById("green");
var defaultBtn = document.getElementById("default");

purple.addEventListener("click", () =>{
  body.style.backgroundColor = "purple";
}) 

red .addEventListener("click", () =>{body.style.backgroundColor = "red";
  })
  
  blue .addEventListener("click", () =>{body.style.backgroundColor = "blue ";
  })
  
  green .addEventListener("click", () =>{body.style.backgroundColor = "green ";
  })
  
  defaultBtn .addEventListener("click", () =>{body.style.backgroundColor = "black ";
  })