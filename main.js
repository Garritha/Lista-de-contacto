const nombre = document.querySelector(".nombre");
const apellido = document.querySelector(".apellido");
const telefono = document.querySelector(".telefono");
const cuidad = document.querySelector(".cuidad");
const direccion = document.querySelector(".direccion");
const btnAgregarContacto = document.querySelector (".btn-agregar-contacto");

const ListadoContacto = document.querySelector(".listado-de-contacto")


const local = window.localStorage

btnAgregarContacto.onclick = () => {
    let contacto  = {
        id: Math.random(1,100),
        nombre: nombre.value,
        apellido: apellido.value,
        telefono: telefono.value,
        cuidad: cuidad.value,
        direccion: direccion.value,
    }
    guardarContacto(local, contacto);
}

cargarContactos(local, ListadoContacto);
 