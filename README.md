checkpoint Node.js con TypeScript

Bienvenido a mi aplicación Node.js con TypeScript. Esta aplicación realiza diversas operaciones relacionadas con rutas y camiones, y utiliza la API de Google Maps para obtener información de ubicación y distancias.

Esta aplicacion esta relizada con la finalidad de demostrar mis bases y fundamentos de Typescript, NodeJS, Express, MongoDB y ORM Mongoose.
En esta aplicacion lo principal es relizar lo pedido en la prueba y esto lo relize mediante rutas, controladores, modelos de datos, interfaces, servicios, entre otros; quise poner por separado la parte de los controladores y la parte de servicios ya que de esta manera en los controladores podemos ver solo el manejo de los datos que esntran y sale, en cambio en la parte de los servicios vemos toda la logica de la aplicacion de esta manera se me hace mas facil la modificacion del codigo a la posterior y mas sostenible.
Tambien arme una logica en la parte de las rutas en la cual el archivo index.ts nos toma el nombre de los archivos como la entrada para las rutas y de esta manera no tienes que estar poniendo ruta por ruta en cada peticion, solo en la parte de auth tenermos dos rutas extras las cuales serian "/login" y "/register" para poder acceder a ellas.
Esta fue una aplicacion desafiante ya que yo nunca habia echo uso de la api de googlo maps y despues de mucha investigacion pude llegar a lo requerid, me gusto mucho este desafio ya que de esta manera es como mas aprendo de nuevas funciones y me empapo mucho mas de la tecnologia.
Espero y sea de su agrado y me tomen en cuenta.
## Requisitos Previos

Asegúrate de tener instalados los siguientes requisitos previos en tu sistema:

- [Node.js](https://nodejs.org/) (versión X.X.X)
- [npm](https://www.npmjs.com/) (normalmente se instala junto con Node.js)

## Configuración

1. Clona este repositorio en tu máquina local:
   git clone https://github.com/alexestrd/NodeBack.git


   Para ejecutar la aplicación, utiliza el siguiente comando:

    
    npm run dev

    Endpoints de la API
    GET http://localhost:3005/api/rutas: Obtiene la lista de rutas disponibles.
    GET http://localhost:3005api/trucks: Obtiene la lista de camiones disponibles.
    POST http://localhost:3005/api/ordenes: Crea una nueva orden con los datos proporcionados en el cuerpo de la solicitud.
    POST http://localhost:3005/auth/login: Crea una nueva sesion y te retorna un token
    POST http://localhost:3005/auth/register: bGenera un nuevo ususario y verifica que no exista mediante el email