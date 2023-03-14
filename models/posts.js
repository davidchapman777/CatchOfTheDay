import mongoose from 'mongoose'



const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'please provide title'],
        minlength: 3,
        maxlength: 100,
    },
    content: {
        type: String,
        required: [true, 'please provide text'],
        minlength: 3,
        maxlength: 500,
    },
    image:{
        type:String
    },
    fishType: {
        type: String,
        enum: ['bass', 'trout', 'catfish', 'salmon', 'freshwater', 'saltwater'],
        default:'bass'
    },
    fishSize: {
        type: String,
        enum: ['1lb', '2lb', '3lb', '4lb', '5lb', '6lb', '7lb', '8lb', '9lb', '10lb', '11lb', '12lb', '13lb', '14lb'],
        default:'1lb'
    },
    catchLocation: {
        type: String,
        default: 'my city',
        required: true
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required:[true,'Please provide user']
    },
},
{ timestamps: true },

)

export default mongoose.model('Post',PostSchema)