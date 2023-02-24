
/**
@post Request
 */

import { createUser } from "~~/server/db/users";
import { userTransformers } from "~~/server/transformers/user";

export default defineEventHandler( async (event) => {
    const body = await readBody(event);

    const { username, email, password, repeatPassword, name } = body;

    if(!username || !email || !password || !repeatPassword || !name){
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Invalid fields'
        }))
    }

    if(password !== repeatPassword){
            return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Password do not match.'
        }))
    }

    const userData = {
        username,
        email,
        password,
        name,
        profileImage: 'https://picsum.photos/200/200'
    }

    const user = await createUser(userData)
    return {
        body: userTransformers(user)
    }
})