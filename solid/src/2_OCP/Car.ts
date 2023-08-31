import { CarModel } from "./models/Car.model";

export class Car implements CarModel {
    constructor(
        private brand: string, 
        private model: string, 
        private color: string, 
        private year: number, 
        private power: number, 
        private doors: number, 
        private seats: number
    ) {
        this.configure(brand, model, color, year, power, doors, seats)
    }

    startEngine(): void {
        console.log(`🚀 ~ Ligando os motores: ${this.brand} ${this.model} ${this.year}, cor ${this.color}, motor ${this.power}, ${this.doors} portas e ${this.seats} lugares`)
    }
    configure(
        brand: string, 
        model: string, 
        color: string, 
        year: number, 
        power: number,  
        doors: number, 
        seats: number
    ): void {
        this.brand = brand; 
        this.model = model; 
        this.color = color; 
        this.year = year; 
        this.power = power;
        this.doors = doors;
        this.seats = seats;

        this.startEngine()
    }

}