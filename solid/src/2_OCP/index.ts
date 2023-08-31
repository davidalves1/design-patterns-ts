import { TypeVehicle } from "./TypeVehicle";
import { Car } from "./Car";
import { Motorcycle } from "./Motorcycle";

export const OCP = () => {
    const typeVehicle = {
        [TypeVehicle.CAR]: new Car('Ford', 'Ka', 'Branco', 2017, 1.0, 4, 5),
        [TypeVehicle.MOTORCYCLE]: new Motorcycle('Honda', 'CB', 'Preta', 2022, 600)
    }
    
    typeVehicle[TypeVehicle.CAR]
    typeVehicle[TypeVehicle.MOTORCYCLE]
}
