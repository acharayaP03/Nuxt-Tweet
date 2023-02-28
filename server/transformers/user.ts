interface User {
    id: string;
    username: string,
    email: string,
    name: string,
    profileImage: string
}

/***
    @userTransformer allows us to hide any sensitive data like password field
 */
export const userTransformers = (user : User) => {

    return{
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
        profileImage: user.profileImage,
        handle: `@${user.username}`
    }
}