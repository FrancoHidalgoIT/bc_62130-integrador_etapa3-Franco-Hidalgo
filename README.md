## Inicialización del proyecto

```sh
touch server.js README.md .env .env.example .gitignore && mkdir controllers models middlwares data routers public && npm init -y && npm i express-validator mongoose multer cors && npm i nodemon dotenv -D
```

## Para levantar el proyecto

 1. Bajar el zip del github o drive
 2. Copiar el .env.example
 3. lo renombran a .env
 4. le agregan el puerto=8080
 5. npm i
 6. npm run dev

 
## Realizar el dump del proyecto

 ```sh
nos movemos a la carpeta donde queremos realizar el dump

cd ../

mongodump --db (nombre de la base de datos)
  ```
  

 ## Restore de la base de datos local en la remota 

 ```sh
$ mongorestore --uri "mongodb+srv://bootcamp-franco-h.fmpinrb.mongodb.net/" --username francohidalgo2016 --nsInclude bc_ecommerce.* dump
  ```