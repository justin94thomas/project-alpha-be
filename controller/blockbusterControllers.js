const { mongoDB } = require('../config/common');
const { MongoClient, ObjectId } = require('mongodb');
const mongoURL = mongoDB.connectionURL;
const client = new MongoClient(mongoURL);
const DATABASE = mongoDB.DATABASE;
const COLLECTIONNAME = 'blockbuster';
let db = null;

(async function connect(database = DATABASE, collectionName = COLLECTIONNAME) {
    try {
        const conn = await client.connect();
        const dbConnect = conn.db(database);
        db = dbConnect.collection(collectionName);
    } catch (err) {
        console.error(err);
        throw err;
    }
})()


module.exports = {}
