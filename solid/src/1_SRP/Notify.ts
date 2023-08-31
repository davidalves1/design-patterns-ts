import { Client } from "./Client";

export class Notify {
    constructor(private client: Client) {}

    sendEmail(): boolean {
        console.log(`🚀 ~ sending email to ${this.client.email}...`)
        return true;
    }
}