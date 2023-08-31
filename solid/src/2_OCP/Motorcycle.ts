import { MotorcycleModel } from "./models/Motorcycle.model";

export class Motorcycle implements MotorcycleModel {
    constructor(
        private brand: string, 
        private model: string, 
        private color: string, 
        private year: number, 
        private power: number, 
    ) {
        this.configure(brand, model, color, year, power)
    }

    startEngine(): void {
        console.log(`🚀 ~ Ligando os motores: ${this.brand} ${this.model} ${this.year}, cor ${this.color}, motor ${this.power}cc`)
    }

    configure(
        brand: string, 
        model: string, 
        color: string, 
        year: number, 
        power: number, 
    ): void {
        this.brand = brand; 
        this.model = model; 
        this.color = color; 
        this.year = year; 
        this.power = power; 
        
        this.startEngine()
    }

}