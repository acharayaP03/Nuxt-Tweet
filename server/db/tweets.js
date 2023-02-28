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


/**
 * @getTweetById find tweet by id,
 * @params is and extra informatin that we need to pass in order to retrieve more info on tweet,
 * inorder to safely perform this function, we need to pass ...params.where, so that 'where' is not overrided.
 */

export const getTweetById = (id, params = {}) =>{
    return prisma.tweet.findUnique({
        ...params,
        where: {
            ...params.where,
            id
        },

    })
}