import express, { NextFunction, Request, Response } from 'express';
import fs from 'fs';
import sequelize from './models';

const app = express();

const PORT = 3000;

// connect to database
(async () => {
    try {
        await sequelize.authenticate();
        console.log('sucessfully connected to database')
    } catch (err: any) {
        console.log('error while connecting',err.message)
    }
})();

app.get('/', (req: Request, res: Response, next: NextFunction) => {

    interface User {
        name: string;
        age: number;
    }

    class Person {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }

    const user: User = new Person('John', 25);

    console.log(user);
    res.send('hello world');
})

app.listen(PORT, () => 
    console.log(`server is running on port ${PORT}`)
);