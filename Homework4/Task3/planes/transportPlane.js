import { Plane } from './plane.js';

export class TransportPlane extends Plane {
    #cargo;
    #addTank;

    constructor(model, fuelSupply, fuelConsumption, cargo, addTank) {
        super(model, fuelSupply, fuelConsumption);
        this.#cargo = cargo;
        this.#addTank = addTank;
    }

    calculateFlightRange() {
        return ((this._fuelSupply + this.#addTank) / this._fuelConsumption * 100);
    }
}