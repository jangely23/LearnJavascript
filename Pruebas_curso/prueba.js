
function pruebaRuta(){
    let rutaActual= document.getElementById("rutas").value;
    console.log(rutaActual);

    if(rutaActual!="Seleccione"){
        const containter = document.querySelector("#lista-rutas");
        let child_container = containter.childElementCount;
        console.log("hijos contenedor: "+ child_container);
    
        let i=child_container+1;
    
        child = createChildContainer(containter, "div", classElement = ["child_style"], atribute = {id:"child"+i});
        
        child_content_trunk = createChildContainer(child, "input", classElement = [], atribute = {type : "text", name:"ruta_seleccionada[]",value:rutaActual, readonly:"true"});

        child_content_priority = createChildContainer(child, "input", classElement = [],  );


        /* const child = document.createElement("div");
        child.setAttribute("id","child"+i);
        child.classList.add("child_style");
        containter.appendChild(child); */


        /* const child_content_trunk = document.createElement("input");
        child_content_trunk.setAttribute("type","text");
        child_content_trunk.setAttribute("name","ruta_seleccionada[]");
        child_content_trunk.setAttribute("value", rutaActual);
        child_content_trunk.setAttribute("readonly", "true");
        child.appendChild(child_content_trunk); */

        /* const child_content_priority = document.createElement("input");
        child_content_priority.setAttribute("type","number");
        child_content_priority.setAttribute("name","prioridad[]");
        child_content_priority.setAttribute("value", i);
        child_content_priority.setAttribute("readonly", "true");
        child.appendChild(child_content_priority);
 */
        child.insertAdjacentHTML("beforeend", `<button type="button" class="danger" onclick="removerPruebaRuta('child${i}');" > - </button>`);
        
        
        
    }else{
        alert("Seleccione la ruta a usar");
    }

}

function createChildContainer(parent, element, classElement = [], atribute = {}, contentText=''){
    
    let child = document.createElement(element);

    //agrega las clases que llegan en un array
    if(classElement.length != 0){
        for (i=0; i > classElement.length; i++){
            child.classList.add("classElement");
        }    
    }
    console.log(atribute.length);
    //agrega los atributos que vienen en un objeto clave->valor
    if(atribute.length != undefined){
        console.log(atribute);
        for (let key in value){
            child.setAttribute(key, value);
        }    
    }

    //agrega texto a el contenido del elemento creado
    if(contentText !=''){
        child.textContent = contentText;
    }

    //Conecta el elemento al DOM

    parent.appendChild(child);
   
    return child;
}



function removerPruebaRuta(id_child){
    let div_remove = document.getElementById(id_child);
    div_remove.remove();
}