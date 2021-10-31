<!DOCTYPE html>
<?php
   if (isset($_POST['submit'])){
      if(!isset($_POST['usuario'])&& !isset($_POST['clave'])){
         $error = "*"."Faltan campos obligatorios.";
      }else{
         $user = $_POST['usuario'];
         $pass = $_POST['clave'];
      }
   }
?>
<html lang="esp">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Formulario de Validacion en la misma página</title>
</head>
<body>


<fieldset>
   <legend>Ingreso</legend>
   <form action="login.php" method="post" id="login">
<?php
   if(isset($_POST['submit'])){
      if(isset($error)){
         echo "<p style='color:red;'>".$error."</p>";
      }
   }
?>
   <table>
      <tr>
         <td>Usuario</td>
         <td> <input type="text" name="usuario " required/></td>
      </tr>
      <tr>
         <td>Contraseña</td>
         <td><input type="text"name="clave" required/></td>
      </tr>
      <tr>
         <td colspan="2"><input type="submit" value="Login"></td>
      </tr>
   </table>
 

   </form>
</fieldset>
<?php
if(isset($_POST['submit'])){
   if(!isset($error)){
      echo $user ."--". $pass;
   }

}
?>
   
</body>
</html>