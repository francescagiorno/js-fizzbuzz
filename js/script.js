var listEl = document.getElementById("risultato");

//ciclo
for ( var i = 1; i < 100; i++){

  if( i % 3 == 0 && i % 5 == 0){
    listEl.innerHTML += "<li>FizzBuzz</li>";
  } else if(i % 3 == 0){
     listEl.innerHTML += "<li>Fizz</li>";
  } else if( i % 5 == 0){
    listEl.innerHTML += "<li>Buzz</li>";
  } else{
    listEl.innerHTML += "<li>" + i + "</li>";
  }
}
