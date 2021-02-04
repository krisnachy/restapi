const express = require('express')
let posts = require('./db/post.json')
const app = express()

app.get('/api/v1/posts', (req, res) => {
    res.status(200).json(posts)
})

app.get('/api/v1/posts/:id', (req, res) => {
    const data = posts.find(i => i.id === +req.params.id)
    res.status(200).json(data)
})

app.listen(3000, () => {
    console.log('Server nyala di PORT 3000')
})