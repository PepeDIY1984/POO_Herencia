class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  saludar() {
    return `Hola que tal ${this.nombre} ${this.apellido}`;
  }
}

class Cliente extends Persona {
  constructor(nombre, apellido, telefono, saldo) {
    super(nombre, apellido);

    this.telefono = telefono;
    this.saldo = saldo;
  }

  saludar() {
    return `${super.saludar()} y mi saldo es: ${this.saldo}`;
  }

  getSaldo() {
    return saldo;
  }
}

const pedro = new Persona("Pedro", "Garcia");
console.log(pedro.saludar());

const pepe = new Cliente("Pepe", "Lopez", "963-66-66-66", 400);
console.log(pepe.saludar());

const maria = new Cliente("Maria", "Garcia", "963-55-55-55", 600);
console.log(maria.saludar());
