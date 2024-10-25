import Sequelize from '@sequelize/core'
import { MySqlDialect } from '@sequelize/mysql'
import { User } from './user'
import { Post } from './post'
import { env } from 'node:process';

const sequelize = new Sequelize({
    dialect: MySqlDialect,
    host: env.MYSQL_DB_HOST,
    database: env.MYSQL_DB,
    user: env.MYSQL_USER,
    password: env.MYSQL_PASS,
    port: env.MYSQL_DB_PORT,
    // not needed since mysql doesnt have concept of schema, postgres has
    // schema: 'public'   
    // add all models here
    models: [ User, Post]
})

export default sequelize

