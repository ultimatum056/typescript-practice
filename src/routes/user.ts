import { Router, Request, Response } from "express";
import { User } from "../models/user";
import { Post } from "../models/post";
import { Person } from "../models/person";
import { InferCreationAttributes } from "@sequelize/core";
import { DrivingLicense } from "../models/drivingLicense";
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


router.post('/createPost', async (req:Request, res: Response) => {
    try {
        const posts = req.body
        const createdPost = await Post.create(posts)

        
        res.status(200).send({
            message: 'success',
            data: createdPost
        })

    } catch(err: any) {
        console.log(err)
        res.status(500).send(err.message)
    }
})


router.post('/bulkCreatePosts', async (req: Request, res: Response) => {
    try {

        const posts = req.body

        const createdPosts = await Post.bulkCreate(posts)

        res.status(200).send({
            message: 'success',
            data: createdPosts
        })

    } catch(err: any) {
        res.status(500).send(err.message)
    }
})


router.post('/createPerson', async(req,res) => {
    try {

        const p1: InferCreationAttributes<Person> = {
            fullName: 'Ak' + Math.floor(Math.random() * 90) + 10,
            personId : crypto.randomUUID()
        }

        const person = await Person.create(p1)

        await person.createDrivingLicense({
          drivingLicId: crypto.randomUUID(),
        })
        
        // person.setDrivingLicense(dl)

        res.status(200).send({
            message: 'success',
            data: person, 
        })
    } catch(err: any) {
        res.status(500).send(err.message)
    }
})


router.get('/getPersonDl', async (req,res) => {
    try {
        
     const pdl = await Person.findOne({
        where: {
            personId: 'fdfa902b-a004-4b02-aae0-a78012fefc1b'
        },
        include: [DrivingLicense]
     })
        

    const dl1 = await DrivingLicense.findOne({
        where: {
            ownerId: 'fdfa902b-a004-4b02-aae0-a78012fefc1b'
        },
        include: ['malik']
    })
     res.status(200).send({
        message: 'success',
        data: pdl, 
        data0: dl1,
    })
    } catch(err: any) {
        res.status(500).send(err.message)
    }
})
export default router

