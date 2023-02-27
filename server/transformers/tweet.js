export const tweetTransformers = (tweet) => {
    return{
        id: tweet._id,
        text: tweet.text
    }
}