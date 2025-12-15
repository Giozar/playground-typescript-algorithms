/*

Los elfos han encontrado el código cifrado que protege la puerta del taller de Santa 🔐. El PIN tiene 4 dígitos, y está escondido dentro de bloques como estos:

[1++][2-][3+][<]
Escribe una función que descifre el PIN a partir del código.

El código está formado por bloques entre corchetes [...] y cada bloque genera un dígito del PIN.

Un bloque normal tiene la forma [nOP...], donde n es un número (0-9) y después puede haber una lista de operaciones (opcionales).

Las operaciones se aplican en orden al número y son:

+ suma 1
- resta 1
El resultado siempre es un dígito (aritmética mod 10), por ejemplo 9 + 1 → 0 y 0 - 1 → 9.

También existe el bloque especial [<], que repite el dígito del bloque anterior.

Si al final hay menos de 4 dígitos, se debe devolver null.

🧩 Ejemplos
decodeSantaPin('[1++][2-][3+][<]')
// "3144"

decodeSantaPin('[9+][0-][4][<]')
// "0944"

decodeSantaPin('[1+][2-]')
// null (solo 2 dígitos)

*/


function decodeSantaPin(code: string): string | null {
  let isClosed = 0;
  let sum = 0;
  let solved: string | null = "";
  for (let i = 0; i < code.length; i++) {
    const val = parseInt(code[i] as string, 10);
    if (code[i] == "[") {
      isClosed += 1;
      continue;
    }

    if (isNaN(val)) {
      if (code[i] == "]") {
        isClosed -= 1;
        if (i == code.length ) {
          isClosed = 0;
          continue;
        }
      }

      if (code[i] == "+") {
        sum += 1;
        sum %= 10;
        continue;
      }

      if (code[i] == "-") {
        if (sum == 0) {
          sum = 9;
          continue;
        } else {
          sum -= 1;
          sum %= 10;
          continue;
        }
      }

      if (code[i] == "<") {
        if (solved && solved.length > 0) {
          solved += solved[solved.length - 1] + "";
          sum = 0;
        }
        continue;
      }

      if (isClosed == 0) {
        if (code[i] == "]") {
          if (code[i - 1] == "<") {
            continue;
          }
        }
        solved += sum + "";
        sum = 0;
      }
    } else {
      sum += val;
      sum %= 10;
    }
  }

  if (solved && solved?.length < 3) {
    solved = null;
  }

  return solved;
}

console.log(decodeSantaPin("[1++][2-][3+][<]"));
console.log(decodeSantaPin("[9+][0-][4][<]"));
console.log(decodeSantaPin("[1+][2-]"));
console.log(decodeSantaPin("[3+][7+][<][<]"));
