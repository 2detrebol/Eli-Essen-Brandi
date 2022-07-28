const products = [
    {
        id: '1',
        name: 'Cacerola 24cm',
        price: 48000,
        category: 'Cacerola',
        img: 'https://i.imgur.com/SoX2Xrw.png',
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
        img: 'https://i.imgur.com/rigYIy1.png',
        stock: 16,
        size: '20 cm',
        color: "terra",
        description: 'En esta Sartén podrá realizar recetas para compartir con 4 o 5 comensales. En conjunto con la Cacerola con asas de 24 cm (diámetro) y la Bifera, son un equipo ideal para satisfacer las necesidades de la cocina de matrimonios jóvenes con hijos pequeños, ya que sus capacidades son óptimas para alimentar a una familia promedio de 4 integrantes.'
    },

    {
        id: '3',
        name: 'Fuente 30cm',
        price: 37500,
        category: 'Fuente',
        img: 'https://i.imgur.com/biLRfZH.png',
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
        img: 'https://i.imgur.com/1vuOlvE.png',
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
        img: 'https://i.imgur.com/sE5BfMH.png',
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
        img: 'https://i.imgur.com/Xvq6G2V.png',
        stock: 12,
        size: '24 cm',
        color: "cherry",
        description: 'En esta Sartén podrá realizar recetas para compartir con 4 o 5 comensales. En conjunto con la Cacerola con asas de 24 cm (diámetro) y la Bifera, son un equipo ideal para satisfacer las necesidades de la cocina de matrimonios jóvenes con hijos pequeños, ya que sus capacidades son óptimas para alimentar a una familia promedio de 4 integrantes. Podrá lucirse con la cocción de: tortas, tartas, carnes, pescados, verduras rellenas, salsas, etc.'
    },

    {
        id: '7',
        name: 'Bifera',
        price: 41000,
        category: 'Bifera',
        img: 'https://i.imgur.com/dMEyyTl.png',
        stock: 7,
        size: '32 cm',
        color: "terra",
        description: '¡Exclusivo diseño! Optimiza la distribución del calor logrando una cocción pareja y un sellado crocante. Esta bífera ha sido pensada para realizar cocciones para 4 comensales. Está recubierta por antiadherente lo que facilita su limpieza y sus paredes laterales son más altas lo que minimiza el salpicado. Su uso ideal es para la cocción de carnes, grillado de verduras, arrollados de queso, hamburguesas, brochetes, carnes blancas, etc. Es una pieza fundamental en la cocina de todos los días y se complementa perfectamente con la sartén con mango de 24 cm y la cacerola con asas 24 cm'
    },
    {
        id: '8',
        name: 'Sarten 28cm',
        price: 39000,
        category: 'Sarten',
        img: 'https://i.imgur.com/mszQvgk.png',
        stock: 12,
        size: '28 cm',
        color: "aqua",
        description: 'Estas sartenes ofrecen un amplio volumen, permitiendo la realización de platos y cocciones para familias de entre 5 y 6 integrantes. El diseño facilita los desmoldes, las asas y el mango ayudan a manejar el producto con mayor seguridad durante las cocciones. Se pueden realizar una amplia variedad de cocciones cómo tortillas, omelettes, tortas, pizzetas, pescados, verduras rellenas, salsas, etc.'
    },
    {
        id: '9',
        name: 'FLIP 2.0',
        price: 43500,
        category: 'FLIP 2.0',
        img: 'https://i.imgur.com/zxHSFRf.png',
        stock: 23,
        size: '22 cm',
        color: "terra",
        description: 'La renovada ESSEN FLIP 2.0 nos permite preparar gran cantidad de recetas gracias a su multifuncionalidad. Se puede usar de ambos lados simplemente girándola con el mango sobre la cocina, posee un cierre tipo sello que mejora la estanqueidad y el centrado de las partes. Y ademas con esta nueva version 2.0 podras utilizar ambos cuerpos por separado danto multiples combinaciones.\nLos cuerpos principales son fundidos en aleación de aluminio, con paredes de gran espesor que combinado con la elevada conductividad del aluminio, permite una óptima distribución del calor,logrando rápidamente una temperatura homogénea en todo el cuerpo de la ESSEN FLIP.\n El Recubrimiento de los Cuerpos es antiadherente, tanto el interior como el exterior, lo que permite cocinar con mínima lubricación, sólo la necesaria para aumentar la vida útil del mismo. Además el antiadherente facilita enormemente la limpieza posterior de la pieza.\n “Esta renovación de la Flip conserva los atributos tan exitosos y suma innovaciones q van a facilitar aun mas uso, tener mayor flexibilidad y una mejor robustez en las sujeciones”'
    },
    {
        id: '10',
        name: 'Cacerola 8L',
        price: 46500,
        category: 'Cacerola',
        img: 'https://i.imgur.com/tz5MzwL.png',
        stock: 5,
        size: '8 Lts',
        color: "aqua",
        description: 'Esta es la cacerola más grande de la línea contemporanea. Permite desarrollar cocciones para hasta 8 comensales. Es ideal para la cocción de: pastas, guisados, consomé, salsas, presas de pollo, cazuelas, pescados, etc. Esta cacerola de destaca como un producto con gran volúmen y bajo consumo cocinando más sano, rico y fácil.'
    },
    {
        id: '11',
        name: 'Chef Sarten',
        price: 37500,
        category: 'Sensor',
        img: 'https://i.imgur.com/S95Qfca.png',
        stock: 9,
        size: '24 cm',
        color: "cherry",
        description: 'La Sartén Chef Essen Sensor es un innovador producto que permite incorporar a nuestra cocina diaria salteados de carne, verduras, pastas y arroz, cocina tipo Wok, frituras sin tapa ¡Y muchas opciones más para innovar en tu cocina! Está recubierta con un exclusivo antiadherente sensor con componentes termo sensibles incorporados al revestimiento. Una vez que alcanza la temperatura ideal de cocción (190°C) toda la superficie interior cambia de color, produciéndose el "efecto termo crómico". Su formato redondeado en el borde superior y levemente inclinado en la pared opuesta al mango, mejora la contención de alimentos al sartenear.'
    },
    {
        id: '12',
        name: 'Cacerola Cuadrada 24cm',
        price: 37500,
        category: 'Cacerola',
        img: 'https://i.imgur.com/2MEcehi.png',
        stock: 5,
        size: '24 cm',
        color: "terra",
        description: 'Cacerola Cuadrada que brinda una amplia superficie de cocción y permite centrarla perfectamente en las hornallas sin ocupar espacio de las demás. Permite acomodar grandes porciones de carnes y guarniciones de manera sencilla y manipular fácilmente los ingredientes durante la cocción. Además, se puede incorporar como complemento el Savarín de 18cm para la cocción de flanes, budines, soufflés, etc.'
    },
    {
        id: '13',
        name: 'Chef Wok',
        price: 41500,
        category: 'Sensor',
        img: 'https://i.imgur.com/yGOkiCE.png',
        stock: 9,
        size: '30 cm',
        color: "cherry",
        description: '¡Dale un salto a tu forma de cocinar! El Wok incorpora nuevas formas de cocinar para todos los días que harán tus preparaciones más entretenidas y compartidas por todos. Está recubierta con un exclusivo antiadherente sensor con componentes termo sensibles incorporados. Una vez que alcanza la temperatura ideal de cocción (190°C) toda la superficie interior cambia de color, produciéndose el "efecto termo crómico".La capacidad de preparación es para 4 a 6 comensales.'
    },
    {
        id: '14',
        name: 'Sarten 31cm',
        price: 44500,
        category: 'Sarten',
        img: 'https://i.imgur.com/8oVx8gs.png',
        stock: 13,
        size: '31 cm',
        color: "terra",
        description: 'Esta sartén tiene el tamaño ideal para realizar grandes porciones, sobre todo para recetas de tartas, tortillas, verduras rellenas y paellas. Su diseño facilita los desmoldes y las asas fijas ayudan a manejar el producto con mayor seguridad durante las cocciones. Complementando esta sartén con la cacerola con asas de 24cm y la bifera con asas, tendrá la oportunidad de contar con piezas de cocina para preparaciones importantes de hasta 5 o 6 adultos'
    },
    {
        id: '15',
        name: 'FLIP',
        price: 39000,
        category: 'FLIP',
        img: 'https://i.imgur.com/AEIzmWP.png',
        stock: 20,
        size: '22 cm',
        color: "aqua",
        description: 'La ESSEN FLIP nos permite preparar gran cantidad de recetas gracias a su multifuncionalidad. Se puede usar de ambos lados simplemente girándola con el mango sobre la cocina, posee un cierre tipo sello que mejora la estanqueidad y el centrado de las partes. Los cuerpos principales son fundidos en aleación de aluminio, con paredes de gran espesor que combinado con la elevada conductividad del aluminio, permite una óptima distribución del calor,logrando rápidamente una temperatura homogénea en todo el cuerpo de la ESSEN FLIP. El Recubrimiento de los Cuerpos es antiadherente, tanto el interior como el exterior, lo que permite cocinar con mínima lubricación, sólo la necesaria para aumentar la vida útil del mismo. Además el antiadherente facilita enormemente la limpieza posterior de la pieza.'
    },
    {
        id: '16',
        name: 'Cacerola Cuadrada 29cm',
        price: 42000,
        category: 'Cacerola',
        img: 'https://i.imgur.com/PM5ahtm.png',
        stock: 7,
        size: '29 cm',
        color: "cherry",
        description: 'Diseño y estilo en un solo producto. Su capacidad se destaca ya que permite desarrollar cocciones para entre 6 y 8 comensales. Su forma cuadrada permite acomodar perfectamente porciones grandes de carne y guarniciones de forma muy sencilla. Además, por la amplitud de sus medidas facilita la manipulación de los ingredientes durante la cocción. Incorporando las Budineras para cacerolas cuadradas,  podrás preparar  budines, terrinas, panes etc. de forma elegante, rica y fácil.'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((item) => item.id === id));
        }, 2000);
    });
};
