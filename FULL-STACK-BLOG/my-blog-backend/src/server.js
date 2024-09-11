import express from 'express';
import { db, ConnetToDb} from './db.js';


const app = express();
app.use(express.json());


app.get('/api/articles/:name', async (req, res) => {
    const { name } = req.params;


    const article = await db.collection('articles').findOne({ name });

    if(article){
        res.json(article);
    }
    else{
        res.sendStatus(404);
    }
    

})

app.put('/api/articles/:name/upvote', async (req, res) => {
    const { name } = req.params;
    
    db.collection('articles').updateOne({ name }, {
        $inc: { upvotes: 1},
    });

    const article = await db.collection('articles').findOne({ name });

    if(article){
        // article.upvotes++;
        res.send(`The article ${name} now has ${article.upvotes} upvotes!!!`);
    }
    else{
        res.send(`That article doesn't exist.`);
    }

})

app.post('/api/articles/:name/comments', async (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;

    db.collection('articles').updateOne({ name }, {
        $push: { comments: { postedBy, text } }
    });


    const article = await db.collection('articles').findOne({ name });

    if(article){
        res.send(article.comments);
    }
    else{
        res.send(`That article doesn't exist.`);
    }
})

app.get('/', (req, res) => {
    res.send('Hello World!!!');
})

ConnetToDb(() => {
    console.log('Connected to DB');
    app.listen(8000, ()=>{
        console.log('Server is running on port 8000');
    })
})

