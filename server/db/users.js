import { prisma } from ".";
import bcrypt from 'bcrypt';

export const createUser = (userData) =>{
    const user = {
        ...userData,
        password: bcrypt.hashSync(userData.password, 10)
    }
    return prisma.user.create({
        data: user
    })
}