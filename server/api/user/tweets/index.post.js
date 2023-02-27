
import formidable from 'formidable';
import { createTweet } from '~~/server/db/tweets';
import {tweetTransformers} from '~~/server/transformers/tweet';
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

    // create a tweet method that creates a tweet inside the db.
    const tweet = await createTweet(tweetData);

    return {
        tweet: tweetTransformers(tweetData)
    }
})