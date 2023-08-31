export class WrongClient {
    constructor(private email: string) {}

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

    // Other responsability
    sendEmail(): boolean {
        console.log(`🚀 ~ sending email to ${this.email}...`)
        return true;
    }
}