const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question("Elige un color (azul, verde, rojo, amarillo o violeta): ", (color) => {
    color = color.toLowerCase();
  
    switch(color) {
      case "azul":
        console.log("El azul es como el mar, siempre que el cielo sea azul (y sea de día).");
        break;
      case "verde":
        console.log("El verde es vida, como los bosques en primavera.");
        break;
      case "rojo":
        console.log("El rojo es pasión, fuego y energía.");
        break;
      case "amarillo":
        console.log("El amarillo brilla como el sol en verano.");
        break;
      case "violeta":
        console.log("El violeta es misterio, calma y creatividad.");
        break;
      default:
        console.log("Ese color no está en la lista, ¡pero seguro que también es bonito!");
    }
  
    readline.close();
  });
  