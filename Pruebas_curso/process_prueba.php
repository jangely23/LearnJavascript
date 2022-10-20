
</br></br>
<?php
for($i=0; $i<count($_POST['ruta_seleccionada']); $i++){
    echo "</br>Su ruta es <b>" .$_POST['ruta_seleccionada'][$i]. "</b> y la prioridad es <b>" .$_POST['prioridad'][$i]. "</b> </br>";
}

?>