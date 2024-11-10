import { Plane } from './plane.js';

export class WarPlane extends Plane {
    #missiles;
    #aerodynamicsKoef;

    constructor(model, fuelSupply, fuelConsumption, missiles, aerodynamicsKoef) {
        super(model, fuelSupply, fuelConsumption);
        this.#missiles = missiles;
        this.#aerodynamicsKoef = aerodynamicsKoef;
    }

    calculateFlightRange() {
        return (this._fuelSupply / this._fuelConsumption * 100) * this.#aerodynamicsKoef;
    }
}