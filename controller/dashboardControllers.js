const { mongoDB } = require('../config/common');
const { MongoClient, ObjectId } = require('mongodb');
const mongoURL = mongoDB.connectionURL;
const client = new MongoClient(mongoURL);
const DATABASE = mongoDB.DATABASE;
const COLLECTIONNAME = 'dashboard';
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

const getDashboardProjects = async (req, res) => {
    try {
        const result = await db.find().toArray();
        res.send({
            success: true,
            data: result
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error,
        });
    }
}
const searchDashboardProjects = async (req, res) => {
    try {
        const result = await db.find().toArray();
        const searchTerm = String(req.params.search).toLowerCase();
        const found = result.filter(project => project?.Name.includes(searchTerm));
        if (found.length > 0) {
            res.send({
                success: true,
                data: found
            });
        } else {
            res.send({
                success: true,
                message: "No records found matching the search term."
            });
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.toString(),
        });
    }
}


module.exports = { getDashboardProjects, searchDashboardProjects }