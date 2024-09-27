export const categorias = [
    {
        id: 1,
        name: 'Nuestras Cervezas',
        mostrarSeparado: true,
        image: "seccion_celiacos.jpg",
        backgroundColor: 'brown',
        categoryName: 'SIN TACC'
    }, 
    {
        id: 2, 
        name: 'Hamburguesas',
        image: "seccion_lunch.jpg",
        backgroundColor: 'brown',
        categoryName: 'LUNCH'
    },
    {
        id: 3, 
        name: 'Pizzas',
        image: "seccion_dulces.jpg",
        categoryName: 'DULCES'
    },
    {
        id: 4, 
        name: 'Tablas para compartir',
        image: "seccion_salados.jpg",
        categoryName: 'SALADOS'
    },
    {
        id: 5, 
        name: 'Panchos',
        image: "seccion_pasteleria.jpg",
        categoryName: 'PASTELERIA'
    },
    {
        id: 6, 
        name: 'Sandwichs',
        image: "seccion_chocolates.jpg",
        categoryName: 'CHOCOLATES',
    },
]

const productos = [
    {
        id: 1,
        title: 'Alfajor de Maicena',
        price: 160,
        image: 'Maicena-celiacos.jpg',
        stock: 5,
        description: '',
        categoryId: 1
    },
    {
        id: 2,
        title: 'Brownie Individual',
        price: 1500,
        image: 'Brownie-celiacos.jpg',
        stock: 5,
        description: '',
        categoryId: 1
    },
    {
        id: 3,
        title: 'Lemon Pie',
        price: 1300,
        image: 'Lemon-celiacos.jpg',
        stock: 5,
        description: '',
        categoryId: 1
    },
    {
        id: 4,
        title: 'Mousse',
        price: 1800,
        image: 'Mousse-celiacos.jpg',
        stock: 5,
        description: '',
        categoryId: 1
    },
    {
        id: 5,
        title: 'Tableta chocolate blanco con cookies',
        price: 300,
        image: 'Tableta-chocolate-blanco-con-cookies.jpg',
        stock: 5,
        description: '',
        categoryId: 6,
    },
    {
        id: 6,
        title: 'Tarta de coco',
        price: 800,
        image: 'Tarta-de-coco.jpg',
        stock: 5,
        description: '',
        categoryId: 5,
    },
    {
        id: 7,
        title: 'Sandwiches Triples Base de Jamón Cocido',
        price: 180,
        image: 'sandwichs-miga.jpg',
        stock: 5,
        description: '',
        categoryId: 2,
    },
    {
        id: 8,
        title: 'Bizcochitos x 250g',
        price: 450,
        image: 'Bizcochitos-o-cuernitos-en-bolsita-de-250-grs.jpg',
        stock: 5,
        description: '',
        categoryId: 4,
    },
    {
        id: 9,
        title: 'Alfajorcitos',
        price: 2800,
        image: 'Alfajorcitos.jpg',
        stock: 100,
        description: 'Precio por Kg. En caso de precisar un peso distinto, por favor aclarar en las observaciones del presupuesto al finalizarlo.',
        categoryId: 3,
    },
]

export const fetchProducts = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000)
    })
}

export const fetchProductsByCategory = (categoryId) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const filteredProducts = productos.filter(product => product.categoryId === categoryId)
            resolve(filteredProducts)
        }, 1000)
    })
}