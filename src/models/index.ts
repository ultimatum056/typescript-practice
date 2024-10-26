import Sequelize from '@sequelize/core'
import { MySqlDialect } from '@sequelize/mysql'
import { User } from './user'
import { Post } from './post'
import { env } from 'node:process';
import 'dotenv/config'
import { Person } from './person';
import { DrivingLicense } from './drivingLicense';

const sequelize = new Sequelize({
    dialect: MySqlDialect,
    host: env.MYSQL_DB_HOST,
    database: env.MYSQL_DB,
    user: env.MYSQL_USER,
    password: env.MYSQL_PASS,
    port: Number(env.MYSQL_DB_PORT),
    // not needed since mysql doesnt have concept of schema, postgres has
    // schema: 'public'   
    // add all models here
    models: [ User, Post, Person, DrivingLicense]
})

export default sequelize

