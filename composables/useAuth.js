/**
 * @useState local state where we will preserve our token.
 * @return 
 * @setToken
 * @setUser
 * @login 
 * @getUser
 * @initAuth
 */

export default () => {
    const useAuthToken = () => useState('auth_token');
    const useAuthUser = () => useState('auth_user');

    const setToken = (newToken) => {
        const authToken = useAuthToken();
        authToken.value = newToken;
    }

    const setUser = (newUser) => {
        const authUser = useAuthUser();
        authUser.value = newUser;
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

    const initAuth = () => {
        return new Promise( async (resolve, reject) =>{
            try {
                await refreshToken();

                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }
    return {
        login,
        useAuthToken,
        useAuthUser,
        initAuth
    }
}