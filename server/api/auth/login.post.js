/***
 @UserLogin 
*/
import bcrypt from 'bcrypt';
import { getUserByUsername } from '~~/server/db/users';
import { generateTokens, sendRefreshToken } from '~~/server/utils/tokenUtils';
import { userTransformers } from '~~/server/transformers/user';
import { createRefreshToken } from '~~/server/db/refreshToken';

export default defineEventHandler(async (event) =>{ 
    const body = await readBody(event);
    const { username, password } = body;

    if(!username || !password){
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Invalid fields.'
        }));
    }

    // if user is registered
    const user = await getUserByUsername(username);
    if(!user){
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Your username or password is not valid.'
        }));
    }
    // compare password
    const comparePassword = await bcrypt.compare(password, user.password)
    if(!comparePassword){
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Your username or password is not valid.'
        }));
    }
    /**
        @generateTokens 
        1.) access token
        2.) refresh token: will be saved in cookie
     */

    const { accessToken, refreshToken } = generateTokens(user)
    await createRefreshToken({
        token: refreshToken,
        userId: user.id
    })

    // http cookie only: only server will use this
    sendRefreshToken(event, refreshToken);
    
    return{
        user: userTransformers(user),
        access_token: accessToken
    }

})