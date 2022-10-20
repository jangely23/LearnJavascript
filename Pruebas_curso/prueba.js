
function pruebaRuta(){
    let rutaActual= document.getElementById("rutas").value;
    console.log(rutaActual);

    if(rutaActual!="Seleccione"){
        const containter = document.querySelector("#lista-rutas");
        let child_container = containter.childElementCount;
        console.log("hijos contenedor: "+ child_container);
    
        let i=child_container+1;
    
        const child = document.createElement("div");
        child.setAttribute("id","child"+i);
        child.classList.add("child_style");
        containter.appendChild(child);


        const child_content_trunk = document.createElement("input");
        child_content_trunk.setAttribute("type","text");
        child_content_trunk.setAttribute("name","ruta_seleccionada[]");
        child_content_trunk.setAttribute("value", rutaActual);
        child_content_trunk.setAttribute("readonly", "true");
        child.appendChild(child_content_trunk);

        const child_content_priority = document.createElement("input");
        child_content_priority.setAttribute("type","number");
        child_content_priority.setAttribute("name","prioridad[]");
        child_content_priority.setAttribute("value", i);
        child_content_priority.setAttribute("readonly", "true");
        child.appendChild(child_content_priority);

        child.insertAdjacentHTML("beforeend", `<button type="button" class="danger" onclick="removerPruebaRuta('child${i}');" > - </button>`);
        
        
        
    }else{
        alert("Seleccione la ruta a usar");
    }

}

function createChildContainer(parent, element, classElement = [], atribute = {}, action){
    let hijo = document.createElement(element);

    if(classElement.length != 0){
        for (i=0; i > classElement.length; i++){
            child.classList.add("classElement");
        }    
    }

    if(atribute.length != undefined){
        for (let key in value){
            child.setAttribute(key, value);
        }    
    }
}



function removerPruebaRuta(id_child){
    let div_remove = document.getElementById(id_child);
    div_remove.remove();
}