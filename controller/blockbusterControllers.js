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


const getBlockbusterMovies = async (req, res) => {
    try {
        const result = await db.find().toArray();
        const data = result[0]?.Movies;
        res.send({
            success: true,
            data: data
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error,
        });
    }
}

module.exports = { getBlockbusterMovies }
