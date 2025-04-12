const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question("¿Está enchufada la lámpara? (sí/no): ", (enchufada) => {
    if (enchufada.toLowerCase() === "sí" || enchufada.toLowerCase() === "si") {
      readline.question("¿Está fundida la bombilla? (sí/no): ", (fundida) => {
        if (fundida.toLowerCase() === "sí" || fundida.toLowerCase() === "si") {
          console.log("Debes cambiar la bombilla.");
        } else {
          console.log("Puede haber un problema eléctrico más grave.");
        }
        readline.close();
      });
    } else {
      console.log("Enchufa la lámpara.");
      readline.close();
    }
  });
  