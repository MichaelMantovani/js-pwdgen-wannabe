
// user-password


console.log ('JS OK');


/********************* 
 
  OPERAZIONI PRELIMINARI 

*********************/


  // Indentifico l'elemento nel DOM dove inserire la password

  const passwordPlaceholder = document.getElementById('user-password');
  console.log(passwordPlaceholder);

  // Indentifico l'elemento nel DOM dove inserire il saluto
  
  const greetingsPlaceholder = document.getElementById('user-greeting');
  console.log(greetingsPlaceholder);

  // Definisco il valore numerico della password da sommare ai dati dell'utente

  const passwordClosing = '21';
  console.log(passwordClosing);


  
  
  // Chiedo all'utente il suo nome e creo una variabile con il suo nome

  const userName = prompt('Come ti chiami ?' , 'Michael');
  console.log(userName);


  // Chiedo all'utente il suo cognome e creo una variabile con il suo cognome
  
  const userSurname = prompt('Qual è il tuo cognome ?' , 'Mantovani');
  console.log(userSurname);
  
  // Chiedo all'utente il suo colore preferito e creo una variabile con il suo colore preferito
  
  const userFavoriteColor = prompt('Qual è il tuo colore preferito ?' , 'Viola');
  console.log(userFavoriteColor);


  //  Costruisco un saluto con la variabile userName e la inserisco nel DOM

  greetingsPlaceholder.innerText = userName;

  // Sommo le varibili del nome, del cognome, del colore preferito e del valore numerico predefinito

  const userPassword = userName + userSurname + userFavoriteColor + passwordClosing;
  console.log(userPassword);


  // Inserisco la password nell'elemento identificato nel DOM precedentemente
  passwordPlaceholder.innerHTML = userPassword;


