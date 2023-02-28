import { defineEventHandler } from 'h3'
import { getTweetById } from '~/server/db/tweets'
import { tweetTransformers } from '~/server/transformers/tweet'

export default defineEventHandler (async (event) => {
    // @ts-ignore
    const { id } = event.context.params

    const tweet = await getTweetById(id, {
        include: {
            author: true,
            medaiFiles: true,
            replyTo: {
                include: {
                    author: true
                }
            },
            replies: {
                include: {
                    author: true,
                    replyTo: {
                        include: {
                            author: true
                        }
                    }
                }
            }
        }
    });

    return {
        tweet: tweetTransformers(tweet)
    }
})