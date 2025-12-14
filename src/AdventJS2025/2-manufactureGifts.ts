/* La fábrica de Santa ha empezado a recibir la lista de producción de juguetes.
Cada línea indica qué juguete hay que fabricar y cuántas unidades.

Los elfos, como siempre, han metido la pata: han apuntado algunos juguetes con cantidades que no tienen sentido.

Tienes una lista de objetos con esta forma:

toy: el nombre del juguete (string)
quantity: cuántas unidades hay que fabricar (number)
Tu tarea es escribir una función que reciba esta lista y devuelva un array de strings con:

Cada juguete repetido tantas veces como indique quantity
En el mismo orden en el que aparecen en la lista original
Ignorando los juguetes con cantidades no válidas (menores o iguales a 0, o que no sean número)
*/


export function manufactureGifts(
  giftsToProduce: Array<{ toy: string, quantity: number }>
): string[] {
  // Code here
  // 1. recorrer el diccionario e en cada iteración 
  // 2. tomo el elemento toy y hago una iteracción en base el quantity
  // 3. valido si quantity es mayor a cero, es así
  // 4. Guardo los elementos en un arreglo arreglo

  const result: string[] = [];
  for (const gift of giftsToProduce) {
    if(gift.quantity > 0) {
      for( let i = 0; i < gift.quantity; i++) {
        result.push(gift.toy);
      }
    }
  }
  return result;
}