import { Plane } from './plane.js';

export class PassengerPlane extends Plane {
    #passengers;
    #refueling;

    constructor(model, fuelSupply, fuelConsumption, passengers, refueling) {
        super(model, fuelSupply, fuelConsumption);
        this.#passengers = passengers;
        this.#refueling = refueling;
    }

    calculateFlightRange() {
        return ((this._fuelSupply + this.#refueling) / this._fuelConsumption * 100);
    }
}