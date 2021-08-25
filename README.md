# VINILOS.COM
Vinilos.com es una pagina para comprar los mejores vinilos de la Argentina!
Con una interfaz muy intuitiva y facil de utilizar en segundos podes adquirir el vinilo de tu banda preferida.

Descripción
Vinilos.com tiene 5 secciones principales:

-La primera sección el el ItemListContainer.jsx el cual contiene todos los productos disponibles para la venta. Al clickear cualquiera de estos te llevará al ItemDetail del producto donde encontrarás más informacion del mismo y podrás agregarlo al carrito.

-La segunda sección es Home.jsx la cual permite dar la bienvenida a todos aquellos usuarios nuevos. 

-La tercera sección es Best Sellers.jsx donde mostramos los discos más solicitados por el público.

-La cuarta seccion es el SingnIn/Out en el cual los usuario nuevos deben crearse una cuenta y luego podrán Iniciar Sesión. Todos los datos plasmados en los formularios se guardan en Firebase en la sección Authentication, donde nos encontraremos con los siguientes datos del usuario: Identificador - Proveedores -Fecha de creación de cuenta- Fecha de  acceso a cuenta - UID de usuario.

-La quinta sección pero no la menos importante es el Cart.jsx en el cual a medida que agregamos productos al carrito se pueden ver rápidamente la cantidad total de vinilos adquiridos y al entrar en esta sección nos aparecerán todos los productos agregados, con su descripcion y la opción de eliminar alguno, si el usuario desea. 
Luego el usuario podrá visualizar el total a pagar y previa confirmación de compra debe completar un formulario, el cual los datos del mismo y los datos de la compra se almacenaran en FireBase.

Ya realizada la compra con éxito el usuario puede seguir comprando y navegando por vinilos.com.


# Cómo levantar el proyecto
1- Clonar el reposito (https://github.com/luciamorelli/vinilos.com)
2- Obtener node_modules (npm i)

3- Escribir en terminal npm start

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Librerias usadas:
. React-router-dom
. @material-ui/core
. @material-ui/icons
