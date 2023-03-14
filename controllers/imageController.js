import { StatusCodes } from "http-status-codes";
import path from 'path'
const __dirname = path.resolve(path.dirname(''));
import { v2 as cloudinary } from "cloudinary"
import fs from 'fs'


const uploadImage = async (req, res) => {
    const result = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
        use_filename: true,
        folder:'catch-of-the-day'
    })
    fs.unlinkSync(req.files.image.tempFilePath)
    return res.status(StatusCodes.OK).json({image:{src:result.secure_url}})
}
export { uploadImage }





// const uploadImage = async (req, res) => {
//     const postImage = req.files.image;
//     const imagePath = path.join(__dirname, './public/uploads/' + `${postImage.name}`)
//     await postImage.mv(imagePath)
//     res.status(StatusCodes.OK).json({image:{src:`/uploads/${postImage.name}`}})
// }
// export {uploadImage}