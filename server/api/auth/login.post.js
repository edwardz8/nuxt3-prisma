import { getUserByUsername } from "../../db/users"
import bcrypt from 'bcrypt'
import { generateTokens, sendRefreshToken } from "../../utils/jwt.js"
import { userTransformer } from '~~/server/transformers/user'
import { createRefreshToken } from "~~/server/db/refreshTokens"
import { sendError } from 'h3'

export default defineEventHandler(async (event) => {
    const body = await useBody(event)

    const { username, password } = body 

    if (!username || !password) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Invalid params'
        }))
    }

    const user = await getUserByUsername(username)

    if (!user) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Username or password is invalid'
        }))
    }

    // compare passwords 
    const doesThePasswordMatch = await bcrypt.compare(password, user.password)

    // generate tokens 
    const { accessToken, refreshToken } = generateTokens(user)

    if (!doesThePasswordMatch) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Username or password is invalid'
        }))
    }

    await createRefreshToken({
        token: refreshToken, 
        userId: user.id 
    })

    sendRefreshToken(event, refreshToken)
    
    return {
        access_token: accessToken, user: userTransformer(user),
    }

})