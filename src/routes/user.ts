import { Router, Request, Response } from "express";
import { User } from "../models/user";
import { Post } from "../models/post";
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
export default router

