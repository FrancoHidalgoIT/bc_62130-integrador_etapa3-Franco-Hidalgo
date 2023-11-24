# TOMANDO NOTAS

## MongoDB - ConEmu
```sh
Algunos comandos: 
show dbs = Muestra todas las bases de datos creadas
show collections = Muestra todas las colecciones creadas
db.[colección].find() = Busca y lista todos los productos que se crearon
db.[colección].insertMany() = Para crear varios productos
db.[colección].inserOne() = Para crear UN producto
db.[colección].drop() = Elimina los productos de la colección que se creó

```

## ¿Cómo actualizar una versión de alguna libreria y resolver el problema de vulnerabilidades? 

```sh
Si cuando instalamos los node modules, al finalizar nos figura:

// 3 vulnerabilities (1 low, 1 moderate, 1 critical) // 
Este error se debe a que debemos actualizar nuestras dependencias, pero, cuidadosamente hay que realizar un backup de todo el proyecto que hemos realizado ya que se podría crushear el mismo a la hora de levantarlo. 

[npm outdated]: Nos muestra un listado de las dependencias:

Package                      Current   Wanted   Latest  Location                                  Depended by
@types/react                 18.2.21  18.2.37  18.2.37  node_modules/@types/react                 front

utilizando npm i @types/react@'y coloco la versión aquí'
```


```sh
mongorestore --uri "mongodb+srv://bootcamp-franco-h.fmpinrb.mongodb.net/" --apiVersion 1 --username francohidalgo2016 --db bc_ecommerce dump
```

