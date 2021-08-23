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


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Librerias usadas:
React js
Firebase
Material UI

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
