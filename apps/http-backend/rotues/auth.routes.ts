import { Router } from 'express'
import { prisma } from '@repo/db/client'
import { register } from '../controlllers/auth.controller'
export const authRouter = Router()

authRouter.post('/register', register)
authRouter.post('/login')
authRouter.post('/me')
