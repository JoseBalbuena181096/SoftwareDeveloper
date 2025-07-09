"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reverse_1 = __importDefault(require("lodash/reverse"));
class Product {
    constructor(price, name) {
        this.price = price;
        this.name = name;
    }
    getPrice() {
        return this.price;
    }
}
class ProductoElectronico extends Product {
    constructor(price, name, marca, useBatteries) {
        super(price, name);
        this.useBatteries = false;
        this.apps = [];
        this.marca = marca;
        this.useBatteries = useBatteries;
    }
    setUseBatteries(useBatteries) {
        this.useBatteries = useBatteries;
    }
    setApps(apps) {
        this.apps = apps;
    }
    getAppsReverse() {
        return (0, reverse_1.default)(this.apps);
    }
}
function main() {
    const producto = new ProductoElectronico(100, "iPhone", "Apple", true);
    producto.setApps(["App1", "App2", "App3"]);
    console.log(producto);
    console.log(producto.getAppsReverse());
}
main();
