import Sequelize from '@sequelize/core'
import { MySqlDialect } from '@sequelize/mysql'
import { User } from './user'
import { Post } from './post'


const sequelize = new Sequelize({
    dialect: MySqlDialect,
    host: 'localhost',
    database: 'testDb',
    user: 'root',
    password: '7878',
    port: 3306,
    // not needed since mysql doesnt have concept of schema, postgres has
    // schema: 'public'   
    // add all models here
    models: [ User, Post]
})

export default sequelize

