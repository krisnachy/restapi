const express = require('express')
let posts = require('./db/post.json')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/api/v1/posts', (req, res) => {
    res.status(200).json(posts)
})

app.post('/api/v1/posts', (req, res) => {
    const {title, body} = req.body

    const id = posts[posts.length - 1].id + 1
    const data = {
        id, title, body
    }

    posts.push(data)
    res.status(201).json(data)
})

app.get('/api/v1/posts/:id', (req, res) => {
    const data = posts.find(i => i.id === +req.params.id)
    res.status(200).json(data)
})

//update
app.put('/api/v1/posts/:id', (req, res) => {
    let post = posts.find(i => i.id === +req.params.id)

    const params = {title: req.body.title, body: req.body.body} 
    post = { ...post, ...params}
    
    posts = posts.map(i => i.id === post.id ? post : i)
    res.status(200).json(post)
})

app.listen(3000, () => {
    console.log('Server nyala di PORT 3000')
})