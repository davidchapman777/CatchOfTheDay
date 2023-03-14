import express from "express";
const router =express.Router()
import { register, login, updateUser } from "../controllers/authController.js";
import authenticateUser from '../middleware/auth.js'
import rateLimiter from 'express-rate-limit'
import { uploadImage } from '../controllers/imageController.js';

const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 10, 
    message:'too many requests at this time, wait 15 minutes fisherman'
})

router.route('/register').post(apiLimiter, register)
router.route('/uploads').patch(uploadImage)

router.route('/login').post(apiLimiter, login)
router.route('/updateUser').patch(authenticateUser,updateUser)

export default router