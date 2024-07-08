//  1. get elements by tagname
 const doc= document.querySelector("h1");
  doc.style.color = "red";
  doc.style.textAlign = "center";
  doc.style.fontSize = "50px";

//   console.log(doc );
//   or

  document.querySelector("h2").style.color = "green";
  console.log(document.querySelector("h2"));
  document.querySelector("h2").style.backgroundColor = "pink";
  document.querySelector("h2").style.width= "65px";
  document.querySelector("h2").style.textAlign = "center";
  document.querySelector("h2").style.marginLeft = "550px";

//   2. querySelectorAll 
const ul = document.querySelectorAll("ul");

 ul.forEach(function (item) {
  item.style.color = "blue";
  item.style.backgroundColor = "yellow";
  item.style.padding = "30px";
  item.style.fontSize = "30px";
  item.style.textAlign = "center";
  item.style.listStyleType = "none";
 });

// 3. get element by id:
const element = document.getElementById("elemeny by id");
element.style.fontFamily ="cursive";
element.style.margin = "20px";
element.style.border = "3px solid black";
element.style.textAlign = "center";


// 3. get element by class:

const p = document.getElementsByClassName("p");
p[0].style.backgroundColor = "green";
p[0].style.color = "white";
p[0].style.padding = "20px";
p[0].style.textAlign = "center";

const div = document.getElementsByClassName("p");

 for (let i = 0; i < div.length; i++) {
  div[i].innerText = "paragraph";
   div[i].textContent= "paragraph";
  div[i].innerHTML = "paragraph";
  
 }

 