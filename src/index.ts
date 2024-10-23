import express, { NextFunction, Request, Response } from 'express';
import sequelize from './models';
import userRouter from "./routes/user"
import morgan from "morgan"

const app = express();

app.use(morgan('tiny'))
app.use(express.json({
    limit: '5mb'
}))

const PORT = 3000;

// connect to database
(async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('sucessfully connected to database')
    } catch (err: any) {
        console.log('error while connecting', err.message)
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


app.use('/user', userRouter)

app.listen(PORT, () =>
    console.log(`server is running on port ${PORT}`)
);