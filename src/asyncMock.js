const products = [
    {
        id: "1",
        name: "Iphone 12",
        price: 1000,
        category: "celular",
        stock: 25,
        description: "Descripcion de Iphone 12"
    },
    {
        id: "2",
        name: "Samsung S20",
        price: 800,
        category: "celular",
        stock: 10,
        description: "Descripcion de Samsung S20"
    },
    {
        id: "3",
        name: "Wakom",
        price: 700,
        category: "tablet",
        stock: 15,
        description: "Descripcion de Wakom"
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}