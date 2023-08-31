export interface CarModel {
    startEngine(): void;
    configure(
        brand: string,
        model: string,
        color: string,
        year: number,
        power: number,
        doors: number,
        seats: number,
    ): void
}