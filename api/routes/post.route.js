import express from "express"
const router = express.Router()

router.get('/test', (req, res) =>{
    console.log("router works!")
    res.send("Test route is working!")
})
// router.post('/test', (req, res) =>{
//     console.log("router works!")
//     res.send("Test route is working!")
// })
// router.put('/test', (req, res) =>{
//     console.log("router works!")
//     res.send("Test route is working!")
// })
// router.delete('/test', (req, res) =>{
//     console.log("router works!")
//     res.send("Test route is working!")
// })

export default router;