class Departamento {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

class Piso {
  private name: string;
  private departamentos: Departamento[];
  constructor(name: string) {
    this.name = name;
    this.departamentos = [];
  }

  public pushDepartamento(departamento: Departamento) {
    this.departamentos.push(departamento);
  }

  public getDepartamentos(): Departamento[] {
    return this.departamentos;
  }

  public getName(): string {
    return this.name;
  }
}

class Edificio {
  private pisos: Piso[];
  constructor() {
    this.pisos = [];
  }

  public addPiso(piso: Piso) {
    this.pisos.push(piso);
  }

  public addDepartamentoToPiso(
    nombreDePiso: string,
    departamento: Departamento
  ) {
    const pisoIndex = this.pisos.findIndex(
      (piso) => piso.getName() == nombreDePiso
    );
    if (pisoIndex == -1) {
      throw new Error("Piso no encontrado");
    }
    this.pisos[pisoIndex].pushDepartamento(departamento);
  }

  public getDepartamentosByPiso(nombreDePiso: string): Departamento[] {
    const pisoIndex = this.pisos.findIndex(
      (piso) => piso.getName() == nombreDePiso
    );
    if (pisoIndex == -1) {
      throw new Error("Piso no encontrado");
    }
    return this.pisos[pisoIndex].getDepartamentos();
  }
}

const edificio = new Edificio();

edificio.addPiso(new Piso("Piso 1"));
edificio.addPiso(new Piso("Piso 2"));
edificio.addPiso(new Piso("Piso 3"));

edificio.addDepartamentoToPiso(
  "Piso 1",
  new Departamento("Departamento 1 Piso 1")
);
edificio.addDepartamentoToPiso(
  "Piso 1",
  new Departamento("Departamento 2 Piso 1")
);
edificio.addDepartamentoToPiso(
  "Piso 2",
  new Departamento("Departamento 1 Piso 2")
);
edificio.addDepartamentoToPiso(
  "Piso 3",
  new Departamento("Departamento 1 Piso 3")
);
edificio.addDepartamentoToPiso(
  "Piso 3",
  new Departamento("Departamento 2 Piso 3")
);

console.log("Departamentos de Piso 1:");
edificio
  .getDepartamentosByPiso("Piso 1")
  .forEach((departamento) => console.log(departamento.getName()));

console.log("Departamentos de Piso 2:");
edificio
  .getDepartamentosByPiso("Piso 2")
  .forEach((departamento) => console.log(departamento.getName()));

console.log("Departamentos de Piso 3:");
edificio
  .getDepartamentosByPiso("Piso 3")
  .forEach((departamento) => console.log(departamento.getName()));
