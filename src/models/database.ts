import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('postgres://admin:admin@database:5432/test')

const connect = (): void => {
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.')
        })
        .catch((err: Error) => {
            console.error('Unable to connect to the database:', err)
        })
}

export default {
    sequelize,
    connect,
}
