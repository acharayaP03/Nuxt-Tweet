
/**
@post Request
 */

export default defineEventHandler( async (event) => {
    const body = await readBody(event);

    const { username, email, password, repeatPassword, name } = body;

    if(!username || !email || !password || !repeatPassword || !name){
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Invalid fields'
        }))

    }
    return {
        body
    }
})