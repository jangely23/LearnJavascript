<DOCTYPE! html>
<html>
    <head>
        <title>Prueba</title>
        <link rel="stylesheet" href="style.css">
        <script src="./prueba.js"></script>
    </head>
    <body>
        <?php $prueba=array("ruta1","ruta2","ruta3","ruta4")?>
        <div class="prueba">
            <form action="./process_prueba.php" method="POST">
                <label>  Seleccione Rutas </label></br>
                
                <div id="prueba_rutas">
                    <select name="rutas" id="rutas">
                        <option value="Seleccione">Seleccione</option>
                        <?php 
                            for($i=0; $i<count($prueba); $i++){
                        ?>
                            <option value="<?php echo $prueba[$i]?>"><?php echo $prueba[$i]?></option>
                        <?php } ?>
                    </select>
                    <button type="button" onclick="pruebaRuta();" > + </button>
                </div>

                <div id="lista-rutas">
                
                </div>

                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
        
    </body>
</html>