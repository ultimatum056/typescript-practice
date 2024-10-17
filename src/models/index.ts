import Sequelize from '@sequelize/core'
import { MySqlDialect } from '@sequelize/mysql'
import { User } from './user'


const sequelize = new Sequelize({
    dialect: MySqlDialect,
    host: 'localhost',
    database: 'testDb',
    user: 'root',
    password: '7878',
    port: 3306,
    // add all models here
    models: [ User]
})


export default sequelize

