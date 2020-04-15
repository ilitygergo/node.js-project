import uuid from 'uuid'
import { DataTypes, Model } from 'sequelize'
import database from './database'

const { sequelize } = database

export default class User extends Model {
    public readonly id: uuid

    public login: string

    public password: string

    public age: number

    public isDeleted: boolean
}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
        },
        login: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
        },
        isdeleted: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        tableName: 'users',
        timestamps: false,
        sequelize,
    }
)
