import express from 'express'
import { authRouter } from './rotues/auth.routes'
const app = express()

app.use(express.json())

// defining the routes
app.use('/api/v1/auth', authRouter)

app.listen(4000, () => {
  console.log('code is running on port ', 4000)
})
