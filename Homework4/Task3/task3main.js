import { Plane } from './planes/plane.js';
import { PassengerPlane } from './planes/passengerPlane.js';
import { TransportPlane } from './planes/transportPlane.js';
import { WarPlane } from './planes/warPlane.js';

console.log("Unsorted range of planes:");
const plane1 = new TransportPlane("An-225 Mriya", 105000, 5000, 500, 300000);
console.log("An-225 Mriya: ", plane1.calculateFlightRange());

const plane2 = new PassengerPlane("Boeing-747", 193000, 2500, 410, 90000);
console.log("Boeing-747:", plane2.calculateFlightRange());

const plane3 = new WarPlane("F-22 Raptor", 8200, 320, 20, 1.2);
console.log("F-22 Raptor:", plane3.calculateFlightRange());

console.log("Sorted range of planes:");
const planesArray = [plane1, plane2, plane3];
Plane.sortFlightRange(planesArray);
