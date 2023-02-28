import { prisma } from '.';

export const createTweet = (tweetData) => {
    return prisma.tweet.create({
        data: tweetData
    })
}

/**
 * @get all tweets
 * @params lets us pass flag to db so that we can access specific key from db model
 */

export const getTweets = (params) => {
    return prisma.tweet.findMany({
        ...params
    })
}
