/**
 * @composables
 * @useFetchApi will used to make a request with @$fetch
 * @useAuthToken to retrieve access_token
 */

 export default (url, options = {} ) =>{
    const { useAuthToken } = useAuth();

    return $fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${useAuthToken().value}`
        }
    })
 }