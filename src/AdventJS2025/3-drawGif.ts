/* En el taller de Santa hay un elfo becario que está aprendiendo a envolver regalos 🎁.

Le han pedido que envuelva cajas usando solo texto… y lo hace más o menos bien.

Le pasan dos parámetros:

size: el tamaño del regalo cuadrado
symbol: el carácter que el elfo usa para hacer el borde (cuando no se equivoca 😅)
El regalo debe cumplir:

Debe ser un cuadrado de size x size.
El interior siempre está vacío (lleno de espacios), porque el elfo "aún no sabe dibujar el relleno".
Si size < 2, devuelve una cadena vacía: el elfo lo intentó, pero se le perdió el regalo.
El resultado final debe ser un string con saltos de línea \n.

*/

export function drawGift(size: number, symbol: string): string {
  let res: string = "";
  if (size > 1) {
    for (let j = 0; j < size; j++) {
      for (let i = 0; i < size; i++) {
        if ((j > 0 && j < size - 1) && (i > 0 && i < size - 1)) {
          res += " ";
        } else {
          res += symbol;
        }
      }
      if (j < size - 1) {
        res += "\n";
      }
    }
  }

  return res;
}


