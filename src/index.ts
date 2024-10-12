import express, { NextFunction, Request, Response } from 'express';
import fs from 'fs';

const app = express();

const PORT = 3000;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('hello world');
})

app.listen(PORT, () => 
    console.log(`server is running on port ${PORT}`)
);