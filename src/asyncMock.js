const products = [
    {
        id: '1',
        name: 'Cacerola 24cm',
        price: 48000,
        category: 'Cacerola',
        img: 'https://i.imgur.com/5PSaGlk.png',
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
        img: 'https://i.imgur.com/vHrzg62.png',
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
    },

    {
        id: '4',
        name: 'Cacerola 18cm',
        price: 27500,
        category: 'Cacerola',
        img: 'https://i.imgur.com/nfbMSu4.png',
        stock: 6,
        size: '18 cm',
        color: "terra",
        description: 'Estas Cacerolas con mango son ideales para preparaciones de platos pequeños en familias entre 2 y 3 integrantes o como complemento de piezas más grandes ya que en ellas se pueden realizar rellenos o salsas de forma práctica. Poseen una pequeña base, paredes laterales altas y mango lo que facilita el manejo de las piezas. Junto a la Sartén y la Cacerola de 24 cm, permiten resolver cocciones que van desde una entrada o un plato principal hasta un postre. Su uso es muy versátil ya que permite cocinar panes, tortas, carnes, cremas y salsas. Además tienen la opción de incorporar un complemento: Savarín: Para la cocción de flanes, budines, soufflés, etc.'
    },
    {
        id: '5',
        name: 'Cacerola 20cm',
        price: 34500,
        category: 'Cacerola',
        img: 'https://i.imgur.com/5ORg6Zt.png',
        stock: 9,
        size: '20 cm',
        color: "aqua",
        description: 'Diámetro que permite realizar de forma rápida, fácil y sana, las preparaciones más variadas.        Pensada para familias de 1 o 2 adultos y hasta dos niños. En conjunto con la Sartén de 20cm o la Cacerola de 18cm resultan aliados básicos para resolver las comidas de todos los días.'
    },

    {
        id: '6',
        name: 'Sarten 24cm',
        price: 34500,
        category: 'Sarten',
        img: 'https://i.imgur.com/lXchK5a.png',
        stock: 12,
        size: '24 cm',
        color: "cherry",
        description: 'En esta Sartén podrá realizar recetas para compartir con 4 o 5 comensales. En conjunto con la Cacerola con asas de 24 cm (diámetro) y la Bifera, son un equipo ideal para satisfacer las necesidades de la cocina de matrimonios jóvenes con hijos pequeños, ya que sus capacidades son óptimas para alimentar a una familia promedio de 4 integrantes. Podrá lucirse con la cocción de: tortas, tartas, carnes, pescados, verduras rellenas, salsas, etc.'
    },

    {
        id: '7',
        name: 'Bifera',
        price: 41000,
        category: 'Otros',
        img: 'https://i.imgur.com/uzZN8AQ.png',
        stock: 4,
        size: 'Bifera',
        color: "terra",
        description: '¡Exclusivo diseño! Optimiza la distribución del calor logrando una cocción pareja y un sellado crocante. Esta bífera ha sido pensada para realizar cocciones para 4 comensales. Está recubierta por antiadherente lo que facilita su limpieza y sus paredes laterales son más altas lo que minimiza el salpicado. Su uso ideal es para la cocción de carnes, grillado de verduras, arrollados de queso, hamburguesas, brochetes, carnes blancas, etc. Es una pieza fundamental en la cocina de todos los días y se complementa perfectamente con la sartén con mango de 24 cm y la cacerola con asas 24 cm'
    },
    {
        id: '8',
        name: 'Sarten 28cm',
        price: 39000,
        category: 'Sarten',
        img: 'https://i.imgur.com/qBqbu6S.png',
        stock: 12,
        size: '28 cm',
        color: "aqua",
        description: 'Estas sartenes ofrecen un amplio volumen, permitiendo la realización de platos y cocciones para familias de entre 5 y 6 integrantes. El diseño facilita los desmoldes, las asas y el mango ayudan a manejar el producto con mayor seguridad durante las cocciones. Se pueden realizar una amplia variedad de cocciones cómo tortillas, omelettes, tortas, pizzetas, pescados, verduras rellenas, salsas, etc.'
    }

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}
