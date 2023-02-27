import { createRequire } from 'module'
import { decodeAccessToken } from '../utils/tokenUtils'
import {getUserById} from '../db/users';
/**
 * UrlPattern module will not work if we import it, hence we will first import createRequire
 * then use require to import it like we do it on CommonJs module
 */
const require = createRequire(import.meta.url);

const UrlPattern = require('url-pattern')

export default defineEventHandler( async (event) =>{

    const endpoints = [
        '/api/auth/user'
    ];

    // return true or flase if url matches
    const handleMatchUrl = endpoints.some( endpoint => {
        const pattern = new UrlPattern(endpoint);
        return pattern.match(event.node.req.url)
    })

    if(!handleMatchUrl) return;
    
    const token = event.node.req.headers.authorization?.split(' ').at(1);

    /**
     * retrieve access token when user signs in, 
     @decodeAccessToken is a util functions 
     */
    const decoded = decodeAccessToken(token);
    if(!decoded){
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Unauthorize access.'
        }))
    }

    try {
        const userId = decoded.userId;
        const user = await getUserById(userId);

        /** 
        * once we have dedoced userId, then we can retrieve our user from @getUserById 
        */
        
        event.context.auth = { user }
    } catch (error) {
        return
    }

})