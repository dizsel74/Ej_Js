{ //THIS EXAMPLE SEARCH AN ENTIRE STRING TO FIND OUT HOW MANY TIMES IS FOUND AND WERE IT WAS FOUND
   let myString ="qwiwwwwi";
   let mySearch = prompt(`Ingresa una letra a buscar en el arreglo ${myString}`);
   let arr=[], contador=0;

   for(i=0; i< myString.length; i++){
      if (myString[i] === mySearch){
         arr.push(i);
          contador +=1;
         //  break;// usarlo para salir en la primera vez que encuentra la letra
      } 
   }

  //USING TERNARY OPERAND AND CONSOLE LOG IN THE SAME STATMENT
   arr.length != 0 && Array.isArray(arr) ? console.log(`Se encontro ${mySearch} ${contador} veces y esta en la posicion ${arr}`) : console.log(`${mySearch} no se encontro en el arreglo ${myString}`);

   // using a variable to pars the message to a console
   let mensaje = arr.length!=0 && Array.isArray(arr) ? `Si se encontro  ${contador} veces la letra ${mySearch} y  esta en la/s posiciones ${arr} del arreglo ${myString}`:`no se encontra ninguna concidencia de la letra ${mySearch}`;

   
  
   console.log(mensaje);


}