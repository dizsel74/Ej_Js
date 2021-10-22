
<?php

			function piramideDeDos($num){
				for($linea=1; $linea<=$num; $linea++){ //CONTROL DE SALTO DE LINEA
					for($espacio=0; $espacio < ($num-$linea); $espacio++){
					//for($espacio=$num; $espacio>$linea; $espacio--){
							echo "&nbsp";	
					}
					for ($asterisco=0; $asterisco<($linea *2)-1; $asterisco++){
						echo("*");
					}
					echo "<br>";
				}
			}

			piramideDeDos(20);

echo "-----------------------------<br />";

function piramideInvertida($num){
				for($linea=0; $linea<$num; $linea++){ //CONTROL DE SALTO DE LINEA

					for($espacio=0; $espacio <$linea; $espacio++){
							echo "&nbsp";	
					}
					for ($asterisco=1; $asterisco<=($num-$linea); $asterisco++){
						echo("*");
					}
					
					
					echo "<br>";
				}
			}

			piramideInvertida(4);

echo "-----------------------------<br />";

function piramide($num){
	for ($linea=0; $linea<$num; $linea++){
		for($esp = 1; $esp<($num-$linea); $esp++){
			echo "&nbsp";
		}
		for($ast=0; $ast<=$linea; $ast++){
			echo "*";
		}
		echo "<br/>";
	}
}

piramide(20);

?>
