
# Eli Essen - Casero & Saludable

Este es mi proyecto para el curso de "React" de Coder House en el año 2022.

Se trata de un simulador de eCommerce de productos Essen, que finaliza con la generación de una orden de compra.


## Logo
![Logo](https://i.imgur.com/BirJ9jh.png)


## Instalación local

$ git clone https://github.com/2detrebol/EliEssen-Brandi.git

$ cd eli-essen

$ npm install

$ npm start


## Rutas definidas

Configuradas en App.js

1. La ruta "/" (por default) muestra el título de bienvenida y el listado de todos los productos (ItemListContainer).

2. La ruta "/Categoria/:category" muestra los productos filtador según cada una de las 3 categorías existentes: Cacerolas, Sartentes, Complementos. Es el ItemListContainer + el filtro.

3. La ruta "/Recipes" muestra una page adicional en la que se incluyen videos de distintas preparaciones realizadas con los productos de la App.

4. La ruta "/Detalle/:id" muestra el detalle del producto seleccionado mediante el link "ver más", ubicando el producto mediante su id.

5. La ruta "/cart" muestra los productos agregados en el carrito de compras, agrupando en una línea producto y ajustando su cantidad si es ese producto ya había sido agregado previamente, pero tomandolos como productos distintos si se seleccionan diferentes colores del un mismo producto, permitiendo agregar y disminuir las cantidades, eliminar por producto o vaciar el carrito de compras. Se accede mediante boton "Ir al carrito" del itemDetail.js que se muestra luego de haber agregado el producto o mediante el cartWidget.

6. La ruta "/checkout" muestra el formulario donde se deben completar los datos del usuario para confirmar la orden de compra, el cual valida el ingreso de cada uno de los datos (todos ellos obligatorios) y finalmente muestra un mensaje confirmando la generación de la orden, con el nombre ingresado, el id/código de la citada orden y el importe a abonar; cuando el usuario clickea "Aceptar" muestra un último mensaje informando que en 3 segundos será remitido nuevamente a la página inicial.

7. La ruta "*" define que toda otra ruta a la que se quiera acceder mediante el navegador del browser (y no sea alguna de las anteriores), devuelva "404 - página no encontrada" junto al logo de la App.

Los "NavLinks" se encuentran incorporados en NavLinks.js (categorías + recetas) y en el logo de NavBar.js (inicio)



## Detalles Adicionales

Se destaca que todos los componentes, así como cada uno de sus elementos, se encuentran animados con Animate.css y con un loading previo que muestra el logo de la App.

Contiene implementado un custom hook denominado "useAsync", utilizado en ItemListContainer e ItemDetailContainer; además también se ha implementado un context denominado "CartContext".

Los títulos que se muestran en cada componente dependen de la categoría a la que se acceda. En el caso de ubicarse en el componente de inicio (ItemListContainer), se visualiza un mensaje de bienvenida, antes del listado completo de productos.

Además las "cards" que se muestran, en Item.js, tienen definido un "operador ternario" que hace que cada una tome el valor de su "backgroundColor" según el color del producto establecido en la base de datos firestore (servicio firebase).

Lo mismo ocurre en ItemDetail.js e ItemCount.js, toman color y backgroundColor de lo establecido en firestore para el producto que fue seleccionado.

También se implementó en ItemDetails.js la funcionalidad para que el usuario puede realizar cambio de color del producto elegido (se modifica la imagen y los colores de la Categoria que esta sobre la descripción, del precio, de los botones del ItemCount, de la leyenda de los productos agregados y del botón para "Agregar").

Por último, las cantidades agregadas con el botón "Agregar" del ItemCount.js se encuentran sincronizadas y se muestran en el Cart Widget (que no se muestra en caso de que el carrito de compras no contenga ningún producto); en el que también se sobrescriben las cantidades cuando se agrega un producto que ya había sido seleccionado previamente, y en caso de ser un producto distinto, se adiciona su cantidad a las ya contenidas en el Cart Widget.


## Screenshots

![App Screenshot](https://i.imgur.com/ESHW5kH.jpg)

![App Screenshot](https://i.imgur.com/NypyogX.jpg)

![App Screenshot](https://i.imgur.com/8pRHP1z.jpg)

![App Screenshot](https://i.imgur.com/iIcaXmS.jpg)

![App Screenshot](https://i.imgur.com/3drR59i.jpg)

![App Screenshot](https://i.imgur.com/w43I1O9.jpg)

![App Screenshot](https://i.imgur.com/naAvnPb.jpg)

![App Screenshot](https://i.imgur.com/wjGEb8n.jpg)

![App Screenshot](https://i.imgur.com/dQxT6re.jpg)

![App Screenshot](https://i.imgur.com/Sf8uo7E.jpg)

![App Screenshot](https://i.imgur.com/y7gTIXK.jpg)

![App Screenshot](https://i.imgur.com/TPjE4Xz.jpg)


## Demo en formato gif

https://i.imgur.com/kqqOTYj.gif


## Authors

Mauro Brandi - [@2detrebol](https://www.github.com/2detrebol)

