// ========STORE ===========//
import { handleGetProductLocalStorage } from "../persistense/LocalStorage"
export const handleGetProductToStore = ()=>{
    const products = handleGetProductLocalStorage();


}
export const handleRenderList = (productosIn)=> {
    const burgers = productosIn.filter((el)=> el.categoria === "Hamburguesas");
    const papas = productosIn.filter((el)=> el.categoria === "Papas");
    const gaseosas = productosIn.filter((el)=> el.categoria === "Gaseosas");

    const rederProductGroup = (productos, title) => {
        if(productos.length>0){
            const productosHTML = productos.map((producto, index) => {
                return `<div> 
                    <div> 
                        <img src= ${producto.imagen} />
                        <div>
                            <h2> ${producto.nombre} </h2>
                        </div>
                        <div>
                            <p><b>Precio: $ ${producto.nombre} </b></p>
                            <p><b>Categoria: $ ${producto.categoria} </b></p>
                        </div>
                    </div> 
                </div> `;
            })
        }
    }
}