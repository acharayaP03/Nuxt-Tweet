
export interface MediaFiles {
    id: string | number,
    url: string
}
export const mediaFilesTransformer  = (mediaFiles: MediaFiles) : MediaFiles =>{

    return {
        id: mediaFiles.id,
        url: mediaFiles.url
    }
}