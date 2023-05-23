import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import { User } from "../models/user.model";
import jwt from 'jsonwebtoken'

export const newUser = async (req:Request, res:Response) => {
    
    const {username, password} = req.body;

    const hashedPassword = await bcrypt.hash(password,10);

    const checkUser = await User.findOne({where: {username:username}});

    if (checkUser) {
        
        return res.status(400).json({
            msg:`The user ${username} already exists`
        })
    }

    try {
        
        await User.create({
            username: username,
            password: hashedPassword
        });
       
        res.json({
            message:`User ${username} created successfully`, 
        });

    } catch (error) {
        
        res.status(400).json({
            msg:'Could not create user',
            error: error,
        })
    }
}

export const login = async (req:Request, res:Response) => {

    const {username, password} = req.body;

    const checkUser:any = await User.findOne({where: {username:username}});

    if (!checkUser) {
        
        return res.status(400).json({
            msg:`There is no user named ${username}`
        })
    }

    const validPassword = await bcrypt.compare(password, checkUser.password);

    if (!validPassword) {
        
        return res.status(400).json({
            msg:`Invalid Password`
        })
    }

    const token = jwt.sign({username:username},process.env.SECRET_KEY || 'asshole');

    res.json(token);

}