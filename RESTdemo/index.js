const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');


app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded is middleware to pars the data from form
app.use(express.json()) // to recived data in JSON form
// con esto comandos usas la carpeta de views donde guardas las paginas ejs
// tambien usas la const path 
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs' )

// esto hzio un array de coments 
let comments = [
    {
        id:uuid(),
        username:'Todd',
        comment: 'Lol that is so funny!'
    },
    {
        id:uuid(),
        username:'Skyler',
        comment: 'I like booms!'
    },
    {
        id:uuid(),
        username:'Sk8terB0i',
        comment: 'Plz delete u acct Todd!'
    },
    {
        id:uuid(),
        username:'Onlysayswoo',
        comment: 'woof wooof!'
    }
];

// termina el array

// aqui esribo los app.XXX
app.get('/comments', (req,res) => {
    res.render('comments/index', {comments})
})

app.get('/comments/new', (req,res) => {
    res.render('comments/new');
} )
app.post('/comments',(req,res)  => {
    const { username, comment} = req.body;
    comments.push({username, comment, id:uuid() });
    res.redirect('/comments');
})
app.patch('/comments/:id', (req,res)  => {
    const { id} =req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find( c => c.id === id );
    foundComment.comment = newCommentText;
   res.redirect('/comments')
} )
app.delete('/comments/:id' ,(req,res)  => {
    const { id} =req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments')
    
})

app.get('/comments/:id', (req,res)  => {
    const { id} =req.params;
    const comment =comments.find( c => c.id === id );
    res.render('comments/show' , {comment});
})

app.get('/comments/:id/edit', (req,res) => {
    const { id} =req.params;
    const comment =comments.find( c => c.id === id );
    res.render('comments/edit' , {comment})
})

app.get('/tacos', (req,res) => {
   res.send("GET /tacos respone")
})

app.post('/tacos', (req,res) => {
   const {meat, qty} = req.body;
    res.send(`OK, here youre order:${meat} ${qty}`)
})

app.listen(3000, () => {
    console.log('On port 3000!')
});