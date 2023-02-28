import { getTweets } from '~/server/db/tweets'
import { defineEventHandler } from 'h3'
import { tweetTransformers } from '~/server/transformers/tweet'

export default defineEventHandler (async (event) => {

    const tweets = await getTweets({
        include: {
            author: true,
            medaiFiles: true,
            replies: {
                include: {
                    author: true
                }
            },
            replyTo:{
                include: {
                    author: true
                }
            }
        },
        orderBy :[
            {
                createdAt: 'desc'
            }
        ]
    })
    return {
        tweet: tweets.map(tweetTransformers)
    }
})