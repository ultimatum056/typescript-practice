import { Router, Request, Response } from "express";
import sequelize from "../models";
import { User } from "../models/user";
const router = Router();


router.get('/createUser', async (req: Request,res: Response) => {
    try {
        req.body = {}

        const user: User = await User.create({
            firstName: 'ashish',
            lastName: 'kothari'
        })

        console.log('---user', user)

        res.status(200).send({
            message: 'success',
            data: {}
        })
    } catch (err: any) {
        res.status(500).send(err.message)
    }
})

export default router

