const express = require('express');
const app = express();

// este es el prmer ejemplo para mandar info  desde express
/* app.use((req,res) => {
    console.log("we got a new request")
    res.send('C:\Users\mmuro\OneDrive - Joyson Group\Documents\web bootcamp udemy\express\firstApp\main.html')
}) */
// ++++++++++++aqui empezare otro ejemplo leccion 343 udemy
app.get('/R/:subreddit', (req,res) => {
    res.send('This is a subreddi!')
    let result = req.params;
    console.log(result);

})
app.get('/search?',(req,res,) => {
    console.log(req.query)
    const { q } = req.query;
    if(!q) {
        res.send('nothing to search')
    }
    res.send(`<h1>Search result for ${q}<h1>`)
    
})

app.get('/',(req,res) => {
    res.send('This is the Home page')
})
app.get('/cats',(req,res) => {
      res.send('Meow!!')
})



app.listen(3000, () => {
    console.log(`Example app listening on por 3000`)
})

