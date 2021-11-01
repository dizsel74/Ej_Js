{ 
   // average number skipin blan elemente in the array
 let arreglo=[1,3,4,22,34,5,6,,6,7,,89,1];


 function prom(arr){
    let sum=0, count=0;
 for(let i=0;i< arr.length; i++){
   if (arr[i]!== undefined){ //validates only key that has a value
      sum=sum+arr[i];
      count++;
   }
 }


 return `The average is ${Math.floor(sum/count)}`;

 }
 console.log(prom(arreglo));
}