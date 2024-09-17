import { MongoClient } from "mongodb";

let db;

async function ConnetToDb(cb){
    const client = new MongoClient('mongodb://localhost:27017/')
    await client.connect();

    const db = client.db('react-blog-db');
    cb();
}

export {
    db,
    ConnetToDb,
};