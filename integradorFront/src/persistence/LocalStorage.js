// ====== LOCAL STORAGE ====== //
export const handleGetProductLocalStorage = () => {
    const products = localStorage.getItem("products");
    return products ? JSON.parse(products) : [];
};
export const setInLocalStorage = (products) => {
    localStorage.setItem("products", JSON.stringify(products));
};
