import { Client } from './Client'
import { Notify } from './Notify'

export const SRP = () => {
    const client = new Client('alves.david@outlook.com')
    const notify = new Notify(client)

    notify.sendEmail()
}