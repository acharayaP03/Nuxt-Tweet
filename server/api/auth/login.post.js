/***
 @UserLogin 
*/
import { getUserByUsername } from '~~/server/db/users';
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
    
    // generate token


    return{
        user
    }

})