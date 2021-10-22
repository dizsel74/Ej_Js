
            function anagrama(palabra1, palabra2){
                if(palabra1.length != palabra2.length){
                    console.log('no son iguales en cantidad de caracteres');
                }else{
                original1 =palabra1;
                original2 =palabra2;

                palabra1  = palabra1.toLowerCase();// convierto a min para poder tener el mismo valor al ordenarse
                palabra2 = palabra2.toLowerCase();

                palabra1 = palabra1.split(""); // se conviertem a arreglo para poder ordenarse
                palabra2 = palabra2.split("");

                palabra1= palabra1.sort(); //se ordena los 2 para comparar
                palabra2= palabra2.sort();

                palabra1 = palabra1.join(""); // se unen otravez en un string
                palabra2 =palabra2.join("");
                 if(palabra1==palabra2){
                    console.log(palabra1+"="+palabra2);
                    console.log(original1+"="+original2);
                 }else{
                    console.log(palabra1+"!="+palabra2);
                    console.log(original1+"!="+original2);
                 }
                }
            }
            
    anagrama('hOla', 'alho');

/////////////////////// version corta

function anagramaCorto(palabra1, palabra2){
    if(palabra1.length != palabra2.length){
        console.log('no son iguales en cantidad de caracteres');
    }else{
        original1 =palabra1;
        original2 =palabra2;

        x = palabra1.toLowerCase().split("").sort().join("");
        y = palabra2.toLowerCase().split("").sort().join("");

    //  if((x= palabra1.toLowerCase().split("").sort().join("")) ===(y= palabra2.toLowerCase().split("").sort().join("")))
        if(x===y){
                    console.log(x+"="+y);
                    console.log(original1+"="+original2);
        }else{
                    console.log(x+"!="+y);
                    console.log(original1+"!="+original2);
        }
                
    }
}          
    anagramaCorto('cama', 'maca');

       