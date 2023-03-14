import express from 'express'
const router = express.Router()

import {
    createPost,
    getAllPosts,
    updatePost,
    deletePost,
    showStats,
} from "../controllers/postsController.js";
import { uploadImage } from '../controllers/imageController.js';
router.route('/').post(createPost).get(getAllPosts)
router.route('/uploads').post(uploadImage)
router.route('/stats').get(showStats)
router.route('/:id').delete(deletePost).patch(updatePost)


export default router;