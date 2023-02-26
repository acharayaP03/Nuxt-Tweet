import {userTransformers} from "~~/server/transformers/user"

export default defineEventHandler(async (event) =>{
    return {
        user: userTransformers(event.context.auth?.user)
    }
})