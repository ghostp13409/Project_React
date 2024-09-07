import express from 'express';


const articlesInfo = [
    {
        name: 'learn-react',
        upvotes: 0,
        comments: []
    },
    {
        name: 'learn-node',
        upvotes: 0,
        comments: []
    },
    {
        name: 'mongodb',
        upvotes: 0,
        comments: []
    }
]

const app = express();
app.use(express.json());

app.put('/api/articles/:name/upvote', (req, res) => {
    const { name } = req.params;
    const article = articlesInfo.find(a => a.name === name);
    if(article){
        article.upvotes++;
        res.send(`The article ${name} now has ${article.upvotes} upvotes!!!`);
    }
    else{
        res.send(`That article doesn't exist.`);
    }

})

app.post('/api/articles/:name/comments', (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;

    const article = articlesInfo.find(a => a.name === name);
    if(article){
        article.comments.push({postedBy, text});
        res.send(article.comments);
    }
    else{
        res.send(`That article doesn't exist.`);
    }
})

app.listen(8000, ()=>{
    console.log('Server is running on port 8000');
})