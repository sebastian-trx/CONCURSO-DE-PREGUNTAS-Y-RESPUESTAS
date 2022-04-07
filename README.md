

# CONCURSO DE PREGUNTAS Y RESPUESTAS 

## Acerca de

modelar un concurso de preguntas y respuestas, la intención es diseñar una solución que permita tener un banco de preguntas con diferentes opciones para una única respuesta, además cada pregunta debe estar en una categoría o un grupos de preguntas similares del mismo nivel, por cada ronda se deberá asignar un premio a conseguir, las rondas del juego son nivel que van aumentando en la medida que el jugador gana premios.

__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM para correr el proyecto de manera local. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor

Para verificar que versión tienen instalada:

> node -v
>
> npm -v

## Instrucciones

El proyecto cuenta con dos carpetas: `api` y `client`. Abrir la consola en la ruta de estas carpetas y ejecutar `npm install`. Posteriormente ejecutar `npm start` ( una terminal por cada carpeta )

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. 

Adicionalmente será necesario que creen desde psql una base de datos llamada `concurso`


#### Tecnologías usadas:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres
- [ ] Passport

## Instrucciones de uso del proyecto
Para poder jugar deberas registrarte con un 'nickname' y una contraseña, o iniciar sesión si ya estás registrado. El proyecto cuenta con una precarga de 25 preguntas (5 por cada categoría), un usuario administrador (`nickname = sebas123`, `contraseña = asd12345`) con el cual puedes inciar sesión e ingresar preguntas adicionales que estarán disponibles en el juego.

## Funcionalidades del proyecto
- Registro e inicio de sesion.
- El usuario administrador puede añadir preguntas al banco de preguntas ya existentes.
- Se inicia el juego unicamente con una sesión activa, el progreso del jugador persiste así cierre sesión.
- El juego selecciona una pregunta de forma aleatoria de acuerdo al nivel de dificultad conforme el jugador avance el nivel de dificultad se incrementa.
- Si el jugador gana (responde 5 preguntas correctamente) o si se retira voluntariamente el acumulado de la partida se suma al puntaje historico.
- Si el jugador falla en alguna pregunta pierde el acumulado del juego y se reinicia el juego.

## Cosas para mejorar
- Estilos 
- Estructura de archivos 
- Validación de datos en los formularios
- Validacion de datos en las tablas de la base de datos



