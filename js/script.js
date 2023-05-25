
// user-password


console.log ('JS OK');


/********************* 
 
  OPERAZIONI PRELIMINARI 

*********************/


  // Indentificare l'elemento nel DOM

  const passwordPlaceholder = document.getElementById('user-password');
  console.log(passwordPlaceholder);

  // Definisco il valore numerico della password da sommare ai dati dell'utente

  const passwordClosing = '21';
  console.log(passwordClosing);


  
  
  // Chiedo all'utente il suo nome e creo una variabile con il suo nome

  const userName = prompt('Come ti chiami ?' , 'michael');
  console.log(userName);

  // Chiedo all'utente il suo cognome e creo una variabile con il suo cognome
  
  const userSurname = prompt('Qual è il tuo cognome ?' , 'mantovani');
  console.log(userSurname);
  
  // Chiedo all'utente il suo colore preferito e creo una variabile con il suo colore preferito
  
  const userFavoriteColor = prompt('Qual è il tuo colore preferito ?' , 'viola');
  console.log(userFavoriteColor);


  // Sommo le varibili del nome, del cognome, del colore preferito e del valore numerico predefinito

  const userPassword = userName + userSurname + userFavoriteColor + passwordClosing;
  console.log(userPassword);


  // Inserisco la password nell'elemento identificato nel DOM precedentemente
  const passwordBold = `<strong>${userPassword}</strong>`;
  passwordPlaceholder.innerHTML = passwordBold;


