import { mediaFilesTransformer } from '~/server/transformers/mediaFiles'
import { userTransformers } from '~/server/transformers/user';
import human from 'human-time';


export const tweetTransformers = (tweet)=> {

    return{
        id: tweet.id,
        text: tweet.text,
        author: !!tweet.author ? userTransformers(tweet.author) : null,
        medaiFiles: !!tweet.medaiFiles ? tweet.medaiFiles.map(mediaFilesTransformer) : [],
        replies: !!tweet.replies ? tweet.replies.map(tweetTransformers): [],
        replTo: !!tweet.replTo ? tweetTransformers(tweet.replTo) : null,
        repliesCount: !!tweet.replies ? tweet.replies.length : 0,
        postedAtHuman: human(tweet.createdAt)
    }
}