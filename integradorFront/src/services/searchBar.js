import {handleGetProductLocalStorage} from "../persistence/LocalStorage.js";
import {handleRenderList} from "../views/store.js";
export const handleSearchProductByName = ()=>{
    const inputHeader= document.getElementById("inputHeader");
    const products = handleGetProductLocalStorage();

    const result = products.filter((el) => el.nombre && el.nombre.toLowerCase().includes(inputHeader.value.toLowerCase()));
    // const result = products.filter((el)=> el.nombre.toLowerCase().includes(inputHeader.value));
    handleRenderList(result);
}