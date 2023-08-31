export interface MotorcycleModel {
    startEngine(): void;
    configure(
        brand: string,
        model: string,
        color: string,
        year: number,
        power: number,
    ): void
}