import jwt from 'jsonwebtoken';

/**
 * 
 * @param {*} user  
 * @returns we will generate jwt access token based on user that is currently logged in
 */
const generateAccessToken = (user) => {
    const config = useRuntimeConfig();

    return jwt.sign({ userId: user.id }, config.accessToken, {
        expiresIn: '10m'
    })
}

export const decodeAccessToken = (token) =>{
    const config = useRuntimeConfig();

    try {
        return jwt.verify(token, config.accessToken)
    } catch (error) {
        return null
    }
}

/**
 * 
 * @param {*} user  
 * @returns refresh token which will be saved in a cookie which only server can have access to it via http only
 */
const generateRefreshToken = (user) => {
    const config = useRuntimeConfig();

    return jwt.sign({ userId: user.id }, config.refreshToken, {
        expiresIn: '4h'
    })
}

export const generateTokens = (user) => {
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    return {
        accessToken,
        refreshToken
    }
}
/**
 * 
 * @param {*} response response object that contains refresh token
 * @param {*} token refresh token key 
 * @options any options, in this case we have @httpOnly and @sameSite which are ture 
 */
export const sendRefreshToken = (response, token) => {
   
    setCookie(response, "refresh_token", token, {
        httpOnly: true,
        sameSite: true
    })
}

export const decodeRefreshToken = (token) =>{
    const config = useRuntimeConfig();

    try {
        return jwt.verify(token, config.refreshToken)
    } catch (error) {
        return null
    }
}