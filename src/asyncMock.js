const products = [
    {
        id: '1',
        name: 'Cacerola 24cm',
        price: 48000,
        category: 'Cacerola',
        img: 'https://i.imgur.com/FNOWYeh.png',
        stock: 12,
        size: '24 cm',
        color: "cherry",
        description: 'Estas Cacerolas son las más vendidas de nuestra línea de productos y gracias a los complementos que hemos desarrollado, permiten disfrutar de todas las funciones y beneficios de las piezas Essen. Son una excelente opción ya que se adaptan a una familia de entre 4 y 5 integrantes resolviendo absolutamente todas las posibilidades de preparaciones y cocciones tanto dulces como saladas: desde tortas a panes, carnes, cazuelas, guisados y sopas, etc.'
    },

    {
        id: '2',
        name: 'Sarten 20cm',
        price: 33000,
        category: 'Sarten',
        img: 'https://i.imgur.com/jF05Fr6.png',
        stock: 16,
        size: '20 cm',
        color: "terra",
        description: 'En esta Sartén podrá realizar recetas para compartir con 4 o 5 comensales. En conjunto con la Cacerola con asas de 24 cm (diámetro) y la Bifera, son un equipo ideal para satisfacer las necesidades de la cocina de matrimonios jóvenes con hijos pequeños, ya que sus capacidades son óptimas para alimentar a una familia promedio de 4 integrantes.'
    },

    {
        id: '3',
        name: 'Fuente 30cm',
        price: 37500,
        category: 'Otros',
        img: 'https://i.imgur.com/rUPcNVN.png',
        stock: 10,
        size: '30 cm',
        color: "aqua",
        description: 'El diseño de la Fuente Rectangular permite distribuir uniformemente el calor por toda la superficie. Su forma hace que manipular los ingredientes durante la cocción sea mucho más fácil y seguro. La amplitud del producto es ideal para preparaciones de entre 4 y 6 comensales. Facilita la cocción de canelones, lasagnas, carnes y los más ricos postres.'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
    })
}
