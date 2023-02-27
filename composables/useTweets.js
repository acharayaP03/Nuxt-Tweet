export default () =>{
    const postTweet = (formData) =>{
        const form = new FormData();

        form.append('text', formData.text)

        return useFetchApi('/api/user/tweets', {
            method: 'POST',
            body: form
        })
    }

    return {
        postTweet
    }
}