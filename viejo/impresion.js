let nombre = prompt("Cual es su nombre?");
let claveDepartamento = prompt("Cual es su clave de departamento");
let antiguedad = prompt("Cuantos años de servicio tenes?");

console.log("el nombre"+nombre);
console.log(`${nombre} tiene clave ${claveDepartamento}, tiene ${antiguedad} años de aporte`);


document.getElementById("patroclo").innerHTML = nombre;
document.getElementById("papita").innerHTML = claveDepartamento;
document.getElementById("pochoclo").innerHTML = antiguedad; 