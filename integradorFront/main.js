import { renderCategories } from './src/services/categories.js';
import { handleGetProductLocalStorage, setInLocalStorage } from './src/persistence/LocalStorage.js';
import './style.css'
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
});
/* ======= PRODUCT ======== */
const buttonAdd = document.getElementById("buttonAdd");
buttonAdd.addEventListener("click", ()=> {
  openModal();
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
const openModal = ()=>{
  const modal = document.getElementById("modalPopUp");
  modal.style.display = "flex";
}
const closeModal = ()=>{
  const modal = document.getElementById("modalPopUp");
  modal.style.display = "none";
}

//guardar o midificar elementos
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", ()=>{
  handleSaveOrModifyElements();
});

const handleSaveOrModifyElements = () =>{
  const nombre = document.getElementById("name").value,
    imagen = document.getElementById("img").value,
    precio = document.getElementById("precio").value,
    categoria = document.getElementById("categoria").value;

  let object = {
    id: new Date().toISOString(),
    nombre,
    imagen,
    precio,
    categoria,
  }

  setInLocalStorage(object);

  //closeModal();
}
