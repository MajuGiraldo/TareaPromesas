# TareaPromesas

## Caso de Zara

Implementamos la promesa para el caso de una tienda de ropa virtual, en este caso Zara. Ya que cuando un usuario quiere comprar una prenda de ropa o un artículo
en general en línea, tiene que pasar por un proceso de verificación de la disponibilidad del producto respecto al stock. En este caso queremos comprar una blusa, para esto creamos dos métodos constantes: "comprarRopa" y "pagarRopa", en este último método validamos el stock de la prenda, si este valor es mayor que uno, lanza un mensaje 
afirmando que se puede continuar con la compra. En el caso que el valor del stock sea igual a cero, lanza un mensaje denegando el proceso de compra, la validación del
inventario tiene un SetTimeOut de 5000, es decir, cuenta con solo este tiempo para emitir una respuesta a la petición. Por último, en el método "comparRopa" se llama el 
método "pagarRopa" en donde puede enviar una respuesta afirmativa a la compra o arrojar una excepción si no hay stock. 
