import useFetchApi from '~/composables/useFetchApi'

export default () =>{
    const postTweet = (formData) =>{
        const form = new FormData();

        formData.mediaFiles.forEach((mediaFile, index) => {
            form.append('media_file_' + index, mediaFile)
        });
        form.append('text', formData.text)
        

        return useFetchApi('/api/user/tweets', {
            method: 'POST',
            body: form
        })
    }

    /**
     * @get tweets
     */

    const getAllTweets = () => {
        return new Promise(async (resolve, reject) =>{
            try{
                const tweets = await useFetchApi('/api/tweets', {
                    method: 'GET'
                });
                console.log('UseTweets: ',tweets)
                resolve(tweets);
            } catch (error){
                reject(error)
            }
        })
    }
    return {
        postTweet,
        getAllTweets
    }
}