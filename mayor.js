{
   let array =[10,43,65,89,97,4,0,223];
   function mayor(array){
      let posicion='' , result =''; 
      for(i=0;i<array.length; i++){
         if (result<array[i]){ 
            result=array[i];
            posicion=i;
         }
      }
      return `el numero mayor es ${result} y se encuentra en la posicion ${posicion}`;
   }
   console.log(mayor(array));

   function menor(array){
      let posicion='' , result =array[0]; 
      for(i=0;i<array.length; i++){
         if (result>array[i]){ 
            result=array[i];
            posicion=i;
         }
      }
      return `el numero menor es ${result} y se encuentra en la posicion ${posicion}`;
   }
   console.log(menor(array));


}