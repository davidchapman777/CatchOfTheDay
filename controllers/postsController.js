import Post from '../models/posts.js'
import { StatusCodes } from 'http-status-codes'
import {BadRequestError, NotFoundError} from '../errors/index.js'
import checkPermissions from '../utils/checkPermission.js';
import mongoose from 'mongoose'
import moment from 'moment'

const createPost = async (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        throw new BadRequestError('Please provide all values')
    }
    req.body.createdBy = req.user.userId;
    const post = await Post.create(req.body)
    res.status(StatusCodes.CREATED).json({post})
}


const getAllPosts = async (req, res) => {
    const { fishType, fishSize, sort, search } = req.query;
    const queryObject = {
        createdBy: req.user.userId
    }
    if (fishType && fishType !== 'all') {
        queryObject.fishType=fishType
    }
    if (fishSize && fishSize !== 'all') {
        queryObject.fishSize=fishSize
    }
    if (search) {
       queryObject.title={$regex:search, $options:'i'}
    }
    let result = Post.find(queryObject)
    if (sort === 'latest') {
        result=result.sort('-createdAt')
    }
    if (sort === 'oldest') {
        result=result.sort('createdAt')
    }
    if (sort === 'a-z') {
        result=result.sort('fishType')
    }
    if (sort === 'z-a') {
        result=result.sort('-fishType')
    }
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page -1) * limit
    result = result.skip(skip).limit(limit)
    const posts = await result
    const totalPosts = await Post.countDocuments(queryObject)
    const numOfPages=Math.ceil(totalPosts/limit)
    res.status(StatusCodes.OK).json({posts,totalPosts, numOfPages})
}

const updatePost = async (req, res) => {
    const { id: postId } = req.params;
    const { title, content } = req.body;
    if (!title, !content) {
        throw new BadRequestError('please provide all values')
    }
    const post = await Post.findOne({ _id: postId })
    if (!post) {
        throw new NotFoundError(`no post with id :${postId}`)
    }

    checkPermissions(req.user, post.createdBy)

    const updatedPost = await Post.findOneAndUpdate({ _id: postId }, req.body, { new: true, runValidators: true })
    res.status(StatusCodes.OK).json({updatedPost})
}
const deletePost = async (req, res) => {
    const { id: postId } = req.params
    const post = await Post.findOne({ _id: postId })
    if (!post) {
        throw new NotFoundError(`no post with id :${postId}`)
    }
    checkPermissions(req.user, post.createdBy)
    await post.remove()
    res.status(StatusCodes.OK).json({msg:'success. post deleted.'})
}
const showStats = async (req, res) => {
    let stats = await Post.aggregate([
        { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
        {$group:{_id:'$fishType', count:{$sum:1}}}
    ])
    stats = stats.reduce((acc, curr) => {
        const { _id: title, count } = curr;
        acc[title] = count;
        return acc
    }, {})
    const defaultStats = {
        salmon: stats.salmon || 0,
        trout: stats.trout || 0,
        catfish: stats.catfish || 0,
        bass: stats.bass || 0,
        saltwater: stats.saltwater || 0,
        freshwater: stats.freshwater || 0,
    }
    let monthlyCatches = await Post.aggregate([
        { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
        {
            $group: {
                _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
                count: { $sum: 1 }
            }
        },
        { $sort: { '_id.year': -1, '_id.month': -1 } },
        {$limit:6}
    ])
    monthlyCatches = monthlyCatches.map((item) => {
        const {
            _id:{year, month},count
        } = item
        const date = moment()
            .month(month - 1)
            .year(year)
            .format('MMM Y')
        return {date, count}
    }).reverse()
    res.status(StatusCodes.OK).json({defaultStats, monthlyCatches})
}

export {
    createPost,
    getAllPosts,
    updatePost,
    deletePost,
    showStats,
    
}