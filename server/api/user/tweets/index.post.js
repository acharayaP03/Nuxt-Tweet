
import formidable from 'formidable';
import { createTweet } from '~~/server/db/tweets';
import {tweetTransformers} from '~/server/transformers/tweet';
import { createMediaFile } from '~~/server/db/mediaFiles';

export default defineEventHandler (async (event) =>{

    // in order to get multipart form data, we will use package called formidable.
    const form = formidable();
    // since it returns promise, we will use Promise.
    const response = await new Promise((resolve, reject) =>{
        form.parse(event.req, (err, fields, files) => {
            if(err) reject(err);

            resolve({ fields, files })
        })
    });

    const { fields, files } = response;
    // lets get the user that posted this tweet.
    const userId = event.context?.auth?.user.id;

    const tweetData = {
        text: fields.text,
        authorId: userId
    }

    // check if there is any reply to the tweet.
    const replyTo = fields.replyTo;
    if(replyTo && replyTo !== 'null' && replyTo !== 'undefined'){
        tweetData.replyToId = replyTo;
    }

    // create a tweet method that creates a tweet inside the db.
    const tweet = await createTweet(tweetData);

    const filePromises = Object.keys(files).map(async key => {
        const file = files[key];

        const cloudinaryResource = await uploadToCloudinary(file.filepath);

        return createMediaFile({
            url: cloudinaryResource.secure_url,
            providerPublicId: cloudinaryResource.public_id,
            userId: userId,
            tweetId: tweet.id
        })
    })

    await Promise.all(filePromises)

    return {
        tweet: tweetTransformers(tweetData)
    }
})