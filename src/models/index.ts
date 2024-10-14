import Sequelize from '@sequelize/core'
import { MySqlDialect } from '@sequelize/mysql'


const sequelize = new Sequelize({
    dialect: MySqlDialect,
    host: 'localhost',
    database: 'testDb',
    user: 'root',
    password: '7878',
    port: 3306,
})


export default sequelize

