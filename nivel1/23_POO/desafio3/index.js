"use strict";
class Departamento {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Piso {
    constructor(name) {
        this.name = name;
        this.departamentos = [];
    }
    pushDepartamento(departamento) {
        this.departamentos.push(departamento);
    }
    getDepartamentos() {
        return this.departamentos;
    }
    getName() {
        return this.name;
    }
}
class Edificio {
    constructor() {
        this.pisos = [];
    }
    addPiso(piso) {
        this.pisos.push(piso);
    }
    addDepartamentoToPiso(nombreDePiso, departamento) {
        const pisoIndex = this.pisos.findIndex((piso) => piso.getName() == nombreDePiso);
        if (pisoIndex == -1) {
            throw new Error("Piso no encontrado");
        }
        this.pisos[pisoIndex].pushDepartamento(departamento);
    }
    getDepartamentosByPiso(nombreDePiso) {
        const pisoIndex = this.pisos.findIndex((piso) => piso.getName() == nombreDePiso);
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
edificio.addDepartamentoToPiso("Piso 1", new Departamento("Departamento 1 Piso 1"));
edificio.addDepartamentoToPiso("Piso 1", new Departamento("Departamento 2 Piso 1"));
edificio.addDepartamentoToPiso("Piso 2", new Departamento("Departamento 1 Piso 2"));
edificio.addDepartamentoToPiso("Piso 3", new Departamento("Departamento 1 Piso 3"));
edificio.addDepartamentoToPiso("Piso 3", new Departamento("Departamento 2 Piso 3"));
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
