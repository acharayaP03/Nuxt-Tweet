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

    return {
        postTweet
    }
}