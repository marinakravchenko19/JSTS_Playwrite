export class Plane {
    _model;
    _fuelSupply;
    _fuelConsumption;

    constructor(model, fuelSupply, fuelConsumption) {
        this._model = model;
        this._fuelSupply = fuelSupply;
        this._fuelConsumption = fuelConsumption;
    }

    calculateFlightRange() {
        return (this._fuelSupply / this._fuelConsumption * 100);
    }

    static sortFlightRange(planesArray = []) {
        planesArray.sort((a, b) => a.calculateFlightRange() - b.calculateFlightRange());
        planesArray.forEach((plane) => {
            console.log(`${plane._model}: ${plane.calculateFlightRange()}`);
        });
    }
}