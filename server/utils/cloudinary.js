import { v2 as _cloudinary } from 'cloudinary';

const cloudinary = () => {
    const config = useRuntimeConfig();
    // cloudinary credentials
    _cloudinary.config({
        cloud_name: config.cloudinaryCloudName,
        api_key: config.cloudinaryApiKey,
        api_secret: config.cloudinaryApiSecret,
        secure: true
    });

    return _cloudinary
}
/**
 * 
 * @returns images or media files
 */

export const uploadToCloudinary = (images) => {
    return new Promise((resolve, reject) =>{
        //process media files 
        cloudinary().uploader.upload(images, (error, data) => {
            if(error) reject(error);

            resolve(data)
        })
    })
}