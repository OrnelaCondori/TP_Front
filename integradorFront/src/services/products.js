import {closeModal, productoActivo, openModal } from "../../main.js";
import {handleGetProductLocalStorage, setInLocalStorage} from "../persistence/LocalStorage.js"
import {handleGetProductToStore, handleRenderList} from "../views/store.js"
import Swal from 'sweetalert2'
/* ======= PRODUCT ======== */
const buttonAdd = document.getElementById("buttonAdd");
buttonAdd.addEventListener("click", ()=> {
    openModal();
});


//guardar o midificar elementos
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", ()=>{
    handleSaveOrModifyElements();
});

const handleSaveOrModifyElements = () =>{
    const nombre = document.getElementById("name").value,
        imagen = document.getElementById("img").value,
        precio = document.getElementById("precio").value,
        categoria = document.getElementById("categories").value;

    let products = handleGetProductLocalStorage() || []; // Obtener los productos del localStorage o inicializar como array vacío

  // Si estamos modificando un producto existente
    if (productoActivo) {
        const index = products.findIndex(p => p.id === productoActivo.id);
        if (index !== -1) {
        products[index] = {
         ...productoActivo, // Mantenemos las propiedades originales del producto
            nombre,
            imagen,
            precio,
            categoria
        };
        } else {
            console.error("Producto no encontrado para modificar");
            return;
        }
    } else {
        // Si creando un nuevo producto
        const newProduct = {
        id: new Date().toISOString(), // Generamos un nuevo id basado en la fecha
        nombre,
        imagen,
        precio,
        categoria
        };
        products.push(newProduct);  // Agregamos el nuevo producto al array
    }

    setInLocalStorage(products);  // Guardamos el array actualizado en localStorage
    handleGetProductToStore();

    closeModal();
}


//eliminar elemento
export const handleDeleteProduct = () => {
    Swal.fire({
        title: "Desea eliminar el elemento?",
        text: "Si lo eliminas sera permanentemente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar!"
    }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const result = products.filter((el) => el.id !== productoActivo.id);

            localStorage.setItem("products", JSON.stringify(result));
            
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);
            closeModal();
        } else {
            closeModal();
        }
    });

};