const guardarContacto = (local, contacto)  => {
        local.setItem(contacto.id, JSON.stringify(contacto));
        location.reload(true);
        
    
} 
const cargarContactos = (local, parentNode) => {
    let claves = Object.keys(local)
    console.log(claves)
    for (let clave of claves) {
        let contacto = JSON.parse(local.getItem(clave))
        crearContacto(parentNode, contacto, local)
    };
}

const crearContacto = (parentNode, contacto, local) => {
    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let apellidoContacto = document.createElement('p')
    let telefonoContacto = document.createElement('p')
    let cuidadContacto = document.createElement('p')
    let direccionContacto = document.createElement('p')
    let iconoBorrar = document.createElement('span')

  

    nombreContacto.innerHTML = contacto.nombre
    apellidoContacto.innerHTML = contacto.apellido
    telefonoContacto.innerHTML = contacto.telefono
    cuidadContacto.innerHTML = contacto.cuidad
    direccionContacto.innerHTML = contacto.direccion
    iconoBorrar.innerHTML = ' delete_forever'

    divContacto.classList.add('tarea')
    iconoBorrar.classList.add('material-icons', 'icono')

    iconoBorrar.onclick = () => {
        borrarContacto(local, contacto.id, divContacto);
    };

    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(apellidoContacto)
    divContacto.appendChild(telefonoContacto)
    divContacto.appendChild(cuidadContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)
}

const borrarContacto = (local, contactoId, divContacto) => {
    if (local.getItem(contactoId)) {
        local.removeItem(contactoId);
        console.log("Contacto eliminado:", contactoId);
        divContacto.remove();
    } else {
        console.log("El contacto no existe en el almacenamiento local.");
    }
}

