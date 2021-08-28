# VINILOS.COM
Vinilos.com es una pagina para comprar los mejores vinilos de la Argentina!
Con una interfaz muy intuitiva y facil de utilizar en segundos podes adquirir el vinilo de tu banda preferida.

Descripción
Vinilos.com tiene 5 secciones principales:

-La primera sección el el ItemListContainer.jsx el cual contiene todos los productos disponibles para la venta. Al clickear cualquiera de estos te llevará al ItemDetail del producto donde encontrarás más información del mismo y podrás agregarlo al carrito. Una vez seleccionados los mismos al clickear comprar deberás completar un formulario para finalizar la compra con éxito!

(Link GIF: https://media.giphy.com/media/sttzEJCWMHEp0ok9hb/giphy.gif?cid=790b7611eebda8065e5cc9ba42be3639626c0e729ccbae21&rid=giphy.gif&ct=g )

-La segunda sección es Home.jsx la cual permite dar la bienvenida a todos aquellos usuarios nuevos. 

(Link GIF: https://media.giphy.com/media/OpfyR3NrHgbgBHRdm4/giphy.gif?cid=790b76111cfc648a92ab37f0433ea26a81ee43974088171b&rid=giphy.gif&ct=g)

-La tercera sección es Best Sellers.jsx donde mostramos los discos más solicitados por el público.

(Link GIF:https://media.giphy.com/media/GNvhHiCgPayjx9T70A/giphy.gif?cid=790b76115a96005a35ed534c76abeb404289f7c069b56576&rid=giphy.gif&ct=g )

-La cuarta seccion es el SingnIn/Out en el cual los usuario nuevos deben crearse una cuenta y luego podrán Iniciar Sesión. Todos los datos plasmados en los formularios se guardan en Firebase en la sección Authentication, donde nos encontraremos con los siguientes datos del usuario: Identificador - Proveedores -Fecha de creación de cuenta- Fecha de  acceso a cuenta - UID de usuario.

(Link GIF: https://media.giphy.com/media/eaBlhOWxnZhcn5f3ED/giphy.gif?cid=790b76110ad7b8effe576641e6523356316ca71da5da4015&rid=giphy.gif&ct=g)

-La quinta sección pero no la menos importante es el Cart.jsx en el cual a medida que agregamos productos al carrito se pueden ver rápidamente la cantidad total de vinilos adquiridos y al entrar en esta sección nos aparecerán todos los productos agregados, con su descripcion y la opción de eliminar alguno, si el usuario desea. 
Luego el usuario podrá visualizar el total a pagar y previa confirmación de compra debe completar un formulario, el cual los datos del mismo y los datos de la compra se almacenaran en Firebase.

(Link GIF: https://media.giphy.com/media/sttzEJCWMHEp0ok9hb/giphy.gif?cid=790b7611eebda8065e5cc9ba42be3639626c0e729ccbae21&rid=giphy.gif&ct=g )

Ya realizada la compra con éxito el usuario puede seguir comprando y navegando en vinilos.com.


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
. Reactstrap
