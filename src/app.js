import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let first = "Estoy seguro que mi ";
  let who = ["hermano", "tia", "abuela", "amigo", "profesor"];
  let action = [" robó mi ", " quemó mi ", " mojó mi ", " rompió mi ", " vendió mi "];
  let what = ["celular", "computador", "videojuego", "teclado", "guitarra"];
  let where = [" en la calle", " en la clase", " en la plaza", " en la cocina", " en el cine"];

  let random1 = Math.floor(Math.random() * who.length);
  let random2 = Math.floor(Math.random() * action.length);
  let random3 = Math.floor(Math.random() * what.length);
  let random4 = Math.floor(Math.random() * where.length);

  document.querySelector("#excuse").innerHTML = first + who[random1] + action[random2] + what[random3] + where[random4];

  console.log("Hello Rigo from the console!");
};

