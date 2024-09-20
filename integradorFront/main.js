import { renderCategories } from './src/services/categories.js';
import { handleGetProductToStore } from './src/views/store.js';
import {handleSearchProductByName } from "./src/services/searchBar.js";
import {handleDeleteProduct } from "./src/services/products.js"
import './style.css'

/* ======= APLICATION =========*/
export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn)=> {
  categoriaActiva = categoriaIn;
}
export let productoActivo = null;
export const setProductoActivo = (productoIn)=> {
  productoActivo= productoIn;
}

document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  handleGetProductToStore();
});


/* ======= POP UP ======== */
const buttonCancel = document.getElementById("cancelButton");
buttonCancel.addEventListener("click", ()=> {
  handleCancelButton();
});
const handleCancelButton = ()=>{
  closeModal();
};
// funcion ABRIR CERRAR modal
export const openModal = ()=>{
  const modal = document.getElementById("modalPopUp");
  modal.style.display = "flex";

  const buttonDelete = document.getElementById("deleteButton");

  const nombre = document.getElementById("name"),
    imagen = document.getElementById("img"),
    precio = document.getElementById("precio"),
    categoria = document.getElementById("categories");

  // Si hay un producto activo, llenamos el modal con sus datos
  if (productoActivo) {
    nombre.value = productoActivo.nombre;
    imagen.value = productoActivo.imagen;
    precio.value = productoActivo.precio;
    categoria.value = productoActivo.categoria;
    buttonDelete.style.display= "block";
  } else {
    buttonDelete.style.display= "none";
    resetModal(); // Si no hay producto activo, vaciamos el modal
  }

}
export const closeModal = ()=>{
  const modal = document.getElementById("modalPopUp");
  modal.style.display = "none";
  resetModal();
}

const resetModal = ()=>{
  const nombre = document.getElementById("name"),
    imagen = document.getElementById("img"),
    precio = document.getElementById("precio"),
    categoria = document.getElementById("categories");
    nombre.value= "";
    imagen.value= "";
    precio.value= 0;
    categoria.value = "";
}
//button delete

const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", () => {
  handleButtonDelete();
});
const handleButtonDelete = ()=>{
  handleDeleteProduct();
}


//====   buttonSearch =======
const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click", ()=> {
  handleSearchProductByName();
})
