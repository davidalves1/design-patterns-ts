export class Client {
    constructor(public email: string) {}

    create(): void {
        console.log('🚀 ~ created', this.email)
    }

    read(): void {
        console.log('🚀 ~ readed')
    }

    update(): void {
        console.log('🚀 ~ updated', this.email)
    }

    delete(): void {
        console.log('🚀 ~ deleted')
    }
}