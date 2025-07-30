const { localsName } = require('ejs');
const express = require('express')

const port = 8000;

const app = express()

app.set('view engine', 'ejs')

const todolist = [
    { id: 1, todo: 'shailesh' },
    { id: 2, todo: 'xyz' }
]
app.use(express.urlencoded()); 

app.get('/', (req, res) => {
    return res.render('todo', {
        todolist: todolist
    })
})

app.post('/addtodo', (req, res) => {

    let obj = {
        id: Math.floor(Math.random() * 100000),
        todo: req.body.todo
    }
    todolist.push(obj)
    console.log('record add');
    return res.redirect('/')
    
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false
    }
    console.log(`server start is on port:-${port}`);
})