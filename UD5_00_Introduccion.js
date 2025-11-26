class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

class Cliente extends Persona {
  constructor(nombre, edad, saldo) {
    super(nombre, edad);
    this.saldo = saldo;
  }

  consultaSaldo() {
    console.log(`Mi saldo es de ${this.saldo} euros.`);
  }

  consultaDatos() {
    this.saludar();
    this.consultaSaldo();
  }
}

cliente1 = new Cliente("Ana", 28, 1500);

cliente1.consultaDatos();
