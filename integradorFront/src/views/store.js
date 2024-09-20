// ========STORE ===========//
import { handleGetProductLocalStorage } from "../persistence/LocalStorage.js"
import {setProductoActivo } from "../../main.js";
import {openModal }from "../../main.js";
//funcion que trae los elementos y llamar al render
export const handleGetProductToStore = ()=>{
    const products = handleGetProductLocalStorage();
    handleRenderList(products);
}
//se encarga de filtrar y denderizar la seccion con todos sus respectivos elementos
export const handleRenderList = (productosIn)=> {
    //filtrado de arrays por categoria
    const burgers = productosIn.filter((el)=> el.categoria === "Hamburguesas");
    const papas = productosIn.filter((el)=> el.categoria === "Papas");
    const gaseosas = productosIn.filter((el)=> el.categoria === "Gaseosas");

    //funcion de renderiza los elementos de la seccion
    const renderProductGroup = (productos, title) => {
        console.log(productos);
        if(productos.length>0){
            const productosHTML = productos.map((producto, index) => {
                return `<div class="conteinerTargetItem" id="product-${producto.categoria}-${index}"> 
                    <div> 
                        <img src= '${producto.imagen}' />
                        <div>
                            <h2> ${producto.nombre} </h2>
                        </div>
                        <div class= "TargetProps">
                            <p>Precio: <b>$ ${producto.precio} </b></p>
                            <p>Categoria: <b>${producto.categoria} </b></p>
                        </div>
                    </div> 
                </div> `;
            });

            //retorna la funcion con todos los elementos dentro
            return `
                <section class="sectionStorage"> 
                    <div class="containerTitleSection">
                        <h3>${title}</h3>
                    </div>
                    <div class="containerProductStore">
                        ${productosHTML.join("")}
                    </div>
                </section>
            `
        } else {
            return ""
        }
    };

    //renderizar cada uno de los productos dentro de su categoria
    const appConteiner = document.getElementById("storeConteiner");
    appConteiner.innerHTML = `
    ${renderProductGroup(burgers, "Hamburguesas")}
    ${renderProductGroup(papas, "Papas")}
    ${renderProductGroup(gaseosas, "Gaseosas")}
    `;

    //añaden los lementos de manera dinamiza
    const addEvents = (productsIn)=>{
        productsIn.forEach((element, index) => {
            const productConteiner = document.getElementById(`product-${element.categoria}-${index}`);
            productConteiner.addEventListener("click", () => {
                setProductoActivo(element);
                openModal();
            });
        });
    };

    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);
};