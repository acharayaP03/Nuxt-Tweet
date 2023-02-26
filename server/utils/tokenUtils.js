import jwt from 'jsonwebtoken';

const generateAccessToken = (user) => {
    const config = useRuntimeConfig();

    return jwt.sign({ userId: user.id }, config.accessToken, {
        expiresIn: '10m'
    })
}

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