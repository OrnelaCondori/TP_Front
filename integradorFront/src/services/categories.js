//render de la vista categories

export const renderCategories = () => {
    //tomamos elelemntos de la lista
    const ulList = document.getElementById("listFilter");
    //creeamos  esos elmentos dentro de la lista
    ulList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="mayorPrecio">Mayor precio</li>
    <li id="menorPrecio">Menor precio</li>
    `;
    
    //añadimos dinamicamente el evento click
    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((liElement)=> {
        liElement.addEventListener("click", ()=> {
            handleClick(liElement);
        });
    });

    //verificamos y manejamos el estilo del elemento activo
    //si el elemento es clickeado tiene una clasee, si se clickea otro se remueve
    const handleClick = (elemento)=> {
        liElements.forEach((el)=>{
            if(el.classList.contains("liActive")) {
                el.classList.remove("liActive");
            }else {
                if(elemento === el) {
                    el.classList.add("liActive");
                };
            };
        });
    };
};