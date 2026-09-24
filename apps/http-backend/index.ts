import express from "express"
const app = express()

app.use(express.json())


// defining the routes
app.post("/api/v1/auth",authrout)

app.listen(4000,()=>{
console.log('code is running on port ', 4000)
})