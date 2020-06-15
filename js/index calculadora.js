<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <title>Tabla de multiplicar</title> 
<script type="text/javascript">
function tabla() {
       var num = prompt("dime un número del uno al diez")
       num = Number(num)
       var texto = document.getElementById("resultados")
       if (num < 1 || num > 10) {
           alert("El número que me has dado no está entre el 1 y el 10. \n Por favor, intentalo de nuevo.")
           texto.innerHTML =  "<p onclick='tabla()'>Pulsa aquí para decirme el número</p>"
           }  
       else {
           texto.innerHTML =  "<p onclick='tabla()'>Pulsa aquí para decirme el número</p>"
           texto.innerHTML += "<h2>Tabla de multiplicar del " + num + ". </h2>"
           for (i = 1; i <= 10; i++) {
               linea = "<p>" + num + " x " + i + " = " + num*i + "</p>"
               texto.innerHTML += linea 
               }    
           } 
        }
</script>
</head>
<body>
   <h1>Tabla de multiplicar</h1>
   <p>Dime un número del uno al diez y yo te diré la tabla de multiplicar.</p>
   <div id="resultados" >
      <p onclick="tabla()">Pulsa aquí para decirme el número</p>
   </div>
</body>
</html>