const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question("¿Qué edad tienes? ", (edad) => {
    edad = Number(edad);
  
    if (edad < 18) {
      console.log("Lo siento, eres menor de edad. No puedes entrar.");
    } else if (edad === 18) {
      console.log("Acabas de cumplir la edad mínima. ¡Bienvenido!");
    } else {
      console.log("Eres mayor de edad. ¡Adelante, puedes entrar!");
    }
  
    readline.close();
  });
  