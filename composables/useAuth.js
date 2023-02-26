/**
 * @useState local state where we will preserve our token.
 * @return 
 * @setToken helper method to save access token
 * @setUser helper method to save user
 * @setLoading helper method to set loading state
 * @login 
 * @getUser
 * @refreshToken fetch refresh token inorder to save it to cookie
 * @initAuth
 */

export default () => {
    const useAuthToken = () => useState('auth_token');
    const useAuthUser = () => useState('auth_user');
    const useAuthLoading = () => useState('auth_loading',  () => true)

    const setToken = (newToken) => {
        const authToken = useAuthToken();
        authToken.value = newToken;
    }

    const setUser = (newUser) => {
        const authUser = useAuthUser();
        authUser.value = newUser;
    }

    const setLoading = (value) => {
        const loading = useAuthLoading();
        loading.value = value;
    }


    const login = ({ username, password }) => {
        return new Promise(async (resolve, reject) =>{
            try {
                const data = await $fetch('/api/auth/login',{
                    method: 'POST',
                    body: {
                        username,
                        password
                    }
                })

                setToken(data.access_token);
                setUser(data.user)
                
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    const refreshToken = () =>{
        return new Promise( async (resolve, reject) =>{
            try {
                const data = $fetch('/api/auth/refresh')
                setToken(data.access_token)

                resolve(true)
            } catch (error) {
                reject(error);
            }
        })
    }

    const getUser = () =>{
        return new Promise( async (resolve, reject) =>{
            try {
                const data = useFetchApi('/api/auth/user')
                setUser(data.user)

                resolve(true)
            } catch (error) {
                reject(error);
            }
        })
    }

    /**
     * this function will prevent user from loging in every time they refresh page.
     * @returns resolve promise
     */
    const initAuth = () => {
        return new Promise( async (resolve, reject) =>{
            setLoading(true)
            try {
                await refreshToken();
                await getUser()

                resolve(true)
            } catch (error) {
                reject(error)
            }finally {
                setLoading(false)
            }
        })
    }


    return {
        login,
        useAuthToken,
        useAuthUser,
        initAuth,
        useAuthLoading
    }
}